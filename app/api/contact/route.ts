import {NextResponse} from 'next/server';
import {ContactForm} from "../../../types/contact-form";

export async function POST(request: Request) {
    const formData: ContactForm = await request.json();
    const body = {
        content:
            `🎉 **New lead from our website! 🎉**

> 🧑 Name: ${formData.firstName} ${formData.lastName}
> ✉️ Email: ${formData.email}
> 💬 Message: ${formData.message}

Cheers! 🍻`,
    };
    const webhookURL = 'https://discord.com/api/webhooks/1148600620589252658/w_nviChOuJXje-2cQ65W5_H7ZPl5IiuK6FnqIq1NpncKsWzYR8Twmbcrs7O2OXn5122U';
    const response = await fetch(webhookURL, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
        }
    });
    return NextResponse.json({success: response.ok});
}
