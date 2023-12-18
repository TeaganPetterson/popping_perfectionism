"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@nextui-org/react";

const Footer: React.FC = () => {
    return (
        <div className="w-screen aspect-[3/1] my-2 md:my-4 text-white justify-evenly bg-cerulean-500">
            <div className="flex h-full justify-around p-8">
                {/* Contacts */}
                <div className="h-full justify-evenly flex flex-col items-center">
                    <h3 className="text-lg font-bold mb-2">Mailing Address</h3>
                    <p className="font-body">123 Main Street</p>
                    <p className="font-body">Suite 456</p>
                    <p className="font-body">City, State 78901</p>
                    <h3 className="text-lg font-bold mb-2">Contact Us</h3>
                    <p className="font-body">Phone: (123) 456-7890</p>
                    <p className="font-body">Email: info@example.com</p>
                </div>

                {/* Page Redirects */}
                <div className="h-full justify-evenly flex flex-col items-center">
                    <h3 className="text-lg font-bold mb-2">Explore</h3>
                    <br />
                    <Link href="/" className="font-body">
                        Home
                    </Link>
                    <Link href="/podcast" className="font-body">
                        Podcast
                    </Link>
                    <Link href="/events" className="font-body">
                        Events
                    </Link>
                    <Link href="/coaching" className="font-body">
                        Coaching
                    </Link>
                    <Link href="/blog" className="font-body">
                        Blog
                    </Link>
                </div>

                {/* Social Media Links */}
                <div className="h-full justify-evenly flex flex-col items-center">
                    <h3 className="text-lg font-bold mb-2">Follow Us</h3>
                    <div className="space-x-4 flex">
                        <Button
                            variant="solid"
                            className="bg-white rounded-lg m-1 transition-transform transform-gpu hover:translate-y-[-4px] drop-shadow-md hover:shadow-[0px_7.1195px_5.89515px_-1.89515px_rgba(0,0,0,0.3)]"
                        >
                            <Link href="https://www.instagram.com/poppingperfectionism/?hl=en">
                                <Image
                                    alt="Youtube"
                                    src="/icons/instagram-icon.svg"
                                    width="50"
                                    height="50"
                                    className="h-1/2"
                                ></Image>
                            </Link>
                        </Button>
                        <Button
                            variant="solid"
                            className="bg-white rounded-lg m-1 transition-transform transform-gpu hover:translate-y-[-4px] drop-shadow-md hover:shadow-[0px_7.1195px_5.89515px_-1.89515px_rgba(0,0,0,0.3)]"
                        >
                            <Link href="https://www.facebook.com/poppingperfectionism/">
                                <Image
                                    alt="Youtube"
                                    src="/icons/facebook-icon.svg"
                                    width="50"
                                    height="50"
                                    className="h-1/2"
                                ></Image>
                            </Link>
                        </Button>
                        <Button
                            variant="solid"
                            className="bg-white rounded-lg m-1 transition-transform transform-gpu hover:translate-y-[-4px] drop-shadow-md hover:shadow-[0px_7.1195px_5.89515px_-1.89515px_rgba(0,0,0,0.3)]"
                        >
                            <Link href="https://www.linkedin.com/company/popping-perfectionism/about/">
                                <Image
                                    alt="Youtube"
                                    src="/icons/linkedin-icon.svg"
                                    width="50"
                                    height="50"
                                    className="h-1/2"
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
                                    src="/icons/youtube-icon.svg"
                                    width="50"
                                    height="50"
                                    className="h-1/2"
                                ></Image>
                            </Link>
                        </Button>
                    </div>
                    <div className="font-bold">Found a bug on website?</div>
                    <div>
                        If you found anything on the <br />
                        website that is not working <br />
                        properly, please tell us about <br />
                        it, so we can fix it.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
