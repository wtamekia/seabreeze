

// $(document).ready(function() {
// $(".overview").click(function(){
//  $("#overview").show();
//     $("#ports").hide();
//     $("#intiniery").hide();
//    });
//  });
 
 //on page 2 to change button background color//
 $(document).ready(function(){
    $(".overview").click(function(){
        $(".overview").css("background-color", "orange");
    });
});

//to make modal show on opening of member page//
$(document).ready(function(){
		$("#myModal").modal('show');
});

   
  
   //to make sure first name is given//
       function check(){
       var x = document.getElementById("fname").value;
       if (x == "") {
    alert ("Field must be filled out");
       }  
 //need else function to dismiss modal???//  
 var y = document.getElementById("fname").value; //inserts fname after congrats// 
    document.getElementById("custom").innerHTML = y;
         }
         

    


//to put fname on page.//
      /* function check(){
      var y = document.getElementById("lname").value;
      if (y == "") {
    alert ("Field must be filled out");
    }
      }

 function check(){
      var z = document.getElementById("mname").value;
      if (z == "") {
    alert ("Field must be filled out");
    }
    
    else{
        
      }*/
 
      //end of validation codes//
      
      
       //start of function to get cart.//
       //this first function gets the value of the select ID.//
      function run(){
           var b = document.getElementById("mySelect").value;
           document.getElementById("price").innerHTML = "$"+b;
           //to get price total.//
           var c = document.getElementById("mySelect2").value;
          var d = b*c;
          document.getElementById("adults").innerHTML = "$"+d;
           //to get discount .//
          var e = d*0.1;
          document.getElementById("discount").innerHTML = "$"+e;
          //to get taxes .//
          var f = e*0.10;
          document.getElementById("taxes").innerHTML = "$"+f;
           //to get final price.//
          var g = d-(e+f);
          document.getElementById("final").innerHTML = "$"+g;
      }
    
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      