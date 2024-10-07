/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList"; // Assuming FooterList is a valid component
import { MdFacebook } from "react-icons/md";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
      <Container>
        <div className="flex flex-wrap justify-between pt-16 pb-8">
          <FooterList>
            <h3 className="text-base font-bold mb-2">Shop Categories</h3>
            <Link href="#">Project 1</Link>
            <Link href="#">Project 2</Link>
            <Link href="#">Project 3</Link>
            <Link href="#">Project 4</Link>
            <Link href="#">Project 5</Link>
            <Link href="#">Project 6</Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Customer Service</h3>
            <Link href="#">Contact Us</Link>
            <Link href="#">Shipping Policy</Link>
            <Link href="#">Returns & Exchanges</Link>
            <Link href="#">FAQs</Link>
          </FooterList>
          <div className=" w-full md:w-1/3 mb-6 md:mb-0">
            {" "}
            {/* About Us section */}
            <h3 className="text-base font-bold mb-2">About Us</h3>
            <p className="mb-2">
              We are dedicated to providing you with the tools and knowledge you
              need to succeed in your electronic endeavors. Whether you're
              building your first circuit or tackling a complex project, we're
              here to support you every step of the way.
            </p>
            <p>
              &copy; {new Date().getFullYear()} EngineerStore.All rights
              reserved
            </p>
          </div>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Follow Us</h3>
            <div className="flex gap-2 ">
              <Link href="#">
                <MdFacebook />
              </Link>
              <Link href="#">
                <AiFillTwitterCircle />
              </Link>
              <Link href="#">
                <AiFillInstagram />
              </Link>
              <Link href="#">
                <AiFillYoutube />
              </Link>
            </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
