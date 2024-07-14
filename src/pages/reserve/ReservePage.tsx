import styles from "./ReservePage.module.scss";

const ReservePage = () => {
	const handleReload = () => {
		window.location.reload();
	};

	return (
		<section>
			<div className={styles.wrapper}>
				<img className={styles.pokeball} src="/pokeball.png" alt="pokeball" />
				<img className={styles.gameover} src="/game-over.png" alt="gameover" />
			</div>

			<div className={styles.signature}>
				<p>
					Oops, something&apos;s wrong! Try{" "}
					<button type="button" onClick={handleReload}>
						reload the page
					</button>
					.
				</p>
			</div>
		</section>
	);
};

export default ReservePage;
