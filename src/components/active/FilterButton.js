 import React from 'react'
 import { Button,Image } from 'react-bootstrap';
import { BiSliderAlt } from 'react-icons/bi';
 import './FilterButton.scss'; 
 
 const FilterButton = () => {
     return (
             <Button size="sm" className="d-none d-md-block filter_button">
               <BiSliderAlt/> FILTER RESULT
           </Button>
     )
 }
 
 export default FilterButton
 