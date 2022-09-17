const links = document.querySelectorAll(".container a");
   const bg = document.querySelector(".bg");
   const showClass = "bg-show";

   for(const link of links){
      link.addEventListener("mouseenter",function(){
         bg.style.backgroundImage = `url(${this.dataset.bg})`;/* ~표시있는 `는 ES6로 자바스크립트가 변경되면서 표현방법이 달라짐을 말함. */
         document.body.classList.add(showClass);
      });
      link.addEventListener("mouseleave",function(){
         document.body.classList.remove(showClass);
      });


   }