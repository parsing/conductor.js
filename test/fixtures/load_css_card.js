Conductor.requireCSS("load_css.css");

Conductor.card({
  activate: function() {
    var lastCSSSheet = document.styleSheets[document.styleSheets.length-1];
    // Test that the CSS has finished loading
    if (lastCSSSheet.cssRules) {
      ok(lastCSSSheet.cssRules[0].style.backgroundColor === "red", "background was set by CSS");
    } else {
      // ie8
      ok(/background-color: red/i.test(lastCSSSheet.cssText), "background was set by CSS");
    }

    start();
  }
});
