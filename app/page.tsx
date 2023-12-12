"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { Button, ButtonGroup } from "@nextui-org/react";
import Navbar from "@/public/code_elements/navbar";
import Footer from "@/public/code_elements/footer";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-between w-screen font-roboto">
            {/* Menu bar */}
            <Navbar />
            {/* Top Banner */}
            <div
                className={`w-screen aspect-video bg-cover relative mb-2 md:mb-4`}
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
            <div className="w-screen aspect-[3/1] my-2 md:my-4 text-white grid grid-rows-2 grid-flow-col justify-evenly bg-fuchsia-300">
                <div className="w-2/3 text-center place-self-center">
                    <h1 className="text-4xl font-black text-white">
                        The Growing World of Connectionists
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
                        <h1>
                            <span className="relative">
                                <CountUp
                                    end={100}
                                    className="text-6xl font-black text-white"
                                />
                                <span className="absolute text-black translate-x-2 translate-y-4 z-[-5]">
                                    <CountUp
                                        end={100}
                                        className="text-6xl font-black text-french-rose-450"
                                    />
                                </span>
                            </span>
                        </h1>
                        <div>Episodes</div>
                    </div>
                    <div className="flex flex-col justify-self-center items-center justify-evenly">
                        <CountUp
                            end={190900}
                            className="text-6xl font-black text-white"
                        />
                        <div>Boys checked off Anna's list</div>
                    </div>
                    <div className="flex flex-col justify-self-right items-center justify-evenly">
                        <CountUp
                            end={50}
                            className="text-6xl font-black text-white"
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
                            className="bg-robin-egg-500 h-full w-full flex items-center justify-center rounded-lg"
                        >
                            Top left
                        </Link>
                    </Button>
                    <Button className="bg-slate-200 aspect-square rounded-lg hover:scale-[1.03] transform transition-transform duration-500">
                        <Link
                            href="#"
                            className="bg-robin-egg-500 h-full w-full flex items-center justify-center rounded-lg"
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
                            className="bg-robin-egg-500 h-full w-full flex items-center justify-center rounded-lg"
                        >
                            Meet the Crew
                        </Link>
                    </Button>
                    <Button className="bg-slate-200 aspect-square rounded-lg hover:scale-[1.03] transform transition-transform duration-500">
                        <Link
                            href="#"
                            className="bg-robin-egg-500 h-full w-full flex items-center justify-center rounded-lg"
                        >
                            Bottom Middle
                        </Link>
                    </Button>
                    <Button className="bg-slate-200 aspect-square rounded-lg hover:scale-[1.03] transform transition-transform duration-500">
                        <Link
                            href="#"
                            className="bg-robin-egg-500 h-full w-full flex items-center justify-center rounded-lg"
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
            <div className="bg-robin-egg-700">
                <Footer />
            </div>
        </main>
    );
}
