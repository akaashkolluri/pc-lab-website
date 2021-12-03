import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "../../styles/DetailLab.module.css";

export default function Lab1() {
  return (
    <div className={styles.container}>
      <Header />
      <p style={{ flex: 1 }} />
      <h1> Measuring Elasticity</h1>

      <div className={styles.midrow}>
        <div className={styles.col}>
          <h2>Summary</h2>
          <h3>
            In this lab, the elasticity of different kinds of collisions were
            determined. The following scenarios were tested: dropping a tennis
            ball from a set height, dropping a ping pong ball from a set height,
            and colliding two cars together with a spring. In the two dropping
            scenarios, drop height and object mass were kept constant; return
            height was measured; initial velocity, final velocity, and the
            coefficient of restitution were calculated. In the block collision,
            initial velocities were kept constant, final velocities were
            measured, and the coefficient of restitution calculated. In the end,
            the coefficient of restitution for the tennis ball was calculated to
            be .7570, for the ping pong ball was .2344, and for the car
            collision was .7544. The results are significant and help
            demonstrate that in the real world energy is conserved to different
            degrees depending on the type of object colliding.
          </h3>
        </div>
      </div>

      <div className={styles.trirow}>
        <div className={styles.imgcap}>
          <img src="/elastic/fig1.png" text="tennis ball" />

          <h3>
            {" "}
            <b> Figure 1. </b>A tennis ball, an object used in the drop test of
            the experiment.
          </h3>
        </div>
        <div>
          <h2>Materials</h2>
          <h3>
            -Meter stick
            <p />
            -Tennis ball
            <p />
            -Ping pong ball
            <p />
            -Stopwatch
            <p />
            -Dynamic cards
            <p />
            -Motion detectors
            <p />
            -Capstone Software
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
          <h2>Entire Lab Report Document</h2>
          <h3>This was a fun night lab!</h3>
        </div>
        <object data="/labs/Lab07.pdf" type="application/pdf" />
      </div>
      <Footer />
    </div>
  );
}
