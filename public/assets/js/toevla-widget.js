//check for ready state
function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function(){
  //replace script tag with a div tag
  element=document.getElementById('toevla-widget');
  var dataResource=element.getAttribute("data-resource");
  element.outerHTML = "<div id='toevla-widget' data-resource='"+dataResource+"'></div>";

  //add styles and meta tag
  var head = document.getElementsByTagName('head')[0];
  head.innerHTML = head.innerHTML + `
  <meta name="frontend-toevla/config/environment" content="%7B%22modulePrefix%22%3A%22frontend-toevla%22%2C%22environment%22%3A%22production%22%2C%22rootURL%22%3A%22%2F%22%2C%22locationType%22%3A%22none%22%2C%22EmberENV%22%3A%7B%22FEATURES%22%3A%7B%7D%2C%22EXTEND_PROTOTYPES%22%3A%7B%22Date%22%3Afalse%7D%2C%22_APPLICATION_TEMPLATE_WRAPPER%22%3Afalse%2C%22_DEFAULT_ASYNC_OBSERVERS%22%3Atrue%2C%22_JQUERY_INTEGRATION%22%3Afalse%2C%22_TEMPLATE_ONLY_GLIMMER_COMPONENTS%22%3Atrue%7D%2C%22APP%22%3A%7B%22name%22%3A%22frontend-toevla%22%2C%22version%22%3A%220.0.0%2Bb46a4ad7%22%7D%2C%22exportApplicationGlobal%22%3Afalse%7D" />

  <link href="https://fonts.googleapis.com/css?family=Lato:400,700,900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://use.typekit.net/hdv5dxv.css">

  <link integrity="" rel="stylesheet" href="https://embed-dev.toevla.org/assets/vendor.css">
  <link integrity="" rel="stylesheet" href="https://embed-dev.toevla.org/assets/frontend-toevla.css">
  `;

  //load scripts
  var s = document.createElement("script");
  s.type = "text/javascript";
  s.src = "https://embed-dev.toevla.org/assets/vendor.js";
  s.async = false;
  document.head.appendChild(s);

  var s = document.createElement("script");
  s.type = "text/javascript";
  s.async = false;
  s.src = "https://embed-dev.toevla.org/assets/frontend-toevla.js";
  document.head.appendChild(s);
});
