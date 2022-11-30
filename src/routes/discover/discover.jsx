import React from 'react'
import styles from './discover.module.scss';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

export default function Discover() {
  return (
    <div className={styles.mainContainer}>
      <p className={styles.headerText}> Discover </p>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  )
}
