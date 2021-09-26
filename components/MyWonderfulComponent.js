import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import useStyles from "../styles/style";

const MyWonderfulComponent = ({ children, id, options, ...other }) => {
  const { count, data } = other;
  const { summ, setSumm } = useState(count);
  const classes = useStyles();

  useEffect(() => {
    if (id && options?.params?.fields?.isDynamic) {
      setSumm(summ + 1);
    }
  });

  return (
    <>
      <h1 className={classes.h1}>Hello World!</h1>
      <Grid container>
        <Grid item xs={12}>
          {children}
        </Grid>
        <Grid item xs={12}>
          {data}
        </Grid>
        <Grid item>{summ}</Grid>
      </Grid>
    </>
  );
};

export default MyWonderfulComponent;
