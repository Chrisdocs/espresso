import React from 'react';
import styles from '../styles/Home.module.scss'
import BodySectionA from './BodySectionA';
import BodySectionB from './BodySectionB';

export default function Header () {
	return (
		<div className={styles.header}>
		<p className={styles.headerTitle}>
			ESPRESSO
			</p>
		<div className={styles.headerBody}>
			<p className={styles.contentTitle}>Welcome.</p>
			<p className={styles.content}>
				Welcome to my Template 'Espresso'!  You can add custom text in here.  It will automatically scale with the screen size.
			</p>
		</div>
		<BodySectionA />
		<BodySectionB />
	</div>
	)
}