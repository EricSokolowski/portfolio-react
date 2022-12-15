import projects from "../data/projects"
import ProjectsList from "../components/ProjectsList"

function Projects(p) {
  return (
      <main className={StyleSheet.pageContainer}>
        <ProjectsList projects={projects} />
      </main>
  )
}

export default Projects