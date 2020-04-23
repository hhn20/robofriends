import React, { Component } from 'react';
import Searchbox from '../Component/Searchbox'
import Cardlist from '../Component/Cardlist';
import 'tachyons';
import Scroll from '../Component/Scroll';
class App extends Component
{

    constructor() {
        super()
        this.state = {
          robots: [],
          searchfield: ''
        }
      }
    
    componentDidMount()
    {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())  
        .then(users => this.setState({robots:users}))




    }

onsearchange = (event) =>
{
this.setState({searchfield:event.target.value});
console.log(this.state.searchfield);
}

render(){  

const filtered=this.state.robots.filter(robot =>{
    return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })  

return(
<div className="tc">
<h1>ROBOFRIENDS</h1>
<Searchbox change={this.onsearchange} />
<Scroll>
<Cardlist robots={filtered} />
</Scroll>
</div>
)
} 
}

export default App;