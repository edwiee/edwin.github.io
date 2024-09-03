"use client";

import { BsArrowDownRight } from 'react-icons/bs'
import Link from 'next/link';
import { easeIn, motion } from "framer-motion"

const services = [
    {
      num: '01',
      title: "Full Stack Development",
      description: 'As a versatile Full Stack Developer, I am proficient in a wide range of technologies.',
      href: ""
    },
    {
      num: '02',
      title: "FrontEnd Development",
      description: 'I have a strong background in building responsive and interactive web applications.',
      href: ""
    },
    {
      num: '03',
      title:'API Integration',
      description: 'With a background in custom API development, I design and integrate APIs tailored to specific business needs.',
      href: ""
    },
    {
      num: '04',
      title:'Database Confurigation',
      description: 'I specialize in configuring secure and reliable databases that ensure data integrity and availability.',
      href: ""
    }
]

const Services = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
    <div className='container mx-auto'>
      <motion.div
      initial={{opacity: 0}}
      animate= {{opacity:1, transition:{delay: 2.4, duration: 0.4, ease: easeIn},}}
      className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
      >

        {services.map((service, index)=>{
          return (
          <div key={index} className="flex-1 flex flex-col justify-center gap-6">
            <div className="w-full flex justify-between items-center">
              {/* INDEX */}
              <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                {service.num}
                </div>
              {/* ARROW */}
              {/* <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
              <BsArrowDownRight className="text-primary text-3xl "/>
              </Link> */}
            </div>
            {/* TITLE */}
            <h2 className="text-[42px] font-bold loading-none text-white hover:text-accent transition-all duration-500">{service.title}</h2>
            {/* DESCRIPTION */}
            <p className="text-white/60">{service.description}</p>
            {/* BORDER */}
            <div className="border-b border-white/20 w-full"></div>
          </div>
        )
        })}

      </motion.div>
    </div>
    </section>
  );
}

export default Services
