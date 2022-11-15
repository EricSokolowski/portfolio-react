import projects from "../data/projects";
import hyphenateWord from "./hyphenateWords";

function findProject(hyphenatedTitle){
  const target = projects.filter(project => 
    hyphenateWord(project.title) === hyphenatedTitle
  )
  return target[0]
}

export default findProject