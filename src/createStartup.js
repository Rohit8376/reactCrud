import React, { Component } from 'react'
import axios from "axios";
import App from './App'

export default class createStartup extends Component {

      state={
          name : '',country:'',isCreated:false
      }


      submitform = (e)=>{  
            axios.post("http://localhost:4000/",{name: this.state.name,country : this.state.country});
                    this.setState({isCreated:true})
        }
      componentDidMount(){
          this.setState({name : '',country:'',isCreated:false})
      }


    render() {
        if(this.state.isCreated){
            return <App/>
        }else{
            return (
                <>
                    <div style={{textAlign:'center',  height:'100px', backgroundColor:'blueviolet' ,color:'white'}}>
                    <h3 style={{marginTop:'0px', paddingTop:'20px'}}>Create New Startup</h3>
                    </div>
                    <div className="container"><br/>
    
                    <form onSubmit={(e) => this.submitform(e)}>
                        <div className="row">
                            <div className="col-2  offset-3"> name : </div>
                            <div className="col-3" >
                                        <input type='text' className='form-control' onChange={e=>{this.setState({name : e.target.value})}} required/>
                            </div>
                        </div><br></br>
            
                        <div className="row">
                            <div className="col-2  offset-3"> name : </div>
                            <div className="col-3" >
                                        <input type='text' className='form-control' onChange={e=>{this.setState({country : e.target.value})}} required/><br/>
                            </div>
                        </div>
    
                        <div className="row">
                            <div className="col-2  offset-3"> name : </div>
                            <div className="col-3" >
                            <input type='submit' value='save' className=" btn form-control" style={{backgroundColor:'blueviolet',color:'white'}}/>               
                            </div>
                        </div>
                    </form>                     
            
                    </div>
                </>
        
            )

        }
       
    }
}


