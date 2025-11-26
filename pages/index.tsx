import { JSX, useEffect, useState } from 'react';

import avatar from '../assets/avatar.webp';
import Button from '../components/Links/Button';

const positions = [
	{ text: 'a Cybersecurity Enthusiast', class: 'text-red-500' },
	{ text: 'a Command-Line Ninja', class: 'text-red-500' },
	{ text: 'a Homelab Tinkerer', class: 'text-red-500' },
	{ text: 'a Software Developer', class: 'text-red-500' },
	{ text: 'an Open Source Lover', class: 'text-red-500' },
];

export default function Index(): JSX.Element {
	const [textWhite, setTextWhite] = useState<string>('');
	const [textMarked, setTextMarked] = useState<string>('');
	const [textMarkedClass, setTextMarkedClass] = useState<string>('');

	useEffect(() => {
		// Typing effect and carousel logic
		const typeSentence = async (sentence: string, set: (text: string) => void): Promise<void> => {
			const letters = sentence.split('');
			let result = '';
			for (const letter of letters) {
				await wait(100);
				result += letter;
				set(result);
			}
		};

		const deleteSentence = async (result: string, set: (text: string) => void): Promise<void> => {
			const letters = result.split('');
			while (letters.length > 0) {
				await wait(100);
				letters.pop();
				set(letters.join(''));
			}
		};

		const carouse = async (): Promise<void> => {
			// Loop forever through positions
			for (let i = 0; i < positions.length; i++) {
				setTextMarkedClass(positions[i].class);
				await typeSentence(positions[i].text, setTextMarked);
				await wait(1500);
				await deleteSentence(textMarked, setTextMarked);
				await wait(500);
				if (i >= positions.length - 1) {
					i = -1;
				}
			}
		};

		const wait = (ms: number): Promise<unknown> => new Promise((resolve) => setTimeout(resolve, ms));

		// Initialize typing effect and carousel after page load
		typeSentence("I'm Robin, ", setTextWhite);
		carouse();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="flex flex-col w-full min-h-screen justify-center items-center">
			<img src={avatar.src} alt="Avatar" className="rounded-full" style={{ height: '33vh' }} />

			<div className="flex justify-center">
				<h1 className="text-4xl">
					{textWhite}
					<span className={textMarkedClass}>{textMarked}</span>
				</h1>
				<span className="input-cursor"></span>
			</div>

			<div className="pt-3">
				<Button url="/skills" label="Skills" className="px-6 py-2 mx-2" />
				<Button url="/projects" label="Projects" className="px-6 py-2 mx-2" />
				<Button url="/contact" label="Contact" className="px-6 py-2 mx-2" />
			</div>
		</div>
	);
}
