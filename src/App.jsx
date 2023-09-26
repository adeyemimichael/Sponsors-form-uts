'use client';
import { useState } from 'react';
import { Button,  Label, TextInput } from 'flowbite-react';
import axios from "axios";
export default function ShadowInputs() {


  const [email, SetEmail] = useState(" ");
  const [Fullname , SetUsername] = useState(" ");
  const [organization, SetOrganization] = useState(" ");
  const [Phonenumber, SetPhonenumber] = useState(" ");

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
    }
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center bg-[#000038]'>
      <h1 className='font-bold text-[30px] text-white'>Want to Sponsor Unilorin tech Summit? </h1>
      <p className='text-gray-100 font-normal text-[18px]'>Fill the form below and one of our representative will reach out to in the next 24 hours </p>
    <form className="flex max-w-md flex-col gap-4 bg-[#b5fc1d] p-10 md:w-[50%]  w-[100%] md:h-[80%]" onSubmit={handleSubmit}>
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
          // required
          shadow
          onChange={(e) => SetEmail(e.target.value)}
          value={email}
          type="email"
       
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
          // required
          shadow
          onChange={(e) => SetUsername(e.target.value)}
          value={Fullname }
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
          // required
          shadow
          onChange={(e) => SetOrganization(e.target.value)}
          value={organization}
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
          // required
          shadow
          type="number "
          onChange={(e) => SetPhonenumber(e.target.value)}
            value={Phonenumber}
          
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


