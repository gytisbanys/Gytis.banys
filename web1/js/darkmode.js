function handleDocumentLoad() {
  var style = document.getElementById("pageStyle");
  var style1 = document.getElementById("pagesStyle");

  checkCookie();

  function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  function checkCookie() {
    var nightmode = getCookie("lights");
    if (nightmode == "off") {
      lightsOff();
    } else {
      lightsOn();
    }
  }

  function lightsOff() {
    document.cookie = "lights = off;  expires = Fri, 31 Dec 9999 23:59:59 GMT";
    style.setAttribute('href', 'stylesdark.css');
    if (style1 !== null) {
      style1.setAttribute('href', 'pagesdark.css');
    }
  }

  function lightsOn() {
    document.cookie = "lights = on;  expires = Fri, 31 Dec 9999 23:59:59 GMT";
    style.setAttribute('href', 'styles.css');
    if (style1 !== null) {
      style1.setAttribute('href', 'pages.css');
    }
  }

  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("lightSwitchOff").addEventListener("click", lightsOn);
    document.getElementById("lightSwitchOn").addEventListener("click", lightsOff);
  });
};

handleDocumentLoad();
