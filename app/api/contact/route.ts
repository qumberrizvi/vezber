import {NextResponse} from 'next/server';
import {ContactForm} from "../../../types/contact-form";
import {FetchRequest} from "../../../types/fetch-request";

// Slack #leads channel
const webhookURL = 'https://hooks.slack.com/services/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';

export async function POST(request: Request) {
    const formData: ContactForm = await request.json();

    const requestData = makeRequestData(formData);

    const response = await fetch(webhookURL, requestData);
    return NextResponse.json({success: response.ok});
}

function makeRequestData(formData: ContactForm): FetchRequest {
    const body = makeTextBody(formData);

    return {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
        }
    };
}

function makeTextBody(formData: ContactForm) {
    return {
        text:
            `🎉 New lead from our website! 🎉

> 🧑 Name: ${formData.firstName} ${formData.lastName}
> ✉️ Email: ${formData.email}
> 📞 Phone: ${formData.phone}
> 💬 Message: ${formData.message}

Cheers! 🍻`,
    };
}
