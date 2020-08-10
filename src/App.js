import React from 'react';
import './App.css'
import NavBar from './Components/NavBar/NavBar';
import Drawer from './Components/Drawer/Drawer';
import Backdrop from './Components/Backdrop/Backdrop';
import Home from './Components/Home/Home';


class App extends React.Component {
  state = {
    drawerOpen:false
  }

  drawerOpenHndler = () =>{
    this.setState(prevSte =>{
      return {drawerOpen: !prevSte.drawerOpen}
    })
  }

  backdropClickHandler = () =>{
    this.setState({drawerOpen:false})
  }
  render(){
    let backdrop
    if (this.state.drawerOpen) {
       backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    
   
    return (
      
      <div>
      {backdrop}
      <NavBar drawerHndleClick = {this.drawerOpenHndler}/>
      <Drawer show ={this.state.drawerOpen} />
      <Home />
      </div>
    );
  }
  
}

export default App;
