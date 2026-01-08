import { NextResponse } from "next/server";
import { signAdminToken, comparePassword } from "@/lib/auth";
import { hashPassword } from "@/lib/auth";

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@mithila.com";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";

export async function POST(req: Request) {
  const { email, password } = await req.json();
  if (email !== ADMIN_EMAIL) return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });

  const valid = await comparePassword(password, await hashPassword(ADMIN_PASSWORD));
  if (!valid) return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });

  const token = signAdminToken({ id: "admin", email: ADMIN_EMAIL, role: "admin" });
  return NextResponse.json({ token });
}
