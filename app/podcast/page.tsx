"use client";
import Link from "next/link";
import Image from "next/image";
import { Button, ButtonGroup } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { getLatestEpisodes } from "../../spotify";

export default function Home() {
    interface Episode {
        title: string[];
        description: string[];
        link: string[];
        guid: object;
        pubDate: string[];
        enclosure: object;
    }

    const [scrolled, setScrolled] = useState(false);
    const [latestEpisodes, setLatestEpisodes] = useState<Episode[]>([]);

    const [isSmallScreen, setIsSmallScreen] = useState(false);

    const [descriptionVisibility, setDescriptionVisibility] = useState(
        latestEpisodes.map(() => false)
    );

    const toggleDescriptionVisibility = (index: number) => {
        setDescriptionVisibility((prevVisibility) => {
            const newVisibility = [...prevVisibility];
            newVisibility[index] = !newVisibility[index];
            return newVisibility;
        });
    };

    const [episodeVisibility, setEpisodeVisibility] = useState(false);

    useEffect(() => {
        // Set visibility to true after a short delay for smooth transition
        const visibilityTimeout = setTimeout(() => {
            setEpisodeVisibility(true);
        }, 500);

        // Cleanup the timeout on component unmount
        return () => clearTimeout(visibilityTimeout);
    }, []);

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
        window.addEventListener("resize", handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, []); // Empty dependency array means this effect runs once after the initial render

    useEffect(() => {
        // Call the getLatestEpisodes function and update the state with the latest episodes
        getLatestEpisodes("https://anchor.fm/s/40734de0/podcast/rss")
            .then((episodes: Episode[]) => setLatestEpisodes(episodes))
            .catch((error) =>
                console.error("Error getting latest episodes:", error)
            );
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
            <div className="fixed w-screen h-screen bg-gradient-to-b from-sky-200 via-sky-400 via-[27%] to-sky-200 z-[-999]" />
            {/* Menu bar */}
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
            <div className="relative flex flex-col p-16 w-5/6 aspect-[4/1] bg-cover">
                <div className="flex pt-32 justify-center items-center">
                    {/* Overlay text */}
                    <h1 className="text-8xl text-white font-bold italic">
                        <span className="relative">
                            Episodes
                            <span className="absolute top-0 left-0 text-8xl text-black translate-x-2 translate-y-4 z-[-5]">
                                Episodes
                            </span>
                        </span>
                    </h1>
                </div>
                <div className="relative flex justify-between items-end mt-16">
                    <div className="align-left">Filters</div>
                    <div className="align-center flex justify-between">
                        <Button
                            variant="solid"
                            className="bg-white rounded-lg m-1 transition-transform transform-gpu hover:scale-105"
                        >
                            <Link href="https://open.spotify.com/show/36QJTdNdnLKKHJ9T9yis1x?si=ccL5gzeuSRSycs8ulVwIww&nd=1">
                                <Image
                                    alt="Spotify"
                                    src="/links/spotify.svg"
                                    width="50"
                                    height="50"
                                    className="h-2/3 hover:{transform: scale(1.05)}"
                                ></Image>
                            </Link>
                        </Button>
                        <Button
                            variant="solid"
                            className="bg-white rounded-lg m-1 transition-transform transform-gpu hover:scale-105"
                        >
                            <Link href="https://podcasts.apple.com/us/podcast/popping-perfectionism/id1541900808">
                                <Image
                                    alt="Apple"
                                    src="/links/apple.svg"
                                    width="50"
                                    height="50"
                                    className="h-2/3"
                                ></Image>
                            </Link>
                        </Button>
                        <Button
                            variant="solid"
                            className="bg-white rounded-lg m-1 transition-transform transform-gpu hover:scale-105"
                        >
                            <Link href="https://www.youtube.com/channel/UCCNAUBfqraWmx8A2YO4BDqA">
                                <Image
                                    alt="Youtube"
                                    src="/links/youtube.svg"
                                    width="50"
                                    height="50"
                                    className="h-1/2"
                                ></Image>
                            </Link>
                        </Button>
                    </div>
                    <div className="align-right">Search</div>
                </div>
            </div>

            {/* Episodes */}
            <div
                className={`relative p-4 w-5/6 transition-opacity duration-500 ease-in-out ${
                    episodeVisibility ? "opacity-100" : "opacity-0"
                }`}
            >
                {latestEpisodes.map((episode, index) => (
                    <div
                        key={index}
                        className="mb-4 rounded-lg p-4 bg-white w-full flex"
                    >
                        <div className="relative pr-8 text-center">
                            <p className="text-xs text-sky-900">Season</p>
                            <p className="text-xl font-semibold text-sky-700">
                                {episode.title[1]}
                            </p>
                            <p className="text-xs text-sky-900">Episode</p>
                            <p className="text-xl font-semibold text-sky-700">
                                {episode.title[2]}
                            </p>
                        </div>
                        <div className="relative">
                            <p className="text-xs text-sky-900">
                                {episode.pubDate[0].slice(0, -12)}
                            </p>
                            <p className="font-semibold text-sky-900">
                                {episode.title[3]}
                            </p>
                            <p className="font-bold text-2xl text-sky-700">
                                {episode.title[4]}
                            </p>
                            <div
                                className={`text-s ${
                                    descriptionVisibility[index]
                                        ? "block"
                                        : "hidden"
                                }`}
                                dangerouslySetInnerHTML={{
                                    __html: episode.description[0],
                                }}
                            />
                            <Button
                                onClick={() =>
                                    toggleDescriptionVisibility(index)
                                }
                                className="text-fuchsia-700 cursor-pointer"
                            >
                                {descriptionVisibility[index]
                                    ? "Hide Description"
                                    : "Show Description"}
                            </Button>
                        </div>
                        {/* Add other episode details as needed */}
                    </div>
                ))}
            </div>
        </main>
    );
}
