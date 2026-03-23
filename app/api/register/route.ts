import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, role, organization } = await req.json();

    // Validate required fields
    if (!name || !email || !phone || !role) {
      return NextResponse.json(
        { error: 'Name, email, phone number, and role are required.' },
        { status: 400 }
      );
    }

    // Create Nodemailer transporter using Gmail + App Password from .env
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,       // your Gmail address
        pass: process.env.GMAIL_APP_PASSWORD, // Gmail App Password (not your login password)
      },
    });

    // ── Email 1: Notification to YOU (aadityadagr@gmail.com) ──
    await transporter.sendMail({
      from: `"AlignAI Registrations" <${process.env.GMAIL_USER}>`,
      to: 'aadityadagr@gmail.com',
      subject: `New Early Access Registration — ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto; background: #0d1117; color: #e6edf3; padding: 32px; border-radius: 12px;">
          <div style="margin-bottom: 24px;">
            <span style="background: linear-gradient(to right, #a855f7, #10b981); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-size: 22px; font-weight: 800;">AlignAI</span>
            <span style="margin-left: 8px; font-size: 12px; background: rgba(168,85,247,0.15); color: #c084fc; padding: 2px 10px; border-radius: 999px; border: 1px solid rgba(168,85,247,0.3);">New Registration</span>
          </div>
          <h2 style="font-size: 18px; font-weight: 700; margin: 0 0 20px;">You have a new early access request</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06); color: #8b949e; font-size: 13px; width: 120px;">Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06); font-size: 13px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06); color: #8b949e; font-size: 13px;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06); font-size: 13px;"><a href="mailto:${email}" style="color: #10b981; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06); color: #8b949e; font-size: 13px;">Phone</td>
              <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06); font-size: 13px;"><a href="tel:${phone}" style="color: #10b981; text-decoration: none;">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06); color: #8b949e; font-size: 13px;">Role</td>
              <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06); font-size: 13px;">${role}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #8b949e; font-size: 13px;">Organization</td>
              <td style="padding: 10px 0; font-size: 13px;">${organization || 'Not provided'}</td>
            </tr>
          </table>
          <p style="margin-top: 24px; font-size: 12px; color: #8b949e;">Submitted at ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</p>
        </div>
      `,
    });

    // ── Email 2: Confirmation to the person who registered ──
    await transporter.sendMail({
      from: `"AlignAI" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: 'You are on the AlignAI early access list!',
      html: `
        <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto; background: #0d1117; color: #e6edf3; padding: 32px; border-radius: 12px;">
          <div style="margin-bottom: 28px;">
            <span style="font-size: 22px; font-weight: 800; color: #fff;">Align<span style="color: #a855f7;">AI</span></span>
          </div>

          <h1 style="font-size: 24px; font-weight: 800; margin: 0 0 8px; line-height: 1.2;">
            Hey ${name}, you are in! 🎉
          </h1>
          <p style="color: #8b949e; font-size: 14px; margin: 0 0 28px;">
            Welcome to the AlignAI early access list.
          </p>

          <div style="background: rgba(168,85,247,0.08); border: 1px solid rgba(168,85,247,0.2); border-radius: 10px; padding: 20px; margin-bottom: 28px;">
            <p style="margin: 0 0 12px; font-size: 14px; font-weight: 600; color: #c084fc;">What happens next</p>
            <ul style="margin: 0; padding: 0 0 0 16px; color: #8b949e; font-size: 13px; line-height: 2;">
              <li>We are putting the finishing touches on AlignAI</li>
              <li>You will be among the first to get access on launch day</li>
              <li>As an early member you get founding member pricing</li>
              <li>Your feedback will directly shape what we build</li>
            </ul>
          </div>

          <div style="background: rgba(16,185,129,0.08); border: 1px solid rgba(16,185,129,0.2); border-radius: 10px; padding: 20px; margin-bottom: 28px;">
            <p style="margin: 0 0 8px; font-size: 14px; font-weight: 600; color: #10b981;">Your contact details</p>
            <p style="margin: 0; color: #8b949e; font-size: 13px;">
              We'll reach out to you at:<br/>
              <strong style="color: #e6edf3;">${email}</strong><br/>
              <strong style="color: #e6edf3;">${phone}</strong>
            </p>
          </div>

          <p style="font-size: 14px; color: #8b949e; margin: 0 0 8px;">
            Questions before launch? Reply to this email or write to us at
          </p>
          <a href="mailto:aadityadagr@gmail.com" style="color: #10b981; font-size: 14px; text-decoration: none;">aadityadagr@gmail.com</a>

          <hr style="border: none; border-top: 1px solid rgba(255,255,255,0.06); margin: 32px 0 20px;" />
          <p style="font-size: 11px; color: #484f58; margin: 0;">
            You are receiving this because you registered at alignai.app. If this was a mistake, simply ignore this email.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error('Registration email error:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again.' },
      { status: 500 }
    );
  }
}