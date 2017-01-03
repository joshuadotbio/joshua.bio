---
---

{% include js/jquery-3.1.1.min.js %}
{% include js/isotope.pkgd.min.js %}
{% include js/dropcap.min.js %}

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
})
