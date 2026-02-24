import nodemailer from "nodemailer";

// Simple email format validator
const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);


export const sendMail = async (to, subject, html) => {
    // 1️⃣ Skip invalid emails
    if (!isValidEmail(to)) {
        console.log(`Invalid email format: ${to} - skipping send`);
        return;
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"GREENE VELVET" <${process.env.EMAIL_USER}>`,
            to,
            subject,
            html,
        });

        console.log(`Email sent to ${to}`);
    } catch (err) {
        console.error(`Email not sent to ${to}:`, err.message);
    }
};