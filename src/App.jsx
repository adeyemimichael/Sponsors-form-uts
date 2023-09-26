'use client';
import { useState } from 'react';
import { Button,  Label, TextInput } from 'flowbite-react';
import axios from "axios";
import Success from './Success';
export default function ShadowInputs() {


  const [email, SetEmail] = useState(" ");
  const [Fullname , SetUsername] = useState(" ");
  const [organization, SetOrganization] = useState(" ");
  const [Phonenumber, SetPhonenumber] = useState(" ");
  const [showSuccess, setShowSuccess] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(username, email);
    const Data = {
      email: email,
      name:Fullname ,
      organization:organization,
      Phonenumber:Phonenumber
    };
    axios.post(
        "https://sheet.best/api/sheets/9cf3c6f0-2562-455f-aa59-fe1b5708b06f",
        Data
      )
      .then((response) => {
        console.log(response);
        SetEmail("");
        SetUsername("");
        SetOrganization("");
        SetPhonenumber("");
      });
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 2000); // 2 seconds in milliseconds
      
    }
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center bg-[#000038]'>
      
    <form className="flex  flex-col gap-4 bg-gray-100 p-6 md:h-screen  rounded-lg mb-6 mt-6 scroll-smooth hover:scroll-auto" onSubmit={handleSubmit}>
    <h1 className='md:font-normal font-semibold  md:text-[35px] text-[30px] text-black text-center  tracking-tight leading-relaxed'>Want to Sponsor Unilorin Tech Summit? </h1>
      <p className='text-gray-900 font-normal text-[16px] md:text-[16px] tracking-tight text-center line-clamp-2 pb-4 mx-4 md:mx-6 leading-5'>Fill the form below and one of our representatives will reach out to you in the next 24 hours </p>
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
          onChange={(e) => SetEmail(e.target.value)}
          value={email}
          type="email"
       className='border-2 border-stone-950 rounded-xl'
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="fullname "
            value="Fullname "
          />
        </div>
        <TextInput
          id="name"
          placeholder="Andrew John"
        required
          shadow
          onChange={(e) => SetUsername(e.target.value)}
          value={Fullname }
          type="text"
          className='border-2 border-stone-950 rounded-xl'
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
          placeholder='ABC.co'
          required
          shadow
          onChange={(e) => SetOrganization(e.target.value)}
          value={organization}
          type="text"
          className='border-2 border-stone-950 rounded-xl'
        />
      </div>
      <div className="gap-2">
       <div className='mb-2 block'>
        <Label
          className="flex"
          htmlFor="phone no"
          value='Phone number'
        >
        </Label>
        </div>
        <TextInput
          id="phone number "
          placeholder='0810000000'
          required
          shadow
          type="number"
          onChange={(e) => SetPhonenumber(e.target.value)}
            value={Phonenumber}
            className='border-2 border-stone-950 rounded-xl'
        />
      </div>
      <Button type="submit" className='bg-[#000038] text-center' >
      Become a Sponsor 
      </Button>
    </form>
    {showSuccess && <Success/>}
    </div>
  )
}


// https://prod.liveshare.vsengsaas.visualstudio.com/join?9F337BB93F4D127E9483CA16C929D0AD5885