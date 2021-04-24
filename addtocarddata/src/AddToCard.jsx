import React,{useState} from 'react';
const AddToCard = () => {
    const [num,setNum]=useState([]);

const IncNum =(index) =>{
     console.log(index)
      
    // setNum(
        
    //     num+1
    // )
        
}

    var dataId = "";
    dataId = JSON.parse( localStorage.getItem( "AddToCard" ) );
    var newdb = [ ...dataId ];
   

    var db = "";
    db = JSON.parse( localStorage.getItem( "Additem" ) );
    var Additem = [];
    for ( var i = 0; i < Object.keys( db ).length; i++ ) {

        for ( var j = 0; j < newdb.length; j++ ) {

            if ( db[ i ].Id == newdb[ j ] ) {
                
                Additem.push({"Id":db[i].Id,"ProductName":db[i].ProductName,"Prise":db[i].prise,"quantity":db[i].quantity,"file":db[i].file})
               
            }

        }
    }
    // console.log( Additem )

    var filteredArray = Additem.filter( function ( item, pos ) {
        return Additem.indexOf( item ) == pos;
    } );

    console.log( filteredArray );

    return (
        <>
            {
                filteredArray.map( ( val,index) => {
                    return (
                        <section id="cart" key={index}>
                            <article className="product">
                                <header>
                                    <a className="remove">
                                        <img src="http://www.astudio.si/preview/blockedwp/wp-content/uploads/2012/08/1.jpg" alt="" />

                                        <h3>Remove product</h3>
                                    </a>
                                </header>

                                <div className="content">

                                    <h1>{val.ProductName}</h1>

                                    </div>
                                    
                                <footer className="content">
                                    <span className="qt-minus"><button>-</button></span>
                                    <span className="qt">{num}</span>
                                    <span className="qt-plus"><button  onClick={IncNum(index)}>+</button></span>

                                    <h2 className="full-price">Total:{val.Prise*num}</h2>

                                    <h2 className="price">Prise:{val.Prise}</h2>
                                </footer>
                            </article>
                        </section>
                    )
                } )
            }

        </>
    )
}
export default AddToCard;