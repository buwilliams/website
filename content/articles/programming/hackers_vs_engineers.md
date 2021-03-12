---
title: Hackers vs. Engineers
description: Comparing the differences between the two.
img: /images/hackers.png
alt: Hacker
---

The hacker asks, “What makes this work?” The engineer asks, “How should this work?” That’s difference between a hacker and an engineer. The hacker is primarily concerned with results. The engineer is primarily concerned with design. There are benefits and drawbacks to each perspective.

## Hackers

Pros:

- Gets work done quickly
- Finds interesting system behaviors
- Major features can be added without rewrites or slowed velocity
- Less understanding is needed to make significant contributions

Cons:

- Code spaghetti
- Increased technical debt
- Team members can have a difficult time understanding why things were done the way they were
- Code impurity and the frustration that results
- Lots of interruptions, you cannot just code because you need to see if it works regularly (it’s not greenfield dev)

## Engineers

Pros:

- Clean code
- Clear mental models
- Fewer “hard to fix” bugs with new systems
- Pleasure of greenfield development

Cons:

- Desire to refactor or rewrite the architecture / mental model as the demands of the real world change
- Frustration from leadership regarding how long things are taking
- Frustration with the code written by hackers on your team

## It’s just a perspective

Hackers and Engineers are just perspectives favoring different concerns. This is a really interesting idea to me. It’s not an innate quality or trait. It’s a simple habit of thinking, a tool. Therefore, it follows that we can use this tool at will. Choosing the right tool for the right job.

## Story Time

The CTO at my company made this point blazingly obvious by his example over the last year. We migrated a large chunk of functionality to a new framework. I watched in horror as he broke all sorts of rules in the new framework to achieve our goals. I despised him for it. The code was an absolute mess! I bitched and complained. He handled it well and stayed the course.

To my surprise, the migration came together quickly. The changes had bugs but by and large it worked well. Later, I understood that the migration was only the first step to making things better. Over the course of the year we made it better and better by fixing things as we added functionality. We were able to continue to “fix” our code without slowing development.

It’s been less than a year since that time. Humble pie tastes yummy! Actually, it does. I’ve been able to see the outcome of this “hacker” strategy play out. In retrospect, if the we had “engineered” the migration, there’s a good chance the project would have left a proverbial bad taste in leadership’s mouth. That bad taste likely would have led to distrust in development’s capabilities.

Now that I understand these perspectives I appreciate them. I do a little hacking with a little engineering. It’s a “both and” instead of “either or” relationship. There’s a balance to it. It’s a tool.

I hope you see the false dichotomy between hacking and engineering. It’s a useful lesson for me at least. There’s also the deeper lesson of being a team player but that’s for another post.