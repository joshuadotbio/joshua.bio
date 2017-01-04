---
---

{% include js/jquery-3.1.1.min.js %}
{% include js/isotope.pkgd.min.js %}
{% include js/dropcap.min.js %}

var phrasings = [];
$.getJSON("/phrasings.json", function(data) {
  phrasings = data.phrasings;
});

function randomNoRepeats(array) {
  var copy = array.slice(0);
  return function() {
    if (copy.length < 1) { copy = array.slice(0); }
    var index = Math.floor(Math.random() * copy.length);
    var item = copy[index];
    copy.splice(index, 1);
    return item;
  };
}

var updatePhrasing = function() {
  var item = randomNoRepeats(phrasings);
  console.log(item);
  $('.phrasing').text(item);
}

$(document).ready(function() {
  updatePhrasing();
});

$(function() {
  $('.post__body p').first().html(function (i, html) {
    return html.replace(/^[^a-zA-Z]*([a-zA-Z])/g, '<span class="dropcap">$1</span>');
  });
  window.Dropcap.layout(document.querySelectorAll(".dropcap"), 3, 2);
});

$(function() {
  $('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true
  })
});
