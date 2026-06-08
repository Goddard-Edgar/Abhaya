import crypto from 'crypto'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, productName, size } = await req.json()

    const body = `${razorpay_order_id}|${razorpay_payment_id}`
    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET!)
      .update(body)
      .digest('hex')

    if (expectedSignature !== razorpay_signature) {
      return NextResponse.json({ verified: false }, { status: 400 })
    }

    // Log verified order — connect to database/email when ready
    console.log('ABHAYA Order Verified:', {
      paymentId: razorpay_payment_id,
      orderId: razorpay_order_id,
      productName,
      size,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({ verified: true, paymentId: razorpay_payment_id })
  } catch (err) {
    console.error('Payment verification failed:', err)
    return NextResponse.json({ error: 'Verification failed' }, { status: 500 })
  }
}
