import { Link } from "react-router-dom";
import hyphenateWord from "../utilities/hyphenateWords";
import styles from '../pages/Projects.module.css'

const ProjectPreview = (props) => {
  return (

      <section>
        <h3>
          <Link
            to={`/projects/${hyphenateWord(props.title)}`}
          >
    <div className={styles.container}>
      <img
        src={props.image}
        alt={props.title}
      />

    </div>
          </Link>
        </h3>
      </section>
  );
}

export default ProjectPreview;