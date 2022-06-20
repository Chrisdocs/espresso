import React from 'react';
import styles from '../styles/Home.module.scss'
import BodySectionA from './BodySectionA';
import BodySectionB from './BodySectionB';

export default function Header () {
	return (
		<div className={styles.header}>
		<h1 className={styles.headerTitle}>
			ESPRESSO
			</h1>
		<div className={styles.headerBody}>
		</div>
		<BodySectionA />
		<BodySectionB />
	</div>
	)
}