 //Home Page Component
   export var HomePage = React.createClass({
        propTypes: {
            Heading: React.PropTypes.string,
            Text: React.PropTypes.string
            
        },
        
        getDefaultProps: function(){
            return{
                Heading: "Welcome",
                Text: "Welcome Onboard."
            }
        },
        
        render: function(){
            
            return(
                    <div className = "home text-black purple-gradient container-fluid">
                        <div className="row h-100 text-uppercase">
                           <div className="col-xs-12 col-lg first-col text-center">
                               <div className="cen">
                                <h3 className="" onClick={this.props.aboutClick}>{this.props.Heading}</h3>
                                <p className="">{this.props.Text}</p>
                              </div>
                           </div>
                           
                           <div className="col-xs-12 col-lg second-col text-center">
                                <h3 className="cen"><a href="http://www.google.com">Fashion Design</a></h3>

                           </div>
                           
                           <div className="col-xs-12 col-lg third-col text-center">
                               <h3 className="cen"><a href="http://www.google.com">Interior Design</a></h3>

                           </div>
                           
                            <div className="col-xs-12 col-lg fourth-col text-center">
                                <h3 className="cen"><a href="http://www.google.com">Fine Arts</a></h3>
                            </div>
                                
                            <div className="col-xs-12 col-lg fifth-col text-center">
                                <h3 className="cen"><a href="http://www.google.com">Creative Writing</a></h3>
                            </div>
                         </div>                                                         
                    </div>
            )
        }
    });
