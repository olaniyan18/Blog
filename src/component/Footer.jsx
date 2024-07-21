/** @format */

import logo from "../images/image-avatar.webp";
export default function Footer() {
  return (
    <div>
      <footer className='footer'>
        <img className='image' src={logo} />
        <span className='name'>Greg Hooper </span>
      </footer>
    </div>
  );
}
