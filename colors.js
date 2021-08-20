var Strong = {  //strong 객체
  setColor:function(color){
    //var alist=document.querySelectorAll('strong');
    //var i=0;
    //while(i<alist.length){
    //  alist[i].style.color= color;
    //  i+=1;
   //}
   $('a').css('color',color);   //jquery라이브러리 이용한 코드
 }
}
var Body= {  //body 객체
 setColor:function(color){   //그 안에 있는 글씨체 함수
    //document.querySelector('body').style.color=color;
    $('body').css('color',color);
 },
 setBackgroundColor:function(color){ //배경색 함수
    // document.querySelector('body').style.backgroundColor=color;
    $('body').css('backgroundColor',color);
   }
}
function nightDayHandler(self){
var target = document.querySelector('body');
if(self.value === 'night'){
  target.style.backgroundColor = 'black';
  target.style.color = 'white';
  self.value = 'day';

setColor('powderblue');
}
else {
  target.style.backgroundColor = 'white';
  target.style.color = '#696969';
  self.value = 'night';

setColor('#BECDFF');
}
}
