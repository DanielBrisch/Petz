import * as React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import colors from "../../../theme/colors";

export default function HomeAppBar() {
  return (
    <AppBar
      color="fff"
      elevation={1}
      position="static"
      sx={{ pr: "14em", pl: "14em" }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <img src="./src/assets/Petz_Logo.svg"></img>
        <Box
          sx={{
            display: "flex",
            pl: "1em",
            pt: "0.2em",
            pb: "0.2em",
            borderLeft: "1.5px solid black",
          }}
        >
          <img src="./src/assets/lock.svg"></img>
          <Typography
            sx={{ pl: "0.5em", color: colors.gray }}
            variant="h6"
            fontWeight="800"
          >
            Ambiente Seguro
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
