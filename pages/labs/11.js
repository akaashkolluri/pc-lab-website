import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "../../styles/DetailLab.module.css";

export default function Lab1() {
  return (
    <div className={styles.container}>
      <Header />
      <p style={{ flex: 1 }} />
      <h1>Pendula: Periods</h1>

      <div className={styles.midrow}>
        <div className={styles.col}>
          <h2>Summary</h2>
          <h3>
            In this lab, the relationship between the displacement and period
            time of a pendulum was determined. A pendulum was pulled backwards a
            small angle and then dropped, and the time it took to complete a
            period was measured. The pendulum mass and angle dropped from were
            kept constant, the length of the pendulum was varied, and the period
            of the pendulum was measured. Then, a regression of the period vs.
            length revealed that it was a square root relationship, implying
            that period is proportional to the square root of length. This is
            useful as it confirms the theoretical equation of the pendulum
            period that is used.
          </h3>
        </div>
      </div>

      <div className={styles.trirow}>
        <div className={styles.imgcap}>
          <img src="/pendula/fig1.png" text="lab materials" />

          <h3>
            {" "}
            <b> Figure 1. </b>A example pendulum in motion.
          </h3>
        </div>
        <div>
          <h2>Materials</h2>
          <h3>
            -Pendulum (String+Mass)
            <p />
            -Stopwatch
            <p />
            -Meter Stick
            <p />
          </h3>
        </div>
        <div>
          <h2>Procedure</h2>
          <h3>
            1. Tie the pendulum at some low height. Measure the length. Then,
            let it go from a small angle to swing.
            <p />
            2. Time the pendulum's period of oscillation using a stopwatch.
            <p />
            3. Change the pendulum's length by some amount by
            wrapping/unwrapping the string more. Repeat steps 1-2 with a
            different string length each time.
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
            src="/pendula/table1.png"
            classname={styles.thintable}
            text="lab materials"
          />
          <h3>
            <b> Table 1. </b> A table recording the length of the pendulum in
            meters, and the measured period time of the pendulum when let swing
            from a small angle.
          </h3>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.col2}>
          <h2>Results</h2>

          <img src="/pendula/fig2.png" />
          <h3>
            <b> Figure 2. </b> A power regression on the data collected for
            period (s) vs length (m) of the pendulum. The power regression has
            an exponent that is close to 0.5, suggesting a square root
            relationship.
          </h3>
        </div>
        <p style={{ flex: 1 }} />
        <div className={styles.col2}>
          <h2 style={{ color: "white" }}> .</h2>
          <img src="/pendula/fig3.png" />
          <h3>
            <b> Figure 3. </b> A linearized graph of Figure 2 representing that
            period (s) vs the square root of length (m^0.5) of the pendulum.
          </h3>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.col}>
          <div>
            <h2></h2>
          </div>

          <img src="/pendula/table2.png" classname={styles.thintable} />
          <h3>
            <b> Table 2. </b> A table showing the theoretical pendulum period
            based on its length found via calculations. Column 4 presents the
            calculated period (s), and column 3 presents the percent error in
            our experimental value.
          </h3>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.col}>
          <h2>Discussion</h2>
          <h3>
            In this lab, the length of a pendulum was changed, and the value
            that varied with this was the period of the pendulum. Kept constant
            were values of mass and angle.
            <p /> The graph of the length of the pendulum is square root
            proportional to the period. So, to linearize the graph, the length
            of the pendulum is square rooted while the period stays the same. In
            our graph, the power of the x value, the length, is 0.6 (close to
            0.5), which agrees with the theoretical equation for period relation
            with length. Our linearized graph has an R^2 value of 0.97, so it is
            relatively accurate data.
            <p />
            Changing the mass should not affect the period of oscillation.
            Because objects of the same mass experience the same acceleration
            due to gravity, the acceleration while on the pendulum should be the
            same, meaning the same period.
            <p /> Sources of error that led to not having a R^2 value of exactly
            1 include using an angle too large. The period that we calculated
            for only works when using smaller angles because it relies on the
            small angle approximation. Thus, using too large of an angle will
            skew the results. This could be avoided by using only smaller, tiny
            angles. Another potential source of error comes from human
            inaccuracy of measuring time, since the periods were very short,
            especially with short string lengths. Further, this could be reduced
            by using many trials and averaging results to reduce the noise
            caused by errors.
          </h3>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.col}>
          <h2>Entire Lab Report Document</h2>
          <h3>This was a fun night lab</h3>
        </div>
        <object data="/labs/pendula.pdf" type="application/pdf" />
      </div>

      <Footer />
    </div>
  );
}
