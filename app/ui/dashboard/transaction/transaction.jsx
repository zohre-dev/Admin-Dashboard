import Image from "next/image";
import styles from "./transaction.module.css";

const Transaction = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Latest Transaction</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          {/* ************************************************ */}
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/images/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                zohre mehrabi
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                pending
              </span>
            </td>
            <td>02.06.2020</td>
            <td>$3.200</td>
          </tr>
          {/* ************************************************ */}
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/images/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                zohre mehrabi
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>pending</span>
            </td>
            <td>02.06.2020</td>
            <td>$3.200</td>
          </tr>
          {/* ************************************************* */}
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/images/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                zohre mehrabi
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>
                pending
              </span>
            </td>
            <td>02.06.2020</td>
            <td>$3.200</td>
          </tr>
          {/* **************************************************/}
        </tbody>
      </table>
    </div>
  );
};

export default Transaction;
