"use client";
import Link from "next/link";
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
        // Call the getLatestEpisodes function and update the state with the latest episodes
        getLatestEpisodes("https://anchor.fm/s/40734de0/podcast/rss")
            .then((episodes: Episode[]) => setLatestEpisodes(episodes))
            .catch((error) =>
                console.error("Error getting latest episodes:", error)
            );
    }, []);

    // for (let i = 0; i < 5; i++) {
    //     console.log(
    //         latestEpisodes.length > 0
    //             ? latestEpisodes[i].title[0]
    //             : "No episodes available"
    //     );
    // }

    return (
        <main className="flex flex-col items-center justify-between w-screen bg-cover bg-gradient-to-b from-sky-800 to-fuchsia-800">
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
                    <Link
                        href="/"
                        className="flex justify-start text-2xl font-extrabold"
                    >
                        Popping Perfectionism
                    </Link>
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
            <div
                className="relative inset-0 flex items-center justify-center p-16 w-full aspect-[4/1] bg-cover"
                // style={{
                //     backgroundImage: `url("/backgrounds/podcast-background.jpeg")`,
                // }}
            >
                <div className="relative pt-32">
                    {/* Overlay text */}
                    <h1 className="text-3xl text-white font-bold">Episodes</h1>
                </div>
            </div>

            {/* Episodes */}
            <div className="relative p-16">
                {latestEpisodes.map((episode, index) => (
                    <div
                        key={index}
                        className="mb-4 rounded-lg p-4 odd:bg-white bg-slate-50 flex"
                    >
                        <div className="relative pr-8 text-center">
                            <p className="text-xs">Season</p>
                            <p className="text-xl font-semibold">
                                {episode.title[1]}
                            </p>
                            <p className="text-xs">Episode</p>
                            <p className="text-xl font-semibold">
                                {episode.title[2]}
                            </p>
                        </div>
                        <div className="relative">
                            <p className="text-xs">
                                {episode.pubDate[0].slice(0, -12)}
                            </p>
                            <p className="font-semibold">{episode.title[3]}</p>
                            <p className="font-bold text-2xl">
                                {episode.title[4]}
                            </p>
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
                        </div>
                        {/* Add other episode details as needed */}
                    </div>
                ))}
            </div>
        </main>
    );
}
