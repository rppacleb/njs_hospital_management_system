import clsx from "clsx";
import MaterialIcon from "@mui/material/Icon";

const Icon = ({ name, className, props = {}, onClick }) => (
  <MaterialIcon
    className={clsx(`icon-${name}`, className)}
    sx={props}
    onClick={onClick}
  />
);

export default Icon;
