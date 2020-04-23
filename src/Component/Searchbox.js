import React from 'react';

const Searchbox = ({change}) =>
{
return(
<div>
<input type="searchbox" 
placeholder="search"
onChange={change}/>
</div>
);


}

export default Searchbox;