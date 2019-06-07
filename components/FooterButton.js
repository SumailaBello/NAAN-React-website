        //Footer display button component combined with the MDb pop-up modal used as footer
       export var FooterButton = React.createClass({
            
            render: function(){
                return (
                    <div className="fixed-bottom text-center">
                        <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="modal" data-target="#frameModalBottom" data-backdrop="false">&and;</button>
                        
                        <div className="modal fade bottom" id="frameModalBottom" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel"
                          aria-hidden="true">

                          <div className="modal-dialog modal-frame modal-bottom" role="document">


                            <div className="modal-content">
                              <div className="modal-body unique-color-dark">
                           
                            <footer className="page-footer font-small unique-color-dark">

                              <div >
                               <a type="button" className="btn btn-danger btn-sm waves-effect" data-dismiss="modal">&Chi;</a>
                                <div className="container" style={{background: "#6351ce"}}>

                              
                                  <div className="row py-4 d-flex align-items-center">

                                    
                                    <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                                      <h6 className="mb-0">Get connected with us on social networks!</h6>
                                    </div>
                                    

                                    
                                    <div className="col-md-6 col-lg-7 text-center text-md-right">

                                      
                                      <a className="fb-ic">
                                        <i className="fab fa-facebook-f white-text mr-4"> </i>
                                      </a>
                                     
                                      <a className="tw-ic">
                                        <i className="fab fa-twitter white-text mr-4"> </i>
                                      </a>
                                     
                                      <a className="gplus-ic">
                                        <i className="fab fa-google-plus-g white-text mr-4"> </i>
                                      </a>
                                     
                                      <a className="li-ic">
                                        <i className = "fab fa-linkedin-in white-text mr-4"> </i>
                                      </a>
                                 
                                      <a className = "ins-ic">
                                        <i className = "fab fa-instagram white-text"> </i>
                                      </a>

                                    </div>
                                   

                                  </div>
                             

                                </div>
                 
                              
                              <div className = "container text-center text-md-left mt-5">

                            
                                <div className = "row mt-3">

                                 
                                  <div className = "col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                               
                                    <h6 className = "text-uppercase font-weight-bold">Fashion Academy</h6>
                                    <hr className = "deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: 60 + "px"}} />
                                    <p>Lorem ipsum dolor sit amet,
                                      consectetur
                                      adipisicing elit.Lorem ipsum dolor sit amet,
                                      consectetur
                                      adipisicing elit.</p>

                                  </div>
                                  

                                  
                                  <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                              
                                    <h6 className="text-uppercase font-weight-bold">Top Courses</h6>
                                    <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: 60 + "px"}} />
                                    <p>
                                      <a href="#!">Fashion Design</a>
                                    </p>
                                    <p>
                                      <a href="#!">Fine Arts</a>
                                    </p>

                                  </div>
                                  

                                  
                                  <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                              
                                    <h6 className="text-uppercase font-weight-bold">Useful links</h6>
                                    <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: 60 + "px"}} />
                                    <p>
                                      <a href="#!">Your Account</a>
                                    </p>
                                    <p>
                                      <a href="#!">Become an Affiliate</a>
                                    </p>
                                    <p>
                                      <a href="#!">Tuition Fees</a>
                                    </p>
                                    <p>
                                      <a href="#!">Help</a>
                                    </p>

                                  </div>
                                  

                                  
                                  <div className ="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                              
                                    <h6 className ="text-uppercase font-weight-bold">Contact</h6>
                                    <hr className ="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: 60 + "px"}} />
                                    <p>
                                      <i className ="fas fa-home mr-3"></i> ABUJA, FCT 10012, NG</p>
                                    <p>
                                      <i className ="fas fa-envelope mr-3"></i> info@example.com</p>
                                    <p>
                                      <i className ="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                                    <p>
                                      <i className ="fas fa-print mr-3"></i> + 01 234 567 89</p>

                                  </div>
     

                                </div>
   

                              </div>
 

 
                              <div className="footer-copyright text-center py-3">© 2018 Copyright:
                                <a href="https://mdbootstrap.com/education/bootstrap/"> NAAN.com</a>
                              </div>
                                 </div>
                            </footer> 
                            </div>                             
                            </div>
                            </div>
                          </div>
                        </div>

                )
            }
        })
