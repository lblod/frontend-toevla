(function() {
  //replace script tag with a div tag
  var elements = document.querySelectorAll('script[typeof="http://data.toegankelijk.vlaanderen.be/ns/Widget"]');

  for( var i = 0; i < elements.length ; i++ ){
    var element = elements[i];
    var resource=element.getAttribute("resource");
    var source=element.getAttribute("src");
    element.outerHTML = '<div resource="' + resource + '" typeof="http://data.toegankelijk.vlaanderen.be/ns/Widget"></div>';
    // rebind element to the newly created entity, assumes the same widget is shown only once
    element = document.querySelector('div[resource="' + resource + '"]' + '[typeof="http://data.toegankelijk.vlaanderen.be/ns/Widget"]');
    const domain = (new URL( source )).origin;

    //load the ember app
    var Widget =
        require('frontend-toevla/app')
        .default
        .create({ autoboot: false, rootElement: element, location: 'none', ENV: { domain: domain }});
    Widget.visit('/embeddable-widget/' + encodeURIComponent( resource ), { rootElement: element, location: 'none', APP: { domain: "http://qa.toegankelijk.vlaanderen.be" } });
  }
})();
