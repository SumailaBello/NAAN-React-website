        //AboutPage Component
      export var AboutPage = React.createClass({
            getDefaultProps: function(){
                return{
                    Heading: "About Us",
                    Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                }
            },
            render: function(){
                return(
                    <div className = "home p-5 container-fluid about">
                        <div className = "row">
                           <div className ="col-xs-12 col-lg-6 text-center">
                            <h1 className = "font-weight-bold">{this.props.Heading}</h1>
                            <hr className="bg-light font-weight-bold"/>
                            <h4 className="font-weight-bold"><em>Passion Led Us Here</em></h4>
                            
                            <p className="font-weight-bold">{this.props.Text}</p>
                          </div>
                          <div className ="col-xs-12 col-lg-6 text-center">
                            <img className="img-fluid" src="https://themify.me/demo/themes/ultra-education/files/2018/08/discussion.jpg" alt=""/>
                          </div>
                        </div>
                    </div>
                )
            }
        });
