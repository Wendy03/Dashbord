"use strict";

var url = window.location.pathname;
$('.nav-item').find('a').each(function () {
  $(this).toggleClass('nav-link--active', $(this).attr('href') == url.split("/")[1]);
});
//# sourceMappingURL=all.js.map
