import StatusSelect from "./StatusSelect";
import LogoutButton from "./LogoutButton";

 
import { redirect } from "next/navigation";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/server";

export const instant = false;

export default async function AdminPage() {
  const authClient = await createClient();
  const { data, error } = await authClient.auth.getUser();

  if (error || !data.user) {
    redirect("/admin/login");
  }

  const adminEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase();

  if (!adminEmail || data.user.email?.toLowerCase() !== adminEmail) {
    return (
      <main className="min-h-screen bg-slate-950 p-8 text-white">
        <h1 className="text-2xl font-bold">Access denied</h1>
        <p className="mt-2">This account is not authorized to manage enquiries.</p>
      </main>
    );
  }

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SECRET_KEY;

  if (!url || !key) {
    return (
      <main className="min-h-screen bg-slate-950 p-8 text-white">
        Supabase server configuration is missing.
      </main>
    );
  }

  const db = createSupabaseClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const { data: enquiries, error: dbError } = await db
    .from("enquiries")
    .select("id, name, email, phone, company, service, budget, timeline, message, created_at, status")
    .order("created_at", { ascending: false });

  return (
    <main className="min-h-screen bg-slate-950 p-6 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium text-cyan-400">ETHIXWEB</p>
        <h1 className="mt-2 text-3xl font-bold">Admin Dashboard</h1>
        <div className="mt-2 flex flex-wrap items-center justify-between gap-4">
  <p className="text-slate-300">Signed in as {data.user.email}</p>
  <LogoutButton />
</div>

        <section className="mt-8 rounded-xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold">
            Contact Enquiries ({enquiries?.length ?? 0})
          </h2>

          {dbError ? (
            <p className="mt-4 text-red-400">
              Could not load enquiries. Check the server configuration.
            </p>
          ) : !enquiries?.length ? (
            <p className="mt-4 text-slate-300">No enquiries found yet.</p>
          ) : (
            <div className="mt-5 space-y-4">
              {enquiries.map((item) => (
                <article key={item.id} className="rounded-lg border border-white/10 p-4">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="mt-1 text-cyan-300">{item.email}</p>
                  <p className="mt-1 text-sm text-slate-300">
                    {item.company || "No company"} · {item.service || "No service selected"}
                  </p>
                  <p className="mt-3 whitespace-pre-wrap">{item.message}</p>
                  <StatusSelect id={item.id} initialStatus={item.status || "New"} />
                  <p className="mt-3 text-xs text-slate-400">
                    {item.created_at ? new Date(item.created_at).toLocaleString("en-IN") : ""}
                  </p>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}









