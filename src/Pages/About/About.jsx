import React from 'react';
import {Box,styled, Typography} from "@mui/material";

const About=()=> {

    const CustomBox = styled(Box)(({theme})=>({
       width:"60%",
       [theme.breakpoints.down("md")]:{
        width:"85%",
       },
    }));
    
  return (
    <Box
    sx={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        padding:"40px",
        mt:"65px",
        mb:"100px"
    }}>

        <div
        style={{
            width:"5%",
            height:"5px",
            backgroundColor:"#000339",
            margin:"0 auto",
        }}>
            
        </div>

        <Typography
         variant="h3"
         sx={{fontSize:"35px", fontWeight:"bold", color:"#000339", my:3}}
        >
         About Us
        </Typography>

        <CustomBox>
            <Typography
            variant="body2"
            sx={{
                fontSize:"16px",
                fontWeight:"500",
                color:"#5A6473",
                textAlign:"center",
            }}>
                Flavour Spices is a premier online spice products e-commerce site offering the best spices from India and primarily from Kerala.
                From our alluring farms comes our freshest spices  graded, dried, preserved, and packed to perfection  and send to you across India and around the world. So that you can enjoy the same goodness in your cooking and transform the food like magic into delicious and aromatic dishes loved by all.
                The 'Flavour Spices' e-commerce site is promoted by Spice Country Group of Resorts. The group offers high-quality yet reasonably priced luxurious hospitality at the scenic and thriving locations in Kerala and primarily in Munnar. The intention is to offer the highest standards of hospitality and service that encourage customers to become repeat customers at our prime hotels and resorts. The group has strategic partnerships with new-built and re-established resort brands and has a proven business model that ensures better bookings and positive revenues.
            </Typography>
        </CustomBox>
    </Box>
  )
}

export default About
