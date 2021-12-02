import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "../../styles/DetailLab.module.css";

export default function Lab1() {
  return (
    <div className={styles.container}>
      <Header />
      <p style={{ flex: 1 }} />
      <h1> Projectile Launchers/Conservation of Energy</h1>
      <div className={styles.row}>
        <div className={styles.col}>
          <h2>Summary</h2>
          <h3>
            In this lab, the law of conversion of energy between different forms
            of energy was observed in the real world. A projectile launcher was
            set to shoot a ball horizontally. The spring, launch height, and
            ball mass were kept constant; the displacement from equilibrium of
            the spring was varied; the resultant launch distance and time were
            measured; the velocity of the ball was calculated. The results
            suggest that the mass times the velocity squared of the ball was
            proportional to the displacement of the spring squared. This result
            is useful as it demonstrates conservation of energy in the real
            world; all of the spring potential energy (given by
            ½*k*displacement^2) was converted to kinetic energy(given by
            ½*m*v^2), which this proportionality shows.
          </h3>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.col}>
          <h2>Entire Lab Report Document</h2>
          <h3>This was a fun night lab</h3>
        </div>
        <object data="/labs/Lab05.pdf" type="application/pdf" />
      </div>
      <p style={{ flex: 1 }} />
      <Footer />
    </div>
  );
}
