import styles from "./Header.module.scss";

const Header = () => (
	<div className={styles.logoContainer}>
		<img className={styles.logo} src="/logo.svg" alt="pokeball" />
		<div className={styles.logoText}>
			<h1>Pokédex</h1>
			<p>Find your pokemon!</p>
		</div>
	</div>
);

export default Header;
