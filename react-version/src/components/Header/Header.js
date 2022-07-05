

const Header = () => {
	return (
       <div class="topbar">

            
                <div class="topbar-left">
                    <div class="text-center">
                        <p><a href="" class="logo">     <span>Sport</span> </a></p>
                        <p><a href="" class="logo">     <span>Time</span> </a></p>
                    </div>
                </div>

            <div class="navbar navbar-default" role="navigation">
                <div class="container">
                	 <ul class="nav navbar-nav navbar-right pull-right">
							<li class="dropdown top-menu-item-xs">
							<a href="" class="text-custom header-title  hidden-xs">April 18, 2021</a>
							</li>


							 <form role="search" class="navbar-left search-api pull-left hidden-xs">
			                     <input type="text" placeholder="Search" class="form-control" />
			                     <a href=""><i class="fa fa-search"></i></a>
			                </form>


							 <li class="dropdown top-menu-item-xs">


							 	<div class="two-colsets">
							 		<div class="list-columnset">
                                          	<p class="margin-space right-text">Eleanor Pena</p>
                                          <p class="margin-space right-text">admin</p>
                                          </div>
                                          <a href="" class=" profile  waves-light " ><img src="images/saladin.jpg" alt="user-img" class="img-circle" /> </a>
                                      </div>          
                                </li>
                      </ul>
                </div>
             </div>       
        </div>
           
	)
}

export default Header