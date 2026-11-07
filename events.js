// Hides events once their date has passed; no data leaves the browser.
(function () {
  var d = new Date(), pad = function (n) { return (n < 10 ? "0" : "") + n; };
  var today = d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
  var list = document.getElementById("upcoming");
  if (!list) return;
  var past = document.getElementById("past");
  Array.prototype.slice.call(list.children).forEach(function (li) {
    if (li.getAttribute("data-until") < today) {
      if (past) past.insertBefore(li, past.firstChild); else li.remove();
    }
  });
  if (!list.children.length) {
    var sec = document.getElementById("upcoming-sec");
    if (sec) sec.remove();
    var h = document.getElementById("upcoming-h");
    if (h) { h.remove(); list.remove(); }
  }
})();
