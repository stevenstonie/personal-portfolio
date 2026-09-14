import styles from "./Navbar.module.css"

const Navbar: React.FC = () => {
	return (
		<nav className={styles.navbar}>
			<ul className={styles.list}>
				<li><a href="#home"><span>Home</span></a></li>
				<li><a href="#about"><span>About</span></a></li>
				<li><a href="#projects"><span>Projects</span></a></li>
				<li><a href="#more"><span>More</span></a></li>
				<li><a href="#contact"><span>Contact</span></a></li>
			</ul>
		</nav>
	)
}

export default Navbar