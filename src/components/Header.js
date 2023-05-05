import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Header = () => {

    const [toggle, setToggle] = useState(false);
    const handleToggle = () => setToggle(!toggle);

    return (
        <header className="flex justify-between px-5 py-2 bg-primary text-white">
            <a href="/" className="logo text-2xl font-bold text-accent">Yong Rui</a>

            <nav className="hidden md:block">
                <ul className="flex">
                    <li><a href="https://github.com/hiyongrui">Projects</a></li>
                    <li><a href="https://drive.google.com/file/d/1M-EXUjBLJaFLHE7KN40MXXnBtsfTOZkP/view?usp=share_link">Testimonials</a></li>
                </ul>
            </nav>

            <nav className={
                !toggle ? "mobile-nav left-[-100%]"
                        : "mobile-nav left-0"
                }>
                <ul className="flex flex-col">
                    <li><a href="/#">About</a></li>
                    <li><a href="/#projects">Projects</a></li>
                </ul>
            </nav>

            <button onClick={handleToggle} className="block md:hidden">
                {
                    !toggle ? <AiOutlineMenu size={30}/> : <AiOutlineClose size={30}/>
                }
            </button>
        </header>

    )
}

export default Header;