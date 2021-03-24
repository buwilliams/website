---
title: Bliss UI
description: No-code app platform to remove barriers to inspiration
createdAt: "2018-05-25:00:00.000Z"
---

You can view the [full source here](https://github.com/buwilliams/bliss-0.2).

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

We are doing this today.

## Preview of Bliss UI

<bliss-slideshow></bliss-slideshow>

These are just a few screenshots to showcase the working prototype.

## The data structure

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