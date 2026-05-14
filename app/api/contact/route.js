import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    const { name, email, message } = body;

    if (!name || !email || !message) {
      return Response.json(
        {
          success: false,
          message: "All fields are required",
        },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",

      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,

      to: process.env.EMAIL_USER,

      replyTo: email,

      subject: `New message from ${name}`,

      html: `
        <div style="font-family:sans-serif;padding:20px;">
          <h2>New Portfolio Message</h2>

          <p>
            <strong>Name:</strong> ${name}
          </p>

          <p>
            <strong>Email:</strong> ${email}
          </p>

          <p>
            <strong>Message:</strong>
          </p>

          <div style="padding:12px;background:#f4f4f4;border-radius:8px;">
            ${message}
          </div>
        </div>
      `,
    });

    return Response.json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.log(error);

    return Response.json(
      {
        success: false,
        message: "Something went wrong",
      },
      { status: 500 }
    );
  }
}