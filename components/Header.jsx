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
		</div>
		<BodySectionA />
		<BodySectionB />
	</div>
	)
}