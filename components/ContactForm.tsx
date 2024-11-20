'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from 'emailjs-com';

const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  emailjs.sendForm('service_q4ts92b', 'template_ysimrfn', e.currentTarget, 'a_X5vFAUACX1CkzQl')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

  e.currentTarget.reset();
};

const ContactForm = () => {
  return (
    <form className="max-w-md mx-auto space-y-4" onSubmit={sendEmail}>
      <div className="space-y-2">
        <label htmlFor="name">Name</label>
        <Input id="name" name="from_name" placeholder="Your name" required />
      </div>
      <div className="space-y-2">
        <label htmlFor="email">Email</label>
        <Input id="email" name="from_email" placeholder="Your email" required type="email" />
      </div>
      <div className="space-y-2">
        <label htmlFor="message">Message</label>
        <Textarea className="min-h-[100px]" id="message" name="message" placeholder="Your message" required />
      </div>
      <Button type="submit" className="w-full">Send Message</Button>
    </form>
  );
};

export default ContactForm;