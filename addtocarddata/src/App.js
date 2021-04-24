// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
// import './index.css';
const App = () => {



  var newarr = new Array();
  const Id = () => {
    return '_' + Math.random().toString( 36 ).substr( 2, 9 );
  }

  const [ data, setData ] = useState( {
    ProductName: '',
    prise: '',
    quantity: '',
    msg: '',
    file: '',
    Brand: '',
    productcode: '',
    Weight: '',
    Availability: '',
  } );

  const InputEvent = ( event ) => {
    const { name, value } = event.target;
    setData( ( preval ) => {
      return {
        ...preval,
        [ name ]: value,

      }
    } );
  }
  const [ file, setFile ] = React.useState( "" );
  function handleUpload( event ) {
    setFile( event.target.files[ 0 ] );
  }

  const formSubmit = ( e ) => {

    e.preventDefault();


    const AddItemsArray = {
      Id: Id(),
      ProductName: data.ProductName,
      prise: data.prise,
      quantity: data.quantity,
      file: file.name,
      Brand: data.Brand,
      productcode: data.productcode,
      Weight: data.Weight,
      Availability: data.Availability,
    }
    var db = "";
    db = JSON.parse( localStorage.getItem( "Additem" ) );
    if ( db == undefined || db == null ) {
      newarr[ 0 ] = AddItemsArray;
      localStorage.setItem( "Additem", JSON.stringify( newarr ) );
    }
    else {
      db.push( AddItemsArray );
      localStorage.setItem( "Additem", JSON.stringify( db ) );
    }



  }

  return ( <>

    <form onSubmit={formSubmit}>
      <div className="container">
        <h1>Add Items</h1>
        <p>Please fill in this form to create an account.</p>
        <hr />

        <label for="ProductName"><b>ProductName</b></label>
        <input type="text" value={data.ProductName} onChange={InputEvent} placeholder="Enter ProductName" name="ProductName" required />

        <label for="prise"><b>Prise</b></label>
        <input type="text" value={data.prise} onChange={InputEvent} placeholder="Enter Prise" name="prise" required />

        <label for="quantity"><b>quantity</b></label>
        <input type="text" value={data.quantity} onChange={InputEvent} placeholder="Enter Total quantity" name="quantity" required />

        <label for="prise"><b>Barand</b></label>
        <input type="text" value={data.Brand} onChange={InputEvent} placeholder="Enter Prise" name="Brand" required />

        <label for="prise"><b>ProductCode</b></label>
        <input type="text" value={data.productcode} onChange={InputEvent} placeholder="Enter Prise" name="productcode" required />

        <label for="prise"><b>Availability</b></label>
        <input type="text" value={data.Availability} onChange={InputEvent} placeholder="Enter Prise" name="Availability" required />

        <label for="prise"><b>Weight</b></label>
        <input type="text" value={data.Weight} onChange={InputEvent} placeholder="Enter Prise" name="Weight" required />

        <label for="file" ><b>file</b></label>
        <input type="file" onChange={handleUpload} name="file" value={data.file} />

        <button type="submit" className="registerbtn">Register</button>
      </div>
    </form>
  </>
  );
}
export default App;
