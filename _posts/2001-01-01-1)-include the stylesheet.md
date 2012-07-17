---
category: reference
---

E.g. add this to the host document's `<head>`:

    <link rel="stylesheet" href="http://example.com/cleanslate.css" type="text/css" />

With HTML5, you can optionally trim this down:

    <link rel=stylesheet href="http://example.com/cleanslate.css">

If you are distributing a Javascript widget, then you can add the stylesheet programatically, e.g. with jQuery:

    jQuery('<link rel=stylesheet href="cleanslate.css">')
    .appendTo('head');

Alternatively, if you want to import CleanSlate into another stylesheet or `<style>` element, then you can ["@import"](http://www.w3.org/TR/CSS2/cascade.html#at-import it)

    /* start of stylesheet */
        @import http://example.com/cleanslate.css
    /* your other styles follow */