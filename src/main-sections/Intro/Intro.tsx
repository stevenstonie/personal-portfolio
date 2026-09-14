import styles from "./Intro.module.css";
import { ScrambleTexts } from "@twistezo/react-text-scramble/lib/types";
import TextScramble from "@twistezo/react-text-scramble/lib/TextScramble";
import { useTypewriterEffect } from "../../funcs/TypewriterEffect";

const typewriterTextList = [
	{ text: "DevSecOps Engineer", color: "var(--primary-color)" },
	{ text: "Backend Architect", color: "green" },
	{ text: "Frontend Integrator", color: "red" },
	{ text: "Software Developer", color: "blue" },
];
const maxCharCount = Math.max(...typewriterTextList.map(item => item.text.length));

const Intro: React.FC = () => {
	const helloText: ScrambleTexts = [
		'Hello and welcome to my'
	]
	const portfolio: ScrambleTexts = [
		'portfolio'
	]
	const { displayText, textColor } = useTypewriterEffect(typewriterTextList);

	const words = displayText.split(' ');
	const firstWord = words[0];
	const restWords = words.slice(1).join(' ');
	const hasSpace = words.length > 1;

	return (
		<div className={styles.intro_container}>
			<div className={styles.inner_container}>
				<div className={styles.p_text}>
					<TextScramble
						texts={helloText}
						letterSpeed={90}
						nextLetterSpeed={80}
						paused={false}
						pauseTime={15000000000}
					/>
				</div>

				<div
					className={styles.typewriter_wrapper}
					style={{ '--typewriter-char-count': `${maxCharCount - 3}ch` } as React.CSSProperties}
				>
					<span style={{ color: textColor }}>{firstWord}</span>

					{hasSpace && (
						<>
							<span className={styles.magic_space}></span>
							<span style={{ color: textColor }}>{restWords}</span>
						</>
					)}

					<span className={styles.input_cursor}></span>
				</div>

				<div className={styles.p_text} style={{ textAlign: 'right' }}>
					<TextScramble
						texts={portfolio}
						letterSpeed={90}
						nextLetterSpeed={150}
						paused={false}
						pauseTime={15000000000}
					/>
				</div>

			</div>
		</div>
	);
};

export default Intro