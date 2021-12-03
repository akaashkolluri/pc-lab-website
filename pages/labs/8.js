import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "../../styles/DetailLab.module.css";

export default function Lab1() {
  return (
    <div className={styles.container}>
      <Header />
      <p />
      <h1> Measuring Elasticity</h1>

      <div className={styles.row}>
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
            be .239, for the ping pong ball was .2344, and for the car collision
            was .7544. The results are significant and help demonstrate that in
            the real world energy is conserved to different degrees depending on
            the type of object colliding.
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
            -Dynamic cars
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
            1. Drop a tennis ball from a height of 1m. Measure the height it
            returns to. Repeat for three trails.
            <p />
            2. Drop a ping pong ball from a height of 1m. Measure the height it
            returns to. Repeat for three trails.
            <p />
            3. With motion sensors pointing at both at them, push two cars
            placed apart facing towards each other to give them intial velocity.
            Using CAPSTONE, record the intial velocities and final velocities of
            both cars.
            <p />
          </h3>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.col2}>
          <h2>Data</h2>

          <img src="/elastic/table1.png" />
          <h3>
            <b> Table 1. </b> Showing the results collected from the Tennis Ball
            Drop Over three trials.
          </h3>
        </div>
        <p style={{ flex: 1 }} />
        <div className={styles.col2}>
          <h2 style={{ color: "white" }}> .</h2>
          <img src="/elastic/table2.png" />
          <h3>
            <b> Table 2. </b> Showing the results collected from the Ping Pong
            Ball Drop Over three trials.
          </h3>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.col}>
          <div>
            <h2></h2>
          </div>

          <img src="/elastic/table3.png" />
          <h3>
            <b> Table 3. </b> Showing the results collected from the Car Crash
            trial. The motion sensor plotted values, and their slope was
            analyzed to find the intial and final velocities of the two cars.
          </h3>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.col2}>
          <h2>Results</h2>

          <img src="/elastic/table4.png" />
          <h3>
            <b> Table 4. </b> Showing the calculated velocities and coefficient
            of restitution for the Tennis Ball drop. Velocities were calculated
            via conservation of energy. Coefficent of restitution was calculated
            given the velocities.
          </h3>
        </div>
        <p style={{ flex: 1 }} />
        <div className={styles.col2}>
          <h2 style={{ color: "white" }}> .</h2>
          <img src="/elastic/table5.png" />
          <h3>
            <b> Table 5. </b> Showing the calculated velocities and coefficient
            of restitution for the Ping Pong Ball drop. Velocities were
            calculated via conservation of energy. Coefficent of restitution was
            calculated given the velocities.
          </h3>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.col}>
          <div>
            <h2></h2>
          </div>

          <img src="/elastic/table6.png" />
          <h3>
            <b> Table 6. </b> Showing the calculated coefficient of restitution
            for the car crash. It is given by the formula C=|(v_2-v_1)/(u_2-u_1
            )|.
          </h3>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.col}>
          <h2>Discussion</h2>
          <h3>
            The first experiment we did was a ball drop. The height was kept
            constant, and the height returned was measured. After, the formulas
            u_2=√2gH and v_2=√2gh were used to calculate the velocities of the
            ball before and after the collision, and C=|v_2/u_2 | to find the
            coefficient of restitution. Here, the coefficient of restitution
            varies with the height the ball was dropped, because the ratio of
            the velocities is the same as the square root of the ratio of the
            ending and starting heights. It was found to be .2398, on average,
            which characterizes the collision as an inelastic collision. This is
            reasonable since some energy should be lost since balls are not
            super bouncy and heat/sound energy is lost on collision. The same
            procedure was followed for the second experiment except with a ping
            pong ball. The coefficient of restitution was found to be 0.234,
            which characterizes the collision as inelastic as well. This is
            reasonable since ping pong balls aren’t very bouncy and loose energy
            to thermal/sound on collision. The final experiment was where two
            cars on a ramp with a spring attached to the end were flung towards
            each other. The initial velocities of each were measured, and the
            final velocity of each were measured. The coefficient of restitution
            was calculated to be 0.7544, which makes the collision inelastic.
            This is reasonable, since it should be closer to 1 since the end is
            springy but shouldn’t be that close since it is not necessarily a
            perfect spring that returns all energy and the real-world loose
            energy. In all the experiments, we assumed conservation of momentum,
            and air resistance is neglected for calculations because the effect
            of air resistance is minimal in this experiment.
            <p />
            Possible sources of error include air resistance on the ball and
            ping-pong ball drop. This would lead to the balls losing energy
            which would skew the calculations of initial and final velocities
            (since we relate them to height). Another possible source of error
            includes friction when the carts collided. This could be avoided by
            using tracks with less friction. Another possible error was human
            measurement on the ball drop since the time interval short. This
            could be prevented by more trials or dropping from a higher height
            to bring the time to a larger scale to reduce error.
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
