import React from 'react';
import logo from '../../../assets/Auto Ritz.png'

const Footer = () => {
    return (
        <footer className="footer grid-rows-2 p-10 pb-2 bg-[#1F1F1F] text-neutral-content text-white">
  <div>
    <img  className='h-44 w-64 rounded-xl' src={logo} alt="" />
    <p className='text-lg'>Fast and easy to use;  Get personalized  car <br /> recommendations sorted  on various <br /> car selection options.</p>
  </div> 
  <div>

<h2 className='text-3xl font-bold'>Subscribe Auto Ritz</h2>
<input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
  </div> 
  <div>
    <span className="footer-title text-2xl">Legal</span> 
    <a className="link link-hover text-xl">Terms of use</a> 
    <a className="link link-hover text-xl">Privacy policy</a> 
    <a className="link link-hover text-xl">Cookie policy</a>
  </div> 
  <div>
    <span className="footer-title text-2xl">Social</span> 
    <a className="link link-hover text-xl">Instagram</a> 
    <a className="link link-hover text-xl ">Facebook</a> 
    <a className="link link-hover text-xl">Github</a>
    <a className="link link-hover text-xl">Twitter</a> 
  </div> 
  <div>
  <span className="footer-title text-2xl">Company</span> 
    <a className="link link-hover text-xl">About us</a> 
    <a className="link link-hover text-xl">Contact</a> 
    <a className="link link-hover text-xl">Jobs</a> 
    <a className="link link-hover text-xl">Press kit</a>

  </div> 
  <div>
    <span className="footer-title text-2xl">Apps</span> 
    <a className="link link-hover text-xl">Mac</a> 
    <a className="link link-hover text-xl">Windows</a> 
    <a className="link link-hover text-xl">iPhone</a> 
    <a className="link link-hover text-xl">Android</a>
  </div>
</footer>
    );
};

export default Footer;

