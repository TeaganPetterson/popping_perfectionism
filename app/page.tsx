"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { Button, ButtonGroup } from "@nextui-org/react";

export default function Home() {
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

        // Event listener for scrolling

        window.addEventListener("scroll", handleScroll);

        handleResize();

        window.addEventListener("resize", handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const renderNavigation = () => {
        if (isSmallScreen) {
            // Render hamburger menu for small screens
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
                    {/* Hamburger menu icon */}
                    <div className="cursor-pointer justify-end">&#9776;</div>
                </div>
            );
        } else {
            // Render regular menu for larger screens
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
        <main className="flex flex-col items-center justify-between w-screen">
            {/* Menu bar */}
            <div
                className={`fixed top-0 left-0 w-full z-[9999] transform transition-transform ${
                    scrolled
                        ? "bg-white shadow-lg duration-500"
                        : "bg-transparent scale-[1.02] duration-500"
                }`}
            >
                {renderNavigation()}
            </div>
            {/* Top Banner */}
            <div
                className={`w-screen aspect-video bg-cover relative mb-2 md:mb-4 ${
                    scrolled ? "bg-white" : "bg-transparent"
                }`}
                style={{
                    backgroundImage: `url("/backgrounds/laying-banner.jpg")`,
                }}
            >
                <div className="absolute inset-0 flex items-end justify-start p-16">
                    {/* Overlay text */}
                    <h1 className="text-3xl text-white font-bold">
                        Turning Perfectionists <br />
                        into Connectionists
                    </h1>
                </div>
            </div>
            {/* Intro Youtube Video */}
            <div className="w-3/4 my-2 md:my-4">
                <iframe
                    className="w-full aspect-video rounded-lg"
                    src="https://www.youtube.com/embed/RIIhXg6Sj6Q?si=WegvbnB91FNV_rnD"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
            </div>
            {/* Counters */}
            <div className="w-screen aspect-[3/1] my-2 md:my-4 text-white grid grid-rows-2 grid-flow-col justify-evenly bg-fuchsia-950">
                <div className="w-2/3 text-center place-self-center">
                    <h1 className="text-4xl font-black text-sky-300">
                        Join Us As We Perfect Our Connectionism
                    </h1>
                    <br />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>
                </div>
                <div className="w-screen grid grid-rows-1 grid-flow-col justify-around place-content-center">
                    <div className="flex flex-col justify-self-left items-center justify-evenly">
                        <CountUp
                            end={100}
                            className="text-6xl font-black text-sky-300"
                        />
                        <div>Episodes</div>
                    </div>
                    <div className="flex flex-col justify-self-center items-center justify-evenly">
                        <CountUp
                            end={190900}
                            className="text-6xl font-black text-sky-300"
                        />
                        <div>Boys checked off Anna's list</div>
                    </div>
                    <div className="flex flex-col justify-self-right items-center justify-evenly">
                        <CountUp
                            end={50}
                            className="text-6xl font-black text-sky-300"
                        />
                        <div>Connectionists</div>
                    </div>
                </div>
            </div>
            {/* Links Grid */}
            <div className="w-3/4 my-2 md:my-4 items-center">
                <div className="w-full justify-self-center grid grid-rows-2 grid-flow-col gap-2">
                    <Button className="bg-slate-200 aspect-square rounded-lg hover:scale-[1.03] transform transition-transform duration-500">
                        <Link
                            href="#"
                            className="bg-sky-400 h-full w-full flex items-center justify-center rounded-lg"
                        >
                            Top left
                        </Link>
                    </Button>
                    <Button className="bg-slate-200 aspect-square rounded-lg hover:scale-[1.03] transform transition-transform duration-500">
                        <Link
                            href="#"
                            className="bg-sky-400 h-full w-full flex items-center justify-center rounded-lg"
                        >
                            Bottom left
                        </Link>
                    </Button>
                    <Button
                        href="#"
                        className="bg-slate-200 col-span-2 rounded-lg hover:scale-[1.015] transform transition-transform duration-500"
                    >
                        <Link
                            href="#"
                            className="bg-sky-400 h-full w-full flex items-center justify-center rounded-lg"
                        >
                            Meet the Crew
                        </Link>
                    </Button>
                    <Button className="bg-slate-200 aspect-square rounded-lg hover:scale-[1.03] transform transition-transform duration-500">
                        <Link
                            href="#"
                            className="bg-sky-400 h-full w-full flex items-center justify-center rounded-lg"
                        >
                            Bottom Middle
                        </Link>
                    </Button>
                    <Button className="bg-slate-200 aspect-square rounded-lg hover:scale-[1.03] transform transition-transform duration-500">
                        <Link
                            href="#"
                            className="bg-sky-400 h-full w-full flex items-center justify-center rounded-lg"
                        >
                            Bottom right
                        </Link>
                    </Button>
                </div>
            </div>
            {/* Intake/Contact Form */}
            <div className="flex h-4/5 items-center justify-center my-2 md:my-4">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96">
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="name"
                        >
                            Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="Your Name"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Your Email"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="message"
                        >
                            Message
                        </label>
                        <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="message"
                            placeholder="Your Message"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            {/* Footer */}
            {/* Footer */}
            <div className="w-screen aspect-[3/1] my-2 md:my-4 text-white justify-evenly bg-sky-950">
                <div className="flex h-full justify-around p-8">
                    {/* Contacts */}
                    <div className="h-full justify-evenly flex flex-col items-center">
                        <h3 className="text-lg font-bold mb-2">
                            Mailing Address
                        </h3>
                        <p>123 Main Street</p>
                        <p>Suite 456</p>
                        <p>City, State 78901</p>
                        <h3 className="text-lg font-bold mb-2">Contact Us</h3>
                        <p>Phone: (123) 456-7890</p>
                        <p>Email: info@example.com</p>
                    </div>

                    {/* Page Redirects */}
                    <div className="h-full justify-evenly flex flex-col items-center">
                        <h3 className="text-lg font-bold mb-2">Explore</h3>
                        <br />
                        <Link href="/">Home</Link>
                        <Link href="/podcast">Podcast</Link>
                        <Link href="/events">Events</Link>
                        <Link href="/coaching">Coaching</Link>
                        <Link href="/blog">Blog</Link>
                    </div>

                    {/* Social Media Links */}
                    <div className="h-full justify-evenly flex flex-col items-center">
                        <h3 className="text-lg font-bold mb-2">Follow Us</h3>
                        <div className="space-x-4 flex">
                            <Button
                                radius="full"
                                variant="solid"
                                className="bg-white rounded-full m-1 transition-transform transform-gpu hover:scale-105 h-10 w-10 flex items-center justify-center"
                            >
                                <Link href="https://www.facebook.com/poppingperfectionism/">
                                    <Image
                                        alt="Facebook"
                                        src="/icons/facebook-icon.png"
                                        width="30"
                                        height="30"
                                    ></Image>
                                </Link>
                            </Button>
                            <Button
                                variant="solid"
                                className="bg-white rounded-full m-1 transition-transform transform-gpu hover:scale-105 h-10 w-10 flex items-center justify-center"
                                radius="full"
                            >
                                <Link href="https://www.instagram.com/poppingperfectionism/?hl=en">
                                    <Image
                                        alt="Instagram"
                                        src="/icons/instagram-icon.png"
                                        width="30"
                                        height="30"
                                    ></Image>
                                </Link>
                            </Button>
                            <Button
                                variant="solid"
                                className="bg-white rounded-full m-1 transition-transform transform-gpu hover:scale-105 h-10 w-10 flex items-center justify-center"
                                radius="full"
                            >
                                <Link href="https://www.linkedin.com/company/popping-perfectionism/about/">
                                    <Image
                                        alt="LinkedIn"
                                        src="/icons/linkedin-icon.png"
                                        width="30"
                                        height="30"
                                    ></Image>
                                </Link>
                            </Button>
                            <Button
                                variant="solid"
                                className="bg-white rounded-full m-1 transition-transform transform-gpu hover:scale-105 h-10 w-10 flex items-center justify-center"
                            >
                                <Link href="https://www.youtube.com/channel/UCCNAUBfqraWmx8A2YO4BDqA">
                                    <Image
                                        alt="Youtube"
                                        src="/icons/youtube-icon.svg"
                                        width="30"
                                        height="30"
                                    ></Image>
                                </Link>
                            </Button>
                        </div>
                        <div>Found a bug on website?</div>
                        <div>
                            If you found anything on the <br />
                            website that is not working <br />
                            properly, please tell us about <br />
                            it, so we can fix it.
                        </div>
                    </div>
                </div>
            </div>
            f
        </main>
    );
}
