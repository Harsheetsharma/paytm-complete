import Stripe from "stripe";
import { NextResponse, NextRequest } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2025-06-30.basil'
})

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: [
                {
                    price_data: {
                        currency: 'inr',
                        product_data: {
                            name: "paytm wallet top-up",
                            description: "Adding money to wallet"
                        },
                        unit_amount: body.amount * 100,
                    },
                    quantity: 1
                }
            ],
            success_url: `http://localhost:3000/success`,
            cancel_url: 'http://localhost:3000/cancel',
        });
        return NextResponse.json({
            url: session.url
        });
    } catch (err) {
        console.log(err);
        return NextResponse.json(
            { error: "something went wrong!" },
            { status: 400 }
        )
    }
}