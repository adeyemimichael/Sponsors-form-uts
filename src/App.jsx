'use client';

import { Button,  Label, TextInput } from 'flowbite-react';

export default function ShadowInputs() {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center bg-[#000038]'>
      <h1 className='font-bold text-[30px] text-white'>Want to Sponsor Unilorin tech Summit? </h1>
      <p className='text-gray-100 font-normal text-[18px]'>Fill the form below and one of our representative will reach out to in the next 24 hours </p>
    <form className="flex max-w-md flex-col gap-4 bg-[#b5fc1d] p-10 md:w-[50%]  w-[100%] md:h-[80%]">
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="email2"
            value="Your email"
          />
        </div>
        <TextInput
          id="email2"
          placeholder="name@mail.com"
          required
          shadow
          type="email"
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="fullname "
            value="Full name "
          />
        </div>
        <TextInput
          id="name "
          required
          shadow
          type="text"
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="organisation name "
            value="Organization"
          />
        </div>
        <TextInput
          id="organization name "
          required
          shadow
          type="text"
        />
      </div>
      <div className="flex items-center gap-2">
       <div className='mb-2 block'>
        <Label
          className="flex"
          htmlFor="phone no"
          value='Phone number'
        >
        </Label>
        <TextInput
          id="phone number  "
          required
          shadow
          type="number"
         
         className='w-[100%]'
        />
        </div>
      </div>
      <Button type="submit">
      Become a Sponsor 
      </Button>
    </form>
    </div>
  )
}


