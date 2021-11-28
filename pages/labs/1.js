import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "../../styles/LabPage.module.css";
import { Row, Col } from "antd";

export default function Lab1() {
  return (
    <div className={styles.container}>
      <Header />

      <p style={{ flex: 1 }} />
      <h1> Calculating G</h1>
      <div className={styles.midrow}>
        <div className={styles.col}>
          <h2>Summary</h2>
          <h3>
            In this lab, we attempt In this lab, we attemptIn this lab, we
            attemptIn this lab, we attemptIn this lab, we attempt
          </h3>
        </div>

        <object data="/labs/Lab01.pdf" type="application/pdf" />
      </div>
      <p style={{ flex: 1 }} />
      <Footer />
    </div>
  );
}
