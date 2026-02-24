import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

export const sendVerificationEmail = async (email, link) => {
    try {
        await transporter.sendMail({
            from: `"GREENE VELVET" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: "Complete My Registration - GreeneVelvet",
            html: `
        <h2>Please Confirm Your Email Address</h2>
        <p>Thank you for registering with GreeneVelvet.</p>
        <p>Click the button below to complete your registration:</p>
        <a href="${link}" 
         style="display:inline-block;padding:12px 20px;
         background:#0a7cff;color:#fff;text-decoration:none;
         border-radius:5px;">
         Complete My Registration
      </a>
      <p>If you can't find the email, check your spam folder for Greenvelvet.com.au</p>`

        });
        console.log(`Verification email sent to ${email}`);

    } catch (error) {
        console.error(`Email not sent to ${email}:`, error.message);
    }
}