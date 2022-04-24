import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "../../styles/LabPage.module.css";

export default function Lab1() {
  return (
    <div className={styles.container}>
      <Header />
      <p style={{ flex: 1 }} />
      <h1> DC circuits</h1>
      <div className={styles.midrow}>
        <div className={styles.col}>
          <h2>Summary</h2>
          <h3>
            In this lab, kinematics was used to calculate final conditions given
            initial ones. In a simulation, a ball was launched from a cannon
            into 2d projectile motion. The launch angle and ball mass were kept
            constant; initial launch speed was varied; final distance was
            measured. A regression was done to analyze the relation between
            launch velocity and final distance, and final distance was found to
            be proportional to initial launch velocity squared. This result is
            useful as it demonstrates kinematics equations at play, and this
            relationship can be confirmed through solving for final distance
            using kinematic equations only.
          </h3>
        </div>

        <object data="/labs/Lab01.pdf" type="application/pdf" />
      </div>
      <p style={{ flex: 1 }} />
      <Footer />
    </div>
  );
}
