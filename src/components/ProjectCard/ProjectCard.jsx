import React from "react";
import styles from "./ProjectCard.module.scss";
import ProjectInformationNode from "./ProjectInformationNode/ProjectInformationNode";

export default function ProjectCard() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.topInformationContainer}>
        <div className={styles.profileInformationContainer}>
          <div className={styles.topInformationProfilePictureContainer}>
            <img
              src="https://picsum.photos/200"
              alt="Profile Picture"
              className={styles.topInformationProfilePicture}
            />
          </div>
          <div className={styles.topInformationTextContainer}>
            <p>Eren Altın</p>
            <p>Professor at Sabancı University</p>
          </div>
        </div>
        <p className={styles.categoryText}> COLLOBRATION </p>
      </div>
      {/* <div className={styles.imageContainer}>
        <img src="https://picsum.photos/1000" alt="Project Picture" className={styles.projectPicture} />
      </div> */}
      <div className={styles.bottomInformationContainer}>
        <ProjectInformationNode
          title="Project Title"
          desc="SU-SAHOL Collabration Platform"
        />
        <ProjectInformationNode
          title="Description"
          desc="This website aims to enhance the collaboration between Sabancı University and the business units of the Sabanci Holding. This platform will enable members of both parties to define projects and seek matching partners. In addition to sharing projects, the website can serve as an agora to ask questions and/or share ideas. Matching and searching for expertise can be made over keywords. The academics' expertise can be coded from the keywords of their publications, while the managers expertise can be carved out from their linked-in page (or will be provided by the holding HR). "
        />
        <ProjectInformationNode title="Status" desc="In Process" />
        <ProjectInformationNode title="Start Date" desc="01.01.2000" />
        <ProjectInformationNode title="Publish Date" desc="01.01.2000" />
        <ProjectInformationNode title="Due Date" desc="01.01.2000" />
        <ProjectInformationNode title="Participants" desc="Eren Altın, Batuhan Işıldak, Dediş Atakan Öz" />
        <ProjectInformationNode
          title="Tags"
          desc="Software, Collobration, Education, Business"
        />
      </div>
      <div className={styles.applyButtonContainer}>
        <button>Apply</button>
      </div>
    </div>
  );
}
