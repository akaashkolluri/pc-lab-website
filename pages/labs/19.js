import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "../../styles/LabPage.module.css";

export default function Lab1() {
  return (
    <div className={styles.container}>
      <Header />
      <p style={{ flex: 1 }} />
      <h1> Faradays Law </h1>
      <div className={styles.midrow}>
        <div className={styles.col}>
          <h2>Summary</h2>
          <h3>
            In this lab, the effect of a changing magnetic field over time was
            explored. A magnet was moved around a conducting coil to change the
            magnetic field (changing variable). The resultant current was
            measured based on how brightly it made a lightbulb shine. The
            results were that a current was induced when the magnetic field
            change, which is important as it confirms Faraday’s laws.
          </h3>
        </div>

        <object data="/labs/LabE8.pdf" type="application/pdf" />
      </div>
      <p style={{ flex: 1 }} />
      <Footer />
    </div>
  );
}
