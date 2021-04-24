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
import StarBorderIcon from '@material-ui/icons/StarBorder';
import CompareIcon from '@material-ui/icons/Compare';

import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import TwitterIcon from '@material-ui/icons/Twitter';
import ScreenShareIcon from '@material-ui/icons/ScreenShare';
import queryString from 'query-string';
const Addcard = (props) => {

    var db = "";
    db = JSON.parse( localStorage.getItem( "Additem" ) );
    console.log(props.location["pathname"]);
    const path = props.location["pathname"];
    var pathdata=path.split("/");
    const id=pathdata[3];
    console.log(id);
    var Additem = [];
    for(var i = 0; i < Object.keys( db ).length; i++ )
    {
        if(db[i].Id==id)
        {
            Additem.push({"Id":db[i].Id,"ProductName":db[i].ProductName,"Prise":db[i].prise,"quantity":db[i].quantity,"Brand":db[i].Brand,"Weight":db[i].Weight,"productcode":db[i].productcode,"Availability":db[i].Availability,"file":db[i].file})   

        }
    }
    // console.log(db);
    // console.log(Additem);
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
                                            <li><a href="#">Mission</a></li>
                                            <li><a href="#">Vision</a></li>
                                            <li><a href="#">Team</a></li>
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
            {
                Additem.map((val,index)=>{
                    return(
                        <div className="product-cotainer" key={val.Id}>
                    <div className="container">
                            <div className="row">
                                <div className="col-s-12">
                                        <div className="row">
                                                <div className="col-sm-5">
                                                    <div className="card-image" style={{border: "1px solid #ddd"}}>
                                                        <img src={sp1}/>
                                                    </div>
                                                </div>
                                                <div className="col-sm-7 product-right">
                                                    <h1>{val.ProductName}</h1>
                                                    <div className="rating">
                                                        <StarBorderIcon/><StarBorderIcon/><StarBorderIcon/><StarBorderIcon/><StarBorderIcon/>
                                                        <a href="#">0 reviews    /</a>
                                                        <a href="#">Write a review</a>
                                                    </div>
                                                    <div className="description">
                                                        <ul>
                                                            <li><span>Brand: </span><a href="#"> {val.Brand}</a></li>
                                                            <li><span>Product Code: </span><a href="#"> {val.productcode}</a></li>
                                                            <li><span>Availability: </span><a href="#"> {val.Availability}</a></li>
                                                            <li><span>Weight: </span><a href="#"> {val.Weight}.00g</a></li>
                                                            
                                                        </ul>
                                                       
                                                    </div>
                                                    <div className="product-prise">
                                                       <ul>
                                                           <li><span>Rs.580.00</span></li>
                                                           <li><h2>Rs.{val.Prise}.00</h2></li>
                                                       </ul>
                                                    </div>
                                                    <div className="addcard-grp d-flex">
                                                          <label>Qty</label> 
                                                          <input type="text" value={val.quantity} className="form-control" id="input-qulity"/>        
                                                          <button id="ppbtn">ADD TO CART</button>
                                                          <button id="widhlisht"><FavoriteIcon /></button>
                                                          <button id="widhlisht"><CompareIcon/></button>
                                                          <button id="ppbtn">BULK ENQUIRY</button>

                                                    </div>
                                                    <div className="midia d-flex">
                                                          <button id="fb"><ThumbUpIcon/> Like 0</button>              
                                                          <button id="fb" style={{background:"#5faef1"}}><TwitterIcon/> Tweet</button>              
                                                          <button id="fb" style={{background:"#e35c5c"}}><ScreenShareIcon/> Share</button>              
                                                     </div>
                                                </div>
                                                <div className="col-sm-12 tab-info">
                                                        
                                                        <ul>
                                                        <li><button style={{background:"#fdad00",color:"#fff",border:"none"}}>DESCRIPTION</button></li>
                                                        <li><button>review(0)</button></li>
                                                        <li><button>OTHER INSTRUCTION</button></li>
                                                        </ul>
                                                       
                                                </div>
                                        </div>
                                </div>
                            </div>
                    </div>
                </div>
                    )
                })
            }
                {/* <div className="product-cotainer">
                    <div className="container">
                            <div className="row">
                                <div className="col-s-12">
                                        <div className="row">
                                                <div className="col-sm-5">
                                                    <div className="card-image" style={{border: "1px solid #ddd"}}>
                                                        <img src="https://gujufood.com/image/cache/catalog/adani/Adani-Spcies-Gol-Keri-Aachar-Masala-1000x1000.jpg"/>
                                                    </div>
                                                </div>
                                                <div className="col-sm-7 product-right">
                                                    <h1>Gol Keri Aachar Masala 400GM</h1>
                                                    <div className="rating">
                                                        <StarBorderIcon/><StarBorderIcon/><StarBorderIcon/><StarBorderIcon/><StarBorderIcon/>
                                                        <a href="#">0 reviews/</a>
                                                        <a href="#">Write a review</a>
                                                    </div>
                                                    <div className="description">
                                                        <ul>
                                                            <li><span>Brand:</span><a href="#">Adani spices</a></li>
                                                            <li><span>Product Code:</span><a href="#">adani-spices-014</a></li>
                                                            <li><span>Availability:</span><a href="#">In Stock</a></li>
                                                            <li><span>Weight :</span><a href="#">400.00g</a></li>
                                                            
                                                        </ul>
                                                       
                                                    </div>
                                                    <div className="product-prise">
                                                       <ul>
                                                           <li><span>Rs.180.00</span></li>
                                                           <li><h2>Rs.162.00</h2></li>
                                                       </ul>
                                                    </div>
                                                    <div className="addcard-grp d-flex">
                                                          <label>Qty</label> 
                                                          <input type="text" value="1" className="form-control" id="input-qulity"/>        
                                                          <button id="ppbtn">ADD TO CART</button>
                                                          <button id="widhlisht"><FavoriteIcon /></button>
                                                          <button id="widhlisht"><CompareIcon/></button>
                                                          <button id="ppbtn">BULK ENQUIRY</button>

                                                    </div>
                                                    <div className="midia d-flex">
                                                          <button id="fb"><ThumbUpIcon/> Like 0</button>              
                                                          <button id="fb" style={{background:"#5faef1"}}><TwitterIcon/> Tweet</button>              
                                                          <button id="fb" style={{background:"#e35c5c"}}><ScreenShareIcon/> Share</button>              
                                                     </div>
                                                </div>
                                                <div className="col-sm-12 tab-info">
                                                        
                                                        <ul>
                                                        <li><button style={{background:"#fdad00",color:"#fff",border:"none"}}>DESCRIPTION</button></li>
                                                        <li><button>review(0)</button></li>
                                                        <li><button>OTHER INSTRUCTION</button></li>
                                                        </ul>
                                                       
                                                </div>
                                        </div>
                                </div>
                            </div>
                    </div>
                </div> */}
            </section>
        </>)}
export default Addcard;