"use client";

import { useState } from "react";

type Props = {
  id: string | number;
  initialStatus: string;
};

export default function StatusSelect({ id, initialStatus }: Props) {
  const [status, setStatus] = useState(initialStatus || "New");
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  async function updateStatus(nextStatus: string) {
    const previousStatus = status;
    setStatus(nextStatus);
    setSaving(true);
    setMessage("");

    try {
      const response = await fetch("/api/admin/enquiries/status", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: nextStatus }),
      });

      const result = await response.json();

      if (!response.ok) {
        setStatus(previousStatus);
        setMessage(result.error || "Update failed");
      } else {
        setMessage("Saved");
      }
    } catch {
      setStatus(previousStatus);
      setMessage("Network error");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="mt-4 flex flex-wrap items-center gap-3">
      <label className="text-sm text-slate-300" htmlFor={`status-${id}`}>
        Status
      </label>
      <select
        id={`status-${id}`}
        value={status}
        disabled={saving}
        onChange={(event) => updateStatus(event.target.value)}
        className="rounded-lg border border-white/20 bg-slate-900 px-3 py-2 text-sm text-white disabled:opacity-50"
      >
        <option value="New">New</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <span className="text-sm text-slate-400">
        {saving ? "Saving..." : message}
      </span>
    </div>
  );
}
