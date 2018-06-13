'use strict';

/* global document */
(function () {
  var lineId, lines, totalLines, anchorHash;
  var source = document.getElementsByClassName('prettyprint source linenums');
  var i = 0;
  var lineNumber = 0;

  if (source && source[0]) {
    anchorHash = document.location.hash.substring(1);
    lines = source[0].getElementsByTagName('tr');
    totalLines = lines.length;

    for (; i < totalLines; i++) {
      lineNumber++;
      lineId = 'line' + lineNumber;
      lines[i].id = lineId;
      lines[i].classList.add('linenums');
      lines[i].dataset.href = window.location.href.split('#')[0] + "#" + lineId
      if (lineId === anchorHash) {
        lines[i].className += ' selected';
      }
    }
  }
})();

jQuery(document).ready(function($) {
    $(".linenums").click(function() {
        window.location = $(this).data("href");
    });
});