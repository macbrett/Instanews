
$(function() {
  $('select').on('change', function() {
 $('.stories ul').empty();
    //$('img').toggleClass("small-logo", "large-logo",);
    //$('header').toggleClass("site-header-small", "site-header-large", 2000, "easeOutQuad");

    $( "img" ).removeClass( "large-logo", 1000, "easeOutQuad").addClass( "small-logo", 1000, "easeOutQuad");

    var select = $('#sections').val();
    console.log(select)

    $.ajax({

      method: 'GET',
      url: 'https://api.nytimes.com/svc/topstories/v2/' + select + '.json?api-key=133064f593064b5a9b82e24190084a92'
    }).done(function(data) {

if (data.results.length === 0) {
          $('.story-grid').append("<p>There appears to be no stories in this section.</p>");
        }
        else {
          var news = data.results;
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
});
});


