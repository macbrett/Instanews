




$( document ).ready(function() {
          //console.log('hope');

//$('#sections').heapbox()

+$('#sections').heapbox({'onChange':function(){
         $('.loader').show();


 $('.stories ul').empty();
    
  
    $( "img" ).removeClass( "large-logo").addClass( "small-logo");

    let select = $('#sections').val();
    console.log(select)

    $.ajax({

      method: 'GET',
      url: 'https://api.nytimes.com/svc/topstories/v2/' + select + '.json?api-key=133064f593064b5a9b82e24190084a92'
    }).done(function(data) {

if (data.results.length === 0) {
          $('.story-grid').append("<p>There appears to be no stories in this section.</p>");
        }
        else {
          let news = data.results;
          news = news.filter(function(item) {
            return item.multimedia.length;
          }).splice(0, 12);



            news.forEach(function(item, index) {
            $('.stories ul').append('<li class="news' + index +'"><div class="inner-item-wrapper"><a href="' +
              item.url + '"><div class="article story-' + index +'"><div class="story-meta"><p>' +
              item.abstract + '</p></div></div></a></div></li>');

            img = item.multimedia[4];
            $('.story-' + index).css('background-image', 'url("' + img.url + '")');
          });

};

    

});

}

});
  



});


