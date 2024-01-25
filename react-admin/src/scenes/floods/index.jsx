import * as React from 'react';
import Header from '../../components/Header';
import { Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import FloodList from '../../components/FloodList';

const Floods = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return(
    <Box m="20px">
      {/* HEADER */}
      <Header title="Floods" subtitle="Records of recent flooding" />

      {/* BOX COMPONENT */}
      <Box display='flex' flexDirection='column' height='100%' gap='10px'>
      <FloodList location="Jembatan Cihuni" date="25/12/2023" time="16.00" waterlevel="15m" />
      <FloodList location="Jembatan Cihuni" date="27/12/23" time="16.00" waterlevel="15m" />
      </Box>
     
    </Box>   
)
}

export default Floods;