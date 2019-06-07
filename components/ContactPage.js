        //ContactPage Component
       export var ContactPage = React.createClass({
            handleSendClick: function(event){
                event.preventDefault;
                const name = this._name.value;
                alert("Thanks for reaching out " + name + "!")
                console.log(name)
            },
//send button was placed outside of form element to stop the App from reloading on click caused by MDb framework
            render: function(){
                return(
                    <div className = "home text-dark p-5 container-fluid contact">
                        <div className = "row">
                            <div className="col">
                                <h1 className="text-center">Contact Us</h1>
                                <p className="font-weight-bold text-center">Say hi to us</p>
                                
                                <form action="" method="post" className="contact-form  contact-columns-mb">
                                  <label className="w-100"> Your Name <star>*</star> <br/>
                                      <input type="text" className="contact-input" ref={input => this._name = input}/>
                                  </label>
                                  <label className="w-100"> Your Email <star>*</star> <br />
                                      <input type="email" className="contact-input" placeholder="example@example.com"/>
                                  </label>
                                  <label className="w-100"> Subject<br />
                                      <input type="text" className="contact-input" />
                                  </label>
                                  <label className="w-100"> Your Message <star>*</star> <br />
                                      <textarea name="" id="" cols="30" rows="5" className="contact-input"></textarea>
                                  </label>
                               </form>
                                <button className="btn btn-primary btn-sm" onClick={this.handleSendClick}>Send</button>

                            </div>
                            <div className="col">
                                <img className="img-fluid" src="https://themify.me/demo/themes/ultra-photography/files/2018/05/man-in-front-of-computer.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                )
            }
        });
