import React, { Component} from 'react';
import { getModules, createModule } from '../api/modules';
import EditModule from './EditModule'
import Module from './Module'

class Modules extends Component {
  constructor(props) {

    super(props);
    
      this.state = {
        
      title:'',
      modules: [],
                  };
      
   
      
}



  componentDidMount() {
    getModules().then((modules) => {
      this.setState({ modules: modules });
    });
  }

  handlingChange = e => {
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

  handleSelect = (module) =>{
    this.setState({ selectedModule: module})


  }
  handeleSave = (modules) =>{
    //this.setState({ selectedModule: module})


  }
  handleCancel = () =>{
    this.setState({ selectedModule: null})


  }
  hanlechange = (e) =>{
    let selectedModule = this.state.selectedModule;
    selectedModule[e.target.name]= e.target.value;
    this.setState({ selectedModule: selectedModule});


  }

  render() {
    const { modules } = this.state;


      return (
          <div>
              <fieldset className= 'container'>
              <legend className='' >modules :</legend>
              <div className = 'container2'>
            
            <input 
                type='text'
                placeholder="Enter new module" 
                onChange={this.handlingChange}
                value = {this.state.title}
            />
            
          
            <button className="btn"
                
                onClick ={this.addNewModule} 
            >Add module </button>
  
              </div>
            
            <ul 
                
                >
                
                
                {modules.map(module =>{ 
                  return < Module 
                         key={module._id}
                         module={module} 
                         onSelect = {this.handleSelect} 
                         selectedModule ={this.selectedModule}  />;
               
              })}
                
            </ul>
            
             <div className = 'editarea'> 
      
              <  EditModule  
                //addingModule={this.state.addingModule}
                selectedModule={this.state.selectedModule}
                onChange = {this.hanlechange} 
                onSave = { this.handeleSave}
                onCancel = {this.handleCancel}
              />

             </div>
             </fieldset>
          
          </div>

        
      )
    
      
    }
  
}

export default Modules;