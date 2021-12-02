import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "../../styles/DetailLab.module.css";

export default function Lab1() {
  return (
    <div className={styles.container}>
      <Header />
      <p style={{ flex: 1 }} />
      <h1> Coffee Filter Lab</h1>
      <div className={styles.trirow}>
        <div className={styles.imgCap}>
          <img src="/filter/materials.png" text="lab materials" />{" "}
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
          <h2>Entire Lab Report Document</h2>
          <h3>This was a fun night lab</h3>
        </div>
        <object data="/labs/Lab03.pdf" type="application/pdf" />
      </div>
      <p style={{ flex: 1 }} />
      <Footer />
    </div>
  );
}
