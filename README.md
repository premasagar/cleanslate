About this project
-------------------

Dharmafly Docs is a Github Pages templating system. It allows project members to create a website for their Dharmafly projects.


About this branch
-----------------

This is the development branch. If you're looking to create a website for your Dharmafly project, see the main [README] (https://github.com/dharmafly/dharmafly-docs)

If you're looking to update the general Dharmafly Docs template, carry out all development work on Dharmafly Docs in this branch.

This branch is also the working code for the [Dharmafly Docs project website] (http://dharmafly.github.com/dharmafly-docs/), which contains the styleguide.

The [`master` branch] (https://github.com/dharmafly/dharmafly-docs) contains an empty template, reflecting the latest code and should be used by project developers to generate new project websites.

Updating an existing project
-----------------------------

Full documentation can be found on the main [README] (https://github.com/dharmafly/dharmafly-docs#updating-an-existing-project)


How Can I set up a new Dharmafly project website?
----------------------------

<<<<<<< HEAD
Full documentation can be found on the main [README] (https://github.com/dharmafly/dharmafly-docs#https://github.com/dharmafly/dharmafly-docs#how-can-i-set-up-a-new-dharmafly-project-website)
=======
If your environment has a working [Ruby](http://www.ruby-lang.org/) installation you can [download this Rakefile](https://github.com/downloads/dharmafly/dharmafly-docs/Rakefile) to your project's working branch and run `rake build` to setup Dharmafly Docs in a new gh-pages branch. You can find the Rakefile documentation here https://github.com/dharmafly/dharmafly-docs/wiki/Rakefile-Guide

If you don't have access to Ruby or if the Rakefile fails, then follow the steps below to setup Dharmafly Docs.

1. Firstly, navigate to your project's local directory.

2. Create an empty `gh-pages` branch:

     `git checkout --orphan gh-pages`

3. To prevent merge conflicts when you pull from dharmafly-docs, remove any files
 which came from the last branch you were working on.

     `git rm -rf .`

  (INFO: Make sure to remove any untracked files as well, as these may be candidates for merge conflicts. For example, hidden files like `.DS_STORE`)

3. Add a link to the dharmafly-docs repository: `git remote add dharmafly-docs git@github.com:dharmafly/dharmafly-docs.git`
>>>>>>> 9ed7bd1c4c295ffc4110f7e61f438eb9bb0815f4

Getting started
===================

How do I update the Dharmafly Docs project itself?
--------------------------------------

This is the development branch, you should carry out all work in this branch. 

Once pushed to this branch (`git push origin gh-pages`), Github will automatically regenerate the [Dharmafly Docs project website] (http://dharmafly.github.com/dharmafly-docs/).

To update the [`master` branch] (https://github.com/dharmafly/dharmafly-docs), switch to the master branch (`git checkout master`), then pull the changes made in this branch (`git pull origin gh-pages`). This will result in a merge conflict with the `README.md` (as the content on the `master` branch is different to this README). The temporary fix for this is to copy the current `master` README from https://github.com/dharmafly/dharmafly-docs/blob/master/README.md and then `add`, `commit` and `push`.

The site structure
------------------------

The main frameworks (`<head>`,`<body>` tags, and so on) are within the `_layouts` folder. The `default.html` layout is used currently on all pages.

This contains a liquid tag for the variable `{{ content }}`, a liquid reserved word, used for the content of 'this' page. So if the user has gone to the site home page, then `index.html` will be the `content`. If you've gone to `/reference/`, then `/reference/index.html` will be the `content`

Adding new pages
-------------------

Templating using liquid
----------------------

Updating the CSS
-----------------

<<<<<<< HEAD
### Creating new themes / colour schemes
=======
WARNING: If posts do not have either one of these prologues, they won't be displayed.

In addition to the category, you can also add the optional `heading` variable. This will override the default post heading when it is rendered on the page (the default being the post's filename). The `heading` variable should be used like so:

    ---
    category: about
    heading: "Post Heading"
    ---
    
Complex characters and html are also permitted:

    ---
    category: about
    heading: "Why I love the <code>!important</code> rule"
    ---
>>>>>>> 9ed7bd1c4c295ffc4110f7e61f438eb9bb0815f4

Blocks of code in posts
--------------------------

<<<<<<< HEAD
### Code highlighting themes
=======
The language icon is on the top right hand side of the main content under the github and twitter icons. It's there to quickly show site visitors the main focus of the project.

To change the language icon, edit the `_config.yml`

    # javascript, css or html5
    LANG: javascript

There are icons for JavaScript, CSS and HTML5.

Adding your project code to the page
----------------------------------------

To add your own JavaScript files to the page to be available to the code blocks, edit the `_config.yml`:

    SCRIPTS:
    - src: https://raw.github.com/dharmafly/jquery.promises/master/image.js
    - src: https://raw.github.com/dharmafly/jquery.promises/master/timer.js

Otherwise just leave the 'src' blank.

The examples here use files from the [jquery.promises](http://jquerypromises.com/) project.


Adding a link to your twitter account
-------------------------------------

If your project has a twitter account, you can add a link to it in the `_config.yml`.

    TWITTER_PROJECT_URL: https://twitter.com/dharmafly

An icon will appear on the right hand side under the github icon for your project.


Adding a download button
------------------------

The site will already include a link to your project. If you have a downloadable zip of your project, you can add this by editing the `_config.yml`.

    GITHUB_ZIP_URL: https://github.com/dharmafly/dharmafly-docs/zipball/gh-pages

This will add a download button to your site.

Updating the Overview page reference text
-----------------------------------------

The last section on the overview page is a link to the reference section. 

This link isn't editable via the `_config.yml`, but the text introducing it can be changed through the `REFERENCE_LINK_TEXT` variable
in the in the `_config.yml`. For example:

    REFERENCE_LINK_TEXT: "Complete documentation can be found here:"


Adding a quote to your project
------------------------------

If you have a quote that sums up the ideas in your project, you can optionally add it by editing the `_config.yml`.

    QUOTE:
      quote:  Promises are the uniquely human way of ordering the future, making it predictable and reliable to the extent that this is humanly possible.
      cite: Hannah Arendt

Including Google Analytics tracking
-----------------------------------

Add your Google Analytics web property ID (in the form 'UA-XXXXX-X') within `_config.yml`. E.g.

    GA_ID: UA-XXXXX-X


Changing the project colourscheme and style
-------------------------------------------

Currently, only the default theme is available. Once alternate themes are implemented, you can chnage theme by updating the `THEME` variable.

Formatting your posts
====================

Special sections
----------------

To add a highlighted version of text (for example for your project name) within the overview section, add the following html.

    <span class="project_name">Project Name</span>

If this is at the beginning of the line, you need to add an invisible unicode character as follows, due to [this bug] (http://groups.google.com/group/pdoc/browse_thread/thread/725e4809de2fcc18)

    &#8291;<span class="project_name">Project Name</span>

Code Blocks in Posts
---------------------

Any  code blocks in the markdown will be formatted as syntax highlighted code blocks in the website.

If the example uses the `$output` variable or `alert()` then a "run" button will appear next to
the code block allowing the user to run the example.

Each code block is given access to a `$output` variable. This refers to a
jQuery wrapped `<output>` element inserted after the code block.

For example:

    var image = new Image()
    image.src = "my-image.png";
    image.onload = function () {
      $output.append(image);
    }

The code snippet will appear with a run button. In this example, when the image has loaded then
the element will be appended to the output.

The `dharmafly-docs` project
==============================

How can I get bugfixes and enhancements for my `dharmafly-docs` project instance
------------------------------------------------------------------

First recreate the link between your project and `dharmafly-docs`

`git remote add dharmafly-docs git@github.com:dharmafly/dharmafly-docs.git`

Making sure you are in your project's `gh-pages` branch, pull from the 
Dharmafly Docs master branch

`git pull dharmafly-docs master`

You may find minor merge conflicts occur in the `_config.yml`, as it needs to be updated for a project website instance, but is likely to be updated and enhanced in the Dharmafly Docs` `master` branch.

How can I update the styling or format of all Dharmafly project websites?
------------------------------

Changes made to this repository won't automatically be reflected in projects previously created using the code in this repository and the github pages facility.

There's currently no facility to automatically update all instances of Dharmafly Docs with bugfixes. An [issue exists] (https://github.com/dharmafly/dharmafly-docs/issues/8) for this enhancement.

How Can I add a new page (not a new post) to a Dharmafly project
-----------------------------------------------

There's no process yet to do this easily, but [this issue outlines the process required to generalise adding new page levels]
(https://github.com/dharmafly/dharmafly-docs/issues/1)

Is there a process for automatically generating new project websites from project documentation?
----------------------------
>>>>>>> 9ed7bd1c4c295ffc4110f7e61f438eb9bb0815f4

### Allowing users to edit code inline

<<<<<<< HEAD
Responsive design
-------------------------------------

### Breakpoints

### Scrolling

### Resizing

### The subnav

The subnav is shown by default. If the user resizes the screen to a size where the width of the widest link in the subnav is pushed off-screen, then two things happen: the subnav is set `.off-left` and the `.show-subnav` icon is shown in the navigation. Additionally, the subnav is hidden.

If the user clicks on the show subnav icon, then the subnav is set `off-left show-nav`. So it's technically off screen but visible, as the `.content` area's left position is set to a position based on the width of the subnav.

The animation is done by css transforms set on certain properties of those classes.

SVG - how and where it's used
-----------------------------

=======
How do I add a new icon for the coding language my project's about? 
-------------------------------------------------

If the language exists as an icon, please see the [documentation on the gh-pages branch] (https://github.com/dharmafly/dharmafly-docs/#changing-the-language-icon). If not, you can [create a new icon to be available to all projects using dharmafly-docs] (https://github.com/dharmafly/dharmafly-docs/wiki/Adding-a-new-language-icon-to-the-sidebar)
>>>>>>> 9ed7bd1c4c295ffc4110f7e61f438eb9bb0815f4
