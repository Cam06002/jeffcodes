'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import SendEmail from './sendEmail';


export type FormData = {
  subject: string;
  email: string;
  message: string;
};

const Contact: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    SendEmail(data);
  }

  return(
    <div className="w-full h-full p-12 flex flex-col">
      <h3 className="text-align-center text-3xl font-bold mb-8">Contact</h3>
      <form 
        className="flex flex-col"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex md:flex-row align-middle my-2">
          <label 
            className="mr-2 w-24"
            htmlFor="email"
          >Your Email</label>
          <input 
            className="rounded text-black w-60 p-1" 
            type="text" id="email"
            {...register('email', {required: true})}
          />
        </div>
        <div className="flex md:flex-row content-center my-2">
          <label 
            className="mr-2 w-24"
            htmlFor="subject"
          >Subject</label>
          <input 
            className="rounded w-60 text-black p-1" 
            type="text" id="subject"
            {...register('subject', {required: true})}
          />
        </div>
        <label
          className="mt-4 mb-2"
          htmlFor="message"
        >Your Message</label>
        <textarea className="rounded p-2 text-black" id="message" rows={12}
          {...register('message', {required: true})}
        />
        <button className="bg-sky-300 font-bold text-black shadow w-fit mt-4 p-2 rounded">Submit</button>
      </form>
    </div>
  )
}

export default Contact;