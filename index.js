import $ from "jquery";
import QUnit from "qunit";
import gettable from "./table.js";

/////////////////////////////////////////////////////////////////////////////////
/////////////////////////FIRST TEST /////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
QUnit.test("json data", function (assert) {
  /////////////////////////////////////////////////////////////////////////////////
  //define json data for table.
  let arr =  [
    {ShipperID: 1, CompanyName: "Federal Package", Phone: "(503) 555-9931"},
    {ShipperID: 2, CompanyName: "United Package", Phone: "(503) 655-7865"},
    {ShipperID: 3, CompanyName: "My Package", Phone: "(508) 955-8997"},
    {ShipperID: 7, CompanyName: "American Package", Phone: "(503) 666-9931"},
    {ShipperID: 8, CompanyName: "Chinese Package", Phone: "(503) 777-7865"},
    {ShipperID: 9, CompanyName: "British Package", Phone: "(508) 888-8997"}
   ];
  //pass json data to table component which returns DOM reference to table.
  
 let tbl = myTable($('#container'),arr);
 
 function myTable(element,arr) {
  return gettable(element,arr);
 }
   let x = tbl.table.rows.length-1;
   assert.equal(arr.length, x, "rows match");

   let y=[];
   let z = tbl.table.rows[0].cells.length
  for (let i = 1; i < x; i++) {
    y[i] = tbl.table.rows[i].cells.length;
     assert.equal(y[i], z, "cells match");        
     }
///////////////////////////////////////////////////////////////////////////
 let data = [
    {ShipperID: 7, CompanyName: "American Package", Phone: "(503) 666-9931"},
    {ShipperID: 8, CompanyName: "Chinese Package", Phone: "(503) 777-7865"},
    {ShipperID: 9, CompanyName: "British Package", Phone: "(508) 888-8997"},
    {ShipperID: 10, CompanyName: "Australian Package", Phone: "(503) 666-9931"},
    {ShipperID: 11, CompanyName: "Dutch Package", Phone: "(503) 777-7865"},
    {ShipperID: 12, CompanyName: "Swiss Package", Phone: "(508) 888-8997"}
   ];
tbl.setData(data);

x = tbl.table.rows.length - 1;
assert.equal(data.length, x, "rows match")
  
z = tbl.table.rows[0].cells.length
 for (let i = 1; i < x; i++) {
   y[i] = tbl.table.rows[i].cells.length;
assert.equal(y[i], z, "cells match") ;   
 }
 /////////////////////////////////////////////////////////////////////////////////////
 tbl.insertRow(data[2])
x = tbl.table.rows.length - 1;
assert.equal(arr.length + 1,x,"rows match")
/////////////////////////////////////////////////////////////////////////////////////
tbl.removeTable(tbl.table)
assert.equal(tbl.table, undefined, "test passed") ;
/////////////////////////////////////////////////////////////////////////////////////  
});

/////////////////////////////////////////////////////////////////////////////////
////////////////////////// SECOND TEST /////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

QUnit.test( "Sort Table", function( assert ) {
  //var sortedKeys = Object.keys(data).sort();
  //console.log(sortedKeys)
  ///////////////////////////////////////////////////////////////////////
  //define json data for table.
  let arr =  [
    {ShipperID: 1, CompanyName: "Federal Package", Phone: "(503) 555-9931"},
    {ShipperID: 2, CompanyName: "United Package", Phone: "(503) 655-7865"},
    {ShipperID: 3, CompanyName: "My Package", Phone: "(508) 955-8997"},
    {ShipperID: 10, CompanyName: "Australian Package", Phone: "(503) 666-9931"},
    {ShipperID: 11, CompanyName: "Dutch Package", Phone: "(503) 777-7865"},
    {ShipperID: 12, CompanyName: "Swiss Package", Phone: "(508) 888-8997"}
    ];
  
 let  mytbl = myTable($('#container'),arr);
 
   function myTable(element,arr) {
    return gettable(element,arr);
   }
mytbl.sortMyTable('CompanyName');

let x = mytbl.table.rows.length-1;
console.log(x)
assert.equal(arr.length, x, "rows match");
let y=[];
let z = mytbl.table.rows[0].cells.length
for (let i = 1; i < x; i++) {
 y[i] = mytbl.table.rows[i].cells.length;
  assert.equal(y[i], z, "cells match");
  } 
});