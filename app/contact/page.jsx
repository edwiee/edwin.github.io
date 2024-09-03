"use client";
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'; 
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue} from '@/components/ui/select';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { motion } from 'framer-motion';
import { Item } from '@radix-ui/react-select';



const Contact = () => {

  const info = [
    {
      icon: <FaPhoneAlt />,
      title: 'Phone',
      value: '+91 8138996405',
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'edwinsojan02@gmail.com',
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Address',
      value: 'Bangalore, Karnataka, India',
    },
  ];

  


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = 'You Have Message from ' + name;
    // const body = `Name: ${name} \nEmail: ${email}\nMessage: ${message}`;
    const body = `${message}`;
    const mailtoLink = `mailto:batman4gc@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
    setSent(true);
  };
  return (
    <motion.section initial={{opacity:0}} animate={{opacity:1, transition: {delay:2.4, duration:0.4, ease:"easeIn"}}}
    className='py-6'
    >
      <div className="container mx-auto">
        <div className='flex flex-col xl:flex-row gap-[30px] items-center justify-center'>
          {/* FORM PART */}
          <div className='xl:w-[70%] order-2 xl:order-none'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'>
              <h3 className='text-4xl text-accent'>Let's Connect Together!!</h3>
              <p className='text-white/60'>I am always excited to discuss new projects, ideas, or opportunities to collaborate. You can use the form below to send me a message directly.</p>
              {/* Input Section */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <Input type ="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Full Name"/>
                <Input type ="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email"/>
                <Input type ="textarea" value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Type your message here.." className="h-[100px]"/>
              </div>
              {/* BUTTON */}
              <Button type="submit" size='md' className='max-w-40'>Send Message</Button>
            </form>
          </div>
          {/* INFO SECTION */}
          {/* <div className='flex-1 flex items-center xl:justify-end order-1 
          xl:order-none mb-8 xl:mb-0'>
            <ul className='flex flex-col gap-10 '>
              {info.map((item, index)=>{
                return (
                  <li key={index} className='flex items-center gap-6'>
                  <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center'>
                    <div className='text-[28px]'>
                      {item.icon}
                    </div>
                  </div>
                  <div className='flex-1 '>
                    <p className='text-white/60'>{item.title}</p>
                    <h3 className='text-md'>{item.value}</h3>
                  </div>
                </li>
                )
              })}
            </ul>
          </div> */}
        </div>
      </div>
      
    </motion.section>
  )
}

export default Contact;
