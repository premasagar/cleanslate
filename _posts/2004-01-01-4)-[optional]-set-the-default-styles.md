---
category: reference
---

CleanSlate automatically applies the following styles to any `cleanslate` element and its children:

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

If you want to override these default styles, then simply add the new values to your own stylesheet. It's best to use a CSS selector that is specific to your content, instead of using `.cleanslate`, in case there are other `.cleanslate` elements on the page. For example:

    .myContainer {
        font-family: Verdana, Arial, sans-serif !important;
        color: #003 !important;
    }