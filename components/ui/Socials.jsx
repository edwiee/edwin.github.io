"use client";
import Link from "next/link";
import {FaGithub, FaLinkedinIn, FaTwitter, FaMedium, FaCodepen} from 'react-icons/fa';


const socials = [
    {icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/edwinvs/'},
    {icon: <FaTwitter />, path: 'https://twitter.com/edwiiy'},
    {icon: <FaGithub />, path: 'https://github.com/edwiee'},
    {icon: <FaCodepen />, path: 'https://codepen.io/edwiix/pens/'},
];
const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index)=>{
        return <Link key={index} href={item.path}className={iconStyles}>
            {item.icon}
        </Link>
      })}
    </div>
  )
  
};

export default Socials
