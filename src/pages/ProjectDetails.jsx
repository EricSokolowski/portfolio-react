import findProject from "../utilities/findPorject";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  let projectDetails = useParams()
  const project = findProject(projectDetails.projectDetails)
  return (
    <>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <img src={project.image} alt="img" />
      <div>
        <a href={project.repositoryLink}>
          <button>GitHub Repository</button>
        </a>
        <a href={project.deployedLink}>
          <button>Deployed Application</button>
        </a>
      </div>
    </>
  );
}

export default ProjectDetails;