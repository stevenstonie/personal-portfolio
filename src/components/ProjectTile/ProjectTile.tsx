import { useRef } from "react";
import { Project } from "../../model/Project";
import styles from "./ProjectTile.module.css"

interface ProjectTileProps {
	project: Project;
	onClick: () => void;
}

const ProjectTile: React.FC<ProjectTileProps> = ({ project, onClick }) => {
	const hitboxRef = useRef<HTMLButtonElement>(null);
	const cardRef = useRef<HTMLDivElement>(null);
	const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	const handleMouseEnter = () => {
		if (!cardRef.current) return;

		cardRef.current.style.transition = 'transform 0.1s ease-out';

		timeoutRef.current = setTimeout(() => {
			if (cardRef.current) {
				cardRef.current.style.transition = 'none';
			}
		}, 300);
	};

	const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (!hitboxRef.current || !cardRef.current) return;

		const rect = hitboxRef.current.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;

		const centerX = rect.width / 2;
		const centerY = rect.height / 2;

		const rotateX = ((y - centerY) / centerY) * -15;
		const rotateY = ((x - centerX) / centerX) * 15;

		cardRef.current.style.setProperty('--rx', `${rotateX}deg`);
		cardRef.current.style.setProperty('--ry', `${rotateY}deg`);
	};

	const handleMouseLeave = () => {
		// prevent the timeout from stripping the transition if leaving early
		if (timeoutRef.current) clearTimeout(timeoutRef.current);
		if (!cardRef.current) return;

		cardRef.current.style.transition = 'transform 0.5s ease';
		cardRef.current.style.setProperty('--rx', '0deg');
		cardRef.current.style.setProperty('--ry', '0deg');
	};

	return (
		<button
			type="button"
			ref={hitboxRef}
			className={styles.project_tile_hitbox}
			onClick={onClick}
			onMouseEnter={handleMouseEnter}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
		>
			<div ref={cardRef} className={styles.project_tile_inner}>
				<img
					src={project.thumbnail ? project.thumbnail : "/assets/images/projects/default-thumbnail.png"}
					alt={project.title}
					className={styles.thumbnail_img}
				/>
			</div>
		</button>
	);
};

export default ProjectTile;