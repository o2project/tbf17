# はじめに

クラスレスCSSはHTMLにクラス属性を必要とせず、HTMLを書いてCSSを適用すると良い感じの見た目になるCSSのライブラリを指します。

クラスレスCSSの考え方自体は、おそらくリセットCSSから着想されたと考えています。

リセットCSSは最初期こそブラウザーが適用しているスタイルをすべて打ち消すものが多かったです。

ただ時代が進むにつれて、ブラウザー間の差異を無くしつつ、独自のスタイル定義をするライブラリも出てきました。

最近のリセットCSSの代表例として、下記の4つが挙げられます。

- [necolas/normalize.css: A modern alternative to CSS resets](https://github.com/necolas/normalize.css)
- [csstools/sanitize.css: A best-practices CSS foundation](https://github.com/csstools/sanitize.css)
- [filipelinhares/ress: A modern CSS reset](https://github.com/filipelinhares/ress)
- [A (more) Modern CSS Reset - Piccalilli](https://piccalil.li/blog/a-more-modern-css-reset/)

また[CSS Zen Garden](https://www.csszengarden.com/)も、クラスレスCSSの考え方に影響を与えたと言えそうです。

CSS Zen Gardenは2003年に公開されました。同じHTMLを使ってCSSファイルだけを差し替えるだけでページの見た目が変わることを示し、HTMLとCSSを分けることの重要性を世の中に広めました。

少し脱線しましたが、話をクラスレスCSSに戻しましょう。クラスレスCSSの源流は2014年に[Markdown CSS](https://github.com/markdowncss)というGitHubのorganizationで、複数のCSSライブラリが公開されたところから始まったと考えられます。

Markdown CSSで公開されているライブラリは、Markdownからなんらかの方法を用いて変換されたHTMLを、見た目良く表示することを目的として作られたライブラリみたいです。

2015年になると複数のクラスレスCSSライブラリが出てました。最初期に出てきたクラスレスCSSライブラリは下記の2つがあります。

- [mblode/marx: The classless CSS reset (perfect for Communists).](https://github.com/mblode/marx)
- [yegor256/tacit: CSS framework for dummies, without a single CSS class: nicely renders properly formatted HTML5 pages](https://github.com/yegor256/tacit)

## クラスレスCSSがもたらすもの

Tacitの作者は[Tacit, a CSS Framework Without Classes](https://www.yegor256.com/2015/04/13/tacit-css-framework-for-dummies.html)という記事内で次のように書いています。

> I've been using Bootstrap for more than two years in multiple projects, and my frustration has been building. First of all, it's too massive for a small web app. Second, it is not fully self-sufficient; no matter how much you follow its principles of design, you end up with your own CSS styles anyway. Third, and most importantly, its internal design is messy. Having all this in mind, I created tacit, my own CSS framework, which immediately received positive feedback on Hacker News.
> （筆者による日本語訳）私はBootstrapを2年以上複数のプロジェクトで使い、欲求不満を感じていました。まず小さなWebアプリには大きすぎます。次にどれだけデザイン原則に従ったとしても独自のCSSを定義しなければいけなく、Bootstrap単体で完結することができません。最後にもっとも重要なこととして内部設計が複雑であることです。これらを念頭に置いたうえで、私はtacitというCSSフレームワークを作ったところ、Hacker News上ですぐに好意的な反応をもらいました。

記事が書かれた2015年当時は、[Bootstrap](https://getbootstrap.com/)や[Foundation](https://get.foundation/)、[Pure](https://purecss.io/)といったCSSフレームワークがよく使われていました。

ただこれらのフレームワークにはTacitの作者が指摘する通り、問題点がいくつかありました。

- 独自のクラス名が多く定義されていて、かつフレームワークごとにクラス名が違う
- HTMLの構造やCSSのクラス名が、フレームワークの定義するものに縛られる
- 見た目をカスタマイズしたい場合、複雑なセレクタ定義をしないといけない

これらの問題点によって、開発速度や開発体験に影響する場合がありました。

一方でクラスレスCSSは各種CSSフレームワークと比較して、定義されているプロパティが少ないです。また内部構造も比較的シンプルなので、スタイル定義の上書きをしたい場合もより簡単に上書きできます。

## クラスレスCSSの制約

ただクラスレスCSSにも、アイドルになるため自ら4箇条を課して学校生活を送っていた東ゆうのように、4つの制約があります。

### 他のライブラリやフレームワークと組み合わせづらい場合がある

[Tailwind CSS](https://tailwindcss.com/)などのような、ユーティリティファーストライブラリと組み合わせることは難しくないでしょう。

一方でBootstrapなどのフレームワークと組み合わせる場合は、クラスレスCSS側で定義しているスタイルとフレームワーク側で定義しているスタイルが競合してしまい、意図したスタイルを適用するのは難しいと思われます。

### 見た目をカスマイズしたい場合はCSSの知識が必要になる。またクラスレスに保つのが難しくなる

クラスレスCSSはその概念上、プレーンなHTMLをそれなりの見た目にしてくれるライブラリとなります。そのため、クラスレスCSSが提供する見た目をカスタマイズしたい場合はCSSの知識が必要になります。

またクラスレスCSSを適用したうえで、ページの見た目をカスタマイズしたい場合は、HTML要素に対してスタイルを定義することでHTMLからclass属性を省き続けることはできます。

しかし大体の場合においてはclass属性を書いたうえで、スタイルの上書きをしていくことになるでしょう。その場合はHTMLをクラスレスに保てません。

### ライブラリによってはHTML構造やCSSのスタイル定義に制限がかかる

たとえばaside要素は既定だとARIAロールとして `complementary` を持っています。

`complementary` ロールはW3Cが公開している[Landmark Regions](https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/)やAxe Rulesが公開している[補完的なランドマークおよび/または傍白はトップレベルです](https://dequeuniversity.com/rules/axe/4.1/landmark-complementary-is-top-level?lang=ja)といった文書で、他のランドマークロールが付与されている要素の入れ子にしないことが推奨されています。

ただ、ページのサイドバーとしてaside要素を使う用途もあるため、`float` プロパティがaside要素に対して適用されているライブラリが複数あります。

こういったライブラリを使う場合にmain要素とaside要素を組み合わせて使うときは、body要素の直下にdiv要素を置いた上でmain要素とaside要素を並列に置いて、div要素でmain要素とaside要素のスタイルを調整する必要があります。

### 複雑なレイアウトにしたい場合は、CSSを書く量が増える

下記に挙げるようなWebサイト・Webアプリケーションだと、クラスレスCSSを採用した場合にスタイルの上書きが多く発生するため、クラスレスCSSを採用する意義が薄れます。

- [Pinterest](https://jp.pinterest.com/)や[pixiv](https://www.pixiv.net/)のような画像中心のページ
- [Figma](https://www.figma.com/)のような自由にオブジェクトが配置できる前提のWebアプリケーション
- [Netflix](https://www.netflix.com/jp)といった複数カラムが各ページにモジュール単位で存在しているページ

## クラスレスCSSの活用

クラスレスCSSは比較的シンプルな構造のページでその効果を発揮すると言えます。1カラムで完結するようなWebアプリケーションやWebページであれば、クラスレスCSSを読み込むだけでそれなりに良い見た目のページができるかもしれません。

また複数カラムのレイアウトにしたい場合でも、自分でFlexboxやGridといったスタイル定義をすれば良いでしょう。またライブラリによっては、HTMLの構造を特定の構造にすることで複数カラムを実現するライブラリもあります。

クラスレスCSSだけで完結できそうなページの例として、思いつく限りだと下記の用途が挙げられます。

- 比較的シンプルなUIのブログ
  - たとえば[noteの記事ページ](https://note.com/kubosho_/n/n0409d664249c)はクラスレスCSS＋αのスタイル定義で作れそうです
- ポートフォリオ
- 製品のランディングページ

またコンポーネントカタログを構築するときに、HTML要素が持つ役割と合致したコンポーネント⸺たとえばボタンやフォームなどが存在するのであれば、HTML要素に対して直接スタイル定義をすることで、余計なクラスを増やすことなく、HTMLを書いただけで統一的な見た目を得られます。

## クラスレスCSSは結局なんなのか？

クラスレスCSSはより主張の強いリセットCSSと言えます。シンプルな構造のページであれば、クラスレスCSSを読み込むだけで良い感じのページができあがります。

また必要に応じて追加のCSSを書くことができるため、クラスレスCSSライブラリで適用される見た目をもとにして、より発展的な見た目・レイアウトを作っていくことも可能です。

次の章からは星の数ほどあるクラスレスCSSのうち、選りすぐりのライブラリを4つ紹介します。
