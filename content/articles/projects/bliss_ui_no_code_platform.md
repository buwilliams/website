---
title: Bliss UI
description: No-code app platform to remove barriers to inspiration
createdAt: "2021-03-24:00:00.000Z"
---

## I've been putting this off

It's time to tell you about my baby: Bliss UI. I wrote this project from 2016-2018. For years, I've kept the source 
code private and refrained from writing about it. It's a sore subject because I was so passionate 
about it's mission and the work I did to make a dream a reality. Where's the problem you ask? Well... it failed. 
It didn't fail because of design or technology. It failed for very human reasons which I'll get into 
below. But, the time has come to talk about it. So, let's get to it.

## Big problems with App development

Big problem #1 - Application development takes too long. We should be able to have an idea and see it in action instantly not over the course of months.

Big problem #2 - There exists a wall between design and development. There is no tool to fully bring these disciplines together. Bringing these disciplines together creates a new type of worker, an app designer.

Big problem #3 - The industry is producing many prototyping tools but they are not solving the heart of the problem: working apps. We need actual working software not prototypes.

Big problem #4 - Programmers want to code. Designers are intimidated by code. We need to tear down this intimidating wall so that the best of both worlds may come together to innovate.

Big problem #5 - Applications have become unwieldy. Applications perform poorly due to poor architecture. We need a solution which addresses performance by default without the need to deep analysis.

## WHY should we work these problems?

Inspiration leads to experimentation. Experimentation leads to discovery. Discovery is the key to innovation. In other words, we need to be able to play with our ideas, change directions, tune, and change again. This is how we can create compelling products.

We are removing barriers to inspiration. By removing these barriers our customers will be able to quickly “see” and “touch” their ideas quicker than ever before.

By reducing the “feedback loop” we increase inspiration and that makes for a more compelling world to live in. It’s about creating an inspiring world.

## HOW can we do this?

- We need a platform that brings design and development together.
- We need to replace coding with visual design so that more people may bring their ideas to life.
- We need to be able to leverage the work of others so that it takes us less time to build our applications.
- We need to support popular devices (mobile and web) so that we can meet users where they are.

## WHAT is Bliss UI?

The five parts of Bliss UI:

1. Data structure - defines the parts of an app
2. Compiler - that understands how to build apps
3. Editor - a visual editor that makes it easy to progressively create apps
4. Deploy - distributes apps to the internet for consumption and sharing
5. Marketplace - shareable components, websites, and integrations

Bliss UI uses a special Data Structure to define applications. The Editor is used to quickly iterate app design. The Compiler then generates an app based on customer preference. Finally, we Deploy this app to the internet and Marketplace.

## Preview of Bliss UI

<bliss-slideshow></bliss-slideshow>

These are just a few screenshots to showcase the working prototype. Next, I'll go over the various parts of Bliss UI in more detail.

1. Data structure
2. Editor
3. Compiler

## I. Data structure

The core of Bliss UI is a data structure which describes a web application. The 
compiler takes this data structure and compiles it into an application. It's a 
simple idea but it has a lot of implications.

1. Changing the core data structure means changing the platform version number. It's tough to be backwards compatible.
2. Code becomes data which shares similar implications to a [Lisp](http://www.paulgraham.com/onlisp.html). Because code is data, it's flexible: copy, remove, and tranformations.

The data structure is written as a nested [doubly linked list](https://en.wikipedia.org/wiki/Doubly_linked_list) to represent a tree-like structure. Each node has a `parent`, `child`, `next`, and `prev` id pointers stored in a flat structure but representing a tree structure. 
This took the pain out of working with JSON. To see this, look to the `components` key below.

```javascript
{
    "name": "New Project",
    "compiler": "react",
    "version": "v0.2",
    "type": "app",
    "build": "designer",
    "nextId": 3,
    "rootId": "1",
    "externalCss": [],
    "externalJs": [
        "node_modules/react/dist/react.js",
        "node_modules/react-dom/dist/react-dom.js"
    ],
    "state": {},
    "packages": [
        {
        "name": "react",
        "version": "15.4.2"
        },
        {
        "name": "react-dom",
        "version": "15.4.2"
        }
    ],
    "js": [
        {
        "name": "init",
        "body": "function() { app.render(); }"
        }
    ],
    "cssVars": [],
    "css": [],
    "load": [
        "init"
    ],
    "components": {
        "1": {
        "id": "1",
        "name": "New Project",
        "element": "div",
        "text": null,
        "attributes": [],
        "css": [],
        "js": [],
        "dynamicAttributes": [],
        "next": null,
        "previous": null,
        "child": "2",
        "parent": null
        },
        "2": {
        "id": "2",
        "name": "new_2",
        "element": "div",
        "text": null,
        "textFn": null,
        "ifFn": null,
        "repeatFn": null,
        "attributes": [],
        "css": [],
        "js": [],
        "dynamicAttributes": [],
        "next": null,
        "previous": null,
        "child": null,
        "parent": "1"
        }
    }
}
```

## II. Editor (frontend)

The Editor has only two goals:
1. Create a great user-experience.
2. Modify the data structure in JSON to submit to the backend compiler.

Originally, I wrote the Editor in the Bliss UI data structure. It was hard to write the Editor in a data structure. In hindsight, I 
would have wrote the first Editor in normal code then made the transition to the Editor as a data structure, ie. rebuilt the Editor 
with the Editor. This kind of application design is called [bootstrapping](https://en.wikipedia.org/wiki/Bootstrapping_(compilers)).

The Editor had the benefit of not needing to be pretty just functional. Because you can use the Editor to make better Editors it 
becomes a [snowball effect](https://en.wikipedia.org/wiki/Snowball_effect).

## III. Compiler (backend)

With the compiler, I took the easiest approach, rather than build complex understanding into the compiler I settled on 
[string concatenation](https://en.wikipedia.org/wiki/Concatenation). This made my development time short. Writing the 
compiler wasn't difficult and was easy to test. I merely needed to loop through the data structure and build a large 
string which represented the application.

This is a random sample of compiler code:

```javascript
const parse5 = require('parse5');

module.exports = {
  parse: function(htmlString) {
    var parsed = parse5.parse(htmlString);
    return parsed;
  },

  parseFragment: function(htmlString) {
    var parsed = parse5.parseFragment(htmlString);
    return parsed;
  },

  appendComponent: function(htmlRef, projectJson, parentId) {
    var component = {
      "id": null,
      "name": htmlRef.tagName,
      "element": htmlRef.tagName,
      "text": null,
      "attributes": [],
      "dynamicAttributes": [],
      "css": [],
      "js": [],
      "next": null,
      "previous": null,
      "child": null,
      "parent": null
    };

    var newId = String(projectJson.nextId++);

    htmlRef.attrs.forEach(function(attr) {
      component.attributes.push(attr);
    });

    // add component to projectJson
    component.id = newId;
    projectJson.components[component.id] = component;

    // update ids
    var parent = projectJson.components[parentId];
    if(parent.child !== null) {
      var last = projectJson.components[parent.child];
      while(last.next !== null) {
        last = projectJson.components[last.next];
      }
      last.next = component.id;
      component.previous = last.id;
    } else {
      parent.child = component.id;
    }

    component.parent = parent.id;

    return component.id;
  },

  toProject: function(htmlString, projectJson, parentId) {
    var frag = this.parseFragment(htmlString);
    return this._toProject(frag.childNodes[0], projectJson, parentId);
  },

  _toProject: function(htmlRef, projectJson, parentId) {
    var that = this;
    var newId = this.appendComponent(htmlRef, projectJson, parentId);
    var newComp = projectJson.components[newId];

    // collect text nodes
    var text = "";
    htmlRef.childNodes.forEach(function(node) {
      if(node.nodeName === "#text") {
        text += node.value.trim();
      }
    });
    newComp.text = text;

    // determine if there is a text node
    htmlRef.childNodes.forEach(function(node) {
      if(node.nodeName !== "#text") {
        return that._toProject(node, projectJson, newId);
      }
    });

    return projectJson;
  }
};
```

## The power of these concepts

With these three concepts: `data structure`, `editor`, and `compiler` I was able to build a platform that could build it's self. The 
goal was to remove the barriers to inspiration and I came close to achieving that. 

## What happened to Bliss UI?

Unfortunately, my co-founder and I didn't see eye 
to eye about control of the company we were building. The project was shutdown because of that and bridges were burned.

I would of course do things differently today. I wouldn't have fought so hard for control. I would have instead leaned on trust. 
It's a normal part of life to make mistakes and grow. I have regrets but I'm proud of my work on Bliss UI.

## Conclusion

Today, I'm releasing the source code to the public. It may not impress you but for years, it was my baby. I've moved on to other 
interesting projects. Sometime, I'll tell you about my latest projects such as my Multi-planetary Sustainability project. Until then, 
I hope you can find inspiration from this project.

You can view the [full source for Bliss UI here](https://github.com/buwilliams/bliss-0.2).
