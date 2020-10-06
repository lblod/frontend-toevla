function() {
  //check for ready state
  function ready(fn) {
    if (document.readyState != 'loading'){
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  ready(function(){
    //add styles and meta tag
  // <meta name="frontend-toevla/config/environment" content="%7B%22modulePrefix%22%3A%22frontend-toevla%22%2C%22environment%22%3A%22production%22%2C%22rootURL%22%3A%22%2F%22%2C%22locationType%22%3A%22auto%22%2C%22EmberENV%22%3A%7B%22FEATURES%22%3A%7B%7D%2C%22EXTEND_PROTOTYPES%22%3A%7B%22Date%22%3Afalse%7D%2C%22_APPLICATION_TEMPLATE_WRAPPER%22%3Afalse%2C%22_DEFAULT_ASYNC_OBSERVERS%22%3Atrue%2C%22_JQUERY_INTEGRATION%22%3Afalse%2C%22_TEMPLATE_ONLY_GLIMMER_COMPONENTS%22%3Atrue%7D%2C%22APP%22%3A%7B%22name%22%3A%22frontend-toevla%22%2C%22version%22%3A%220.0.0%2B56c6dfd2%22%7D%2C%22exportApplicationGlobal%22%3Afalse%7D" />

    var dependencies=`
  <link href="https://fonts.googleapis.com/css?family=Lato:400,700,900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://use.typekit.net/hdv5dxv.css">

  <link integrity="" rel="stylesheet" href="https://qa.toegankelijk.vlaanderen.be/assets/widget/vendor.css">
  <link integrity="" rel="stylesheet" href="https://qa.toegankelijk.vlaanderen.be/assets/widget/frontend-toevla.css">
  `;

    var head = document.getElementsByTagName('head')[0];

    if(!head.innerHTML.includes('<link integrity="" rel="stylesheet" href="https://qa.toegankelijk.vlaanderen.be/assets/widget/frontend-toevla.css">')){
      // Cope with multiple widgets being on the same page
      head.innerHTML = head.innerHTML + dependencies;

      //load scripts
      var vendorScript = document.createElement("script");
      vendorScript.type = "text/javascript";
      vendorScript.src = "https://qa.toegankelijk.vlaanderen.be/assets/widget/vendor.js";
      vendorScript.async = false;
      document.head.appendChild(vendorScript);

      var frontendScript = document.createElement("script");
      frontendScript.type = "text/javascript";
      frontendScript.async = false;
      frontendScript.src = "https://qa.toegankelijk.vlaanderen.be/assets/widget/frontend-toevla.js";
      document.head.appendChild(s);
    }

    var s = document.createElement("script");
    s.type = "text/javascript";
    s.async = false;
    s.src = "https://qa.toegankelijk.vlaanderen.be/assets/widget/initialize-widget.js";
    document.head.appendChild(s);
  });
}();
