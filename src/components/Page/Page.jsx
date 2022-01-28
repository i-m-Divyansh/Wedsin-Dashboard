import React from "react";

import styles from "./Page.module.css";

//* components
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";

const Page = ({ compName, addSubscriptionBtn, children }) => {
  return (
    <>
      <div className={styles.page_container}>
        <Sidebar />
        <div className={styles.page_content}>
          <Header
            compName={compName}
            //? Subscription
            addSubscriptionBtn={addSubscriptionBtn}
          />
          <div className={styles.component_content}>{children}</div>
        </div>
      </div>
    </>
  );
};

export default Page;
