import React,{Component} from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col, Row, FormFeedback } from 'reactstrap';
class Contact extends Component{

    constructor(props){
        super(props);
        this.state = {
            firstname:"",
            lastname:"",
            email:"",
            telnum:"",
            password:"",
            agree:true,
            touched: {
                firstname:"",
                lastname:"",
                email:"",
                password:"",
                telnum:""
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }
    
    handleInputChange(event){
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]:value
        });

    }
    handleSubmit(event){
        console.log("current value = " + JSON.stringify(this.state));
        alert("current value = " + JSON.stringify(this.state));
        event.preventDefault();
    }

    validate(firstname,lastname,telnum,email,password){
        const errors ={
            firstname:"",
            lastname:"",
            email:"",
            telnum:"",
            password:""
        }
        if(this.state.touched.firstname && firstname.length<3)
            errors.firstname="First Name Should be greater than 3";
        else if(this.state.touched.firstname && firstname.length>15)
            errors.firstname="First Name should be less than 15";

        if(this.state.touched.lastname && lastname.length<3)
            errors.lastname="Last Name Should be greater than 3";
        else if(this.state.touched.lastname && lastname.length>15)
            errors.lastname="Last Name should be less than 15";
        const reg = /^\d+$/;
        if(this.state.touched.telnum && !reg.test(telnum))
            errors.telnum="should be a number"
        if(this.state.touched.email && email.split('').filter(x => x === '@'.length !== 1))
            errors.email="should be email";

        return errors;
    }
    render(){

        const errors = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email,this.state.password);
        return(

            <div className="container mt-5">
                <div className="row row-content">
                <div className="col-12 col-md-9">
                <h1>Register your self</h1>
                <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="firstname" name="firstname"
                                        placeholder="First Name"
                                        value={this.state.firstname}
                                        valid={errors.firstname === ''}
                                        invalid={errors.firstname !== ''}
                                        onBlur={this.handleBlur('firstname')}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.firstname}</FormFeedback>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="lastname" name="lastname"
                                        placeholder="Last Name"
                                        value={this.state.lastname}
                                        valid={errors.lastname === ''}
                                        invalid={errors.lastname !== ''}
                                        onBlur={this.handleBlur('lastname')}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.lastname}</FormFeedback>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Input type="tel" id="telnum" name="telnum"
                                        placeholder="Tel. Number"
                                        value={this.state.telnum}
                                        valid={errors.telnum === ''}
                                        invalid={errors.telnum !== ''}
                                        onBlur={this.handleBlur('telnum')}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.telnum}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="email" id="email" name="email"
                                        placeholder="Email"
                                        value={this.state.email}
                                        valid={errors.email === ''}
                                        invalid={errors.email !== ''}
                                        onBlur={this.handleBlur('email')}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.email}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="password" md={2}>Password</Label>
                                <Col md={10}>
                                    <Input type="text" id="password" name="password"
                                        placeholder="Password"
                                        value={this.state.password}
                                        valid={errors.password === ''}
                                        invalid={errors.password !== ''}
                                        onBlur={this.handleBlur('firstname')}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.password}</FormFeedback>
                                </Col>
                            </FormGroup>
                        <FormGroup check>
                            <Col md={{size:6,offset:2}}>
                            <Label check htmlFor="agree" >
                            <Input type="checkbox" id="agree" name="agree"  value={this.state.agree}
                                onChange={this.hadleInputChange} />
                            May we contact you?
                            </Label>
                            <Button  className="btn bg-primary ml-5" type="submit">
                            Submit
                        </Button>
                            </Col>
                            
                            
                        </FormGroup>

                       
                        
                    </Form>
                </div>
                   
                </div>
                <div className="row row-content">
                   
                  
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default Contact;