import { Box,Typography } from '@mui/material'
import {styled} from '@mui/system'
import React, { useState } from 'react'
import CustomButton from '../CustomButton/CustomButton'
import logoImg from '../../assets/FLAVOUR (6) (1).png'
import { Link } from 'react-router-dom';
import  MenuIcon from "@mui/icons-material/Menu";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import  MiscellaneousServicesIcon  from '@mui/icons-material/MiscellaneousServices';
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import {useNavigate} from 'react-router-dom';

function Header() {

    const nav_titles = [
        {path:'/', display:'Home'},
        {path:'/dishes', display:'Spices'},
        {path:'/services', display:'Services'},
        {path:'/aboutus', display:'About Us'} 
    ]

    const navigate= useNavigate()


    const NavBarLinksBox = styled(Box)(({theme})=>({
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap:theme.spacing(3),
        [theme.breakpoints.down("md")]:{           // these helps for responsive feature.
            display:'none'
        }
    }))

    const NavBarLinks = styled(Typography)(({})=>({
        fontSize:"16px",
        color:'#4F5361',
        fontWeight :'bold',
       
        cursor:'pointer',
        '&:hover':{
         color:'#fff',
         textDecoration:'none'
        }
    }));


    const NavBarLogo = styled("img")(({theme})=>({
      cursor:'pointer',
      [theme.breakpoints.down("md")]:{           // these helps for responsive feature.
          display:'none'
      }
  }))


  const CustomMenu = styled(MenuIcon)(({theme})=>({
    cursor:'pointer',
    display:'none',
    marginRight:theme.spacing(2),
    [theme.breakpoints.down("md")]:{           // these helps for responsive feature.
        display:'block'
    }
}))

const [mobileMenu,setMobileMenu]= useState({left:false})

const toggleDrawer =(anchor,open)=>(event)=>{      //anchor used to decide in which side should the toggle be open. Open means of boolean value.
  if(event.type==="keydown" && (event.type==="Tab" || event.type ==="shift" )){
    return;
  }
  setMobileMenu({...mobileMenu,[anchor]:open })
}

const list = (anchor)=>(

  <Box sx={{
    width:anchor=== "top" || anchor === "bottom" ? "auto" : 250   //if anchor is from top/bottom width become auto else 250.
  }}
  role="presentation"
  onClick={toggleDrawer(anchor,false)}
  onKeyDown={toggleDrawer(anchor,false)}
  
  >
    <List>
      {
        nav_titles.map((item,index)=>(
         
          <ListItem key={index} disablePadding onClick={()=>navigate(item.path)}>
          <ListItemButton>
            <ListItemIcon>
              {
                index ===0 && <HomeIcon/>
              }
              {
                index ===1 && <FeaturedPlayListIcon/>
              }
              {
                index ===2 && <MiscellaneousServicesIcon/>
              }
              {
                index ===3 && <ContactsIcon/>
              }
            </ListItemIcon>
            <ListItemText primary ={item.display}/>
          </ListItemButton>
         </ListItem>
        ))
      }
          

    </List>

  </Box>


)

  return (
    <Box
       sx={{
        display:'flex',
        alignItems: 'center',
        justifyContent:'space-between',
        padding:'40px',
        maxWidth:'auto',
        backgroundColor:'#FED801',
        marginLeft:'0px',
        marginBottom:'-24px'
       }}   
          >
        <Box  
          sx={{
            display:'flex',
            alignItems: 'center',
            justifyContent:'center',
            gap:'2.5rem'
          }}>
            <Box 
             sx={{
              display:'flex',
              alignItems:'center',
            
             }}>

              <CustomMenu onClick={toggleDrawer("left",true)}/>      
              <Drawer
              anchor='left'
              open={mobileMenu["left"]}
              onClose={toggleDrawer("left",false)}
              >
              {list('left')}
              </Drawer>
              <NavBarLogo src={logoImg}/>

            </Box>
           <NavBarLinksBox>
            {
              nav_titles.map((item,index)=>(
              <NavBarLinks variant='body2' onClick={()=>navigate(item.path)}>
                {item.display}
              </NavBarLinks>
              ))
            } 
           </NavBarLinksBox>
        </Box>


        <Box
          sx={{
            display:'flex',
            alignItems: 'center',
            justifyContent:'center',
            gap:'1rem',
        }}>
              <NavBarLinks variant='body2'> <Link style={{textDecoration:'none'}} to='./Signin'> Sign In</Link>
              
              </NavBarLinks>
              <Link style={{textDecoration:'none'}} to='./Register'>
              <CustomButton
              backgroundColor='#0F184C'
              color='#fff'
              buttonText="Register"
              />
             </Link>
              
        </Box>
    </Box>
  )
}

export default Header
