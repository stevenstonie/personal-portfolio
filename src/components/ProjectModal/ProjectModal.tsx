import { useRef, useEffect } from "react";
import { Project } from "../../model/Project";
import styles from "./ProjectModal.module.css";

interface ProjectModalProps {
	project: Project;
	isOpen: boolean;
	onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
	const dialogRef = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		if (isOpen && dialogRef.current) {
			dialogRef.current.scrollTop = 0;
		}
	}, [isOpen]);

	return (
		<>
			{isOpen && (
				<button
					type="button"
					className={styles.modal_background}
					onClick={onClose}
					aria-label="Close modal"
				></button>
			)}

			<dialog
				ref={dialogRef}
				className={`${styles.modal_window} ${isOpen ? styles.slide_up : ''}`}
				aria-labelledby={`modal-title-${project.id}`}
				aria-modal="true"
				open={isOpen}
			>
				<h3 id={`modal-title-${project.id}`}>{project.title}</h3>

				<section className={styles.project_details}>
					{project.mainDescription && (
						<div
							className={styles.project_description}
							dangerouslySetInnerHTML={{ __html: project.mainDescription }}
						/>
					)}
					{project.secondaryDescription && (
						<div
							className={styles.project_description}
							dangerouslySetInnerHTML={{ __html: project.secondaryDescription }}
						/>
					)}
					{project.thirdDescription && (
						<div
							className={styles.project_description}
							dangerouslySetInnerHTML={{ __html: project.thirdDescription }}
						/>
					)}
				</section>

				<ul className={styles.image_list}>
					{project.images?.map((img, index) => (
						<li key={img}>
							<a href={img} target="_blank" rel="noopener noreferrer">
								<img
									src={img}
									alt={`${project.title} screenshot ${index + 1}`}
									loading="lazy"
									decoding="async"
								/>
							</a>
						</li>
					))}
				</ul>
			</dialog>
		</>
	);
}

export default ProjectModal;