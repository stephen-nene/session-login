import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Footer() {

    const darkMode = useSelector((state) => state.app.darkMode);
  return (
    <footer className={`${darkMode? "bg-blue-900" : "bg-blue-500" } text-white py-4 mt-auto`} >
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} EBlazz Techs. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
