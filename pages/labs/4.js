import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "../../styles/DetailLab.module.css";

export default function Lab1() {
  return (
    <div className={styles.container}>
      <Header />
      <p style={{ flex: 1 }} />
      <h1> Coffee Filter Lab</h1>
      <div className={styles.row}>
        <div className={styles.col}>
          <h2>Summary</h2>
          <h3>
            In this lab, the law of conversion of energy between different forms
            of energy was observed in the real world. A projectile launcher was
            set to shoot a ball horizontally. The spring, launch height, and
            ball mass were kept constant; the displacement from equilibrium of
            the spring was varied; the resultant launch distance and time were
            measured; the velocity of the ball was calculated. The results
            suggest that the mass times the velocity squared of the ball was
            proportional to the displacement of the spring squared. This result
            is useful as it demonstrates conservation of energy in the real
            world; all of the spring potential energy (given by
            ½*k*displacement^2) was converted to kinetic energy(given by
            ½*m*v^2), which this proportionality shows.
          </h3>
        </div>
      </div>
      <div className={styles.trirow}>
        <div className={styles.imgcap}>
          <img src="/filter/fig1.png" text="lab materials" />

          <h3>
            {" "}
            <b> Figure 1. </b>A schematic of the experimental setup{" "}
          </h3>
        </div>
        <div>
          <h2>Materials</h2>
          <h3>
            -7 Coffee Filters
            <p />
            -Triple Beam Balance
            <p />
            -Motion Detector
            <p />
            -Capstone Lab Software
            <p />
          </h3>
        </div>
        <div>
          <h2>Procedure</h2>
          <h3>
            1. Weigh the first 7 coffee filters all together.
            <p />
            2. Drop the coffee filters all together above the motion detector
            and record results on software.
            <p />
            3. Note the slope of the line of best fit on the data points (this
            is the terminal velcoity).
            <p />
            4. Repeat steps 1-3, 6 more times, remvoing 1 coffee filter each
            time and reweighing each time.
            <p />
          </h3>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <div>
            <h2>Data</h2>
          </div>
          <img
            src="/filter/table1.png"
            classname={styles.thintable}
            text="lab materials"
          />
          <h3>
            <b> Table 1. </b> A table recording the terminal velocity of falling
            coffee filters with respect to the mass and number of coffee filters
            being measured.
          </h3>
          <p />
          <img src="/filter/fig2.png" text="lab materials" />
          <h3>
            <b> Figure 2. </b> Graphs showing the terminal velocity recorded in
            CAPSTONE software.
          </h3>
          <p />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.col}>
          <h2>Entire Lab Report Document</h2>
          <h3>This was a fun night lab</h3>
        </div>
        <object data="/labs/Lab03.pdf" type="application/pdf" />
      </div>

      <Footer />
    </div>
  );
}
