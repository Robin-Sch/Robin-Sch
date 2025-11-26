import { JSX } from 'react';

import arduino from '../assets/badges/arduino.svg';
import bash from '../assets/badges/bash.svg';
import cloudflare from '../assets/badges/cloudflare.svg';
import css from '../assets/badges/css.webp';
import debian from '../assets/badges/debian.svg';
import discordjs from '../assets/badges/discordjs.webp';
import docker from '../assets/badges/docker.svg';
import esp from '../assets/badges/esp.svg';
import html from '../assets/badges/html.webp';
import javascript from '../assets/badges/javascript.svg';
import java from '../assets/badges/java.webp';
import kotlin from '../assets/badges/kotlin.svg';
import mongodb from '../assets/badges/mongodb.svg';
import postgresql from '../assets/badges/postgresql.svg';
import proxmox from '../assets/badges/proxmox.svg';
import python from '../assets/badges/python.svg';
import raspberry from '../assets/badges/raspberry.svg';
import react from '../assets/badges/react.svg';
import redis from '../assets/badges/redis.svg';
import sqlite from '../assets/badges/sqlite.webp';
import svelte from '../assets/badges/svelte.svg';
import typescript from '../assets/badges/typescript.svg';

import backend_and_server_side from '../assets/skills/backend_and_server_side.svg';
import ctfs from '../assets/skills/ctfs.svg';
import embedded_systems from '../assets/skills/embedded_systems.svg';
import frontend_and_apps from '../assets/skills/frontend_and_apps.svg';
import system_admin from '../assets/skills/system_admin.svg';
import workflow_and_collaboration from '../assets/skills/workflow_and_collaboration.svg';

import Card, { CardProps } from '../components/Card';
import Layout from '../components/Layout';
import InlineLink from '../components/Links/InlineLink';

const skills: CardProps[] = [
	{
		id: 'backend',
		name: 'Backend & Server-side',
		badges: [
			{ img: javascript, label: 'JavaScript' },
			{ img: typescript, label: 'TypeScript' },
			{ img: python, label: 'Python' },
			{ img: java, label: 'Java' },
			{ img: discordjs, label: 'Discord.js' },
			{ img: postgresql, label: 'PostgreSQL' },
			{ img: mongodb, label: 'MongoDB' },
			{ img: sqlite, label: 'Sqlite' },
			{ img: redis, label: 'Redis' },
		],
		shortDesc: null,
		tags: [],
		description: (
			<p>
				I started creating backend/server-side projects using JavaScript (with Node.js) since 2018. It started with Discord bots, but soon after also
				experimented with websites (using express) and more.
				<br />
				In 2023, I switched from JavaScript to TypeScript as it allows for type checking which results in better code quality and an improved developer
				experience.
				<br />
				Starting from 2024 I decided to expirement with go and rust to write some simple scripts for my homelab, and I also used python and java for a few
				projects. These days, I mainly use TypeScript because I am the most familiar with it.
				<br />
				<br />
				For these projects, I have used various database types such as PostgreSQL, MongoDB and SQLite. I have also used Redis for caching in various projects.
				Please see the projects page for more information about my projects.
			</p>
		),
		moreDescription: null,
		links: [
			{ url: 'projects#pokebot', label: 'PokéBot', target: '_self' },
			{ url: 'https://github.com/Robin-Sch/discord-template', label: 'Discord Bot Template', target: '_blank' },
		],
		images: [backend_and_server_side],
	},
	{
		id: 'frontend',
		name: 'Frontend & Apps',
		badges: [
			{ img: html, label: 'HTML' },
			{ img: css, label: 'CSS' },
			{ img: svelte, label: 'Svelte' },
			{ img: react, label: 'React' },
			{ img: kotlin, label: 'Kotlin' },
		],
		shortDesc: null,
		tags: [],
		description: (
			<p>
				In 2019 I learned how to use HTML and basic CSS, and because of my backend experience with JavaScript I also used it here. Since then I have created
				many sites using bare HTML and CSS, however, most of them are either not online anymore or private.
				<br />
				In 2023 I started using SvelteKit and React, for example this site but also the PokéBot&apos;s one. I also created a Java game called CloudRush in 2023
				and in 2025 I created an app called AutoDog using Kotlin.
			</p>
		),
		moreDescription: null,
		links: [
			{ url: 'https://github.com/Robin-Sch/Robin-Sch', label: 'This site', target: '_blank' },
			{ url: 'projects#pokebot', label: 'PokéBot Site', target: '_self' },
			{ url: 'projects#cloudrush', label: 'CloudRush', target: '_self' },
			{ url: 'projects#autodog', label: 'AutoDog', target: '_self' },
		],
		images: [frontend_and_apps],
	},
	{
		id: 'system-admin',
		name: 'System admin (homelab)',
		badges: [
			{ img: bash, label: 'Bash' },
			{ img: docker, label: 'Docker' },
			{ img: debian, label: 'Debian' },
			{ img: proxmox, label: 'Proxmox' },
			{ img: cloudflare, label: 'Cloudflare' },
		],
		shortDesc: null,
		tags: [],
		description: (
			<>
				<p>
					I am mangaging multiple Linux systems, primarely Debian, to host some services and get experience as a system admin. These services include my own
					projects but also selfhosted services for my homelab. You can read more about my homelab setup{' '}
					<InlineLink url="https://docs.robinsch.net/guides/homelab/1-setup/" label="here" target="_blank" />. I have also created a list with useful (bash)
					scripts for various things, which can be found on{' '}
					<InlineLink url="https://docs.robinsch.net/linux/scripts/" label="my documentation site" target="_blank" />.
				</p>
				<br />
				<p>
					On my servers, I am running various things (using docker), like for example{' '}
					<InlineLink url="https://www.home-assistant.io/" label="Home Assistant" target="_blank" />,{' '}
					<InlineLink url="https://www.keycloak.org/" label="Keycloak" target="_blank" />,{' '}
					<InlineLink url="https://nextcloud.com/" label="Nextcloud" target="_blank" />,{' '}
					<InlineLink url="https://pi-hole.net/" label="Pi-hole" target="_blank" />
				</p>
			</>
		),
		moreDescription: null,
		links: [],
		images: [system_admin],
	},
	{
		id: 'embedded-systems',
		name: 'Embedded Systems',
		badges: [
			{ img: arduino, label: 'Arduino' },
			{ img: esp, label: 'ESP32' },
			{ img: raspberry, label: 'Raspberry pi' },
		],
		shortDesc: null,
		tags: [],
		description: (
			<p>
				My first embedded system project was created in 2022, which used an Arduino UNO to control a pair of 3d printed eyes which would follow you through the
				room. Additionally, besides some small projects for in my house (e.g. soldering/controlling a RGB strip) I also created a luggage sorting robot. In 2025
				I joined a student team at my university and worked a lot with ESP32, for example in project Perception.
			</p>
		),
		moreDescription: null,
		links: [
			{ url: 'projects#animatronic-eyes', label: 'Animatronic eyes', target: '_self' },
			{ url: 'projects#airport-checkin-robot', label: 'Sorting robot', target: '_self' },
			{ url: 'projects#perception', label: 'Perception', target: '_self' },
		],
		images: [embedded_systems],
	},
	{
		id: 'ctfs',
		name: 'CTFs',
		badges: [],
		shortDesc: null,
		tags: [],
		description: (
			<p>
				I have joined training sessions organised by the hacking student team at my university as well as actual CTFs (both by my own but also neighbouring
				universities). During these training sessions and CTFs, I create a list of notes/tools that I use for future references. These can be found using the
				button below. In addition, I have also included a few challenges and how I solved them.
			</p>
		),
		moreDescription: null,
		links: [{ url: 'https://docs.robinsch.net/ctfs/', label: 'Notes', target: '_blank' }],
		images: [ctfs],
	},
	{
		id: 'workflow-collaboration',
		name: 'Workflow & Collaboration',
		badges: [],
		shortDesc: null,
		tags: [],
		description: (
			<p>
				During my developing adventure I have learned how to use git and platforms like <InlineLink url="https://github.com" label="github" target="_blank" />,{' '}
				<InlineLink url="https://gitlab.com" label="gitlab" target="_blank" /> and <InlineLink url="https://gitea.com" label="gitea" target="_blank" />{' '}
				extensively. From simple pull requests and merging to rebasing and solving merge conflicts. Feel free to scroll around my github and look at my commit
				history, as well as issues/pull requests I have made to various open source projects.
				<br />
				I have also used tools like <InlineLink url="https://trello.com" label="trello" target="_blank" /> and{' '}
				<InlineLink url="https://clickup.com" label="clickup" target="_blank" /> extensively for courses on my university, many of which also worked with the
				SCRUM methodology. In addition, I have my own <InlineLink url="https://github.com/plankanban/planka" label="planka" target="_blank" /> instance, which
				is the same as trello but then self-hosted, which I use to organise tasks for my own projects.
				<br />
				For many projects (including this website), I am using github actions to automatically check code, publish to a container registory and/or deploy to a
				website. In addition, I have my own CI/CD setup for managing container updates in my homelab using{' '}
				<InlineLink url="https://github.com/renovatebot/renovate" label="renovate" target="_blank" />.
			</p>
		),
		moreDescription: null,
		links: [{ label: 'Github', url: 'https://github.com/Robin-Sch', target: '_blank' }],
		images: [workflow_and_collaboration],
	},
];

export default function Skills(): JSX.Element {
	return (
		<div className="container mx-auto p-4">
			<div className="w-full flex flex-col gap-16 p-8 max-w-6xl mx-auto">
				{skills.map((skill, i) => {
					skill.reversed = i % 2 !== 0;
					return <Card key={i} data={skill} />;
				})}
			</div>
		</div>
	);
}

Skills.getLayout = function getLayout(page: JSX.Element): JSX.Element {
	return <Layout>{page}</Layout>;
};
