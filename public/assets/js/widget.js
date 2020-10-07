(function() {
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

    var dependencies="\n" +
        '<link href="https://fonts.googleapis.com/css?family=Lato:400,700,900&display=swap" rel="stylesheet">\n' +
        '<link rel="stylesheet" href="https://use.typekit.net/hdv5dxv.css">\n' +
        '<link integrity="" rel="stylesheet" href="https://qa.toegankelijk.vlaanderen.be/assets/widget/vendor.css">\n' +
        '<link integrity="" rel="stylesheet" href="https://qa.toegankelijk.vlaanderen.be/assets/widget/frontend-toevla.css">\n';

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
      document.head.appendChild(frontendScript);
    }

    var initScript = document.createElement("script");
    initScript.type = "text/javascript";
    initScript.async = false;
    initScript.src = "https://qa.toegankelijk.vlaanderen.be/assets/widget/initialize-widget.js";
    document.head.appendChild(initScript);
  });
})();
