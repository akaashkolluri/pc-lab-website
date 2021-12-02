import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "../../styles/LabPage.module.css";

export default function Lab1() {
  return (
    <div className={styles.container}>
      <Header />
      <p style={{ flex: 1 }} />
      <h1> Inquiry - Rolling Objects</h1>
      <div className={styles.midrow}>
        <div className={styles.col}>
          <h2>Summary</h2>
          <h3>
            In this lab, the effects of torque on a rolling object were explored
            through comparing the rotational and total kinetic energy of an
            object. In a lab simulation, a ball was rolled down an incline. Its
            mass and the incline angle were varied; its initial gravitational
            potential energy, final translational kinetic energy, and final
            rotational kinetic energy were measured; the ratios of the different
            energies were calculated. It was found that in all scenarios, the
            ratios between rotational and translational kinetic energies were
            about equal to ⅖, the same as the coefficient for the formula of
            moment of inertia of a sphere. This lab demonstrates how moment of
            inertia plays a role in determining how much kinetic energy ends up
            translational and how much ends up rotational.
          </h3>
        </div>

        <object data="/labs/rolling.pdf" type="application/pdf" />
      </div>
      <p style={{ flex: 1 }} />
      <Footer />
    </div>
  );
}
