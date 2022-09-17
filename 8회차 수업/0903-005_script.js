   let $menu = $(".Menu-list"),
       $item = $(".Menu-list-item"),
       w = $(window).width(),
       h = $(window).height();
       
   $(window).on("mousemove", function(e){
      var offsetX = 0.5 - e.pageX / w,
          offsetY = 0.5 - e.pageY / h,
          dy = e.pageY - h / 2,
          dx = e.pageX - w / 2,
          theta = Math.atan2(dy, dx),/*래디안의 중심점과 커서사이의 각도를 구하는 부분*/
          angle = theta * 180 / Math.PI - 90/*PI->파이를 의미함*/

        //   offsetPoster = $menu.data("offset");
        //   transformPoster ='translate3D(0, ' + -offsetX * offsetPoster + `px, 0) 
        //   rotateX(` + (-offsetY + offsetPoster) + `deg)
        //   rotateY(` +(offsetX * (offsetPoster *2)) + `deg)`;

        //  /* 0도에서 360도 사이의 각도를 얻기 위한 부분*/

        //  if(angle < 0){
        //     angle = angle +360;
        //  }
        //  $menu.css("transform",transformPoster);

        //  $item.each(function(){
        //     var $this = $(this),
        //     offsetLayer = $this.data("offset") || 0,
        //     transformLayer = `translate3D(` + offsetX * offsetLayer + `px, `
        //     + offsetY * offsetLayer + `px, 20px)`;

        //     $this.css('transform', transformLayer);
        offsetPoster = $menu.data("offset"),
          transformPoster ='translate3D(0, ' + -offsetX * offsetPoster + 'px, 0) rotateX(' + (-offsetY + offsetPoster) + 'deg) rotateY(' +(offsetX * (offsetPoster *2)) + 'deg)';
         if(angle < 0){
            angle = angle +360;
         }
         $menu.css("transform",transformPoster);

         $item.each(function(){
            var $this = $(this),
            offsetLayer = $this.data("offset") || 0,
            transformLayer = 'translate3D(' + offsetX * offsetLayer + 'px, '
            + offsetY * offsetLayer + 'px, 20px)';

            $this.css('transform', transformLayer);
         });
   });
