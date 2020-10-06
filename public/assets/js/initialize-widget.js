(function() {
  //replace script tag with a div tag
  var elements = document.querySelectorAll('script[typeof="http://data.toegankelijk.vlaanderen.be/ns/Widget"]');
  // var randId="widget-" + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

  for( var i = 0; i < elements.length ; i++ ){
    var element = elements[i];
    var resource=element.getAttribute("resource");
    element.outerHTML = '<div resource="' + resource + '" typeof="http://data.toegankelijk.vlaanderen.be/ns/Widget"></div>';
    // rebind element to the newly created entity, assumes the same widget is shown only once
    element = document.querySelector('div[resource="' + resource + '"]' + '[typeof="http://data.toegankelijk.vlaanderen.be/ns/Widget"]');

    //load the ember app
    var MyApp=require('frontend-toevla/app');
    var App = MyApp.default.create({ autoboot: false });
    App.visit('/embeddable-widget/' + encodeURIComponent( resource ), { rootElement: element, location: 'none' });
  }
})();
