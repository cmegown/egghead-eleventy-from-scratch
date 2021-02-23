---
layout: 'base.njk'
title: 'Hello, World!'
templateEngineOverride: njk,md
---

This is the home page.

## From the blog

{% for post in collections.posts | randomPost %}
<a href="{{ post.url }}">{{ post.data.title }}</a>
{% endfor %}

## Articles

<ul>
{% for article in collections.articles %}
<li>
    <a href="{{ article.url }}">{{ article.data.title }}</a>
</li>
{% endfor %}
</ul>