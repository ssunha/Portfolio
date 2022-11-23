
'use strict';
$( function(){
  let windowHeight = $(window).innerHeight();
  let count = 0;
  let wheelAction = false;
  let sectionLeng = $('section').length;
  let sectionLastIndex = sectionLeng - 1
  console.log(sectionLeng);

  function wheelMove(){
    $('html').animate({scrollTop: count*windowHeight},{
      duration: 1000, //1초
      start: function(){
        wheelAction = true;
      },
      complete: function(){
        wheelAction = false;
      }
    });
  }
  wheelMove();
  $(window).on('mousewheel', function(event){ //콜백함수 fucniton()
    console.log(event.originalEvent.wheelDelta);
    let eventDelta = event.originalEvent.wheelDelta;
    if( eventDelta > 0 && wheelAction == false ){ //&& and
      // console.log('wheel up');
      if ( count <= 0 ){ //0과 같거나 같을때
        count = 0
      }else{
        count -= 1; //휠이 위로올라가는것이니까 count = count - 1 과 같다.
        wheelMove();
      }
    }else if ( eventDelta < 0 && wheelAction == false ){
      // console.log('wheel down');
      if( count >= sectionLastIndex ){
        count = sectionLastIndex;
      }else{
        count += 1;
        wheelMove();
      }
    }
    /*
    */ });


});
