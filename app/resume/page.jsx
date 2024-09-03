"use client";

import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger  } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { easeIn, motion } from 'framer-motion';


import {FaHtml5, 
        FaCss3, 
        FaReact,
        FaJs, 
        FaFigma, 
        FaVuejs, 
        FaNodeJs,
        FaPython,
        FaGithub,
      } from 'react-icons/fa';

import {  
        SiTailwindcss,
        SiBootstrap,
        SiNextdotjs,
        SiDjango,
        SiMongodb,
        SiExpress,
        SiGit,
        SiGatsby,
      } from 'react-icons/si';


// ABOUT DATA
const about  ={
  title: 'About Me',
  description: 'Hey! I’m Edwin, a Full Stack Developer driven by a love for technology and a desire to create meaningful digital experiences. I believe that technology can change the world.',
  info:[
    // {
    //   filedName: 'Name: ',
    //   fieldValue: 'Edwin V S'
    // },
    {
      filedName: 'GitHub: ',
      fieldValue: 'edwiee'
    },
    {
      filedName: 'Email: ',
      fieldValue: 'edwinvakayil@gmail.com'
    },
  ]
};
      
// EXPERIENCE DATA
const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My Experience',
  description: 'I’m passionate about all things tech and love crafting beautiful, user-friendly web applications.',
  items:[ 
  {
    company: "Inmakes InfoTech Pvt.Ltd",
    position: 'Python Full Stack Developer Intern',
    duration: 'April 2024 - August 2024'
  },
  {
    company: "Cognifyz Technologies",
    position: 'Full Stack Developer Intern (Remote)',
    duration: 'June 2024 - July 2024'
  },
  {
    company: "Bharat Intern",
    position: 'Web Developer Intern (Remote)',
    duration: 'May 2024 - June 2024'
  }, 
]
};

// EDUCATION
const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My Education',
  description: 'My educational background is complemented by several key certifications that have enhanced my technical skills and industry knowledge.',
  items:[
  {
    institution: "SRM University",
    degree: 'Masters of Computer Application',
    duration: '2024 - Present'
  },
  {
    institution: "Bangalore University",
    degree: 'Bachelors of Computer Application',
    duration: '2020 - 2023'
  },
  {
    institution: "EC - Council",
    degree: 'Certified Ethical Hacker (CEHv12)',
    duration: '2023 - 2024'
  },
]
};

// SKILLS
const skills = {
  title: 'My Skills',
  description: 'As a full-stack developer, I possess a diverse set of technical skills that enable me to build comprehensive and dynamic web applications.',
  skillList:[
    {
      icon: <FaHtml5 />,
      name: 'HTML 5'
    },
    {
      icon: <FaCss3 />,
      name: 'css 3'
    },
    {
      icon: <FaJs />,
      name: 'javascript'
    },
    {
      icon: <FaReact />,
      name: 'react js'
    },
    {
      icon: <SiNextdotjs />,
      name: 'next js'
    },
    {
      icon: <FaFigma />,
      name: 'figma'
    },
    {
      icon: <FaVuejs />,
      name: 'vue js'
    },
    {
      icon: <FaNodeJs />,
      name: 'node js'
    },
    {
      icon: <FaPython />,
      name: 'python'
    },
    {
      icon: <SiTailwindcss />,
      name: 'tailwind.css'
    },
    {
      icon: <SiBootstrap />,
      name: 'bootstrap'
    },
    {
      icon: <SiDjango />,
      name: 'django'
    },
    {
      icon: <SiMongodb />,
      name: 'mongodb'
    },
  ]
};

const Resume = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition: {delay:2.4, duration: 0.4, ease:"easeIn"}}}
    className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'>
     
     <div className="container mx-auto">
      <Tabs defaultValue='about' className='flex flex-col xl:flex-row gap-[60px]'>
        
       <TabsList className='flex flex-col w-full mx-w-[380px] mx-auto xl:mx-0 gap-6'>
         <TabsTrigger value = "about" className="bg-[#232329] text-white">About Me</TabsTrigger>
          <TabsTrigger value = "experience" className="bg-[#232329] text-white">Experience</TabsTrigger>
          <TabsTrigger value = "education" className="bg-[#232329] text-white">Education</TabsTrigger>
          <TabsTrigger value = "skills" className="bg-[#232329] text-white">Skills</TabsTrigger>
          
        </TabsList>

        {/* CONTENT */}
        <div className='min-h-[70vh] w-full'>
          {/* Experience */}
          <TabsContent value="experience" className="w-full">
            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
              <h3 className='text-4xl font-bold'>{experience.title}</h3>
              <p className='max-w-[600px] text-white/60'>{experience.description}</p>
              <ScrollArea className='h-[400px]'>
                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[35px]'>
                  {experience.items.map((item, index)=>{
                    return <li key={index} className='bg-[#232329] h-[185px] p-2 px-15 rounded-xl flex flex-col justify-center items-center lg:items-start gap-2'>
                      <span className='text-accent'>{item.duration}</span>
                      <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                      <div className='flex items-center gap-3'>
                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                        <p className='text-white/60'>{item.company}</p>
                      </div>
                    </li>
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>

          {/* Education */}
          <TabsContent value="education" className="w-full">
          <div className='flex flex-col gap-[30px] text-center xl:text-left'>
              <h3 className='text-4xl font-bold'>{education.title}</h3>
              <p className='max-w-[600px] text-white/60'>{education.description}</p>
              <ScrollArea className='h-[400px]'>
                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[35px]'>
                  {education.items.map((item, index)=>{
                    return <li key={index} className='bg-[#232329] h-[185px] p-2 px-15 rounded-xl flex flex-col justify-center items-center lg:items-start gap-2'>
                      <span className='text-accent'>{item.duration}</span>
                      <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.degree}</h3>
                      <div className='flex items-center gap-3'>
                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                        <p className='text-white/60'>{item.institution}</p>
                      </div>
                    </li>
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>

          {/* Skills */}
          <TabsContent value="skills" className="w-full h-full">
            <div className='flex flex-col gap-[30px]'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{skills.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
              </div>
              <ul className='grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 xl:gap[30px] gap-4'>
                {skills.skillList.map((skill, index)=>{
                  return <li key={index}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center'>
                          <div className='text-6xl transition-all duration-300 hover:text-accent'>
                            {skill.icon}
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className='uppercase text-sm'>{skill.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </li>
                })}
              </ul>
            </div>
          </TabsContent>

          {/* About */}
          <TabsContent value="about" className="w-full text-center xl:text-left">
            <div className='flex flex-col gap-[30px]'>
              <h3 className='text-4xl font-bold'>{about.title}</h3>
              <p className='max-w-[600px] text-white/60'>{about.description}</p>
              <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                {about.info.map((item, index)=>{
                  return <li key={index} className='flex  items-center justify-center xl:justify-start gap-1'>
                    <span className='text-white/60'>{item.filedName}</span>
                    <span className='text-md'>{item.fieldValue}</span>
                  </li>
                })}
              </ul>
            </div>
          </TabsContent>
        </div>

      </Tabs>
     </div>

    </motion.div>
  )
}

export default Resume

// className="bg-white text-black"