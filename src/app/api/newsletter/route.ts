import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Newsletter from '@/models/Newsletter';

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { success: false, message: 'Email is required' },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existing = await Newsletter.findOne({ email });
    
    if (existing) {
      if (existing.isActive) {
        return NextResponse.json(
          { success: false, message: 'Email already subscribed' },
          { status: 400 }
        );
      } else {
        // Reactivate subscription
        existing.isActive = true;
        await existing.save();
        return NextResponse.json({ success: true, message: 'Subscription reactivated!' });
      }
    }

    // Create new subscription
    await Newsletter.create({ email });

    return NextResponse.json(
      { success: true, message: 'Successfully subscribed to newsletter!' },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error subscribing to newsletter:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to subscribe' },
      { status: 500 }
    );
  }
}
