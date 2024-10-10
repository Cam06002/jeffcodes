'use client';

import { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import SendEmail from '../api/email/send-email';


export type FormData = {
  subject: string;
  email: string;
  message: string;
};

const Contact: FC = () => {
  const { 
    register, 
    handleSubmit, 
    reset, 
    formState } = useForm<FormData>();

  const [showThankYou, setShowThankYou] = useState<boolean>(false);

  function onSubmit(data: FormData) {
    SendEmail(data);
    setShowThankYou(true);
  }

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState, reset])


  return(
    <div className="w-full h-full p-8 md:p-12 flex flex-col text-white">
      {!showThankYou&&<><h3 className="text-align-center text-3xl font-bold mb-4 md:mb-8">Contact</h3>
      <form 
        className="flex flex-col"
        onSubmit={handleSubmit(onSubmit)}
        id='emailForm'
      >
        <div className="flex md:flex-row align-middle my-2">
          <label 
            className="mr-1 md:mr-2 w-24"
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
            className="mr-1 md:mr-2 w-24"
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
      </form> </>}
      
      {showThankYou&&<>
        <h3 className="text-align-center text-3xl font-bold mb-4 md:mb-8">Thank You for Reaching Out</h3>
        <p>I'll respond to you as soon as I can!</p>
      </>}
    </div>
  )
}

export default Contact;