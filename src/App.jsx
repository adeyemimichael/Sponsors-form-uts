'use client';

import { Button, Checkbox, Label, TextInput } from 'flowbite-react';

export default function ShadowInputs() {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center bg-black'>
    <form className="flex max-w-md flex-col gap-4 bg-slate-700 p-10 md:w-[50%]  w-[100%] md:h-[80%]">
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="email2"
            value="Your email"
          />
        </div>
        <TextInput
          id="email2"
          placeholder="name@flowbite.com"
          required
          shadow
          type="email"
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="password2"
            value="Your password"
          />
        </div>
        <TextInput
          id="password2"
          required
          shadow
          type="password"
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="repeat-password"
            value="Repeat password"
          />
        </div>
        <TextInput
          id="repeat-password"
          required
          shadow
          type="password"
        />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="agree" />
        <Label
          className="flex"
          htmlFor="agree"
        >
          
         
        </Label>
      </div>
      <Button type="submit">
        Register new account
      </Button>
    </form>
    </div>
  )
}


