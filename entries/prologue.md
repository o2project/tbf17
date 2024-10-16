# はじめに

クラスレスCSSはHTMLにクラス属性を必要とせず、HTMLを書いてCSSを適用すると良い感じの見た目になるCSSのライブラリを指します。

クラスレスCSSの考え方自体はおそらくリセットCSSから着想されたと考えています。

最初期のリセットCSSはブラウザーが適用しているスタイルをすべて打ち消すものが多かったですが、だんだんとブラウザー間の差異を無くしつつも独自のスタイル定義をするライブラリが出てきました。

- [necolas/normalize.css: A modern alternative to CSS resets](https://github.com/necolas/normalize.css)
- [csstools/sanitize.css: A best-practices CSS foundation](https://github.com/csstools/sanitize.css)
- [filipelinhares/ress: 🚿 A modern CSS reset](https://github.com/filipelinhares/ress)
- [A (more) Modern CSS Reset - Piccalilli](https://piccalil.li/blog/a-more-modern-css-reset/)

また[CSS Zen Garden](https://www.csszengarden.com/)もクラスレスCSSの考え方に影響を与えたと言えそうです。CSS Zen Gardenは2003年に公開されました。同じHTMLを使ってCSSファイルだけを差し替えるだけでページの見た目が変わることを示し、HTMLとCSSを分けることの重要性を世の中に広めました。

さて話をクラスレスCSSに戻すと、クラスレスCSSの源流は2014年に[Markdown CSS](https://github.com/markdowncss)というGitHubのorganizationで複数のCSSライブラリが公開されたところから始まったと考えられます。

Markdown CSSで公開されているライブラリは、Markdownからなんらかの方法を用いて変換されたHTMLを、見た目良く表示することを目的として作られたライブラリのようです。

2015年になると複数のクラスレスCSSライブラリが出てました。最初期にでてきたクラスレスCSSライブラリは下記の2つがあります。

- [mblode/marx: The classless CSS reset (perfect for Communists).](https://github.com/mblode/marx)
- [yegor256/tacit: CSS framework for dummies, without a single CSS class: nicely renders properly formatted HTML5 pages](https://github.com/yegor256/tacit)

## クラスレスCSSがもたらすもの

Tacitの作者は[Tacit, a CSS Framework Without Classes](https://www.yegor256.com/2015/04/13/tacit-css-framework-for-dummies.html)という記事内で次のように書いています。

> I've been using Bootstrap for more than two years in multiple projects, and my frustration has been building. First of all, it’s too massive for a small web app. Second, it is not fully self-sufficient; no matter how much you follow its principles of design, you end up with your own CSS styles anyway. Third, and most importantly, its internal design is messy. Having all this in mind, I created tacit, my own CSS framework, which immediately received positive feedback on Hacker News.
> （筆者による日本語訳）私はBootstrapを2年以上複数のプロジェクトで使い、欲求不満を感じていました。まず小さなWebアプリには大きすぎます。次にどれだけデザイン原則に従ったとしても独自のCSSを定義しなければいけなく、Bootstrap単体で完結することができません。最後にもっとも重要なこととして内部設計が複雑であることです。これらを念頭に置いた上で、私はtacitというCSSフレームワークを作ったところ、Hacker News上ですぐに好意的な反応をもらいました。

記事が書かれた2015年当時は、[Bootstrap](https://getbootstrap.com/)や[Foundation](https://get.foundation/)、[Pure](https://purecss.io/)といったCSSフレームワークがよく使われていました。

ただこれらのフレームワークは独自のクラス名が多く定義されていたり、HTMLの構造がある程度縛られたりと、それぞれのフレームワークごとに覚えることがありました。

またフレームワークで定義されている見た目を変えたくなった場合はスタイル定義の上書きをしないといけませんが、プロパティの値を多く上書きしないといけないため、多大な労力を必要とします。

一方でクラスレスCSSは各種CSSフレームワークと比較して、定義されているプロパティが少ないのと、内部構造も比較的シンプルなため、スタイル定義の上書きをしたい場合でもより簡単に上書きできます。

## ユーティリティファーストCSSとの相違点

## クラスレスCSSを使うところ

## クラスレスCSSを使わないところ
