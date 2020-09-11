import React,{ Component } from "react";
import "../css/styles.css";
import { NavLink,Link } from "react-router-dom";
import Logo from "./Logo2.jpg";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Button,
    NavbarText,Modal, ModalHeader,Col, ModalBody, ModalFooter,Form, FormGroup, Label, Input
  } from 'reactstrap';
   class Header extends Component{
     constructor(props){
         super(props);
         this.state={
             isOpen:false,
             isModalOpen:false,
             username:'',
             password:'',
             isLoggedIn:false,
         }
         this.toggle = this.toggle.bind(this);
         this.toggleModal = this.toggleModal.bind(this);
         this.hadleInputChange = this.hadleInputChange.bind(this);
         this.submitForm = this.submitForm.bind(this);
         this.logOut = this.logOut.bind(this);
     }

    toggle(){
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    toggleModal(){
      this.setState({
        isModalOpen: !this.state.isModalOpen
      })
    }
    hadleInputChange(event){
      const target = event.target;
      const value = target.type === "checkbox" ? target.checked : target.value;
      const name = target.name;
      this.setState({
          [name]:value
      });

  }
 
  logOut()
  {
    this.setState({
      isLoggedIn:!this.state.isLoggedIn
    })
  }
  submitForm(e){
    e.preventDefault()
    
    if(this.state.username === "admin" && this.state.password === "admin"){
      alert("Successful login")
      this.setState({
        username:'',
        password:'',
        isLoggedIn:true
      })
    }
    else{
        alert("Wrong username or password please try again")
        this.setState({
          username:'',
          password:''
        })
        }
        this.toggleModal();
}
     render(){   
       let message;
       if(this.state.isLoggedIn)
       {
         message = <div>
                      <h3>Welcome user</h3>
                     <Button className="ml-auto" outline onClick={this.logOut} color="secondary">Logout</Button>
                   </div>
       }     
       else{
        message = <Button className="ml-auto" outline onClick={this.toggleModal} color="secondary">Login</Button>
       }
        return(
            <div>
              <div>
              <Navbar id="navbar" dark expand="md">
              <NavbarBrand href="/">
              <img src={Logo} width="100" height="80" alt="" />
              </NavbarBrand>
        <NavbarToggler  id="toglecol" onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
        <Nav className="mr-auto mt-4" navbar>
                  
                  <NavItem>
                       <NavLink className="nav-link"  to='/home'> Home</NavLink>
                  </NavItem>
                  <NavItem>
                     <NavLink className="nav-link" to='/aboutus'> About Us</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link" to='/speaker'> Speaker</NavLink>
                  </NavItem>
                </Nav>
                
                {message}

        </Collapse>
      </Navbar>
              </div>
           
            <div>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
        <ModalHeader toggle={this.toggleModal}>Admin Login</ModalHeader>
        <ModalBody>
        <Form onSubmit={this.submitForm}>
                        <FormGroup>
                            <Label htmlFor="username" md={2}>
                                Username
                            </Label>
                            <Col md={10}>
                                <Input type="text" id="username" name="username" placeholder="Username"
                                 value={this.state.username} onChange={this.hadleInputChange} /> 
                              
                            </Col>
                        </FormGroup>

                        <FormGroup>
                            <Label htmlFor="password" md={2}>
                               Password
                            </Label>
                            <Col md={10}>
                                <Input type="password" id="password" name="password" placeholder="Password" value={this.state.password}
                                onChange={this.hadleInputChange} />
                                
                            </Col>
                        </FormGroup>

                        <ModalFooter>
                        <Link to="register" >Sign up?</Link>
                        <Button className="btn bg-primary" type="submit">
                            Submit
                        </Button>
          
                        </ModalFooter>

                       
                    </Form>
        </ModalBody>
       
      </Modal>
            </div>
   

          </div>
    );
     }

}

export default Header;