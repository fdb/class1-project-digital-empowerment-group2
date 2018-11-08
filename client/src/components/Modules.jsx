import React, { Component} from 'react';
import { getModules, createModule } from '../api/modules';
//import ClickToEdit from "react-inline-editing";



class Modules extends Component {
  constructor() {

    super();
    
      this.state = {
        
      title:'',
      modules: [],
      // id: '',
      // filter: 'all',

    
  };
}

  componentDidMount() {
    getModules().then((modules) => {
      this.setState({ modules: modules });
    });


  }

  
  handleChange = e => {
    this.setState({
      title: e.target.value
    });
};

 


  addNewModule = (e) => {
    e.preventDefault()
    createModule(this.state.title)
    .then(newModule => {
      this.setState({
        modules: this.state.modules.concat(newModule),
        title: ""
      });
    });
    
   
}



   
  render() {
    const { modules } = this.state;


      return (
        
        <div className='container'>
        <div className = ' pathcontainer' >
             <h2>  Title of the active path</h2>       
        </div>
        <fieldset>
        <legend className='' >Module :</legend>
          
            <div className='container2'>
            
                      <input 
                          type='text'
                          placeholder="Enter new module" 
                          onChange={this.handleChange}
                          value = {this.state.title}
                      />
                      
                    
                      <button className="btn"
                          
                          onClick ={this.addNewModule} 
                      >Add module </button>
            </div>
                             
          <div 
            className="modulesliste">
            {modules.map((module) => <div className= 'module' key={module._id}
          >
          
            {module.title} <br/>
            {
              <div class="">

              <button       
                        className="remove-btn"
                        onClick={()=> {
                          this.setState(state => ({modules: state.modules.filter(mod => module._id !== mod._id)
                          }));
                        }}
                      >delete
              </button>
              <button className="Edit-btn"> Edit </button>


              </div> }
          
            </div>)}
            </div>
        </fieldset>
        </div>
      )
   
  }
  }


export default Modules;













