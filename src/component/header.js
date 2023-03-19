import * as React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { deepPurple, grey } from "@mui/material/colors";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: deepPurple[400],
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: grey[50],
  width: 400,
}));

export default function Header({ covidData }) {
  return (
    <div>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1 }}
        justifyContent="center"
        alignItems="center"
        sx={{ mt: 1 }}
      >
        {/* <img
          src="./images/covid-19.png"
          width={100}
          alt="covid"
          loading="lazy"
        /> */}
        <Item>
          <Typography
            variant="h5"
            sx={{ fontSize: 16, fontWeight: 700 }}
            gutterBottom
          >
            Confirmed Cases
          </Typography>
          {covidData?.data?.summary.confirmedCasesIndian}
        </Item>
        <Item>
          <Typography
            variant="h5"
            sx={{ fontSize: 16, fontWeight: 700 }}
            gutterBottom
          >
            Discharged
          </Typography>
          {covidData?.data?.summary.discharged}
        </Item>
        <Item>
          <Typography
            variant="h5"
            sx={{ fontSize: 16, fontWeight: 700 }}
            gutterBottom
          >
            Deaths
          </Typography>
          {covidData?.data?.summary.deaths}
        </Item>
        <Item>
          <Typography
            variant="h5"
            sx={{ fontSize: 16, fontWeight: 700 }}
            gutterBottom
          >
            Total Cases
          </Typography>
          {covidData?.data?.summary.total}
        </Item>
      </Stack>
    </div>
  );
}
