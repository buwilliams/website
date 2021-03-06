---
title: Twitter Clone
description: Simple experiments with Dolt and Dolthub via node.js, express.js, and mysql.
createdAt: "2021-03-07:00:00.000Z"
---

## Overview

Experimenting with [Dolt](https://www.dolthub.com/), a version controlled database. You can also find the [source code here](https://github.com/buwilliams/twitter-clone).

## Why do I find dolt interesting?

- Managing SQL databases is always a pain. Dolt provides a better UX.
- Therefore, prototyping ideas becomes easier, especially since Dolt supports CSV import. This allows me to gradually add features to the database.
- For smaller projects, performance isn't the most important thing.
- Having access to public databases through DoltHub is handy

## Getting Started

- Install dolt `sudo curl -L https://github.com/dolthub/dolt/releases/latest/download/install.sh | sudo bash`
- Clone dolt repo `dolt clone buwilliams/twitter-db`
- Start mysql server `dolt sql-server`
- Clone twitter-clone repo `https://github.com/buwilliams/twitter-clone.git`
- Install deps `yarn install`
- Start express server `yarn run dev:server`

## API

- GET [/user](http://localhost:3001/user)
- GET [/tweet](http://localhost:3001/tweet)

## Links

- [original hacker news post](https://news.ycombinator.com/item?id=22731928)