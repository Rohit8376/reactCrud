import './App.css';
import React, { Component } from 'react'
import NewStrt from './createStartup'
import axios from 'axios'

export default class App extends Component {
  state={ startups:[],  newstrt : false }
  newval = ()=> {
    
       this.setState({newstrt:true})
  }

  async componentDidMount(){
    const res = await axios.get("http://localhost:4000/");

    this.setState({startups:res.data})
    console.log(this.state.startups)

  }

  render() {
    if(this.state.newstrt){
        return <NewStrt/>
    }else{
    return (
    
      <>
          <div style={{textAlign:'center',  height:'100px', backgroundColor:'blueviolet' ,color:'white'}}>
            <h3 style={{marginTop:'0px', paddingTop:'20px'}}>Welcome to Startup Word</h3>
          </div>
          <div className="container"><br/>
              <div className="row">
                 <div className="col-sm-8 col-lg-3 col-md-4" >
                   <ol>
                        {this.state.startups.map(
                          ( val) =>(
                          <li key={val._id}>{val.name}, {val.country}</li>
                          )
                        )}     
                   </ol>

                  <button onClick={this.newval}  className="btn btn-primary form-controll">Create New Startup</button>  
                 </div>
              </div>
          </div>

       </>

    )
    }
  }
}
