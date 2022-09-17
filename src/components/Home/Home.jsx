import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Grow from "@mui/material/Grow";
import Slide from "@mui/material/Slide";
import { home } from "../../data";


import { useState, useEffect } from "react";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const Home = () => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <Box sx={{ flexGrow: 1, display:"flex" }} id="intro">
      <Grid container sx={{ width: "100%", height: "100%" }}>
        <Grid
          container
          item
          xs={12}
          md={6}
          alignItems="center"
          justifyContent="center"
          direction="column"
        >
          <Slide
            direction="right"
            in={checked}
            mountOnEnter
            unmountOnExit
            timeout={3000}
          >
            <Container
              sx={{
                backgroundColor: "text.default",
                height: "auto",
                width: "70%",
                display: "block",
              }}
              disableGutters={true}
            >
              <Img src={"assets/" + home.img} />
            </Container>
          </Slide>
        </Grid>
        <Grid
          container
          item
          xs={12}
          md={6}
          alignItems="center"
          justifyContent="center"
          direction="column"
          sx={{ paddingLeft: "0" }}
        >
          <Box
            sx={{
              width: "70%",
            }}
          >
            <Grow in={checked} timeout={2000}>
              <Typography
                variant="h1"
                color="primary"
                sx={{ overflow: "hidden", fontWeight: "600" }}
              >
                {home.header}
              </Typography>
            </Grow>
            <Grow
              in={checked}
              style={{ transformOrigin: "0 0 0" }}
              {...(checked ? { timeout: 3000 } : {})}
            >
              <Typography variant="body1" color="primary">
                {home.text}
              </Typography>
            </Grow>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;