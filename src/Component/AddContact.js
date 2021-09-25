import React from "react";


class AddContact  extends React.Component {
  state = {
      name:"",
      class:"",
  };
    add = (e) => {
        e.preventDefault()

        if (this.state.name==="" || this.state.email===""){
            alert("All the field must filled acurately !")
            return;
        };
        this.props.addContactHandler(this.state);
        this.setState({name:"" ,email:""});
        console.log(this.state);
    }
  
  
  
  
    render(){

    return(
      <div className="ui main">
          <h2>Add Users</h2>
          <form className="ui form"  onSubmit={this.add}>
              <div className="field" >
                  <label>Name</label>
                  <input  required="required" type="text" name="name" placeholder="name" 
                   value={this.state.name}
                  onChange={(e) => this.setState({name: e.target.value}) }/>
              </div>
              <div className="field" >
                  <label>Email</label>
                  <input required="required" type="email" name="email" placeholder="Email"
                   value={this.state.email}
                   onChange={(e) => this.setState({email: e.target.value}) }/>
              </div>
              <button type="add" className=" ui button blue">Add</button>
          </form> 
      </div>
    );
  }




}


export default AddContact;