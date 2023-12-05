"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
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

    for (let i = 0; i < 5; i++) {
        console.log(
            latestEpisodes.length > 0
                ? latestEpisodes[i].title[0]
                : "No episodes available"
        );
    }

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
                className="relative inset-0 flex items-end justify-start p-16 w-full aspect-[5/3] bg-cover"
                style={{
                    backgroundImage: `url("/backgrounds/podcast-background.jpeg")`,
                }}
            ></div>

            {/* Episodes */}
            <div className="relative p-16">
                <table>
                    <tbody>
                        {latestEpisodes.map((episode, index) => (
                            <tr
                                key={index}
                                className="mb-4 odd:bg-white even:bg-slate-50"
                            >
                                <td>{episode.title[0]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    );
}
