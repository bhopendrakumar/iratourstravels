export async function POST(req) {
  const data = await req.json();

  console.log("New Inquiry:", data);

  // You can later integrate:
  // await resend.emails.send({...}) OR nodemailer.createTransport(...)

  return Response.json({ success: true });
}
