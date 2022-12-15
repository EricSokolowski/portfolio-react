import { Link } from "react-router-dom"
import styles from './NavBar.module.css'
function NavBar() {
    return (
        <nav className={styles.NavBar}>
            <Link 
                to='/'
            >
                Eric Sokolowski
            </Link>

            <ul styles='ul-container'>
                <li>
                    <Link
                        to='/about'
                    >
                        About
                    </Link>
                </li>

                <li>
                    <Link
                        to='/contact'
                    >
                        Contact
                    </Link>
                </li>
                <li>
                    <Link
                        to='/projects'
                    >
                        Projects
                    </Link>
                </li>
                <li>
                    <Link
                        to='/resume'
                    >
                        Resume
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar