import { NextResponse } from "next/server";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/server";

export async function POST(request: Request) {
  const authClient = await createClient();
  const { data, error } = await authClient.auth.getUser();

  if (error || !data.user) {
    return NextResponse.json({ error: "Please log in." }, { status: 401 });
  }

  const adminEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase();

  if (!adminEmail || data.user.email?.toLowerCase() !== adminEmail) {
    return NextResponse.json({ error: "Access denied." }, { status: 403 });
  }

  let body: { id?: string | number; status?: string };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const allowedStatuses = ["New", "In Progress", "Completed"];

  if (
    (typeof body.id !== "string" && typeof body.id !== "number") ||
    !allowedStatuses.includes(body.status || "")
  ) {
    return NextResponse.json({ error: "Invalid enquiry or status." }, { status: 400 });
  }

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SECRET_KEY;

  if (!url || !key) {
    return NextResponse.json({ error: "Server configuration missing." }, { status: 500 });
  }

  const db = createSupabaseClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const { error: updateError } = await db
    .from("enquiries")
    .update({ status: body.status })
    .eq("id", body.id);

  if (updateError) {
    return NextResponse.json({ error: "Could not update status." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
