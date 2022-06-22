import React from 'react'
import Card from './Card';
import styles from '../styles/Home.module.scss';

export default function Projects () {
	return(
		<div className={styles.projects} id='projects'>
			<Card />
		</div>
	)
}