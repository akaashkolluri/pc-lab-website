import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "../../styles/LabPage.module.css";

export default function Lab1() {
  return (
    <div className={styles.container}>
      <Header />
      <p style={{ flex: 1 }} />
      <h1> Transformers </h1>
      <div className={styles.midrow}>
        <div className={styles.col}>
          <h2>Summary</h2>
          <h3>
            In this lab, the magnitude and reaction of an induced current in a
            conductive loop was found by calculating inductance. A circuit was
            set up with an inductor. In the first part of the experiment, the
            core type was changed, and the secondary voltage was measured and
            efficiency was calculated. In the second part of the experiment, the
            core type was again changed, and the secondary voltage was again
            measured. The results showed that the square type was most
            efficient, which is useful since it explains well how transformers
            work.
          </h3>
        </div>

        <object data="/labs/LabE9.pdf" type="application/pdf" />
      </div>
      <p style={{ flex: 1 }} />
      <Footer />
    </div>
  );
}
