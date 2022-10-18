---
title: Open Authoring
slug: open-authoring
excerpt: you can use Netlify CMS to accept contributions from GitHub users
  without giving them access to your repository.
date: 2022-10-17T05:50:06.482Z
author: Jack Sparrow
category: Payments
thumbnail: /assets/light-1.jpg
galleryImages:
  - image: /assets/light-3.jpg
    alt: lamp in hand
---
When using the GitHub backend, you can use Netlify CMS to accept contributions from GitHub users without giving them access to your repository. When they make changes in the CMS, the CMS forks your repository for them behind the scenes, and all the changes are made to the fork. When the contributor is ready to submit their changes, they can set their draft as ready for review in the CMS. This triggers a pull request to your repository, which you can merge using the GitHub UI.

At the same time, any contributors who *do* have write access to the repository can continue to use Netlify CMS normally.

More details and setup instructions can be found on [the Open Authoring docs page](https://www.netlifycms.org/docs/open-authoring).