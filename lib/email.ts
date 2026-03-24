import { Resend } from "resend";
import QRCode from "qrcode";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.RESEND_FROM_EMAIL || "noreply@example.com";
const siteUrl =
  process.env.SITE_URL ||
  process.env.NEXT_PUBLIC_SITE_URL ||
  "http://localhost:3001";

export async function sendTicketEmail({
  to,
  ticketId,
  productName,
  quantity,
  totalCents,
}: {
  to: string;
  ticketId: string;
  productName: string;
  quantity: number;
  totalCents: number;
}) {
  const verifyUrl = `${siteUrl}/verify/${ticketId}`;
  const qrDataUrl = await QRCode.toDataURL(verifyUrl, {
    width: 200,
    margin: 2,
    color: { dark: "#1A1B2E", light: "#FFFFFF" },
  });

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: system-ui, sans-serif; line-height: 1.6; color: #1A1B2E; max-width: 480px; margin: 0 auto; padding: 24px;">
  <h1 style="color: #D94811; font-size: 24px; margin-bottom: 8px;">NWI Fun Ball</h1>
  <p style="font-size: 18px; font-weight: bold; margin-bottom: 24px;">Your Ticket</p>
  
  <div style="background: #F3E8EE; border-radius: 12px; padding: 24px; margin-bottom: 24px; text-align: center;">
    <p style="margin: 0 0 8px 0; font-size: 14px; color: #1A1B2E99;">Ticket ID</p>
    <p style="margin: 0 0 16px 0; font-size: 20px; font-weight: bold; letter-spacing: 2px;">${ticketId}</p>
    <img src="${qrDataUrl}" alt="Ticket QR Code" width="200" height="200" style="display: block; margin: 0 auto 16px;" />
    <p style="margin: 0; font-size: 12px; color: #1A1B2E99;">Show this QR code or ticket ID at the door</p>
  </div>

  <p><strong>${productName}</strong> × ${quantity}</p>
  <p style="color: #1A1B2E99;">Total: $${(totalCents / 100).toFixed(2)}</p>
  
  <p style="margin-top: 24px; font-size: 14px; color: #1A1B2E99;">
    Thursday nights at Oil City Stadium in Whiting, Indiana — June, July, August
  </p>
  <p style="font-size: 14px; color: #1A1B2E99;">
    Questions? Email visionquest2@outlook.com
  </p>
</body>
</html>
  `.trim();

  const { error } = await resend.emails.send({
    from: fromEmail,
    to: [to],
    subject: `Your NWI Fun Ball Ticket — ${ticketId}`,
    html,
  });

  if (error) {
    throw new Error(`Failed to send email: ${error.message}`);
  }
}
