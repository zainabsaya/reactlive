import React from 'react';


const ViewCardData = () =>{
    var db="";
    db= JSON.parse(localStorage.getItem("Additem"));
    localStorage.setItem( "Additem", JSON.stringify( db ) );
    var i=0;
    var Vdata=[];
    for(i=0;i<db.length;i++)
    {   
                 Vdata = {
                Id:db[i].Id,
                ProductName:db[i].ProductName,
                prise:db[i].prise,
                quantity:db[i].quantity,
                file:db[i].file
            
        }
     return Vdata;
        
    }
    
};
export default ViewCardData;