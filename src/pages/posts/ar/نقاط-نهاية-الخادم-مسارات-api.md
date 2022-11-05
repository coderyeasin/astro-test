---
layout: ../../../layouts/BlogPostLayout.astro
title: نقاط نهاية الخادم (مسارات API)
slug: نقاط نهاية الخادم
excerpt: فيما يلي بعض الأسئلة الأكثر شيوعًا التي نتلقاها.
date: November 5, 2022 2:23 PM
author: نحن
category: Payments
thumbnail: /assets/light-2.jpg
---
Everything described in the static file endpoints section can also be used in SSR mode: files can export a `get` function which receives a [context object](https://docs.astro.build/en/reference/api-reference/#endpoint-context) with properties similar to the `Astro` global.

But, unlike in `static` mode, when you configure `server` mode, the endpoints will be built when they are requested. This unlocks new features that are unavailable at build time, and allows you to build API routes that listen for requests and securely execute code on the server at runtime.

 NOTE

Be sure to [enable SSR](https://docs.astro.build/en/guides/server-side-rendering/#enabling-ssr-in-your-project) before trying these examples.

Server endpoints can access `params` without exporting `getStaticPaths`, and they can return a [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) object, allowing you to set status codes and headers: