import { Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

const FloodList = ({location, date, time, waterlevel}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box display="flex" flexDirection="column" justifyContent="start" alignItems="right"
        sx={{
            bgcolor: colors.primary[400],
            boxShadow: 1,
            borderRadius: 2,
            p: '15px',
        }} >
        <Typography
        variant="h4"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ m: "0 0 5px 0"}}
        >
        {location}
        </Typography>

        <Typography>
            <Box display="flex" flexDirection="row" alignItems='center' gap='15px'>
                <p>Date: </p>
                {date}
            </Box>
        </Typography>

       <Typography>
        <Box display='flex' lexDirection="row" alignItems='center' gap='15px'>
            <p>Time: </p>
            {time}
        </Box>
       </Typography>
       
       <Typography>
        <Box display='flex' flexDirection='column' gap='2px'>
            <p>Water level: </p>
            <Box 
            sx={{
                bgcolor: '#E59D3D',
                borderRadius: 2,
                p: '2px',
                maxWidth: '50px',
                display: 'flex',
                justifyContent: 'center',
                fontWeight: 'bold',
                fontSize: '16px'
            }}
            >
            {waterlevel}
            </Box>
        </Box>
       </Typography>
        </Box>
    )
}

export default FloodList;