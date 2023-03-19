import * as React from "react";
import useAxios from "./useAxios";
import axios from "../api/covidapi";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Post = () => {
  const [covidData, error, loading] = useAxios({
    axios: axios,
    method: "GET",
    url: "/",
  });
  console.log(covidData);
  return (
    <>
      {loading && <p>Loading....</p>}
      {/* {!loading && error && <p>{error}</p>} */}
      <Box sx={{ flexGrow: 1, width: "80%", m: "auto", mt: 5 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {covidData?.data?.regional.map((data) => (
            <Grid item xs={12} sm={4} md={4} key={data.loc}>
              <Card sx={{ maxWidth: 280, m: "auto" }}>
                <CardContent>
                  <Typography
                    variant="h5"
                    sx={{ fontSize: 16, fontWeight: 700, textAlign: "center" }}
                    gutterBottom
                  >
                    {data.loc.length > 20 ? data.loc.slice(0, 20) : data.loc}
                  </Typography>
                  <Typography color="text.secondary" variant="body2">
                    Total confirmed Cases :- {data.confirmedCasesIndian}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Discharged :- {data.discharged}
                  </Typography>
                  <Typography
                    sx={{ mb: 0 }}
                    variant="body2"
                    color="text.secondary"
                  >
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
