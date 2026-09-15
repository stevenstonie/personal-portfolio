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
		const dialog = dialogRef.current;
		if (!dialog) return;

		if (isOpen && !dialog.open) {
			dialog.showModal();
			dialog.scrollTop = 0;
		} else if (!isOpen && dialog.open) {
			dialog.close();
		}
	}, [isOpen]);

	useEffect(() => {
		const dialog = dialogRef.current;
		if (!dialog) return;

		const handleNativeClose = () => onClose();

		const handleBackdropClick = (e: MouseEvent) => {
			if (e.target === dialog) onClose();
		};

		dialog.addEventListener('close', handleNativeClose);
		dialog.addEventListener('click', handleBackdropClick);

		return () => {
			dialog.removeEventListener('close', handleNativeClose);
			dialog.removeEventListener('click', handleBackdropClick);
		};
	}, [onClose]);

	return (
		<dialog
			ref={dialogRef}
			className={`${styles.modal_window} ${isOpen ? styles.slide_up : ''}`}
			aria-labelledby={`modal-title-${project.id}`}
			aria-modal="true"
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
	);
}

export default ProjectModal;