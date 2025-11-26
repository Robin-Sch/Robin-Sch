'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { JSX, useState } from 'react';
import { FaGithub } from 'react-icons/fa';

import avatar from '../assets/avatar.webp';

export default function Navbar(): JSX.Element {
	const pathname = usePathname();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const isActive = (link: string): boolean => pathname === link;

	return (
		<nav className="bg-gray-900 text-white shadow-md">
			<div className="container mx-auto flex items-center justify-between p-4">
				<Link href="/" className="flex items-center">
					<img src={avatar.src} alt="robinsch.net" className="w-8 h-8 mr-2 rounded-full" />
					<span className="font-bold">Robin&apos;s Site</span>
				</Link>

				<ul className="hidden md:flex space-x-6">
					<li>
						<Link href="/" className={isActive('/') ? 'text-red-700 font-semibold' : 'hover:text-gray-300'}>
							Home
						</Link>
					</li>
					<li>
						<Link href="/skills" className={isActive('/skills') ? 'text-red-700 font-semibold' : 'hover:text-gray-300'}>
							Skills
						</Link>
					</li>
					<li>
						<Link href="/projects" className={isActive('/projects') ? 'text-red-700 font-semibold' : 'hover:text-gray-300'}>
							Projects
						</Link>
					</li>
					<li>
						<Link href="/contact" className={isActive('/contact') ? 'text-red-700 font-semibold' : 'hover:text-gray-300'}>
							Contact
						</Link>
					</li>
					<li>
						<Link href="https://github.com/Robin-Sch" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300" aria-label="GitHub">
							<FaGithub size={20} />
						</Link>
					</li>
				</ul>

				<button className="md:hidden focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
					<div
						className="w-6 h-0.5 bg-white mb-1 transition-all duration-300"
						style={{ transform: isMenuOpen ? 'rotate(45deg) translateY(6px)' : 'none' }}
					></div>
					<div className="w-6 h-0.5 bg-white mb-1 transition-all duration-300" style={{ opacity: isMenuOpen ? 0 : 1 }}></div>
					<div className="w-6 h-0.5 bg-white transition-all duration-300" style={{ transform: isMenuOpen ? 'rotate(-45deg) translateY(-6px)' : 'none' }}></div>
				</button>
			</div>

			{isMenuOpen && (
				<ul className="md:hidden flex flex-col bg-gray-900 text-white space-y-2 p-4">
					<li>
						<Link href="/" className={isActive('/') ? 'text-red-700 font-semibold block' : 'hover:text-gray-300 block'} onClick={() => setIsMenuOpen(false)}>
							Home
						</Link>
					</li>
					<li>
						<Link
							href="/skills"
							className={isActive('/skills') ? 'text-red-700 font-semibold block' : 'hover:text-gray-300 block'}
							onClick={() => setIsMenuOpen(false)}
						>
							Skills
						</Link>
					</li>
					<li>
						<Link
							href="/projects"
							className={isActive('/projects') ? 'text-red-700 font-semibold block' : 'hover:text-gray-300 block'}
							onClick={() => setIsMenuOpen(false)}
						>
							Projects
						</Link>
					</li>
					<li>
						<Link
							href="/contact"
							className={isActive('/contact') ? 'text-red-700 font-semibold block' : 'hover:text-gray-300 block'}
							onClick={() => setIsMenuOpen(false)}
						>
							Contact
						</Link>
					</li>
					<li>
						<Link href="https://github.com/Robin-Sch" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300" aria-label="GitHub">
							<FaGithub size={20} />
						</Link>
					</li>
				</ul>
			)}
		</nav>
	);
}
