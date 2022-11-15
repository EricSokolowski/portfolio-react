import projects from "../data/projects"
import ProjectsList from "../components/ProjectsList"

function Projects(p) {
  return (
      <>
        <ProjectsList projects={projects} />
      </>
  )
}

export default Projects