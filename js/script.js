
// off navber start
let navBer = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBer.forEach(function(a){
  a.addEventListener("click", function(){
    navCollapse.classList.remove("show");
  })
})
// counter start
document.addEventListener("DOMContentLoaded", () =>{
  function counter(id, start, end, duration){
    let obj = document.getElementById(id),
    current = start,
    range = end - start,
    increment = end > start ? 1 : -1,
    step = Math.abs(Math.floor(duration / range)),
    timer = setInterval(() => {
      current += increment;
      obj.textContent = current;
      if(current == end){
        clearInterval(timer);
      }
    } ,step);
  }
  counter("count1", 0, 1227,3500);
  counter("count2", 100, 3000,2000);
  counter("count3", 0, 1400,3000);
  counter("count4", 0, 2000,3000);
})
// scroll button
let toTop=document.querySelector(".totop");
window.addEventListener("scroll",function(){
    if(window.pageYOffset>100){
        toTop.classList.add('active');
    }else{
        toTop.classList.remove('active');
    }
})