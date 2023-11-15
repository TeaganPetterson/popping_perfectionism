"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import getShowEpisodes from "../../spotify";

export default function Home() {
    const [scrolled, setScrolled] = useState(false);
    const [latestEpisodes, setLatestEpisodes] = useState([]);

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

    useEffect(() => {
        const fetchEpisodes = async () => {
            try {
                const showId = "36QJTdNdnLKKHJ9T9yis1x";

                const data = await getShowEpisodes(showId, "US", 5);
                setLatestEpisodes(data.items);
                console.log("Episodes: ", setLatestEpisodes);
            } catch (error) {
                console.error("Error fetching episodes: ", error);
            }
        };

        fetchEpisodes();
    }, []);

    return (
        <main
            className="flex flex-col items-center justify-between w-screen h-screen"
            style={{
                backgroundImage: `url("/backgrounds/podcast-background.jpeg")`,
            }}
        >
            {/* Menu bar */}
            <div
                className={`fixed top-0 left-0 w-full z-[9999] transform transition-transform ${
                    scrolled
                        ? "bg-white shadow-lg duration-500"
                        : "bg-transparent scale-[1.02] duration-500"
                }`}
            >
                <div
                    className={`w-full flex justify-around items-center p-5 ${
                        scrolled ? "text-black" : "text-white"
                    }`}
                >
                    <a
                        href="/"
                        className="flex justify-start text-2xl font-extrabold"
                    >
                        Popping Perfectionism
                    </a>
                    <div className="flex justify-center">
                        <Link
                            href="/podcast"
                            className="px-5 font-bold underline"
                        >
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
            </div>

            {/* Top Banner */}
            <div>
                <div className="absolute inset-0 flex items-end justify-start p-16">
                    {/* Overlay text */}
                    <h1 className="text-4xl text-white font-bold">
                        Popping Perfectionism
                    </h1>
                </div>
            </div>

            {/* Episodes */}
            <div></div>
        </main>
    );
}