    //Navbar component
   export var Navbar = React.createClass({
        propTypes: {
            brand: React.PropTypes.string.isRequired
        },
        
        getDefaultProps : function(){
            return {
                
                brand: "NAAN",
                navBarGradient: "blue"
                
        }
        
    },
        render: function(){
            if(this.props.navBarGradient == "purple"){
                var gradientColor = "navbar navbar-expand-lg navbar-dark purple-gradient fixed-top scrolling-navbar" 
            } else if(this.props.navBarGradient == "blue"){
                var gradientColor = "navbar navbar-expand-lg navbar-dark blue-gradient fixed-top scrolling-navbar"
                }
            
            var homeActive = "";
            var aboutActive = "";
            var contactActive = "";
            if(this.props.page == "Home"){
                homeActive = "nav-item active";
                console.log(this.props.page)
            }
            else if(this.props.page == "About"){
                aboutActive = "nav-item active";
                console.log(this.props.page)
            }
            else if(this.props.page == "Contact"){
                contactActive = "nav-item active"
                console.log(this.props.page)
            }

            return(
                <div>
                
                <nav className={gradientColor} >

                  
                  <a className="navbar-brand font-weight-bold" href="#">{this.props.brand} <img id ="brandImg" src="https://www.graphicsprings.com/filestorage/stencils/9eb54541d4b4669a0ebc65ba7c876707.png?width=500&height=500" alt="logo"/></a>

                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
                    aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>

                  <div className="collapse navbar-collapse blue-gradient" id="basicExampleNav">

                    
                    <ul className="navbar-nav ml-auto font-weight-bold">
                      <li className={homeActive}>
                        <a className="nav-link" onClick={this.props.homeClick} href="#">Home
                          <span className="sr-only">(current)</span>
                        </a>
                      </li>
                      <li className={aboutActive}>
                        <a className="nav-link" onClick={this.props.aboutClick} href="#">About Us</a>
                      </li>
                      <li className={contactActive}>
                        <a className="nav-link" onClick={this.props.contactClick} href="#">Contact</a>
                      </li>

                      <li className=" dropdown">
                        <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown"
                          aria-haspopup="true" aria-expanded="false">More</a>
                        <div className="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                          <a className="dropdown-item" href="#">News + Events</a>
                          <a className="dropdown-item" href="#">Student Work</a>
                          <a className="dropdown-item" href="#">Disciplines</a>
                        </div>
                      </li>
                      
                    </ul>
                    
                    <div className="ml-3">
                          <a className="fade-in btn aqua-gradient btn-rounded text-white" href="#">Get Started</a>
                    </div>



                    <form className="form-inline ml-3">
                      <div className="md-form my-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                      </div>
                    </form>
                  </div>

                </nav>
            
      </div>
            
            )
        }
        
    });
