import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "../../styles/LabPage.module.css";

export default function Lab1() {
  return (
    <div className={styles.container}>
      <Header />
      <p style={{ flex: 1 }} />
      <h1> Faraday Ice Pail</h1>
      <div className={styles.midrow}>
        <div className={styles.col}>
          <h2>Summary</h2>
          <h3>
            In this lab, the interaction between charged and neutral objects
            through friction was used to describe the charges of conducting
            surfaces using electric potential. Charing wands were rubbed onto
            different cloth-like materials and then the deflection that these
            wands caused were measured. The wand type and material used were
            varied, the voltage reading was measured, and everything else was
            kept constant. It was found that the wand had a negative charge
            after rubbing it, indicating that friction can cause charges of
            things to change.
          </h3>
        </div>

        <object data="/labs/LabE3.pdf" type="application/pdf" />
      </div>
      <p style={{ flex: 1 }} />
      <Footer />
    </div>
  );
}
