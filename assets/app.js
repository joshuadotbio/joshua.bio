---
---

{% include js/jquery-3.1.1.min.js %}
{% include js/isotope.pkgd.min.js %}
{% include js/dropcap.min.js %}

var data = $.getJSON("/data.json");

var phrasing = (function() {
  var module = {};
  var last = -1;
  var getIndex = function() {
    do {
      var index = Math.floor(Math.random() * data.responseJSON.phrasing.length);
    } while (index == last);
    last = index;
    return index;
  }
  module.update = function() {
    $('.phrasing').text(data.responseJSON.phrasing[getIndex()]);
  }
  module.getLast = function() {
    return last;
  }
  return module;
})();

data.done(function() {
  phrasing.update();
});

$('.phrasing').click(function() {
  phrasing.update();
});

$('.post-listing').click(function() {
  window.location = this.getAttribute("href");
});

$(function() {
  $('.post-body p').first().html(function (i, html) {
    return html.replace(/^[^a-zA-Z]*([a-zA-Z])/g, '<span class="dropcap">$1</span>');
  });
  window.Dropcap.layout(document.querySelectorAll(".dropcap"), 3, 2);
});
