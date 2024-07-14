import { useNavigate } from "react-router-dom";

import styles from "./ErrorPage.module.scss";

const ErrorPage = () => {
	const navigate = useNavigate();
	return (
		<section>
			<div className={styles.wrapper}>
				<img className={styles.pikachu} src="/pikachu.png" alt="pikachu" />
				<div className={styles.content}>
					<h2>404</h2>
					<p>This page does not exist</p>
					<button type="button" onClick={() => navigate(-1)}>
						Go home
					</button>
				</div>
			</div>
		</section>
	);
};

export default ErrorPage;
