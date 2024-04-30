import PropTypes from "prop-types";

import Typography from "@mui/material/Typography";
import ListItemButton from "@mui/material/ListItemButton";

// ----------------------------------------------------------------------

export default function BaseOptions({ title, icons, selected, ...other }) {
  return (
    <ListItemButton
      sx={{
        p: 3,
        justifyContent: "space-between",
        ...(selected && {
          color: "primary.main",
        }),
      }}
      {...other}
    >
      <Typography variant="subtitle2">{title}</Typography>
    </ListItemButton>
  );
}

BaseOptions.propTypes = {
  icons: PropTypes.arrayOf(PropTypes.string),
  selected: PropTypes.bool,
  title: PropTypes.string,
};
