import React from 'react';
import { Box } from '@mui/material'
import './Dashboard.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import {Badge} from '@mui/material';

const Dashboard = () => (
  <Box className="dashboard-container">
      <Box className='banner-body'>
          <Box>
            <h2 className='dashboard-heading'>Welcome to Our ERP Dashboard!</h2>
            <p className='description'>Explore our extensive product variety, ranging from electronics to fashion and beyond, all available with free nationwide delivery. Take advantage of our zero-cost EMI option to make purchases more accessible.  Dive into our dashboard now to discover the latest statistics, including the total number of products available and the ongoing order count, ensuring you never miss out on our exciting offerings.</p>
            <ul className='list-container'>
              <li className='list-item'>
                <ArrowForwardIcon sx={{color:'green', fontSize:'18px'}}/>
                <p className='list-item-content'><span>Wide Product Variety:</span> Explore our extensive range of products to find exactly what you need.</p>  
              
              </li>
              <li className='list-item'>
                <ArrowForwardIcon sx={{color:'green', fontSize:'18px'}}/>
                <p className='list-item-content'><span>Free Delivery Nationwide:</span> Enjoy hassle-free delivery with zero shipping charges.</p>  
              
              </li>
              <li className='list-item'>
                <ArrowForwardIcon sx={{color:'green', fontSize:'18px'}}/>
                <p className='list-item-content'><span>Zero Cost EMI:</span> Make purchases more convenient with our zero-cost EMI option.</p>
              
              </li>
              <li className='list-item'>
                <ArrowForwardIcon sx={{color:'green', fontSize:'18px'}}/>
                <p className='list-item-content'>We prioritize quality in our products, ensuring they meet high standards.</p>
              
              </li>
              <li className='list-item'>
                <ArrowForwardIcon sx={{color:'green', fontSize:'18px'}}/>
                <p className='list-item-content'><span>Exceptional Customer Service:</span> Our dedicated support team is available 24/7 to assist you with any queries or concerns.</p>
              
              </li>
              
            </ul>
          </Box>
      </Box>
    <Box className='detail-card'>
        <Box className='box-item'>
        <Box sx={{display:'flex'}}>
                <h3>Total Products</h3>
                <Badge
                badgeContent={54700}
                color="info"
                size="large"
                />  
            </Box>
              <a href='/products'>Products Available<ArrowOutwardIcon sx={{color:'green', fontSize:'16px'}}/></a>
        </Box>
        <Box className='box-item'>
            <Box sx={{display:'flex'}}>
                <h3>Total Orders</h3>
                <Badge
                badgeContent={49}
                color="info"
                size="large"
                />  
            </Box>
           
            <a href='/orders'>Ongoing Orders<ArrowOutwardIcon sx={{color:'green', fontSize:'16px'}}/></a>
        </Box>
    </Box>
     
  </Box>
);
export default Dashboard
