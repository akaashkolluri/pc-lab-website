import Header from "../components/header";
import Footer from "../components/footer";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>
        <h1 className={styles.title}>
          Welcome to my{" "}
          <div>
            {" "}
            <span> Physics C Labs</span>{" "}
          </div>
        </h1>
        <h2 className={styles.subtitle}> Take a look around.</h2>
        <h2 className={styles.subtitle2}> Stay a little while.</h2>
        <img
          src="/home1.png"
          alt="Mr. Shah teaching us about energy."
          className={styles.image1}
        />
        <p style={{ flex: 1 }} />
      </div>
      <Footer />
    </div>
  );
}
