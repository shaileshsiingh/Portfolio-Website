// import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend('re_biDdhEWh_8uMcJ8qZiHSh9WeWs3STEL27');
const fromEmail = 'shaileshsiingh@gmail.com';


export async function POST() {
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: ["shaileshsiingh@gmail.com"],
      subject: "Hello world",
      react: (
        <>
          <p>Email Body</p>
        </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}