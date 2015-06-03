# Cleanslate

Full site: [cleanslatecss.com](http://cleanslatecss.com)

**Cleanslate is an extreme CSS reset stylesheet.** It is used to reset the styling of an HTML element and all its children, back to default CSS values. It is composed exclusively of [!important rules](http://www.w3.org/TR/CSS2/cascade.html#important-rules), which override all other types of rules.

It does not require any JavaScript – it’s just a CSS stylesheet. However, you may find it useful when used within JavaScript widgets, such as those created by [Sqwidget](https://github.com/premasagar/sqwidget).

If you have any feedback or questions, please raise an [issue](https://github.com/premasagar/cleanslate/issues) or contact [@premasagar](http://twitter.com/premasagar). Feel free to fork and improve the code.


Usage
-----

1. Include a `<link>` to cleanslate.css in the host page
2. Add the class `cleanslate` to the HTML container element of the widget
3. Add `!important` to all of the widget's CSS rules
4. (optional) Set the default styles on the widget container

For more details, see ['Usage'](http://cleanslatecss.com/usage/).


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


Pull requests
-------------

Pull requests are welcome. Please comment on the reason for the change.
