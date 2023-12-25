---
layout: ../../layouts/MarkdownLayout.astro
title: Docker環境構築
description: 開発環境を準備していきます
slug: build-environment-for-ifd
category: code
tags:
  - develop
created_at: 2023/12/26
---

# Docker環境構築

## 構成
サブドメインとか切る構成 (`api.example.com`, `example.com`) だとCORSやら色々考える必要があるのでそれはやめてパスでアクセスするリソースを変えるシンプルな構成にする。(`example.com/api/xxx`, `example.com/auth/xxx`, `example.com/xxx`)

これを念頭において nginx を proxy としておいてパスごとにサービスに振り分けてもらうことにする。

## コンテナ
`proxy`, `auth`, `backend`, `rdb` を立ち上げる。
`proxy` は nginx の公式イメージそのもの、 `rdb` は postgres の公式イメージそのものなので説明を端折るとして、`auth` と `backend` について

### `auth`
`php-fpm` と `composer` を突っ込んでおく。後者はコンテナの中で `composer install` できるようにするため。

`composer install` で laravel/laravel をインストールしようとしたときに足りていなかったものを apt-get で取得するようにしている (`git`,`zip`)

`composer` の公式イメージの成果物から `composer` だけもらってくることで色々と面倒な記述を飛ばせる。

大雑把には以下の感じ (これに user追加などが加わる)

```dockerfile
FROM php:8.3-fpm

RUN apt-get update && \
    apt-get install -y git gnupg2 zip

COPY --from=composer /usr/bin/composer /usr/bin/composer
```

### `backend`
`node`を突っ込んでおき、あと `nest start` でサーバーを立ち上げられるように `nestjs/cli` をインストールしておく。
依存パッケージも取得しておく (`yarn --frozen-lockfile`)

だいたい以下の感じ

```dockerfile
FROM node:21-alpine as local

RUN apk add --no-cache libc6-compat
WORKDIR /app

ENV NODE_ENV development

RUN yarn global add @nestjs/cli
COPY --chown=node:node ./backend .

RUN yarn --frozen-lockfile
```

### おわりに

`auth` と `backend` で若干方針が異なる (依存関係のインストールをDockerfileでやる/やらないなどがある) ので後でここは揃える
