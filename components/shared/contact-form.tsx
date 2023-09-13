"use client";

import {Control, Field, Label, Message, Root, Submit} from "@radix-ui/react-form";
import {FormEvent, useRef, useState} from "react";
import Toast from "@/components/shared/toast";
import {oneWeekAway} from "@/lib/utils";

export default function ContactForm() {

    const eventDateRef = useRef(new Date());
    const timerRef = useRef(0);
    const [openToast, setOpenToast] = useState(false);

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        const target = event.currentTarget as HTMLFormElement;
        const data = Object.fromEntries(new FormData(target));
        const response = await fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify(data),
        });
        if (response.ok) {
            target.reset();
            setOpenToast(false);
            window.clearTimeout(timerRef.current);
            timerRef.current = window.setTimeout(() => {
                eventDateRef.current = oneWeekAway();
                setOpenToast(true);
            }, 100);
        }
        console.log('response', response.json());
    };

    return (
        <>
            <Root className="w-full p-2" onSubmit={(event) => handleSubmit(event)}>
                <Field name={'firstName'} className="grid mb-[10px]">
                    <div className="flex items-baseline justify-between pb-1">
                        <Label className="font-medium">First Name</Label>
                        <Message match={'valueMissing'} className="text-[13px] opacity-[0.8]">
                            Please provide your first name
                        </Message>
                    </div>
                    <Control asChild>
                        <input
                            className="box-border w-full bg-blackA5 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
                            required
                        />
                    </Control>
                </Field>

                <Field name={'lastName'} className="grid mb-[10px]">
                    <div className="flex items-baseline justify-between pb-1">
                        <Label className="font-medium">Last Name</Label>
                        <Message match={'valueMissing'} className="text-[13px] opacity-[0.8]">
                            Please provide your last name
                        </Message>
                    </div>
                    <Control asChild>
                        <input
                            className="box-border w-full bg-blackA5 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
                            required
                        />
                    </Control>
                </Field>

                <Field name={'email'} className="grid mb-[10px]">
                    <div className="flex items-baseline justify-between pb-1">
                        <Label className="font-medium">Email</Label>
                        <Message match={'valueMissing'} className="text-[13px] opacity-[0.8]">
                            Please provide your email
                        </Message>
                        <Message className="text-[13px] opacity-[0.8]" match="typeMismatch">
                            Please provide a valid email
                        </Message>
                    </div>
                    <Control asChild>
                        <input
                            className="box-border w-full bg-blackA5 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] border-0"
                            required
                            type="email"
                        />
                    </Control>
                </Field>

                <Field name={'message'} className="grid mb-[10px]">
                    <div className="flex items-baseline justify-between pb-1">
                        <Label className="font-medium">Message</Label>
                        <Message match={'valueMissing'} className="text-[13px] opacity-[0.8]">
                            Please enter a message
                        </Message>
                    </div>
                    <Control asChild>
                    <textarea
                        className="box-border w-full inline-flex appearance-none items-center justify-center rounded-[4px] p-[10px] text-[15px] leading-none outline-none focus:shadow-[0_0_0_1px_black] resize-none"
                        required
                    />
                    </Control>
                </Field>

                <div className="flex justify-end">
                    <Submit asChild>
                        <button
                            className="text-center box-border shadow-[0_0_0_1px] hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_1px] focus:shadow-black focus:outline-none mt-[10px]">
                            Submit
                        </button>
                    </Submit>
                </div>
            </Root>

            <Toast title={'Submitted successfully!'} open={openToast} setOpen={setOpenToast}/>
        </>
    );
}
