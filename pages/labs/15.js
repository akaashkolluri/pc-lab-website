import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "../../styles/DetailLab.module.css";

export default function Lab1() {
  return (
    <div className={styles.container}>
      <Header />
      <p />
      <h1> Capacitors</h1>
      <div className={styles.row}>
        <div className={styles.col}>
          <h2>Summary</h2>
          <h3>
            In this lab, the capacitance of different parallel plates was
            characterized by exploring the relationships between voltage,
            charge, capacitance, and potential energy. A virtual capacitor was
            simulated with a circuit made up of a battery and a charged
            capacitor. In the first part of the experiment, voltage was kept
            constant while separation of plate area was varied and capacitance
            was measured. In the second part of the experiment, voltage was
            varied with a constant separation and plate area. The resultant
            changes to capacitance and stored energy was measured. The results
            were that capacitance is directly proportional to plate area and
            inversely proportional to seperation. It was also discovered that
            stored energy is proportional to voltage squared and to capacitance
            Such finding are useful as they confirm the equations C = 𝜖A/d and U
            = ½*C*V^2.
          </h3>
        </div>
      </div>
      <div className={styles.trirow}>
        <div className={styles.imgcap}>
          <img src="/capacitors/fig1.png" text="lab materials" />

          <h3>
            {" "}
            <b> Figure 1. </b>A schematic of the virtual experiment setup.{" "}
          </h3>
        </div>
        <div>
          <h2>Materials</h2>
          <h3>
            <a
              className={styles.link}
              href="https://phet.colorado.edu/sims/html/capacitor-lab-basics/latest/capacitor-lab-basics_en.html"
            >
              {" "}
              -Virtual Lab Program
            </a>
            <p />
            -Virtual Capacitor
            <p />
            -Virtual Wire
            <p />
            -Virtual Voltmeter
            <p />
            -Virtual Battery
            <p />
          </h3>
        </div>
        <div>
          <h2>Procedure</h2>
          <h3>
            1. On the “Capacitance” tab of the PhET simulation, the plate
            separation and plate area was varied while everything else was kept
            constant. The resulting capacitance was changed. <p />
            2. Step 1 was then repeated, however this time the voltage and
            capacitance were varied and the stored energy was measured using the
            voltmeter.
            <p />
            3. A power regression was used to find the relationship between the
            data collected in steps 1 and 2.
            <p />
            4. On the “Light Bulb” tab, the plates were charged by increasing
            the battery voltage The battery was then disconnected.
            <p />
            5. The voltmeter was connected across the light bulbs, and the
            capacitor was also attached to the light bulb. The changes in
            potential difference were qualitatively observed.
            <p />
          </h3>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <div>
            <h2>Data</h2>
          </div>
          <img src="/capacitors/table1.png" text="lab materials" />
          <h3>
            <b> Table 1. </b> A table showing how capacitance depends on plate
            separation and plate area while voltage is kept constant.
          </h3>
          <div className={styles.spacer} />
          <img src="/capacitors/table2.png" text="lab materials" />
          <h3>
            <b> Table 2. </b> A table showing how stored energy changes with
            voltage and capacitance.
          </h3>
          <p />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.col2}>
          <h2>Results</h2>

          <img src="/capacitors/fig2.png" />
          <h3>
            <b> Figure 2. </b> A power regression of stored energy vs voltage,
            with capacitance remaining constant.
          </h3>
        </div>
        <p style={{ flex: 1 }} />
        <div className={styles.col2}>
          <h2 style={{ color: "white" }}> .</h2>
          <img src="/capacitors/fig3.png" />
          <h3>
            <b> Figure 3. </b> A power regression of stored energy vs
            capacitance, with voltage remaining constant.
          </h3>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.col}>
          <h2>Discussion</h2>
          <h3>
            From task 1, we can see that capacitance is directly proportional to
            plate area but inversely proportional to separation. This can
            intuitively be seen from looking at the data without the use of
            graphs. As voltage and plate area remain constant, the capacitance
            increases as the separation of the plates decreases, suggesting an
            inverse proportionality. Moreover, the value of separation times
            capacitance stays constant, indicating that capacitance is
            proportional to 1/separation. Similarly, when separation and voltage
            stay constant, capacitance triples when plate area triples, implying
            direct proportionality. This correlation can be further verified by
            the formula 𝐶 = 𝜖𝐴/𝑑 .
            <p />
            From task 2, it is clear from the graphs that stored energy is
            proportional to voltage^2 and directly proportional to capacitance.
            This is known as in Fig 1, the graph of stored energy vs. voltage
            gives a power regression of 𝑦 = 0.1509𝑥^1.9193 with R^2 of 1, and
            the graph of stored energy vs capacitance gives a power regression
            of 1.1216𝑥^1.009 with R^2 of 1. This relation can be further
            verified as it is known that 𝑈 = 1/2𝐶𝑉^2. 2
            <p />
            As the light bulb is connected, the charge and potential difference
            both decreases. Energy is used to produce light and is slowly
            drained out of the system. The decrease is not linear, as the rate
            at which they both decrease decreases over time. As the system has
            less and less of a potential difference, less charge moves across
            the circuit, which means less charge goes through the lightbulb and
            causes a loss in charge. This loss in charge also contributes to the
            loss of potential difference, so its rate slows down as well.
            <p />
            In this lab, sources of error are unlikely due to the nature of
            simulations. However, if this lab was conducted in the real-world
            other sources of error may be possible. For instance, charge could
            escape from the system affecting measured values. Alternatively, it
            is assumed that the air between the capacitors is a perfect
            insulator, but in the real world that is not always the case.
          </h3>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.col}>
          <h2>Entire Lab Report Document</h2>
          <h3>This was a fun night lab!</h3>
        </div>
        <object data="/labs/LabE4.pdf" type="application/pdf" />
      </div>

      <Footer />
    </div>
  );
}
