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
            <div
                className={`w-screen h-screen bg-cover relative ${
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

            {/* Menu bar */}
            <div
                className={`fixed top-0 left-0 w-full ${
                    scrolled ? "bg-white shadow-md" : "bg-transparent"
                }`}
            >
                <div
                    className={`w-full flex justify-around items-center p-5 ${
                        scrolled ? "text-black" : "text-white"
                    }`}
                >
                    <div className="flex justify-start">
                        Popping Perfectionism
                    </div>
                    <div className="flex justify-center">
                        <a href="#" className="px-5">
                            Home
                        </a>
                        <a href="#" className="px-5">
                            About
                        </a>
                        <a href="#" className="px-5">
                            Contact
                        </a>
                    </div>
                    <div className="flex justify-end">Anna and Alysha</div>
                </div>
            </div>

            {/* Counters */}
            <div
                className="w-3/4 aspect-[3/1]"
                style={{ backgroundImage: `url("/Bubble-bg.jpeg")` }}
            >
                Numbers
            </div>

            {/* Links Grid */}
            <div className="w-3/4 grid grid-rows-2 grid-flow-col gap-1">
                <div className="bg-slate-200 aspect-square">a</div>
                <div className="bg-slate-200 aspect-square">a</div>
                <div className="bg-slate-200 col-span-2">a</div>
                <div className="bg-slate-200 aspect-square">a</div>
                <div className="bg-slate-200 aspect-square">a</div>
            </div>

            {/* Intake/Contact Form */}
            <div className="flex min-h-screen items-center justify-center">
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
