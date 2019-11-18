import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    fontFamily: "Roboto Mono"
  },
  ip: {
    border: "solid",
    borderColor: theme.palette.ip,
    borderWidth: 1
  },
  sp: {
    border: "solid",
    borderColor: theme.palette.sp,
    borderWidth: 1
  },
  fp: {
    border: "solid",
    borderColor: theme.palette.fp,
    borderWidth: 1
  },
  h3: {
    marginTop: 0
  }
}));

function Registers({ cpu }) {
  const classes = useStyles();
  const registerDisplayElems = cpu.registerNames.map(name => {
    return (
      <div key={name} className={classes.register + " " + classes[name]}>
        {name.padEnd(3, " ")}:{" 0x"}
        {cpu
          .getRegister(name)
          .toString(16)
          .padStart(4, "0")}
      </div>
    );
  });
  return (
    <Paper className={classes.root}>
      <h3 className={classes.h3}>Registers</h3>
      {registerDisplayElems}
    </Paper>
  );
}

export default Registers;
