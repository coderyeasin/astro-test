---
layout: ../../../layouts/BlogPostLayout.astro
title: One index per language
slug: one-index
excerpt: Once your records are in different indices, you can select which index
  to target from the front end.
date: November 5, 2022 12:58 PM
author: Sumiya
category: General
thumbnail: /assets/light-3.jpg
---
**This approach simplifies:**

* Index configuration
* Per-language analytics (otherwise, you need to [use analyticsTags](https://www.algolia.com/doc/api-reference/api-parameters/analyticsTags/))
* Creation of per-language [query suggestions](https://www.algolia.com/doc/guides/building-search-ui/ui-and-ux-patterns/query-suggestions/js/).

> ***In this solution, you create one index per language:***

```
[
  {
    "objectID": 1,
    "title": "The Wolf of Wall Street"
  }
]

```

Algolia’s search engine supports all writing systems and [many languages](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/in-depth/supported-languages/), including symbol-based languages such as Chinese and Japanese. Algolia also handles multiple languages on the same website/app, meaning some users could search in French and some in English, using the same Algolia account.

The purpose of this guide is to explain how to organize your indices to enable multi-language search.