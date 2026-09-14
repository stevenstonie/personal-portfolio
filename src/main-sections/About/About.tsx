import styles from "./About.module.css"

const About: React.FC = () => {
	return <section style={{ backgroundColor: '#101010', borderRadius: '50px' }}>
		<br></br>
		<h2>About me</h2>
		<section className={styles.contents_container}>
			<p>
				My name is Steven, and my path into software engineering started with low-level algorithms in C++, which built my appreciation for data structures, networks, and computational efficiency. Over the years, that theoretical foundation evolved into building production systems.
			</p>
			<p>
				Today, alongside pursuing my Master's degree, I specialize in full-cycle software engineering-designing robust backends with Spring Boot and ASP.NET Core, building clean frontend interfaces, and implementing modern DevSecOps practices.
			</p>
			<p>
				I advocate for architectural simplicity, strict code integrity, and high test coverage. Below, you will find my recent work, ranging from cross-platform mobile applications to microservice-based cloud platforms.
			</p>
		</section>
		<br></br>
		<br></br>
	</section>
}

export default About