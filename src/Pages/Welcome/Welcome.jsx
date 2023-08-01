import {Box,Button,Typography} from "@mui/material";
import {styled} from '@mui/system';
import {Container} from "@mui/system";
import CustomButton from "../../Components/CustomButton/CustomButton";
import welcome from '../../assets/spicy-fotor-bg-remover-20230729102142 (1).png';
import React from 'react'

const Welcome = () =>{

    const CustomBox = styled(Box)(({theme})=>({
        display: "flex",
        justifyContent:'center',
        gap:theme.spacing(5),
        marginTop: theme.spacing(3),
        [theme.breakpoints.down('md')]:{    //helps for responsiveness when in mobile screen.
            flexDirection:"column",
            alignItems:"center",
            textAlign:"center",
        },
    }));

    const Title = styled(Typography)(({theme})=>({
      fontSize: "64px",
      color:"#fff",
      fontWeight:"bold",
      margin:theme.spacing(4,0,4,0),
      [theme.breakpoints.down("sm")]:{
        fontSize:"40px",
      },
    }));

    return(
        <Box sx={{backgroundColor:'#FED801', minHeight:"80vh"}}>
            <Container>
                <CustomBox>
                <Box sx={{flex: "1"}}>
                     <Typography
                      variant="body2"
                      sx={{
                        fontSize:"18px",
                        color:"#687690",
                        fontWeight:"500",
                        mt:10,
                        mb:4,
                      }}
                     >
                        Welcome to Flavour Spices
                     </Typography>
                     <Title variant="h1">
                     Find every fresh spices you need for a well stocked kitchen.
                     </Title>
                     <Typography variant="body2"
                      sx={{fontSize:"18px", color:"#5A6473", my:4}}
                     >
                       Our natural and organic range of spices, spice mixes and aromatic herbs are just perfect for regular home cooking and for professional cooks. Our spices will enhance, enliven and completely rejuvenate your cooking with its freshness and goodness.
                     </Typography>
                     <CustomButton
                     backgroundColor="#0F1B4C"
                     color="#fff"
                     buttonText="More About Us"
                     welcomeBtn ={true}
                     />
                </Box>

                <Box sx={{flex: "1.25"}}>
                <img
                src={welcome}
                alt="welcome"
                style={{maxWidth: "100%", marginBottom: "2rem"}}
                />
                </Box>
                </CustomBox>
            </Container>
        </Box>
    )
};

export default Welcome
