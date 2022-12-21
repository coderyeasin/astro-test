---
layout: ../../../layouts/BlogPostLayout.astro
title: Multiple indices to handle or using one
slug: new-multiple-indices
category: Payments
---
**Depending on your use case**, you can use either one index for each language or one for all languages. The following questions can help you decide which approach is best for your use case:

* [Use multiple indices, *one for each language*](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/how-to/multilingual-search/#one-index-per-language), if:

  * You need a [custom ranking](https://www.algolia.com/doc/guides/managing-results/must-do/custom-ranking/) per language/country. For example, you want to sort by price, and there are different pricing structures in different countries.
  * You want to support many languages.
* [Use one index for all languages](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/how-to/multilingual-search/#one-index-for-all-records), if:

  * You want to support querying in multiple languages. For example, an Arabic-speaking user might use Arabic text for some words and the Roman alphabet for brand names.
  * Algolia’s search engine supports all writing systems and [many languages](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/in-depth/supported-languages/), including symbol-based languages such as Chinese and Japanese. Algolia also handles multiple languages on the same website/app, meaning some users could search in French and some in English, using the same Algolia account.

    The purpose of this guide is to explain how to organize your indices to enable multi-language search.

    Algolia’s search engine supports all writing systems and [many languages](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/in-depth/supported-languages/), including symbol-based languages such as Chinese and Japanese. Algolia also handles multiple languages on the same website/app, meaning some users could search in French and some in English, using the same Algolia account.

    The purpose of this guide is to explain how to organize your indices to enable multi-language search.