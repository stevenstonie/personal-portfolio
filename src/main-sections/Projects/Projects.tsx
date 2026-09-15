import { Fragment, useEffect, useState } from "react";
import { Project } from "../../model/Project";
import ProjectTile from "../../components/ProjectTile/ProjectTile";
import ProjectModal from "../../components/ProjectModal/ProjectModal";
import projects_list from "../../assets/data/projects_list.json";
import styles from "./Projects.module.css";


const projects: Project[] = [...projects_list].reverse() as Project[];

const Projects: React.FC = () => {
	const [selectedId, setSelectedId] = useState<string | null>(null);

	useEffect(() => {
		const syncHash = () => {
			const hash = window.location.hash;
			if (hash.startsWith('#project-')) {
				setSelectedId(hash.replace('#project-', ''));
			} else {
				setSelectedId(null);
			}
		};

		syncHash();
		window.addEventListener('hashchange', syncHash);

		return () => window.removeEventListener('hashchange', syncHash);
	}, []);

	const openProject = (id: string | number) => {
		window.location.hash = `project-${id}`;
	};

	const closeProject = () => {
		if (window.location.hash.startsWith('#project-')) {
			window.history.back();
		} else {
			setSelectedId(null);
		}
	};

	return (
		<section>
			<h2>Personal projects</h2>
			<div className={styles.contents_container}>
				{projects.map((project) => (
					<Fragment key={project.id}>
						<ProjectTile
							project={project}
							onClick={() => openProject(project.id)}
						/>
						<ProjectModal
							project={project}
							isOpen={String(selectedId) === String(project.id)}
							onClose={closeProject}
						/>
					</Fragment>
				))}
			</div>
		</section>
	);
}

export default Projects