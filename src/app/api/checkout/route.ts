import { NextResponse } from "next/server";
import Razorpay from "razorpay";

const keyId = process.env.RAZORPAY_KEY_ID;
const keySecret = process.env.RAZORPAY_KEY_SECRET;

export async function POST(req: Request) {
  const body = await req.json();
  const amount = Math.round(body.amount || 0) * 100; // convert to paise

  if (!keyId || !keySecret) {
    return NextResponse.json({
      id: `order_fake_${Date.now()}`,
      amount,
      currency: "INR",
      note: "Razorpay keys missing, using placeholder",
    });
  }

  try {
    const razorpay = new Razorpay({ key_id: keyId, key_secret: keySecret });
    const order = await razorpay.orders.create({ amount, currency: "INR" });
    return NextResponse.json(order);
  } catch (error) {
    return NextResponse.json({ error: "Failed to create payment order" }, { status: 500 });
  }
}
