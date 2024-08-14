<header>
    <!-- NavBar -->
    <nav class="navbar navbar-expand-lg navbar-light nav-yellow  border-bottom border-top p-0">
        <div class="container">
            <a class="navbar-brand fs-4 fw-bold " href="#"><i class="fa fa-cart-shopping fs-4"
                    style="color: #f54242;"></i><span class="textBlur">bigBasket</span></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <!--Toggle  -->
                <span class="navbar-toggler-icon"></span>
            </button>
            <!-- Nav Items -->
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0  text-center ">

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle fw-semibold text-uppercase  me-1 text-danger" href="#"
                            id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            home
                        </a>
                        <ul class="dropdown-menu  " aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item " href="#">Fashion 1</a></li>
                            <li><a class="dropdown-item" href="#">Fashion 2</a></li>
                            <li><a class="dropdown-item" href="#">furniture 1</a></li>
                            <li><a class="dropdown-item" href="#">furniture 2</a></li>
                            <li><a class="dropdown-item" href="#">Electronics 1</a></li>
                            <li><a class="dropdown-item" href="#">Electronics 1</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle redHover fw-semibold text-uppercase text-black  me-1"
                            href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            pages
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#">About Us</a></li>
                            <li><a class="dropdown-item" href="#">Cotact Us</a></li>

                            <li><a class="dropdown-item" href="#">Terms and Conditions</a></li>
                        </ul>
                    </li>



                    <li class="nav-item">
                        <a class="nav-link fw-semibold text-uppercase text-black  me-1" href="#">Contact us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="fa-solid fa-magnifying-glass fs-5"
                                style="color: #0c0d0d;"></i></a>
                    </li>
                    <!-- cart -->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown3" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fa fa-cart-shopping fs-5 me-1" style="color: #202122;"></i>
                        </a>
                        <ul class="dropdown-menu menuOnLeft   rounded-0 mt-2" aria-labelledby="navbarDropdown3">
                            @for (item of cartData; track $index) {
                                <li class="p-2" >
                                    <div class="d-flex w-100 border-bottom justify-content-evenly">
                                        <div>
                                            <img style="height: 70px !important;width: 100px !important;"
                                                class="img-fluid     p-2" [src]="item.productImageUrl" alt="">
                                        </div>
    
    
                                        <div style="">
                                            <a href="#" class="text-decoration-none text-black fw-semibold">
                                                <p class="m-0 p-0">{{item.productShortName}}</p>
                                            </a>
                                            <p>1 <i class="fa-solid fa-xmark" style="color: #0d0d0d;"></i> $ {{item.productPrice}}</p>
                                        </div>
                                        <button type="button" class="btn fs-5 closeBtn" (click)="removeCartProduct(item.cartId)"><i
                                                class="fa-solid fa-xmark"></i></button>
                                    </div>
    
                                </li>

                            }
                           
                           
                            <li class="p-2">
                                <div class=" w-100 ">
                                    <div class="d-flex justify-content-between">
                                        <h6>SubTotal :</h6>
                                        <h6>$159.00</h6>
                                    </div>
                                    <div class="d-flex justify-content-evenly mt-2">
                                        <button class="btn btn-dark rounded-0 px-3"> View Cart</button>
                                        <a routerLink="checkout"> <button
                                                class="btn btn-danger rounded-0 px-3">Checkout</button></a>
                                    </div>

                                </div>
                            </li>

                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle redHover fw-semibold text-uppercase text-black  me-1"
                            href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fa fa-user fs-5 me-1" style="color: #202122;"></i>
                        </a>
                        <ul class="dropdown-menu" style="left:-50px" aria-labelledby="navbarDropdown">
                            @if (loggedUSerData) {
                            <li>
                                <div class="d-flex justify-content-evenly mt-2">
                                    <a  > <button class="btn btn-danger rounded-0 px-3">{{loggedUSerData.name }}
                                        </button>
                                    </a>
                                    <a  > <button class="btn btn-danger rounded-0 px-3" (click)="logOff()">LogOff</button></a> 
                                </div> 
                            </li>
                            } @else {
                                <li>
                                    <div class="d-flex justify-content-evenly mt-2">
                                        <a href="#" data-bs-toggle="modal" data-bs-target="#loginModel"> <button
                                                class="btn btn-danger rounded-0 px-3">Login</button></a>
                                        <a href="#" data-bs-toggle="modal" data-bs-target="#myModal"> <button
                                                class="btn btn-danger rounded-0 px-3">Register</button></a>
                                    </div>
    
                                </li>
                            }
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"> </a>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
</header>
<div class="container">
    <router-outlet></router-outlet>
</div>

<div class="modal" id="myModal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Sign-up</h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <!-- Modal body -->
            <div class="modal-body">
                <div class="row">
                    <div class="col-4">
                        <label for="">Name</label>
                        <input type="text" [(ngModel)]="userRegister.Name" class="form-control">
                    </div>
                    <div class="col-4">
                        <label for="">Mobile No</label>
                        <input type="text" [(ngModel)]="userRegister.MobileNo" class="form-control">
                    </div>
                </div>
                <div class="row">
                    <div class="col-4">
                        <label for="">Password</label>
                        <input type="text" [(ngModel)]="userRegister.Password" class="form-control">
                    </div>
                </div>
            </div>

            <!-- Modal footer -->
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-danger" (click)="onRegister()">Sign Up</button>
            </div>

        </div>
    </div>
</div>

<div class="modal" id="loginModel">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Login</h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <!-- Modal body -->
            <div class="modal-body">
                <div class="row">
                    <div class="col-4">
                        <label for="">User Name</label>
                        <input type="text" [(ngModel)]="loginObj.UserName" class="form-control">
                    </div>
                    <div class="col-4">
                        <label for=""> Password</label>
                        <input type="text" [(ngModel)]="loginObj.UserPassword" class="form-control">
                    </div>
                </div>

            </div>

            <!-- Modal footer -->
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-danger" (click)="onLogin()">Login</button>
            </div>

        </div>
    </div>
</div>