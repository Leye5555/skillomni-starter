"use client";
import React from "react";
import {
  Link,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import List from "@mui/material/List";
import styles from "./Header.module.css";
import Image from "next/image";
import { RouterLink } from "@/routes/components";
import { paths } from "@/routes/paths";

const Header = () => {
  return (
    <Stack direction="row" gap={50}>
      <div>
        <Image
          src="/assets/logo/airbnb.svg"
          alt="test"
          width={100}
          height={100}
        />
      </div>
      <ul className={styles.header_nav}>
        <li>
          <Link component={RouterLink} href={paths.home.services}>
            Services
          </Link>
        </li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </Stack>
  );
};

export default Header;
