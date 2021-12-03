import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "../../styles/DetailLab.module.css";

export default function Lab1() {
  return (
    <div className={styles.container}>
      <Header />
      <p />
      <h1> Coffee Filter Lab</h1>
      <div className={styles.row}>
        <div className={styles.col}>
          <h2>Summary</h2>
          <h3>
            In this lab, the resistive force acting on coffee filters was
            related to their velocity in order to determine if coffee filters
            undergo linear or quadratic drag. Coffee filters were dropped over a
            motion sensor. The drop height was kept constant, the weight was
            varied (by dropping fewer coffee filters each time), and the
            resultant terminal velocity was measured. Mass was found to be
            proportional to terminal velocity squared, and since we derived that
            in quadratic air drag, 𝑣𝑡 = √(mg/b), we know that coffee filters
            undergo quadratic air resistance. This is significant as it confirms
            that coffee filters do undergo quadratic air resistance, which is
            expected since they are not dense and therefore easily affected by
            drag.
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
          <img src="/filter/table1.png" text="lab materials" />
          <h3>
            <b> Table 1. </b> A table recording the terminal velocity of falling
            coffee filters with respect to the mass and number of coffee filters
            being measured.
          </h3>
          <div className={styles.spacer} />
          <img src="/filter/fig2.png" text="lab materials" />
          <h3>
            <b> Figure 2. </b> Graphs showing the terminal velocity recorded in
            CAPSTONE software.
          </h3>
          <p />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.col2}>
          <h2>Results</h2>

          <img src="/filter/fig3.png" />
          <h3>
            <b> Figure 3. </b> A power regression of the magnitude of terminal
            velocity vs. mass of the coffee filters
          </h3>
        </div>
        <p style={{ flex: 1 }} />
        <div className={styles.col2}>
          <h2 style={{ color: "white" }}> .</h2>
          <img src="/filter/fig4.png" />
          <h3>
            <b> Figure 4. </b> A linearized graph of Figure 2 representing
            terminal velocity squared vs mass
          </h3>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.col}>
          <div>
            <h2></h2>
          </div>

          <img src="/filter/table2.png" />
          <h3>
            <b> Table 2. </b> A table recording the terminal velocity squared of
            falling coffee filters with respect to the mass and number of coffee
            filters being measured. This provides linearized data for Figure 4.
          </h3>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.col}>
          <h2>Discussion</h2>
          <h3>
            The graph of the original data points, represented in Figure 3, show
            that the terminal velocity and mass of the coffee filters are not
            linearly proportional, thus telling us that we must linearize the
            graph to determine the trend of the resistive force acting on the
            coffee filters as they fall. After linearizing our data by squaring
            terminal velocity, the graph represented in Figure 4 tells us that
            the coffee filter moves in quadratic motion since the terminal
            velocity of the coffee filters is proportional to the square root of
            the mass of the coffee filters. With this, we can conclude that the
            coffee filters are under the influence of quadratic drag force.
            These results support what we have learned and what might have been
            expected because coffee filters reach their terminal velocity quite
            quickly, suggesting that it is influenced by quadratic air
            resistance.
            <p /> A potential source of error in this experiment would be
            dropping the coffee filter at an angle, such that the object does
            not fall straight down onto the motion detector. This would cause
            the trajectory of the coffee filters to change as dropping the
            coffee filter at an angle also changes the way that air resistance
            affects its motion. This can be minimized by running multiple trials
            and dropping the coffee filters multiple times. Another potential
            source of error is weighing the coffee filters as they are very
            light – the scale could have been slightly inaccurate and not
            completely balanced. This error could be minimized by doing multiple
            weighing or by using an electronic balance.
          </h3>
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
