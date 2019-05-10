import React from 'react';
//import components
import Input from './components/Input';
import DropDown from './components/DropDown';
import TextBox from './components/TextBox';
import CheckBox from './components/CheckBox';
import Button from './components/Button';
//helpers 
import { validator } from './helpers/validator'

class AssistanceReqFormContainer extends React.Component {
    state ={
        contact:{
            first_name:'',
            last_name:'',
            email:''
        },
        service_type:'',
        serviceTypesArr:[],
        description:'',
        isTermsOfServiceChecked:false,
        errs:[]
    }
    componentDidMount(){
        fetch('http://localhost:49567/api/service-types')
        .then(res => res.json())
        .then((serviceTypesArr)=>{
            this.setState({serviceTypesArr: serviceTypesArr.data})
        })
    }
    handleInputChange = (event) => {
        this.setState({
            contact: { ...this.state.contact, [event.target.name]: event.target.value }
        })
    }
    handleSelect = (event) => {
        this.setState({ service_type: event.target.value  })
    }

    handleTextBoxChange = (event) => {
      this.setState({  description: event.target.value})    
    }
    handleCheckBoxChange = (event) => {
      this.setState({
        [event.target.name]: event.target.checked
      })
    }
    handleSubmitNewAssistanceRequestForm = (event) => {
        event.preventDefault();
        const { first_name, last_name, email } = this.state.contact
        const { service_type, isTermsOfServiceChecked } = this.state
        //Validator validates user input and return an [] of errs
        let userErrs = validator(first_name, last_name, email, service_type, isTermsOfServiceChecked)
        if(userErrs.length > 0){
            this.setState({
                errs: userErrs
            })
            return;
        }
        fetch('http://localhost:49567/api/assistance-requests', {
            method:'POST',
            cache: 'no-cache',
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body:JSON.stringify({
                assistance_request:{
                    contact:this.state.contact,
                    service_type:this.state.service_type,
                    description:this.state.description
                }
            }) 
        })
        .then(res => res.json())
        .then((data)=>{
            console.log(data)
        })
    }
    render(){
        return(
            <div className="container">
                <div> I am a div of errors the user made I may have an error component</div>
                <form className="form-horizontal" onSubmit={this.handleSubmitNewAssistanceRequestForm}>
                <h1 className="assist-req-form">New Assistance Request </h1>
                <hr />
                { /*Input for contact first_name */ }
                <Input
                    type={ 'text' }
                    required={true}
                    name={ "first_name" }
                    value={ this.state.contact.first_name }
                    placeholder={ "First Name" }
                    handleInputChange={this.handleInputChange}
                />
                <span className="required-label">required </span>
                { /*Input for contact last_name */}
                <Input
                    type={'text'}
                    required={true}
                    name={"last_name"}
                    value={this.state.contact.last_name}
                    placeholder={"Last Name"}
                    handleInputChange={this.handleInputChange}
                />
                <span className="required-label">required </span>
                { /*Input for contact email */}
                <Input
                    type={ 'email' }
                    required={true}
                    name={"email"}
                    value={this.state.contact.email}
                    placeholder={"Email Address"}
                    handleInputChange={this.handleInputChange}
                />
                <span className="required-label">required </span>
                {/* Dropdown select options for service Types */}
                <DropDown 
                    name={'service_type'}
                    options={this.state.serviceTypesArr} 
                    value={this.state.service_type}
                    placeholder={'Select Service Type'}
                    handleSelect={this.handleSelect}
                /> 
                <span className="required-label">required </span>
                {/* TextBox for description textarea */}
                <TextBox
                    rows={3}
                    name={'description'}
                    value={this.state.description}
                    handleTextBoxChange={this.handleTextBoxChange}
                />
                {/* CheckBox for is term of service agreed to and checked */}
                <CheckBox
                    name={'isTermsOfServiceChecked'}
                    type={'checkbox'}
                    checked={this.state.isTermsOfServiceChecked}
                    handleCheckBoxChange={this.handleCheckBoxChange} 
                > {" "}
                <span>I hereby accept the terms of service for THE NETWORK and the Privacy Policy </span>
                </CheckBox>
                {/* Submit Button to get Assistance */}
                <Button
                    id={"submit-button"}
                    styles={"btn btn-primary"}
                    type={"submit"}
                    value={"Get Assistance"}
                    disabled={this.state.disabled}
                />
              </form>
            </div>
        );
    }
}
export default AssistanceReqFormContainer;