import "../styles/globals.css";
import "antd/dist/antd.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      {" "}
      <title>Shah</title>
      <Component {...pageProps} />{" "}
    </div>
  );
}

export default MyApp;
