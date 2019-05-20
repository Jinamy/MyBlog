$(function () {
   //auto display
   setInterval("$('.next').click()",3000);
   var page=1;
   //show next
   $(".next").click(function () {

      var v_wrap=$(this).parents();
      var v_show=v_wrap.find(".scrollList");
      var v_margin=v_wrap.find(".box");
      var v_width=v_margin.width();
      //alert(v_width);
      var len=v_show.find("li").length;
      var page_count=Math.ceil(len);
      if(!v_show.is(":animated")){
         //alert("我是最后一页了！");
         if(page===page_count){
            v_show.animate({left:"0"},"slow");
            page=1;
         }else{
            //alert(len);
            v_show.animate({left:"-="+v_width},"slow");
            page++;

         }
      }
   });
   $(".prev").click(function () {

      var v_wrap=$(this).parents();
      var v_show=v_wrap.find(".scrollList");
      var v_margin=v_wrap.find(".box");
      var v_width=v_margin.width();
      var len=v_show.find("li").length;
      var page_count=Math.ceil(len);

      if(!v_show.is(":animated")){
         if(page===1){
            v_show.animate({left:'-='+v_width*(page_count-1)},"slow");
            page=page_count;
         }else{
            //alert(len);
            v_show.animate({left:'+='+v_width},"slow");
            page--;

         }
      }
   });

});