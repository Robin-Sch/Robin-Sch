import { JSX } from 'react';

import android from '../assets/badges/android.svg';
import arduino from '../assets/badges/arduino.svg';
import esp from '../assets/badges/esp.svg';
import html from '../assets/badges/html.webp';
import java from '../assets/badges/java.webp';
import kotlin from '../assets/badges/kotlin.svg';
import postgresql from '../assets/badges/postgresql.svg';
import raspberry from '../assets/badges/raspberry.svg';
// import react from '../assets/badges/react.svg';
import redis from '../assets/badges/redis.svg';
import typescript from '../assets/badges/typescript.svg';

import airportBelt from '../assets/projects/airport-checkin/belt.webp';
import airportInput from '../assets/projects/airport-checkin/input.webp';
import airportSide from '../assets/projects/airport-checkin/side.webp';
import airportSorter from '../assets/projects/airport-checkin/sorter.webp';
import animatronicEyes from '../assets/projects/animatronic-eyes.webp';
import autodogAdminFailures from '../assets/projects/autodog/admin-failures.webp';
import autodogAdminFeedback from '../assets/projects/autodog/admin-feedback.webp';
import autodogConnectionFailures from '../assets/projects/autodog/connection-failures.webp';
import autodogConnectionFeedback from '../assets/projects/autodog/connection-feedback.webp';
import autodogConnectionLogs from '../assets/projects/autodog/connection-logs.webp';
import autodogConnectionNotifications from '../assets/projects/autodog/connection-notifications.webp';
import autodogConnectionStatistics from '../assets/projects/autodog/connection-statistics.webp';
import autodogHistoryCar from '../assets/projects/autodog/history-car.webp';
import autodogHistoryOverview from '../assets/projects/autodog/history-overview.webp';
import autodogLibraryComponent from '../assets/projects/autodog/library-component.webp';
import autodogLibraryComponentFix from '../assets/projects/autodog/library-component-fix.webp';
import autodogLibraryModel from '../assets/projects/autodog/library-model.webp';
import perceptionFamily from '../assets/projects/perception/family.webp';
import perceptionFull from '../assets/projects/perception/full.webp';
import perceptionMulti from '../assets/projects/perception/multi.webp';
import perceptionUpCose from '../assets/projects/perception/up-close.webp';
import cloudrush from '../assets/projects/cloudrush.webp';
import pokeBot from '../assets/projects/pokebot.webp';

import Card, { CardProps } from '../components/Card';
import Layout from '../components/Layout';

const projects: CardProps[] = [
	{
		id: 'pokebot',
		name: 'PokéBot',
		badges: [
			{ img: typescript, label: 'TypeScript' },
			{ img: postgresql, label: 'PostgreSQL' },
			{ img: redis, label: 'Redis' },
		],
		shortDesc: <p>A Pokémon bot for Discord and Telegram</p>,
		tags: [
			{ label: '2020-now', type: 'primary' },
			{ label: 'active', type: 'success' },
		],
		description: (
			<>
				<p>
					An bot (app) to play Pokémon inside both Discord and Telegram. As of start of 2025, the bot has 85k users and 5.5 million Pokémon whilst being used in
					9.5k discord groups.
				</p>
				<p>
					I learned coding in a team and working with a big project. Since this was one of my first projects, it also gave me experience with coding in general.
				</p>
			</>
		),
		moreDescription: (
			<>
				<p>
					This project started when the biggest Pokémon bot on Discord (Pokécord) decided to shut down. After the announcement many small Pokémon bots quickly
					appeared, including the one I made. I already had made a basic Pokémon bot before, and together with some of my friends we turned it into a complete
					functional Discord bot. In the end of 2024 I decided to also make the bot available on Telegram, which got released in the start of 2025.
				</p>

				<p>
					You can choose your own starter Pokémon from each generation, from Generation Kanto all the way to Generation Galar. When typing/chatting in chat,
					random Pokémon (based on their rarity) will spawn and you can catch them. However, you need to know/guess the name to catch it (there is a hint
					command if you need a small hint). Every 10 minutes you can also hunt for a random Pokémon from the wild.
				</p>

				<p>
					To get a specific Pokémon, you can search on the market and buy Pokémon from others. This way you can get unique and rare Pokémon! And if you do have
					a rare Pokémon, you can put it on the market for other people to buy it. You can also put it in an auction, this way other players can bid for your
					Pokémon. Additionally, you can always directly trade Pokémon and currency with other players.
				</p>

				<p>
					There are also a few quests you should complete with various rewards like redeems and credits (in-game currency). As a guild (group) owner, you have
					many settings you can change like in which channel Pokémon should (not) spawn and redirect all spawns into a specific channel.
				</p>
			</>
		),
		links: [{ label: 'Website', url: 'https://l.robinsch.net/3OcPNI', target: '_blank' }],
		images: [pokeBot],
	},
	{
		id: 'perception',
		name: 'Perception',
		badges: [{ img: esp, label: 'ESP32' }],
		shortDesc: <p>A multi-sensory interactive structure</p>,
		tags: [
			{ label: '2025', type: 'primary' },
			{ label: 'finished', type: 'success' },
		],
		description: (
			<>
				<p>
					Together with 6 other students from my student team, we created a project that combines multiple senses. We took a lot of inspiration from visually
					impaired people, which formed the foundation of Perception.
				</p>
				<p>
					The light bulbs provide light that you can see but also warmth that you can feel. In addition, you can also feel the big contrast between the dark,
					hard and cold panels vs the light, soft and warm panels. Lastly, we included sound that represented the meaning of light to combine all 3 senses into
					a single project.
				</p>
				<br />
				<p>
					As you walk up to a light spot, it will brighten up and when you walk away it will slowly dim. This creates a feeling that the structure is alive and
					reacts to your presence.
				</p>
			</>
		),
		moreDescription: (
			<>
				<p>
					For Perception, I was responsible for handling all the electronics. This goes from the wiring of the bulbs to coding the interactive part and making
					sure the structure is well-grounded.
				</p>
				<p>
					In total there were 8 light spots, 4 &quot;single&quot; spots and 4 spots that combined into a bigger spot. Each of the 8 spots was an isolated
					circuit with a few components. We used ESP32 for controlling everything, and a so-called Triac Dimmer to dim the light bulbs. For detecting if someone
					is near the structure there is a mm wave sensor and these 3 components combined form the base of a single spot.
				</p>
				<br />
				<p>
					The ESP continuously probes the mm wave sensor and asks for the distance to the closest person. If this distance is less than a pre-defined threshold,
					then the bulbs should brighten up. But if the distance is more than this distance, they should dim down.
					<br />
					The Triac dimmer is directly connected to AC input, and whenever the sine wave crosses y=0 it will send a signal to the ESP. Once the ESP receives
					this signal, it will create an interrupt and uses last known status of the mm wave sensor to decide if:
				</p>
				<ul>
					<li>- bulb should be brightened: immediately send a signal back</li>
					<li>- bulb should be dimmed: wait a few micro seconds before sending signal back</li>
				</ul>
				<p>
					<br />
					The Triac dimmer delays the sine wave until it receives the signal from the ESP, so the quicker the signal is received by the dimmer, the earlier the
					sine will go up and thus the more power will be delivered. Or the other way around, the longer the delay, the more of the sine wave is cut off and
					hence the more dimmed the bulbs will be.
				</p>
				<br />
				<p>
					We encountered multiple issues that needed to be fixed. The first one is weatherproofness. As the installation is meant to be placed outside, we
					needed to make sure that all electronics do not get wet. For this, we have hot glued all the electronics on the bottom of plastic boxes and hang these
					boxes upside down in the structure. In addition, we also used plastic zip bags to make sure that the input power cables remain dry. Whilst these may
					not have been the most optimal solution, they were very effective and Perception survived multiple days of rain.
					<br />
					We also had the problem that the dimmer caused flickering bulbs, which happens if too much of the sine wave is cut off. I calculated the time
					difference between zero-cross and the peak of the sine wave (= 0.25 * (1/frequency)) and substracted about 100 micro seconds for
					receiving/processing/sending delays.
				</p>
				<br />
				<p>
					Fun fact, each spot uses 3 bulbs of 250 watt, so in total our installation draws a theoretical 6.000 kW (when all spots are fully on). I have measured
					the power draw of 4 spots (my measurement tool maxes out at 2.5 kW) to be about 2.345 kW when fully on and 1.880 kW when dimmed. So all the bulbs will
					draw 4.690 kW / 3.760 kW.
				</p>
			</>
		),
		links: [],
		images: [perceptionFull, perceptionUpCose, perceptionMulti, perceptionFamily],
	},
	{
		id: 'autodog',
		name: 'AutoDog',
		badges: [
			{ img: kotlin, label: 'Kotlin' },
			{ img: android, label: 'Android' },
		],
		shortDesc: <p>A car diagnostics app</p>,
		tags: [
			{ label: '2025', type: 'primary' },
			{ label: 'finished', type: 'success' },
		],
		description: (
			<>
				<p>
					This app allows car owner and manufacturers to view the status and diagnostics of their cars. It is made by 6 CS students (including me), and we
					received full marks for it.
				</p>
				<p>
					During this project I learned various components about developing an Android app. Besides getting the serial connection with the car to work, I also
					was responsible for the overal UI design and glueing everything together. Sadly, the source code is not allowed to be public due to school policy.
				</p>
			</>
		),
		moreDescription: (
			<>
				<p>
					One of my group members was part of a student team that wanted an app for the car they were making. Together with that student team we developed this
					app, which allows car owners (the users) and manufacturers (the student team) to connect their phone to the car, and then see various details about
					their car.
				</p>
				<p>
					For instance, the app is able to determine if there is a component that is broken/failing. It can also detect logs (such as lights turned on/off) and
					view live data such as battery level, temperature and more. There is also a library where you can see all details about your car (and all cars
					supported by the app), including the specific components and details about those.
				</p>
				<p>
					The app also includes an admin panel, on which car manufacturers can login and view the failures that happened in their fleet of cars (of the same
					model). Therefore, if there is a failure of the same component across many cars, they can investigate the failure and improve on future iterations of
					the car. In addition, car owners can submit feedback about the car which the manufacturer can also read.
				</p>
			</>
		),
		links: [],
		images: [
			autodogConnectionFailures,
			autodogConnectionLogs,
			autodogConnectionStatistics,
			autodogConnectionNotifications,
			autodogConnectionFeedback,
			autodogHistoryOverview,
			autodogHistoryCar,
			autodogLibraryModel,
			autodogLibraryComponent,
			autodogLibraryComponentFix,
			autodogAdminFailures,
			autodogAdminFeedback,
		],
	},
	{
		id: 'airport-checkin-robot',
		name: 'Airport check-in robot',
		badges: [
			{ img: typescript, label: 'TypeScript' },
			{ img: html, label: 'HTML' },
			{ img: raspberry, label: 'Raspberry' },
			{ img: arduino, label: 'Arduino' },
		],
		shortDesc: <p>A luggage sorting robot based on QR codes</p>,
		tags: [
			{ label: '2024', type: 'primary' },
			{ label: 'finished', type: 'success' },
		],
		description: (
			<>
				<p>
					This robot simulates the complete check-in at an airport, and is made by a group of 6 CS students (including me). Due to our robot having 0 issues,
					having a creative idea and giving a good demo we received full marks for this project.
				</p>
				<p>I learned basic electronics and SCRUM for this project. Sadly, the source code is not allowed to be public due to school policy.</p>
			</>
		),
		moreDescription: (
			<>
				<p>
					We received an assigment to build a sorting robot based on some part of an airport system. We decided to go for a complete check-in system, including
					selecting the destination, taking the baggage and sending it to the correct plane. The robot is made of fischertechnik, and is controlled by a
					Raspberry pi and Arduino UNO.
				</p>
				<p>
					It has a heavy focus on error handling, as this is a very important aspect of airport baggage handling. For this, it uses 5 sensors to make sure no
					baggage is lost and everything runs as it is supposed to. We tackled more than 15 different failure points, ranging from cable disconnection to
					hardware failure and belt blockage.
				</p>
				<p>
					It starts by selecting the correct destination on the touchscreen, after which an unique QR code gets printed which you can stick on your baggage.
					Then, after placing the baggage on the belt it will go into the machine, where a camera scans the QR code and sorts it accordingly to one of the three
					destinations.
				</p>
				<p>
					It keeps track of the amount of baggage in the plane storage, and there is a button to simulate a plane taking off (thus storage being emptied). There
					is also a debug panel for manual control of the belt and sorting arm, aswell as a live status list of the sensor outputs and the state of the machine.
				</p>
			</>
		),
		links: [],
		images: [airportInput, airportSide, airportSorter, airportBelt],
	},
	{
		id: 'cloudrush',
		name: 'CloudRush',
		badges: [{ img: java, label: 'Java' }],
		shortDesc: <p>A two-dimensional, arcade style game</p>,
		tags: [
			{ label: '2023', type: 'primary' },
			{ label: 'finished', type: 'success' },
		],
		description: (
			<>
				<p>CloudRush is a Java game made with a friend of mine. It was an assignment to learn the basics of java development, and we got full marks for it.</p>
				<p>I learned about Java and game development with this project.</p>
			</>
		),
		moreDescription: (
			<>
				<p>
					In this game, you are a cloud, which can generate rain and lightnings. You are going through various cities, filled with people, flowers and street
					lanterns. With the rain you can water the flowers, but also make people get wet. By striking lightning on street lanterns, you can turn them on and/or
					off, but if you miss, you might hit and electrocute a pedestrian. During the game, there will appear various bonuses/debuffs in the sky, which can be
					collected to uncover their positive (or negative!) effect.
				</p>
				<p>
					The goal is to collect as many points as possible. You get points for different actions, like watering the flowers and (deducted) points for making
					people wet. Actions have different weights, so you do not get the same amount of points for a different action. Those weights are also affected by the
					collected bonuses/debuffs, so make sure to collect those too. After the game ends, you can type in your nickname and admire your score on the
					leaderboard in the main menu.
				</p>
			</>
		),
		links: [{ url: 'https://github.com/Robin-Sch/CloudRush', label: 'Github', target: '_blank' }],
		images: [cloudrush],
	},
	{
		id: 'animatronic-eyes',
		name: 'Animatronic eyes',
		badges: [{ img: arduino, label: 'Arduino' }],
		shortDesc: <p>A spooky Arduino project</p>,
		tags: [
			{ label: '2022', type: 'primary' },
			{ label: 'finished', type: 'success' },
		],
		description: (
			<>
				<p>This is an Arduino UNO project, where the 3d printed eyes will follow you when you walk past.</p>
				<p>I learned about soldering and 3d printing skills while creating this project.</p>
			</>
		),
		moreDescription: (
			<>
				<p>
					For computer science we (a friend of mine and me) had to create a project using an Arduino UNO. At first glance we thought creating animatronic eyes
					would be too difficult, but after some research it seemed doable.
				</p>
				<p>
					The concept of this project is that when you walk past, the eyes should follow you. We have achieved that using the ADNS 3080 sensor, which is an
					optical flow sensor. The ADNS 3080 measures where there is movement, and outputs x and y coördinates. After that the Arduino calculates how much the
					servo&apos;s should move and sends the signal to move them.
				</p>
				<p>
					The only downside/problem with this sensor is that when you wear dark clothes, the sensor does nottracks you as well as when you wear light clothes.
					We have tried to fix this problem by adding IR leds, however, that still did not fix it. Other than that, it works perfectly, despite &quot;only&quot;
					having 30x30 pixels.{' '}
				</p>
				<p>
					We decided to put the eyes in a box behind a picture of Mark Zuckerberg, to make a privacy statement. This way it looks like he is always watching you
					(as his eyes will follow you when you walk past him).
				</p>
			</>
		),
		links: [{ url: 'https://github.com/Robin-Sch/arduino-animatronic-eyes', label: 'Github', target: '_blank' }],
		images: [animatronicEyes],
	},
	// {
	// 	id: 'rstorage',
	// 	name: 'RStorage',
	// 	badges: [
	// 		{ img: typescript, label: 'TypeScript' },
	// 		{ img: react, label: 'React' },
	// 	],
	// 	shortDesc: 'An encrypted DIY cloud file storage',
	// 	tags: [
	// 		{ label: '2021, 2025', type: 'primary' },
	// 		{ label: 'not in active development', type: 'warning' },
	// 	],
	// 	description: (
	// 		<>
	// 			<p>
	// 				RStorage is a way to store your files distributed and encrypted across multiple servers. There is a panel (master), which has multiple storage nodes.
	// 				You upload a file to the panel, which will cut it into chunks and send it encrypted to the nodes.
	// 			</p>
	// 			<p>I learned a lot about encryption, file streaming and multi threading with this project.</p>
	// 		</>
	// 	),
	// 	moreDescription: (
	// 		<>
	// 			<p>
	// 				The idea of RStorage is that you have <strong>one</strong> panel, which is like the &quot;master&quot;. This is meant to be installed on a PC, but it
	// 				can be installed on a server too (but that is not recommended). You also have (multiple) nodes, which is where the encrypted files will be stored. The
	// 				files will be split up into parts and all parts will be spread over all nodes. The encryption key is stored with the panel and there is no way for the
	// 				nodes to decrypt the parts. It uses &quot;military grade&quot; AES-256 encryption.
	// 			</p>
	// 			<p>
	// 				If you upload a file, the file is sent using a stream to the panel. After that the panel cuts the stream into chunks, and sends each chunk to a worker
	// 				(for multi-threading). After that the worker encrypts the chunk (using AES-256) with the key belonging to a specific node (each node has its own
	// 				unique key, which is only known to the panel) and sends the encrypted stream to the node (encrypted over TLS), which then stores it on disk.
	// 				<br />
	// 				For downloading it is the same process, but then reversed.
	// 				<br />
	// 				Everything is done using streams, because else you need A LOT of memory to store each file in plaintext and encrypted (or add unnecesary disk
	// 				read/writes).
	// 			</p>
	// 			<p>
	// 				This project is more meant for myself and to learn from rather than to be actually used. There are many better alternatives like for example
	// 				cryptomator and rclone to use encryption with cloud storage.
	// 			</p>
	// 		</>
	// 	),
	// 	links: [{ url: 'https://github.com/Robin-Sch/RStorage', label: 'Github', target: '_blank' }],
	// 	images: [],
	// },
];

export default function Projects(): JSX.Element {
	return (
		<div className="container mx-auto p-4">
			<div className="dw-full flex flex-col gap-16 p-8 max-w-6xl mx-auto">
				{projects.map((project, i) => {
					project.reversed = i % 2 !== 0;
					return <Card key={i} data={project} />;
				})}
			</div>
		</div>
	);
}

Projects.getLayout = function getLayout(page: JSX.Element): JSX.Element {
	return <Layout>{page}</Layout>;
};
