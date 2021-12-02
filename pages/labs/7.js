import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "../../styles/LabPage.module.css";

export default function Lab1() {
  return (
    <div className={styles.container}>
      <Header />
      <p style={{ flex: 1 }} />
      <h1> Ballistic Pendulum</h1>

      <div className={styles.midrow}>
        <div className={styles.col}>
          <h2>Summary</h2>
          <h3>
            In this lab, conservation of energy and momentum were observed in
            the scenario of a ballistic pendulum. In a simulated lab, a bullet
            was shot into a pendulum and the pendulum was put into motion. The
            velocity of the initial bullet was related to the max height of the
            pendulum. Bullet weight, pendulum starting height, and block mass
            were all kept constant; initial bullet speed was varied; max height
            was measured. Max height was found to be portional to the square of
            bullet speed. This lab demonstrates the law of conservation of
            momentum (used in the bullet-block collision), and law of
            conservation in energy (used during pendulum motion to relate max
            pendulum speed and max height) in a simulated scenario.
          </h3>
        </div>

        <object data="/labs/Lab06.pdf" type="application/pdf" />
      </div>
      <p style={{ flex: 1 }} />
      <Footer />
    </div>
  );
}
