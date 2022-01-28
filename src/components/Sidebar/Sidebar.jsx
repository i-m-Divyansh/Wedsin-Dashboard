import React from "react";

// styles
import styles from "./Sidebar.module.css";

// router
import { NavLink, withRouter, useHistory } from "react-router-dom";

// material-ui
import AvTimerIcon from "@material-ui/icons/AvTimer";
import SportsSoccerIcon from "@material-ui/icons/SportsSoccer";
import BusinessIcon from "@material-ui/icons/Business";
import SportsBasketballIcon from "@material-ui/icons/SportsBasketball";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import PeopleIcon from "@material-ui/icons/People";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import EventIcon from "@material-ui/icons/Event";
import { Button } from "@material-ui/core";
import { BsArrowLeft } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { FiUsers } from "react-icons/fi";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { GiInterlacedTentacles } from "react-icons/gi";

const Pages = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <AvTimerIcon />,
  },
  {
    name: "Users",
    path: "/users",
    icon: <FiUsers />,
  },
  {
    name: "Categories",
    path: "/categories",
    icon: <BusinessIcon />,
  },
  {
    name: "Interests",
    path: "/interests",
    icon: <GiInterlacedTentacles />,
  },
  {
    name: "Subscription Plans",
    path: "/subscriptions",
    icon: <FaMoneyCheckAlt />,
  },

  //   {
  //     name: "Sports",
  //     path: "/admin/sports",
  //     icon: <SportsBasketballIcon />,
  //   },
  //   {
  //     name: "Coach",
  //     path: "/admin/coaches",
  //     icon: <PermIdentityIcon />,
  //   },
  //   {
  //     name: "Teams",
  //     path: "/admin/teams",
  //     icon: <PeopleIcon />,
  //   },
  //   {
  //     name: "Players",
  //     path: "/admin/players",
  //     icon: <PeopleIcon />,
  //   },
  //   {
  //     name: "Users",
  //     path: "/admin/users",
  //     icon: <GroupAddIcon />,
  //   },
  //   {
  //     name: "Events",
  //     path: "/admin/events/Upcoming",
  //     icon: <EventIcon />,
  //   },
  //   {
  //     name: "Videos",
  //     path: "/admin/videos",
  //     icon: <AvTimerIcon />,
  //   },
  //   {
  //     name: "Video Analytics",
  //     path: "/admin/video/analytics",
  //     icon: <AvTimerIcon />,
  //   },

  //   {
  //     name: "E-Commerce",
  //     path: "/admin/ecommerce",
  //     icon: <AvTimerIcon />,
  //   },

  //   {
  //     name: "Subscription",
  //     path: "/admin/subscription",
  //     icon: <AvTimerIcon />,
  //   },
];

const Sidebar = ({ history }) => {
  let current = new Date();

  let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
  let currentDay = days[current.getDay()];

  let currentTime = current.toLocaleString("en-US", {
    hour: "numeric",
    hour12: true,
  });

  let history2 = useHistory();

  //? useDispatch
  let dispatch = useDispatch();

  const logoutHandler = () => {
    if (localStorage.getItem("auth")) {
      localStorage.removeItem("auth");
      history2.push("/");
    }
  };

  return (
    <div className={styles.sidebar_wrapper}>
      <div>
        <div className={styles.admin}>
          <div className={styles.admin_img_wrapper}>
            <img
              src="https://inspiretothrive-inspiretothrive.netdna-ssl.com/wp-content/uploads/2017/03/new-twitter-profile.png"
              alt="admin-img"
            />
          </div>
          <p className={styles.admin_name}>{"Divyansh"}</p>
          <p className={styles.time}>{`${currentDay} ${currentTime}`}</p>
        </div>

        <div className={styles.nav_items}>
          {Pages &&
            Pages.map((page, index) => {
              const { name, path, icon } = page;
              return (
                <NavLink activeClassName={styles.active} to={path} key={index}>
                  {icon}
                  {name}
                </NavLink>
              );
            })}
        </div>
        <div className={styles.buttonWrapper}>
          <Button
            onClick={logoutHandler}
            endIcon={<BsArrowLeft />}
            color="secondary"
            variant="contained"
          >
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Sidebar);
