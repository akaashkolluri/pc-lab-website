import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "../../styles/LabPage.module.css";

export default function Lab1() {
  return (
    <div className={styles.container}>
      <Header />
      <p style={{ flex: 1 }} />
      <h1> Impulse Lab</h1>

      <div className={styles.midrow}>
        <div className={styles.col}>
          <h2>Summary</h2>
          <h3>
            In this lab, impulse was related to the change in velocity of an
            object. In a simulated lab, a force was exerted on an astronaut for
            a set amount of time, and the time it took the astronaut to travel
            between 2 photogates was measured. The photogate distance, the mass
            of the astronaut, and the force time were all kept constant; the
            force amount was varied; the velocity of the astronaut was
            calculated. A regression was done to analyze the relation between
            force and velocity, and a strong linear correlation was found. These
            results demonstrate the impulse-momentum theorem in play in a
            simulated scenario.
          </h3>
        </div>

        <object data="/labs/Lab05.pdf" type="application/pdf" />
      </div>
      <p style={{ flex: 1 }} />
      <Footer />
    </div>
  );
}
