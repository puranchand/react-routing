import React from 'react';
import { Link } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton';



import Home from './Home.js'
import Contact from './Contact.js'
import About from './About'

const style = {
  margin: 12,
};


class App extends React.Component {

   

   render() {
      return (
         <div style={{background:'#ff8db4'}}>
            
            
            <ul>
            <Link to='home'> <RaisedButton label="Home" primary={true} style={style} /></Link>
            <Link to='about'><RaisedButton label="About" secondary={true} style={style} /></Link>
            <Link to='contact'><RaisedButton label="Contact" style={style} /></Link>
            
            
            </ul>
            {this.props.children}
			</div>
      )
   }
}

export default App;