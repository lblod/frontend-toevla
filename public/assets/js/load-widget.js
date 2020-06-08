  //replace script tag with a div tag
  var randId= Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

  var element=document.getElementById('toevla-widget');
  var dataResource=element.getAttribute("data-resource");

  element.outerHTML = "<div id='"+randId+"' data-resource='"+dataResource+"'></div>";

  //load the ember app
  var MyApp=require('frontend-toevla/app');
  var App = MyApp.default.create({ autoboot: false });
  App.visit(``, { rootElement: '#'+randId, location: 'none' });
