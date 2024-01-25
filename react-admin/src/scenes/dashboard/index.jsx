import { Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import StatBox from "../../components/StatBox";
import { useEffect, useState } from "react";
import {getData} from "../../data/fetchData"

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [level, setLevel] = useState([])

  function dataLevel(value){
    const levelData = value.map(item => {
      return {
        times: item.x,
        level: item.y + " m"
      }
    })

    setLevel(levelData)
    console.log("LEVEL " , levelData);
  }

  useEffect(() => {
    getData(dataLevel)
  }, [])

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Daily statistic" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="Status"
            subtitle="Connected"
            icon={
              <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 10V14C4 15.1027 3.10267 16 2 16C0.897333 16 0 15.1027 0 14V10C0 8.89733 0.897333 8 2 8C3.10267 8 4 8.89733 4 10ZM16 2V14C16 15.1027 15.1027 16 14 16C12.8973 16 12 15.1027 12 14V2C12 0.897333 12.8973 0 14 0C15.1027 0 16 0.897333 16 2ZM15.3333 2C15.3333 1.26467 14.7353 0.666667 14 0.666667C13.2647 0.666667 12.6667 1.26467 12.6667 2V14C12.6667 14.7353 13.2647 15.3333 14 15.3333C14.7353 15.3333 15.3333 14.7353 15.3333 14V2ZM8 4C6.89733 4 6 4.89733 6 6V14C6 15.1027 6.89733 16 8 16C9.10267 16 10 15.1027 10 14V6C10 4.89733 9.10267 4 8 4Z" fill="#4CCEAC"/>
              </svg>
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="Battery level"
            subtitle="50%"
            icon={
              <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_308_678)">
              <path d="M18 6.0001L16.2 5.8501V5.2501C16.2 4.0096 15.4905 3.6001 14.25 3.6001H0.450012V14.4001H14.25C15.4905 14.4001 16.1226 13.9906 16.1226 12.7501L16.2 12.1501L18 12.0001V6.0001ZM15 12.7501C15 13.1633 14.6633 13.5001 14.25 13.5001H1.50001V4.5001H14.25C14.6633 4.5001 15 4.83685 15 5.2501V12.7501ZM3.00001 12.0001H9.00001V6.0001H3.00001V12.0001Z" fill="#4CCEAC"/>
              </g>
              <defs>
              <clipPath id="clip0_308_678">
              <rect width="18" height="18" fill="white"/>
              </clipPath>
              </defs>
              </svg>
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="Date"
            subtitle= "26/12/2023"
            icon={
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0H20V20H0V0Z" fill="white" fill-opacity="0.01"/>
<path d="M10 18.3334C14.6024 18.3334 18.3334 14.6025 18.3334 10.0001C18.3334 5.39771 14.6024 1.66675 10 1.66675C5.39765 1.66675 1.66669 5.39771 1.66669 10.0001C1.66669 14.6025 5.39765 18.3334 10 18.3334Z" stroke="#4CCEAC" stroke-width="1.2" stroke-linejoin="round"/>
<path d="M10.0035 5L10.003 10.0037L13.5361 13.5368" stroke="#4CCEAC" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
           
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="Water level"
            subtitle="17m"
            icon={
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.5407 16.5855C19.2718 16.8166 18.9235 16.9443 18.5602 16.9443C17.9113 16.9443 17.2741 16.5449 17.0786 16.0149C17.038 15.9061 16.9341 15.8333 16.818 15.8333C16.7019 15.8333 16.598 15.9055 16.5574 16.0149C16.3619 16.5449 15.7247 16.9443 15.0758 16.9443C14.4269 16.9443 13.7897 16.5449 13.5942 16.0149C13.513 15.7966 13.1536 15.7966 13.0731 16.0149C12.8775 16.5449 12.2403 16.9443 11.5914 16.9443C10.9426 16.9443 10.3054 16.5449 10.1098 16.0149C10.0287 15.7966 9.66922 15.7966 9.58869 16.0149C9.39315 16.5449 8.75595 16.9443 8.10702 16.9443C7.74375 16.9443 7.39542 16.8171 7.12595 16.5855C7.01042 16.486 6.83489 16.4988 6.73429 16.6155C6.63431 16.7316 6.64764 16.9071 6.76429 17.0071C7.13429 17.3249 7.61095 17.4999 8.10702 17.4999C8.79535 17.4999 9.45922 17.1699 9.84922 16.6699C10.2398 17.1699 10.9031 17.4999 11.5914 17.4999C12.2798 17.4999 12.9436 17.1699 13.3336 16.6699C13.7242 17.1699 14.3875 17.4999 15.0764 17.4999C15.7652 17.4999 16.4286 17.1699 16.8186 16.6699C17.2086 17.1699 17.8718 17.4999 18.5607 17.4999C19.0568 17.4999 19.5335 17.3249 19.9035 17.0066C20.0196 16.9066 20.0329 16.731 19.9329 16.6149C19.8335 16.4988 19.6574 16.4855 19.5407 16.5855ZM6.76322 13.6739C7.13315 13.9917 7.60982 14.1666 8.10595 14.1666C8.79429 14.1666 9.45815 13.8367 9.84815 13.3367C10.2387 13.8367 10.902 14.1666 11.5903 14.1666C12.2786 14.1666 12.9425 13.8367 13.3325 13.3367C13.723 13.8367 14.3864 14.1666 15.0752 14.1666C15.7641 14.1666 16.4274 13.8367 16.8174 13.3367C17.2074 13.8367 17.8708 14.1666 18.5596 14.1666C19.0557 14.1666 19.5324 13.9917 19.9024 13.6733C20.0185 13.5733 20.0318 13.3977 19.9318 13.2817C19.8324 13.1661 19.6568 13.1522 19.5402 13.2522C19.2713 13.4833 18.923 13.6111 18.5596 13.6111C17.9108 13.6111 17.2736 13.2117 17.078 12.6817C17.0374 12.5728 16.9336 12.5 16.8174 12.5C16.7013 12.5 16.5974 12.5722 16.5569 12.6817C16.3613 13.2117 15.7241 13.6111 15.0752 13.6111C14.4264 13.6111 13.7892 13.2117 13.5936 12.6817C13.5125 12.4633 13.1531 12.4633 13.0725 12.6817C12.877 13.2117 12.2398 13.6111 11.5909 13.6111C10.942 13.6111 10.3048 13.2117 10.1092 12.6817C10.0282 12.4633 9.66869 12.4633 9.58815 12.6817C9.39255 13.2117 8.75535 13.6111 8.10649 13.6111C7.74315 13.6111 7.39482 13.4839 7.12542 13.2522C7.00982 13.1527 6.83429 13.1655 6.73375 13.2822C6.63375 13.3983 6.64655 13.5739 6.76322 13.6739Z" fill="#4CCEAC"/>
<path d="M1.41667 1.33325C0.635233 1.33325 0 2.14287 0 3.13881V16.8611C0 17.857 0.635233 18.6666 1.41667 18.6666H5.66667V1.33325H1.41667ZM1.41667 17.9444C0.948033 17.9444 0.566667 17.4583 0.566667 16.8611V3.13881C0.566667 2.54153 0.948033 2.05547 1.41667 2.05547H5.1V4.22214H2.83333V4.94437H5.1V7.83325H2.83333V8.55545H5.1V11.4444H2.83333V12.1666H5.1V15.0555H2.83333V15.7777H5.1V17.9444H1.41667Z" fill="#4CCEAC"/>
<path d="M8.83165 3.16844C8.74051 3.07732 8.59278 3.07732 8.50165 3.16844L7.01671 4.65336C6.92558 4.74448 6.92558 4.89222 7.01671 4.98334C7.10785 5.07447 7.25558 5.07447 7.34671 4.98334L8.66665 3.66341L9.98658 4.98334C10.0777 5.07447 10.2254 5.07447 10.3166 4.98334C10.4077 4.89222 10.4077 4.74448 10.3166 4.65336L8.83165 3.16844ZM8.89998 10.0001V3.33343H8.43331V10.0001H8.89998Z" fill="#4CCEAC"/>
<path d="M13.1683 10.1649C13.2595 10.2561 13.4072 10.2561 13.4983 10.1649L14.9833 8.67999C15.0744 8.58885 15.0744 8.44112 14.9833 8.34999C14.8921 8.25885 14.7444 8.25885 14.6533 8.34999L13.3333 9.66992L12.0134 8.34999C11.9223 8.25885 11.7745 8.25885 11.6834 8.34999C11.5923 8.44112 11.5923 8.58885 11.6834 8.67999L13.1683 10.1649ZM13.1 3.33325V9.99992H13.5667V3.33325H13.1Z" fill="#4CCEAC"/>
</svg>
            }
          />
        </Box>

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
            {/* <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box> */}
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent
            </Typography>
          </Box>
          {level.map((water, i) => (
            <Box
              key={`${water.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box color={colors.grey[100]}>{water.times}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                {water.level}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;

// -- UNUSED --
// import { Box, Button, Typography, useTheme } from "@mui/material";
// import { tokens } from "../../theme";
// import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
// import Header from "../../components/Header";
// import LineChart from "../../components/LineChart";
// import StatBox from "../../components/StatBox";

// import React, { useEffect, useState } from 'react';
// import database from "../../config";

// const Dashboard = () => {
//   const [waterLevels, setWaterLevels] = useState([]);

//   useEffect(() => {
//     const waterLevelsRef = database.ref('height'); // Adjust here
  
//     const handleData = (snapshot) => {
//       if (snapshot.val()) {
//         const levelsObject = snapshot.val();
//         const levels = Object.keys(levelsObject).map((key) => levelsObject[key]);
//         console.log('Water Levels:', levels);
//         setWaterLevels(levels);
//       }
//     };
  
//     waterLevelsRef.on('value', handleData);
  
//     return () => {
//       waterLevelsRef.off('value', handleData);
//     };
//   }, []);


//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);

//   return (
//     <Box m="20px">
//       {/* HEADER */}
//       <Box display="flex" justifyContent="space-between" alignItems="center">
//         <Header title="DASHBOARD" subtitle="Daily statistic" />

//         <Box>
//           <Button
//             sx={{
//               backgroundColor: colors.blueAccent[700],
//               color: colors.grey[100],
//               fontSize: "14px",
//               fontWeight: "bold",
//               padding: "10px 20px",
//             }}
//           >
//             <DownloadOutlinedIcon sx={{ mr: "10px" }} />
//             Download Reports
//           </Button>
//         </Box>
//       </Box>

//       {/* GRID & CHARTS */}
//       <Box
//         display="grid"
//         gridTemplateColumns="repeat(12, 1fr)"
//         gridAutoRows="140px"
//         gap="20px"
//       >
//         {/* ROW 1 */}
//         <Box
//           gridColumn="span 3"
//           backgroundColor={colors.primary[400]}
//           display="flex"
//           alignItems="center"
//           justifyContent="center"
//         >
//           <StatBox
//             title="Status"
//             subtitle="Connected"
//             icon={
//               <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M4 10V14C4 15.1027 3.10267 16 2 16C0.897333 16 0 15.1027 0 14V10C0 8.89733 0.897333 8 2 8C3.10267 8 4 8.89733 4 10ZM16 2V14C16 15.1027 15.1027 16 14 16C12.8973 16 12 15.1027 12 14V2C12 0.897333 12.8973 0 14 0C15.1027 0 16 0.897333 16 2ZM15.3333 2C15.3333 1.26467 14.7353 0.666667 14 0.666667C13.2647 0.666667 12.6667 1.26467 12.6667 2V14C12.6667 14.7353 13.2647 15.3333 14 15.3333C14.7353 15.3333 15.3333 14.7353 15.3333 14V2ZM8 4C6.89733 4 6 4.89733 6 6V14C6 15.1027 6.89733 16 8 16C9.10267 16 10 15.1027 10 14V6C10 4.89733 9.10267 4 8 4Z" fill="#4CCEAC"/>
//               </svg>
//             }
//           />
//         </Box>
//         <Box
//           gridColumn="span 3"
//           backgroundColor={colors.primary[400]}
//           display="flex"
//           alignItems="center"
//           justifyContent="center"
//         >
//           <StatBox
//             title="Battery level"
//             subtitle="50%"
//             icon={
//               <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <g clip-path="url(#clip0_308_678)">
//               <path d="M18 6.0001L16.2 5.8501V5.2501C16.2 4.0096 15.4905 3.6001 14.25 3.6001H0.450012V14.4001H14.25C15.4905 14.4001 16.1226 13.9906 16.1226 12.7501L16.2 12.1501L18 12.0001V6.0001ZM15 12.7501C15 13.1633 14.6633 13.5001 14.25 13.5001H1.50001V4.5001H14.25C14.6633 4.5001 15 4.83685 15 5.2501V12.7501ZM3.00001 12.0001H9.00001V6.0001H3.00001V12.0001Z" fill="#4CCEAC"/>
//               </g>
//               <defs>
//               <clipPath id="clip0_308_678">
//               <rect width="18" height="18" fill="white"/>
//               </clipPath>
//               </defs>
//               </svg>
//             }
//           />
//         </Box>
//         <Box
//           gridColumn="span 3"
//           backgroundColor={colors.primary[400]}
//           display="flex"
//           alignItems="center"
//           justifyContent="center"
//         >
//           <StatBox
//             title="Date"
//             subtitle= "26/12/2023"
//             icon={
//               <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M0 0H20V20H0V0Z" fill="white" fill-opacity="0.01"/>
// <path d="M10 18.3334C14.6024 18.3334 18.3334 14.6025 18.3334 10.0001C18.3334 5.39771 14.6024 1.66675 10 1.66675C5.39765 1.66675 1.66669 5.39771 1.66669 10.0001C1.66669 14.6025 5.39765 18.3334 10 18.3334Z" stroke="#4CCEAC" stroke-width="1.2" stroke-linejoin="round"/>
// <path d="M10.0035 5L10.003 10.0037L13.5361 13.5368" stroke="#4CCEAC" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
// </svg>
           
//             }
//           />
//         </Box>
//         <Box
//           gridColumn="span 3"
//           backgroundColor={colors.primary[400]}
//           display="flex"
//           alignItems="center"
//           justifyContent="center"
//         >
//           <StatBox
//             title="Water level"
//             subtitle="17m"
//             icon={
//               <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M19.5407 16.5855C19.2718 16.8166 18.9235 16.9443 18.5602 16.9443C17.9113 16.9443 17.2741 16.5449 17.0786 16.0149C17.038 15.9061 16.9341 15.8333 16.818 15.8333C16.7019 15.8333 16.598 15.9055 16.5574 16.0149C16.3619 16.5449 15.7247 16.9443 15.0758 16.9443C14.4269 16.9443 13.7897 16.5449 13.5942 16.0149C13.513 15.7966 13.1536 15.7966 13.0731 16.0149C12.8775 16.5449 12.2403 16.9443 11.5914 16.9443C10.9426 16.9443 10.3054 16.5449 10.1098 16.0149C10.0287 15.7966 9.66922 15.7966 9.58869 16.0149C9.39315 16.5449 8.75595 16.9443 8.10702 16.9443C7.74375 16.9443 7.39542 16.8171 7.12595 16.5855C7.01042 16.486 6.83489 16.4988 6.73429 16.6155C6.63431 16.7316 6.64764 16.9071 6.76429 17.0071C7.13429 17.3249 7.61095 17.4999 8.10702 17.4999C8.79535 17.4999 9.45922 17.1699 9.84922 16.6699C10.2398 17.1699 10.9031 17.4999 11.5914 17.4999C12.2798 17.4999 12.9436 17.1699 13.3336 16.6699C13.7242 17.1699 14.3875 17.4999 15.0764 17.4999C15.7652 17.4999 16.4286 17.1699 16.8186 16.6699C17.2086 17.1699 17.8718 17.4999 18.5607 17.4999C19.0568 17.4999 19.5335 17.3249 19.9035 17.0066C20.0196 16.9066 20.0329 16.731 19.9329 16.6149C19.8335 16.4988 19.6574 16.4855 19.5407 16.5855ZM6.76322 13.6739C7.13315 13.9917 7.60982 14.1666 8.10595 14.1666C8.79429 14.1666 9.45815 13.8367 9.84815 13.3367C10.2387 13.8367 10.902 14.1666 11.5903 14.1666C12.2786 14.1666 12.9425 13.8367 13.3325 13.3367C13.723 13.8367 14.3864 14.1666 15.0752 14.1666C15.7641 14.1666 16.4274 13.8367 16.8174 13.3367C17.2074 13.8367 17.8708 14.1666 18.5596 14.1666C19.0557 14.1666 19.5324 13.9917 19.9024 13.6733C20.0185 13.5733 20.0318 13.3977 19.9318 13.2817C19.8324 13.1661 19.6568 13.1522 19.5402 13.2522C19.2713 13.4833 18.923 13.6111 18.5596 13.6111C17.9108 13.6111 17.2736 13.2117 17.078 12.6817C17.0374 12.5728 16.9336 12.5 16.8174 12.5C16.7013 12.5 16.5974 12.5722 16.5569 12.6817C16.3613 13.2117 15.7241 13.6111 15.0752 13.6111C14.4264 13.6111 13.7892 13.2117 13.5936 12.6817C13.5125 12.4633 13.1531 12.4633 13.0725 12.6817C12.877 13.2117 12.2398 13.6111 11.5909 13.6111C10.942 13.6111 10.3048 13.2117 10.1092 12.6817C10.0282 12.4633 9.66869 12.4633 9.58815 12.6817C9.39255 13.2117 8.75535 13.6111 8.10649 13.6111C7.74315 13.6111 7.39482 13.4839 7.12542 13.2522C7.00982 13.1527 6.83429 13.1655 6.73375 13.2822C6.63375 13.3983 6.64655 13.5739 6.76322 13.6739Z" fill="#4CCEAC"/>
// <path d="M1.41667 1.33325C0.635233 1.33325 0 2.14287 0 3.13881V16.8611C0 17.857 0.635233 18.6666 1.41667 18.6666H5.66667V1.33325H1.41667ZM1.41667 17.9444C0.948033 17.9444 0.566667 17.4583 0.566667 16.8611V3.13881C0.566667 2.54153 0.948033 2.05547 1.41667 2.05547H5.1V4.22214H2.83333V4.94437H5.1V7.83325H2.83333V8.55545H5.1V11.4444H2.83333V12.1666H5.1V15.0555H2.83333V15.7777H5.1V17.9444H1.41667Z" fill="#4CCEAC"/>
// <path d="M8.83165 3.16844C8.74051 3.07732 8.59278 3.07732 8.50165 3.16844L7.01671 4.65336C6.92558 4.74448 6.92558 4.89222 7.01671 4.98334C7.10785 5.07447 7.25558 5.07447 7.34671 4.98334L8.66665 3.66341L9.98658 4.98334C10.0777 5.07447 10.2254 5.07447 10.3166 4.98334C10.4077 4.89222 10.4077 4.74448 10.3166 4.65336L8.83165 3.16844ZM8.89998 10.0001V3.33343H8.43331V10.0001H8.89998Z" fill="#4CCEAC"/>
// <path d="M13.1683 10.1649C13.2595 10.2561 13.4072 10.2561 13.4983 10.1649L14.9833 8.67999C15.0744 8.58885 15.0744 8.44112 14.9833 8.34999C14.8921 8.25885 14.7444 8.25885 14.6533 8.34999L13.3333 9.66992L12.0134 8.34999C11.9223 8.25885 11.7745 8.25885 11.6834 8.34999C11.5923 8.44112 11.5923 8.58885 11.6834 8.67999L13.1683 10.1649ZM13.1 3.33325V9.99992H13.5667V3.33325H13.1Z" fill="#4CCEAC"/>
// </svg>
//             }
//           />
//         </Box>

//         {/* ROW 2 */}
//         <Box
//           gridColumn="span 8"
//           gridRow="span 2"
//           backgroundColor={colors.primary[400]}
//         >
//           <Box
//             mt="25px"
//             p="0 30px"
//             display="flex "
//             justifyContent="space-between"
//             alignItems="center"
//           >
//             <Box>
//               <Typography
//                 variant="h5"
//                 fontWeight="600"
//                 color={colors.grey[100]}
//               >
//                 Jembatan Cihuni
//               </Typography>
//               <Typography
//                 variant="h3"
//                 fontWeight="bold"
//                 display="flex"
//                 alignItems="center"
//                 color={colors.greenAccent[500]}
//               >
//                 Water Level Statistic
//               </Typography>
//             </Box>
//             {/* <Box>
//               <IconButton>
//                 <DownloadOutlinedIcon
//                   sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
//                 />
//               </IconButton>
//             </Box> */}
//           </Box>
//           <Box height="250px" m="-20px 0 0 0">
//             <LineChart isDashboard={true} />
//           </Box>
//         </Box>
//         <Box
//           gridColumn="span 4"
//           gridRow="span 2"
//           backgroundColor={colors.primary[400]}
//           overflow="auto"
//         >
//           <Box
//             display="flex"
//             justifyContent="space-between"
//             alignItems="center"
//             borderBottom={`4px solid ${colors.primary[500]}`}
//             colors={colors.grey[100]}
//             p="15px"
//           >
//             <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
//               Recent
//             </Typography>
//           </Box>
//           {waterLevels.map((water, i) => (
//           <Box
//             key={`${water.txId}-${i}`}
//             display="flex"
//             justifyContent="space-between"
//             alignItems="center"
//             borderBottom={`4px solid ${colors.primary[500]}`}
//             p="15px"
//           >
//             <Box color={colors.grey[100]}>{water.times}</Box>
//             <Box
//               backgroundColor={colors.greenAccent[500]}
//               p="5px 10px"
//               borderRadius="4px"
//             >
//               {water.level}
//               </Box>
//             </Box>
//           ))}
//         </Box>

//         {/* ROW 3 */}
//         {/* <Box
//           gridColumn="span 4"
//           gridRow="span 2"
//           backgroundColor={colors.primary[400]}
//           p="30px"
//         >
//           <Typography variant="h5" fontWeight="600">
//             Campaign
//           </Typography>
//           <Box
//             display="flex"
//             flexDirection="column"
//             alignItems="center"
//             mt="25px"
//           >
//             <ProgressCircle size="125" />
//             <Typography
//               variant="h5"
//               color={colors.greenAccent[500]}
//               sx={{ mt: "15px" }}
//             >
//               $48,352 revenue generated
//             </Typography>
//             <Typography>Includes extra misc expenditures and costs</Typography>
//           </Box>
//         </Box> */}
//         {/* <Box
//           gridColumn="span 4"
//           gridRow="span 2"
//           backgroundColor={colors.primary[400]}
//         >
//           <Typography
//             variant="h5"
//             fontWeight="600"
//             sx={{ padding: "30px 30px 0 30px" }}
//           >
//             Sales Quantity
//           </Typography>
//           <Box height="250px" mt="-20px">
//             <BarChart isDashboard={true} />
//           </Box>
//         </Box> */}
//         {/* <Box
//           gridColumn="span 4"
//           gridRow="span 2"
//           backgroundColor={colors.primary[400]}
//           padding="30px"
//         >
//           <Typography
//             variant="h5"
//             fontWeight="600"
//             sx={{ marginBottom: "15px" }}
//           >
//             Geography Based Traffic
//           </Typography>
//           <Box height="200px">
//             <GeographyChart isDashboard={true} />
//           </Box>
//         </Box> */}
//       </Box>
//     </Box>
//   );
// };

// export default Dashboard;
