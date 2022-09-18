import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { founders } from "../../data";
import { Box } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";

const About = () => {
  return (
    <>
      <Toolbar />
      <Grid container sx={{ display: "flex", width: "100%", height: "100%" }}>
        {founders.map((x) => (
          <CardItem img={x.img} name={x.name} text={x.text} />
        ))}
      </Grid>
    </>
  );
};

const CardItem = ({ img, name, text }) => {
  return (
    <Grid item xs={12} md={4}>
      <Card sx={{ m: 3 }}>
        <CardMedia
          component="img"
          height="140"
          image={"/assets/" + img}
          sx={{ borderRadius: "50%", maxWidth: "50%", margin: "auto", p: 2 }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {text}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Like</Button>
          <Button size="small">More</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default About;
