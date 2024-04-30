"use client";
import React from "react";
import { ListItemButton, ListItemText, Stack, Typography } from "@mui/material";
import List from "@mui/material/List";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <Stack direction="row" gap={50}>
      <div>Logo</div>
      <ul className={styles.header_nav}>
        <li>Services</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </Stack>
  );
};

export default Header;
