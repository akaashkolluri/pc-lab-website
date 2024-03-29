import { Component } from "react";
import { Layout, Col } from "antd";
import styles from "../styles/Footer.module.css";

class Footer extends Component {
  render() {
    return (
      <Layout.Footer className={styles.footer}>
        <Col>
          <a href="https://github.com/akaashkolluri/pc-lab-website">
            Made with ❤️ for Mr. Shah&apos;s Physics C Class
          </a>
          <p>Mr. Shah I hope you like it!</p>
        </Col>
      </Layout.Footer>
    );
  }
}
export default Footer;
