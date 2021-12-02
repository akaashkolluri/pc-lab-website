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
            In this lab, the value of g was experimentally determined. Three
            different tests were conducted: first, a car was rolled down a ramp,
            second, a tennis ball was dropped, and third a pendulum was put into
            motion. In the first test, the car’s initial height, final height,
            mass, and ramp length were kept constant; time was measured; gravity
            was calculated. In the second test, the tennis balls mass and drop
            height were kept constant, the time to drop was measured, and
            gravity was calculated. In the third test, the pendulum string
            length, the pendulum mass, and the pendulum start angle were kept
            constant, the period time was measured, and gravity was calculated.
            Gravity was found to be 10.987 m/s^2, 9.157 m/s^2, and 10.203 m/s^2
            in the respective experiments. This result was useful as it
            confirmed the value of gravity normally used in calculations held in
            the real world.
          </h3>
        </div>

        <object data="/labs/Lab01.pdf" type="application/pdf" />
      </div>
      <p style={{ flex: 1 }} />
      <Footer />
    </div>
  );
}
