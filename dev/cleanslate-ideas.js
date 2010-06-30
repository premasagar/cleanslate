jQuery.fn.cleanslate
jQuery.cleanslate

// both of these are equivalent. they set the default ui for this context
// a) a function
sqwidget.ui(cleanslate);
// b) an id for that function, which is contained in a sqwidget package/plugin
sqwidget.ui('cleanslate');

// apply the function to the DOM element
sqwidget.ui('cleanslate', dom);

sqwidget.ui('aomi');

sqwidget.ui('appleofmyiframe', dom);

cleanslate(); // add cleanslate css stylesheet to window.getElementsByTagName('head')[0], unless already present in the head

cleanslate(dom); // apply cleanslate class to dom

jQuery(elem).cleanslate('css', {border:'red'}); // apply css() rule to element, with !important added

jQuery(elem).css({border:'red'}, true); // an overloaded css() method takes the true argument, and pipes the request to .cleanslate('css')

jQuery.cleanslate.noConflict(); // revert the overlaid native jQuery methods, e.g. css() and animate() back to their untouched states

jQuery(elem).cleanslate({border:'red'})
=== jQuery(elem).cleanslate('css', {border:'red'})
=== jQuery(elem).attr('style', 'border:red!important;')
!== jQuery(elem).attr('style', 'border:red!important; padding:1em;');

/*
1) Write failing tests for each conditional

2) Display the results for each test on a tests.html page

3) Convert them to QUnit

*/

(function($){
    var
        ns = 'cleanslate',
        stylesheetUrl = 'http://example.com/cleanslate.css',
        rand = function(){
            return Math.round(Math.random() * 1000000);
        },
        stylesheet,
        stylesheetId = ns + '-' + rand(),
        jQueryOverriden = {};
        
    function addStylesheet(){
        if (!stylesheet){
            stylesheet =
                $('<link class="' + ns + '" id="' + stylesheetId + '" src=' + stylesheetUrl + '>')
                    .appendTo('head');
        }
        return stylesheet;
    }
    
    $.cleanslate = $.extend(
        function(arg1, arg2){
            if (!arg1){
                addStylesheet();
            }
        },
        
        {
        }
    );
}(jQuery));
