import React from 'react';
import ViewCardItems from './ViewCardItems';
const newarray = [];
const ViewItems = ( props ) => {
    const url= './Images/'+props.file;
        
    // const images =  require.context('./Images',true);
    
      
    
    const handleClick =(event)=>{
        if(event.target.checked== true)
        {
               newarray.push(event.target.value)
                console.log(true)
                console.log(newarray)
                
                localStorage.key('AddToCard');
                localStorage.setItem("AddToCard",JSON.stringify(newarray));
               
        }
        else
        {
            console.log(false);
        }
    }    
 

    return (
        <>
        <div>
        <div>
           
        </div>
            <input type="checkbox" id= {props.Id} value={props.Id} onClick={handleClick} name="chk" />
            </div>
            <section id="cart">
                <article className="product">
                    <header>
                        <a className="remove">
                            <img src={'http://localhost:3000/file:///F:/ReactProjects/ProjectAddTocard/addtocarddata/src/Images/keybord.jpg'}  alt="Product Image" />
                           {/* <div style={{backgroundImage: `url(${url})`}} ></div>                  */}
                        </a>
                    </header>

                    <div className="content">
                        <h1>{props.ProductName}</h1>
                    </div>

                    <footer className="content">
                        <h2 className="full-price">{props.prise}</h2>
                    </footer>
                </article>


            </section>
        </>
    )
}
export default ViewItems;