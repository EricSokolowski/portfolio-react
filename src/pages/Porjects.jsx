import projects from "../data/projects"

function Projects(p) {
  return (
      <>
        {projects.map((project, idx) => (
          <li key={idx}>
            {project.title}
          </li>
        ))}
      </>
  )
}

export default Projects