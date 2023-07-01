import { FC } from 'react'
import Book from './Book'

import styles from './Navigation.module.scss'

const Navigation: FC = () => {
	return (
		<div>
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

			<div className={styles.menu__container}>
				<div className={styles.menu__title}>Меню</div>
				<ul>
					<li className={styles.menu__element}>Главная</li>
					<li className={styles.menu__element}>Вторая</li>
					<li className={styles.menu__element}>Расположение</li>
					<li className={styles.menu__element}>Контакты</li>
				</ul>
			</div>
		</div>
	)
}

export default Navigation
