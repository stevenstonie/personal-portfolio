import { Project } from "../../model/Project";
import styles from "./ProjectModal.module.css";

interface ProjectModalProps {
	project: Project | null;
	onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
	if (!project) {
		return null;
	}

	return (
		<>
			<div className={styles.modal_background} onClick={onClose}></div>
			<div
				className={`${styles.modal_window} ${styles.slide_up}`}
				role="dialog"
				aria-modal="true"
				aria-labelledby="modal-title"
			>
				<h3 id="modal-title">{project.title}</h3>

				<section className={styles.project_details}>
					{project.mainDescription && (
						<div
							className={styles.short_description}
							dangerouslySetInnerHTML={{ __html: project.mainDescription }}
						/>
					)}
					{project.secondaryDescription && (
						<div
							className={styles.long_description}
							dangerouslySetInnerHTML={{ __html: project.secondaryDescription }}
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
								/>
							</a>
						</li>
					))}
				</ul>
			</div>
		</>
	);
}

export default ProjectModal;