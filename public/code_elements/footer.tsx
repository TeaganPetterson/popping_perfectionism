"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@nextui-org/react";

const Footer: React.FC = () => {
    return (
        <div className="w-screen aspect-[3/1] my-2 md:my-4 text-white justify-evenly bg-robin-egg-700">
            <div className="flex h-full justify-around p-8">
                {/* Contacts */}
                <div className="h-full justify-evenly flex flex-col items-center">
                    <h3 className="text-lg font-bold mb-2">Mailing Address</h3>
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
                            variant="solid"
                            className="bg-white rounded-full m-1 transition-transform transform-gpu hover:scale-105 h-10 w-10 flex items-center justify-center"
                            style={{ borderRadius: "50%" }}
                        >
                            <Link href="https://www.facebook.com/poppingperfectionism/">
                                <Image
                                    alt="Facebook"
                                    src="/icons/facebook-icon.png"
                                    width="28"
                                    height="28"
                                ></Image>
                            </Link>
                        </Button>
                        <Button
                            variant="solid"
                            className="bg-white rounded-full m-1 transition-transform transform-gpu hover:scale-105 h-10 w-10 flex items-center justify-center"
                            style={{ borderRadius: "50%" }}
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
                            className="bg-white radius-full m-1 transition-transform transform-gpu hover:scale-105 h-10 w-10 flex items-center justify-center"
                            style={{ borderRadius: "50%" }}
                        >
                            <Link href="https://www.linkedin.com/company/popping-perfectionism/about/">
                                <Image
                                    alt="LinkedIn"
                                    src="/icons/linkedin-icon.png"
                                    width="27"
                                    height="27"
                                ></Image>
                            </Link>
                        </Button>
                        <Button
                            variant="solid"
                            className="bg-white m-1 transition-transform transform-gpu hover:scale-105 h-fit w-fit flex items-center justify-center"
                            style={{ borderRadius: "50%" }}
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
