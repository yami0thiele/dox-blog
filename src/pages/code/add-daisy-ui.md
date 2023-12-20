---
layout: ../../layouts/MarkdownLayout.astro
title: daisyUI 101
description: Tailwind CSS 向けコンポーネントライブラリ であるところの daisyUI を導入します。
slug: add-daisy-ui
category: code
tags:
  - Astro
  - daisyUI
created_at: 2023/12/21
---

# daisyUI 101

## 導入のきっかけ
コンポーネントの中にデザインに関するあれこれが閉じるという意味でTailwind CSSのやろうとしていることは個人的に好きなのでTailwind CSSを導入していた。

ただ、導入したはいいものの結局クラスを組み合わせていい感じのデザインを作ることはできておらず、何かそれっぽい組み合わせをコピペするだけになっている。それならBootstrapのようにある程度はコンポーネントごとにデザインの指針がある方がいいだろうということで Tailwind CSS向けコンポーネントライブラリである daisyUI を導入してみる。

## 導入方法
公式ドキュメント参照
- [daisyUI](https://daisyui.com/docs/install/)

```bash
npm i -D daisyui@latest
```

`tailwind.config.mjs` を下記のように書き換える。

```js
export default {
  plugins: [require("daisyui")],
}
```

あとはドキュメントを眺めながら適宜置換していく。

## その他の修正
- 日付の横にアイコンを追加。やっぱりあると見栄えがかわる。