import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import  image  from "../assets/logo.jpg";
import { Dashboard } from '@mui/icons-material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Stack } from '@mui/material';
import "../styles/About.css"

export default function About() {
  return (
    <Card sx={{ minWidth: 275 }} mt={4} className='about' >
      <CardContent width="40">
        <Typography  sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <img   src={image} width="80" style={{ display: { xs: "none", md: "flex", }, mr: 3 }} />
        </Typography>
        <Typography variant="h4" component="div" sx={{ mb: 1.5, mt:4,display:"flex" }}>
          CLARUSWAY
        </Typography>
        <Typography  variant="h5" sx={{ mb: 1.5, mt:4 }} color="error" >
        Full Stack Team
        </Typography>
      
      </CardContent>
    
       
      <Stack  alignItems="center" spacing={2}>       
        
        
        <LinkedInIcon/>
      <InstagramIcon/>
      <TwitterIcon/>
      <YouTubeIcon/>
      <GitHubIcon/>
     </Stack>


     
    </Card>
  );
}