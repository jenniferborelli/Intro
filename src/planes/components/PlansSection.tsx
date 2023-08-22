import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

export const plans: {
  title: string;
  description: string;
  price: number;
  hrefViewMore: string;
  hrefSelectPlan: string;
}[] = [
  {
    title: "Website",
    description: "Crea un catálogo profesional y atractivo que sorprenda.",
    price: 2990,
    hrefViewMore: "#",
    hrefSelectPlan: "/comprar/1",
  },
  {
    title: "Business",
    description:
      "Comienza a vender al instante con los elementos esenciales del eCommerce.",
    price: 5990,
    hrefViewMore: "#",
    hrefSelectPlan: "/comprar/2",
  },
  {
    title: "Advanced Store",
    description:
      "Haz crecer tu negocio con potentes herramientas de marketing.",
    price: 8990,
    hrefViewMore: "#",
    hrefSelectPlan: "/comprar/3",
  },
];

const PlansSection = () => {
  return (
    <Box marginTop={"4rem"}>
      <Typography textAlign={"center"} variant="h4" className="title">
        Elije el plan que mejor te convenga
      </Typography>
      <br />
      <Grid container spacing={4}>
        {plans.map((item, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card elevation={4}>
              <Stack
                height={{
                  sm: "418px",
                  md: "420px",
                }}
                padding={".5rem"}
                justifyContent={"space-between"}
              >
                <CardHeader title={item.title} subheader={item.description} />
                <Box>
                  <CardContent>
                    <Typography variant="caption">Desde</Typography>
                    <Typography variant="h4" className="title">
                      {`AR$ ${item.price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")},00`}
                    </Typography>
                    <Typography variant="caption">/mes</Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="contained"
                      className="button contained"
                      href={item.hrefSelectPlan}
                    >
                      Seleccionar
                    </Button>
                    <Button
                      variant="text"
                      className="button button-text"
                      href={item.hrefViewMore}
                    >
                      Ver más
                    </Button>
                  </CardActions>
                </Box>
              </Stack>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PlansSection;
