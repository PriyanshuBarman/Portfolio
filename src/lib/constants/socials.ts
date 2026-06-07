import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

import { GITHUB_LINK, GMAIL_LINK, LINKEDIN_LINK, TWITTER_LINK } from "./site";

export const SOCIALS = [
  {
    name: "Github",
    icon: FaGithub,
    link: GITHUB_LINK,
    iconColor: "#181717",
  },
  {
    name: "Linkedin",
    icon: FaLinkedinIn,
    link: LINKEDIN_LINK,
    iconColor: "#0A66C2",
  },
  {
    name: "Twitter",
    icon: FaXTwitter,
    link: TWITTER_LINK,
    iconColor: "#000000",
  },
  {
    name: "Gmail",
    icon: SiGmail,
    link: GMAIL_LINK,
    iconColor: "#EA4335",
  },
];
