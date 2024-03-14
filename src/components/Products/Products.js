
import React from 'react'
import {productsList} from '../../data'
import ProductCard from '../ProductCard/ProductCard'
import { Box } from '@mui/material'
import './products.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Products() {
  return (
    <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center',}}>
        <Box sx={{display:'flex', justifyContent:'space-around', alignItems:'center', flexWrap:'wrap',  background:'#f9f5ea', paddingTop:'30px', marginBottom:'30px'}}>
            {productsList.map(product => (
               <ProductCard productData={product} />
            ))
            }
        </Box>
        <h2>Learn More About Marketing</h2>
        <a href='#' style={{marginBottom:'40px', fontFamily:'Roboto',color:'blue', fontWeight:600, display:'flex', alignItems:'center', textDecoration:'none'}}>Explore all my resourses<ArrowForwardIosIcon sx={{fontSize:'12px', fontWeight:'bold'}}/></a>
    </Box>
  )
}
