import IndividualDoc from "../../components/IndividualDoc/IndividualDoc";
import documents_list from "../../assets/data/documents_list.json";
import styles from "./More.module.css";
import { Doc } from "../../model/Doc";
import TechMarquee from "../../components/TechMarquee/TechMarquee";

const documents: Doc[] = [...documents_list].reverse() as Doc[];
const alignments = documents.map((_, idx) => (idx % 2 === 0 ? "left" : "right"));


const More: React.FC = () => {
	return <>
		<h2>Certificates and courses</h2>
		<ul className={styles.documents_list_container}>
			{documents.map((doc, idx) => (
				<li className={styles.individual_document} key={doc.id}>
					<IndividualDoc {...doc} alignment={alignments[idx]} />
				</li>
			))}
		</ul>
		<div className={styles.tech_stack_marquee}>
			<TechMarquee />
		</div>
	</>;
}

export default More;