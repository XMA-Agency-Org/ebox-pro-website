import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  industry: string;
  website?: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, company, phone, industry, website, message } = body;

    if (!name || !email || !company || !phone || !industry || !message) {
      return NextResponse.json(
        { error: "All required fields must be filled" },
        { status: 400 }
      );
    }

    const teamEmailPromise = resend.emails.send({
      from: "Ebox Pro Website <noreply@notifications.eboxprologistics.com>",
      to: [
        "hi@eboxprologistics.com",
        "Sales@eboxprologistics.com",
        "Ali@eboxprologistics.com",
        "Tej@eboxprologistics.com",
      ],
      replyTo: email,
      subject: `New Assessment Request from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Name:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="tel:${phone}">${phone}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Company:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${company}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Industry:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${industry}</td>
          </tr>
          ${website ? `
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Website:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="${website}" target="_blank">${website}</a></td>
          </tr>
          ` : ""}
          <tr>
            <td style="padding: 8px; vertical-align: top;"><strong>Message:</strong></td>
            <td style="padding: 8px;">${message.replace(/\n/g, "<br>")}</td>
          </tr>
        </table>
      `,
    });

    const confirmationEmailPromise = resend.emails.send({
      from: "Ebox Pro Logistics <noreply@notifications.eboxprologistics.com>",
      to: email,
      subject: "Thank you for contacting Ebox Pro Logistics",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <p>Dear ${name},</p>
          <p>Thank you for reaching out! Your inquiry has been received. A member of our team will review your details and get back to you within 24 hrs.</p>
          <p>Regards,<br>Ebox Pro Logistics</p>
        </div>
      `,
    });

    const [teamEmailResult, confirmationEmailResult] = await Promise.all([
      teamEmailPromise,
      confirmationEmailPromise,
    ]);

    if (teamEmailResult.error) {
      console.error("Team email error:", teamEmailResult.error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    if (confirmationEmailResult.error) {
      console.error("Confirmation email error:", confirmationEmailResult.error);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
