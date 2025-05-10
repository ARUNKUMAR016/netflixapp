import React from 'react'

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-black text-white p-10 my-5 ">
  <nav>
    <h6 className="footer-title text-red-600">Services</h6>
    <a className="link link-hover hover:text-red-500">Branding</a>
    <a className="link link-hover hover:text-red-500">Design</a>
    <a className="link link-hover hover:text-red-500">Marketing</a>
    <a className="link link-hover hover:text-red-500">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title text-red-600">Company</h6>
    <a className="link link-hover hover:text-red-500">About us</a>
    <a className="link link-hover hover:text-red-500">Contact</a>
    <a className="link link-hover hover:text-red-500">Jobs</a>
    <a className="link link-hover hover:text-red-500">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title text-red-600">Legal</h6>
    <a className="link link-hover hover:text-red-500">Terms of use</a>
    <a className="link link-hover hover:text-red-500">Privacy policy</a>
    <a className="link link-hover hover:text-red-500">Cookie policy</a>
  </nav>
  <form>
    <h6 className="footer-title text-red-600">Newsletter</h6>
    <fieldset className="w-80">
      <label className="label-text mb-2 block">Enter your email address</label>
      <div className="join">
        <input
          type="text"
          placeholder="username@site.com"
          className="input input-bordered join-item text-black" />
        <button className="btn bg-red-600 hover:bg-red-700 text-white join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>

  )
}

export default Footer