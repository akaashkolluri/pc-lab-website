import Header from "../components/header";
import Footer from "../components/footer";

import styles from "../styles/Home.module.css";

export default function Gallery() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>
        <h1 className={styles.title}>
          <div>
            {" "}
            <span>Gallery</span>{" "}
          </div>
        </h1>
        <h2 className={styles.subtitle}> A page dedicated to everything</h2>
        <h2 className={styles.subtitle2}> and anything Physics C.</h2>
        <video controls width="250" className={styles.image1}>
          {" "}
          <source
            src="gallery/video1.mp4"
            alt="Mr. Shah liking the gallery"
            type="video/mp4"
          ></source>
        </video>
        <h3 className={styles.subtitle3}> Mr. Shah approving this gallery.</h3>
        <div style={{ flex: 1, flexDirection: "row" }}>
          {/* <video controls width="250" className={styles.image1}>
            {" "}
            <source
              src="gallery/bike.MOV"
              alt="Mr. Shah giving consent to having his photos here"
              type="video/MOV"
            ></source>
          </video>
          <video controls width="250" className={styles.image1}>
            {" "}
            <source
              src="gallery/bike.MOV"
              alt="Mr. Shah giving consent to having his photos here"
              type="video/MOV"
            ></source>
          </video> */}
        </div>
        <p style={{ flex: 1 }} />
      </div>
      <Footer />
    </div>
  );
}
