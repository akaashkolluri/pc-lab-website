import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "../../styles/LabPage.module.css";

export default function Lab1() {
  return (
    <div className={styles.container}>
      <Header />
      <div>hi</div>
      <p style={{ flex: 1 }} />
      <Footer />{" "}
    </div>
  );
}
