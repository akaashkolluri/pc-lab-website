import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "../../styles/DetailLab.module.css";

export default function Lab1() {
  return (
    <div className={styles.container}>
      <Header />
      <p />
      <h1> RC Circuits</h1>
      <div className={styles.row}>
        <div className={styles.col}>
          <h2>Summary</h2>
          <h3>
            In this lab, the current through an RC circuit was calculated as a
            function of time by calculating the time constant. A circuit was
            constructed with a battery, a capacitor, and a resistor in a series.
            The capacitor was discharged, and then charged and the resulting
            voltage was measured overtime using capstone. Then, the capacitor
            was discharged again and the resulting voltage was measured. This
            was repeated with a different resistor, with a different resistivity
            value (varied variable). Battery charge and capacitance was kept
            constant. The time constant was then calculated for both the
            experimental and theoretical numbers. It was found to be 33.86% and
            40.64% percent off in the two trails. These results are significant
            since they confirm that the theoretical equation works (however,
            they do indicate sources of error).
          </h3>
        </div>
      </div>
      <div className={styles.trirow}>
        <div className={styles.imgcap}>
          <img src="/rc/fig1.png" text="lab materials" />

          <h3>
            {" "}
            <b> Figure 1. </b>Circuit diagram for setup with 133 Ω resistance{" "}
          </h3>
        </div>
        <div>
          <h2>Materials</h2>
          <h3>
            <p />
            -Circut kit with:
            <p />
            ** two resistors <p /> ** a switch <p />
            ** a capacitor <p />
            ** a power source
            <p />
            -Capstone software
            <p />
            -Voltmeter
            <p />
          </h3>
        </div>
        <div>
          <h2>Procedure</h2>
          <h3>
            1. A circuit was constructed with a 1.5 V battery and a 0.22 F
            capacitor in series with 133 Ω resistance in series. It was
            connected with another loop with a switch in the “junction”
            position, to be able to go from charging to discharging and vice
            versa. Shown in Figure 1.
            <p />
            2. The voltmeter was connected to Capstone and the clips were
            attached to the capacitor.
            <p />
            3. The switch was flipped such that the capacitor was discharging.
            Waited until the capacitor was nearly completely discharged.
            <p />
            4. The voltage vs. time graph was recorded on Capstone and the
            switch was flipped such that the capacitor began charging. 7 data
            points were recorded
            <p />
            5. The switch was flipped so the capacitor was discharging. 7 data
            points were recorded as the capacitor fully discharged.
            <p />
            6. Steps 1-7 were repeated except with 100 Ω resistance.
            <p />
          </h3>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <div>
            <h2>Data</h2>
          </div>
          <img src="/rc/fig2.png" text="lab materials" />
          <h3>
            <b> Figure 2. </b> Voltage vs. time graph for charging the capacitor
            when resistance is 133 Ω.
          </h3>
          <div className={styles.spacer} />
          <img src="/rc/fig3.png" text="lab materials" />
          <h3>
            <b> Figure 3. </b> Voltage vs. time graph for discharging the
            capacitor when resistance is 133 Ω.
          </h3>
          <div className={styles.spacer} />
          <img src="/rc/fig4.png" text="lab materials" />
          <h3>
            <b> Figure 4. </b> Voltage vs. time graph for discharging the
            capacitor when resistance is 100 Ω.
          </h3>
          <p />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.col2}>
          <h2>Results</h2>

          <img src="/rc/table1.png" />
          <h3>
            <b> Table 1.</b> Voltage measurements through the capacitor as a
            function of time while charging and discharging when the resistance
            is 133 Ω.
          </h3>
        </div>
        <p style={{ flex: 1 }} />
        <div className={styles.col2}>
          <h2 style={{ color: "white" }}> .</h2>
          <img src="/rc/table2.png" />
          <h3>
            <b> Table 2. </b> Voltage measurements through the capacitor as a
            function of time while charging and discharging when the resistance
            is 100 Ω.
          </h3>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.col}>
          <h2>Discussion</h2>
          <h3>
            For each circuit, the theoretical time constant, 𝜏, is equal to 𝑅𝐶,
            the product of the resistance and the capacitance in the circuit.
            For charging, the equation for the voltage, 𝑉, as a function of
            time, 𝑡, is <p />
            𝑉(𝑡)=𝜖(1−𝑒^(-t/𝜏)) <p />
            Where 𝜖 is the emf and is 1.5 V in our experiment. This equation
            makes sense because when 𝑡 = 0, the voltage is 0 as the capacitor is
            completely discharged. With this equation, our graphs in Capstone
            look as expected being exponential functions that increase with
            time, as seen in Figure 2. We found the experimental time constant
            by plugging in a data point to the equation, expressing the voltage
            as a fraction of the emf, and then solving the equation. For the
            circuit with 133 Ω resistance, the theoretical time constant was
            29.26 𝑠, and the experimental was 16.65 𝑠. For the circuit with 100
            Ω resistance, the theoretical time constant was 22.00 𝑠, and the
            experimental was 13.19 𝑠. The time constants are significantly
            smaller than expected, which will be discussed when analyzing causes
            of errors. The value is big, meaning that it took a long time to
            charge. Similarly for discharging, the equation is
            <p />
            𝑉(𝑡)=𝜖(𝑒^(-t/𝜏))
            <p />
            Which makes sense because when 𝑡 = 0, the voltage is 𝜖, the
            capacitor is currently fully charged. Our graphs in Capstone look as
            expected being exponential functions that decrease with time, as
            seen in Figure 3 and 4. The experimental time constant was found in
            the same way as the charging section. For the circuit with 133 Ω
            resistance, the theoretical time constant was 29.26 𝑠, and the
            experimental was 21.70 𝑠. For the circuit with 100 Ω resistance, the
            theoretical time constant was 22.00 𝑠, and the experimental was
            14.55 𝑠. The analysis for the time constant is the same as for
            charging.
            <p /> The percent errors for the 133 and 100 Ω for charging the
            capacitor were 43.10% and 40.64%, respectively. For discharging,
            they were 25.84% and 33.86%. Causes of such high percent errors
            could have been partially due to the small amount of resistance in
            the wires which were not included in the theoretical calculation for
            time constant. However, in this source of error does not align with
            our results, as a higher resistance should lead to higher time
            constant. This could mean that the resistors and capacitor had much
            smaller values than indicated, making all our experimental values be
            smaller than expected. Another source of error was not precisely
            finding the ratio between our chosen data point and the emf (e.g.,
            assuming 5.350 be a third of 1.5) causing a lot of rounding errors
            in the calculations. Strangely, from the Capstone graphs we see that
            the emf is actually around 1.6 V instead of 1.5, meaning that the
            time plugged into our equations were a bit smaller than they should
            have been, leading to a smaller time constant. Even with these
            potential sources of error, though, our time constant does not make
            that much sense because it is such a significant percent error, and
            the causes listed above should not create such a big difference.
            These errors could be minimized by using newer and higher quality
            equipment and being more precise with the calculations.
          </h3>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.col}>
          <h2>Entire Lab Report Document</h2>
          <h3>This was a fun night lab!</h3>
        </div>
        <object data="/labs/LabE6.pdf" type="application/pdf" />
      </div>

      <Footer />
    </div>
  );
}
