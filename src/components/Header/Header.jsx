import React from "react";
import styles from "./Header.module.css";
import { BiArrowBack } from "react-icons/bi";
//? Router-dom
import { useHistory, Link } from "react-router-dom";

//? Redux
import { useSelector, useDispatch } from "react-redux";

//? Material-Ui
import { IconButton, Tooltip } from "@material-ui/core";
import { BsPlusLg } from "react-icons/bs";

const Header = ({
  compName,
  back,
  showSearch,
  setSearch,
  addSubscriptionBtn,
  addCategoryBtn,
  addInterestBtn,
}) => {
  //? useDispatch
  let dispatch = useDispatch();

  //? useHistory
  let history = useHistory();

  return (
    <div className={`${back ? styles.headerBack : styles.header}`}>
      {back && (
        <button className={styles.back} onClick={() => history.goBack()}>
          <BiArrowBack style={{ width: "20px", height: "20px" }} />
        </button>
      )}

      <p className={styles.component_name}>{compName}</p>
      <div className={styles.search_bar_wrapper}>
        {showSearch && (
          <input
            onChange={(e) => dispatch(setSearch(e.target.value))}
            className={styles.search_bar}
            type="text"
            placeholder="Search"
          />
        )}
        {/* //? Subscription */}
        <div>
          {addSubscriptionBtn && (
            <Tooltip title="Add Subscription Plan">
              <IconButton onClick={() => history.push(addSubscriptionBtn)}>
                <BsPlusLg />
              </IconButton>
            </Tooltip>
          )}
        </div>
        {/* //? Category */}
        <div>
          {addCategoryBtn && (
            <Tooltip title="Add Category">
              <IconButton onClick={() => history.push(addCategoryBtn)}>
                <BsPlusLg />
              </IconButton>
            </Tooltip>
          )}
        </div>
        {/* //? Interest */}
        <div>
          {addInterestBtn && (
            <Tooltip title="Add Interest">
              <IconButton onClick={() => history.push(addInterestBtn)}>
                <BsPlusLg />
              </IconButton>
            </Tooltip>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
