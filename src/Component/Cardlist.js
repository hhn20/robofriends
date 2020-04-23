import React from 'react';
import Card from './Card'

const Cardlist = ({robots}) =>
{
return(
robots.map((a,i)=>{
  return(
    <Card key={a.id} id={a.id} name={a.name} />
  );
})) 
}  

export default Cardlist;