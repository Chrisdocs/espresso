import React from 'react';
import styles from '../styles/Home.module.scss';

export default function BodySectionA (style1, style2, title) {
	return (
		<div className={styles.bodyA}>
			<p>TITLE</p>
			<div className={styles.bodyBlockA}></div>
		</div>
	)
}