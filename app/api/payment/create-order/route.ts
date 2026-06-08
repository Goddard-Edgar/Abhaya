import Razorpay from 'razorpay'
import { NextRequest, NextResponse } from 'next/server'

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
})

export async function POST(req: NextRequest) {
  try {
    const { amount, productName, productSlug, size } = await req.json()

    if (!amount || !productName) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const order = await razorpay.orders.create({
      amount: amount * 100, // Razorpay expects paise
      currency: 'INR',
      receipt: `rcpt_${productSlug}_${Date.now()}`,
      notes: { productName, productSlug, size },
    })

    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId: process.env.RAZORPAY_KEY_ID,
    })
  } catch (err) {
    console.error('Razorpay order creation failed:', err)
    return NextResponse.json({ error: 'Order creation failed' }, { status: 500 })
  }
}
