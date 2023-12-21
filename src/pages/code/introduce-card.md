---
layout: ../../layouts/MarkdownLayout.astro
title: 自己紹介カードの作成
description: よくある自己紹介カードを作ってSNSなどへの導線を用意します。
slug: introduce-card
category: code
tags:
  - Astro
  - daisyUI
created_at: 2023/12/22
---

# 自己紹介カードの作成

## 自己紹介カード

このブログ、上部にデカデカと Yami0Thiele だなんて書いているのですが、Twitter (X) のリンクとかも何もなく、誰がやっているかわからないという問題があります。（今更ですね）

ということでブログなどにありがちな自己紹介カードを作ってみます。

## 方針

daisyUI を導入したので、基本的に daisyUI にあるものを参考にします。
カードを参考に実装しましょう。

- [daisyUI card](https://daisyui.com/components/card/)

`/components/introduce/Card.astro` に書いていきます。

複数人管理のブログであれば prop を受け取るように実装すれば良いのでしょうが、このブログは私しか記事を書かないので汎用性は捨てます。

## プラグインの追加

アイコンをリンクにするとかっこいいのでアイコンを使えるようにしておきます。

[natemoo-re/astro-icon](https://github.com/natemoo-re/astro-icon)

```bash
npm i astro-icon
```

.astro 内で以下のようにアイコンを使えるようになります。便利です。

```ts
import { Icon } from "astro-icon";
```

```ts
<Icon name="mdi:github">
```

## 画像の挿入

プロフィール画像としてローカル画像を使いたいです。Astroに画像を最適化して配信してもらうためには Astro のドキュメントにあるとおり、`src` 配下に画像を置いてその画像をインポートして使う必要があります。

[.astroファイル内の画像](https://docs.astro.build/ja/guides/images/#astro%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E5%86%85%E3%81%AE%E7%94%BB%E5%83%8F)

今回は `/introduce/assets/Avatar.jpg` を用意し、`Card.astro` の中で以下のようにインポートしました。

```ts
import { Image } from "astro:assets";
import AvatarImage from "./assets/Avatar.jpg";
```

これで以下のようにして画像を表示できます。 `src`と`alt`は必須です。

```ts
<Image src={AvatarImage} alt="アバター画像" />
```

あとは適当に実装すればカードの出来上がりです！この記事の下に配置されてます。

