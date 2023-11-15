"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };

        // Event listener for scrolling
        window.addEventListener("scroll", handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []); // Empty dependency array means this effect runs once after the initial render

    return (
        <main className="flex flex-col items-center justify-between w-screen">
            {/* Menu bar */}
            <div
                className={`fixed top-0 left-0 w-full z-[9999] transform transition-transform ${
                    scrolled
                        ? "bg-white shadow-lg scale-[1.02] duration-500"
                        : "bg-transparent duration-500"
                }`}
            >
                <div
                    className={`w-full flex justify-around items-center p-5 ${
                        scrolled ? "text-black" : "text-white"
                    }`}
                >
                    <div className="flex justify-start text-2xl font-extrabold">
                        Popping Perfectionism
                    </div>
                    <div className="flex justify-center">
                        <a href="#" className="px-5">
                            Podcast
                        </a>
                        <a href="#" className="px-5">
                            Events
                        </a>
                        <a href="#" className="px-5">
                            Coaching
                        </a>
                        <a href="#" className="px-5">
                            Blog
                        </a>
                    </div>
                    <div className="flex justify-end text-2xl font-extrabold">
                        Anna and Alysha
                    </div>
                </div>
            </div>

            {/* Top Banner */}
            <div
                className={`w-screen h-screen bg-cover relative mb-2 md:mb-4 ${
                    scrolled ? "bg-white" : "bg-transparent"
                }`}
                style={{
                    backgroundImage: `url("/balloon-pin.jpg")`,
                }}
            >
                <div className="absolute inset-0 flex items-end justify-start p-16">
                    {/* Overlay text */}
                    <h1 className="text-4xl text-white font-bold">
                        Popping Perfectionism
                    </h1>
                </div>
            </div>

            {/* Intro Youtube Video */}
            <div className="w-3/4 my-2 md:my-4">
                <iframe
                    className="w-full aspect-video rounded-lg"
                    src="https://www.youtube.com/embed/eAES_fDO8Yc?si=4pKHs5z_iCBd35RY"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
            </div>

            {/* Counters */}
            <div
                className="w-3/4 aspect-[3/1] my-2 md:my-4 rounded-lg"
                style={{ backgroundImage: `url("/Bubble-bg.jpeg")` }}
            >
                Numbers
            </div>

            {/* Links Grid */}
            <div className="w-3/4 grid grid-rows-2 grid-flow-col gap-2 my-2 md:my-4">
                <a
                    href="#"
                    className="bg-slate-200 aspect-square rounded-lg hover:scale-[1.03] transform transition-transform"
                    style={{ backgroundImage: `url("/bubble-1.jpeg")` }}
                >
                    a
                </a>
                <a
                    href="#"
                    className="bg-slate-200 aspect-square rounded-lg hover:scale-[1.03] transform transition-transform"
                    style={{ backgroundImage: `url("/bubble-3.jpeg")` }}
                >
                    a
                </a>
                <a
                    href="#"
                    className="bg-slate-200 col-span-2 rounded-lg hover:scale-[1.03] transform transition-transform"
                    style={{ backgroundImage: `url("/bubble-2.jpeg")` }}
                >
                    a
                </a>
                <a
                    href="#"
                    className="bg-slate-200 aspect-square rounded-lg hover:scale-[1.03] transform transition-transform"
                    style={{ backgroundImage: `url("/bubble-4.jpeg")` }}
                >
                    a
                </a>
                <a
                    href="#"
                    className="bg-slate-200 aspect-square rounded-lg hover:scale-[1.03] transform transition-transform"
                    style={{ backgroundImage: `url("/bubble-5.jpeg")` }}
                >
                    a
                </a>
            </div>

            {/* Intake/Contact Form */}
            <div className="flex min-h-screen items-center justify-center my-2 md:my-4">
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
        </main>
    );
}
