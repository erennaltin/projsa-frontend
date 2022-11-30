import React from 'react'
import styles from './ProjectInformationNode.module.scss'

export default function ProjectInformationNode({title, desc}) {
  return (
    <div className={styles.mainContainer}>
      <p className={styles.titleText}>{title}</p>
      <p className={styles.descText}>{desc}</p>
    </div>
  )
}
