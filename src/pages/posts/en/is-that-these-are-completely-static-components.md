---
title: Is that these are completely static components?
slug: completely-static-components
excerpt: The downside to this, however, is that these are completely static components
date: 2022-10-15T08:57:04.909Z
author: Jessica
category: General
---
The downside to this, however, is that these are completely static components, meaning you can’t use any dynamic logic. Though you can use [dynamic JSX expressions](https://docs.astro.build/en/core-concepts/astro-components/#dynamic-jsx-expressions), these will simply be compiled into static values during the build phase. This is different from a reactive library like React, where you can use dynamic logic that will change the components on the client side.