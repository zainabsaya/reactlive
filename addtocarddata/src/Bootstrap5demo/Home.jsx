import React,{Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './style.css'
import Blanck from '../Images/blank.png';
import BlanckA from '../Images/blanka.png';
import flag from '../Images/india.jpg';
import us from '../Images/us.svg';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SearchIcon from '@material-ui/icons/Search';
import logo from '../Images/guju-logo transparent.png'
import call from '../Images/call.jpg';
import call2 from '../Images/call2.jpg';
import { BorderAll, Style } from '@material-ui/icons';
import card from '../Images/card.png';
import card2 from '../Images/card2.jpg';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import LockIcon from '@material-ui/icons/Lock';
import NearMeIcon from '@material-ui/icons/NearMe';
import f1 from '../Images/f1.jpg';
import f2 from '../Images/f2.jpg';
import f3 from '../Images/f3.jpg';
import f4 from '../Images/f4.jpg';
import ff from '../Images/ff.jpg';
import f6 from '../Images/f6.jpg';
import sp1 from '../Images/sp1.jpg';
import sp2 from '../Images/sp2.jpg';
import sp3 from '../Images/sp3.jpg';
import sp4 from '../Images/sp4.jpg';
import { BrowserRouter, NavLink } from 'react-router-dom';
import { Redirect, Route, Router, Switch } from 'react-router';
const Home = () => {
    var db = "";
    db = JSON.parse( localStorage.getItem( "Additem" ) );
    var newdb = [ ...db ];
    console.log(newdb);
    var db = "";
    db = JSON.parse( localStorage.getItem( "Additem" ) );
    var newdb = [ ...db ];
    console.log(newdb);
    const newarray = [];
    const handleClick=()=>{
        console.log("hi");
        // console.log(id)
        // alert("hi");
    }
    return (
        <>
            <section>
                <div className="main">
                    <nav className="navbar navbar-expand-lg navbar-light ">
                        <div className="container headers">
                            <a className="navbar-brand cardtitle" href="#">Swad Pure Bharat Ka</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto mb-2 mx-5 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#"><img src={flag} className="flag"></img>Rs.India</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><img src={us} className="flag"></img>$Us Dollar</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" >Account</a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><a className="dropdown-item" href="#"><PersonIcon />Register</a></li>
                                            <li><a className="dropdown-item" href="#"><ExitToAppIcon />Login</a></li>
                                            <li><a className="dropdown-item" href="#"><FavoriteIcon />wishList</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </nav>

                </div>

                <div className="head-top">
                    <div className="container d-flex">
                        <div className="col-sm-5 d-flex">
                            <div className="searchproduct d-flex">
                                <button>1000+ Products !</button>
                                <div className="inputgrp d-flex">
                                    <input type="text" placeholder="Search" className="inputplaceholder" />
                                    <SearchIcon className="btnsearch" />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 d-flex">
                            <div className="logo">
                                <img src={logo} />
                            </div>
                            <div className="vl">

                            </div>
                        </div>
                        <div className="col-sm-2 d-flex ">
                            <div className="contatinfo d-flex">
                                <img src={call} onMouseOver={e => { e.currentTarget.src = call2 }} onMouseOut={e => { e.currentTarget.src = call }} />
                                <div style={{ display: "block" }}>
                                    <h4>Contact</h4>
                                    <p>+91 72279 72280</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-2 d-flex">
                            <div className="contatinfo d-flex">
                                <img src={card} onMouseOver={e => { e.currentTarget.src = card2 }} onMouseOut={e => { e.currentTarget.src = card }} />
                                <div style={{ display: "block" }}>
                                    <h4>Shoping card</h4>
                                    <p>0 items</p>
                                </div>
                            </div>
                        </div>


                    </div>



                </div>
                <div >

                </div>
            </section>
            <section>
                <div className="nav-full-width">
                    <div className="container">

                        <div className="top-menu">
                            <ul className="boder ">
                                <li><a href="#">Region<ExpandMoreIcon /></a>
                                    <div className="sub-menu-1">
                                        <ul>
                                            <li><a href="#">Rajshthan</a></li>
                                            <li><a href="#">Gujrat</a></li>
                                            <li><a href="#">panjab</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li><a href="#">Brands<ExpandMoreIcon /></a></li>
                                <li><a href="#">Sweets Corner<ExpandMoreIcon /></a></li>
                                <li><a href="#">Bakery<ExpandMoreIcon /></a></li>
                                <li><a href="#">Mukhwas</a></li>
                                <li><a href="#">Farali corner</a></li>
                                <li><a href="#">combo pack</a></li>
                                <li><a href="#">Gujufood special</a></li>
                                <li><a href="#">E-store</a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>
            <section>
                <div className="container d-flex">
                    <div className="service d-flex">
                        <div className="col-sm-3 d-flex">

                            <NearMeIcon /><h4>4 days delivery</h4>
                            <p>no minimum order in india</p>
                        </div>
                        <div className="col-sm-3 d-flex">
                            <AttachMoneyIcon /><h4>Fast  delivery</h4>
                            <p>within 4 days in india</p>
                        </div>
                        <div className="col-sm-3 d-flex">
                            <LockIcon /><h4>Mail support</h4>
                            <p>Gujufood8@gmail.com</p>
                        </div>
                        <div className="col-sm-3 d-flex">
                            <AttachMoneyIcon /><h4>call support</h4>
                            <p>+91 72279 72280 </p>
                        </div>
                    </div>
                </div>

            </section>
            <section>
                <div className="containe">
                    <div id="myCarousel" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                        </ol>

                        <div className="carousel-inner">

                            <div className="item active">
                                <img src={f1} alt="Los Angeles" style={{ width: "100%" }} />
                                <div className="carousel-caption">

                                </div>
                            </div>

                            <div className="item">
                                <img src={f2} alt="Chicago" style={{ width: "100%" }} />
                                <div className="carousel-caption">
                                </div>
                            </div>

                            <div className="item">
                                <img src={f3} alt="New York" style={{ width: "100%" }} />
                                <div className="carousel-caption">

                                </div>
                            </div>

                            <div className="item">
                                <img src={f4} alt="New York" style={{ width: "100%" }} />
                                <div className="carousel-caption">

                                </div>
                            </div>

                            <div className="item">
                                <img src={ff} alt="New York" style={{ width: "100%" }} />
                                <div className="carousel-caption">

                                </div>
                            </div>
                        </div>

                        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                            <span className="glyphicon glyphicon-chevron-left"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="right carousel-control" href="#myCarousel" data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </section>
            <section>
                <div>
                    <div className="popularbrands">
                        <h4><span>P</span>opular Brands</h4>
                        <p>Popular Brands</p>
                    </div>
                </div>
            </section>
            <section>
                <div className="sheller">
                    <div className="container">
                        <div className="sheller-items">
                            <div className="col-sm-2">
                                <div className="sheller-data">
                                    <div className="image">
                                        <a href="https://gujufood.com/suraj-food">
                                            <img src="https://gujufood.com/image/cache/catalog/brandlogo/surajs-300x200.jpg" alt="suraj food" title="suraj food" />
                                        </a>
                                    </div>
                                    <div className="caption">
                                        <h4>suraj food</h4>
                                        <button>Shop now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-2">
                                <div className="sheller-data">
                                    <div className="image">
                                        <a href="https://gujufood.com/shreeji-khakhra">
                                            <img src="https://gujufood.com/image/cache/catalog/brandlogo/shreeji-300x200.PNG" alt="suraj food" title="suraj food" />
                                        </a>
                                    </div>
                                    <div className="caption">
                                        <h4>Shreeji khakhra</h4>
                                        <button>Shop now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-2">
                                <div className="sheller-data">
                                    <div className="image">
                                        <a href="https://gujufood.com/suraj-food">
                                            <img src="https://gujufood.com/image/cache/catalog/brandlogo/shreeji-300x200.PNG" alt="suraj food" title="suraj food" />
                                        </a>
                                    </div>
                                    <div className="caption">
                                        <h4>Kutch Khandawala</h4>
                                        <button>Shop now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-2">
                                <div className="sheller-data">
                                    <div className="image">
                                        <a href="https://gujufood.com/suraj-food">
                                            <img src="https://gujufood.com/image/cache/catalog/brandlogo/jalaram-300x200.PNG" alt="suraj food" title="suraj food" />
                                        </a>
                                    </div>
                                    <div className="caption">
                                        <h4>jalaram chakki</h4>
                                        <button>Shop now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-2">
                                <div className="sheller-data">
                                    <div className="image">
                                        <a href="https://gujufood.com/suraj-food">
                                            <img src="https://gujufood.com/image/cache/catalog/brandlogo/rasikbhai%20logo-300x200.png" alt="suraj food" title="suraj food" />
                                        </a>
                                    </div>
                                    <div className="caption">
                                        <h4>Rashik bhai chvdavala</h4>
                                        <button>Shop now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-2">
                                <div className="sheller-data">
                                    <div className="image">
                                        <a href="https://gujufood.com/suraj-food">
                                            <img src="https://gujufood.com/image/cache/catalog/brandlogo/sssweet-300x200.png" alt="suraj food" title="suraj food" />
                                        </a>
                                    </div>
                                    <div className="caption">
                                        <h4>suraj food</h4>
                                        <button>Shop now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-2">
                                <div className="sheller-data">
                                    <div className="image">
                                        <a href="https://gujufood.com/suraj-food">
                                            <img src="https://gujufood.com/image/cache/catalog/brandlogo/surajs-300x200.jpg" alt="suraj food" title="suraj food" />
                                        </a>
                                    </div>
                                    <div className="caption">
                                        <h4>ss sweet</h4>
                                        <button>Shop now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-2">
                                <div className="sheller-data">
                                    <div className="image">
                                        <a href="https://gujufood.com/suraj-food">
                                            <img src="https://gujufood.com/image/cache/catalog/brandlogo/sikandar%20shing-300x200.png" alt="suraj food" title="suraj food" />
                                        </a>
                                    </div>
                                    <div className="caption">
                                        <h4>sikandar sing</h4>
                                        <button>Shop now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-2">
                                <div className="sheller-data">
                                    <div className="image">
                                        <a href="https://gujufood.com/suraj-food">
                                            <img src="https://gujufood.com/image/cache/catalog/cpmasala-178x100-300x200.PNG" alt="suraj food" title="suraj food" />
                                        </a>
                                    </div>
                                    <div className="caption">
                                        <h4>c.p food</h4>
                                        <button>Shop now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-2">
                                <div className="sheller-data">
                                    <div className="image">
                                        <a href="https://gujufood.com/suraj-food">
                                            <img src="https://gujufood.com/image/cache/catalog/logo/jainvijay%20logo-300x200.png" alt="suraj food" title="suraj food" />
                                        </a>
                                    </div>
                                    <div className="caption">
                                        <h4>jain vijay</h4>
                                        <button>Shop now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-2">
                                <div className="sheller-data">
                                    <div className="image">
                                        <a href="https://gujufood.com/suraj-food">
                                            <img src="https://gujufood.com/image/cache/catalog/brandlogo/Tastee-300x200.png" alt="suraj food" title="suraj food" />
                                        </a>
                                    </div>
                                    <div className="caption">
                                        <h4>Tastee</h4>
                                        <button>Shop now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-2">
                                <div className="sheller-data">
                                    <div className="image">
                                        <a href="https://gujufood.com/suraj-food">
                                            <img src="https://gujufood.com/image/cache/catalog/brandlogo/guju-logo%20transparent-300x200.PNG" alt="suraj food" title="suraj food" />
                                        </a>
                                    </div>
                                    <div className="caption">
                                        <h4>gujufood</h4>
                                        <button>Shop now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="spacial-product">
                    <div className="container">
                        <div className="sp-title">
                            <h4><span>S</span>pecial Products</h4>
                            <p>Buy a famous city food</p>
                        </div>
                        <div className="spacial d-flex" style={{margin:"20px"}}>
                        {/* <Carousel >
                        <Carousel.Item> */}
                                <div className="col-sm-3">
                                    <div className="specil-data" >
                                          <div className="spimage">
                                          <img src={sp1} className=""/>
                                          <p>Methi Kuriya (Fenugreek Split) 400GM</p>
                                          <p>RS.100.00</p>
                                          <button className="sp-btn">AddtoCard</button>
                                          </div>                  
                                    </div>
                                </div>
                                <div className="col-sm-3" >
                                    <div className="specil-data " >
                                          <div className="spimage">
                                          <img src={sp2} className=""/>
                                          <p>Gol Keri Aachar Masala 400GM</p>
                                          <p>RS.162.00</p>
                                          <button className="sp-btn">AddtoCard</button>
                                          </div>                  
                                    </div>
                                </div>
                                <div className="col-sm-3" >
                                    <div className="specil-data " >
                                          <div className="spimage">
                                          <img src={sp3} className=""/>
                                          <p>Tea Masala 100GM</p>
                                          <p>RS.130.00</p>
                                          <button className="sp-btn">AddtoCard</button>
                                          </div>                  
                                    </div>
                                </div>
                                <div className="col-sm-3" >
                                    <div className="specil-data " >
                                          <div className="spimage">
                                          <img src={sp4} className=""/>
                                          <p>Gol Keri Aachar Masala 400GM</p>
                                          <p>100</p>
                                          <button className="sp-btn">AddtoCard</button>
                                          </div>                  
                                    </div>
                                </div>
                               
                                {/* </Carousel.Item>
                                </Carousel> */}
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="spacial-product">
                    <div className="container">
                        <div className="sp-title">
                            <h4><span>T</span>rending Products</h4>
                            <p>Buy a famous city food</p>
                            <ul>
                                <li>NEW ARRIVALS</li>
                                <li>BEST SELLERS</li>
                                <li>SPECIAL PRODUCTS</li>
                            </ul>
                        </div>
                        <div className="spacial" style={{margin:"20px"}}>
                        {/* <Carousel >
                        <Carousel.Item> */}
                        {
                            newdb.map((val,index)=>{
                              return ( <div className="col-sm-3" key={val.Id}>
                                    <div className="specil-data" >
                                          <div className="spimage">
                                          <img src="https://gujufood.com/image/cache/catalog/seller_upload_id11/mother-recipe-potato-papad-370x370.jpg" className=""/>
                                          <p>{val.ProductName}</p>
                                          <p>RS.{val.prise}.00</p>
                                          <Switch><NavLink exact to={"../Bootstrap5demo/Addcard/"+val.Id}><button onClick={handleClick} className="sp-btn"  id={val.Id} >AddtoCard</button></NavLink></Switch>
                                          </div>                  
                                    </div>
                                </div>)
                            })
                        }
                                {/* <div className="col-sm-3">
                                    <div className="specil-data" >
                                          <div className="spimage">
                                          <img src="https://gujufood.com/image/cache/catalog/seller_upload_id11/mother-recipe-potato-papad-370x370.jpg" className=""/>
                                          <p>Sabudana Papad & Potato Papad Combo</p>
                                          <p>RS.194.00</p>
                                          <button className="sp-btn">AddtoCard</button>
                                          </div>                  
                                    </div>
                                </div>
                                <div className="col-sm-3" >
                                    <div className="specil-data " >
                                          <div className="spimage">
                                          <img src="https://gujufood.com/image/cache/catalog/seller_upload_id11/ramdev-khaman-370x370.jpg" className=""/>
                                          <p>Khaman Instant Mix 400GM</p>
                                          <p>RS.102.00</p>
                                          <button className="sp-btn">AddtoCard</button>
                                          </div>                  
                                    </div>
                                </div>
                                <div className="col-sm-3" >
                                    <div className="specil-data " >
                                          <div className="spimage">
                                          <img src="https://gujufood.com/image/cache/catalog/seller_upload_id11/ramdev-gulab-jamun-370x370.jpg" className=""/>
                                          <p>Gulab Jamun Instant Mix 400GM</p>
                                          <p>RS.190.00</p>
                                          <button className="sp-btn">AddtoCard</button>
                                          </div>                  
                                    </div>
                                </div>
                                <div className="col-sm-3" >
                                    <div className="specil-data " >
                                          <div className="spimage">
                                          <img src="https://gujufood.com/image/cache/catalog/seller_upload_id11/ramdev-dhosa-370x370.jpg" className=""/>
                                          <p>Dhosa Instant Mix 400GM</p>
                                          <p>RS.85.00</p>
                                          <button className="sp-btn">AddtoCard</button>
                                          </div>                  
                                    </div>
                                </div>
                                <div className="col-sm-3" >
                                    <div className="specil-data " >
                                          <div className="spimage">
                                          <img src="https://gujufood.com/image/cache/catalog/seller_upload_id11/ramdev-methi-gota-370x370.jpg" className=""/>
                                          <p>Methi Gota Instant Mix 400GM</p>
                                          <p>RS.100.00</p>
                                          <button className="sp-btn">AddtoCard</button>
                                          </div>                  
                                    </div>
                                </div>
                                <div className="col-sm-3" >
                                    <div className="specil-data " >
                                          <div className="spimage">
                                          <img src="https://gujufood.com/image/cache/catalog/seller_upload_id11/ramdev-methi-gota-370x370.jpg" className=""/>
                                          <p>Methi Gota Instant Mix 400GM</p>
                                          <p>RS.100.00</p>
                                          <button className="sp-btn">AddtoCard</button>
                                          </div>                  
                                    </div>
                                </div><div className="col-sm-3" >
                                    <div className="specil-data " >
                                          <div className="spimage">
                                          <img src="https://gujufood.com/image/cache/catalog/seller_upload_id11/ramdev-idli-370x370.jpg" className=""/>
                                          <p>Idli Instant Mix 400GM</p>
                                          <p>RS.85.00</p>
                                          <button className="sp-btn">AddtoCard</button>
                                          </div>                  
                                    </div>
                                </div><div className="col-sm-3" >
                                    <div className="specil-data " >
                                          <div className="spimage">
                                          <img src="https://gujufood.com/image/cache/catalog/seller_upload_id11/ramdev-gota-mix-370x370.jpg" className=""/>
                                          <p>Gota Instant Mix 400GM</p>
                                          <p>RS.100.00</p>
                                          <button className="sp-btn">AddtoCard</button>
                                          </div>                  
                                    </div>
                                </div> */}
                                {/* </Carousel.Item>
                                </Carousel> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Home