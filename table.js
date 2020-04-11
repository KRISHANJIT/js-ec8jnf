// Import stylesheets
import "./style.css";
import $ from "jquery-ui-pack";

// Write Javascript code!
const gettable = function(element, json) {
  var keys;
      var table;
      var myTablehead =[];
      var myTableRows = [];
      var tr;
      var myObject = {};
      var text = '';
      var myaStr = '';
      var mybStr = '';

    let myData = json[0];
      myTablehead.push(myData);
    for (let i = 0; i < json.length; i++) {
         myTableRows.push(json[i])
      };
            
  myTablehead.forEach(function (val) {
     keys = Object.keys(val);
        //html table starts here
        table = $('<table>', document).attr({'class': 'myTable', 'id': 'myelement'});
          tr = $('<tr>');
        keys.forEach(function(key) {
          tr.append($("<th>").text(key));
         });
       table.append(tr);
      });
  let tbody = $('<tbody>').attr('id', 'myRows');

  myTableRows.forEach(function(val) {
    mykeys = Object.keys(val);
    //Set up the html row////
  tr = $('<tr>').attr({'class': 'thisRow','id': 'myRow'})
     for (var mykeys in val) {
    tr.append(
  $('<td>').attr('class', 'normalBtn','id','myBtn').text(val[mykeys])
      );
    }
    tbody.append(tr);
  });
  table.append(tbody);
  element.append(table);
    
table = document.getElementById("myelement");
myObject.table = table;

///////////////////////////////////////////////////////////////////////////////////////////////
myObject.setData = function(data) {
    myTablehead = [];
    myTableRows = [];
      
  /////Remove the previous table as well as Object.table///////////
  table = document.getElementById("myelement");
   table.remove();       //remove table from div
   delete this.table;       // delete table property from myObject
 
      let myData = data[0];
      //console.log(myData)
      myTablehead.push(myData);

      myTablehead.forEach(function (val) {
     keys = Object.keys(val);
        //html table starts here
        table = $('<table>', document).attr({'class': 'myTable', 'id': 'myelement'});
          tr = $('<tr>');
        keys.forEach(function(key) {
          tr.append($("<th>").text(key));
         });
       table.append(tr);
      });
  let tbody = $('<tbody>').attr('id', 'myRows');
    for (let i = 0; i < data.length; i++) {
        myTableRows.push(data[i])
      };
      //console.log(myTableRows)
      myTableRows.forEach(function(val) {
  mykeys = Object.keys(val);
//Set up the html row//////
let tr = $('<tr>').attr({'class': 'thisRow','id': 'myRow'})
      
  for (var mykeys in val) {
    tr.append(
          $('<td>').attr('class', 'normalBtn','id','myBtn').text(val[mykeys])
        );
       }
      tbody.append(tr);
    });
    table.append(tbody);
    $(element).append(table);

    table = document.getElementById("myelement");
    myObject.table = table;
  }
  /////////////////////////////////////////////////////////////////////////////////// 
    myObject.insertRow = function(myrow){
      getRow(myrow);
      function getRow(myrow){
       table = document.getElementById("myelement");
       var row = table.insertRow(-1);
       var cell = [];
        for (let i = 0; i < table.rows[0].cells.length; i++) {
           cell[i] = row.insertCell(i);
           cell[i].innerHTML = Object.values(myrow)[i];
          }
         return row;
         }
         table = document.getElementById("myelement");
         myObject.table = table;
     }
  /////////////////////////////////////////////////////////////////////////////////////
myObject.removeTable=function(table) {
    table = document.getElementById("myelement");
    table.remove();
    //$('table').remove();
   //$("table").html() = '';
    console.log(table) //remove (TABLE IS STILL THERE, THOUGH WORKS IN LOGIC)table from div
    delete this.table; 
    console.log(this.table) 
  }

////////////////////////////////////////////////////////////////////////////////////////
////////////////////NEW QUNIT TEST BASED FUNCTION//////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////

myObject.sortMyTable = function(myKey)
{
     text = myKey;
      json.sort(compareValue);
      console.log(json)
      getThisTable(json)
    
 function compareValue(a, b) {
    myaStr = a[text]; 
    mybStr = b[text];  
     console.log(a[text]);  
     console.log(b[text]);
      if (myaStr  < mybStr)
        return -1;
      if (myaStr  > mybStr)
        return 1;
      return 0;
    };
function getThisTable(data){
     myTablehead = [];
     myTableRows = [];
  /////Remove the previous table as well as Object.table///////////
  table = document.getElementById("myelement");
   table.remove();
    console.log(table)           //remove table from div
   delete this.table; 
 console.log(this.table)      // delete table property from myObject
 
      let myData = data[0];
      console.log(myData)
      myTablehead.push(myData);

      myTablehead.forEach(function (val) {
     keys = Object.keys(val);
        //html table starts here
        table = $('<table>', document).attr({'class': 'myTable', 'id': 'myelement'});
          tr = $('<tr>');
        keys.forEach(function(key) {
          tr.append($("<th>").text(key));
         });
       table.append(tr);
      });
  let tbody = $('<tbody>').attr('id', 'myRows');
    for (let i = 0; i < data.length; i++) {
        myTableRows.push(data[i])
      };
      console.log(myTableRows)
      myTableRows.forEach(function(val) {
  mykeys = Object.keys(val);
//Set up the html row//////
let tr = $('<tr>').attr({'class': 'thisRow','id': 'myRow'})
      
  for (var mykeys in val) {
    tr.append(
          $('<td>').attr('class', 'normalBtn','id','myBtn').text(val[mykeys])
        );
       }
      tbody.append(tr);
    });
    table.append(tbody);
    $(element).append(table);
    }
    table = document.getElementById("myelement");
    console.log(table)
    myObject.table = table;
    console.log(myObject.table)
  }
  return myObject;
}
      
export default gettable;