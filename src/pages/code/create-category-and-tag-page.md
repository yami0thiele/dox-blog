---
layout: ../../layouts/MarkdownLayout.astro
title: カテゴリとタグページの実装
description: カテゴリ・タグで絞り込んで一覧を表示するページを実装
slug: create-category-and-tag-page
category: code
tags:
  - Astro
created_at: 2023/12/20
---

# カテゴリとタグページの実装

## 概要
一覧ページは全記事を created_at (記事作成日) で並べて表示しているだけ。カテゴリーページ・タグページを実装する。

## 実装
基本的には以下を参考にするだけ。

[Routing #Static (SSG) Mode](https://docs.astro.build/en/core-concepts/routing/#dynamic-routes)

カテゴリ配下には以下のようなページを生成させる
- `/categories/code`
- `/categories/etc`

タグ配下には以下のようなページを生成させる
- `/tags/Astro`

### カテゴリページ

現状、category に対応するディレクトリが `/src/pages/:category` のように置いているので、以下のように記事を取得したいが、これはできない。

```ts
// Astro.glob()は動的変数と文字列補間をサポートしていない
const posts = await Astro.glob<Post>(`../pages/${category}/*.md`);
```

- [トラブルシューティング #Astro.glob()](https://docs.astro.build/ja/guides/troubleshooting/#%E3%82%B5%E3%83%9D%E3%83%BC%E3%83%88%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%82%8B%E5%80%A4)

上記の制約のため、filterするしかない。

```ts
export function getStaticPaths() {
  return [{ params: { category: "code" } }];
}

const { category } = Astro.params;

const posts = await Astro.glob<Post>(`/src/pages/*/*.md`);
```

あとは  `/src/pages/index.astro` の記事の map 部分にfilterを追加

```ts
  posts
    .filter((p) => p.frontmatter.category === category)
    .sort((pa, pb) => orderingOfPosts(pa.frontmatter, pb.frontmatter))
    .map((post) => <PostLi {...post.frontmatter} />)
```

### タグページ

ほぼ一緒で、`getStaticPaths()` と `filter` の箇所を修正するだけ。

```ts
  posts
    .filter((p) => p.frontmatter.tags.includes(tag))
    .sort((pa, pb) => orderingOfPosts(pa.frontmatter, pb.frontmatter))
    .map((post) => <PostLi {...post.frontmatter} />)
```

これでページが出来ました！
- [categories/code](/categories/code)
- [tags/Astro](/tags/Astro)

### その他の修正
- タイトルをindexへのリンクにする
- 見た目に関する軽微な修正
