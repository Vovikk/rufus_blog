import facebookIcon from "@/assets/icons/facebook.svg";
import instagramIcon from "@/assets/icons/instagram.svg";
import twitterIcon from "@/assets/icons/twitter.svg";
import linkedInIcon from "@/assets/icons/linkedin.svg";
import articleImg1 from "@/assets/images/articles/1.png";
import articleImg2 from "@/assets/images/articles/2.png";
import articleImg3 from "@/assets/images/articles/3.png";
import articleImg4 from "@/assets/images/articles/4.png";
import articleImg5 from "@/assets/images/articles/5.png";
import articleImg6 from "@/assets/images/articles/6.png";
import articleImg7 from "@/assets/images/articles/7.png";
import articleImg8 from "@/assets/images/articles/8.png";
import articleImg9 from "@/assets/images/articles/9.png";

export const NAV_LINKS = [
  { href: "/", key: "", label: "Blog" },
  { href: "/", key: "articles", label: "Articles" },
];

export const FOOTER_SOCIALS = [
  { href: "#", key: "", label: "Facebook", image: facebookIcon },
  { href: "#", key: "", label: "Instagram", image: instagramIcon },
  { href: "#", key: "", label: "Twitter", image: twitterIcon },
  { href: "#", key: "", label: "LinkedIn", image: linkedInIcon },
];

export const FOOTER_LINKS_MORE = [
  { href: "/", key: "", label: "About rufus" },
  { href: "/", key: "", label: "Blog" },
  { href: "/", key: "", label: "Join the team" },
  { href: "/", key: "", label: "Creators community" },
  { href: "/", key: "", label: "Contact" },
];

export const FOOTER_LINKS_SERVICES = [
  { href: "/", key: "", label: "Creators" },
  { href: "/", key: "", label: "Creative Flex" },
  { href: "/", key: "", label: "Smart Ads" },
  { href: "/", key: "", label: "Fully managed" },
];

export const ARTICLES = [
  {
    className: "",
    image: articleImg1,
    genre: ["Creativity"],
    author: "Miranda Marini",
    date: { month: "October", day: "14", year: "2024" },
    title: "The Power of the Hook: How to win over your audience in 3 seconds",
    paragraph:
      "Capturing attention in the first few seconds is key to the success of any ad. A good hook...",
    featured: true,
  },
  {
    className: "",
    image: articleImg2,
    genre: ["Growth"],
    author: "Miranda Marini",
    date: { month: "October", day: "23", year: "2024" },
    title: "The perfect match: How to find the ideal Creator for your brand",
    paragraph:
      "Choosing the right Creator can be the difference between a successful campaign and an effort that goes unnoticed.",
    featured: true,
  },
  {
    className: "",
    image: articleImg3,
    genre: ["Success Story"],
    author: "Rufus",
    date: { month: "September", day: "10", year: "2024" },
    title: "Case Study: Stori by Rufus",
    paragraph:
      "Find out how Stori used Data Driven Ads to reduce CPA, better CTR and optimize their ad campaigns.",
    featured: true,
  },
  {
    className: "",
    image: articleImg4,
    genre: ["Digital Advertising", "Creativity"],
    author: "Rufus",
    date: { month: "August", day: "27", year: "2024" },
    title: "Ads Variations: AI and Creativity",
    paragraph:
      "Artificial intelligence has countless applications and new opportunities to use it are appearing every day...",
  },
  {
    className: "",
    image: articleImg5,
    genre: ["Creativity"],
    author: "Rufus",
    date: { month: "August", day: "6", year: "2024" },
    title: "Content for special dates: the key to commercial success",
    paragraph:
      "Discover how special dates can become strategic opportunities to boost your business, and how Rufus...",
  },
  {
    className: "",
    image: articleImg6,
    genre: ["Creativity"],
    author: "Rufus",
    date: { month: "July", day: "12", year: "2024" },
    title: "Design Trends 2024: Curb your audience's scroll",
    paragraph:
      "Design is a powerful tool for appealing to emotions and creating memorable experiences. Let's explore the...",
  },
  {
    className: "",
    image: articleImg7,
    genre: ["Creativity"],
    author: "Rufus",
    date: { month: "June", day: "13", year: "2024" },
    title: "Maximize your brand with a Canva: Guide to creating strategy maps",
    paragraph:
      "Discover what a Canva is and learn how to create an effective concept map to improve the performance of your ads and...",
  },
  {
    className: "",
    image: articleImg8,
    genre: ["Digital Advertising", "Creativity"],
    author: "Rufus",
    date: { month: "August", day: "6", year: "2024" },
    title: "Conversion funnel: the guide to convert users into loyal customers",
    paragraph:
      "The conversion funnel guides users from unawareness to brand loyalty. Discover the key...",
  },
  {
    className: "",
    image: articleImg9,
    genre: ["Digital Advertising"],
    author: "Rufus",
    date: { month: "May", day: "22", year: "2024" },
    title: "Measure, optimize, succeed: the power of testing in marketing",
    paragraph:
      "The key to success in digital marketing lies in constant testing and data-driven optimization. why.....",
  },
];
