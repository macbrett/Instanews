INSTANEWS

Instanews is a project utilizing the New York Times API. Upon selection of a subject, the website will populate with the 12 most recent articles from the Times

OVERVIEW

Choose a topic from the scroll list, and the site will populate with relevant articles including images

Click on the text on the image to link to the original article at the Times newspaper.

SAMPLE CODE

$.ajax({

      method: 'GET',
      url: 'https://api.nytimes.com/svc/topstories/v2/' + select + '.json?api-key=133064f593064b5a9b82e24190084a92'
    }).done(function(data) {


THANKS TO:

Teaching staff at RED, classmates, and stack overflow