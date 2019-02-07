import React, { Component } from 'react';
import Navigation from './navigation/Navigation';
import RouteMain from './routers/RouteMain';



class App extends Component{

    render(){
        return(
            <div>
                <Navigation />
                <RouteMain />
            </div>
        )
    }
}



export default App;

