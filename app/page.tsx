'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    // Event listener for scrolling
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-screen">
		<div
			className={`w-screen h-screen bg-cover relative ${
			scrolled ? 'bg-white' : 'bg-transparent'
			}`}
			style={{
			backgroundImage: `url("/bubble_bg.jpeg")`,
			}}
		>
			<div className="absolute inset-0 flex items-center justify-center">
			{/* Overlay text */}
				<h1 className="text-4xl text-white font-bold">Popping Perfectionism</h1>
			</div>
		</div>
		
		{/* Menu bar */}
		<div
			className={`fixed top-0 left-0 w-full ${
			scrolled ? 'bg-white shadow-md' : 'bg-transparent'
			}`}
		>
			<div className={`w-full flex justify-around items-center p-5 ${
					scrolled ? 'text-black' : 'text-white'
					}`}>
				<div className='flex justify-start'>
					Popping Perfectionism
				</div>
				<div className='flex justify-center'>
					<a href="#" className='px-5'>Home</a>
					<a href="#" className='px-5'>About</a>
					<a href="#" className='px-5'>Contact</a>
				</div>
				<div className='flex justify-end'>
					Anna and Alysha
				</div>
			</div>
		</div>
		<div className='w-4/5 aspect-[3/1]' style={{backgroundImage: `url("/Bubble-bg.jpeg")`}}>
			Numbers
		</div>
		<div className='w-4/5 grid grid-rows-2 grid-flow-col gap-1'>
			<div className='bg-slate-200 aspect-square'>a</div>
			<div className='bg-slate-200 aspect-square'>a</div>
			<div className='bg-slate-200 col-span-2'>a</div>
			<div className='bg-slate-200 aspect-square'>a</div>
			<div className='bg-slate-200 aspect-square'>a</div>
		</div>
		<div>
			Intake/Contact Form
		</div>
    </main>
  );
}
