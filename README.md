# Cleanslate

**Cleanslate is an extreme CSS reset stylesheet.** It is used to reset the styling of an HTML element and all its children, back to default CSS values. It is composed exclusively of [!important rules](http://www.w3.org/TR/CSS2/cascade.html#important-rules), which override all other types of rules.

It does not require any JavaScript – it’s just a CSS stylesheet. However, you may find it useful when used within JavaScript widgets, such as those created by the ‘“Sqwidget”:https://github.com/premasagar/sqwidget’ library. If you are using JavaScript, then see the section “Manipulating !important styles with JavaScript” below and check out the [‘Important’ jQuery plugin](https://github.com/premasagar/important).

**If you have any feedback or questions**, or if you’ve found Cleanslate useful, please [raise an issue](https://github.com/premasagar/cleanslate/issues) or tell [@premasagar](http://twitter.com/premasagar). Feel free to fork and improve the code.


Why would I need it?
--------------------

Cleanslate is useful when there are existing CSS styles on a page, and you want to prevent those styles cascading into some part of the page. This is *not* a stylesheet to use when developing your own website (for that, try Eric Meyer’s classic [Reset CSS](http://meyerweb.com/eric/tools/css/reset/) or the [HTML5 Doctors’ adaptation](http://html5doctor.com/html-5-reset-stylesheet)).

The stylesheet can be useful when distributing content (e.g. a widget, or syndicated news) to third-party websites. The CSS rules in the host site may be unknown and unpredictable, or may change in future without notice, or there may be so many websites you need to distribute to that it is impractical to write specific CSS that overrides the styles in each one. In such situations, the Cleanslate stylesheet will aggressively reset your portion of the content (and nothing else) back to some reasonable default values that you can then build from.

Why not just use an iframe?
---------------------------

Third-party content is often distributed in iframes. Because JavaScript within an iframe can be prevented from accessing the host page, iframes are particularly useful when the host site has security concerns and does not explicitly trust the third-party content.

However, iframes have some drawbacks:

-   You cannot display content outside of the box of the iframe
-   It is tricky to resize the iframe to match the size of its contents
-   Your content will be unable to interact with the host page, even if it is trusted
-   Search engines like Google will not see the content on the host page. Content that is syndicated from a partner website can avoid this by being directly included in the host page.

### iframe-based resetting for distributed content

Cleanslate only resets CSS styles. But if you also need to protect your content from JavaScript on the host page, then see ‘“AppleOfMyIframe”:https://github.com/premasagar/appleofmyiframe’, which allows you to inject HTML into a “sourceless” iframe element that the browser treats as being on the same domain as the host.

If your host page needs to isolate and sandbox third-party JavaScript, then you might want to use ‘“Sandie”:https://github.com/premasagar/sandie’.

How does it do it?
------------------

The stylesheet lists all possible HTML elements, and assigns them the default (or otherwise appropriate) values for every CSS property. It only looks within elements that have a `class` attribute of “@cleanslate@”.

How do I use it?
----------------

### 1) Include the stylesheet

E.g. add this to the host document’s `<head>`:

    <link rel="stylesheet" href="http://example.com/cleanslate.css" type="text/css" />

With HTML5, you can optionally trim this down:

    <link rel=stylesheet href="http://example.com/cleanslate.css">

If you are distributing a Javascript widget, then you can add the stylesheet programatically, e.g. with jQuery:

    jQuery('<link rel=stylesheet href="cleanslate.css">')
        .appendTo('head');

Alternatively, if you want to import Cleanslate into another stylesheet or `<style>` element, then you can [@import](http://www.w3.org/TR/CSS2/cascade.html#at-import) it:

    /* start of stylesheet */
        @import http://example.com/cleanslate.css
    /* your other styles follow */

### 2) Add the class `cleanslate` to the HTML container element

The `cleanslate` element will have its styles reset:

    <body>
        <div class="blah">
            <!-- general content is not affected -->
            <div class="myContainer cleanslate">
                <!-- this content will be reset -->
            </div>
        </div>
    </body>

The classes `blah` and `myContainer` in this example are not required. The class `cleanslate` *is* required.

Or, if using jQuery:

    $('.myContainer').addClass('cleanslate');

### 3) Use `!important` in your CSS rules

For all of your CSS rules that relate to a `cleanslate` element or its children, add the keyword `!important`:

    .myContainer a {
        color:orange !important;
    }
    .myContainer .someOtherThing {
        font-weight:bold !important;
    }

### 4) [optional] Set the default styles

Cleanslate automatically applies the following styles to any `cleanslate` element and its children:

    .cleanslate {
        font-family: "Times New Roman", Times, serif !important;
        font-size: medium !important;
        color: black !important;
        line-height: 1 !important;
        direction:ltr !important;
        text-align:left !important;
        font-style:normal !important;
        font-weight:normal !important;
        text-decoration:none !important;
    }

If you want to override these default styles, then simply add the new values to your own stylesheet. It’s best to use a CSS selector that is specific to your content, instead of using `.cleanslate`, in case there are other `.cleanslate` elements on the page. For example:

    .myContainer {
        font-family: Verdana, Arial, sans-serif !important;
        color: #003 !important;
    }

History
-------

This approach, of aggressively resetting the styles on a host page with the use of `!important` rules, came about while developing the [BBC World Service widget](http://www.bbc.co.uk/worldservice/programmes/000000_widget_terms.shtml) (see [this blog post](http://dharmafly.com/bbc-world-service-widget)). The widget is injected into a page, not with an `iframe`, but a simple `<div>` element (the widget’s “lightbox” overlay is similarly just a simple `<div>`). The `!important` styles helped us to prevent any unpredictable CSS “bleeding” into the widget.

Since then, the various rules have been consolidated, cleaned up and extended, to form the Cleanslate stylesheet.

Manipulating `!important` styles with JavaScript
------------------------------------------------

You don’t need to use JavaScript to take advantage of Cleanslate. However, if you do want to manipulate a Cleanslated element with JavaScript, then you will find that you cannot change its styles by manipulating the `elem.style` object, as you might normally. Instead, you will need to edit its `elem.style.cssText` property, or change its `style` attribute.

E.g. bc. elem.style.border = “red”; // won’t work
 elem.style.border = “red !important”; // won’t work
 elem.style.cssText = “border: red !important”; // WILL work
 elem.setAttribute(“style”, “border: red !important”); // WILL work
 //
 jQuery(elem).css(“border”, “red”); // won’t work
 jQuery(elem).css(“border”, “red !important”); // won’t work
 jQuery(elem).attr(“style”, “border: red !important”); // WILL work

If you are using jQuery, you can use the [‘Important’ plugin](https://github.com/premasagar/important) to make this process much more easy. With this, you can add `true` as a third argument to the `css()` method:

    jQuery(elem).css("border", "red", true);

or turn on `!important` handling by default:

    jQuery.important();
    jQuery(elem).css("border", "red");

or make an element’s styles use `!important`:

    jQuery(elem).important();

or not:

    jQuery(elem).important(false);

…amongst other useful features.

References
----------

The following documents were invaluable as building blocks for Cleanslate:

-   Eric Meyer’s Reset CSS – [http://meyerweb.com/eric/tools/css/reset/](http://meyerweb.com/eric/tools/css/reset/)
-   HTML5 Reset Stylesheet by Richard Clark – [http://html5doctor.com/html-5-reset-stylesheet](http://html5doctor.com/html-5-reset-stylesheet)
-   Default stylesheet for HTML 4 – [http://www.w3.org/TR/CSS2/sample.html](http://www.w3.org/TR/CSS2/sample.html)
-   Default stylesheet for Mozilla Firefox – [http://mxr.mozilla.org/mozilla-central/source/layout/style/html.css?raw=1](http://mxr.mozilla.org/mozilla-central/source/layout/style/html.css?raw=1)
-   Default stylesheet for Webkit (in Chromium) – [https://code.google.com/p/chromium/codesearch#chromium/src/third_party/WebKit/Source/core/css/html.css](https://code.google.com/p/chromium/codesearch#chromium/src/third_party/WebKit/Source/core/css/html.css)
-   W3C CSS2 Cascade & Inheritance – [http://www.w3.org/TR/CSS2/cascade.html](http://www.w3.org/TR/CSS2/cascade.html)
-   W3C CSS3 Selectors – [http://www.w3.org/TR/css3-selectors](http://www.w3.org/TR/css3-selectors)
-   List of CSS Properties – [http://meiert.com/en/indices/css-properties/](http://meiert.com/en/indices/css-properties/)
-   CSS 2.1 User Agent Style Sheet Defaults – [http://css-class.com/test/css/defaults/UA-style-sheet-defaults.htm](http://css-class.com/test/css/defaults/UA-style-sheet-defaults.htm)
-   Internet Explorer User Agent Style Sheets – [http://www.iecss.com/](http://www.iecss.com)
