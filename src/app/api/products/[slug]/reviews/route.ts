import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Product from '@/models/Product';
import Review from '@/models/Review';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    await connectDB();

    // Find product by slug
    const product = await Product.findOne({ slug: params.slug });
    
    if (!product) {
      return NextResponse.json(
        { success: false, message: 'Product not found' },
        { status: 404 }
      );
    }

    // Get reviews for this product
    const reviews = await Review.find({ product: product._id }).sort({ createdAt: -1 });

    return NextResponse.json({ success: true, reviews });
  } catch (error: any) {
    console.error('Error fetching reviews:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch reviews' },
      { status: 500 }
    );
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    await connectDB();

    const body = await request.json();

    // Find product by slug
    const product = await Product.findOne({ slug: params.slug });
    
    if (!product) {
      return NextResponse.json(
        { success: false, message: 'Product not found' },
        { status: 404 }
      );
    }

    // Create review
    const review = await Review.create({
      ...body,
      product: product._id,
    });

    return NextResponse.json({ success: true, review }, { status: 201 });
  } catch (error: any) {
    console.error('Error creating review:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Failed to create review' },
      { status: 500 }
    );
  }
}
