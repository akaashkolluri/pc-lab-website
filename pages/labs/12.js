import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "../../styles/DetailLab.module.css";

export default function Lab1() {
  return (
    <div className={styles.container}>
      <Header />
      <p />
      <h1> Millikan Oil Drop</h1>
      <div className={styles.row}>
        <div className={styles.col}>
          <h2>Summary</h2>
          <h3>
            In this lab, the definition of an electric field was used to analyze
            the net charges of oil droplets based on their initial mass and a
            known voltage. Charged particles were placed between an area with an
            electric field and let to move. The particles mass was varied (the
            mass varied in an unknown way). The voltage needed and final
            velocity was measured. The charge, particle mass, charge to mass
            ratio, and charge in terms of value of e was measured. The results
            indicated that, for all particles, the charge in terms of e was an
            integer. This is significant as it indicates that charge is
            quantized.
          </h3>
        </div>
      </div>
      <div className={styles.trirow}>
        <div className={styles.imgcap}>
          <img src="/oildrop/fig1.png" text="lab materials" />

          <h3>
            {" "}
            <b> Figure 1. </b>A schematic of the virtual experiment setup.{" "}
          </h3>
        </div>
        <div>
          <h2>Materials</h2>
          <h3>
            <a className={styles.link} href="https://ophysics.com/em2.html">
              {" "}
              -Virtual Lab Program
            </a>
            <p />
            -Charged Particles
            <p />
            -Voltage Source
            <p />
          </h3>
        </div>
        <div>
          <h2>Procedure</h2>
          <h3>
            1. A particle with an unknown mass was created <p />
            2. The particle was set into motion, and the voltage in it area was
            changed until the particle acceleration was 0.
            <p />
            3. The velocity and voltage used were recorded.
            <p />
            4. Steps 1-3 were repeated 3 more times with differnt particles of
            unknown masses.
            <p />
          </h3>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <div>
            <h2>Data</h2>
          </div>
          <img src="/oildrop/table1.png" text="lab materials" />
          <h3>
            <b> Table 1. </b> A table recording the velocity, mass, and voltage
            as measured in the lab.
          </h3>
          <div className={styles.spacer} />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.col}>
          <h2>Results</h2>

          <img src="/oildrop/table2.png" />
          <h3>
            <b> Table 2. </b>A complete table showing the results of the
            calculations based on data collected in the lab.
          </h3>
          <div className={styles.spacer} />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.col}>
          <h2>Discussion</h2>
          <h3>
            The relationship between mass and charge can be found by setting the
            gravitational force equal to the electric field force, giving us an
            expression for the charge in terms of mass 𝑚, 𝑔, and the electric
            field 𝐸. <p />
            𝑚𝑔 = 𝐸𝑞 → 𝑞 = 𝑚𝑔/𝐸 <p />
            By substituting 𝐸 as an expression of voltage and distance, we get{" "}
            <p />
            𝐸=𝑉/𝑟 <p />
            𝑞 = 𝑟𝑚𝑔/𝑉 <p />
            Where 𝑟 = 0.05 𝑚. So, charge increases as mass increases. The values
            we obtained were not expected because from our expression for mass,
            it should be proportional to the square of the velocity, which is
            not always the case in our data. From observing the charge to mass
            ratio in terms of 𝑒, no clear trend is found as the value sometimes
            increases then decreases while velocity continues to decrease in
            magnitude, though this could be due to errors in measuring the
            voltage.
            <p />
            Sources of error are not super prevalent in this lab due to the
            nature of it being a simulation. Potential sources of error could
            come from measuring the data, specifically the voltage that results
            in the particle being at rest, which proved to be difficult since it
            was hard for the naked eye to tell if a particle was still or moving
            very slowly. Measurement error could be minimized by conducting more
            trials.
          </h3>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.col}>
          <h2>Entire Lab Report Document</h2>
          <h3>This was a fun night lab!</h3>
        </div>
        <object data="/labs/LabE1.pdf" type="application/pdf" />
      </div>

      <Footer />
    </div>
  );
}
