import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { Order } from "@/lib/models/Order";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase();
    const order = await Order.findOne({ orderNumber: params.id }).lean();
    if (!order) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json({ order });
  } catch (error) {
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
