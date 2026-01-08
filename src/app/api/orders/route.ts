import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { Order } from "@/lib/models/Order";
import { verifyAdminToken } from "@/lib/auth";

const genOrderNumber = () => `MM-${new Date().getFullYear()}-${Math.floor(Math.random() * 9000 + 1000)}`;

export async function GET(req: Request) {
  const token = req.headers.get("authorization")?.replace("Bearer ", "");
  if (token && !verifyAdminToken(token)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    await connectToDatabase();
    const orders = await Order.find().sort({ createdAt: -1 }).lean();
    return NextResponse.json({ orders });
  } catch (error) {
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    await connectToDatabase();
    const orderNumber = genOrderNumber();
    const created = await Order.create({ ...body, orderNumber, status: "processing" });
    return NextResponse.json({ orderNumber, order: created }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 });
  }
}
