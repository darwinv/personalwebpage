$(document).ready(function () {
    $("#nanogallery4").nanoGallery({
        thumbnailWidth:500,
        thumbnailHeight:'auto',
        thumbnailHoverEffect: 'labelSlideUpTop',
        colorScheme:'light',
        items: [
            {
                // image url
                src: 'images/orangetravel.png',
                // thumbnail url
                srct: 'images/thumb_orangetravel.jpeg',
                // Title
                title: 'Orange Travel Assist ',
                // Description
                description : 'image 1 description'
            },
            {
                src: 'images/sistemascalderon.png',
                srct: 'images/sistemascalderon.png',
                title: 'Sistemas Calderon'
            },
            {
              src: 'images/electronics.png',
              srct: 'images/electronics.png',
              title: 'Electronics Company'

            }
        ]
    });
  });
