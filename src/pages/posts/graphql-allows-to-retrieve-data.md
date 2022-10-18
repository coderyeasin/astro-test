---
title: GraphQL allows to retrieve data
slug: allows-retrieve-data
excerpt: " GitHub's GraphQL API still does not support all mutations necessary
  to completely replace their REST API"
date: 2022-10-13T11:04:01.413Z
author: GraphQL
category: Cards
---
GraphQL allows to retrieve data using less individual API requests compared to a REST API. GitHub's GraphQL API still does not support all mutations necessary to completely replace their REST API, so this feature only calls the new GraphQL API where possible.

You can use the GraphQL API for the GitHub backend by setting `backend.use_graphql` to `true` in your CMS config: