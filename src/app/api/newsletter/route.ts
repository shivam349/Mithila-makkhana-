import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email } = await req.json();
  if (!email) return NextResponse.json({ error: "Email required" }, { status: 400 });
  // Placeholder: integrate with Mailchimp/Sendgrid later
  return NextResponse.json({ success: true });
}
