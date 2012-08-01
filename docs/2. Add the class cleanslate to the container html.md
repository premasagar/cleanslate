---
category: reference
heading: "2) Add the class <code>'cleanslate'</code> to the container html"
---

The `cleanslate` element will have its styles reset:

    <body>
      <div class="blah">
          <!-- general content is not affected -->
          <div class="myContainer cleanslate">
              <!-- this content will be reset -->
          </div>
      </div>
    </body>

The classes `blah` and `myContainer` in this example are not required. 
The class `cleanslate` _is_ required.

Or, if using jQuery:

    $('.myContainer').addClass('cleanslate');