$( document ).ready(function() {

   $name = "";
  
  function doTheThing() {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: "https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBhSMWrmat2914CIjGWpD19ZjQS_qKMohE",
        method :"GET",
        data:{name : $name},
        dataType:"JSON",
        success: function (data) {
          resolve(data)
        },
        error: function (error) {
          reject(error)
        },
      })
    })
  }  
  
  // $name = "";
  //   // Section Top Stories
  //   $.ajax({
  //     url: "https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBhSMWrmat2914CIjGWpD19ZjQS_qKMohE",
  //     method :"GET",
  //     data:{name : $name},
  //     dataType:"JSON",
  //     success:function(data)
  //     {
  //       window.data = data;
  //       console.log(data);    
  //       // $.each(data.items, function( index, value ) {
  //       //   var title = data.items[index].title;
  
  //       //   $('.TopStories').append('<div class="col-xs-12 col-sm-6 col-md-3"><div class="sectionBox clearfix"><div class="sectionImage"><img src="'+data.items[index].kind+'" class="img-responsive" alt="image"></div><h3 class="newsTitle">'+data.items[index].etag+'</h3><p class="newsParagraph hidden-md hidden-lg">'+data.items[index].snippet.title+'</p><span class="newsSource">'+data.items[index].snippet.description+'</span><a class="readMoreLink" href="'+data.items[index].snippet.thumbnails.url+'" target="_blank">Read More..</a></div></div>');
  //       //   imageError(); 
             
  //       // });
  //     }
  //   });

      // hide image icon on loading  
  function imageError(){
    $('img').error(function(){
        // $( this ).css( "opacity", "0" );        
        $(this).attr("src","images/alternate_image.jpeg");
    });
  };

  doTheThing()
  .then((data) => {
    console.log(data)
    doSomethingElse()
  })
  .catch((error) => {
    console.log(error);
    console.log(error.responseJSON.error.message);
  })

  function doSomethingElse(){
    console.log('doSomethingElse');
  }
   
});
