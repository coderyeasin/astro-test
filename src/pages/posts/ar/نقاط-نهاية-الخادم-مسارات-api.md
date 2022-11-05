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
يمكن أيضًا استخدام كل ما هو موصوف في قسم نقاط نهاية الملف الثابت في وضع SSR: يمكن للملفات تصدير وظيفة `get` التي تتلقى \[كائن سياق] (https://docs.astro.build/en/reference/api-reference/ # endpoint-Context) بخصائص مشابهة لـ `Astro` global.

ولكن ، على عكس الوضع "الثابت" ، عند تكوين وضع "الخادم" ، سيتم إنشاء نقاط النهاية عند طلبها. يؤدي هذا إلى فتح الميزات الجديدة غير المتوفرة في وقت الإنشاء ، ويسمح لك ببناء مسارات API التي تستمع للطلبات وتنفيذ التعليمات البرمجية بأمان على الخادم في وقت التشغيل.

ملاحظة

تأكد من [تمكين SSR](https://docs.astro.build/en/guides/server-side-rendering/#enopped-ssr-in-your-project) قبل تجربة هذه الأمثلة.

يمكن لنقاط نهاية الخادم الوصول إلى `params` دون تصدير`getStaticPaths` ، ويمكنها إرجاع كائن [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) ، مما يسمح لك لتعيين رموز الحالة والعناوين: