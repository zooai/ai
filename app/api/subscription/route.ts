import Stripe from "stripe";
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server'
// export async function GET(req: NextApiRequest, res: NextApiResponse) {
  
//   const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY || '', {
//     apiVersion: '2022-11-15',
//   })
//   console.log(req);
//   const { route } = req.query;
//   const product = await stripe.products.retrieve(String(route));

//     const params: Stripe.Checkout.SessionCreateParams = {
//         payment_method_types: ['card'],
//         line_items: [
//             {
//               price: String(product.default_price),
//               quantity: 1,
//             }
//           ],
//         mode: 'payment',
//         success_url: `${process.env.NEXT_PUBLIC_HOST}?result=success`,
//         cancel_url: `${process.env.NEXT_PUBLIC_HOST}?result=cancelled`,
//     };
//     const checkoutSession: Stripe.Checkout.Session = await stripe.checkout.sessions.create(
//         params
//     );
//     console.log(checkoutSession);
//   res.send({
//     id: checkoutSession.id
//   });
// };

export async function GET(request: Request) {
  // The `/auth/callback` route is required for the server-side auth flow implemented
  // by the Auth Helpers package. It exchanges an auth code for the user's session.
  // https://supabase.com/docs/guides/auth/auth-helpers/nextjs#managing-sign-in-with-code-exchange
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')
  const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY || '', {
    apiVersion: '2022-11-15',
  })
  // const { route } = requestUrl.query;
  const product = await stripe.products.retrieve(String(code));

    const params: Stripe.Checkout.SessionCreateParams = {
        payment_method_types: ['card'],
        line_items: [
            {
              price: String(product.default_price),
              quantity: 1,
            }
          ],
        mode: 'subscription',
        success_url: `${process.env.NEXT_PUBLIC_HOST}?result=success`,
        cancel_url: `${process.env.NEXT_PUBLIC_HOST}?result=cancelled`,
    };
    const checkoutSession: Stripe.Checkout.Session = await stripe.checkout.sessions.create(
        params
    );
    console.log(requestUrl);
  return new Response(String(checkoutSession.id), {
    status: 200
  })

  // URL to redirect to after sign in process completes
  // return NextResponse.redirect(requestUrl.origin)
}