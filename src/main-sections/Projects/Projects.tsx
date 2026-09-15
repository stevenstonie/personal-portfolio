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
		const handleHashChange = () => {
			const hash = window.location.hash;
			if (hash.startsWith('#project-')) {
				const id = hash.replace('#project-', '');
				setSelectedId(id);
			} else {
				setSelectedId(null);
			}
		};

		// running it once on load just in case a refresh happens while a modal is open
		handleHashChange();

		window.addEventListener('hashchange', handleHashChange);
		return () => window.removeEventListener('hashchange', handleHashChange);
	}, []);

	const openProject = (id: string | number) => {
		window.location.hash = `project-${id}`;
	};

	const closeProject = () => {
		window.history.pushState("", document.title, window.location.pathname + window.location.search);
		setSelectedId(null);
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