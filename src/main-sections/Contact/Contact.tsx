import styles from './Contact.module.css'

const Contact: React.FC = () => {
	return (
		<>
			<h2>Contact details</h2>
			<p className={styles.you_can_reach_me_at}>You can reach me at: <a href='mailto:stevennstonie@gmail.com'>stevennstonie@gmail.com</a></p>
			<p className={styles.also_check_out_my_gh_page}>
				You can also check my github page by clicking&nbsp;<a href="https://github.com/stevenstonie" target="_blank" rel="noopener noreferrer">
					<span aria-label="opens a new github profile window" title="opens a new github profile window">here 🔗</span></a>.
			</p>
		</>
	)
}

export default Contact