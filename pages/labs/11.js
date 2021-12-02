import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "../../styles/LabPage.module.css";

export default function Lab1() {
  return (
    <div className={styles.container}>
      <Header />
      <p style={{ flex: 1 }} />
      <h1>Pendula: Periods</h1>

      <div className={styles.midrow}>
        <div className={styles.col}>
          <h2>Summary</h2>
          <h3>
            In this lab, the relationship between the displacement and period
            time of a pendulum was determined. A pendulum was pulled backwards a
            small angle and then dropped, and the time it took to complete a
            period was measured. The pendulum mass and angle dropped from were
            kept constant, the length of the pendulum was varied, and the period
            of the pendulum was measured. Then, a regression of the period vs.
            length revealed that it was a square root relationship, implying
            that period is proportional to the square root of length. This is
            useful as it confirms the theoretical equation of the pendulum
            period that is used.
          </h3>
        </div>

        <object data="/labs/pendula.pdf" type="application/pdf" />
      </div>
      <p style={{ flex: 1 }} />
      <Footer />
    </div>
  );
}
