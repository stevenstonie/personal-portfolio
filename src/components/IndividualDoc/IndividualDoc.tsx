import { useCallback, useEffect, useRef, useState } from "react";
import { Doc } from "../../model/Doc";
import styles from "./IndividualDoc.module.css";

const IndividualDoc: React.FC<Doc & { alignment: "left" | "right" }> = (doc) => {
	const ref = useRef<HTMLDivElement>(null);

	const contentRef = useRef<HTMLDivElement>(null);

	const [isCentered, setIsCentered] = useState(false);

	const [scrollY, setScrollY] = useState(0);
	const [maxScroll, setMaxScroll] = useState(0);

	useEffect(() => {
		return handleScrollForPopup(ref, setIsCentered);
	}, []);

	const updateScrollBounds = useCallback(() => {
		if (contentRef.current) {
			const { scrollHeight, clientHeight } = contentRef.current;

			const max = Math.max(0, scrollHeight - clientHeight);
			setMaxScroll(max);

			setScrollY((prev) => Math.min(prev, max));
		}
	}, []);

	useEffect(() => {
		if (isCentered) {
			updateScrollBounds();
			window.addEventListener('resize', updateScrollBounds);
			return () => window.removeEventListener('resize', updateScrollBounds);
		}
	}, [isCentered, updateScrollBounds]);

	const handleScrollButton = (direction: "up" | "down") => {
		const scrollAmount = 150;

		if (direction === "up") {
			setScrollY((prev) => Math.max(0, prev - scrollAmount));
		} else {
			setScrollY((prev) => Math.min(maxScroll, prev + scrollAmount));
		}
	};

	const positionOfPopup = doc.alignment === "left" ? styles.right_aligned_popup : styles.left_aligned_popup;
	const visibilityOfPopup = isCentered ? styles.pop_up : styles.hide;

	const canScrollUp = scrollY > 0;
	const canScrollDown = scrollY < maxScroll;

	return (
		<div ref={ref} style={{ textAlign: doc.alignment, position: "relative" }}>
			<article className={`${styles.visible_doc_section} ${isCentered ? styles.highlight : ""}`}>
                <img
                    className={styles.document_thumbnail}
                    src={doc.thumbnail}
                    alt={doc.certificationName}
                />
                <h3 style={{ fontWeight: "bold" }}>{doc.certificationName}</h3>
                <p>by {doc.issuer}</p>
                <p>({doc.issueDate})</p>
            </article>

			<div className={`${styles.doc_details_popup} ${positionOfPopup} ${visibilityOfPopup}`}>

				<button
					type="button"
					className={styles.scroll_arrow}
					onClick={() => handleScrollButton("up")}
					disabled={!canScrollUp}
					aria-label="Scroll up"
				>
					▲
				</button>

				<div
					ref={contentRef}
					className={styles.doc_details_content}
				>
					<div
						style={{
							transform: `translateY(-${scrollY}px)`,
							transition: 'transform 0.3s ease-out',
							display: 'flex',
							flexDirection: 'column'
						}}
					>
						<div dangerouslySetInnerHTML={{ __html: doc.moreInfo }} />
					</div>
				</div>

				<button
					type="button"
					className={styles.scroll_arrow}
					onClick={() => handleScrollButton("down")}
					disabled={!canScrollDown}
					aria-label="Scroll down"
				>
					▼
				</button>
			</div>
		</div>
	);
};

function handleScrollForPopup(ref: React.RefObject<HTMLDivElement | null>, setIsCentered: React.Dispatch<React.SetStateAction<boolean>>) {
	let ticking = false;

	const handleScroll = () => {
		if (ticking) return;
		ticking = true;

		requestAnimationFrame(() => {
			if (!ref.current) {
				ticking = false;
				return;
			}

			const rect = ref.current.getBoundingClientRect();
			const windowCenterY = window.innerWidth < 800 ? window.innerHeight / 4 : window.innerHeight / 2;

			const centeredNow = rect.top <= windowCenterY && rect.bottom >= windowCenterY;

			setIsCentered((prev) => {
				if (prev === centeredNow) return prev;
				return centeredNow;
			});

			ticking = false;
		});
	};

	window.addEventListener("scroll", handleScroll, { passive: true });
	handleScroll(); // initial check on mount
	return () => window.removeEventListener("scroll", handleScroll);
}

export default IndividualDoc;