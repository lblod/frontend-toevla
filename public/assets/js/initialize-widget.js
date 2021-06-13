(function() {
  // replace script tag with a div tag
  var elements = document.querySelectorAll('script[typeof="http://data.toegankelijk.vlaanderen.be/ns/Widget"]');

  for( var i = 0; i < elements.length ; i++ ){
    var element = elements[i];

    // Extract information from attributes
    var source=element.getAttribute("src");
    var domain = (new URL( source )).origin;

    var resource=element.getAttribute("resource");

    // from https://stackoverflow.com/questions/2970525/converting-any-string-into-camel-case
    var camelize = function(str) {
      return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
      }).replace(/\s+/g, '').replace(/-/g, '');
    };

    var dataAttributes = {};
    for (var attr of element.attributes) {
      let match = attr.name.match( /data-(.+)/);
      if( match ) {
        dataAttributes[ camelize( match[1] ) ] = attr.nodeValue;
      }
    }

    // Replace the widget
    element.outerHTML = '<div resource="' + resource + '" typeof="http://data.toegankelijk.vlaanderen.be/ns/Widget"></div>';
    // rebind element to the newly created entity, assumes the same widget is shown only once
    element = document.querySelector('div[resource="' + resource + '"]' + '[typeof="http://data.toegankelijk.vlaanderen.be/ns/Widget"]');

    console.log( { data: dataAttributes, resource: resource } );

    // Boot the widget
    var Widget =
        // eslint-ignore-next-line no-undef
        require('frontend-toevla/app')
        .default
        .create({ autoboot: false, rootElement: element, locationType: 'none', ENV: { domain: domain, dataAttributes }});
    Widget.visit('/embeddable-widget/' + encodeURIComponent( resource ), { rootElement: element, location: 'none' });
  }
})();
