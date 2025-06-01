const Loading = () => {
	return (
		<div 
			className="flex flex-col gap-4 w-full min-h-screen items-center justify-center p-4">
			<div
				className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 border-[6px] sm:border-8 text-blue-400 text-3xl sm:text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-blue-400 rounded-full">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					viewBox="0 0 256 256"
					className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10">
					<path
						fill="currentColor"
						d="m235.32 180l-36.24-36.25l-36.46-120.29A21.76 21.76 0 0 0 128 12.93a21.76 21.76 0 0 0-34.62 10.53l-36.46 120.3L20.68 180a16 16 0 0 0 0 22.62l32.69 32.69a16 16 0 0 0 22.63 0L124.28 187a41 41 0 0 0 3.72-4.29a41 41 0 0 0 3.72 4.29L180 235.32a16 16 0 0 0 22.63 0l32.69-32.69a16 16 0 0 0 0-22.63M64.68 224L32 191.32l12.69-12.69l32.69 32.69ZM120 158.75a23.85 23.85 0 0 1-7 17L88.68 200L56 167.32l13.65-13.66a8 8 0 0 0 2-3.34l37-122.22A5.78 5.78 0 0 1 120 29.78Zm23 17a23.85 23.85 0 0 1-7-17v-129a5.78 5.78 0 0 1 11.31-1.68l37 122.22a8 8 0 0 0 2 3.34l14.49 14.49l-33.4 32ZM191.32 224l-12.56-12.57l33.39-32L224 191.32Z"
					/>
				</svg>
			</div>
		</div>
	);
};

export default Loading;
