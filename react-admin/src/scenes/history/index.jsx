import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Header from '../../components/Header';
import LineChart from '../../components/LineChart';
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";

const History = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return(
    <Box m="20px">
        {/* HEADER */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="History" subtitle="Records of water level" />
        </Box>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker />
        </LocalizationProvider>

                {/* ROW 2 */}
                <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Jembatan Cihuni
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                display="flex"
                alignItems="center"
                color={colors.greenAccent[500]}
              >
                Water Level Statistic
              </Typography>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        </Box>   

)
}

export default History;