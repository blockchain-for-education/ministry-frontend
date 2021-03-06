import { Avatar, Box, Divider, Drawer, Hidden, List, makeStyles, Typography } from "@material-ui/core";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import HowToVoteIcon from "@material-ui/icons/HowToVote";
import SearchIcon from "@material-ui/icons/Search";
import PropTypes from "prop-types";
import HistoryIcon from "@material-ui/icons/History";
import React, { useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import NavItem from "./NavItem";

const user = {
  avatar: "/static/images/ministry.png",
  jobTitle: "Bộ Giáo dục và Đào tạo",
  name: "Bộ trưởng",
};

const items = [
  {
    href: "/bgd/bo-phieu",
    icon: HowToVoteIcon,
    title: "Bỏ phiếu",
  },
  {
    href: "/bgd/lich-su-bo-phieu",
    icon: HistoryIcon,
    title: "Lịch sử bỏ phiếu",
  },
  {
    href: "/bgd/ds-tdh",
    icon: FormatListBulletedIcon,
    title: "Danh sách TĐH",
  },
  {
    href: "/bgd/thong-ke",
    icon: EqualizerIcon,
    title: "Thống kê",
  },
  {
    href: "/bgd/tra-cuu",
    icon: SearchIcon,
    title: "Tra cứu",
  },
];

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256,
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: "calc(100% - 64px)",
  },
  avatar: {
    cursor: "pointer",
    width: 64,
    height: 64,
  },
}));

const NavBar = ({ onMobileClose, openMobile }) => {
  const classes = useStyles();
  const location = useLocation();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <Box alignItems="center" display="flex" flexDirection="column" p={2}>
        <Avatar className={classes.avatar} component={RouterLink} src={user.avatar} to="/" />
        <Typography className={classes.name} color="textPrimary" variant="h5">
          {user.name}
        </Typography>
        <Typography color="textSecondary" variant="body2">
          {user.jobTitle}
        </Typography>
      </Box>
      <Divider />
      <Box p={2}>
        <List>
          {items.map((item) => (
            <NavItem href={item.href} key={item.title} title={item.title} icon={item.icon} />
          ))}
        </List>
      </Box>
      <Box flexGrow={1} />
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer anchor="left" classes={{ paper: classes.mobileDrawer }} onClose={onMobileClose} open={openMobile} variant="temporary">
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer anchor="left" classes={{ paper: classes.desktopDrawer }} open variant="persistent">
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
};

NavBar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false,
};

export default NavBar;
