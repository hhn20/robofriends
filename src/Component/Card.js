import React from 'react';
import 'tachyons';
const Card = ({id,name}) =>
{
var a=`https://robohash.org/${id}?size=200x200`;
return(
<div className='bg-light-red tc dib br3 pa3 ma2 grow bw2 shadow-5'>
<img alt="robots" src={a}/>
<h4>{id}</h4>
<p>{name}</p>
</div>
);


}

export default Card;