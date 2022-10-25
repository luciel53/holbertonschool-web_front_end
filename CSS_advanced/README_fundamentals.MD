<h1 align="center">CSS fundamentals</h1>

## Overview

CSS (Cascading Style Sheets) are used to style HTML.

CSS works by:
- selecting an HTML element
- choosing a property to alter
- applying a certain value

## Syntax
```
element-selector {
 one-style-property: value;
 another-style-property: value;
}
```
A property + value is known as a “declaration”. Like this: `text-align: center`;

In general, and for readability purposes, we tend to put each declaration on separate lines like the example above. Some people argue that is better to put everything (element, property and value) in one line (when it has a single declaration), but you might need to add more declarations in the future. Also, placing each declaration on dedicated lines makes the code a lot easier to read and follow.

# Applying CSS to HTML

There are a couple of ways to apply CSS to a HTML project. Let’s review them.

## External stylesheet

An external stylesheet contains CSS in a separate file with a `.css` extension. This is the most commonly used method of adding CSS to a document. You can also link a single CSS file to multiple web pages, styling all of them with the same CSS stylesheet.

Example of an external stylesheet file linked to the HTML:

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Adding Styles</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>Hello CSS!</h1>
  </body>
</html>
```

The external file could look something like this:


```
h1 {
  color: deepskyblue;
  text-align: center;
}
```

## Internal stylesheet

An internal stylesheet resides within an HTML document. To create an internal stylesheet, just place CSS code inside a `<style>` element contained inside `<head>` element of the HTML.

Example of an internal stylesheet file linked to the HTML:

```
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>Adding Styles</title>
  <style>
    h1 {
      color: deepskyblue;
      text-align: center;
    }
  </style>
</head>

<body>
  <h1>Hello CSS!</h1>
</body>

</html>
```

## Inline styles

Inline styles are CSS declarations that affect a single HTML element, contained within a `styleè attribute.

Example of an inline style in an HTML document:

```
<h1 style="color: deepskyblue; text-align: center;">Hello CSS!</h1>
```

Note: Inline styles take precedence over stylesheets, so a inline style will always prevail over any other.

# Invalid CSS

You might be wondering what happens if a browser encounters a CSS selector or declaration it doesn’t recognise?

If a browser is parsing your rules, and encounters a property or value that it doesn’t understand, it ignores it and moves on to the next declaration. It will do this if you have mistyped/misspelled a property or value, or if the property or value is just too new and the browser doesn’t yet support it. Similarly, if a browser encounters a selector that it doesn’t understand, it will just ignore the whole rule and move on to the next one.

For this reason, it’s a good idea to[validate your CSS](https://intranet.hbtn.io/rltoken/14KbObOqm_Gix3hgkbJpoQ). This way, you’ll know right away if something is wrong.

Tip: A browser’s developer tools can also highlight invalid property names or values.

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2021/2/a8fbf48e07c8ef86d9b382e71e83973c6d3d0211.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20221024%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20221024T152247Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=470e3d971f191911cc7204db8287d74f2f5756de1fc9524392d792f8f4c140f1)

 Inspecting a heading element with an invalid value using Google Chrome Developer Tools.

# Resources
CSS first steps - Learn web development | MDN
