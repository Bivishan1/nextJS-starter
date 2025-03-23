import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

// since Resend is a class, it should be instantiated like creating new instance,,
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
    //inside send we provide a payload object with from, to, subject and html
   await resend.emails.send({
        from: 'bivi@resend.dev',
        to: 'bivishan8686@gmail.com',
        subject: 'Hello World',
        // html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
        react: <WelcomeTemplate name="Bivi" />
      });
      return NextResponse.json({});
}