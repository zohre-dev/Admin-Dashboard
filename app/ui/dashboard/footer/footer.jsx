import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.conatiner}>
      <div className={styles.logo}>ZohreDev</div>
      <div className={styles.text}>© All rights reserved.</div>
    </div>
  );
};

export default Footer;
