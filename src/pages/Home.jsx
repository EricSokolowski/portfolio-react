import styles from './Home.module.css'

const Home = () => {
  return (
    <main>
      <div className={styles.homeImage}>
        {/* <img className={styles.profile} src="../../public/profilepic.jpeg" alt="profile" /> */}
        <div>
          <div className={styles.titleContainer}>
            <div id={styles.welcome}>Welcome to my portfolio!</div>
          </div>
          <div className={styles.titleContainer}>
            <div id={styles.name}>Hi, Im Eric Sokolowski.</div>
          </div>
          <div className={styles.titleContainer}>
            <div id={styles.title}>I'm a Software Engineer.</div>
          </div>
        </div>
      </div>

      {/* <About /> */}
    </main>
  )
}

export default Home