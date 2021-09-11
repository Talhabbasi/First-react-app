import { Component } from 'react';
import './App.css';
import { Search } from './components/Search-bar/Search';
import { CardList } from './components/card-list/Card-list';

class App extends Component {
  constructor(){
    super()
    this.state={
      monster:[],
      search:''
       }
  }
  
  SeachMEthod=(ele)=>{
    (this.setState({search:ele.target.value}))}
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data =>this.setState({monster:data}))
  }
  render(){
    const{search,monster}=this.state

const searchItem=monster.filter((ele)=>(
ele.name.toLowerCase().includes(search.toLowerCase())
))
  return (
    <div className="App">
    
   <Search placeholder="Search Monster" onChange={this.SeachMEthod}/>
     {
       <CardList monster={searchItem}  /> 
        
     }
         </div>
  );
}
}



export default App;
