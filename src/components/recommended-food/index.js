import React, { Component } from 'react'
import foods from './../../data/foods.json'

const foodlist= JSON.parse(JSON.stringify(foods));

function compare( a, b ) {
    if ( a.ironamount < b.ironamount ){
      return 1;
    }
    else
    return -1;
  }

  var recomm = []
 let i=0;
  foodlist.forEach(element => {
    if(element.nutrients.Iron!== undefined && i<10)
   {
    i++
    recomm.push({Name:element.name , ironamount :element.nutrients.Iron} )
   } 

  });


  
  recomm.sort( compare )

 
  const renderList = recomm.map((item, index)=>
  <div key = {index}> {item.Name}</div>);
   


  

export default class RecommendedFood extends Component{


    render()
    {

        return(
            <div>
            <div className= "recommendedFood">
  <h2>Top ten recommended from your menu </h2>
  <div className="macroNutrient">{renderList}</div>
  </div> 
            </div>
        )
    }
}