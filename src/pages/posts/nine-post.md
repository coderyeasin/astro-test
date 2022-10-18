---
title: You may want to do this when to do this when
slug: you-may-want
excerpt: a relative URL glob of which local files you’d like to import. 
date: 20222-10-10
author: John Fakes
category: General
---
You can also use import.meta.glob() itself in your Astro project. You may want to do this when:

You need this feature in a file that isn’t .astro, like an API route. Astro.glob() is only available in .astro files, while import.meta.glob() is available anywhere in the project.
You don’t want to load each file immediately. import.meta.glob() can return functions that import the file content, rather than returning the content itself.
You want access to each file’s path. import.meta.glob() returns a map of a file’s path to its content, while Astro.glob() returns a list of content.
You want to pass multiple patterns; for example, you want to add a “negative pattern” that filters out certain files. import.meta.glob() can optionally take an array of glob strings, rather than a single string.