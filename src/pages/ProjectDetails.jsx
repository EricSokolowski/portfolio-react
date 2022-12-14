import findProject from "../utilities/findPorject";
import { useParams } from "react-router-dom";
import styles from './Projects.module.css'

const ProjectDetails = () => {
  let projectDetails = useParams()
  const project = findProject(projectDetails.projectDetails)
  return (
    <main className={styles.pageContainer}>
    <div className={styles.container}>
      <h1>{project.title}</h1>
      <img src={project.image} alt="img"/>
      <p>{project.description}</p>
      <div>
        <a href="/projects">
          <button>Return</button>
        </a>
        <a href={project.repositoryLink} target="_blank" rel="noreferrer">
          <button>GitHub Repository</button>
        </a>
        <a href={project.deployedLink} target="_blank" rel="noreferrer">
          <button>Deployed Application</button>
        </a>
      </div>
    </div>
  </main>
);
}

export default ProjectDetails;