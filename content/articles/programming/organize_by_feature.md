---
title: Organize by feature
description: Code organization that scales
createdAt: "2018-09-21:00:00.000Z"
---

For the last decade I’ve been organizing projects by Feature. It has a lot of nice properties but many developers do not know about it. So, I’m sharing!

## Base Directories

- **Components** directory contains reusable components. These components must be generic so that they know nothing of any given business concern.
- **Features** directory is about specific business features. This includes any component which is either not generic or must know about specifics of a business problem.
- **Libs** directory containing in-house libraries. These are utility libraries which can we reused anywhere.

## Features Directory

On the surface, it is not clear how organizing code by feature is better than alternatives (such as organizing by kind.) Ordering by feature gives us a clear mental model to work with. This is because we remove unrelated ideas. This means we are able to think about one business feature at a time. If you are working of the “chat” feature then you know where all the appropriate code is stored because it is grouped together. You can, at a glance, understand what parts are involved and where changes could occur. The organization makes the code read like a book.

There is a challenge however, how do we reuse feature code? I’ll do this by providing a mental model for reuse. The names below represent the various types of reuse problems and their ordering solutions.

### 1 — Simple Features

- Definition — a collection of functionality which can logically be given a single name with enough meaning to be understood by the business, also known as a “feature set”
- Simple features live in features/<name>/* directory, examples: chat, profile
- every feature should have at least one entry point named index.(jsx/vue), ex: features/email/index.(jsx/vue)

### 2 — Sub-features

- Definition — a collection of components which make up only part of a feature with a minimum of two components for one is not worthy of a new sub-directory
- Denoted by named subdirectory, ex. Chat Shout = chat/shout/*

### 3 — Shared features (components)

- Definition — a feature component shared inside or outside of it’s feature set
- Denoted by shared_<name>.(jsx/vue)
- It should be stored in the feature set directory of it’s kind.
- The reason these must be special and distinct is so that the programming interface may be designed on purpose. The component cannot make assumptions about it’s context since it’s “shared”

### 4 — Mixed features (components)

- Definition — a component or collection of components which mixes functionality from more than one feature set.
- Identified by mixed_<name A_B_C>.(jsx/vue)
- It is up to the developer to decide which feature directory the mixed component should be placed. Most likely it should be stored with screen/feature where it will be shown
- These are inherently complex components and should be made with careful planning and caution. Beware of side-effects, spaghetti code, and other components which may be using the same data references.

### 5 — Hydra features (there be dragons!)

- Definition — These are a series of components which are “mixed” together across features in a multiple ways. The resulting code is a mess. There are too many concerns being shared across features. In this case, the code should not be shared but rather a new “simple feature” created which is independent of other feature code.

## Order by Feature Example

![directory of files](/images/dir.png)

## Conclusion

I hope this challenges how you have been organizing your code by providing you with new ideas. If you have any questions, feel free to reach out.

Enjoy!