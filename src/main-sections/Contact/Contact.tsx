import styles from './Contact.module.css'

const Contact: React.FC = () => {
	return (
		<>
			<h2>Contact details</h2>
			<p className={styles.you_can_reach_me_at}>You can reach me at: <a href='mailto:stevennstonie@gmail.com'><span>stevennstonie@gmail.com</span></a></p>
			<p className={styles.also_check_out_my_gh_page}>
				You can also check my github page by clicking&nbsp;<a href="https://github.com/stevenstonie" target="_blank" rel="noopener noreferrer"><span>here 🔗</span></a>.
			</p>
		</>
	)
}

export default Contact