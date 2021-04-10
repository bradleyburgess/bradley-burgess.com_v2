---
slug: grocery-app-part1
draft: false
date: 2021-04-09T20:59:39.562Z
title: Grocery App, part. 1
category: dev
---

You always hear and read about the importance of building projects in the learning process for new developers. I believe it makes sense to do projects that I would use or feel there is a need for, and so I decided that a good idea would be to make a __grocery list app__.

It would seem on first thought that this might just be a glorified todo app, but there are a couple features that I think will set it apart from other similar apps (at least the free and open source ones):

1. It will be able to be self-hosted via a __docker__ container. (I will hopefully have a hosted, cloud version as well.)
2. It will have an __auto-suggest__ feature for common grocery items with their categories.
3. You will be able to sort / group by category or alphabetically.
4. There will be the capacity for multiple lists, which in my mind represent different stores (e.g. Walmart, Target, etc.) or different purposes (e.g. general household, an upcoming party / event, etc.)
5. I plan to also have a mobile app built with __React Native__.

In the coming weeks I will post updates with some of the project's challenges as well as insights / lessons learned along the way.

The tech stack will be:

- __Frontend:__ React & Typescript, Redux, and probably [Chakra UI](https://chakra-ui.com/) or [Ant Design](https://ant.design/).
- __Backend:__ Express & Typescript, with SQLite as the database.

I know Typescript is probably overkill for an application of this size, but I
have been dabbling with it recently and find it a _huge_ improvement over
regular Javascript. I think it's worth it for the editor experience alone
(auto-complete, catching typos, enforcing props and types, etc.). It just seems
like a no-brainer to adopt Typescript where possible.

I chose SQLite for two reasons:

1. I have tried MongoDB before (which I found neat, especially with Atlas), but have no SQL experience. I think it makes total sense to choose a relational database for an app like this with very structured, predictable, recurring data types, and SQL is the obvious choice.
2. I chose SQLite over MySQL, MariaDB or Postgres because I think it makes sense for a relatively small app that can be housed in a single docker container.

If I do implement a hosted version of the app, I might consider switching to a client-server flavor of SQL.

I'm looking forward to building this, and I think it'll be fun!
