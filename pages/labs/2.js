import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "../../styles/LabPage.module.css";

export default function Lab1() {
  return (
    <div className={styles.container}>
      <Header />
      <p style={{ flex: 1 }} />
      <h1> Projectile Motion</h1>

      <object data="/labs/Lab02.pdf" type="application/pdf" />
      <p style={{ flex: 1 }} />
      <Footer />
    </div>
  );
}