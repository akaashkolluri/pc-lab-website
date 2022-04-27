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
            In this lab, equivalent resistance in a circuit was calculated by
            determining the voltage drops across resistors. Two different
            circuits were made: one with parallel resistors and one with
            perpendicular scenarios. The resistors resistivity and battery
            voltage was kept constant. The set up was varied. The resultant
            current was measured. The results indicated that resistors in a
            series are additive and resistors in parallel are harmonically
            summed. This is important as it confirms the equations that have
            been already derived.
          </h3>
        </div>

        <object data="/labs/LabE5.pdf" type="application/pdf" />
      </div>
      <p style={{ flex: 1 }} />
      <Footer />
    </div>
  );
}
