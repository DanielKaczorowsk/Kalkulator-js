function prasowanie(kalk) {
  return Function(`'use strict'; return (${kalk})`)()
}
$(document).ready(function(e){
  $('.1,.2,.3,.4,.5,.6,.7,.8,.9,.0,.plus,.minus,.dzielenie,.mnozenie,.e,.r,.przecinek').on('click',function(){
    if($('input:text').val().length==0){
      var v=$(this).val().replace(/^0+/,'').replace('.','0.').replace('.',',');
      $("input:text").val($("input:text").val()+v);
    }else{
    var v=$(this).val().replace('.',',');
    console.log(v);
    $("input:text").val($("input:text").val()+v);
  }
    console.log($('input:text').val().length);
})
$(".rowna").on('click',function(){
  $("input:text").val(prasowanie($("input:text").val()))
})
$(".clear").on('click',function(){
  $("input:text").val("");
})
$(".remove").on('click',function(){
  var len = $("input:text").val().length-1;
  $('input:text').val($('input:text').val().substring(0,len));
})

$('.ms').click(function(){
var ms=$('input:text').val();
$('.mr').click(function(){
console.log(ms);
})
$('.mc').click(function(){
  ms='';
})
$('.mp').click(function(){

})
})
$('.s').click(function(){

})
})
