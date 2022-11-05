---
layout: ../../../layouts/BlogPostLayout.astro
title: Using one or multiple indices to handle
slug: multiple-indices
excerpt: "**Depending on your use case**, you can use either one index for each
  language or one for all languages."
date: November 5, 2022 12:54 PM
author: Sumit
category: Payments
thumbnail: /assets/light-2.jpg
---
**Depending on your use case**, you can use either one index for each language or one for all languages. The following questions can help you decide which approach is best for your use case:

* [Use multiple indices, *one for each language*](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/how-to/multilingual-search/#one-index-per-language), if:

  * You need a [custom ranking](https://www.algolia.com/doc/guides/managing-results/must-do/custom-ranking/) per language/country. For example, you want to sort by price, and there are different pricing structures in different countries.
  * You want to support many languages.
* [Use one index for all languages](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/how-to/multilingual-search/#one-index-for-all-records), if:

  * You want to support querying in multiple languages. For example, an Arabic-speaking user might use Arabic text for some words and the Roman alphabet for brand names.