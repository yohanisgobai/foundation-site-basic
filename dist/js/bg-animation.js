$(document).ready(function() {

  /*
  (function(){
    // do some stuff
    setTimeout(arguments.callee, 60000);
})();
*/

    $.ajax({
      url:
        "https://api.unsplash.com/photos/random/?orientation=landscape&count=10&client_id=d35e8b081fad798edd1a5160b6f82530cccc32cfc497702a00d5f2c65f26dfc1",
      dataType: "json",
      success: function(data){
        return data;
      }
    }).done(function(data){
      let imgArray = [];
      data.forEach(function(val,idx,arr){
        imgArray.push(arr[idx].urls.raw);

    });
      console.log(imgArray);
      $("#grid-container").attr(`style`,`background-image:url("${imgArray[Math.round(Math.random()*9)-1]}");`);
  }).done(function(){
    console.log("success");
  })

/***
  if(imgArray.length === 0){
    loadImage();

  }else{
    setInterval(loadImage, 1800000);
  }
  ***/
  /***Select Background Image Container ***/

  /****
  $("#grid-container").attr(`style`,`background-image:url(${imgArray[Math.round(Math.random()*9)-1]})`);

  let rand = Math.round(Math.random()*9)-1;

  console.log(imgArray);
  console.log(Math.round(Math.random()*9)-1);
  ***/
});
