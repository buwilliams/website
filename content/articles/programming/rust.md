---
title: Review of Rust
description: My take-aways about the Rust programming language after a dedicated week with Rust
img: /images/rust.png
alt: Rust Programming Language
createdAt: "2021-03-22T00:00:00.000Z"
---

I started programming in seventh grade on a TI-99/4a writing BASIC. It was my dream back then to write compiled code but it was beyond me at the time. Maybe if I would have known about the [K&R book](https://en.wikipedia.org/wiki/The_C_Programming_Language) I could have written C but instead a distant family member gave me a giant book on C. It was overwhelming. Years later I read K&R and could code C but never found a professional need to do so. I learned it for the sake of younger Buddy. That feeling has never left me. In some ways, I'm still making that little guy's dreams come true.

I spent some time with C++ but hated it thoroughly so I never made much progress with it. Years later, I found Go. The language didn't have much syntax to wade through. It was nice. I quickly feel in love with Go. Since Go, it's been my top choice for performance backend/cli projects. I prefer it to Node, Ruby, Python, and Java. Yuck... Java. Still leaves a bad taste in my mouth.

## Love affair with Rust

Enter Rust. Now here's a language like C but with native strings and no manual memory management or garbage collection. How could I resist? So, I have a couple weeks vacation, it's time to deep dive!

## The book

I started with [The Rust Programming Language, aka. The Book](https://doc.rust-lang.org/book/). Never, and I mean never, has there been a better programming book than this book. It's made out of 100% pure love. I felt the book was writen without ego or bad assumptions with the mindset of actually helping readers learn. It was a breath of fresh air. All programming books should be written this way. It's a work of art!

[As I worked my way through *The Book*](https://github.com/buwilliams/the-book), I found myself giddy with `rustup` and `cargo`. I found the tooling for Rust to be intutitive and beginner friendly. It is packaged so cleanly. Rust is *batteries included*: packages, compiling, deploying, and testing are all there just waiting for you. I thought to myself, omg, have I found my new favorite programming language? I didn't think the concepts such as borrowing were very difficult to understand. Onward!

I dove deeper by working through [rustlings](https://github.com/rust-lang/rustlings) and [rust by example](https://doc.rust-lang.org/rust-by-example/). I wrote several small apps and was feeling good.

## Tripping on the cracks

It was around this time that cracks began to show. I started to noitce that Rust has some unclear implicit syntax that I struggled to understand, particularly around variable assignment with pointers. As the exercises got more complicated or when I tried to test my knowledge by writing my own app, I found that I'd get stuck and not know what I was doing wrong. The compiler couldn't help me with conceptual errors.

A YouTube video entitled [Back to Go, Rust is Slow](https://www.youtube.com/watch?v=5cEunr8hPE0) spoke to me. I identified with the fact that I couldn't be as productive in Rust, there's just too many rules, too much syntax and implicit magic confusing me.

## Overcoming the cracks

I could overcome these hurdles with more time writing Rust. But in order to do that I'd need to write Rust full-time. In doing so, I'd sacrifice developer productivity even if I did overcome those hurdles. There's more syntax and more rules. That's the sad reality.

## Where I landed

I love the way Rust loves it's users. The documentation, tooling, and community are truly excellent. No garbage collection is so attractive. But in the end, I wouldn't choose it unless I had to write an embedded system, operating system, compiler, or a need for heavy data processing. Go is just so much more productive from a developer perspective. Honestly, I wish Go would take a few notes from Rust regarding it's community. Reading the Go documentation now, it's feels belittling. Overall, however, in 99% of the cases I'd still choose Go.

## Summary

> Obvious replacements for programming languages: Rust instead of C/C++. Go instead of Java, Node, Ruby, and Python. Choosing a performant language that does not compromise developer productivity is an obvious choice. Rust has too many concepts to replace Go.