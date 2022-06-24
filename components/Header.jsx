import React from 'react';
import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import BodySectionA from './BodySectionA';
import BodySectionB from './BodySectionB';

export default function Header () {
	return (
		<div className={styles.header}>
		<p className={styles.headerTitle}>
			CHRIS
			WOLFE
			</p>
		<div className={styles.headerBody}>
			<p className={styles.contentTitle}>Hello and welcome.</p>
			<p className={styles.content}>
			What I do is about what you need. To get started here is a bit about me {" "}
			<Link href="#about">
				<a className={styles.btn}>{`↴`}</a>
			</Link>
			</p>
		</div>

	</div>
	)
}