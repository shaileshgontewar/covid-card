import * as React from "react";
import useAxios from "./useAxios";
import axios from "../api/covidapi";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Header from "./header";

const Post = () => {
  const [covidData, loading] = useAxios({
    axios: axios,
    method: "GET",
    url: "/",
  });
  console.log(covidData);
  return (
    <>
      {loading && <p>Loading....</p>}

      <Header covidData={covidData} />
      <Box sx={{ flexGrow: 1, width: "80%", m: "auto", mt: 5 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {covidData?.data?.regional.map((data) => (
            <Grid item xs={12} sm={4} md={4} key={data.loc}>
              <Card sx={{ maxWidth: 280, height: 200, m: "auto" }}>
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 700, textAlign: "center" }}
                    gutterBottom
                  >
                    {data.loc.length > 20 ? data.loc.slice(0, 20) : data.loc}
                  </Typography>
                  <Typography
                    color="text.secondary"
                    variant="subtitle1"
                    sx={{ mb: 1, mt: 4 }}
                  >
                    Total confirmed Cases :- {data.confirmedCasesIndian}
                  </Typography>
                  <Typography variant="subtitle1" color="green" sx={{ mb: 1 }}>
                    Discharged :- {data.discharged}
                  </Typography>
                  <Typography sx={{ mb: 0 }} variant="subtitle1" color="red">
                    Total Deaths :- {data.deaths}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Post;
