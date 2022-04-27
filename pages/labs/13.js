import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "../../styles/LabPage.module.css";

export default function Lab1() {
  return (
    <div className={styles.container}>
      <Header />
      <p style={{ flex: 1 }} />
      <h1> Electric Field Mapping</h1>
      <div className={styles.midrow}>
        <div className={styles.col}>
          <h2>Summary</h2>
          <h3>
            In this lab, the motion of a charged particle in different electric
            fields was explored. Charges were placed in different configurations
            (varied value) to explore what happens under specific conditions to
            equipotential curves and electric fields (measured values). It was
            found that the direction of electric field is perpendicular to
            equipotential curves, the magnitude of electric field is not
            constant across an equipotential, the magnitude of electric field is
            equal to electric potential divided by distance, and an enclosed
            equipotential can contain both negative and positive charges. Such
            results are important as they offer new insight into how
            equipotential curves can be formed, and how they work.
          </h3>
        </div>

        <object data="/labs/LabE2.pdf" type="application/pdf" />
      </div>
      <p style={{ flex: 1 }} />
      <Footer />
    </div>
  );
}
