import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Order from '@/models/Order';
import Product from '@/models/Product';
import { generateOrderNumber } from '@/lib/utils';

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const searchParams = request.nextUrl.searchParams;
    const orderNumber = searchParams.get('orderNumber');

    if (orderNumber) {
      const order = await Order.findOne({ orderNumber }).populate('items.product');
      
      if (!order) {
        return NextResponse.json(
          { success: false, message: 'Order not found' },
          { status: 404 }
        );
      }

      return NextResponse.json({ success: true, order });
    }

    // Get all orders (for admin)
    const orders = await Order.find().sort({ createdAt: -1 }).populate('items.product');

    return NextResponse.json({ success: true, orders });
  } catch (error: any) {
    console.error('Error fetching orders:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch orders' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();

    // Generate unique order number
    const orderNumber = generateOrderNumber();

    // Update product stock
    for (const item of body.items) {
      const product = await Product.findById(item.product);
      if (product) {
        if (product.stock < item.quantity) {
          return NextResponse.json(
            { success: false, message: `Insufficient stock for ${product.name}` },
            { status: 400 }
          );
        }
        product.stock -= item.quantity;
        await product.save();
      }
    }

    // Create order
    const order = await Order.create({
      ...body,
      orderNumber,
    });

    return NextResponse.json({ success: true, order }, { status: 201 });
  } catch (error: any) {
    console.error('Error creating order:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Failed to create order' },
      { status: 500 }
    );
  }
}
