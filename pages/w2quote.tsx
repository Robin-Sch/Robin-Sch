import { JSX, useState } from 'react';

export default function W2quote(): JSX.Element {
	const [videoVisible, setVideoVisible] = useState(false);

	const start = (): void => {
		setVideoVisible(true);
		const video = document.getElementById('video') as HTMLVideoElement;
		video.play();
	};

	return (
		<>
			<style>{`
				@media (orientation: landscape) {
					video {
						position: fixed;
						right: 0;
						bottom: 0;
						min-width: 100%;
						min-height: 95%;
						width: auto;
						height: auto;
					}
					button {
						border: none;
						color: white;
						padding: 15px 32px;
						text-align: center;
						text-decoration: none;
						display: inline-block;
						font-size: 64px;
						margin: 4px 2px;
						cursor: pointer;
						background-color: #008cba;

						position: absolute;
						height: 200px;
						width: 400px;
						left: 50%;
						top: 50%;
						margin-top: -100px;
						margin-left: -200px;
					}
				}

				@media (orientation: portrait) {
					button {
						border: none;
						color: white;
						padding: 15px 32px;
						text-align: center;
						text-decoration: none;
						display: inline-block;
						font-size: 64px;
						margin: 4px 2px;
						cursor: pointer;
						background-color: #008cba;

						position: absolute;
						height: 200px;
						width: 400px;
						left: 50%;
						top: 50%;
						margin-top: -100px;
						margin-left: -200px;
					}
				}
			`}</style>

			<video id="video" style={{ display: videoVisible ? 'block' : 'none' }} width="95%" height="auto" loop>
				<source src="/video/w2quote.mp4" type="video/mp4" />
			</video>

			{!videoVisible && (
				<button id="button" onClick={start}>
					View
				</button>
			)}
		</>
	);
}
