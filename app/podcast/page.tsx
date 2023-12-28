"use client";
import Link from "next/link";
import Image from "next/image";
import { Button, ButtonGroup } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { getLatestEpisodes } from "../../spotify";
import Footer from "@/public/code_elements/footer";
import Navbar from "@/public/code_elements/navbar";

export default function Home() {
    interface Episode {
        title: string[];
        description: string[];
        link: string[];
        guid: object;
        pubDate: string[];
        enclosure: object;
    }

    const [latestEpisodes, setLatestEpisodes] = useState<Episode[]>([]);

    const [uniqueSeasons, setUniqueSeasons] = useState<string[]>([]);

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
        // Call the getLatestEpisodes function and update the state with the latest episodes
        getLatestEpisodes("https://anchor.fm/s/40734de0/podcast/rss")
            .then((episodes: Episode[]) => setLatestEpisodes(episodes))
            .catch((error) =>
                console.error("Error getting latest episodes:", error)
            );
    }, []);

    useEffect(() => {
        const seasons = [
            ...new Set(latestEpisodes.map((episode) => episode.title[3])),
        ];
        setUniqueSeasons(seasons);
    }, [latestEpisodes]);

    const [selectedSeason, setSelectedSeason] = useState<string | null>(null);

    const handleSeasonChange = (season: string) => {
        console.log("Selected Season:", season);
        setSelectedSeason(season);
    };

    return (
        <main className="flex flex-col items-center justify-between w-screen font-title">
            <div className="fixed w-screen h-screen bg-gradient-to-b from-cerulean-300 via-cerulean-500 via-[27%] to-cerulean-300 z-[-999]" />
            {/* Menu bar */}
            <Navbar />

            {/* Top Banner */}
            <div className="relative flex flex-col p-16 w-5/6 aspect-[4/1] bg-cover">
                <div className="flex pt-32 justify-center items-center">
                    {/* Overlay text */}
                    <h1 className="text-8xl text-white font-black italic">
                        <span className="relative">
                            EPISODES
                            <span className="absolute top-0 left-0 text-8xl text-cerulean-700 translate-x-2 translate-y-4 z-[-5]">
                                EPISODES
                            </span>
                        </span>
                    </h1>
                </div>
                {/* Episodes Description */}
                <div className="w-2/3 flex pt-16 place-self-center justify-center items-center">
                    <p className="text-center text-white text-lg font-body">
                        Co-hosts Anna and Alysha take you through the different
                        ways you can recognize, <br></br>cope with, and heal
                        from perfectionism through their mindset of
                        connectionism.
                    </p>
                </div>
                <div className="relative flex items-center justify-center mt-16">
                    <div className="absolute left-0">
                        <select
                            id="seasonFilter"
                            value={selectedSeason || ""}
                            onChange={(e) => handleSeasonChange(e.target.value)}
                            className="rounded-lg drop-shadow-md h-12 lg:w-[130%] font-body font-semibold text-cerulean-700 hover:text-french-rose-700 hover:cursor-pointer appearance-none"
                        >
                            <option value="" className="text-center">
                                All Seasons
                            </option>
                            {uniqueSeasons.map((season) => (
                                <option
                                    key={season}
                                    value={season}
                                    className="text-center"
                                >
                                    {season}
                                </option>
                            ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 lg:-right-16 flex items-center pr-3 pointer-events-none">
                            <svg
                                className="h-5 w-5 text-cerulean-700"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="none"
                                stroke="currentColor"
                            >
                                <path
                                    d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </div>

                    <div className="absolute place-self-center flex w-fit">
                        <Button
                            variant="solid"
                            className="bg-white rounded-lg m-1 transition-transform transform-gpu hover:translate-y-[-4px] drop-shadow-md hover:shadow-[0px_7.1195px_5.89515px_-1.89515px_rgba(0,0,0,0.3)]"
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
                            className="bg-white rounded-lg m-1 transition-transform transform-gpu hover:translate-y-[-4px] drop-shadow-md hover:shadow-[0px_7.1195px_5.89515px_-1.89515px_rgba(0,0,0,0.3)]"
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
                            className="bg-white rounded-lg m-1 transition-transform transform-gpu hover:translate-y-[-4px] drop-shadow-md hover:shadow-[0px_7.1195px_5.89515px_-1.89515px_rgba(0,0,0,0.3)]"
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
                    <div className="absolute right-0">Search</div>
                </div>
            </div>

            {/* Episodes */}
            <div
                className={`relative p-4 w-5/6 transition-opacity duration-500 ease-in-out font-roboto ${
                    episodeVisibility ? "opacity-100" : "opacity-0"
                }`}
            >
                {/* 0 7.1195px 1.89515px -1.89515px rgba(0,0,0,.3); */}
                {latestEpisodes
                    .filter((episode) => {
                        if (selectedSeason === null || selectedSeason === "") {
                            return true; // Show all episodes when "All Seasons" is selected
                        } else {
                            return episode.title[3] === selectedSeason;
                        }
                    })
                    .map((episode, index) => (
                        <div className="shadow-[0px_7.1195px_1.89515px_-1.89515px_rgba(0,0,0,0.3)] rounded-lg">
                            <div
                                key={index}
                                className="mb-8 rounded-lg p-4 bg-white w-full flex"
                            >
                                <div className="relative pr-8 text-center">
                                    <p className="text-xs text-robin-egg-950 font-body">
                                        Season
                                    </p>
                                    <p className="text-2xl font-bold text-robin-egg-700">
                                        {episode.title[1]}
                                    </p>
                                    <p className="text-xs text-robin-egg-950 font-body">
                                        Episode
                                    </p>
                                    <p className="text-2xl font-bold text-robin-egg-700">
                                        {episode.title[2]}
                                    </p>
                                </div>
                                <div className="relative">
                                    <p className="text-xs text-robin-egg-950 font-body">
                                        {episode.pubDate[0].slice(0, -12)}
                                    </p>
                                    <p className="font-bold text-2xl text-robin-egg-600 font-title">
                                        {episode.title[4]}
                                    </p>
                                    <p className="font-semibold text-robin-egg-900">
                                        {episode.title[3]}
                                    </p>
                                    {/* want the links on each episode box */}
                                    <div
                                        className={`text-s font-body ${
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
                                        className="text-french-rose-500 text-xs cursor-pointer hover:text-french-rose-300 font-body"
                                    >
                                        {descriptionVisibility[index]
                                            ? "Less"
                                            : "More"}
                                    </Button>
                                </div>
                                {/* Add other episode details as needed */}
                            </div>
                        </div>
                    ))}
            </div>
            <style jsx global>{`
                select option {
                    background-color: white;
                    font-family: "font-body";
                }
            `}</style>
            <div className="bg-cerulean-500">
                <Footer />
            </div>
        </main>
    );
}
