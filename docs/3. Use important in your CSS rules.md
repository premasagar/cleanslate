---
category: reference
heading: "Use !important in your css rules"
---

For all of your CSS rules that relate to a `cleanslate` element or its children, add the keyword `!important`:

    .myContainer a {
        color:orange !important;
    }
    .myContainer .someOtherThing {
        font-weight:bold !important;
    }