
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { cart, customer } = req.body;

    const orderDetails = `New Order Received\n\nCustomer:\nName: ${customer.name}\nEmail: ${customer.email}\nAddress: ${customer.address}\n\nItems:\n${cart
      .map((item) => `${item.name} - $${item.price}`)
      .join('\n')}`;

    try {
      const data = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'mzresells01@gmail.com',
        subject: 'New Order from Mzresellsz',
        text: orderDetails,
      });

      res.status(200).json({ message: 'Order received and email sent!', data });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to send email', error });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
