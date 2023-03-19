import { FC } from 'react'
import Book from './Book'

import styles from './Navigation.module.scss'

const Navigation: FC = () => {
	return (
		<div className={styles.navigation}>
			<div className={styles.container}>
				<div className={styles.menu_btn}>
					<span className={styles.menu_btn__text}>Меню</span>
				</div>
				
				<div className={styles.logo}>
					<div className={styles.logo_text__container}>
						<a href="/" className={styles.logo_text}>БАШНЯ</a>
					</div>
				</div>

				<div className={styles.book}>
					<div className={styles.book_img}>
						<Book />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navigation
