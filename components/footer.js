import { Component } from "react";
import { Layout, Col } from "antd";
import styles from "../styles/Footer.module.css";

class Footer extends Component {
  render() {
    return (
      <Layout.Footer className={styles.footer}>
        <Col>
          <a>Made with ❤️ for Mr. Shah&apos;s Physics C Class</a>
          <p>Mr. Shah I hope you like the website</p>
        </Col>
      </Layout.Footer>
    );
  }
}
export default Footer;
