
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";



const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SECRET_KEY;
const resendKey = process.env.RESEND_API_KEY;

console.log("Environment check:", {
  supabaseUrl: Boolean(supabaseUrl),
  supabaseKey: Boolean(supabaseKey),
  resendKey: Boolean(resendKey),
});

export async function POST(request: Request) {
  try {
    if (!supabaseUrl || !supabaseKey || !resendKey) {
      console.error("Missing required server environment variables.");
      return NextResponse.json(
        { error: "Server configuration is incomplete." },
        { status: 500 }
      );
    }

    const body = await request.json();

    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const phone = typeof body.phone === "string" ? body.phone.trim() : "";
    const company = typeof body.company === "string" ? body.company.trim() : "";
    const service = typeof body.service === "string" ? body.service.trim() : "";
    const budget = typeof body.budget === "string" ? body.budget.trim() : "";
    const timeline = typeof body.timeline === "string" ? body.timeline.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (
      name.length < 2 || name.length > 100 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      email.length > 254 ||
      !service || service.length > 150 ||
      message.length < 10 || message.length > 3000
    ) {
      return NextResponse.json(
        { error: "Please check the required form fields." },
        { status: 400 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseKey);
    const resend = new Resend(resendKey);

    const { data, error } = await supabase
      .from("enquiries")
      .insert({
        name,
        email,
        phone: phone || null,
        company: company || null,
        service,
        budget: budget || null,
        timeline: timeline || null,
        message,
      })
      .select("id")
      .single();

    if (error) {
      console.error("Enquiry database insert failed:", error.message);
      return NextResponse.json(
        { error: "Could not save your enquiry. Please try again." },
        { status: 500 }
      );
    }

    const receiver = process.env.ENQUIRY_RECEIVER_EMAIL;
    const sender = process.env.RESEND_FROM_EMAIL;

    if (!receiver || !sender) {
      console.error("Email receiver or sender is not configured.");
      return NextResponse.json({
        success: true,
        enquiryId: data.id,
        emailSent: false,
        message: "Enquiry saved, but email is not configured yet.",
      });
    }

    const { error: emailError } = await resend.emails.send({
      from: sender,
      to: [receiver],
      subject: `New Ethixweb enquiry: ${service}`,
      text: [
        `Enquiry ID: ${data.id}`,
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        `Company: ${company || "Not provided"}`,
        `Service: ${service}`,
        `Budget: ${budget || "Not provided"}`,
        `Timeline: ${timeline || "Not provided"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    if (emailError) {
      console.error("Enquiry email failed:", emailError.message);
      return NextResponse.json({
        success: true,
        enquiryId: data.id,
        emailSent: false,
        message: "Enquiry saved, but email notification failed.",
      });
    }

    return NextResponse.json({
      success: true,
      enquiryId: data.id,
      emailSent: true,
      message: "Your enquiry has been submitted successfully.",
    });
  } catch (error) {
    console.error("Unexpected enquiry API error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
