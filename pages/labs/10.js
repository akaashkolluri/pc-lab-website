import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "../../styles/LabPage.module.css";

export default function Lab1() {
  return (
    <div className={styles.container}>
      <Header /> <p style={{ flex: 1 }} />
      <h1> Differential Equations and Oscillations</h1>
      <div className={styles.midrow}>
        <div className={styles.col}>
          <h2>Summary</h2>
          <h3>
            In this lab, differential equations were used to describe a
            spring-mass system using Newton’s Second law. A spring-mass system
            was set-up vertically. The spring constant was found by hanging the
            mass and measuring its displacement from equilibrium. Then, the mass
            was pulled down slightly and its motion was measured. In these
            tests, all variables were kept constant. In the final test, a spring
            was pulled down with two different displacements (varied quantity)
            and the period was measured. Ultimately, the results of this lab
            yielded that a = -k/m*delta(x). These results are significant as
            they confirmed the theoretical expression calculated.{" "}
          </h3>
        </div>

        <object data="/labs/Lab08.pdf" type="application/pdf" />
      </div>
      <p style={{ flex: 1 }} />
      <Footer />
    </div>
  );
}
