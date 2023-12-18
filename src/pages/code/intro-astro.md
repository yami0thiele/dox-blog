---
layout: ../../layouts/MarkdownLayout.astro
title: Hello Astro!
description: Astroでブログを作りました！
slug: intro-astro
category: code
tags:
  - Astro
created_at: 2023/12/19
---

# Hello Astro!

## 参考資料
- [Zenn を Astro で雑クローン](https://zenn.dev/ogty/articles/3eed4d7a-d1de-4d99-bb48-1b4649a8ad7f)
- [AstroでTailwind CSSを使う](https://uki00a.github.io/blog/articles/006-use-tailwindcss-with-astro/)

※公式ドキュメントなどは省略

## リポジトリ
[yami0thiele/dox-blog](https://github.com/yami0thiele/dox-blog)

## 環境
### 言語
TypeScript

### フレームワーク
Astro
Tailwind

### デプロイ
GitHub -> Cloudflare Pages

## 選択理由
サーバーのメンテナンスとかしたくないのでサーバーレスにしたい。ブログはテキストくらいしか載せる予定はなく、コメント機能なども用意するつもりはないのでCMSはやりすぎ。
マークダウンからHTMLを生成してくれれば十分ということで探してみるとAstroが出てきたので私の目的に一番近いと思って選択。

CloudFlare Pagesは500回/月までのビルドが無料と、私の目的なら無料で使えそうなので選択。とってもありがたい...

## 予定
- 記事の雛形の自動生成
- 一覧へのカテゴリ・タグの表示
- カテゴリ・タグページ作成
