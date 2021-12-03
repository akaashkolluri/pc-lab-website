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
          <h3>
            In this lab, the acceleration of different atwood systems was
            determined. An atwood machine is a system consisting of two blocks
            tied together moving over a pulley. Different scenarios were tested
            with varying the masses of the two blocks, while other variables
            such as start height were kept constant. Through calculations using
            Newton&apos;s second law, the acceleration of systems can be
            determined. The results of varying masses of the blocks in the labs
            were consistent with the theoretically calculated results,
            demonstrating that the calculations were correct.
          </h3>
        </div>

        <object data="/labs/atwood.pdf" type="application/pdf" />
      </div>
      <p style={{ flex: 1 }} />
      <Footer />
    </div>
  );
}
