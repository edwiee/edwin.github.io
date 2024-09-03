"use client";

import { motion } from 'framer-motion';
import React, { useState } from 'react';;
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger  } from '@/components/ui/tooltip';
import Link from 'next/link';
import Image from 'next/image';
import { all } from 'axios';
import WorkerSliderBtn from '@/components/ui/WorkerSliderBtn';

const projects = [

  {
    num:'01',
    category: 'Full Stack Development',
    title:'Menu Master - API',
    description: 'This application allows restaurant employees to manage customer orders. It includes modules for adding recipes, updating and deleting recipes from the menu list.',
    
    stack: [
      {name: 'React JS'}, , {name: 'Node JS'}, {name: 'JavaScript'}, ,{name: 'Bootstrap'}, {name: 'Django'}, {name: 'PostgreSQL'},
    ],
    image: '/assets/work/dishes.jpg',
    github:"https://github.com/edwiee/MenuMaster-API"
  },
  {
    num:'02',
    category: 'Full Stack Development',
    title:'Movie Sharing Platform',
    description: 'This platform allows users to contribute by adding new movies, sharing reviews, and building a personalised list of favourites.',
    
    stack: [
      {name: 'HTML'}, {name: 'CSS'}, {name: 'JavaScript'},{name: 'Bootstrap'}, {name: 'Django'}, {name: 'Python'}, {name: 'PostgreSQL'},
    ],
    image: '/assets/work/movie.jpg',
    github:"https://github.com/edwiee/FilmFolio"
  },
  {
    num:'03',
    category: 'FrontEnd Development',
    title:'Portfolio Website',
    description: 'A portfolio website allows developers to showcase their skills and projects to potential clients, enhancing their professional visibility and credibility.',
    
    stack: [
      {name: 'Next JS'}, {name: 'React JS'}, {name: 'Tailwind CSS'},
    ],
    image: '/assets/work/portfolio.jpg',
    github:"https://github.com/edwiee/edwin.github.io"
  },
]


const Projects = () => {
  const [ project, setProject]= useState(projects[0]);
  const handleSlideChange = (swiper) =>{
    // GET CURRENT SLIDE INDEX
    const currentIndex = swiper.activeIndex;
    // SET CURRENT PROJECT
    setProject(projects[currentIndex]);
  }


  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition: {delay:2.4, duration:0.4, ease:"easeIn"}}} className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'>
      <div className="container mx-auto">
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>

            <div className='flex flex-col gap-[20px] h-[50%]'>
              {/* OUTLINE NUM*/}
              <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
                {project.num}
              </div>
              {/* PROJECT TITLE */}

              <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>{project.title}</h2>
              {/* CATEGORY */}
              <p className='text-sm text-white group-hover:text-accent transition-all duration-500'>- {project.category}</p>
              {/* PROJECT Decription */}
              <p className='text-white/60 '>{project.description}</p>
              {/* PROJECT STACK*/}
              <ul className='flex gap-4 '>
                {project.stack.map((item, index)=>{
                  return <li key={index} className='text-sm text-accent'>
                    {item.name}
                    {/* REMOVE LAST COMMA */}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                })}
              </ul>
              {/* BORDER */}
              <div className='border border-white/20'></div>
              {/* BUTTONS */}
              <div className='flex items-center gap-4'>
                <Link href={project.github}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className=' flex justify-center items-center group'>
                      <BsGithub className='text-white text-3xl group-hover:text-accent' />
                    </TooltipTrigger>
                    <TooltipContent className='bg-white text-black'>
                      <p className=''>View on Github</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className='w-full xl:w-[50%]'>
            <Swiper spaceBetween={30} slidesPerView={1} className='xl:h-[520px] mb-12'
            onSlideChange={handleSlideChange}>
              {projects.map((project, index)=>{
                return <SwiperSlide key={index} className='w-full '>
                  <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20'>
                  {/* OVERLAY */}
                  <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>
                  {/* IMAGE */}
                  <div className='relative w-full h-full'>
                    <Image src={project.image} fill className='object-cover' />
                  </div>
                  </div>
                </SwiperSlide>
              })}
              {/* SLIDER BUTTON */}
              <WorkerSliderBtn containerStyles = "flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
              btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[30px] h-[30px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Projects
