import React from 'react';
import {styled, Typography} from "@mui/material";
import {Box, Container} from "@mui/system";
import houseCard from "../../assets/healthy-spices-collection-colorful.jpg";

const Ambience=()=>{
    
    const CustomBox=styled(Box)(({theme})=>({
        display:"flex",
        gap:theme.spacing(10),
        alignItems:"center",
        [theme.breakpoints.down("md")]:{
            flexDirection:"column",
            textAlign:"center",
        },
    }));

    const ImgContainer= styled(Box)(({theme})=>({
        width:"100%",
        [theme.breakpoints.down("md")]:{
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
        },
    }));

    const LargeText = styled(Typography)(({theme})=>({
        fontSize:"64px",
        color:"#000",
        fontWeight:"700",
        [theme.breakpoints.down("md")]:{
            fontSize:"32px",
        },

    }));

    const SmallText = styled(Typography)(({theme})=>({
        fontSize:"18px",
        color:"#788087",
        fontWeight:"500",
        [theme.breakpoints.down("md")]:{
            fontSize:"14px",
        },
    }));

    const TextFlexbox = styled(Box)(({theme})=>({
        marginTop:theme.spacing(7),
        display:"flex",
        justifyContent:"space-between",
        padding:theme.spacing(0, 5, 0, 5),
        [theme.breakpoints.down("sm")]:{
            flexDirection:"column",
            gap:theme.spacing(5),
        },
    }));

    const Divider=styled("div")(({theme})=>({
        width:"23%",
        height:"5px",
        backgroundColor:"#000339",
        [theme.breakpoints.down("md")]:{
            marginLeft:"auto",
            marginRight:"auto",
        },
    }));

  return (
    <Box sx={{py:10}}>
        <Container>

            <CustomBox>
                <ImgContainer>
                 <img src={houseCard} alt="house" style={{maxWidth:"100%"}} />
                </ImgContainer>

                <Box>
                    <Divider/>
                        <Typography sx={{fontSize:"35px", color:"#000339", fontWeight:"700",my:3,}}>
                             You've found an ambience you love.
                        </Typography>

                        <Typography sx={{fontSize:"16px",color:"#5A6473",lineHeight:"27px",}}>
                        "Whether I am cooking a continental dish or a French recipe or occasionally an Indian recipe, I resort to the freshest spices I can get and I trust Flavour Spices to deliver spices to me directly from the farmlands of Kerala. Nothing is more fresh, tangy and tasty"-Adele Dunlap,UAE.
                        </Typography>
                </Box>
            </CustomBox>

            <TextFlexbox>
                 <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",}}>
                    <LargeText>25+</LargeText>
                    <SmallText>Spices</SmallText>
                 </Box>
                 <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",}}>
                    <LargeText>30+</LargeText>
                    <SmallText>Trusted Clients</SmallText>
                 </Box>
                 <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",}}>
                    <LargeText>35+</LargeText>
                    <SmallText>Delivery Per Day</SmallText>
                 </Box>
            </TextFlexbox>

        </Container>
    </Box>
  )
}

export default Ambience
