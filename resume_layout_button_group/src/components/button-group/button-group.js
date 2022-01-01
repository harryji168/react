import {
  makeStyles,
  ButtonGroup as MaterialButtonGroup
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    padding:"4.3px",
    alignItems: "center",
    "& > *:not(:last-child)": {
      marginRight: theme.spacing(2)
    }
  }
}));

export const ButtonGroup = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
};
