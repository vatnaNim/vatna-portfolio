import styled from 'styled-components';

interface iSubmit {
	isDarkMode: boolean;
	text: string;
	activeColor?: string;
	activeShadow?: string;
	activeBorder?: string;
	activeBg?: string;
	activeHover?: string;
	activeGradient?: string;
	loading?: boolean;
}

const BtnSubmit = ({ isDarkMode, text, activeGradient, loading }: iSubmit) => {
	return (
		<StyledWrapper
			$isDarkMode={isDarkMode}
			$activeGradient={activeGradient}
		>
			<button disabled={loading}>
				<span className="button_top py-1 sm:py-2 text-md-clamp flex items-center justify-center gap-1.5">
					{loading ? (
						<>
							<svg
								className="animate-spin h-4 w-4 text-white"
								viewBox="0 0 24 24"
								fill="none"
							>
								<circle
									className="opacity-25"
									cx="12"
									cy="12"
									r="10"
									stroke="currentColor"
									strokeWidth="4"
								/>
								<path
									className="opacity-75"
									fill="currentColor"
									d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
								/>
							</svg>
							<span>Sending...</span>
						</>
					) : (
						text
					)}
				</span>
			</button>
		</StyledWrapper>
	);
};

const StyledWrapper = styled.div<{
	$isDarkMode: boolean;
	$activeGradient?: string;
}>`
	button {
		width: 100%;
		--button_radius: 0.75em;
		--button_color: #e8e8e8;
		--button_outline_color: ${({ $isDarkMode }) =>
			$isDarkMode ? '#ffffff' : '#000000'};
		font-weight: bold;
		border: none;
		border-radius: var(--button_radius);
		background: var(--button_outline_color);
	}

	.button_top {
		display: flex;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
		border: 2px solid var(--button_outline_color);
		border-radius: var(--button_radius);
		color: ${({ $isDarkMode }) => ($isDarkMode ? '#ffffff' : '#000000')};
		transform: translateY(-0.2em);
		transition: transform 0.1s ease;
		background: ${({ $isDarkMode, $activeGradient }) =>
			$isDarkMode
				? 'linear-gradient(45deg, #0f2027, #203a43, #2c5364)'
				: $activeGradient};
	}

	button:hover .button_top {
		transform: translateY(-0.33em);
	}

	button:active .button_top {
		transform: translateY(0);
	}
`;

export default BtnSubmit;
