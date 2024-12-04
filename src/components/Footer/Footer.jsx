import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button/Button";
import footerTitleMobile from "@/assets/icons/footer_title-mobile.svg";
import footerTitle from "@/assets/icons/footer_title.svg";
import logoMobile from "@/assets/icons/logo_mobile-white.svg";
import facebookIcon from "@/assets/icons/facebook.svg";
import instagramIcon from "@/assets/icons/instagram.svg";
import twitterIcon from "@/assets/icons/twitter.svg";
import linkedInIcon from "@/assets/icons/linkedIn.svg";
import footerLeft from "@/assets/images/footer_left.png";
import footerRight from "@/assets/images/footer_right.png";

const Footer = () => {
  return (
    <footer className="flex flex-col m-auto max-w-[1440px] w-full ">
      <div className="bg-purple rounded-t-[2rem] w-full relative ">
        <div className="w-full flex flex-col items-center justify-center mt-[4.5rem] mb-11 lg:m-0 lg:h-[50rem]">
          <Image
            src={footerLeft}
            alt="Footer left decoration"
            className="hidden lg:block absolute left-0"
          />
          <Image
            src={footerRight}
            alt="Footer right decoration"
            className="hidden lg:block absolute right-0"
          />
          <Image
            src={footerTitleMobile}
            alt="Ready to see your business grow?"
            className="block md:hidden mb-5"
          />
          <Image
            src={footerTitle}
            alt="Ready to see your business grow?"
            className="mb-5 hidden md:block"
          />
          <p className="mb-4 text-white text-base leading-5 max-w-72 md:max-w-96 text-center">
            Take the first step towards unleashing your brand's potential
          </p>
          <Button variant="white" label="Contact us"></Button>
        </div>
        <div className=" w-full py-16 bg-purple-dark rounded-t-[4rem] ">
          <div className="grid md:grid-cols-footer max-w-5xl m-auto">
            <div className="w-full flex justify-center lg:justify-end ">
              <div className="w-fit mb-[4.5rem] md:mr-28">
                <Image src={logoMobile} alt="Logo" />
                <div className="flex justify-between md:justify-normal md:gap-4 mt-6">
                  <Link href="#">
                    <Image src={facebookIcon} alt="Facebook link" />
                  </Link>

                  <Link href="#">
                    <Image src={instagramIcon} alt="Instagram link" />
                  </Link>

                  <Link href="#">
                    <Image src={twitterIcon} alt="Twitter link" />
                  </Link>

                  <Link href="#">
                    <Image src={linkedInIcon} alt="LinkedIn link" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-start mb-12">
              <h2 className="text-[2rem] leading-[2.375rem] text-white font-bold mb-6">
                Ver más
              </h2>
              <ul className="flex flex-col gap-4 text-white items-center md:items-start md:max-w-32">
                <li>
                  <Link href="#">Sobre rufus</Link>
                </li>
                <li>
                  <Link href="#">Blog</Link>
                </li>
                <li>
                  <Link href="#">Únete al equipo</Link>
                </li>
                <li>
                  <Link href="#">Comunidad de creadores</Link>
                </li>
                <li>
                  <Link href="#">Contacto</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center md:items-start ">
              <h2 className="text-[2rem] leading-[2.375rem] text-white font-bold mb-6">
                Servicios
              </h2>
              <ul className="flex flex-col gap-4 text-white items-center md:items-start md:max-w-32">
                <li>
                  <Link href="#">Creators</Link>
                </li>
                <li>
                  <Link href="#">Creative Flex</Link>
                </li>
                <li>
                  <Link href="#">Smart Ads</Link>
                </li>
                <li>
                  <Link href="#">Fully managed</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className=" py-5 bg-purple-dark mt-[2px] md:m-0 md:flex md:justify-center w-full leading-5  text-xs font-helvetica text-white">
        <div className="relative max-w-7xl sm:mx-20 space-y-4 md:space-y-0 md:flex  md:justify-between md:w-full">
          <div className="absolute hidden md:block w-full h-[2px] bg-purple bottom-10"></div>
          <div>
            <p className="text-center ">
              &copy; 2024 Rufus Social. All rights reserved. Powered by
              Programon 
            </p>
          </div>
          <div className="flex justify-center gap-4 underline ">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
