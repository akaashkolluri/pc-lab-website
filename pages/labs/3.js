import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "../../styles/LabPage.module.css";

export default function Lab1() {
  return (
    <div className={styles.container}>
      <Header />
      <p style={{ flex: 1 }} />
      <h1> Atwood Lab</h1>

      <div className={styles.midrow}>
        <div className={styles.col}>
          <h2>Summary</h2>
          <h3>Coming</h3>
        </div>

        <object data="/labs/atwood.pdf" type="application/pdf" />
      </div>
      <p style={{ flex: 1 }} />
      <Footer />
    </div>
  );
}
