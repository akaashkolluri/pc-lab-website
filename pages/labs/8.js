import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "../../styles/LabPage.module.css";

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

        <object data="/labs/Lab07.pdf" type="application/pdf" />
      </div>
      <p style={{ flex: 1 }} />
      <Footer />
    </div>
  );
}
