import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "../../styles/LabPage.module.css";

export default function Lab1() {
  return (
    <div className={styles.container}>
      <Header />
      <p style={{ flex: 1 }} />
      <h1> Amperes Law</h1>
      <div className={styles.midrow}>
        <div className={styles.col}>
          <h2>Summary</h2>
          <h3>
            In this lab, the magnitude of the magnetic field from current
            carrying wires was calculated. An amperian loop was adjusted in
            different configurations over a solenoid (varied variable). The
            resultant magnetic field was measured. Current was also varied.
            Electric field and current were kept constant. The results showed
            that the total closed current is a sum of positive and negative,
            when a loop had no current there is no magnetic field. These results
            are important as they confirm the equations that have been derived.
          </h3>
        </div>

        <object data="/labs/LabE7.pdf" type="application/pdf" />
      </div>
      <p style={{ flex: 1 }} />
      <Footer />
    </div>
  );
}
