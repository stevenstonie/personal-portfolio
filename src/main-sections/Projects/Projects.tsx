import { Fragment, useState } from "react";
import { Project } from "../../model/Project";
import ProjectTile from "../../components/ProjectTile/ProjectTile";
import ProjectModal from "../../components/ProjectModal/ProjectModal";
import projects_list from "../../assets/data/projects_list.json";
import styles from "./Projects.module.css";


const projects: Project[] = [...projects_list].reverse() as Project[];

const Projects: React.FC = () => {
	const [selectedId, setSelectedId] = useState<string | number | null>(null);

	return (
		<section>
			<h2>Personal projects</h2>
			<div className={styles.contents_container}>
				{projects.map((project) => (
					<Fragment key={project.id}>
						<ProjectTile
							project={project}
							onClick={() => setSelectedId(project.id)}
						/>
						<ProjectModal
							project={project}
							isOpen={selectedId === project.id}
							onClose={() => setSelectedId(null)}
						/>
					</Fragment>
				))}
			</div>
		</section>
	);
}

export default Projects