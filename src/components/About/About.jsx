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

const About = () => {
  return (
    <>
      <Toolbar />
      <Box sx={{ display: "flex" }}>
        {founders.map((x) => (
          <CardItem img={x.img} name={x.name} text={x.text} />
        ))}
      </Box>
    </>
  );
};

const CardItem = ({ img, name, text }) => {
  return (
    <Card sx={{ maxWidth: 345, maxHeight: "50%", m:3 }}>
      <CardMedia
        component="img"
        height="140"
        image={"/assets/" + img}
        sx={{ borderRadius: "50%", maxWidth:"50%", margin:"auto", p:2 }}
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
  );
};

export default About;
