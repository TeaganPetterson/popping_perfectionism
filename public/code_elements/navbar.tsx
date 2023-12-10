// navbar.tsx

import React, { useEffect, useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };

        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 1000);
        };

        window.addEventListener("scroll", handleScroll);
        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const renderNavigation = () => {
        if (isSmallScreen) {
            return (
                <div
                    className={`w-full flex justify-between items-center p-5 ${
                        scrolled ? "text-black" : "text-white drop-shadow-lg"
                    }`}
                >
                    <a
                        href="/"
                        className="flex justify-start text-2xl font-extrabold"
                    >
                        Popping Perfectionism
                    </a>
                    <div className="cursor-pointer justify-end">&#9776;</div>
                </div>
            );
        } else {
            return (
                <div
                    className={`w-full flex justify-around items-center p-5 ${
                        scrolled
                            ? "text-black"
                            : "text-white drop-shadow-lg drop-shadow-white"
                    }`}
                >
                    <Link
                        href="/"
                        className="flex justify-start text-2xl font-extrabold"
                    >
                        Popping Perfectionism
                    </Link>
                    <div className="flex justify-center">
                        <Link href="/podcast" className="px-5">
                            Podcast
                        </Link>
                        <Link href="/events" className="px-5">
                            Events
                        </Link>
                        <Link href="/coaching" className="px-5">
                            Coaching
                        </Link>
                        <Link href="/blog" className="px-5">
                            Blog
                        </Link>
                    </div>
                    <div className="flex justify-end text-2xl font-extrabold">
                        Anna and Alysha
                    </div>
                </div>
            );
        }
    };

    return (
        <div
            className={`fixed top-0 left-0 w-full z-[9999] transform transition-transform ${
                scrolled
                    ? "bg-white shadow-lg duration-500"
                    : "bg-transparent scale-[1.02] duration-500"
            }`}
        >
            {renderNavigation()}
        </div>
    );
};

export default Navbar;
