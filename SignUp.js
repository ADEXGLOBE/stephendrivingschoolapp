import React from "react";
import Homepage from "./Images/Homepage.jpg";
import {MDBInputGroup,
    MDBInputGroupText,
    MDBInputGroupElement,
    MDBDropdown,
    MDBDropdownLink,
    MDBDropdownItem,
    MDBDropdownMenu,
    MDBDropdownToggle,
    MDBDropdownDivider, } from 
    'mdb-react-ui-kit';


function SignUp() {

    return (
        // <div>
            <div>
            {/* <div style={{backgroundColor: '#1F618D'}}>
             This is my home page
        </div>  */}

        <section class="vh-100">
            <div class="container-fluid h-custom">
                <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-md-9 col-lg-6 col-xl-5">
                                <img src={Homepage} 
                                class="img-fluid"
                                alt="Sample image" />
                        </div>
                <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                    <form>
                            <div 
                            class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start"
                            style={{marginTop: 75}}
                            >
                                
                                <p 
                                class="lead fw-normal mb-0 me-3"
                                style={{marginRight: 30}}
                                >Register with</p>
                                <button type="button" class="btn btn-primary btn-floating mx-1">
                                <i class="fab fa-facebook-f"></i>
                                </button>

                                <button type="button" class="btn btn-primary btn-floating mx-1">
                                <i class="fab fa-twitter"></i>
                                </button>

                                <button type="button" class="btn btn-primary btn-floating mx-1">
                                <i class="fab fa-linkedin-in"></i>
                                </button>
                            </div>

                    <div class="divider d-flex align-items-center my-4">
                        <p class="text-center fw-bold mx-3 mb-0">Or</p>
                    </div>

                    {/* <!-- Email input --> */}
                    <div class="form-outline mb-4">
                        <input type="email" id="form3Example3" class="form-control form-control-lg"
                        placeholder="Enter your Full name" />
                        <label class="form-label" for="form3Example3">Full name</label>
                    </div>

                    <div class="form-outline mb-4">
                        <input type="email" id="form3Example3" class="form-control form-control-lg"
                        placeholder="Enter your Date of Birth" />
                        <label class="form-label" for="form3Example3">Date of Birth</label>
                    </div>

                    <div class="form-outline mb-4">
                        <input type="email" id="form3Example3" class="form-control form-control-lg"
                        placeholder="Enter your Phone Number" />
                        <label class="form-label" for="form3Example3">Phone Number</label>
                    </div>
                    <div class="form-outline mb-4">
                        <input type="email" id="form3Example3" class="form-control form-control-lg"
                        placeholder="Enter a valid email address" />
                        <label class="form-label" for="form3Example3">Email address</label>
                    </div>

                    {/* <!-- Password input --> */}
                    <div class="form-outline mb-3">
                        <input type="password" id="form3Example4" class="form-control form-control-lg"
                        placeholder="Enter password" />
                        <label class="form-label" for="form3Example4">Password</label>
                    </div>

                    <div class="form-outline mb-3">
                        <input type="password" id="form3Example4" class="form-control form-control-lg"
                        placeholder="Re-enter password" />
                        <label class="form-label" for="form3Example4">Confirm Password</label>
                    </div>

                    {/* <div class="form-outline mb-3">
                        <input 
                        type="password" 
                        id="form3Example4" 
                        class="form-control form-control-lg"
                        placeholder="Select a preferred Training programme" />
                        <label class="form-label" for="form3Example4">Driving Training programme</label>
                    </div> */}
                    <div 
                    class="dropdown"
                    style=
                    {{width: 500}}>
         {/* <MDBInputGroup
          className="mb-3">
            <MDBDropdown>
                    <MDBDropdownToggle 
                    color="primary"
                    size="md"
                    // tag= "a" 
                    className="m-0 px-3 z-depth-0">
                           Select a preferred Training programme
                                {/* <MDBIcon icon="caret-down" className="ml-1" /> */}
                    {/* </MDBDropdownToggle> */} 
                                                                    {/* <MDBDropdownMenu color="white">
                                                                                <MDBDropdownItem>
                                                                                <MDBDropdownLink 
                                                                                tag="button"
                                                                                type="button">
                                                                                    Normal Car Driving License Training
                                                                                    </MDBDropdownLink>
                                                                                </MDBDropdownItem>
                                                                        <MDBDropdownItem divider />
                                                                                <MDBDropdownItem>
                                                                                <MDBDropdownLink 
                                                                                tag="button"
                                                                                type="button">
                                                                                    Bus Driving License Training</MDBDropdownLink>
                                                                                </MDBDropdownItem>
                                                                        <MDBDropdownItem divider />
                                                                                <MDBDropdownItem>
                                                                                <MDBDropdownLink 
                                                                                tag="button"
                                                                                type="button">
                                                                                    Truck Driving License Training</MDBDropdownLink>
                                                                                </MDBDropdownItem>
                                                                        <MDBDropdownItem divider />
                                                                                <MDBDropdownItem>
                                                                                <MDBDropdownLink 
                                                                                tag="button"
                                                                                type="button">
                                                                                    Forklift Driving License Training</MDBDropdownLink>
                                                                                </MDBDropdownItem>
                                                                </MDBDropdownMenu> */}
        {/* </MDBDropdown>
        <MDBInputGroupElement type="text" />
          </MDBInputGroup> */}


        <select  
        color="primary"
        size="md"
        className="m-0 px-3 z-depth-0">
          <option>Select a preferred Training programme</option>
          <option value="1">Normal Car Driving License Training</option>
          <option value="2">Bus Driving License Training</option>
          <option value="3"> Truck Driving License Training</option>
          <option value="4"> Forklift Driving License Trainin</option>
        </select>
      
          
                    </div>
{/* <div>
      <MDBContainer>
            <MDBInputGroup
            containerClassName="mb-3"
            prepend="Options"
            inputs={
                <select className="browser-default custom-select">
                <option value="0">Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                </select>
            }
            />
        </MDBContainer>
</div> */}
                    {/* <div class="d-flex justify-content-between align-items-center"> */}
                        {/* <!-- Checkbox --> */}
                        {/* <div class="form-check mb-0">
                        <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                        <label class="form-check-label" for="form2Example3">
                            Remember me
                        </label>
                        </div> */}
                        {/* <a href="#!" class="text-body">Forgot password?</a>
                    </div> */}

                    <div class="text-center text-lg-start mt-4 pt-2">
                        <button type="button" class="btn btn-primary btn-lg"
                        style={{
                            paddingLeft: 2.5,
                            paddingRight: 2.5,
                            }}>Register</button>
                        {/* <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                            class="link-danger">Register</a></p> */}
                    </div>

                    </form>
                </div>
                </div>
            </div>
            </section>
        </div>
    )
}

export default SignUp;