$(document).ready(function () {
    // this is for head images
    
    $('.headApero').click(function () { 
        $('#headImg').fadeToggle();
        // $('.headApero').css(design);
    });
    $('.headCock').click(function () { 
        $('#headTwoImg').fadeToggle();
        // $('.headCock').css(design);
    });
    $('.headWhisky').click(function () { 
        $('#headThreeImg').fadeToggle();
        
    });
    $('.sachaCls').click(function () {
        $('#sachaImg').fadeToggle();
      })
    $('.ramzyCls').click(function () {
        $('#ramzyImg').fadeToggle();
      })
      $('.delairCls').click(function () {
          $('#delaireImg').fadeToggle();
        })
    // this is for sub images 
   $('#one').click(function () { 
       $('#imageOne').fadeToggle();   
    });
    $('#two').click(function () { 
        // $('#imageTwo').toggle();   
        $('#imageTwo').fadeToggle();
     });
     $('#three').click(function () { 
        // $('#imageTwo').toggle();   
        $('#imageThree').fadeToggle();
     });

  })


//   let design = {
//       color : 'red',
//       background : 'blue',
//       border : '1px solid red'

//   }