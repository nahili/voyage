export const config = {

  page: {
    defaultImageWidth: "33%",
    defaultSegmentHeight: "auto"
  },

  routes: {
    story: "story",
    storyId: "id",
    gallery: "gallery",
    tales: "tale"
  },

  story: {
    default: "home" // Default story ID to show
  },

  map: {
    defaultPlace: "world",
    defaultZoom: 10, // When no zoom is defined
    service: 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
    options: {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoibmFoaWxpIiwiYSI6ImNqYWpzYmlocDM0cWkzMnE4eHRwZ2xtMXYifQ.JNZbgCZAexq_askkuRBRbw'
    },
    // Polyline options for the travel, see http://leafletjs.com/reference-1.2.0.html#polyline-option
    travelOptions: {
      color: "green"
    }
  }

}
