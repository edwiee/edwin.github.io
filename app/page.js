"use client"
import { Button } from "@/components/ui/button";
import Photo from "@/components/ui/Photo";
import Socials from "@/components/ui/Socials";
import Stats from "@/components/ui/Stat";
import { FiDownload } from "react-icons/fi"

const Home = () => {
  return (
    
      <section className="h-full">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            {/* TEXT */}
            <div className="text-center xl:text-left order-2 xl:order-none">
              <span className="text-md">Full Stack Developer</span>
              <h1 className="h1 mb-6">Hello, I'm <br /><span className="text-accent">Edwin V S</span></h1>
              
              <p className="max-w-[500px] mb-9 text-white/80">
                I am excel at crafting elegant digital experiences and I am proeficient in both Front-end and Back-end technologies.
              </p>
              {/* BUTTONS AND SOCIAL ICONS */}
              <div className="flex flex-col xl:flex-row items-center gap-8">
                {/* <Button 
                variant = "outline" 
                size = "lg" 
                className="uppercase flex items-center gap-2">
                  <span> <a href="#">Download CV</a></span>
                  <FiDownload className="text-xl"/>
                </Button> */}
                <div className="mb-8 xl:mb-0 ">
                  <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
                </div>
              </div>
            </div>
            {/* PHOTO */}
            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Photo />
            </div>
          </div>
        </div>
        <Stats />
      </section>
    
  )
}

export default Home;

