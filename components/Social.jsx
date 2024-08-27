import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaInstagram, FaTwitter, FaDownload} from "react-icons/fa";

const button = [
  {icon: <FaDownload />, path: "public/assets/resume/Divyanshu_Chauhan_CV.pdf"},
]

const socials = [
    {icon: <FaGithub />, path : "https://github.com/SCYTHE6"},
    {icon: <FaLinkedinIn />, path : "https://www.linkedin.com/in/divyanshu-chauhan6/"},
    {icon: <FaInstagram />, path : "https://www.instagram.com/divyanshu__chauhan?igsh=NGVhN2U2NjQ0Yg=="},
    {icon: <FaTwitter />, path : ""},
]
const Social = ({containerStyles, iconStyles}) => {
  return (
  <div className={containerStyles}>
    {socials.map((item, index)=> {
        return (
        <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
        </Link>
        );
    })}
  </div>
);
};

export default Social
