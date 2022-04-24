import { Component } from "react";
import { Affix, Menu, Dropdown } from "antd";
import styles from "../styles/Header.module.css";
import Link from "next/link";

const dropdownMenu = (
  <Menu className={styles.offersMenu}>
    <Menu.Item key="1">
      <Link href="/labs/1">
        <a className={styles.tabs}>Calculating G</a>
      </Link>
    </Menu.Item>
    <Menu.Item key="2">
      <Link href="/labs/2">
        <a className={styles.tabs}>Projectile Motion</a>
      </Link>
    </Menu.Item>
    <Menu.Item key="3">
      <Link href="/labs/3">
        <a className={styles.tabs}>Atwood Lab</a>
      </Link>
    </Menu.Item>
    <Menu.Item key="4">
      <Link href="/labs/4">
        <a className={styles.tabs}>Coffee Filter</a>
      </Link>
    </Menu.Item>
    <Menu.Item key="5">
      <Link href="/labs/5">
        <a className={styles.tabs}>Projectile Launchers/COE</a>
      </Link>
    </Menu.Item>
    <Menu.Item key="6">
      <Link href="/labs/6">
        <a className={styles.tabs}>Impulse Lab</a>
      </Link>
    </Menu.Item>
    <Menu.Item key="7">
      <Link href="/labs/7">
        <a className={styles.tabs}>Ballistic Pendulum</a>
      </Link>
    </Menu.Item>
    <Menu.Item key="8">
      <Link href="/labs/8">
        <a className={styles.tabs}>Measuring Elasticity</a>
      </Link>
    </Menu.Item>
    <Menu.Item key="9">
      <Link href="/labs/9">
        <a className={styles.tabs}>Inquiry - Rolling Objects</a>
      </Link>
    </Menu.Item>
    <Menu.Item key="10">
      <Link href="/labs/10">
        <a className={styles.tabs}>D. Eq.and Oscillations</a>
      </Link>
    </Menu.Item>
    <Menu.Item key="11">
      <Link href="/labs/11">
        <a className={styles.tabs}>Pendula: Periods</a>
      </Link>
    </Menu.Item>
  </Menu>
);

const dropdownMenuEandM = (
  <Menu className={styles.offersMenu}>
    <Menu.Item key="12">
      <Link href="/labs/12">
        <a className={styles.tabs}>Millikan Oil Drop</a>
      </Link>
    </Menu.Item>
    <Menu.Item key="13">
      <Link href="/labs/13">
        <a className={styles.tabs}>Electric Field Mapping</a>
      </Link>
    </Menu.Item>
    <Menu.Item key="14">
      <Link href="/labs/14">
        <a className={styles.tabs}>Faraday Ice Pail</a>
      </Link>
    </Menu.Item>
    <Menu.Item key="15">
      <Link href="/labs/15">
        <a className={styles.tabs}>Capacitors</a>
      </Link>
    </Menu.Item>
    <Menu.Item key="16">
      <Link href="/labs/16">
        <a className={styles.tabs}>DC circuits</a>
      </Link>
    </Menu.Item>
    <Menu.Item key="17">
      <Link href="/labs/17">
        <a className={styles.tabs}>RC circuits</a>
      </Link>
    </Menu.Item>
    <Menu.Item key="18">
      <Link href="/labs/18">
        <a className={styles.tabs}>Amperes Law</a>
      </Link>
    </Menu.Item>
    <Menu.Item key="19">
      <Link href="/labs/19">
        <a className={styles.tabs}>Faradays Law</a>
      </Link>
    </Menu.Item>
    <Menu.Item key="20">
      <Link href="/labs/20">
        <a className={styles.tabs}>Transformers</a>
      </Link>
    </Menu.Item>
  </Menu>
);

class Header extends Component {
  render() {
    return (
      <Affix>
        <div className={styles.header}>
          <Link href="/" className={styles.tabs}>
            <a className={styles.tabs}>Akaash Kolluri</a>
          </Link>
          <p style={{ flex: 25 }} />
          {/* <Link href="/labs/11">
            <a className={styles.tabs}>Pendula: Periods</a>
          </Link>
          <Link href="/labs/8">
            <a className={styles.tabs}>Measuring Elasticity</a>
          </Link>
          <Link href="/labs/4">
            <a className={styles.tabs}>Coffee Filter</a>
          </Link> */}
          <p style={{ flex: 3 }} />
          <Dropdown overlay={dropdownMenu}>
            <a className={styles.tabs}>Mechanics</a>
          </Dropdown>
          <Dropdown overlay={dropdownMenuEandM}>
            <a className={styles.tabs}>Electricity and Magnetism</a>
          </Dropdown>
          <Link href="/gallery">
            <a className={styles.tabs}>Gallery</a>
          </Link>
          <p style={{ flex: 1 }} />
        </div>
      </Affix>
    );
  }
}
export default Header;
