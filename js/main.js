




$( document ).ready(function() {
          //console.log('hope');

//this calls up the heapbox styling

$('#sections').heapbox({'onChange':function(){
         $('.loader').show();

// empties out stories on load so when we change selections will load new stories
 $('.stories ul').empty();
    
  //on select we change the size of our logo
   
    $( "img" ).removeClass( "large-logo").addClass( "small-logo");

    let select = $('#sections').val();
    console.log(select)

    //let's use ajax to fetch some data

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

    //above fetches the top twelve stories

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


