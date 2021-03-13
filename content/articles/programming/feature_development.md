---
title: Feature Development with N.A.M.
description: Feature development strategies or how to approach introducing change into your system with N.A.M.
img: /images/nam.png
alt: N.A.M. Feature Development
createdAt: "2018-06-08T00:00:00.000Z"
---

Yesterday morning, while working on a new feature, an idea came to me or rather a “pause.” I began to wonder at what I was doing on auto-pilot. So, I stopped and began asking myself questions instead. I started with, “What am I doing?” and “Are there other ways to achieve this goal?” The result of these questions led me to an idea I’m calling, “Feature Development Strategies with nam.” I believe you need some context so let’s start there.

We have an existing email feature. Currently, it supports pulling in all our email into a big bucket (inbox, sent, etc.) which ends up in a big list. We then group these emails into conversations. We are using Vue.js to manage the UI and so we have various supporting components (child and generic components.)

My task is to implement two new features:

- Add basic folder support (new UI/UX)
- Remove conversations since our target API doesn’t fully support them (a sad fact we learned later in the development process.)

The first question came from our lead designer who asked if they should put the new markup into new files or apply them to our existing markup. I suggested we use our existing markup. Sometime later, on a branch, we had the new and improved designs in HTML/SASS/Vue.js form integrated into our existing Vue.js code. There begins my work of making it functional.

It’s around this time that the “pause” happened. As I began to change data structures and rename methods, the code entered a terribly broken state. Our unit tests ceased to be useful and this part of the application no longer worked. It didn’t take long to realize it was going to be several days before the application was working again and several more before all the bugs were worked out (at least the ones we found right away.) I didn’t like this one bit. It gave me that uneasy feeling that something was amiss therefore in walks the “pause.”

## N.A.M. (New, Append, Modify)

As I mentioned earlier, I began to ask myself questions, “What am I doing?” The answer was simply, “I’m adding a new feature to an existing one.” The second question is, “What are my options for achieving this goal?” The answer to the second is where the real magic is reveled.

I came up with three answers:

- Modify, restructure the existing code until it’s working again.
- Append, leave the existing code but append new features to it while maintaining a working state (ie. having the original email list and also a new folder list alongside each other)
- New, create new code from scratch with a copy/paste reuse strategy.
It was naming these options that allowed me to continue my quest in understanding the problem. To understand the these options I began to ask myself about the properties of each option. So, let’s do that now.

### 1. **Modify** existing code

Pros:

- Existing code infrastructure is maintained
- Unit tests keep you safe
- There is little to no cleanup since it’s handled during the restructure
- Works well on small changes (can be used on larger changes if developers are educated/skilled enough to produce quality code from it)

Cons:

- System is broken until the restructuring is finished
- Doesn’t work well with big changes since you enter a nasty broken state
- Unit tests do not help because they produce many false positives

### 2. **Append** to existing code

Pros:

- Existing code infrastructure maintained
- System continues to work as expected
- Works well with medium sized changes since you keep the existing code infrastructure

Cons:

- The system is in a weird state supporting multiple features for a time (the UI will look funny)
- Cleanup happens at the end of development and can be hairy since you want to ensure you remove only the parts that are no longer needed. Unit tests can help marginally.

### 3. **New** code

Pros:

- Clear mental model since it’s we’re working from scratch
- Working code the whole way through since each new change is built upon the last
- Reuse via copy/paste from existing features
- Works well on large changes

Cons:

- No existing code infrastructure to rely on
- Easy to miss smaller features you forgot needed to exist
- Bug fixes from previous changes can be lost easily
- No unit tests to help
- Developers are in love with D.R.Y. and terrified of copy reuse. We need to understand that our principals are just that principals. They are not laws they are guides.

## Terms — Refactoring and Restructuring

During a discussion with a co-worker (and friend) they suggested I use the term, “restructuring” rather than “refactoring.” The definition of refactoring is, “Code refactoring is the process of restructuring existing computer code — changing the factoring — without changing its external behavior.” Therefore, refactoring is a sub-set of “code restructuring.” In this article, I am definitely talking about “changing its external behavior” and therefore “refactoring” isn’t the right word.

The point they make well is that there is an indirect path to refactoring which leaves the system in a working state. You achieve this by finding the smallest possible points of change/abstractions to keep the system functional. For example, say you have a map with an array but you want to flatten the array across more maps, you can “refactor” the array to have a single item within the map and just produce more maps.

```
[{ stuff: [0, 1, 2, …] }] becomes [{ stuff: [0] }, {stuff: [0]}]
```

He argues that “refactoring” is usually better and quicker than using “New.” As for me, I find that it really depends on the bigness of the data structure change.

## When to use what — follow the data structure

Okay, let’s assume that we all agree that these are our options for introducing change and that these properties are enough to convince us on when to use which option. How do you determine if a change is small, medium, or large? I found that I could get a good idea of how large a change/addition is by following the data structure. How much of a change am I making to the existing data structures? Am I changing the core data structure from which all the code relies? This, I believe, is the core question to think about.

Understanding how much of a data structure change is happening will likely tell us of how big the ripple effect will be in our code. This style of thinking can be applied in many ways from fixing bugs to designing systems but that is for another post.

## Conclusion — N.A.M.

Now we have a nice framework (N.A.M.) for thinking about introducing new features to our system. It at the very least it gives us a mental model where we can have intelligent discussions about what we are doing. At most, you get a system that continues to work as expected while you change it to fit the needs of our users.

After thinking through this idea, I brought in a couple of other people from our team to discuss the “NAM.” They were excited, exclaiming, “This is the most interesting engineering conversation I’ve had ever.” One of our designers was thinking they could apply it to their design process. Could it help you in unexpected ways? I hope so.

What I find so interesting about this mental model is that as developers we are constantly trying to make our code reusable and D.R.Y. yet in this context we have a new set of thinking that can help us use the right tool for the job. Even at a superficial level we can see that making data changes will impact our system is different ways (small, medium, large ones.) Does this then led us to think on the limits of reuse? It does for me at least.

Going back to the original question that our led designer asked me, “Do you want the new markup in new files or should I modify the existing ones?” Hopping in my time machine, I’m now saying, “new please.”