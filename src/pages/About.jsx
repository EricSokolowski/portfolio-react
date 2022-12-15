import styles from "./About.module.css"

const About = () => {
  return ( 
    <main className={styles.pageContainer}>
      <div className={styles.aboutImg}>
      </div>
      <div className={styles.brandStatement}>
        <p>
        As a software engineer with a background in customer service, i bring a customer oriented mindset to what I build.
        <br />
        <br />
        I utilize an outside the box approach, and team working skills as well as sfotware development tools such as HTML, CSS, JS, React, and Pyhon to create meaningful apolications.
        <br />
        <br />
        I am dedicated to designing valuable and supportive websites to enhance and assist the user experience.
        <br />
        </p>
      </div>
    </main>
  )
}

export default About