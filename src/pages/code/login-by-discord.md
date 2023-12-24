---
layout: ../../layouts/MarkdownLayout.astro
title: 「Discordでログイン」の仕様を考える
description: 「Discordでログイン」をどうやって作るかを考えます。
slug: login-by-discord
category: code
tags:
  - develop
created_at: 2023/12/24
---

# 「Discordでログイン」の仕様を考える

## 概要
「Discordと連携して色々やる」を満たすためにとりあえずDiscordのリソースにアクセスできる必要があります。ソーシャルログインを実装できると利便性が良いのでできればソーシャルログインを実装したいということになります。

## 考えるべきこと
もう昔から散々言われている話ですが、OAuth 2.0 は認証に使うものではありません。
「アクセストークンを持っている」というだけでは本人かどうかわからないためです。

[単なる OAuth 2.0 を認証に使うと、車が通れるほどのどでかいセキュリティー・ホールができる](https://www.sakimura.org/2012/02/1487/)

認証用のOpenID connectをDiscordはサポートしていないようなので考える必要があります。

この開発では基本的にフロントエンドとバックエンド(APIサーバー)を分離しようと考えていましたが、バックエンドに送信された値 (例えば認可エンドポイントからのレスポンスに付与される state, code、Discordのトークンを渡す場合はそれ) の本来の持ち主がわからないのでこの機能についてはわけないことにします。

## フロー図
フローは以下のとおりです。このアプリケーションでは最終的にこの認証サービスから渡される `token` (Discordのリソースへのアクセストークンそのものではない) を持っていなければサービス内のデータにアクセスすることはできません。

![フロー図](https://raw.githubusercontent.com/yami0thiele/integrations-for-discord/master/document/feat_authentication/feat_authentication_flow.png)

## リポジトリ
開発は下記で行っています。

[yami0thiele/integrations-for-discord](https://github.com/yami0thiele/integrations-for-discord)

仕様については以下に記載しています。

[仕様](https://github.com/yami0thiele/integrations-for-discord/blob/master/document/feat_authentication/spec.md)

## おわりに
明日はauth用の環境構築かな...
