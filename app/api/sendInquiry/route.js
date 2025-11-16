import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const data = await req.json();

    // Create transporter for Yahoo Mail
    // Make sure EMAIL_USER and EMAIL_PASSWORD are set in .env.local
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.error('Email credentials not configured. Please set EMAIL_USER and EMAIL_PASSWORD in .env.local');
      return Response.json(
        { 
          success: false, 
          message: 'Email service not configured. Please contact the administrator.' 
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.mail.yahoo.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER, // Your Yahoo email
        pass: process.env.EMAIL_PASSWORD, // Your Yahoo app password
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER || 'iratoursandtravel@yahoo.com',
      to: 'iratoursandtravel@yahoo.com',
      subject: `New Travel Inquiry - ${data.service || 'General'}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #2563eb 0%, #06b6d4 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #2563eb; margin-bottom: 5px; display: block; }
            .value { background: white; padding: 12px; border-radius: 5px; border-left: 4px solid #2563eb; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>✈️ New Travel Inquiry</h1>
              <p>IRA Tours & Travels</p>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Full Name:</span>
                <div class="value">${data.name || 'Not provided'}</div>
              </div>
              
              <div class="field">
                <span class="label">Email Address:</span>
                <div class="value">${data.email || 'Not provided'}</div>
              </div>
              
              ${data.phone ? `
              <div class="field">
                <span class="label">Phone Number:</span>
                <div class="value">${data.phone}</div>
              </div>
              ` : ''}
              
              <div class="field">
                <span class="label">Service Needed:</span>
                <div class="value">${data.service || 'Not specified'}</div>
              </div>
              
              <div class="field">
                <span class="label">Message:</span>
                <div class="value">${data.message ? data.message.replace(/\n/g, '<br>') : 'No message provided'}</div>
              </div>
              
              <div class="footer">
                <p>This inquiry was submitted through the IRA Tours & Travels website.</p>
                <p>Please respond to the customer at: ${data.email || 'Email not provided'}</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
New Travel Inquiry - IRA Tours & Travels

Full Name: ${data.name || 'Not provided'}
Email: ${data.email || 'Not provided'}
Phone: ${data.phone || 'Not provided'}
Service: ${data.service || 'Not specified'}

Message:
${data.message || 'No message provided'}

---
This inquiry was submitted through the IRA Tours & Travels website.
Please respond to: ${data.email || 'Email not provided'}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    console.log('Inquiry email sent successfully');

    return Response.json({ 
      success: true, 
      message: 'Inquiry sent successfully!' 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return Response.json(
      { 
        success: false, 
        message: 'Failed to send inquiry. Please try again later.' 
      },
      { status: 500 }
    );
  }
}
