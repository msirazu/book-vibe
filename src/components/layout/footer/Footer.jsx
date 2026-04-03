import { Link } from "react-router-dom";

const Footer = () => {
    const date = new Date();
    return (
    <div>
            <section className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
  <nav>
    <h5 className="footer-title">Services</h5>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h5 className="footer-title">Company</h5>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h5 className="footer-title">Legal</h5>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
  <nav>
    <h5 className="footer-title">Legal</h5>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</section>
<section className="capitalize text-center text-[12px] bg-neutral text-neutral-content border-t border-dashed border-t-gray-500 py-2">
  <h6> 
  copyright @ {date.getFullYear()} - <Link to='/'>book vibe</Link>. all rights reserved
  </h6>
</section>
    </div>
    );
};

export default Footer;