// =============================================================
// problems.js — Python学習ツール 問題データ
// このファイルは問題データのみを定義します（ロジックは含みません）。
// 問題の追加・編集方法は SYSTEM_DOC.md を参照してください。
// =============================================================

const PROBLEMS = [
  // ---------------------------------------------------------
  // beginner（初級）: print・変数・基本演算・文字列操作
  // ---------------------------------------------------------
  {
    id: "b001",
    level: "beginner",
    category: "foundation",
    title: "はじめてのprint",
    description: "print関数を使って、次の文字列をそのまま出力してください。\n\nHello, Python!",
    starterCode: "# ここにコードを書いてください\n",
    expectedOutput: "Hello, Python!",
    explanation:
      "正解例:\n\nprint(\"Hello, Python!\")\n\n" +
      "print関数は、カッコの中の値を画面（標準出力）に表示します。文字列はダブルクォート（\"）またはシングルクォート（'）で囲みます。\n\n" +
      "よくある間違い:\n・クォートの閉じ忘れ\n・大文字小文字の違い（hello, python! は不正解になります）\n・カンマやスペースの過不足",
    hint: "print(\"...\") の形で書きます。文字列は問題文と完全に同じにしてください。",
    answerCode: "print(\"Hello, Python!\")"
  },
  {
    id: "b002",
    level: "beginner",
    category: "foundation",
    title: "変数と四則演算",
    description:
      "変数 a に 15、変数 b に 4 を代入し、次の3つの計算結果をこの順番で1行ずつ出力してください。\n\n1行目: a + b（和）\n2行目: a - b（差）\n3行目: a * b（積）",
    starterCode: "a = 15\nb = 4\n# ここに続きを書いてください\n",
    expectedOutput: "19\n11\n60",
    explanation:
      "正解例:\n\na = 15\nb = 4\nprint(a + b)\nprint(a - b)\nprint(a * b)\n\n" +
      "変数は「名前 = 値」で代入します。printを3回呼ぶと、それぞれが改行されて出力されます。\n\n" +
      "よくある間違い:\n・print(a + b, a - b, a * b) と1行にまとめると「19 11 60」となり、期待される3行の出力と一致しません。",
    hint: "printを3回使うと、3行に分かれて出力されます。",
    answerCode: "a = 15\nb = 4\nprint(a + b)\nprint(a - b)\nprint(a * b)"
  },
  {
    id: "b003",
    level: "beginner",
    category: "foundation",
    title: "文字列を大文字に変換",
    description:
      "変数 name に文字列 \"python\" を代入し、それをすべて大文字に変換して出力してください。\n\n期待される出力: PYTHON",
    starterCode: "name = \"python\"\n# ここに続きを書いてください\n",
    expectedOutput: "PYTHON",
    explanation:
      "正解例:\n\nname = \"python\"\nprint(name.upper())\n\n" +
      "文字列には便利なメソッドが用意されています。upper() はすべて大文字に、lower() はすべて小文字に変換します。\n\n" +
      "よくある間違い:\n・name.upper のようにカッコ () を付け忘れる（メソッド呼び出しにはカッコが必要です）\n・upper() は元の文字列を変更せず、新しい文字列を返します。",
    hint: "文字列のメソッド .upper() を使います。",
    answerCode: "name = \"python\"\nprint(name.upper())"
  },
  {
    id: "b004",
    level: "beginner",
    category: "foundation",
    title: "星のピラミッド",
    description:
      "文字列に * 演算子を使うと、同じ文字列を繰り返せます（例: \"ab\" * 3 → \"ababab\"）。\nこれを使って、次のような星のピラミッドを出力してください。\n\n★\n★★\n★★★",
    starterCode: "# \"★\" * 2 のように書くと星を繰り返せます\n",
    expectedOutput: "★\n★★\n★★★",
    explanation:
      "正解例:\n\nprint(\"★\" * 1)\nprint(\"★\" * 2)\nprint(\"★\" * 3)\n\n" +
      "文字列 * 整数 で文字列を繰り返せるのはPythonの便利な特徴です。print(\"★\")、print(\"★★\") と直接書いても正解です。\n\n" +
      "よくある間違い:\n・\"★\" + 3 のように + を使うと、文字列と数値は足せないため TypeError になります。",
    hint: "printを3回使い、\"★\" * 1、\"★\" * 2、\"★\" * 3 を出力します。",
    answerCode: "print(\"★\" * 1)\nprint(\"★\" * 2)\nprint(\"★\" * 3)"
  },
  {
    id: "b005",
    level: "beginner",
    category: "foundation",
    title: "お菓子を山分け",
    description:
      "100個のお菓子を7人で同じ数ずつ分けます。\n1人あたり何個もらえるか（割り算の商の切り捨て）と、何個余るか（余り）を、この順番で1行ずつ出力してください。\n\n1行目: 1人あたりの個数\n2行目: 余りの個数",
    starterCode: "candy = 100\npeople = 7\n# ここに続きを書いてください\n",
    expectedOutput: "14\n2",
    explanation:
      "正解例:\n\ncandy = 100\npeople = 7\nprint(candy // people)\nprint(candy % people)\n\n" +
      "// は切り捨て割り算（商の整数部分）、% は余りを求める演算子です。セットで覚えると「分配」の計算に便利です。\n\n" +
      "よくある間違い:\n・/ を使うと 14.285714... のような小数（float）になってしまいます。整数の商が欲しいときは // を使います。",
    hint: "切り捨て割り算は //、余りは % で計算できます。",
    answerCode: "candy = 100\npeople = 7\nprint(candy // people)\nprint(candy % people)"
  },
  {
    id: "b006",
    level: "beginner",
    category: "foundation",
    title: "文字列のスライス",
    description:
      "変数 word に文字列 \"Pythonista\" が入っています。\nスライスを使って、次の2つをこの順番で1行ずつ出力してください。\n\n1行目: 最初の6文字（Python）\n2行目: 最後の3文字（sta）",
    starterCode: "word = \"Pythonista\"\n# ここに続きを書いてください\n",
    expectedOutput: "Python\nsta",
    explanation:
      "正解例:\n\nword = \"Pythonista\"\nprint(word[0:6])\nprint(word[-3:])\n\n" +
      "スライス word[開始:終了] で文字列の一部を切り出せます。終了位置の文字は含まれません（0:6 は0〜5番目）。マイナスは末尾からの位置で、word[-3:] は「後ろから3文字目以降すべて」です。\n\n" +
      "よくある間違い:\n・インデックスは0から始まるため、word[1:6] とすると \"ython\" になります\n・word[0:6] の6番目の文字（i）は含まれません。",
    hint: "word[0:6] と word[-3:] を使います。",
    answerCode: "word = \"Pythonista\"\nprint(word[0:6])\nprint(word[-3:])"
  },
  {
    id: "b007",
    level: "beginner",
    category: "foundation",
    title: "逆さ言葉",
    description:
      "変数 s に文字列 \"stressed\" が入っています。\nスライスを使って文字列を逆順にして出力してください。\n（逆から読むと別の英単語になります）",
    starterCode: "s = \"stressed\"\n# ここに続きを書いてください\n",
    expectedOutput: "desserts",
    explanation:
      "正解例:\n\ns = \"stressed\"\nprint(s[::-1])\n\n" +
      "スライスの3つ目の値はステップ（進む幅）です。[::-1] は「全体を後ろから1文字ずつ」という意味になり、文字列を逆順にする定番の書き方です。\n\n" +
      "よくある間違い:\n・s.reverse() は文字列には使えません（リスト専用のメソッドです）\n・reversed(s) はそのままprintするとイテレータの表記が出てしまいます。",
    hint: "s[::-1] で文字列全体が逆順になります。",
    answerCode: "s = \"stressed\"\nprint(s[::-1])"
  },
  {
    id: "b008",
    level: "beginner",
    category: "foundation",
    title: "f文字列で自己紹介",
    description:
      "変数 name に \"ハナ\"、変数 age に 14 を代入し、f文字列を使って次の1行を出力してください。\n\n私はハナ、14歳です！",
    starterCode: "name = \"ハナ\"\nage = 14\n# ここに続きを書いてください\n",
    expectedOutput: "私はハナ、14歳です！",
    explanation:
      "正解例:\n\nname = \"ハナ\"\nage = 14\nprint(f\"私は{name}、{age}歳です！\")\n\n" +
      "f文字列（フォーマット済み文字列）は、文字列の前に f を付けて {} の中に変数や式を埋め込める書き方です。数値も自動で文字列に変換されるため、str() が不要で便利です。\n\n" +
      "よくある間違い:\n・先頭の f を忘れると {name} がそのまま表示されます\n・「！」は全角です。半角の ! では不正解になります。",
    hint: "f\"私は{name}、{age}歳です！\" の形で書きます。先頭の f を忘れずに。",
    answerCode: "name = \"ハナ\"\nage = 14\nprint(f\"私は{name}、{age}歳です！\")"
  },
  {
    id: "b009",
    level: "beginner",
    category: "foundation",
    title: "絶対値と四捨五入",
    description:
      "次の2つをこの順番で1行ずつ出力してください。\n\n1行目: -42 の絶対値\n2行目: 3.14159 を小数第2位までに四捨五入した値",
    starterCode: "# abs() と round() を使ってみましょう\n",
    expectedOutput: "42\n3.14",
    explanation:
      "正解例:\n\nprint(abs(-42))\nprint(round(3.14159, 2))\n\n" +
      "abs() は絶対値（マイナスを取った値）、round(値, 桁数) は指定した小数桁数への丸めを行う組み込み関数です。\n\n" +
      "よくある間違い:\n・round(3.14159) と桁数を省略すると整数の 3 になります\n・round は「銀行家の丸め」という方式のため、round(2.5) が 2 になるなど直感と違う場合があります（今回の問題では影響しません）。",
    hint: "abs(-42) と round(3.14159, 2) です。",
    answerCode: "print(abs(-42))\nprint(round(3.14159, 2))"
  },
  {
    id: "b010",
    level: "beginner",
    category: "foundation",
    title: "数値を文字列につなげる",
    description:
      "変数 count に 3 が入っています。\n+ による文字列連結を使って、次の1行を出力してください。\n\nりんごが3個あります",
    starterCode: "count = 3\n# print(\"りんごが\" + count + \"個あります\") はエラーになります。なぜ？\n",
    expectedOutput: "りんごが3個あります",
    explanation:
      "正解例:\n\ncount = 3\nprint(\"りんごが\" + str(count) + \"個あります\")\n\n" +
      "文字列と数値は + で直接つなげられず、TypeError になります。str() で数値を文字列に変換してから連結します。\n\n" +
      "別解として print(f\"りんごが{count}個あります\") のようにf文字列を使うと、変換を意識せずに書けます。\n\n" +
      "よくある間違い:\n・\"りんごが\" + count と書いて TypeError: can only concatenate str (not \"int\") to str になる、というのがこの問題の核心です。エラーメッセージを読む練習にもなります。",
    hint: "数値を str() で文字列に変換してから + でつなげます。",
    answerCode: "count = 3\nprint(\"りんごが\" + str(count) + \"個あります\")"
  },
  {
    id: "b011",
    level: "beginner",
    category: "foundation",
    title: "文字列の足し算と数値の足し算",
    description:
      "変数 a に文字列 \"100\"、変数 b に文字列 \"23\" が入っています。\n次の2つをこの順番で1行ずつ出力してください。\n\n1行目: a と b をそのまま + でつなげた結果\n2行目: a と b を整数に変換してから足した結果",
    starterCode: "a = \"100\"\nb = \"23\"\n# ここに続きを書いてください\n",
    expectedOutput: "10023\n123",
    explanation:
      "正解例:\n\na = \"100\"\nb = \"23\"\nprint(a + b)\nprint(int(a) + int(b))\n\n" +
      "文字列同士の + は「連結」、数値同士の + は「足し算」です。同じ + でも型によって意味が変わります。文字列を数値として計算したいときは int() で変換します。\n\n" +
      "よくある間違い:\n・\"100\" + \"23\" が 123 になると思い込んでしまう（実際は連結されて \"10023\"）\n・int(\"abc\") のように数値にできない文字列を変換すると ValueError になります。",
    hint: "1行目はそのまま print(a + b)、2行目は int() で変換してから足します。",
    answerCode: "a = \"100\"\nb = \"23\"\nprint(a + b)\nprint(int(a) + int(b))"
  },
  {
    id: "b012",
    level: "beginner",
    category: "foundation",
    title: "intとfloatの変換",
    description:
      "次の2つをこの順番で1行ずつ出力してください。\n\n1行目: 7.9 を int() で整数に変換した結果\n2行目: 5 を float() で小数に変換した結果",
    starterCode: "# int() と float() の動きを確かめましょう\n",
    expectedOutput: "7\n5.0",
    explanation:
      "正解例:\n\nprint(int(7.9))\nprint(float(5))\n\n" +
      "int() は小数点以下を「切り捨て」ます（四捨五入ではありません）。7.9 → 7 になるのがポイントです。float() は整数を小数に変換し、5 → 5.0 と表示されます。\n\n" +
      "よくある間違い:\n・int(7.9) が四捨五入されて 8 になると思ってしまう\n・5 と 5.0 は計算上は等しいですが、printの表示は異なります。",
    hint: "int() は四捨五入ではなく切り捨てです。",
    answerCode: "print(int(7.9))\nprint(float(5))"
  },
  {
    id: "b013",
    level: "beginner",
    category: "foundation",
    title: "偶数か奇数か",
    description:
      "変数 n に 42 が入っています。\nif / else を使って、n が偶数なら「42は偶数です」、奇数なら「42は奇数です」と出力するコードを書いてください。\n（数字の部分は n の値を使って表示すること）",
    starterCode: "n = 42\n# ここに続きを書いてください\n",
    expectedOutput: "42は偶数です",
    explanation:
      "正解例:\n\nn = 42\nif n % 2 == 0:\n    print(f\"{n}は偶数です\")\nelse:\n    print(f\"{n}は奇数です\")\n\n" +
      "「2で割った余りが0なら偶数」というのが定番の判定方法です。% は余りを求める演算子です。\n\n" +
      "よくある間違い:\n・if n % 2 = 0 のように = を1つしか書かない（比較は == です。= は代入なのでSyntaxErrorになります）\n・if文の次の行のインデント（字下げ）を忘れる。",
    hint: "n % 2 == 0 が成り立てば偶数です。if のあとの行は4文字字下げします。",
    answerCode: "n = 42\nif n % 2 == 0:\n    print(f\"{n}は偶数です\")\nelse:\n    print(f\"{n}は奇数です\")"
  },
  {
    id: "b014",
    level: "beginner",
    category: "foundation",
    title: "テストの成績判定",
    description:
      "変数 score に 75 が入っています。\nif / elif / else を使って、次のルールで判定し「判定: B」のような形式で出力してください。\n\n・80以上 → A\n・70以上80未満 → B\n・60以上70未満 → C\n・60未満 → D",
    starterCode: "score = 75\n# ここに続きを書いてください\n",
    expectedOutput: "判定: B",
    explanation:
      "正解例:\n\nscore = 75\nif score >= 80:\n    grade = \"A\"\nelif score >= 70:\n    grade = \"B\"\nelif score >= 60:\n    grade = \"C\"\nelse:\n    grade = \"D\"\nprint(f\"判定: {grade}\")\n\n" +
      "if / elif は上から順に評価され、最初に成り立った1つだけが実行されます。そのため elif score >= 70 に「80未満」の条件を書く必要はありません（80以上なら最初のifで処理済みのため）。\n\n" +
      "よくある間違い:\n・条件の順番を逆（60以上を先）にすると、75でも \"C\" と判定されてしまいます。範囲の広い・厳しい条件から順に書くのがコツです\n・「判定: 」のコロンの後には半角スペースが1つ入ります。",
    hint: "score >= 80 から順に上から判定します。elif を使うと「それ以外で〜以上」が簡潔に書けます。",
    answerCode: "score = 75\nif score >= 80:\n    grade = \"A\"\nelif score >= 70:\n    grade = \"B\"\nelif score >= 60:\n    grade = \"C\"\nelse:\n    grade = \"D\"\nprint(f\"判定: {grade}\")"
  },
  {
    id: "b015",
    level: "beginner",
    category: "foundation",
    title: "FizzBuzz判定（1つだけ）",
    description:
      "変数 n に 15 が入っています。\n次のルールで判定して出力してください。\n\n・3でも5でも割り切れる → FizzBuzz\n・3だけで割り切れる → Fizz\n・5だけで割り切れる → Buzz\n・どれでもない → 数値をそのまま出力",
    starterCode: "n = 15\n# ここに続きを書いてください\n",
    expectedOutput: "FizzBuzz",
    explanation:
      "正解例:\n\nn = 15\nif n % 3 == 0 and n % 5 == 0:\n    print(\"FizzBuzz\")\nelif n % 3 == 0:\n    print(\"Fizz\")\nelif n % 5 == 0:\n    print(\"Buzz\")\nelse:\n    print(n)\n\n" +
      "プログラミングの定番問題「FizzBuzz」の判定部分です。「3でも5でも割り切れる」を最初に判定するのがポイントです。\n\n" +
      "よくある間違い:\n・if n % 3 == 0 を先に書くと、15 は \"Fizz\" と判定されて FizzBuzz にたどり着けません。条件の順番が重要です\n・and の代わりに n % 15 == 0 と書いても正解です。",
    hint: "「3でも5でも割り切れる」を最初に判定しないと、Fizz が先に成立してしまいます。",
    answerCode: "n = 15\nif n % 3 == 0 and n % 5 == 0:\n    print(\"FizzBuzz\")\nelif n % 3 == 0:\n    print(\"Fizz\")\nelif n % 5 == 0:\n    print(\"Buzz\")\nelse:\n    print(n)"
  },
  {
    id: "b016",
    level: "beginner",
    category: "foundation",
    title: "倍々ゲーム（while文）",
    description:
      "1粒の米が毎日2倍に増えていきます。while文を使って、何日目に初めて100粒を超えるかを調べ、次の形式で出力してください。\n\n・1日目は1粒。翌日から毎日2倍になる（2日目は2粒、3日目は4粒…）\n\n期待される出力:\n8日目に128粒",
    starterCode: "grains = 1\nday = 1\n# while文で100粒を超えるまで繰り返してください\n",
    expectedOutput: "8日目に128粒",
    explanation:
      "正解例:\n\ngrains = 1\nday = 1\nwhile grains <= 100:\n    grains *= 2\n    day += 1\nprint(f\"{day}日目に{grains}粒\")\n\n" +
      "while文は「条件が成り立つ間、繰り返す」ループです。forと違って繰り返し回数が事前にわからないときに使います。grains *= 2 は grains = grains * 2 の省略形です。\n\n" +
      "よくある間違い:\n・条件を grains < 100 にすると100ちょうどで止まってしまいます（今回は結果は同じですが、「超えるまで」は <= が正確です）\n・day += 1 を忘れると日数が数えられません。",
    hint: "while grains <= 100: の中で grains を2倍にし、day を1増やします。",
    answerCode: "grains = 1\nday = 1\nwhile grains <= 100:\n    grains *= 2\n    day += 1\nprint(f\"{day}日目に{grains}粒\")"
  },
  {
    id: "b017",
    level: "beginner",
    category: "foundation",
    title: "in演算子で文字を探す",
    description:
      "in演算子を使って、次の2つの判定結果をこの順番で1行ずつ出力してください。\n\n1行目: 文字列 \"strawberry\" に \"berry\" が含まれるか\n2行目: 文字列 \"apple\" に \"berry\" が含まれるか\n\n期待される出力:\nTrue\nFalse",
    starterCode: "word = \"strawberry\"\n# in演算子を使ってみましょう\n",
    expectedOutput: "True\nFalse",
    explanation:
      "正解例:\n\nword = \"strawberry\"\nprint(\"berry\" in word)\nprint(\"berry\" in \"apple\")\n\n" +
      "「部分文字列 in 文字列」で、含まれていれば True、いなければ False になります。in はリストや辞書にも使える、Pythonで最もよく使う演算子のひとつです。\n\n" +
      "よくある間違い:\n・順番を逆（word in \"berry\"）にすると意味が変わります。「探したいもの in 探す場所」の順です\n・True / False は print すると先頭が大文字で表示されます。",
    hint: "print(\"berry\" in word) のように、in演算子の結果をそのままprintできます。",
    answerCode: "word = \"strawberry\"\nprint(\"berry\" in word)\nprint(\"berry\" in \"apple\")"
  },
  {
    id: "b018",
    level: "beginner",
    category: "foundation",
    title: "文字数を数える",
    description:
      "len関数を使って、次の2つの文字列の文字数をこの順番で1行ずつ出力してください。\n\n1行目: \"おはようございます\" の文字数\n2行目: \"Python\" の文字数\n\n期待される出力:\n9\n6",
    starterCode: "greeting = \"おはようございます\"\nname = \"Python\"\n# len() を使ってみましょう\n",
    expectedOutput: "9\n6",
    explanation:
      "正解例:\n\ngreeting = \"おはようございます\"\nname = \"Python\"\nprint(len(greeting))\nprint(len(name))\n\n" +
      "len() は文字列の長さ（文字数）を返す組み込み関数です。日本語も1文字は1とカウントされます。リストの要素数を数えるのにも同じ len() を使います。\n\n" +
      "よくある間違い:\n・greeting.len() のようにメソッド形式で書くとエラーになります。len(greeting) と関数形式で書きます。",
    hint: "len(文字列) で文字数が取れます。upper()などと違い、メソッドではなく関数です。",
    answerCode: "greeting = \"おはようございます\"\nname = \"Python\"\nprint(len(greeting))\nprint(len(name))"
  },
  {
    id: "b019",
    level: "beginner",
    category: "foundation",
    title: "文字列の繰り返し",
    description:
      "文字列に * 演算子を使うと、同じ文字列を繰り返せます。次の2行を出力してください。\n\n1行目: \"エイ\" を2回繰り返して \"オー！\" をつなげた応援コール\n2行目: \"=\" を10回繰り返した区切り線\n\n期待される出力:\nエイエイオー！\n==========",
    starterCode: "# 文字列 * 数値 で繰り返せます\n",
    expectedOutput: "エイエイオー！\n==========",
    explanation:
      "正解例:\n\nprint(\"エイ\" * 2 + \"オー！\")\nprint(\"=\" * 10)\n\n" +
      "「文字列 * 整数」でその回数だけ繰り返した文字列が作れます。+ と組み合わせれば、繰り返しと連結を1行で書けます。区切り線の出力など実用的な場面でもよく使います。\n\n" +
      "よくある間違い:\n・\"エイ\" * 2 は \"エイエイ\" です。\"エイエイ\" * 2 にすると「エイエイエイエイ」になってしまいます\n・「！」は全角です。半角の ! では不正解になります。",
    hint: "print(\"エイ\" * 2 + \"オー！\") のように、* と + は組み合わせられます。",
    answerCode: "print(\"エイ\" * 2 + \"オー！\")\nprint(\"=\" * 10)"
  },
  {
    id: "b020",
    level: "beginner",
    category: "foundation",
    title: "2つの変数を入れ替える",
    description:
      "変数 a に 3、変数 b に 8 が入っています。Pythonの多重代入を使って a と b の値を入れ替え、a、b の順に1行ずつ出力してください。\n\n期待される出力:\n8\n3",
    starterCode: "a = 3\nb = 8\n# 1行で入れ替えられます\n",
    expectedOutput: "8\n3",
    explanation:
      "正解例:\n\na = 3\nb = 8\na, b = b, a\nprint(a)\nprint(b)\n\n" +
      "a, b = b, a と書くと、右辺の (b, a) が先にまとめて評価されてから左辺に代入されるため、一時変数なしで値を交換できます。多くの言語では tmp = a; a = b; b = tmp と3行必要な処理が、Pythonでは1行で書けます。\n\n" +
      "よくある間違い:\n・a = b の後に b = a と書くと、両方とも 8 になってしまいます（aの元の値が失われるため）。",
    hint: "a, b = b, a の1行で入れ替えできます。",
    answerCode: "a = 3\nb = 8\na, b = b, a\nprint(a)\nprint(b)"
  },
  {
    id: "b021",
    level: "beginner",
    category: "foundation",
    title: "歩数計と累算代入",
    description:
      "1日の歩数を集計します。変数 steps を 0 で初期化し、累算代入演算子 += を使って朝の散歩 3000歩・通勤 5000歩・夜の散歩 4200歩 を順に加算してください。\nそのうえで、合計歩数を出力し、10000歩以上なら「目標達成！」と出力してください。\n\n期待される出力:\n12200\n目標達成！",
    starterCode: "steps = 0\n# += で3回加算してください\n",
    expectedOutput: "12200\n目標達成！",
    explanation:
      "正解例:\n\nsteps = 0\nsteps += 3000\nsteps += 5000\nsteps += 4200\nprint(steps)\nif steps >= 10000:\n    print(\"目標達成！\")\n\n" +
      "steps += 3000 は steps = steps + 3000 の省略形で、「今の値に加える」という更新処理を簡潔に書けます。-=、*=、/= など他の演算子にも同じ形があります。\n\n" +
      "よくある間違い:\n・=+ と逆に書くと「+3000 を代入」という意味になり、合計されません\n・「目標達成！」の「！」は全角です。",
    hint: "steps += 3000 のように3回加算し、最後に if steps >= 10000: で判定します。",
    answerCode: "steps = 0\nsteps += 3000\nsteps += 5000\nsteps += 4200\nprint(steps)\nif steps >= 10000:\n    print(\"目標達成！\")"
  },

  // ---------------------------------------------------------
  // intermediate（中級）: リスト・辞書・for/while・関数定義
  // ---------------------------------------------------------
  {
    id: "i001",
    level: "intermediate",
    category: "foundation",
    title: "リストの合計と最大値",
    description:
      "リスト numbers = [3, 1, 4, 1, 5, 9, 2, 6] について、次の2つをこの順番で1行ずつ出力してください。\n\n1行目: 全要素の合計\n2行目: 最大値",
    starterCode: "numbers = [3, 1, 4, 1, 5, 9, 2, 6]\n# ここに続きを書いてください\n",
    expectedOutput: "31\n9",
    explanation:
      "正解例:\n\nnumbers = [3, 1, 4, 1, 5, 9, 2, 6]\nprint(sum(numbers))\nprint(max(numbers))\n\n" +
      "Pythonの組み込み関数 sum() はリストの合計、max() は最大値を返します。forループで自力で計算しても正解です。\n\n" +
      "よくある間違い:\n・sum と max の出力順を逆にしてしまう\n・print(sum(numbers), max(numbers)) と1行にまとめてしまう",
    hint: "組み込み関数 sum() と max() が使えます。",
    answerCode: "numbers = [3, 1, 4, 1, 5, 9, 2, 6]\nprint(sum(numbers))\nprint(max(numbers))"
  },
  {
    id: "i002",
    level: "intermediate",
    category: "foundation",
    title: "辞書をループで表示",
    description:
      "辞書 prices = {\"apple\": 120, \"banana\": 80, \"orange\": 100} の内容を、for文を使って次の形式で1行ずつ出力してください。\n\napple: 120円\nbanana: 80円\norange: 100円",
    starterCode: "prices = {\"apple\": 120, \"banana\": 80, \"orange\": 100}\n# ここに続きを書いてください\n",
    expectedOutput: "apple: 120円\nbanana: 80円\norange: 100円",
    explanation:
      "正解例:\n\nprices = {\"apple\": 120, \"banana\": 80, \"orange\": 100}\nfor name, price in prices.items():\n    print(f\"{name}: {price}円\")\n\n" +
      "辞書の .items() はキーと値のペアを順番に取り出します。f文字列（f\"...\"）を使うと変数を {} で埋め込めます。\n\n" +
      "よくある間違い:\n・コロンの後の半角スペースの有無（\"apple:120円\" は不正解です）\n・.items() を付け忘れるとキーだけが取り出されます。",
    hint: "for キー, 値 in 辞書.items(): の形でループできます。f文字列で整形しましょう。",
    answerCode: "prices = {\"apple\": 120, \"banana\": 80, \"orange\": 100}\nfor name, price in prices.items():\n    print(f\"{name}: {price}円\")"
  },
  {
    id: "i003",
    level: "intermediate",
    category: "foundation",
    title: "あいさつを返す関数",
    description:
      "名前（文字列）を受け取り、「こんにちは、◯◯さん！」という文字列を返す関数 greet を定義してください。\nそのうえで greet(\"花子\") と greet(\"次郎\") の結果をこの順番で1行ずつ出力してください。\n\n期待される出力:\nこんにちは、花子さん！\nこんにちは、次郎さん！",
    starterCode: "# 関数 greet を定義してください\n",
    expectedOutput: "こんにちは、花子さん！\nこんにちは、次郎さん！",
    explanation:
      "正解例:\n\ndef greet(name):\n    return f\"こんにちは、{name}さん！\"\n\nprint(greet(\"花子\"))\nprint(greet(\"次郎\"))\n\n" +
      "関数は def 関数名(引数): で定義し、return で値を返します。返すだけでは画面に表示されないので、printと組み合わせます。\n\n" +
      "よくある間違い:\n・関数の中で print してさらに print(greet(...)) すると「None」が余分に出力されます（return と print の役割の違いに注意）。\n・「！」が全角であることに注意してください。",
    hint: "def greet(name): で定義し、f文字列を return します。",
    answerCode: "def greet(name):\n    return f\"こんにちは、{name}さん！\"\n\nprint(greet(\"花子\"))\nprint(greet(\"次郎\"))"
  },
  {
    id: "i004",
    level: "intermediate",
    category: "foundation",
    title: "FizzBuzz",
    description:
      "1から15までの整数を順に処理し、次のルールで1行ずつ出力してください。\n\n・3でも5でも割り切れる → FizzBuzz\n・3で割り切れる → Fizz\n・5で割り切れる → Buzz\n・どれでもない → 数値をそのまま出力",
    starterCode: "for n in range(1, 16):\n    # ここに判定を書いてください\n    pass\n",
    expectedOutput: "1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz",
    explanation:
      "正解例:\n\nfor n in range(1, 16):\n    if n % 3 == 0 and n % 5 == 0:\n        print(\"FizzBuzz\")\n    elif n % 3 == 0:\n        print(\"Fizz\")\n    elif n % 5 == 0:\n        print(\"Buzz\")\n    else:\n        print(n)\n\n" +
      "プログラミング面接でも有名な定番問題です。ループと条件分岐の組み合わせ、そして「両方割り切れる」を最初に判定する条件の順序がポイントです。\n\n" +
      "よくある間違い:\n・range(1, 15) では15が含まれません（終端は含まれない）\n・n % 3 == 0 を最初に判定すると、15が \"Fizz\" になってしまいます。",
    hint: "if「3でも5でも」→ elif「3で」→ elif「5で」→ else の順に判定します。range の終端に注意。",
    answerCode: "for n in range(1, 16):\n    if n % 3 == 0 and n % 5 == 0:\n        print(\"FizzBuzz\")\n    elif n % 3 == 0:\n        print(\"Fizz\")\n    elif n % 5 == 0:\n        print(\"Buzz\")\n    else:\n        print(n)"
  },
  {
    id: "i005",
    level: "intermediate",
    category: "foundation",
    title: "リストに追加して並べ替え",
    description:
      "リスト scores = [72, 85, 64] に 90 を追加し、昇順（小さい順）に並べ替えてから、リスト全体をprintで出力してください。\n\n期待される出力:\n[64, 72, 85, 90]",
    starterCode: "scores = [72, 85, 64]\n# ここに続きを書いてください\n",
    expectedOutput: "[64, 72, 85, 90]",
    explanation:
      "正解例:\n\nscores = [72, 85, 64]\nscores.append(90)\nscores.sort()\nprint(scores)\n\n" +
      "append() はリストの末尾に要素を追加し、sort() はリスト自体を昇順に並べ替えます。どちらも元のリストを直接変更するメソッドです。\n\n" +
      "よくある間違い:\n・scores = scores.append(90) と代入すると、append は None を返すため scores が None になってしまいます\n・print(scores.sort()) も同様に None と表示されます。sort() してから print(scores) します。",
    hint: "scores.append(90) → scores.sort() → print(scores) の3ステップです。",
    answerCode: "scores = [72, 85, 64]\nscores.append(90)\nscores.sort()\nprint(scores)"
  },
  {
    id: "i006",
    level: "intermediate",
    category: "foundation",
    title: "内包表記で3の倍数リスト",
    description:
      "リスト内包表記を使って、1から5までの整数をそれぞれ3倍したリストを作り、printで出力してください。\n\n期待される出力:\n[3, 6, 9, 12, 15]",
    starterCode: "# [式 for 変数 in range(...)] の形で書いてみましょう\n",
    expectedOutput: "[3, 6, 9, 12, 15]",
    explanation:
      "正解例:\n\nnums = [x * 3 for x in range(1, 6)]\nprint(nums)\n\n" +
      "リスト内包表記は「forループ＋append」を1行で書ける構文です。次のコードと同じ意味になります。\n\nnums = []\nfor x in range(1, 6):\n    nums.append(x * 3)\n\n" +
      "よくある間違い:\n・[for x in range(1, 6) x * 3] のように語順を逆にする（式が先、forが後です）\n・range(1, 5) では4までしか処理されません。",
    hint: "[x * 3 for x in range(1, 6)] です。式が先、for が後の語順に注意。",
    answerCode: "nums = [x * 3 for x in range(1, 6)]\nprint(nums)"
  },
  {
    id: "i007",
    level: "intermediate",
    category: "foundation",
    title: "九九の7の段",
    description:
      "for文を使って、九九の7の段を次の形式で1行ずつ出力してください。\n\n7 × 1 = 7\n7 × 2 = 14\n（中略）\n7 × 9 = 63\n\n※「×」は全角の掛け算記号です。= の前後には半角スペースが入ります。",
    starterCode: "# range() と f文字列を組み合わせましょう\n",
    expectedOutput: "7 × 1 = 7\n7 × 2 = 14\n7 × 3 = 21\n7 × 4 = 28\n7 × 5 = 35\n7 × 6 = 42\n7 × 7 = 49\n7 × 8 = 56\n7 × 9 = 63",
    explanation:
      "正解例:\n\nfor i in range(1, 10):\n    print(f\"7 × {i} = {7 * i}\")\n\n" +
      "f文字列の {} の中には変数だけでなく {7 * i} のような式も書けます。range(1, 10) で1〜9を順に処理します。\n\n" +
      "よくある間違い:\n・range(1, 9) では8までしか出力されません\n・「×」（全角）と「x」（半角エックス）の違い、スペースの有無で不一致になります。出力形式は問題文と完全に一致させましょう。",
    hint: "for i in range(1, 10): の中で f\"7 × {i} = {7 * i}\" を出力します。",
    answerCode: "for i in range(1, 10):\n    print(f\"7 × {i} = {7 * i}\")"
  },
  {
    id: "i008",
    level: "intermediate",
    category: "foundation",
    title: "カウントダウン",
    description:
      "while文を使って、5から1までカウントダウンして1行ずつ出力し、最後に「発射！」と出力してください。\n\n期待される出力:\n5\n4\n3\n2\n1\n発射！",
    starterCode: "n = 5\n# while文でカウントダウンしましょう\n",
    expectedOutput: "5\n4\n3\n2\n1\n発射！",
    explanation:
      "正解例:\n\nn = 5\nwhile n > 0:\n    print(n)\n    n -= 1\nprint(\"発射！\")\n\n" +
      "while は条件が True の間繰り返します。n -= 1（n = n - 1 の省略形）でカウンタを減らしていき、0になったらループを抜けます。\n\n" +
      "よくある間違い:\n・n -= 1 を忘れると無限ループになります（whileを書くときは「いつ条件がFalseになるか」を必ず考えましょう）\n・print(\"発射！\") をループの中に入れると毎回出力されてしまいます。インデントの位置が重要です。",
    hint: "while n > 0: の中で print(n) と n -= 1 を行い、ループの外で「発射！」を出力します。",
    answerCode: "n = 5\nwhile n > 0:\n    print(n)\n    n -= 1\nprint(\"発射！\")"
  },
  {
    id: "i009",
    level: "intermediate",
    category: "foundation",
    title: "辞書のキー一覧と値の合計",
    description:
      "辞書 stock = {\"えんぴつ\": 120, \"ノート\": 80, \"消しゴム\": 45} について、\nまずすべてのキー（商品名）を1行ずつ出力し、最後に値（在庫数）の合計を出力してください。\n\n期待される出力:\nえんぴつ\nノート\n消しゴム\n245",
    starterCode: "stock = {\"えんぴつ\": 120, \"ノート\": 80, \"消しゴム\": 45}\n# ここに続きを書いてください\n",
    expectedOutput: "えんぴつ\nノート\n消しゴム\n245",
    explanation:
      "正解例:\n\nstock = {\"えんぴつ\": 120, \"ノート\": 80, \"消しゴム\": 45}\nfor name in stock.keys():\n    print(name)\nprint(sum(stock.values()))\n\n" +
      "keys() はキー一覧、values() は値一覧を返します。for name in stock: のように .keys() を省略してもキーが取り出されます。values() は sum() にそのまま渡せます。\n\n" +
      "よくある間違い:\n・print(stock.keys()) とすると dict_keys([...]) という形式で出力されてしまいます。1行ずつ出すにはforループを使います。",
    hint: "forループでキーを1つずつ出力し、sum(stock.values()) で合計を出します。",
    answerCode: "stock = {\"えんぴつ\": 120, \"ノート\": 80, \"消しゴム\": 45}\nfor name in stock.keys():\n    print(name)\nprint(sum(stock.values()))"
  },
  {
    id: "i010",
    level: "intermediate",
    category: "foundation",
    title: "投票結果を更新する",
    description:
      "辞書 votes = {\"犬\": 3, \"猫\": 5} に対して次の操作を行い、最後に辞書全体をprintで出力してください。\n\n1. \"犬\" の票数を1増やす\n2. 新しいキー \"鳥\" を票数2で追加する\n\n期待される出力:\n{'犬': 4, '猫': 5, '鳥': 2}",
    starterCode: "votes = {\"犬\": 3, \"猫\": 5}\n# ここに続きを書いてください\n",
    expectedOutput: "{'犬': 4, '猫': 5, '鳥': 2}",
    explanation:
      "正解例:\n\nvotes = {\"犬\": 3, \"猫\": 5}\nvotes[\"犬\"] += 1\nvotes[\"鳥\"] = 2\nprint(votes)\n\n" +
      "辞書は 辞書[キー] = 値 で更新・追加ができます。既存のキーなら上書き、存在しないキーなら新規追加になります。+= 1 で「現在の値に1足す」が簡潔に書けます。\n\n" +
      "よくある間違い:\n・存在しないキーに += すると KeyError になります（追加は =、加算は既存キーのみ）\n・printの出力ではキーがシングルクォート（'）で表示されます。Pythonの辞書の標準的な表示形式です。",
    hint: "votes[\"犬\"] += 1 と votes[\"鳥\"] = 2 の2行です。",
    answerCode: "votes = {\"犬\": 3, \"猫\": 5}\nvotes[\"犬\"] += 1\nvotes[\"鳥\"] = 2\nprint(votes)"
  },
  {
    id: "i011",
    level: "intermediate",
    category: "foundation",
    title: "splitとjoin",
    description:
      "カンマ区切りの文字列 csv = \"apple,banana,cherry\" について、次の2つをこの順番で1行ずつ出力してください。\n\n1行目: カンマで分割してできたリスト\n2行目: そのリストを \" / \"（スペース・スラッシュ・スペース）で連結した文字列",
    starterCode: "csv = \"apple,banana,cherry\"\n# ここに続きを書いてください\n",
    expectedOutput: "['apple', 'banana', 'cherry']\napple / banana / cherry",
    explanation:
      "正解例:\n\ncsv = \"apple,banana,cherry\"\nfruits = csv.split(\",\")\nprint(fruits)\nprint(\" / \".join(fruits))\n\n" +
      "split(区切り文字) は文字列をリストに分割し、\"区切り文字\".join(リスト) はその逆でリストを1つの文字列に連結します。対になるメソッドとしてセットで覚えましょう。\n\n" +
      "よくある間違い:\n・join の書き方は「区切り文字.join(リスト)」です。fruits.join(\" / \") と逆に書くと AttributeError になります\n・join できるのは文字列のリストだけです。数値が混ざっていると TypeError になります。",
    hint: "csv.split(\",\") で分割、\" / \".join(リスト) で連結します。joinは区切り文字側のメソッドです。",
    answerCode: "csv = \"apple,banana,cherry\"\nfruits = csv.split(\",\")\nprint(fruits)\nprint(\" / \".join(fruits))"
  },
  {
    id: "i012",
    level: "intermediate",
    category: "foundation",
    title: "文字列の置換",
    description:
      "文字列 text = \"今日は雨です。雨はきらいです。\" の「雨」をすべて「晴れ」に置き換えて出力してください。\n\n期待される出力:\n今日は晴れです。晴れはきらいです。",
    starterCode: "text = \"今日は雨です。雨はきらいです。\"\n# ここに続きを書いてください\n",
    expectedOutput: "今日は晴れです。晴れはきらいです。",
    explanation:
      "正解例:\n\ntext = \"今日は雨です。雨はきらいです。\"\nprint(text.replace(\"雨\", \"晴れ\"))\n\n" +
      "replace(置換前, 置換後) は該当する部分をすべて置き換えた新しい文字列を返します（2か所の「雨」が両方置き換わります）。\n\n" +
      "よくある間違い:\n・replace は元の文字列を変更しません。text.replace(...) だけ書いてから print(text) すると、置換前の文字列が出力されます。戻り値を使う（または text = text.replace(...) と再代入する）必要があります。",
    hint: "text.replace(\"雨\", \"晴れ\") の戻り値をprintします。",
    answerCode: "text = \"今日は雨です。雨はきらいです。\"\nprint(text.replace(\"雨\", \"晴れ\"))"
  },
  {
    id: "i013",
    level: "intermediate",
    category: "foundation",
    title: "デフォルト引数つきの関数",
    description:
      "base の exp 乗を返す関数 power(base, exp=2) を定義してください。exp を省略した場合は2乗になるようにします。\nそのうえで power(4) と power(2, 10) の結果をこの順番で1行ずつ出力してください。\n\n期待される出力:\n16\n1024",
    starterCode: "# デフォルト引数 exp=2 を持つ関数を定義してください\n",
    expectedOutput: "16\n1024",
    explanation:
      "正解例:\n\ndef power(base, exp=2):\n    return base ** exp\n\nprint(power(4))\nprint(power(2, 10))\n\n" +
      "引数に exp=2 のようにデフォルト値を設定すると、呼び出し時に省略できます。power(4) は exp が省略されたので 4 ** 2 = 16 になります。\n\n" +
      "よくある間違い:\n・デフォルト引数は通常の引数より後ろに書く必要があります。def power(exp=2, base): は SyntaxError です\n・べき乗の演算子は ** です（^ はべき乗ではなくビット演算なので注意）。",
    hint: "def power(base, exp=2): と定義し、base ** exp を返します。",
    answerCode: "def power(base, exp=2):\n    return base ** exp\n\nprint(power(4))\nprint(power(2, 10))"
  },
  {
    id: "i014",
    level: "intermediate",
    category: "foundation",
    title: "最小値と最大値を同時に返す関数",
    description:
      "数値のリストを受け取り、最小値と最大値の2つを返す関数 min_max を定義してください。\nそのうえで min_max([8, 3, 11, 5]) の結果を2つの変数で受け取り、最小値・最大値の順に1行ずつ出力してください。\n\n期待される出力:\n3\n11",
    starterCode: "# 2つの値を return する関数を定義してください\n",
    expectedOutput: "3\n11",
    explanation:
      "正解例:\n\ndef min_max(numbers):\n    return min(numbers), max(numbers)\n\nlow, high = min_max([8, 3, 11, 5])\nprint(low)\nprint(high)\n\n" +
      "return A, B のようにカンマで並べると複数の値を返せます（実体はタプルです）。受け取る側も low, high = ... と書くと2つの変数に分けて代入できます（アンパック代入）。\n\n" +
      "よくある間違い:\n・result = min_max(...) と1つの変数で受けると result はタプル (3, 11) になります。print(result) では \"(3, 11)\" と表示されてしまいます。",
    hint: "return min(numbers), max(numbers) で2つの値を返し、low, high = で受け取ります。",
    answerCode: "def min_max(numbers):\n    return min(numbers), max(numbers)\n\nlow, high = min_max([8, 3, 11, 5])\nprint(low)\nprint(high)"
  },
  {
    id: "i015",
    level: "intermediate",
    category: "engineering",
    title: "テストの平均点",
    description:
      "リスト scores = [82, 91, 76, 65, 88] の平均点を計算して出力してください。\n\n期待される出力:\n80.4",
    starterCode: "scores = [82, 91, 76, 65, 88]\n# ここに続きを書いてください\n",
    expectedOutput: "80.4",
    explanation:
      "正解例:\n\nscores = [82, 91, 76, 65, 88]\nprint(sum(scores) / len(scores))\n\n" +
      "平均は「合計 ÷ 個数」です。sum() で合計、len() で要素数が得られます。/ による割り算の結果は必ず float になります。\n\n" +
      "よくある間違い:\n・sum(scores) // len(scores) と切り捨て割り算を使うと 80 になってしまいます\n・forループで自力で合計しても正解です。標準ライブラリの statistics.mean() を使う方法もあります。",
    hint: "sum(scores) を len(scores) で割ります。",
    answerCode: "scores = [82, 91, 76, 65, 88]\nprint(sum(scores) / len(scores))"
  },
  {
    id: "i016",
    level: "intermediate",
    category: "foundation",
    title: "ランキング表示",
    description:
      "リスト members = [\"さくら\", \"ひろし\", \"たける\"] を使って、次の形式で順位付きで1行ずつ出力してください。\n\n1位: さくら\n2位: ひろし\n3位: たける",
    starterCode: "members = [\"さくら\", \"ひろし\", \"たける\"]\n# ここに続きを書いてください\n",
    expectedOutput: "1位: さくら\n2位: ひろし\n3位: たける",
    explanation:
      "正解例:\n\nmembers = [\"さくら\", \"ひろし\", \"たける\"]\nfor i, name in enumerate(members, 1):\n    print(f\"{i}位: {name}\")\n\n" +
      "enumerate(リスト, 開始番号) を使うと「番号付き」でループできます。第2引数の 1 で番号を1から始められます（省略すると0から）。\n\n" +
      "よくある間違い:\n・enumerate(members) と開始番号を省略すると「0位」から始まってしまいます\n・for i in range(len(members)): print(f\"{i+1}位: {members[i]}\") でも正解ですが、enumerateの方がPythonらしい書き方です。",
    hint: "enumerate(members, 1) で1始まりの番号と要素を同時に取り出せます。",
    answerCode: "members = [\"さくら\", \"ひろし\", \"たける\"]\nfor i, name in enumerate(members, 1):\n    print(f\"{i}位: {name}\")"
  },
  {
    id: "i017",
    level: "intermediate",
    category: "foundation",
    title: "文字を数えて探す",
    description:
      "文字列 word = \"banana\" について、次の2つをこの順番で1行ずつ出力してください。\n\n1行目: \"a\" が何回出てくるか\n2行目: \"n\" が最初に出てくる位置（インデックス）",
    starterCode: "word = \"banana\"\n# ここに続きを書いてください\n",
    expectedOutput: "3\n2",
    explanation:
      "正解例:\n\nword = \"banana\"\nprint(word.count(\"a\"))\nprint(word.find(\"n\"))\n\n" +
      "count() は出現回数、find() は最初に見つかった位置（インデックス）を返します。インデックスは0から数えるため、b(0) a(1) n(2) で \"n\" の位置は2です。\n\n" +
      "よくある間違い:\n・インデックスを1から数えてしまい3と答える\n・find() は見つからないとき -1 を返します。似たメソッドの index() は見つからないと ValueError を投げる、という違いがあります。",
    hint: "word.count(\"a\") と word.find(\"n\") です。インデックスは0始まりです。",
    answerCode: "word = \"banana\"\nprint(word.count(\"a\"))\nprint(word.find(\"n\"))"
  },
  {
    id: "i018",
    level: "intermediate",
    category: "foundation",
    title: "大きい順に並べ替え",
    description:
      "リスト nums = [23, 5, 41, 18] を降順（大きい順）に並べ替えた新しいリストを作り、printで出力してください。\n元のリスト nums は変更しないこと。\n\n期待される出力:\n[41, 23, 18, 5]",
    starterCode: "nums = [23, 5, 41, 18]\n# 元のリストを変更せずに並べ替えましょう\n",
    expectedOutput: "[41, 23, 18, 5]",
    explanation:
      "正解例:\n\nnums = [23, 5, 41, 18]\nprint(sorted(nums, reverse=True))\n\n" +
      "sorted() は並べ替えた「新しいリスト」を返すため、元のリストは変更されません。reverse=True で降順になります。\n\n" +
      "一方 nums.sort(reverse=True) は元のリスト自体を並べ替えます（今回は「元のリストは変更しない」という条件があるため sorted() が適切です）。\n\n" +
      "よくある間違い:\n・sorted(nums).reverse() は None を返すため使えません\n・sorted(nums)[::-1] でも同じ結果になりますが、reverse=True の方が意図が明確です。",
    hint: "sorted(nums, reverse=True) で降順の新しいリストが得られます。",
    answerCode: "nums = [23, 5, 41, 18]\nprint(sorted(nums, reverse=True))"
  },
  {
    id: "i019",
    level: "intermediate",
    category: "engineering",
    title: "300円以下のメニューを探す",
    description:
      "辞書 menu = {\"コーヒー\": 350, \"紅茶\": 300, \"水\": 100, \"ケーキ\": 450} から、300円以下の商品だけを「商品名: 価格円」の形式で1行ずつ出力してください。\n\n期待される出力:\n紅茶: 300円\n水: 100円",
    starterCode: "menu = {\"コーヒー\": 350, \"紅茶\": 300, \"水\": 100, \"ケーキ\": 450}\n# ここに続きを書いてください\n",
    expectedOutput: "紅茶: 300円\n水: 100円",
    explanation:
      "正解例:\n\nmenu = {\"コーヒー\": 350, \"紅茶\": 300, \"水\": 100, \"ケーキ\": 450}\nfor name, price in menu.items():\n    if price <= 300:\n        print(f\"{name}: {price}円\")\n\n" +
      "items() でキーと値を同時に取り出し、ループの中で条件判定する「ループ＋フィルタ」の定番パターンです。\n\n" +
      "よくある間違い:\n・「300円以下」は price <= 300 です。price < 300 にすると紅茶（300円）が含まれません。「以下」と「未満」の違いに注意\n・辞書は追加した順序を保つため、出力順は定義順（紅茶→水）になります。",
    hint: "for name, price in menu.items(): の中で if price <= 300: を判定します。",
    answerCode: "menu = {\"コーヒー\": 350, \"紅茶\": 300, \"水\": 100, \"ケーキ\": 450}\nfor name, price in menu.items():\n    if price <= 300:\n        print(f\"{name}: {price}円\")"
  },
  {
    id: "i020",
    level: "intermediate",
    category: "foundation",
    title: "偶数だけを取り出す関数",
    description:
      "数値のリストを受け取り、偶数だけを集めた新しいリストを返す関数 pick_even を定義してください。\nそのうえで pick_even([1, 2, 3, 4, 5, 6]) の結果をprintで出力してください。\n\n期待される出力:\n[2, 4, 6]",
    starterCode: "# 関数 pick_even を定義してください\n",
    expectedOutput: "[2, 4, 6]",
    explanation:
      "正解例:\n\ndef pick_even(numbers):\n    return [n for n in numbers if n % 2 == 0]\n\nprint(pick_even([1, 2, 3, 4, 5, 6]))\n\n" +
      "「条件に合う要素だけの新しいリストを返す」処理は、内包表記の if を使うと1行で書けます。forループとappendで書いても正解です:\n\ndef pick_even(numbers):\n    result = []\n    for n in numbers:\n        if n % 2 == 0:\n            result.append(n)\n    return result\n\n" +
      "よくある間違い:\n・関数の中で print してしまい、None が余分に出力される（return で返してから呼び出し側で print します）。",
    hint: "内包表記 [n for n in numbers if n % 2 == 0] を return すると簡潔です。",
    answerCode: "def pick_even(numbers):\n    return [n for n in numbers if n % 2 == 0]\n\nprint(pick_even([1, 2, 3, 4, 5, 6]))"
  },

  {
    id: "i021",
    level: "intermediate",
    category: "foundation",
    title: "enumerateで番号付きリスト",
    description:
      "メンバーのリスト members = [\"佐藤\", \"鈴木\", \"高橋\"] について、enumerate を使って1から始まる番号付きで1行ずつ出力してください。\n\n期待される出力:\n1番: 佐藤\n2番: 鈴木\n3番: 高橋",
    starterCode: "members = [\"佐藤\", \"鈴木\", \"高橋\"]\n# enumerate(members, 1) を使ってみましょう\n",
    expectedOutput: "1番: 佐藤\n2番: 鈴木\n3番: 高橋",
    explanation:
      "正解例:\n\nmembers = [\"佐藤\", \"鈴木\", \"高橋\"]\nfor i, name in enumerate(members, 1):\n    print(f\"{i}番: {name}\")\n\n" +
      "enumerate(リスト) は「番号と要素のペア」を順に返します。第2引数で開始番号を指定でき、enumerate(members, 1) なら1始まりになります。\n\n" +
      "よくある間違い:\n・第2引数を省略すると0始まりになり「0番: 佐藤」とずれてしまいます\n・for i in range(len(members)): と書いても動きますが、enumerate のほうがPythonらしい書き方です。",
    hint: "for i, name in enumerate(members, 1): で番号と名前を同時に受け取れます。",
    answerCode: "members = [\"佐藤\", \"鈴木\", \"高橋\"]\nfor i, name in enumerate(members, 1):\n    print(f\"{i}番: {name}\")"
  },
  {
    id: "i022",
    level: "intermediate",
    category: "foundation",
    title: "zipで2つのリストをまとめる",
    description:
      "名前のリスト names = [\"太郎\", \"花子\", \"次郎\"] と点数のリスト scores = [85, 92, 78] を zip でまとめ、次の形式で1行ずつ出力してください。\n\n期待される出力:\n太郎: 85点\n花子: 92点\n次郎: 78点",
    starterCode: "names = [\"太郎\", \"花子\", \"次郎\"]\nscores = [85, 92, 78]\n# zip(names, scores) を使ってみましょう\n",
    expectedOutput: "太郎: 85点\n花子: 92点\n次郎: 78点",
    explanation:
      "正解例:\n\nnames = [\"太郎\", \"花子\", \"次郎\"]\nscores = [85, 92, 78]\nfor name, score in zip(names, scores):\n    print(f\"{name}: {score}点\")\n\n" +
      "zip(リストA, リストB) は2つのリストの要素を先頭から順にペアにします。「対応する2つのデータを同時にループする」場面の定番です。長さが違う場合は短いほうに合わせられます。\n\n" +
      "よくある間違い:\n・for name in names: の中で scores[i] を使う方法もありますが、インデックス管理が不要な zip のほうが安全で読みやすい書き方です。",
    hint: "for name, score in zip(names, scores): で2つの要素を同時に受け取れます。",
    answerCode: "names = [\"太郎\", \"花子\", \"次郎\"]\nscores = [85, 92, 78]\nfor name, score in zip(names, scores):\n    print(f\"{name}: {score}点\")"
  },
  {
    id: "i023",
    level: "intermediate",
    category: "foundation",
    title: "辞書のgetで安全に取り出す",
    description:
      "在庫の辞書 stock = {\"りんご\": 3, \"みかん\": 0} について、getメソッドを使って次の2つをこの順番で1行ずつ出力してください。\n\n1行目: \"りんご\" の在庫数\n2行目: \"ばなな\" の在庫数（存在しないキーなので 0 を返すこと）\n\n期待される出力:\n3\n0",
    starterCode: "stock = {\"りんご\": 3, \"みかん\": 0}\n# stock.get(キー, デフォルト値) を使ってみましょう\n",
    expectedOutput: "3\n0",
    explanation:
      "正解例:\n\nstock = {\"りんご\": 3, \"みかん\": 0}\nprint(stock.get(\"りんご\", 0))\nprint(stock.get(\"ばなな\", 0))\n\n" +
      "stock[\"ばなな\"] のように存在しないキーへ角カッコでアクセスすると KeyError でプログラムが停止します。get(キー, デフォルト値) なら、キーがなくてもデフォルト値が返り安全です。\n\n" +
      "よくある間違い:\n・get のデフォルト値を省略すると None が返り、出力が「None」になってしまいます\n・「存在するか分からないキー」を扱うときは get か in での事前チェックが定石です。",
    hint: "stock.get(\"ばなな\", 0) と書くと、キーがない場合に 0 が返ります。",
    answerCode: "stock = {\"りんご\": 3, \"みかん\": 0}\nprint(stock.get(\"りんご\", 0))\nprint(stock.get(\"ばなな\", 0))"
  },
  {
    id: "i024",
    level: "intermediate",
    category: "foundation",
    title: "2次元リストで座席表",
    description:
      "座席表が2次元リスト seats = [[\"A1\", \"A2\", \"A3\"], [\"B1\", \"B2\", \"B3\"]] で表されています。\n次の2つの座席をこの順番で1行ずつ出力してください。\n\n1行目: 2行目の1番目の座席（B1）\n2行目: 1行目の2番目の座席（A2）\n\n期待される出力:\nB1\nA2",
    starterCode: "seats = [[\"A1\", \"A2\", \"A3\"], [\"B1\", \"B2\", \"B3\"]]\n# seats[行][列] でアクセスします\n",
    expectedOutput: "B1\nA2",
    explanation:
      "正解例:\n\nseats = [[\"A1\", \"A2\", \"A3\"], [\"B1\", \"B2\", \"B3\"]]\nprint(seats[1][0])\nprint(seats[0][1])\n\n" +
      "リストの中にリストを入れると表（2次元）構造を表せます。seats[1] が2番目の行 [\"B1\", \"B2\", \"B3\"] で、さらに [0] を付けるとその中の1番目の要素が取れます。\n\n" +
      "よくある間違い:\n・インデックスは0始まりです。「2行目の1番目」は seats[1][0] です（seats[2][1] ではありません）\n・seats[1, 0] のようにカンマで書くのはエラーです。角カッコを2つ重ねます。",
    hint: "「2行目の1番目」は seats[1][0] です。インデックスは0始まりであることに注意。",
    answerCode: "seats = [[\"A1\", \"A2\", \"A3\"], [\"B1\", \"B2\", \"B3\"]]\nprint(seats[1][0])\nprint(seats[0][1])"
  },
  {
    id: "i025",
    level: "intermediate",
    category: "foundation",
    title: "スライスのステップと逆順",
    description:
      "1から10までの整数のリスト nums について、スライスを使って次の2つをこの順番で1行ずつ出力してください。\n\n1行目: 1つおきに取り出したリスト（奇数だけになる）\n2行目: 逆順にしたリスト\n\n期待される出力:\n[1, 3, 5, 7, 9]\n[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]",
    starterCode: "nums = list(range(1, 11))\n# スライスの3つ目の値（ステップ）を使ってみましょう\n",
    expectedOutput: "[1, 3, 5, 7, 9]\n[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]",
    explanation:
      "正解例:\n\nnums = list(range(1, 11))\nprint(nums[::2])\nprint(nums[::-1])\n\n" +
      "スライスは [開始:終了:ステップ] の3つの値を指定できます。[::2] は「最初から最後まで2つ刻み」、[::-1] は「ステップ-1＝逆順」という意味で、リストを逆順にする定番イディオムです。\n\n" +
      "よくある間違い:\n・[::2] は「インデックス0, 2, 4...の要素」なので、結果は奇数 [1, 3, 5, 7, 9] です（偶数ではありません）\n・nums.reverse() は元のリスト自体を書き換えます。スライス [::-1] は新しいリストを作る点が違います。",
    hint: "1つおきは nums[::2]、逆順は nums[::-1] です。",
    answerCode: "nums = list(range(1, 11))\nprint(nums[::2])\nprint(nums[::-1])"
  },
  {
    id: "i026",
    level: "intermediate",
    category: "foundation",
    title: "continueとbreakで流れを制御",
    description:
      "数値のリスト nums = [3, -1, 5, -2, 7, 0, 9] を先頭から処理します。\n\n・負の数は continue でスキップする\n・0 が出たら break でループを終了する\n・それ以外の数はそのまま出力する\n\nループの後に「終了」と出力してください。\n\n期待される出力:\n3\n5\n7\n終了",
    starterCode: "nums = [3, -1, 5, -2, 7, 0, 9]\n# continue と break を使い分けてください\n",
    expectedOutput: "3\n5\n7\n終了",
    explanation:
      "正解例:\n\nnums = [3, -1, 5, -2, 7, 0, 9]\nfor n in nums:\n    if n < 0:\n        continue\n    if n == 0:\n        break\n    print(n)\nprint(\"終了\")\n\n" +
      "continue は「この回だけ飛ばして次のループへ」、break は「ループ全体を打ち切る」です。0 の後ろにある 9 は break により処理されません。\n\n" +
      "よくある間違い:\n・continue と break を逆にすると出力が大きく変わります\n・「終了」のprintをforの中（インデント内）に書くと毎回出力されてしまいます。ループの外に書きます。",
    hint: "if n < 0: continue → if n == 0: break → print(n) の順に書きます。",
    answerCode: "nums = [3, -1, 5, -2, 7, 0, 9]\nfor n in nums:\n    if n < 0:\n        continue\n    if n == 0:\n        break\n    print(n)\nprint(\"終了\")"
  },
  {
    id: "i027",
    level: "intermediate",
    category: "foundation",
    title: "setで重複を除く",
    description:
      "来店者の記録 visitors = [\"太郎\", \"花子\", \"太郎\", \"次郎\", \"花子\"] には同じ人が複数回含まれています。\nset を使って次の2つをこの順番で1行ずつ出力してください。\n\n1行目: 重複を除いた人数\n2行目: \"太郎\" が来店したかどうか（True / False）\n\n期待される出力:\n3\nTrue",
    starterCode: "visitors = [\"太郎\", \"花子\", \"太郎\", \"次郎\", \"花子\"]\n# set(visitors) で重複が消えます\n",
    expectedOutput: "3\nTrue",
    explanation:
      "正解例:\n\nvisitors = [\"太郎\", \"花子\", \"太郎\", \"次郎\", \"花子\"]\nunique = set(visitors)\nprint(len(unique))\nprint(\"太郎\" in unique)\n\n" +
      "set（集合）は「重複のない要素の集まり」です。リストを set() に渡すだけで重複が取り除かれます。in による存在チェックもリストより高速で、「ユニーク数を数える」「重複を消す」場面の定番です。\n\n" +
      "よくある間違い:\n・set は順序を保証しません。print(unique) の表示順は実行のたびに変わる可能性があるため、この問題では人数と存在チェックだけを出力しています。",
    hint: "len(set(visitors)) でユニークな人数、\"太郎\" in set(visitors) で存在チェックができます。",
    answerCode: "visitors = [\"太郎\", \"花子\", \"太郎\", \"次郎\", \"花子\"]\nunique = set(visitors)\nprint(len(unique))\nprint(\"太郎\" in unique)"
  },
  {
    id: "i028",
    level: "intermediate",
    category: "foundation",
    title: "f-stringの表示フォーマット",
    description:
      "f-string のフォーマット指定を使って、次の2つをこの順番で1行ずつ出力してください。\n\n1行目: price = 1234567 を3桁ごとのカンマ区切りにして「円」を付ける\n2行目: pi = 3.14159 を小数点以下2桁に丸める\n\n期待される出力:\n1,234,567円\n3.14",
    starterCode: "price = 1234567\npi = 3.14159\n# f\"{値:書式}\" の形で指定します\n",
    expectedOutput: "1,234,567円\n3.14",
    explanation:
      "正解例:\n\nprice = 1234567\npi = 3.14159\nprint(f\"{price:,}円\")\nprint(f\"{pi:.2f}\")\n\n" +
      "f-string では {値:書式指定} の形で表示形式を指定できます。「,」は3桁区切り、「.2f」は小数点以下2桁の意味です。金額やレポートの出力で非常によく使います。\n\n" +
      "よくある間違い:\n・{price},円 のようにコロンの位置を間違えると書式になりません。コロンは波カッコの中に書きます\n・.2f は四捨五入ではなく「偶数丸め」になる場合がありますが、3.14159 → 3.14 は問題ありません。",
    hint: "カンマ区切りは f\"{price:,}\"、小数2桁は f\"{pi:.2f}\" です。",
    answerCode: "price = 1234567\npi = 3.14159\nprint(f\"{price:,}円\")\nprint(f\"{pi:.2f}\")"
  },

  // ---------------------------------------------------------
  // intermediate（中級）× engineering: JSON・集計・クレンジング・CSV・ログ解析
  // ---------------------------------------------------------
  {
    id: "i029",
    level: "intermediate",
    category: "engineering",
    title: "JSON文字列を読み取る",
    description:
      "サーバー情報のJSON文字列 data が与えられています。jsonモジュールで辞書に変換し、次の2つをこの順番で1行ずつ出力してください。\n\n1行目: name の値\n2行目: cpu の値\n\n期待される出力:\nサーバーA\n4",
    starterCode: "import json\n\ndata = '{\"name\": \"サーバーA\", \"cpu\": 4, \"memory\": 16}'\n# json.loads() で辞書に変換しましょう\n",
    expectedOutput: "サーバーA\n4",
    explanation:
      "正解例:\n\nimport json\n\ndata = '{\"name\": \"サーバーA\", \"cpu\": 4, \"memory\": 16}'\nserver = json.loads(data)\nprint(server[\"name\"])\nprint(server[\"cpu\"])\n\n" +
      "json.loads() はJSON文字列をPythonの辞書・リストに変換します（loadsのsはstringの意味です）。APIのレスポンスや設定ファイルの読み取りなど、データを扱う仕事の最初の一歩になる操作です。\n\n" +
      "よくある間違い:\n・変換前の data は「ただの文字列」なので data[\"name\"] はエラーになります。必ず loads してからアクセスします\n・json.load()（sなし）はファイルオブジェクト用です。文字列には loads を使います。",
    hint: "server = json.loads(data) で辞書になります。あとは server[\"name\"] でアクセスできます。",
    answerCode: "import json\n\ndata = '{\"name\": \"サーバーA\", \"cpu\": 4, \"memory\": 16}'\nserver = json.loads(data)\nprint(server[\"name\"])\nprint(server[\"cpu\"])"
  },
  {
    id: "i030",
    level: "intermediate",
    category: "engineering",
    title: "辞書をJSONに変換する",
    description:
      "辞書 user = {\"id\": 1, \"name\": \"佐藤\"} を json.dumps() でJSON文字列に変換して出力してください。\n日本語がそのまま表示されるように ensure_ascii=False を指定すること。\n\n期待される出力:\n{\"id\": 1, \"name\": \"佐藤\"}",
    starterCode: "import json\n\nuser = {\"id\": 1, \"name\": \"佐藤\"}\n# json.dumps(辞書, ensure_ascii=False) を使いましょう\n",
    expectedOutput: "{\"id\": 1, \"name\": \"佐藤\"}",
    explanation:
      "正解例:\n\nimport json\n\nuser = {\"id\": 1, \"name\": \"佐藤\"}\nprint(json.dumps(user, ensure_ascii=False))\n\n" +
      "json.dumps() は loads の逆で、Pythonの辞書・リストをJSON文字列に変換します。APIへの送信やファイル保存の前に使う定番操作です。\n\n" +
      "よくある間違い:\n・ensure_ascii=False を付けないと日本語が \\u4f50\\u85e4 のようなエスケープ表記になります\n・print(user) との違いに注意: 辞書の表示はシングルクォートですが、JSONは必ずダブルクォートです。",
    hint: "json.dumps(user, ensure_ascii=False) です。Falseの先頭は大文字です。",
    answerCode: "import json\n\nuser = {\"id\": 1, \"name\": \"佐藤\"}\nprint(json.dumps(user, ensure_ascii=False))"
  },
  {
    id: "i031",
    level: "intermediate",
    category: "engineering",
    title: "ネストしたJSONから値を取り出す",
    description:
      "入れ子構造のJSON文字列 data から、次の2つをこの順番で1行ずつ出力してください。\n\n1行目: ユーザーの住所の city\n2行目: ユーザーの住所の zip\n\n期待される出力:\n東京\n100-0001",
    starterCode: "import json\n\ndata = '{\"user\": {\"name\": \"田中\", \"address\": {\"city\": \"東京\", \"zip\": \"100-0001\"}}}'\n# 角カッコを重ねて深い階層へアクセスします\n",
    expectedOutput: "東京\n100-0001",
    explanation:
      "正解例:\n\nimport json\n\ndata = '{\"user\": {\"name\": \"田中\", \"address\": {\"city\": \"東京\", \"zip\": \"100-0001\"}}}'\nobj = json.loads(data)\nprint(obj[\"user\"][\"address\"][\"city\"])\nprint(obj[\"user\"][\"address\"][\"zip\"])\n\n" +
      "実際のAPIレスポンスはほとんどがこのような入れ子（ネスト）構造です。外側から1階層ずつ [\"キー\"] を重ねてたどります。\n\n" +
      "よくある間違い:\n・階層を飛ばして obj[\"address\"] とアクセスすると KeyError になります。構造を上からたどることが大切です\n・どんな構造か分からないときは、まず print(obj) で全体を確認するのがデバッグの定石です。",
    hint: "obj[\"user\"][\"address\"][\"city\"] のように外側から順にたどります。",
    answerCode: "import json\n\ndata = '{\"user\": {\"name\": \"田中\", \"address\": {\"city\": \"東京\", \"zip\": \"100-0001\"}}}'\nobj = json.loads(data)\nprint(obj[\"user\"][\"address\"][\"city\"])\nprint(obj[\"user\"][\"address\"][\"zip\"])"
  },
  {
    id: "i032",
    level: "intermediate",
    category: "engineering",
    title: "JSON配列をループ処理",
    description:
      "商品リストのJSON文字列 data を読み込み、各商品を「商品名: 価格円」の形式で1行ずつ出力してください。\n\n期待される出力:\nりんご: 120円\nバナナ: 80円",
    starterCode: "import json\n\ndata = '[{\"name\": \"りんご\", \"price\": 120}, {\"name\": \"バナナ\", \"price\": 80}]'\n# loads するとリストになるので、forで回せます\n",
    expectedOutput: "りんご: 120円\nバナナ: 80円",
    explanation:
      "正解例:\n\nimport json\n\ndata = '[{\"name\": \"りんご\", \"price\": 120}, {\"name\": \"バナナ\", \"price\": 80}]'\nfor item in json.loads(data):\n    print(f\"{item['name']}: {item['price']}円\")\n\n" +
      "JSONの配列（[...]）は loads するとPythonのリストになります。「辞書のリスト」はデータ処理で最も頻出する形で、forで1件ずつ取り出して処理します。\n\n" +
      "よくある間違い:\n・f-string の中では item['name'] とシングルクォートを使います（外側のダブルクォートと衝突するため）\n・item.name のようなドット記法はPythonの辞書では使えません。",
    hint: "for item in json.loads(data): で1件ずつ取り出し、item['name'] と item['price'] を使います。",
    answerCode: "import json\n\ndata = '[{\"name\": \"りんご\", \"price\": 120}, {\"name\": \"バナナ\", \"price\": 80}]'\nfor item in json.loads(data):\n    print(f\"{item['name']}: {item['price']}円\")"
  },
  {
    id: "i033",
    level: "intermediate",
    category: "engineering",
    title: "欠けているキーに備える",
    description:
      "ユーザーリストのJSONには email が登録されていない人がいます。getメソッドを使って、各ユーザーを「名前: メールアドレス」の形式で出力してください。emailがない場合は「未登録」と表示すること。\n\n期待される出力:\n佐藤: sato@example.com\n鈴木: 未登録",
    starterCode: "import json\n\ndata = '[{\"name\": \"佐藤\", \"email\": \"sato@example.com\"}, {\"name\": \"鈴木\"}]'\n# get(キー, デフォルト値) で安全に取り出せます\n",
    expectedOutput: "佐藤: sato@example.com\n鈴木: 未登録",
    explanation:
      "正解例:\n\nimport json\n\ndata = '[{\"name\": \"佐藤\", \"email\": \"sato@example.com\"}, {\"name\": \"鈴木\"}]'\nfor user in json.loads(data):\n    print(f\"{user['name']}: {user.get('email', '未登録')}\")\n\n" +
      "実データでは「あるはずのキーがない」ことが日常的に起こります。user[\"email\"] だと鈴木さんの行で KeyError になりますが、get なら止まらずデフォルト値で処理を続けられます。データ処理の堅牢性を高める基本テクニックです。\n\n" +
      "よくある間違い:\n・角カッコアクセスのままだと2人目でプログラムが停止します\n・getのデフォルト値を省略すると None が表示されてしまいます。",
    hint: "user.get('email', '未登録') で、キーがない場合に '未登録' が返ります。",
    answerCode: "import json\n\ndata = '[{\"name\": \"佐藤\", \"email\": \"sato@example.com\"}, {\"name\": \"鈴木\"}]'\nfor user in json.loads(data):\n    print(f\"{user['name']}: {user.get('email', '未登録')}\")"
  },
  {
    id: "i034",
    level: "intermediate",
    category: "engineering",
    title: "投票を集計する",
    description:
      "投票結果のリスト votes = [\"犬\", \"猫\", \"犬\", \"鳥\", \"犬\", \"猫\"] を辞書で集計し、集計結果の辞書を出力してください。\n\n期待される出力:\n{'犬': 3, '猫': 2, '鳥': 1}",
    starterCode: "votes = [\"犬\", \"猫\", \"犬\", \"鳥\", \"犬\", \"猫\"]\ncounts = {}\n# get(v, 0) + 1 のパターンで数えましょう\n",
    expectedOutput: "{'犬': 3, '猫': 2, '鳥': 1}",
    explanation:
      "正解例:\n\nvotes = [\"犬\", \"猫\", \"犬\", \"鳥\", \"犬\", \"猫\"]\ncounts = {}\nfor v in votes:\n    counts[v] = counts.get(v, 0) + 1\nprint(counts)\n\n" +
      "counts.get(v, 0) + 1 は「すでに数えていればその値+1、初めてなら 0+1」という意味で、件数カウントの最重要イディオムです。ログ解析・アンケート集計・売上集計など、あらゆる場面で使います。\n\n" +
      "よくある間違い:\n・counts[v] += 1 だけだと、初めてのキーで KeyError になります\n・辞書は追加した順に表示されるため、出力は登場順（犬→猫→鳥）になります。",
    hint: "for v in votes: の中で counts[v] = counts.get(v, 0) + 1 とします。",
    answerCode: "votes = [\"犬\", \"猫\", \"犬\", \"鳥\", \"犬\", \"猫\"]\ncounts = {}\nfor v in votes:\n    counts[v] = counts.get(v, 0) + 1\nprint(counts)"
  },
  {
    id: "i035",
    level: "intermediate",
    category: "engineering",
    title: "カテゴリ別に売上を合計",
    description:
      "（カテゴリ, 金額）のタプルのリスト sales を、カテゴリごとに合計した辞書を作って出力してください。\n\n期待される出力:\n{'食品': 2400, '日用品': 1100}",
    starterCode: "sales = [(\"食品\", 1200), (\"日用品\", 800), (\"食品\", 500), (\"日用品\", 300), (\"食品\", 700)]\ntotals = {}\n# カテゴリをキーに金額を加算していきます\n",
    expectedOutput: "{'食品': 2400, '日用品': 1100}",
    explanation:
      "正解例:\n\nsales = [(\"食品\", 1200), (\"日用品\", 800), (\"食品\", 500), (\"日用品\", 300), (\"食品\", 700)]\ntotals = {}\nfor category, amount in sales:\n    totals[category] = totals.get(category, 0) + amount\nprint(totals)\n\n" +
      "件数カウントの get イディオムを「+1」から「+金額」に変えるだけで、グループ別の合計（SQLの GROUP BY + SUM に相当）になります。データ集計の基本形です。\n\n" +
      "よくある間違い:\n・for文でタプルを for category, amount in sales: と2つの変数に分解（アンパック）して受け取るのがポイントです\n・+ 1 のままにすると金額ではなく件数が集計されてしまいます。",
    hint: "totals[category] = totals.get(category, 0) + amount で加算していきます。",
    answerCode: "sales = [(\"食品\", 1200), (\"日用品\", 800), (\"食品\", 500), (\"日用品\", 300), (\"食品\", 700)]\ntotals = {}\nfor category, amount in sales:\n    totals[category] = totals.get(category, 0) + amount\nprint(totals)"
  },
  {
    id: "i036",
    level: "intermediate",
    category: "engineering",
    title: "Counterで頻度を数える",
    description:
      "collections.Counter を使って、単語リスト words について次の2つをこの順番で1行ずつ出力してください。\n\n1行目: \"apple\" の出現回数\n2行目: 出現回数の多い上位2件（most_common）\n\n期待される出力:\n3\n[('apple', 3), ('banana', 2)]",
    starterCode: "from collections import Counter\n\nwords = [\"apple\", \"banana\", \"apple\", \"cherry\", \"banana\", \"apple\"]\n# Counter(words) で一発集計できます\n",
    expectedOutput: "3\n[('apple', 3), ('banana', 2)]",
    explanation:
      "正解例:\n\nfrom collections import Counter\n\nwords = [\"apple\", \"banana\", \"apple\", \"cherry\", \"banana\", \"apple\"]\nc = Counter(words)\nprint(c[\"apple\"])\nprint(c.most_common(2))\n\n" +
      "Counter はリストを渡すだけで頻度集計が完了する標準ライブラリです。get イディオムで書くループが1行になります。most_common(n) は上位n件を（要素, 回数）のリストで返し、ランキング作成に最適です。\n\n" +
      "よくある間違い:\n・存在しないキーへのアクセスは KeyError ではなく 0 が返ります（普通の辞書との違い）\n・most_common() と引数を省略すると全件が返ります。",
    hint: "c = Counter(words) のあと、c[\"apple\"] と c.most_common(2) を出力します。",
    answerCode: "from collections import Counter\n\nwords = [\"apple\", \"banana\", \"apple\", \"cherry\", \"banana\", \"apple\"]\nc = Counter(words)\nprint(c[\"apple\"])\nprint(c.most_common(2))"
  },
  {
    id: "i037",
    level: "intermediate",
    category: "engineering",
    title: "最高値・最安値の商品を探す",
    description:
      "商品データ（辞書のリスト）products から、max / min の key 引数を使って次の2つをこの順番で1行ずつ出力してください。\n\n1行目: 価格が最も高い商品の名前\n2行目: 価格が最も安い商品の名前\n\n期待される出力:\nノート\n消しゴム",
    starterCode: "products = [\n    {\"name\": \"ペン\", \"price\": 120},\n    {\"name\": \"ノート\", \"price\": 200},\n    {\"name\": \"消しゴム\", \"price\": 80},\n]\n# max(products, key=...) を使いましょう\n",
    expectedOutput: "ノート\n消しゴム",
    explanation:
      "正解例:\n\nproducts = [\n    {\"name\": \"ペン\", \"price\": 120},\n    {\"name\": \"ノート\", \"price\": 200},\n    {\"name\": \"消しゴム\", \"price\": 80},\n]\nhighest = max(products, key=lambda p: p[\"price\"])\nlowest = min(products, key=lambda p: p[\"price\"])\nprint(highest[\"name\"])\nprint(lowest[\"name\"])\n\n" +
      "max / min に key を渡すと「何を基準に大小を比べるか」を指定でき、戻り値は基準値ではなく要素そのもの（辞書ごと）が返ります。「一番◯◯なレコードを探す」処理の定番です。\n\n" +
      "よくある間違い:\n・max(p[\"price\"] for p in products) だと最大の価格（200）しか得られず、商品名が分かりません\n・key を付けないと辞書同士の比較になりエラーです。",
    hint: "max(products, key=lambda p: p[\"price\"]) は「価格が最大の辞書」を返します。",
    answerCode: "products = [\n    {\"name\": \"ペン\", \"price\": 120},\n    {\"name\": \"ノート\", \"price\": 200},\n    {\"name\": \"消しゴム\", \"price\": 80},\n]\nhighest = max(products, key=lambda p: p[\"price\"])\nlowest = min(products, key=lambda p: p[\"price\"])\nprint(highest[\"name\"])\nprint(lowest[\"name\"])"
  },
  {
    id: "i038",
    level: "intermediate",
    category: "engineering",
    title: "平均気温と寒暖差",
    description:
      "気温データ temps = [22.5, 25.1, 23.8, 26.2] について、次の2つを小数点以下1桁に丸めてこの順番で1行ずつ出力してください。\n\n1行目: 平均気温\n2行目: 最高気温と最低気温の差\n\n期待される出力:\n24.4\n3.7",
    starterCode: "temps = [22.5, 25.1, 23.8, 26.2]\n# sum/len で平均、max-min で差を計算し、round で丸めます\n",
    expectedOutput: "24.4\n3.7",
    explanation:
      "正解例:\n\ntemps = [22.5, 25.1, 23.8, 26.2]\navg = sum(temps) / len(temps)\nprint(round(avg, 1))\nprint(round(max(temps) - min(temps), 1))\n\n" +
      "平均は sum() / len() が基本形です。round(値, 桁数) で小数点以下の桁数を指定して丸めます。\n\n" +
      "よくある間違い:\n・26.2 - 22.5 は浮動小数点誤差で 3.7000000000000002 になります。計算結果を表示する前に round で丸めるのは、実務のレポート作成でも必須の処理です\n・round(avg) と桁数を省略すると整数に丸められてしまいます。",
    hint: "round(sum(temps) / len(temps), 1) で小数1桁の平均になります。引き算の結果も round が必要です。",
    answerCode: "temps = [22.5, 25.1, 23.8, 26.2]\navg = sum(temps) / len(temps)\nprint(round(avg, 1))\nprint(round(max(temps) - min(temps), 1))"
  },
  {
    id: "i039",
    level: "intermediate",
    category: "engineering",
    title: "売上金額の合計（単価×数量）",
    description:
      "注文データ orders（辞書のリスト）について、各注文の「単価×数量」を合計した売上金額を出力してください。\n\n期待される出力:\n2630",
    starterCode: "orders = [\n    {\"item\": \"コーヒー\", \"price\": 450, \"qty\": 2},\n    {\"item\": \"サンド\", \"price\": 380, \"qty\": 1},\n    {\"item\": \"コーヒー\", \"price\": 450, \"qty\": 3},\n]\n# sum() とジェネレータ式が便利です\n",
    expectedOutput: "2630",
    explanation:
      "正解例:\n\norders = [\n    {\"item\": \"コーヒー\", \"price\": 450, \"qty\": 2},\n    {\"item\": \"サンド\", \"price\": 380, \"qty\": 1},\n    {\"item\": \"コーヒー\", \"price\": 450, \"qty\": 3},\n]\ntotal = sum(o[\"price\"] * o[\"qty\"] for o in orders)\nprint(total)\n\n" +
      "sum(式 for 要素 in リスト) の形で「各要素を計算してから合計」が1行で書けます。450×2 + 380×1 + 450×3 = 2630 です。売上集計の最も基本的なパターンです。\n\n" +
      "よくある間違い:\n・sum(o[\"price\"]) のように数量を掛け忘れると単価の合計になってしまいます\n・forループで total += と書いても正解です。どちらも読めるようにしておきましょう。",
    hint: "sum(o[\"price\"] * o[\"qty\"] for o in orders) で1行で計算できます。",
    answerCode: "orders = [\n    {\"item\": \"コーヒー\", \"price\": 450, \"qty\": 2},\n    {\"item\": \"サンド\", \"price\": 380, \"qty\": 1},\n    {\"item\": \"コーヒー\", \"price\": 450, \"qty\": 3},\n]\ntotal = sum(o[\"price\"] * o[\"qty\"] for o in orders)\nprint(total)"
  },
  {
    id: "i040",
    level: "intermediate",
    category: "engineering",
    title: "setdefaultでグループ分け",
    description:
      "（クラス, 名前）のタプルのリスト students を、クラスごとに名前のリストへグループ分けした辞書を作って出力してください。\n\n期待される出力:\n{'1組': ['佐藤', '高橋'], '2組': ['鈴木', '田中']}",
    starterCode: "students = [(\"1組\", \"佐藤\"), (\"2組\", \"鈴木\"), (\"1組\", \"高橋\"), (\"2組\", \"田中\")]\ngroups = {}\n# groups.setdefault(キー, []).append(...) が定番です\n",
    expectedOutput: "{'1組': ['佐藤', '高橋'], '2組': ['鈴木', '田中']}",
    explanation:
      "正解例:\n\nstudents = [(\"1組\", \"佐藤\"), (\"2組\", \"鈴木\"), (\"1組\", \"高橋\"), (\"2組\", \"田中\")]\ngroups = {}\nfor cls, name in students:\n    groups.setdefault(cls, []).append(name)\nprint(groups)\n\n" +
      "setdefault(キー, デフォルト値) は「キーがなければデフォルト値を登録してから、その値を返す」メソッドです。「キーごとにリストへ振り分ける」グループ化処理が1行で書けます。\n\n" +
      "よくある間違い:\n・groups[cls].append(name) だけだと、初めてのクラスで KeyError になります\n・if cls not in groups: groups[cls] = [] と事前チェックしてからappendしても正解です。setdefault はその省略形です。",
    hint: "groups.setdefault(cls, []).append(name) で「なければ空リストを作って追加」になります。",
    answerCode: "students = [(\"1組\", \"佐藤\"), (\"2組\", \"鈴木\"), (\"1組\", \"高橋\"), (\"2組\", \"田中\")]\ngroups = {}\nfor cls, name in students:\n    groups.setdefault(cls, []).append(name)\nprint(groups)"
  },
  {
    id: "i041",
    level: "intermediate",
    category: "engineering",
    title: "欠損値を除いて平均を出す",
    description:
      "測定に失敗した箇所が None になっている点数リスト scores = [80, None, 92, None, 74] について、次の2つをこの順番で1行ずつ出力してください。\n\n1行目: 有効なデータの件数\n2行目: 有効なデータの平均\n\n期待される出力:\n3\n82.0",
    starterCode: "scores = [80, None, 92, None, 74]\n# まず None を除いたリストを作りましょう\n",
    expectedOutput: "3\n82.0",
    explanation:
      "正解例:\n\nscores = [80, None, 92, None, 74]\nvalid = [s for s in scores if s is not None]\nprint(len(valid))\nprint(sum(valid) / len(valid))\n\n" +
      "実データには欠損（None）がつきものです。sum() は None が混ざっているとエラーになるため、まず内包表記で有効なデータだけを取り出すのが定石です。Noneの判定は == ではなく is not None を使います。\n\n" +
      "よくある間違い:\n・len(scores) で割ると欠損込みの5件で割ってしまい、平均が不正に小さくなります。欠損値処理では「何で割るか」が重要です\n・if s と書くと 0 点のデータまで除外されてしまいます。None の判定は is not None が安全です。",
    hint: "[s for s in scores if s is not None] で有効データだけのリストを作ります。",
    answerCode: "scores = [80, None, 92, None, 74]\nvalid = [s for s in scores if s is not None]\nprint(len(valid))\nprint(sum(valid) / len(valid))"
  },
  {
    id: "i042",
    level: "intermediate",
    category: "engineering",
    title: "空白と空文字のクレンジング",
    description:
      "入力フォームから集めた名前リストには、前後の空白や空の入力が混ざっています。前後の空白を取り除き、空文字（空白だけの入力を含む）を除外したリストを出力してください。\n\n期待される出力:\n['佐藤', '鈴木', '高橋']",
    starterCode: "names = [\"  佐藤 \", \"\", \"鈴木\", \"  \", \"高橋  \"]\n# strip() と内包表記の if を組み合わせます\n",
    expectedOutput: "['佐藤', '鈴木', '高橋']",
    explanation:
      "正解例:\n\nnames = [\"  佐藤 \", \"\", \"鈴木\", \"  \", \"高橋  \"]\ncleaned = [n.strip() for n in names if n.strip()]\nprint(cleaned)\n\n" +
      "strip() は前後の空白を取り除きます。空文字 \"\" は条件式で False と評価されるため、if n.strip() で「空白を除いた結果が空でないものだけ」を残せます。データクレンジングの最初の一歩としてよく行う処理です。\n\n" +
      "よくある間違い:\n・if n だけだと \"  \"（空白のみ）が残ってしまいます。stripした結果で判定するのがポイントです\n・変換（n.strip()）とフィルタ（if n.strip()）の両方が必要です。片方だけでは期待の出力になりません。",
    hint: "[n.strip() for n in names if n.strip()] で「空白除去」と「空の除外」が同時にできます。",
    answerCode: "names = [\"  佐藤 \", \"\", \"鈴木\", \"  \", \"高橋  \"]\ncleaned = [n.strip() for n in names if n.strip()]\nprint(cleaned)"
  },
  {
    id: "i043",
    level: "intermediate",
    category: "engineering",
    title: "欠損値をゼロで補完",
    description:
      "在庫データ stock = [5, None, 3, None, 8] の None を 0 に置き換えたリストを作り、次の2つをこの順番で1行ずつ出力してください。\n\n1行目: 補完後のリスト\n2行目: 合計\n\n期待される出力:\n[5, 0, 3, 0, 8]\n16",
    starterCode: "stock = [5, None, 3, None, 8]\n# 三項演算子（AならB、そうでなければC）が使えます\n",
    expectedOutput: "[5, 0, 3, 0, 8]\n16",
    explanation:
      "正解例:\n\nstock = [5, None, 3, None, 8]\nfilled = [s if s is not None else 0 for s in stock]\nprint(filled)\nprint(sum(filled))\n\n" +
      "s if s is not None else 0 は三項演算子（条件式）で、「Noneでなければそのまま、Noneなら0」という変換を表します。欠損値を除外するのではなく「埋める」処理で、件数を維持したいときに使います。\n\n" +
      "よくある間違い:\n・内包表記では「変換の条件式は for の前」「絞り込みの if は for の後ろ」です。位置を間違えると構文エラーになります\n・除外（i041のパターン）と補完（この問題）は使い分けが重要です。合計だけなら除外でも同じですが、リストの長さが変わります。",
    hint: "[s if s is not None else 0 for s in stock] で None だけが 0 に置き換わります。",
    answerCode: "stock = [5, None, 3, None, 8]\nfilled = [s if s is not None else 0 for s in stock]\nprint(filled)\nprint(sum(filled))"
  },
  {
    id: "i044",
    level: "intermediate",
    category: "engineering",
    title: "順序を保って重複を除く",
    description:
      "アクセスログのユーザー列 logs = [\"user1\", \"user2\", \"user1\", \"user3\", \"user2\"] から、最初に登場した順序を保ったまま重複を除いたリストを出力してください。\n\n期待される出力:\n['user1', 'user2', 'user3']",
    starterCode: "logs = [\"user1\", \"user2\", \"user1\", \"user3\", \"user2\"]\n# dict.fromkeys() を使うと順序が保てます\n",
    expectedOutput: "['user1', 'user2', 'user3']",
    explanation:
      "正解例:\n\nlogs = [\"user1\", \"user2\", \"user1\", \"user3\", \"user2\"]\nunique = list(dict.fromkeys(logs))\nprint(unique)\n\n" +
      "set(logs) でも重複は消えますが、setは順序を保証しません。dict.fromkeys(logs) は各要素をキーにした辞書を作り（重複キーは自動的に1つになる）、辞書は挿入順を保つため「登場順を保った重複排除」ができます。\n\n" +
      "よくある間違い:\n・list(set(logs)) は実行のたびに順序が変わる可能性があり、出力が安定しません\n・seenという集合に「見たことがあるか」を記録しながらforで組み立てる方法でも正解です。",
    hint: "list(dict.fromkeys(logs)) の1行で「順序を保った重複排除」ができます。",
    answerCode: "logs = [\"user1\", \"user2\", \"user1\", \"user3\", \"user2\"]\nunique = list(dict.fromkeys(logs))\nprint(unique)"
  },
  {
    id: "i045",
    level: "intermediate",
    category: "engineering",
    title: "表記ゆれをそろえてカウント",
    description:
      "メールアドレスのリストには大文字・小文字の表記ゆれがあります。すべて小文字にそろえたうえで、次の2つをこの順番で1行ずつ出力してください。\n\n1行目: ユニークなアドレスの数\n2行目: ユニークなアドレスをソートしたリスト\n\n期待される出力:\n2\n['sato@example.com', 'suzuki@example.com']",
    starterCode: "emails = [\"Sato@Example.com\", \"sato@example.com\", \"SUZUKI@example.com\"]\n# lower() でそろえてから set にします\n",
    expectedOutput: "2\n['sato@example.com', 'suzuki@example.com']",
    explanation:
      "正解例:\n\nemails = [\"Sato@Example.com\", \"sato@example.com\", \"SUZUKI@example.com\"]\nnormalized = {e.lower() for e in emails}\nprint(len(normalized))\nprint(sorted(normalized))\n\n" +
      "{e.lower() for e in emails} は集合内包表記で、小文字化と重複排除を同時に行います。「正規化（表記をそろえる）→集計」はデータクレンジングの典型的な流れです。正規化しないと Sato@Example.com と sato@example.com が別人として数えられてしまいます。\n\n" +
      "よくある間違い:\n・setのままprintすると順序が不定なので、表示にはsorted()でリスト化するのが安全です\n・lower() を忘れると3件と数えられてしまいます。",
    hint: "{e.lower() for e in emails} で正規化済みの集合になります。表示は sorted() で。",
    answerCode: "emails = [\"Sato@Example.com\", \"sato@example.com\", \"SUZUKI@example.com\"]\nnormalized = {e.lower() for e in emails}\nprint(len(normalized))\nprint(sorted(normalized))"
  },
  {
    id: "i046",
    level: "intermediate",
    category: "engineering",
    title: "CSVの1行をsplitで分解",
    description:
      "CSV形式の1行 line = \"りんご,120,5\"（商品名,単価,数量）を分解し、次の2つをこの順番で1行ずつ出力してください。\n\n1行目: 商品名\n2行目: 単価×数量の金額\n\n期待される出力:\nりんご\n600",
    starterCode: "line = \"りんご,120,5\"\n# split(\",\") で3つに分解できます\n",
    expectedOutput: "りんご\n600",
    explanation:
      "正解例:\n\nline = \"りんご,120,5\"\nname, price, qty = line.split(\",\")\nprint(name)\nprint(int(price) * int(qty))\n\n" +
      "split(\",\") はカンマ区切りの文字列をリストに分解します。要素数が分かっていれば name, price, qty = ... と一度に変数へ受け取れます（アンパック）。\n\n" +
      "よくある間違い:\n・splitの結果はすべて「文字列」です。price * qty を int() なしで計算すると TypeError になります。CSVを扱うときは「数値への変換」を常に意識しましょう\n・受け取る変数の数と要素数が合わないと ValueError になります。",
    hint: "name, price, qty = line.split(\",\") で分解し、計算前に int() で変換します。",
    answerCode: "line = \"りんご,120,5\"\nname, price, qty = line.split(\",\")\nprint(name)\nprint(int(price) * int(qty))"
  },
  {
    id: "i047",
    level: "intermediate",
    category: "engineering",
    title: "csvモジュールで複数行を読む",
    description:
      "CSV形式の文字列 data を csv.reader で読み込み、各行を「商品名: 価格円」の形式で1行ずつ出力してください。\n※ファイルの代わりに io.StringIO で文字列を読み込みます。\n\n期待される出力:\nりんご: 120円\nバナナ: 80円\nみかん: 100円",
    starterCode: "import csv\nimport io\n\ndata = \"りんご,120\\nバナナ,80\\nみかん,100\"\n# csv.reader(io.StringIO(data)) で1行ずつ読めます\n",
    expectedOutput: "りんご: 120円\nバナナ: 80円\nみかん: 100円",
    explanation:
      "正解例:\n\nimport csv\nimport io\n\ndata = \"りんご,120\\nバナナ,80\\nみかん,100\"\nfor row in csv.reader(io.StringIO(data)):\n    print(f\"{row[0]}: {row[1]}円\")\n\n" +
      "csv.reader は各行を自動でリストに分解してくれます。io.StringIO は「文字列をファイルのように読ませる」道具で、csvモジュールはファイルオブジェクトを期待するため組み合わせて使います。\n\n" +
      "よくある間違い:\n・csv.reader(data) と文字列を直接渡すと、1文字ずつ処理されてしまいます。StringIO を忘れずに\n・split(\",\") でも動きますが、「値の中にカンマが含まれる」CSVを正しく扱えるのがcsvモジュールの利点です。",
    hint: "for row in csv.reader(io.StringIO(data)): で、row が ['りんご', '120'] のようなリストになります。",
    answerCode: "import csv\nimport io\n\ndata = \"りんご,120\\nバナナ,80\\nみかん,100\"\nfor row in csv.reader(io.StringIO(data)):\n    print(f\"{row[0]}: {row[1]}円\")"
  },
  {
    id: "i048",
    level: "intermediate",
    category: "engineering",
    title: "DictReaderでヘッダー付きCSV",
    description:
      "ヘッダー行付きのCSV文字列 data を csv.DictReader で読み込み、各商品を「商品名: 在庫◯」の形式で1行ずつ出力してください。\n\n期待される出力:\nりんご: 在庫5\nバナナ: 在庫0",
    starterCode: "import csv\nimport io\n\ndata = \"name,price,stock\\nりんご,120,5\\nバナナ,80,0\"\n# DictReader は各行を辞書として返します\n",
    expectedOutput: "りんご: 在庫5\nバナナ: 在庫0",
    explanation:
      "正解例:\n\nimport csv\nimport io\n\ndata = \"name,price,stock\\nりんご,120,5\\nバナナ,80,0\"\nfor row in csv.DictReader(io.StringIO(data)):\n    print(f\"{row['name']}: 在庫{row['stock']}\")\n\n" +
      "DictReader は1行目をヘッダーとして読み、各行を {'name': 'りんご', 'price': '120', 'stock': '5'} のような辞書で返します。row[0] のような番号ではなく列名でアクセスできるため、列の順序が変わっても壊れない堅牢なコードになります。\n\n" +
      "よくある間違い:\n・ヘッダー行は自動で読み飛ばされます。データ行として処理されることはありません\n・値はすべて文字列です。数値として使う場合は int() が必要です。",
    hint: "csv.DictReader(io.StringIO(data)) を使うと row['name'] のように列名でアクセスできます。",
    answerCode: "import csv\nimport io\n\ndata = \"name,price,stock\\nりんご,120,5\\nバナナ,80,0\"\nfor row in csv.DictReader(io.StringIO(data)):\n    print(f\"{row['name']}: 在庫{row['stock']}\")"
  },
  {
    id: "i049",
    level: "intermediate",
    category: "engineering",
    title: "CSV形式の文字列を組み立てる",
    description:
      "2次元リスト rows = [[\"date\", \"sales\"], [\"6/1\", 12000], [\"6/2\", 15000]] を、各行をカンマ区切りにしたCSV形式で1行ずつ出力してください。\n\n期待される出力:\ndate,sales\n6/1,12000\n6/2,15000",
    starterCode: "rows = [[\"date\", \"sales\"], [\"6/1\", 12000], [\"6/2\", 15000]]\n# join は文字列にしか使えない点に注意\n",
    expectedOutput: "date,sales\n6/1,12000\n6/2,15000",
    explanation:
      "正解例:\n\nrows = [[\"date\", \"sales\"], [\"6/1\", 12000], [\"6/2\", 15000]]\nfor row in rows:\n    print(\",\".join(str(x) for x in row))\n\n" +
      "\",\".join(リスト) は要素をカンマでつないだ文字列を作ります（splitの逆）。読み込みだけでなく「データをCSVとして出力する」のもETLの基本操作です。\n\n" +
      "よくある間違い:\n・join は文字列の要素しかつなげません。12000 のような数値が混ざっていると TypeError になるため、str(x) for x in row で全要素を文字列化してから join します。これは非常によく踏むエラーです。",
    hint: "\",\".join(str(x) for x in row) で、数値を文字列化しながらカンマ区切りにできます。",
    answerCode: "rows = [[\"date\", \"sales\"], [\"6/1\", 12000], [\"6/2\", 15000]]\nfor row in rows:\n    print(\",\".join(str(x) for x in row))"
  },
  {
    id: "i050",
    level: "intermediate",
    category: "engineering",
    title: "セミコロン区切りのデータを読む",
    description:
      "セミコロン（;）区切りの成績データ data を csv.reader の delimiter 引数を使って読み込み、各行を「名前（出身）: 点数点」の形式で1行ずつ出力してください。\n\n期待される出力:\n佐藤（東京）: 85点\n鈴木（大阪）: 92点",
    starterCode: "import csv\nimport io\n\ndata = \"佐藤;85;東京\\n鈴木;92;大阪\"\n# csv.reader(..., delimiter=\";\") で区切り文字を変更できます\n",
    expectedOutput: "佐藤（東京）: 85点\n鈴木（大阪）: 92点",
    explanation:
      "正解例:\n\nimport csv\nimport io\n\ndata = \"佐藤;85;東京\\n鈴木;92;大阪\"\nfor row in csv.reader(io.StringIO(data), delimiter=\";\"):\n    print(f\"{row[0]}（{row[2]}）: {row[1]}点\")\n\n" +
      "実務で受け取るデータはカンマ区切りとは限りません（セミコロン・タブ・パイプなど）。csv.reader の delimiter 引数で区切り文字を指定すれば、同じ書き方でどの形式にも対応できます。\n\n" +
      "よくある間違い:\n・delimiter を指定し忘れると、1行がまるごと1要素として読まれ row[1] で IndexError になります\n・列の並びは「名前;点数;出身」です。出力の順序（名前→出身→点数）と異なる点に注意してください。",
    hint: "csv.reader(io.StringIO(data), delimiter=\";\") とします。row[0]=名前, row[1]=点数, row[2]=出身です。",
    answerCode: "import csv\nimport io\n\ndata = \"佐藤;85;東京\\n鈴木;92;大阪\"\nfor row in csv.reader(io.StringIO(data), delimiter=\";\"):\n    print(f\"{row[0]}（{row[2]}）: {row[1]}点\")"
  },
  {
    id: "i051",
    level: "intermediate",
    category: "engineering",
    title: "ERRORの行数を数える",
    description:
      "複数行のログ文字列 log から、ERROR で始まる行の数を数えて出力してください。\n\n期待される出力:\n2",
    starterCode: "log = \"\"\"INFO 起動しました\nERROR 接続に失敗しました\nINFO 処理を開始します\nERROR タイムアウトしました\nWARN メモリ使用率が高いです\"\"\"\n# split(\"\\n\") で行のリストにできます\n",
    expectedOutput: "2",
    explanation:
      "正解例:\n\ncount = 0\nfor line in log.split(\"\\n\"):\n    if line.startswith(\"ERROR\"):\n        count += 1\nprint(count)\n\n" +
      "複数行の文字列は split(\"\\n\") で「行のリスト」に変換するのがログ解析の第一歩です。startswith() は「その文字列で始まるか」を判定するメソッドで、ログレベルの判定に最適です。\n\n" +
      "よくある間違い:\n・\"ERROR\" in line でも今回は同じ結果ですが、メッセージ本文に ERROR という単語が含まれる行も数えてしまう可能性があります。行頭判定には startswith が確実です\n・sum(1 for line in ... if ...) と1行で書く方法もあります。",
    hint: "for line in log.split(\"\\n\"): で1行ずつ取り出し、line.startswith(\"ERROR\") で判定します。",
    answerCode: "log = \"\"\"INFO 起動しました\nERROR 接続に失敗しました\nINFO 処理を開始します\nERROR タイムアウトしました\nWARN メモリ使用率が高いです\"\"\"\ncount = 0\nfor line in log.split(\"\\n\"):\n    if line.startswith(\"ERROR\"):\n        count += 1\nprint(count)"
  },
  {
    id: "i052",
    level: "intermediate",
    category: "engineering",
    title: "エラーメッセージだけを抽出",
    description:
      "ログ文字列 log から ERROR の行を探し、ログレベルを除いたメッセージ部分だけを1行ずつ出力してください。\n\n期待される出力:\nディスク容量が不足しています\n接続がタイムアウトしました",
    starterCode: "log = \"\"\"INFO サービス起動\nERROR ディスク容量が不足しています\nWARN 応答が遅延しています\nERROR 接続がタイムアウトしました\"\"\"\n# split(\" \", 1) で「最初の空白だけ」で分割できます\n",
    expectedOutput: "ディスク容量が不足しています\n接続がタイムアウトしました",
    explanation:
      "正解例:\n\nfor line in log.split(\"\\n\"):\n    if line.startswith(\"ERROR\"):\n        print(line.split(\" \", 1)[1])\n\n" +
      "split(\" \", 1) の第2引数は「最大分割回数」です。1を指定すると最初の空白でだけ分割され、['ERROR', 'メッセージ全体'] の2要素になります。メッセージ部分に空白が含まれていても壊れません。\n\n" +
      "よくある間違い:\n・line.split(\" \")[1] だと、メッセージに空白が含まれる場合に最初の単語しか取れません\n・line.replace(\"ERROR \", \"\") でも動きますが、本文中の同じ文字列まで置換されるリスクがあります。",
    hint: "line.split(\" \", 1)[1] で「最初の空白より後ろ全部」が取れます。",
    answerCode: "log = \"\"\"INFO サービス起動\nERROR ディスク容量が不足しています\nWARN 応答が遅延しています\nERROR 接続がタイムアウトしました\"\"\"\nfor line in log.split(\"\\n\"):\n    if line.startswith(\"ERROR\"):\n        print(line.split(\" \", 1)[1])"
  },
  {
    id: "i053",
    level: "intermediate",
    category: "engineering",
    title: "応答時間ログの集計",
    description:
      "APIの応答時間ログ log（各行は「メソッド パス 応答時間ms」の形式）から応答時間の数値を取り出し、次の2つをこの順番で1行ずつ出力してください。\n\n1行目: 応答時間の合計\n2行目: 応答時間の平均\n\n期待される出力:\n465\n155.0",
    starterCode: "log = \"\"\"GET /api/users 120ms\nGET /api/items 250ms\nGET /api/login 95ms\"\"\"\n# 3番目の要素から \"ms\" を取り除いて数値化します\n",
    expectedOutput: "465\n155.0",
    explanation:
      "正解例:\n\ntimes = []\nfor line in log.split(\"\\n\"):\n    ms = line.split(\" \")[2]\n    times.append(int(ms.rstrip(\"ms\")))\nprint(sum(times))\nprint(sum(times) / len(times))\n\n" +
      "「ログから数値を取り出して集計する」一連の流れです。split(\" \")[2] で3番目の要素（\"120ms\"）を取り、rstrip(\"ms\") で末尾の単位を除いてから int() で数値化します。\n\n" +
      "よくある間違い:\n・\"120ms\" をそのまま int() に渡すと ValueError です。単位の除去を忘れずに\n・rstrip(\"ms\") は「末尾にある m と s の文字を取り除く」という意味です。今回のデータでは問題ありませんが、ms.replace(\"ms\", \"\") や ms[:-2] でも同じ結果になります。",
    hint: "line.split(\" \")[2] が \"120ms\"。int(ms.rstrip(\"ms\")) で数値になります。",
    answerCode: "log = \"\"\"GET /api/users 120ms\nGET /api/items 250ms\nGET /api/login 95ms\"\"\"\ntimes = []\nfor line in log.split(\"\\n\"):\n    ms = line.split(\" \")[2]\n    times.append(int(ms.rstrip(\"ms\")))\nprint(sum(times))\nprint(sum(times) / len(times))"
  },

  // ---------------------------------------------------------
  // intermediate（中級）× practice: 実務シミュレーション（ECサイト編）
  // ---------------------------------------------------------
  {
    id: "i054",
    level: "intermediate",
    category: "practice",
    title: "【EC編】今日の売上を集計する",
    description:
      "あなたはECサイト「PyMart」のデータ担当です。今日の注文データ orders から売上合計を計算し、「◯◯円」の形式で出力してください。\n\n期待される出力:\n9500円",
    starterCode: "orders = [{\"id\": 101, \"amount\": 3200}, {\"id\": 102, \"amount\": 1800}, {\"id\": 103, \"amount\": 4500}]\n# amount を合計しましょう\n",
    expectedOutput: "9500円",
    explanation:
      "正解例:\n\norders = [{\"id\": 101, \"amount\": 3200}, {\"id\": 102, \"amount\": 1800}, {\"id\": 103, \"amount\": 4500}]\ntotal = sum(o[\"amount\"] for o in orders)\nprint(f\"{total}円\")\n\n" +
      "ECサイト運営の毎日の最初の仕事が「昨日の売上いくらだった？」への回答です。注文データ（辞書のリスト）から特定の項目を合計する、実務集計の基本形です。\n\n" +
      "よくある間違い:\n・print(total) だけだと「9500」となり、単位付きの出力と一致しません\n・sum(orders) と辞書のリストを直接渡すとエラーになります。",
    hint: "sum(o[\"amount\"] for o in orders) で合計し、f\"{total}円\" で整形します。",
    answerCode: "orders = [{\"id\": 101, \"amount\": 3200}, {\"id\": 102, \"amount\": 1800}, {\"id\": 103, \"amount\": 4500}]\ntotal = sum(o[\"amount\"] for o in orders)\nprint(f\"{total}円\")"
  },
  {
    id: "i055",
    level: "intermediate",
    category: "practice",
    title: "【EC編】客単価を計算する",
    description:
      "PyMartの重要KPIのひとつが客単価（1注文あたりの平均金額）です。注文データ orders から客単価を計算し、整数に丸めて「客単価: ◯◯円」の形式で出力してください。\n\n期待される出力:\n客単価: 3167円",
    starterCode: "orders = [{\"id\": 101, \"amount\": 3200}, {\"id\": 102, \"amount\": 1800}, {\"id\": 103, \"amount\": 4500}]\n# 合計 ÷ 注文数 を round で丸めます\n",
    expectedOutput: "客単価: 3167円",
    explanation:
      "正解例:\n\norders = [{\"id\": 101, \"amount\": 3200}, {\"id\": 102, \"amount\": 1800}, {\"id\": 103, \"amount\": 4500}]\navg = sum(o[\"amount\"] for o in orders) / len(orders)\nprint(f\"客単価: {round(avg)}円\")\n\n" +
      "客単価 = 売上合計 ÷ 注文数 は、ECの健全性を測る代表的なKPIです。9500 ÷ 3 = 3166.66… を round() で 3167 に丸めます。\n\n" +
      "よくある間違い:\n・round せずに出力すると「3166.6666666666665円」となってしまいます。レポートでは丸めが必須です\n・int(avg) だと切り捨てで 3166 になります。四捨五入したい場合は round() です。",
    hint: "round(sum(...) / len(orders)) で四捨五入した客単価になります。",
    answerCode: "orders = [{\"id\": 101, \"amount\": 3200}, {\"id\": 102, \"amount\": 1800}, {\"id\": 103, \"amount\": 4500}]\navg = sum(o[\"amount\"] for o in orders) / len(orders)\nprint(f\"客単価: {round(avg)}円\")"
  },
  {
    id: "i056",
    level: "intermediate",
    category: "practice",
    title: "【EC編】カテゴリ別の売上内訳",
    description:
      "PyMartの売上データ sales をカテゴリごとに合計した辞書を作って出力してください。経営会議の「どのカテゴリが売れているのか」という質問に答えるための集計です。\n\n期待される出力:\n{'衣類': 6300, '食品': 1800, '雑貨': 900}",
    starterCode: "sales = [\n    {\"item\": \"Tシャツ\", \"category\": \"衣類\", \"amount\": 2500},\n    {\"item\": \"クッキー\", \"category\": \"食品\", \"amount\": 1200},\n    {\"item\": \"パーカー\", \"category\": \"衣類\", \"amount\": 3800},\n    {\"item\": \"マグカップ\", \"category\": \"雑貨\", \"amount\": 900},\n    {\"item\": \"紅茶\", \"category\": \"食品\", \"amount\": 600},\n]\ntotals = {}\n# カテゴリをキーに金額を加算します\n",
    expectedOutput: "{'衣類': 6300, '食品': 1800, '雑貨': 900}",
    explanation:
      "正解例:\n\ntotals = {}\nfor s in sales:\n    totals[s[\"category\"]] = totals.get(s[\"category\"], 0) + s[\"amount\"]\nprint(totals)\n\n" +
      "engineeringで学んだ「getイディオムによるグループ別合計」を、実務データ（注文明細）に適用する問題です。SQLなら GROUP BY category、pandasなら groupby(\"category\").sum() に相当します。\n\n" +
      "よくある間違い:\n・キーにするのは s[\"item\"]（商品名）ではなく s[\"category\"] です。「何の軸で集計するか」を最初に確認する習慣が大切です。",
    hint: "totals[s[\"category\"]] = totals.get(s[\"category\"], 0) + s[\"amount\"] で集計します。",
    answerCode: "sales = [\n    {\"item\": \"Tシャツ\", \"category\": \"衣類\", \"amount\": 2500},\n    {\"item\": \"クッキー\", \"category\": \"食品\", \"amount\": 1200},\n    {\"item\": \"パーカー\", \"category\": \"衣類\", \"amount\": 3800},\n    {\"item\": \"マグカップ\", \"category\": \"雑貨\", \"amount\": 900},\n    {\"item\": \"紅茶\", \"category\": \"食品\", \"amount\": 600},\n]\ntotals = {}\ntotals = {}\nfor s in sales:\n    totals[s[\"category\"]] = totals.get(s[\"category\"], 0) + s[\"amount\"]\nprint(totals)"
  },
  {
    id: "i057",
    level: "intermediate",
    category: "practice",
    title: "【EC編】売上の前日比を出す",
    description:
      "昨日の売上 yesterday = 125000円、今日の売上 today = 138000円 でした。前日比の増減率を計算し、符号付きパーセント（小数1桁）で「前日比: +◯◯%」の形式で出力してください。\nf-stringの :+.1% 書式を使うこと。\n\n期待される出力:\n前日比: +10.4%",
    starterCode: "yesterday = 125000\ntoday = 138000\n# (今日 - 昨日) ÷ 昨日 が増減率です\n",
    expectedOutput: "前日比: +10.4%",
    explanation:
      "正解例:\n\nyesterday = 125000\ntoday = 138000\nrate = (today - yesterday) / yesterday\nprint(f\"前日比: {rate:+.1%}\")\n\n" +
      "増減率 =（今日 − 昨日）÷ 昨日 はKPIレポートの必須計算です。書式 :+.1% の + は「プラスでも符号を表示する」指定で、増えたのか減ったのかが一目で分かるレポートになります。\n\n" +
      "よくある間違い:\n・todayで割ると別の値になります。「どちらを基準（分母）にするか」が増減率のポイントです\n・:.1% だけだと「10.4%」となり、+ が付きません。",
    hint: "rate = (today - yesterday) / yesterday を f\"{rate:+.1%}\" で表示します。",
    answerCode: "yesterday = 125000\ntoday = 138000\nrate = (today - yesterday) / yesterday\nprint(f\"前日比: {rate:+.1%}\")"
  },
  {
    id: "i058",
    level: "intermediate",
    category: "practice",
    title: "【EC編】ベストセラーを探す",
    description:
      "今週の注文明細 order_items（商品名, 個数）から、販売個数が最も多い商品を「商品名（◯個）」の形式で出力してください。\n\n期待される出力:\nステッカー（10個）",
    starterCode: "order_items = [(\"マグカップ\", 3), (\"Tシャツ\", 2), (\"マグカップ\", 5), (\"ステッカー\", 10), (\"Tシャツ\", 1)]\n# 商品別に合計してから最大を探します\n",
    expectedOutput: "ステッカー（10個）",
    explanation:
      "正解例:\n\norder_items = [(\"マグカップ\", 3), (\"Tシャツ\", 2), (\"マグカップ\", 5), (\"ステッカー\", 10), (\"Tシャツ\", 1)]\ntotals = {}\nfor name, qty in order_items:\n    totals[name] = totals.get(name, 0) + qty\nbest = max(totals.items(), key=lambda x: x[1])\nprint(f\"{best[0]}（{best[1]}個）\")\n\n" +
      "「集計してから最大値を探す」2段階の処理です。マグカップは 3+5=8個 ですが、ステッカーの10個が最多になります。集計せずに明細の最大を取ると間違える点がこの問題のポイントです。\n\n" +
      "よくある間違い:\n・max(order_items, key=lambda x: x[1]) と明細のまま最大を取ってもこの問題ではたまたまステッカーですが、マグカップのように分散して売れる商品を正しく評価できません。必ず集計が先です\n・カッコ（）は全角です。",
    hint: "まずgetイディオムで商品別合計を作り、max(totals.items(), key=lambda x: x[1]) で最大を探します。",
    answerCode: "order_items = [(\"マグカップ\", 3), (\"Tシャツ\", 2), (\"マグカップ\", 5), (\"ステッカー\", 10), (\"Tシャツ\", 1)]\ntotals = {}\nfor name, qty in order_items:\n    totals[name] = totals.get(name, 0) + qty\nbest = max(totals.items(), key=lambda x: x[1])\nprint(f\"{best[0]}（{best[1]}個）\")"
  },
  {
    id: "i059",
    level: "intermediate",
    category: "practice",
    title: "【EC編】時間帯別の注文数",
    description:
      "注文時刻のリスト times（\"HH:MM\"形式）から、時間帯（時）別の注文数を辞書で集計して出力してください。「何時に注文が集中するか」を知るための分析です。\n\n期待される出力:\n{'09': 2, '12': 3, '18': 1}",
    starterCode: "times = [\"09:15\", \"12:40\", \"12:05\", \"18:30\", \"12:55\", \"09:50\"]\n# \":\" で分割して「時」を取り出します\n",
    expectedOutput: "{'09': 2, '12': 3, '18': 1}",
    explanation:
      "正解例:\n\ntimes = [\"09:15\", \"12:40\", \"12:05\", \"18:30\", \"12:55\", \"09:50\"]\ncounts = {}\nfor t in times:\n    hour = t.split(\":\")[0]\n    counts[hour] = counts.get(hour, 0) + 1\nprint(counts)\n\n" +
      "時間帯別の注文分布は、セールの開始時刻やサーバー増強のタイミングを決める材料になります。「文字列からキーを切り出して集計する」のはログ解析と同じパターンで、応用範囲の広い技術です。\n\n" +
      "よくある間違い:\n・キーを int に変換すると {9: 2, ...} となり出力が一致しません。今回は文字列のまま使います\n・t[:2] のスライスでも「時」を取り出せます。どちらでも正解です。",
    hint: "hour = t.split(\":\")[0] で「09」などが取れます。あとはgetイディオムで集計します。",
    answerCode: "times = [\"09:15\", \"12:40\", \"12:05\", \"18:30\", \"12:55\", \"09:50\"]\ncounts = {}\nfor t in times:\n    hour = t.split(\":\")[0]\n    counts[hour] = counts.get(hour, 0) + 1\nprint(counts)"
  },
  {
    id: "i060",
    level: "intermediate",
    category: "practice",
    title: "【EC編】送料の自動判定",
    description:
      "PyMartは「5000円以上の注文は送料無料、未満は送料500円」です。注文金額のリスト amounts の各注文について、「◯◯円: 送料無料」または「◯◯円: 送料500円」の形式で1行ずつ出力してください。\n\n期待される出力:\n5200円: 送料無料\n3400円: 送料500円\n8000円: 送料無料\n1200円: 送料500円",
    starterCode: "amounts = [5200, 3400, 8000, 1200]\n# 1件ずつ条件分岐します\n",
    expectedOutput: "5200円: 送料無料\n3400円: 送料500円\n8000円: 送料無料\n1200円: 送料500円",
    explanation:
      "正解例:\n\namounts = [5200, 3400, 8000, 1200]\nfor amount in amounts:\n    if amount >= 5000:\n        print(f\"{amount}円: 送料無料\")\n    else:\n        print(f\"{amount}円: 送料500円\")\n\n" +
      "「金額に応じて処理を変える」ビジネスルールの実装です。送料・割引・ポイント付与など、ECのルールはこのような条件分岐の積み重ねでできています。\n\n" +
      "よくある間違い:\n・> 5000 にすると「5000円ちょうど」が送料有料になってしまいます。「以上」は >= です。境界値の扱いは実務で最もバグが出やすいポイントです。",
    hint: "for amount in amounts: の中で if amount >= 5000: と分岐します。",
    answerCode: "amounts = [5200, 3400, 8000, 1200]\nfor amount in amounts:\n    if amount >= 5000:\n        print(f\"{amount}円: 送料無料\")\n    else:\n        print(f\"{amount}円: 送料500円\")"
  },
  {
    id: "i061",
    level: "intermediate",
    category: "practice",
    title: "【EC編】注文ステータスの内訳",
    description:
      "本日の注文ステータスのリスト statuses を集計し、ステータス別の件数の辞書を出力してください。出荷オペレーションの進捗確認に使うデータです。\n\n期待される出力:\n{'発送済': 3, '準備中': 2, 'キャンセル': 1}",
    starterCode: "statuses = [\"発送済\", \"準備中\", \"発送済\", \"キャンセル\", \"発送済\", \"準備中\"]\ncounts = {}\n# getイディオムで件数を数えます\n",
    expectedOutput: "{'発送済': 3, '準備中': 2, 'キャンセル': 1}",
    explanation:
      "正解例:\n\nstatuses = [\"発送済\", \"準備中\", \"発送済\", \"キャンセル\", \"発送済\", \"準備中\"]\ncounts = {}\nfor s in statuses:\n    counts[s] = counts.get(s, 0) + 1\nprint(counts)\n\n" +
      "ステータス別の件数は「準備中が溜まっていないか」「キャンセルが急増していないか」を監視する運用の基本データです。集計パターンは投票集計とまったく同じで、データが変わっても同じ型で書けることが分かります。\n\n" +
      "よくある間違い:\n・collections.Counter(statuses) でも同様の集計ができますが、表示が Counter({...}) になるため、この問題では辞書での出力に合わせてください。",
    hint: "counts[s] = counts.get(s, 0) + 1 の定番パターンです。",
    answerCode: "statuses = [\"発送済\", \"準備中\", \"発送済\", \"キャンセル\", \"発送済\", \"準備中\"]\ncounts = {}\nfor s in statuses:\n    counts[s] = counts.get(s, 0) + 1\nprint(counts)"
  },
  {
    id: "i062",
    level: "intermediate",
    category: "practice",
    title: "【EC編】リピーターを見つける",
    description:
      "今月の購入者リスト purchases（同じ人が複数回購入すると複数回登場）から、2回以上購入したリピーターの名前のリストを出力してください。\n\n期待される出力:\n['佐藤', '鈴木']",
    starterCode: "purchases = [\"佐藤\", \"鈴木\", \"佐藤\", \"高橋\", \"鈴木\", \"佐藤\"]\n# 回数を数えてから2回以上で絞り込みます\n",
    expectedOutput: "['佐藤', '鈴木']",
    explanation:
      "正解例:\n\npurchases = [\"佐藤\", \"鈴木\", \"佐藤\", \"高橋\", \"鈴木\", \"佐藤\"]\ncounts = {}\nfor name in purchases:\n    counts[name] = counts.get(name, 0) + 1\nrepeaters = [name for name, c in counts.items() if c >= 2]\nprint(repeaters)\n\n" +
      "リピーターの把握は顧客分析の出発点です。「集計→条件で絞り込み」という2段階で、counts.items() をループしながら内包表記でフィルタします。\n\n" +
      "よくある間違い:\n・set(purchases) では「購入した人」しか分からず、回数の情報が失われます\n・items() を使うと（名前, 回数）のペアで取り出せます。c >= 2 の条件を c > 2 にすると2回の人が漏れます。",
    hint: "件数の辞書を作ったあと、[name for name, c in counts.items() if c >= 2] で絞り込みます。",
    answerCode: "purchases = [\"佐藤\", \"鈴木\", \"佐藤\", \"高橋\", \"鈴木\", \"佐藤\"]\ncounts = {}\nfor name in purchases:\n    counts[name] = counts.get(name, 0) + 1\nrepeaters = [name for name, c in counts.items() if c >= 2]\nprint(repeaters)"
  },
  {
    id: "i063",
    level: "intermediate",
    category: "practice",
    title: "【EC編】休眠顧客を抽出する",
    description:
      "顧客ごとの最終購入日 last_order（\"YYYY-MM-DD\"形式）から、基準日 \"2026-03-01\" より前にしか購入していない休眠顧客の名前を1行ずつ出力してください。\n※この形式の日付文字列は、そのまま比較演算子で新旧を比較できます。\n\n期待される出力:\n鈴木\n高橋",
    starterCode: "last_order = {\"佐藤\": \"2026-06-05\", \"鈴木\": \"2025-11-20\", \"高橋\": \"2026-01-15\"}\nthreshold = \"2026-03-01\"\n# 日付文字列は < でそのまま比較できます\n",
    expectedOutput: "鈴木\n高橋",
    explanation:
      "正解例:\n\nlast_order = {\"佐藤\": \"2026-06-05\", \"鈴木\": \"2025-11-20\", \"高橋\": \"2026-01-15\"}\nthreshold = \"2026-03-01\"\nfor name, date in last_order.items():\n    if date < threshold:\n        print(name)\n\n" +
      "「しばらく買っていない顧客」の抽出は、再購入を促すメール配信などの起点になる実務処理です。YYYY-MM-DD 形式（ゼロ埋めされたISO形式）の日付は、文字列の辞書順がそのまま時系列順になるため、< で比較できます。\n\n" +
      "よくある間違い:\n・\"2026-3-1\" のようなゼロ埋めなしの形式ではこの比較は使えません。フォーマットが揃っていることが前提です\n・厳密な日付計算（日数の差など）が必要な場合は datetime モジュールを使います（後の問題で登場します）。",
    hint: "for name, date in last_order.items(): で回し、if date < threshold: で判定します。",
    answerCode: "last_order = {\"佐藤\": \"2026-06-05\", \"鈴木\": \"2025-11-20\", \"高橋\": \"2026-01-15\"}\nthreshold = \"2026-03-01\"\nfor name, date in last_order.items():\n    if date < threshold:\n        print(name)"
  },
  {
    id: "i064",
    level: "intermediate",
    category: "practice",
    title: "【EC編】新規顧客の割合",
    description:
      "注文データ orders には新規顧客フラグ is_new があります。全注文に占める新規顧客の注文の割合を「新規率: ◯◯%」の形式（:.0% 書式）で出力してください。\n\n期待される出力:\n新規率: 25%",
    starterCode: "orders = [\n    {\"id\": 1, \"is_new\": True}, {\"id\": 2, \"is_new\": False},\n    {\"id\": 3, \"is_new\": False}, {\"id\": 4, \"is_new\": True},\n    {\"id\": 5, \"is_new\": False}, {\"id\": 6, \"is_new\": False},\n    {\"id\": 7, \"is_new\": False}, {\"id\": 8, \"is_new\": False},\n]\n# sum(1 for ...) で条件に合う件数を数えられます\n",
    expectedOutput: "新規率: 25%",
    explanation:
      "正解例:\n\nnew_count = sum(1 for o in orders if o[\"is_new\"])\nprint(f\"新規率: {new_count / len(orders):.0%}\")\n\n" +
      "新規率は集客施策の効果を測るKPIです。sum(1 for o in orders if 条件) は「条件に合う件数を数える」イディオムで、フラグ集計の定番です。2 ÷ 8 = 0.25 が :.0% で 25% になります。\n\n" +
      "よくある間違い:\n・len([o for o in orders if o[\"is_new\"]]) でも数えられますが、sum(1 for ...) は一時リストを作らない分効率的です\n・if o[\"is_new\"] == True と書くのは冗長です。boolはそのまま条件に使えます。",
    hint: "new_count = sum(1 for o in orders if o[\"is_new\"]) で新規件数が数えられます。",
    answerCode: "orders = [\n    {\"id\": 1, \"is_new\": True}, {\"id\": 2, \"is_new\": False},\n    {\"id\": 3, \"is_new\": False}, {\"id\": 4, \"is_new\": True},\n    {\"id\": 5, \"is_new\": False}, {\"id\": 6, \"is_new\": False},\n    {\"id\": 7, \"is_new\": False}, {\"id\": 8, \"is_new\": False},\n]\nnew_count = sum(1 for o in orders if o[\"is_new\"])\nprint(f\"新規率: {new_count / len(orders):.0%}\")"
  },
  {
    id: "i065",
    level: "intermediate",
    category: "practice",
    title: "【EC編】平均購入回数",
    description:
      "今月の購入者リスト purchases から「1人あたりの平均購入回数」を計算し、小数1桁で「平均購入回数: ◯回」の形式で出力してください。\n\nヒント: 全購入回数 ÷ ユニーク顧客数 です。\n\n期待される出力:\n平均購入回数: 2.0回",
    starterCode: "purchases = [\"佐藤\", \"鈴木\", \"佐藤\", \"高橋\", \"鈴木\", \"佐藤\"]\n# len() と set() の組み合わせで計算できます\n",
    expectedOutput: "平均購入回数: 2.0回",
    explanation:
      "正解例:\n\npurchases = [\"佐藤\", \"鈴木\", \"佐藤\", \"高橋\", \"鈴木\", \"佐藤\"]\navg = len(purchases) / len(set(purchases))\nprint(f\"平均購入回数: {round(avg, 1)}回\")\n\n" +
      "「述べ回数 ÷ ユニーク数」は購入頻度・訪問頻度などの分析で頻出する計算です。len(purchases) が延べ6回、len(set(purchases)) がユニーク3人で、6 ÷ 3 = 2.0回となります。\n\n" +
      "よくある間違い:\n・分子と分母を逆にすると 0.5 になってしまいます。「1人あたり」なら人数で割ります\n・round(avg, 1) を忘れると、割り切れないデータのときに桁が長くなります。",
    hint: "len(purchases) / len(set(purchases)) で「延べ ÷ ユニーク」が計算できます。",
    answerCode: "purchases = [\"佐藤\", \"鈴木\", \"佐藤\", \"高橋\", \"鈴木\", \"佐藤\"]\navg = len(purchases) / len(set(purchases))\nprint(f\"平均購入回数: {round(avg, 1)}回\")"
  },
  {
    id: "i066",
    level: "intermediate",
    category: "practice",
    title: "【EC編】発注が必要な商品を検知",
    description:
      "在庫データ items の各商品には発注点（reorder: 在庫がこれを下回ったら発注する数量）が設定されています。在庫が発注点を下回っている商品を「商品名: 在庫◯（発注点◯）」の形式で出力してください。\n\n期待される出力:\nマグカップ: 在庫4（発注点10）",
    starterCode: "items = [\n    {\"name\": \"マグカップ\", \"stock\": 4, \"reorder\": 10},\n    {\"name\": \"Tシャツ\", \"stock\": 25, \"reorder\": 15},\n    {\"name\": \"ステッカー\", \"stock\": 8, \"reorder\": 8},\n]\n# stock < reorder の商品だけ出力します\n",
    expectedOutput: "マグカップ: 在庫4（発注点10）",
    explanation:
      "正解例:\n\nfor item in items:\n    if item[\"stock\"] < item[\"reorder\"]:\n        print(f\"{item['name']}: 在庫{item['stock']}（発注点{item['reorder']}）\")\n\n" +
      "発注点方式は在庫管理の基本で、このような「閾値を下回ったらアラート」の処理は在庫・予算・サーバー監視などあらゆる運用に登場します。\n\n" +
      "よくある間違い:\n・ステッカーは在庫8＝発注点8で「下回っていない」ため対象外です。< と <= の違いが結果を変えます。仕様の「下回ったら」を正確に読み取ることが実務では重要です\n・カッコ（）は全角です。",
    hint: "if item[\"stock\"] < item[\"reorder\"]: です。8 < 8 は False になる点に注意。",
    answerCode: "items = [\n    {\"name\": \"マグカップ\", \"stock\": 4, \"reorder\": 10},\n    {\"name\": \"Tシャツ\", \"stock\": 25, \"reorder\": 15},\n    {\"name\": \"ステッカー\", \"stock\": 8, \"reorder\": 8},\n]\nfor item in items:\n    if item[\"stock\"] < item[\"reorder\"]:\n        print(f\"{item['name']}: 在庫{item['stock']}（発注点{item['reorder']}）\")"
  },
  {
    id: "i067",
    level: "intermediate",
    category: "practice",
    title: "【EC編】返品率を計算する",
    description:
      "今月の販売数 sold = 240個 に対して、返品数 returned = 18個 でした。返品率を「返品率: ◯◯%」の形式（小数1桁の :.1% 書式）で出力してください。\n\n期待される出力:\n返品率: 7.5%",
    starterCode: "sold = 240\nreturned = 18\n# 返品数 ÷ 販売数 をパーセント表示します\n",
    expectedOutput: "返品率: 7.5%",
    explanation:
      "正解例:\n\nsold = 240\nreturned = 18\nprint(f\"返品率: {returned / sold:.1%}\")\n\n" +
      "返品率は商品品質やサイズ表記の問題を発見するための品質KPIです。18 ÷ 240 = 0.075 が :.1% 書式で 7.5% になります。割合の計算と%書式はKPIレポートの基本セットとして手に馴染ませておきましょう。\n\n" +
      "よくある間違い:\n・returned / sold * 100 と自分で100倍する場合は f\"{...:.1f}%\" と書式を変える必要があります。:.1% を使うなら100倍は不要です。",
    hint: "f\"{returned / sold:.1%}\" で「7.5%」形式になります。",
    answerCode: "sold = 240\nreturned = 18\nprint(f\"返品率: {returned / sold:.1%}\")"
  },
  {
    id: "i068",
    level: "intermediate",
    category: "practice",
    title: "【EC編】在庫金額を評価する",
    description:
      "在庫データ items（商品名, 単価, 在庫数）から、在庫金額の合計（単価×在庫数の総和）を計算し、3桁区切りで「◯,◯◯◯円」の形式で出力してください。\n\n期待される出力:\n69,700円",
    starterCode: "items = [(\"マグカップ\", 1200, 4), (\"Tシャツ\", 2500, 25), (\"ステッカー\", 300, 8)]\n# タプルを3つの変数にアンパックしながら計算します\n",
    expectedOutput: "69,700円",
    explanation:
      "正解例:\n\nitems = [(\"マグカップ\", 1200, 4), (\"Tシャツ\", 2500, 25), (\"ステッカー\", 300, 8)]\ntotal = sum(price * stock for name, price, stock in items)\nprint(f\"{total:,}円\")\n\n" +
      "在庫金額の評価は棚卸しや決算で必要になる計算です。ジェネレータ式の中でタプルを for name, price, stock in items とアンパックできるのがポイントで、1200×4 + 2500×25 + 300×8 = 69700 を :, 書式でカンマ区切りにします。\n\n" +
      "よくある間違い:\n・使わない変数 name も受け取る必要があります（慣習的に _ という名前にすることもあります）\n・:, 書式を忘れると「69700円」となり一致しません。",
    hint: "sum(price * stock for name, price, stock in items) で合計し、f\"{total:,}円\" で表示します。",
    answerCode: "items = [(\"マグカップ\", 1200, 4), (\"Tシャツ\", 2500, 25), (\"ステッカー\", 300, 8)]\ntotal = sum(price * stock for name, price, stock in items)\nprint(f\"{total:,}円\")"
  },
  {
    id: "i069",
    level: "intermediate",
    category: "practice",
    title: "【EC編】倉庫別の在庫数",
    description:
      "倉庫ごとの在庫が入れ子の辞書 inventory で管理されています。倉庫ごとの在庫合計を「倉庫名: ◯個」の形式で1行ずつ出力してください。\n\n期待される出力:\n東京倉庫: 150個\n大阪倉庫: 55個",
    starterCode: "inventory = {\n    \"東京倉庫\": {\"マグカップ\": 30, \"Tシャツ\": 120},\n    \"大阪倉庫\": {\"マグカップ\": 15, \"ステッカー\": 40},\n}\n# 内側の辞書の values() を合計します\n",
    expectedOutput: "東京倉庫: 150個\n大阪倉庫: 55個",
    explanation:
      "正解例:\n\nfor warehouse, items in inventory.items():\n    print(f\"{warehouse}: {sum(items.values())}個\")\n\n" +
      "入れ子の辞書は「倉庫→商品→数量」のような階層データの自然な表現です。外側を items() でループすると、各倉庫の在庫辞書が items に入るので、values() の合計で倉庫合計が出ます。\n\n" +
      "よくある間違い:\n・sum(items) はキー（商品名の文字列）を合計しようとしてエラーになります。数量は values() です\n・変数名 items と辞書メソッド items() が紛らわしい点に注意してください（stocks などの名前にしても構いません）。",
    hint: "for warehouse, items in inventory.items(): で回し、sum(items.values()) で合計します。",
    answerCode: "inventory = {\n    \"東京倉庫\": {\"マグカップ\": 30, \"Tシャツ\": 120},\n    \"大阪倉庫\": {\"マグカップ\": 15, \"ステッカー\": 40},\n}\nfor warehouse, items in inventory.items():\n    print(f\"{warehouse}: {sum(items.values())}個\")"
  },
  {
    id: "i070",
    level: "intermediate",
    category: "practice",
    title: "【EC編】APIのページを統合する",
    description:
      "顧客一覧APIはページ分割されて返ってきます。page1 と page2 を統合し、次の2つをこの順番で1行ずつ出力してください。\n\n1行目: 統合後の顧客数\n2行目: 全顧客の名前のリスト\n\n期待される出力:\n3\n['佐藤', '鈴木', '高橋']",
    starterCode: "page1 = [{\"id\": 1, \"name\": \"佐藤\"}, {\"id\": 2, \"name\": \"鈴木\"}]\npage2 = [{\"id\": 3, \"name\": \"高橋\"}]\n# リストは + で連結できます\n",
    expectedOutput: "3\n['佐藤', '鈴木', '高橋']",
    explanation:
      "正解例:\n\npage1 = [{\"id\": 1, \"name\": \"佐藤\"}, {\"id\": 2, \"name\": \"鈴木\"}]\npage2 = [{\"id\": 3, \"name\": \"高橋\"}]\nall_users = page1 + page2\nprint(len(all_users))\nprint([u[\"name\"] for u in all_users])\n\n" +
      "実際のAPIは1回のレスポンスで返す件数に上限があり、複数ページを取得して統合するのが普通です。リスト同士は + で連結でき、統合後は通常のリストとして処理できます。\n\n" +
      "よくある間違い:\n・page1.append(page2) とすると、リストの中にリストが入った入れ子になってしまいます。連結は + か extend() です。",
    hint: "all_users = page1 + page2 で統合し、内包表記で名前だけ取り出します。",
    answerCode: "page1 = [{\"id\": 1, \"name\": \"佐藤\"}, {\"id\": 2, \"name\": \"鈴木\"}]\npage2 = [{\"id\": 3, \"name\": \"高橋\"}]\nall_users = page1 + page2\nprint(len(all_users))\nprint([u[\"name\"] for u in all_users])"
  },

  // ---------------------------------------------------------
  // advanced（上級）: クラス・内包表記・例外処理・再帰
  // ---------------------------------------------------------
  {
    id: "a001",
    level: "advanced",
    category: "foundation",
    title: "クラスの定義と利用",
    description:
      "次の仕様のクラス Person を定義してください。\n\n・コンストラクタ（__init__）で name と age を受け取り、属性として保存する\n・メソッド introduce() で「私の名前は◯◯、◯◯歳です。」と出力する\n\nそのうえで Person(\"太郎\", 30) のインスタンスを作り、introduce() を呼び出してください。\n\n期待される出力:\n私の名前は太郎、30歳です。",
    starterCode: "# クラス Person を定義してください\n",
    expectedOutput: "私の名前は太郎、30歳です。",
    explanation:
      "正解例:\n\nclass Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n\n    def introduce(self):\n        print(f\"私の名前は{self.name}、{self.age}歳です。\")\n\np = Person(\"太郎\", 30)\np.introduce()\n\n" +
      "クラスのメソッドの第1引数は必ず self です。__init__ はインスタンス生成時に自動で呼ばれ、self.属性名 = 値 でデータを保持します。\n\n" +
      "よくある間違い:\n・メソッド定義で self を書き忘れる\n・文末の「。」を忘れる",
    hint: "class Person: の中に def __init__(self, name, age): と def introduce(self): を定義します。",
    answerCode: "class Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n\n    def introduce(self):\n        print(f\"私の名前は{self.name}、{self.age}歳です。\")\n\np = Person(\"太郎\", 30)\np.introduce()"
  },
  {
    id: "a002",
    level: "advanced",
    category: "foundation",
    title: "リスト内包表記",
    description:
      "リスト内包表記を使って、1から20までの整数のうち偶数だけを2乗したリストを作り、そのリストをprintで出力してください。\n\n期待される出力:\n[4, 16, 36, 64, 100, 144, 196, 256, 324, 400]",
    starterCode: "# リスト内包表記で書いてみましょう\n",
    expectedOutput: "[4, 16, 36, 64, 100, 144, 196, 256, 324, 400]",
    explanation:
      "正解例:\n\nresult = [x ** 2 for x in range(1, 21) if x % 2 == 0]\nprint(result)\n\n" +
      "リスト内包表記は [式 for 変数 in イテラブル if 条件] の形で、ループとフィルタを1行で書けます。\n\n" +
      "よくある間違い:\n・range(1, 20) では20が含まれません（終端は含まれないため range(1, 21) とします）\n・x % 2 == 0 が偶数の判定です。",
    hint: "[x ** 2 for x in range(1, 21) if 条件] の形です。rangeの終端に注意。",
    answerCode: "result = [x ** 2 for x in range(1, 21) if x % 2 == 0]\nprint(result)"
  },
  {
    id: "a003",
    level: "advanced",
    category: "foundation",
    title: "ゼロ除算を例外処理で守る",
    description:
      "10 を 0 で割る計算を try / except で囲み、ZeroDivisionError が発生したら「0で割ることはできません」と出力してください。\nさらに、例外処理のあとに「処理を続行します」と出力してください。\n\n期待される出力:\n0で割ることはできません\n処理を続行します",
    starterCode: "# try / except を使ってください\n",
    expectedOutput: "0で割ることはできません\n処理を続行します",
    explanation:
      "正解例:\n\ntry:\n    result = 10 / 0\nexcept ZeroDivisionError:\n    print(\"0で割ることはできません\")\n\nprint(\"処理を続行します\")\n\n" +
      "try ブロック内で例外が発生すると、処理が except に移ります。例外を捕捉すればプログラムは停止せず、その後の処理を続行できます。\n\n" +
      "よくある間違い:\n・except のスペル間違いや、捕捉する例外クラス名の間違い\n・「処理を続行します」を except ブロックの中に入れても今回は同じ出力になりますが、例外が起きなかった場合にも実行したい処理は try / except の外に書くのが基本です。",
    hint: "try: の中で 10 / 0 を実行し、except ZeroDivisionError: で捕捉します。",
    answerCode: "try:\n    result = 10 / 0\nexcept ZeroDivisionError:\n    print(\"0で割ることはできません\")\n\nprint(\"処理を続行します\")"
  },
  {
    id: "a004",
    level: "advanced",
    category: "foundation",
    title: "再帰で階乗を計算",
    description:
      "再帰を使って階乗（n!）を計算する関数 factorial を定義してください。\nそのうえで factorial(5) と factorial(10) の結果をこの順番で1行ずつ出力してください。\n\n期待される出力:\n120\n3628800",
    starterCode: "# 再帰関数 factorial を定義してください\n",
    expectedOutput: "120\n3628800",
    explanation:
      "正解例:\n\ndef factorial(n):\n    if n <= 1:\n        return 1\n    return n * factorial(n - 1)\n\nprint(factorial(5))\nprint(factorial(10))\n\n" +
      "再帰関数は「自分自身を呼び出す関数」です。必ず終了条件（ベースケース、ここでは n <= 1）を最初に書きます。\n\n" +
      "よくある間違い:\n・終了条件を書き忘れると無限再帰になり RecursionError が発生します\n・return n * factorial(n - 1) の n - 1 を忘れると無限ループになります。",
    hint: "終了条件 if n <= 1: return 1 を先に書き、それ以外は n * factorial(n - 1) を返します。",
    answerCode: "def factorial(n):\n    if n <= 1:\n        return 1\n    return n * factorial(n - 1)\n\nprint(factorial(5))\nprint(factorial(10))"
  },
  {
    id: "a005",
    level: "advanced",
    category: "foundation",
    title: "クラスの継承と上書き",
    description:
      "次の3つのクラスを定義してください。\n\n・Animal: コンストラクタで name を受け取って保存し、メソッド cry() で \"...\" を返す\n・Dog（Animalを継承）: cry() を上書きして「名前「ワン！」」を返す\n・Cat（Animalを継承）: cry() を上書きして「名前「ニャー」」を返す\n\nそのうえで Dog(\"ポチ\") と Cat(\"タマ\") の cry() の結果をこの順番で1行ずつ出力してください。\n\n期待される出力:\nポチ「ワン！」\nタマ「ニャー」",
    starterCode: "# Animal を定義し、Dog と Cat で継承してください\n",
    expectedOutput: "ポチ「ワン！」\nタマ「ニャー」",
    explanation:
      "正解例:\n\nclass Animal:\n    def __init__(self, name):\n        self.name = name\n\n    def cry(self):\n        return \"...\"\n\nclass Dog(Animal):\n    def cry(self):\n        return self.name + \"「ワン！」\"\n\nclass Cat(Animal):\n    def cry(self):\n        return self.name + \"「ニャー」\"\n\nprint(Dog(\"ポチ\").cry())\nprint(Cat(\"タマ\").cry())\n\n" +
      "class 子クラス(親クラス): で継承します。Dog と Cat には __init__ を書いていませんが、親クラス Animal の __init__ がそのまま引き継がれます。同名のメソッドを定義すると上書き（オーバーライド）されます。\n\n" +
      "よくある間違い:\n・class Dog(Animal) のカッコを忘れると継承されず、name が保存されません\n・「ワン！」の「！」は全角です。",
    hint: "class Dog(Animal): のようにカッコで親クラスを指定します。__init__ は親のものが引き継がれるので書かなくてOKです。",
    answerCode: "class Animal:\n    def __init__(self, name):\n        self.name = name\n\n    def cry(self):\n        return \"...\"\n\nclass Dog(Animal):\n    def cry(self):\n        return self.name + \"「ワン！」\"\n\nclass Cat(Animal):\n    def cry(self):\n        return self.name + \"「ニャー」\"\n\nprint(Dog(\"ポチ\").cry())\nprint(Cat(\"タマ\").cry())"
  },
  {
    id: "a006",
    level: "advanced",
    category: "foundation",
    title: "銀行口座クラス",
    description:
      "次の仕様のクラス BankAccount を定義してください。\n\n・コンストラクタで残高 balance を 0 で初期化する\n・deposit(amount): 残高に amount を加える\n・withdraw(amount): 残高が足りれば amount を引く。足りなければ「残高不足」と出力する\n\nそのうえで次の操作を順に行ってください。\n\n1. 口座を作り 1000 を入金\n2. 300 を出金\n3. 残高を出力\n4. 1000 を出金（残高不足になる）\n\n期待される出力:\n700\n残高不足",
    starterCode: "# クラス BankAccount を定義してください\n",
    expectedOutput: "700\n残高不足",
    explanation:
      "正解例:\n\nclass BankAccount:\n    def __init__(self):\n        self.balance = 0\n\n    def deposit(self, amount):\n        self.balance += amount\n\n    def withdraw(self, amount):\n        if self.balance >= amount:\n            self.balance -= amount\n        else:\n            print(\"残高不足\")\n\nacc = BankAccount()\nacc.deposit(1000)\nacc.withdraw(300)\nprint(acc.balance)\nacc.withdraw(1000)\n\n" +
      "「データ（残高）とそれを操作するメソッド（入金・出金）をひとまとめにする」というクラスの基本的な使い方です。状態は self.balance に保持され、メソッド呼び出しのたびに更新されます。\n\n" +
      "よくある間違い:\n・self.balance ではなく balance と書くと、ただのローカル変数になり状態が保存されません\n・残高チェックは >= です。> にすると残高ちょうどの出金ができなくなります。",
    hint: "self.balance に状態を保持します。withdraw では if self.balance >= amount: で判定します。",
    answerCode: "class BankAccount:\n    def __init__(self):\n        self.balance = 0\n\n    def deposit(self, amount):\n        self.balance += amount\n\n    def withdraw(self, amount):\n        if self.balance >= amount:\n            self.balance -= amount\n        else:\n            print(\"残高不足\")\n\nacc = BankAccount()\nacc.deposit(1000)\nacc.withdraw(300)\nprint(acc.balance)\nacc.withdraw(1000)"
  },
  {
    id: "a007",
    level: "advanced",
    category: "foundation",
    title: "変換エラーとfinally",
    description:
      "文字列 \"abc\" を int() で整数に変換する処理を try / except / finally で囲み、次の動作をするコードを書いてください。\n\n・ValueError が発生したら「変換できません」と出力\n・成功・失敗にかかわらず最後に「処理終了」と出力（finallyを使うこと）\n\n期待される出力:\n変換できません\n処理終了",
    starterCode: "# try / except ValueError / finally の3ブロックを書いてください\n",
    expectedOutput: "変換できません\n処理終了",
    explanation:
      "正解例:\n\ntry:\n    n = int(\"abc\")\n    print(n)\nexcept ValueError:\n    print(\"変換できません\")\nfinally:\n    print(\"処理終了\")\n\n" +
      "finally ブロックは「例外が発生してもしなくても必ず実行される」処理を書く場所です。ファイルのクローズや後片付け処理によく使われます。\n\n" +
      "よくある間違い:\n・int(\"abc\") は ValueError です。TypeError と書くと捕捉できずプログラムが停止します（エラーの種類を正しく指定することが重要です）\n・「処理終了」を try の外に普通に書いても今回は同じ出力になりますが、問題の指定どおり finally を使いましょう。",
    hint: "except ValueError: で捕捉し、finally: ブロックに「処理終了」を書きます。",
    answerCode: "try:\n    n = int(\"abc\")\n    print(n)\nexcept ValueError:\n    print(\"変換できません\")\nfinally:\n    print(\"処理終了\")"
  },
  {
    id: "a008",
    level: "advanced",
    category: "foundation",
    title: "raiseで例外を発生させる",
    description:
      "年齢を検証する関数 check_age を定義してください。\n\n・age が 0 以上ならそのまま age を返す\n・age が負の数なら ValueError(\"年齢は0以上で指定してください\") を発生させる（raise）\n\nそのうえで、まず check_age(20) の結果を出力し、次に check_age(-5) を try / except で囲んで、捕捉した例外のメッセージを出力してください。\n\n期待される出力:\n20\n年齢は0以上で指定してください",
    starterCode: "# 関数 check_age を定義し、raise を使ってください\n",
    expectedOutput: "20\n年齢は0以上で指定してください",
    explanation:
      "正解例:\n\ndef check_age(age):\n    if age < 0:\n        raise ValueError(\"年齢は0以上で指定してください\")\n    return age\n\nprint(check_age(20))\n\ntry:\n    check_age(-5)\nexcept ValueError as e:\n    print(e)\n\n" +
      "raise は自分で例外を発生させる文です。「不正な値を受け取ったら例外で知らせる」のは関数設計の基本パターンです。except ValueError as e: の e にはエラーメッセージが入っており、print(e) でメッセージだけを表示できます。\n\n" +
      "よくある間違い:\n・raise を return と書いてしまうと、エラーではなく普通の戻り値になってしまいます\n・as e を忘れるとメッセージを取り出せません。",
    hint: "if age < 0: raise ValueError(\"...\") とし、呼び出し側で except ValueError as e: print(e) とします。",
    answerCode: "def check_age(age):\n    if age < 0:\n        raise ValueError(\"年齢は0以上で指定してください\")\n    return age\n\nprint(check_age(20))\n\ntry:\n    check_age(-5)\nexcept ValueError as e:\n    print(e)"
  },
  {
    id: "a009",
    level: "advanced",
    category: "foundation",
    title: "再帰でフィボナッチ数列",
    description:
      "フィボナッチ数列（前の2つの数の和が次の数になる数列: 0, 1, 1, 2, 3, 5, 8...）の第n項を返す再帰関数 fib を定義してください。\n\n・fib(0) = 0、fib(1) = 1\n・fib(n) = fib(n-1) + fib(n-2)\n\nそのうえで fib(10) と fib(15) の結果をこの順番で1行ずつ出力してください。\n\n期待される出力:\n55\n610",
    starterCode: "# 再帰関数 fib を定義してください\n",
    expectedOutput: "55\n610",
    explanation:
      "正解例:\n\ndef fib(n):\n    if n <= 1:\n        return n\n    return fib(n - 1) + fib(n - 2)\n\nprint(fib(10))\nprint(fib(15))\n\n" +
      "fib(0) = 0 と fib(1) = 1 の2つのベースケースが if n <= 1: return n の1行にまとまっているのがポイントです。\n\n" +
      "よくある間違い:\n・ベースケースを return 1 にすると、fib(0) が 1 になり結果がずれます\n・この素朴な再帰は同じ計算を何度も繰り返すため、fib(35) などにすると急激に遅くなります（改善にはメモ化という手法を使います）。",
    hint: "if n <= 1: return n がベースケースです。あとは fib(n-1) + fib(n-2) を返します。",
    answerCode: "def fib(n):\n    if n <= 1:\n        return n\n    return fib(n - 1) + fib(n - 2)\n\nprint(fib(10))\nprint(fib(15))"
  },
  {
    id: "a010",
    level: "advanced",
    category: "foundation",
    title: "再帰で各桁の合計",
    description:
      "整数の各桁の合計を返す再帰関数 digit_sum を定義してください（例: 9876 → 9+8+7+6 = 30）。\n\n・n が10未満なら n をそのまま返す（ベースケース）\n・それ以外は「1の位 + 残りの桁の合計」を返す\n\nそのうえで digit_sum(9876) と digit_sum(5) の結果をこの順番で1行ずつ出力してください。\n\n期待される出力:\n30\n5",
    starterCode: "# 再帰関数 digit_sum を定義してください\n",
    expectedOutput: "30\n5",
    explanation:
      "正解例:\n\ndef digit_sum(n):\n    if n < 10:\n        return n\n    return n % 10 + digit_sum(n // 10)\n\nprint(digit_sum(9876))\nprint(digit_sum(5))\n\n" +
      "n % 10 で1の位が取り出せ、n // 10 で1の位を取り除いた数になります（9876 → 余り6、商987）。「問題を1桁分小さくして自分自身に渡す」という再帰の典型例です。\n\n" +
      "よくある間違い:\n・n / 10 と普通の割り算を使うと float になり、正しく桁を削れません。整数の再帰では // を使います\n・ベースケース if n < 10 を忘れると無限再帰で RecursionError になります。",
    hint: "1の位は n % 10、残りは n // 10 です。n が1桁になったら再帰を止めます。",
    answerCode: "def digit_sum(n):\n    if n < 10:\n        return n\n    return n % 10 + digit_sum(n // 10)\n\nprint(digit_sum(9876))\nprint(digit_sum(5))"
  },
  {
    id: "a011",
    level: "advanced",
    category: "foundation",
    title: "ファイルに書いて読み戻す",
    description:
      "次の2段階の処理を書いてください。\n\n1. ファイル memo.txt を書き込みモードで開き、「1行目」「2行目」という2行を書き込む\n2. 同じファイルを読み込みモードで開き直し、内容全体を読み込んで出力する\n\n期待される出力:\n1行目\n2行目\n\n※このツール内のファイル操作はブラウザ内の仮想ファイルシステムで完結します。",
    starterCode: "# with open(...) を使って書き込み→読み込みの順に処理してください\n",
    expectedOutput: "1行目\n2行目",
    explanation:
      "正解例:\n\nwith open(\"memo.txt\", \"w\") as f:\n    f.write(\"1行目\\n2行目\\n\")\n\nwith open(\"memo.txt\") as f:\n    print(f.read())\n\n" +
      "open(ファイル名, モード) でファイルを開きます。\"w\" は書き込み（上書き）、省略時は \"r\"（読み込み）です。with 文を使うとブロックを抜けるときに自動でファイルが閉じられるため、close() の書き忘れを防げます。\n\n" +
      "よくある間違い:\n・write() は print() と違って改行を自動で付けません。改行したい場所には \\n を自分で書きます\n・書き込んだ直後に閉じずに読もうとすると、内容がまだ書き込まれていないことがあります。with ブロックを分けるのが安全です。",
    hint: "with open(\"memo.txt\", \"w\") as f: で書き込み、別の with open(\"memo.txt\") as f: で読み込みます。",
    answerCode: "with open(\"memo.txt\", \"w\") as f:\n    f.write(\"1行目\\n2行目\\n\")\n\nwith open(\"memo.txt\") as f:\n    print(f.read())"
  },
  {
    id: "a012",
    level: "advanced",
    category: "engineering",
    title: "ファイルの数値を集計する",
    description:
      "次の2段階の処理を書いてください。\n\n1. ファイル scores.txt に 80、92、75 の3つの数値を1行ずつ書き込む\n2. ファイルを読み込み、各行を整数に変換して合計を出力する\n\n期待される出力:\n247",
    starterCode: "scores = [80, 92, 75]\n# 書き込み → 読み込み・集計 の順に処理してください\n",
    expectedOutput: "247",
    explanation:
      "正解例:\n\nscores = [80, 92, 75]\nwith open(\"scores.txt\", \"w\") as f:\n    for s in scores:\n        f.write(str(s) + \"\\n\")\n\ntotal = 0\nwith open(\"scores.txt\") as f:\n    for line in f:\n        total += int(line)\nprint(total)\n\n" +
      "ファイルオブジェクトはforで直接ループでき、1行ずつ取り出せます。読み込んだ各行は「80\\n」のような改行付きの文字列ですが、int() は前後の空白・改行を無視して変換してくれます。\n\n" +
      "よくある間違い:\n・f.write(s) と数値をそのまま渡すと TypeError になります（write は文字列のみ）\n・行の合計を文字列のまま + すると \"809275\" のような連結になってしまいます。int() への変換を忘れずに。",
    hint: "書き込みは f.write(str(s) + \"\\n\")、読み込みは for line in f: で1行ずつ処理して int(line) を合計します。",
    answerCode: "scores = [80, 92, 75]\nwith open(\"scores.txt\", \"w\") as f:\n    for s in scores:\n        f.write(str(s) + \"\\n\")\n\ntotal = 0\nwith open(\"scores.txt\") as f:\n    for line in f:\n        total += int(line)\nprint(total)"
  },
  {
    id: "a013",
    level: "advanced",
    category: "foundation",
    title: "lambdaで並べ替えの基準を指定",
    description:
      "商品名と価格のタプルのリスト items = [(\"ノート\", 80), (\"ペン\", 120), (\"消しゴム\", 45)] を、価格の安い順に並べ替えた新しいリストを作り、printで出力してください。\nsorted() の key 引数と lambda を使うこと。\n\n期待される出力:\n[('消しゴム', 45), ('ノート', 80), ('ペン', 120)]",
    starterCode: "items = [(\"ノート\", 80), (\"ペン\", 120), (\"消しゴム\", 45)]\n# sorted の key に lambda を渡しましょう\n",
    expectedOutput: "[('消しゴム', 45), ('ノート', 80), ('ペン', 120)]",
    explanation:
      "正解例:\n\nitems = [(\"ノート\", 80), (\"ペン\", 120), (\"消しゴム\", 45)]\nprint(sorted(items, key=lambda x: x[1]))\n\n" +
      "lambda は「名前のない小さな関数」を作る式です。lambda x: x[1] は「x を受け取って x[1]（タプルの2番目＝価格）を返す関数」で、sorted の key に渡すと「何を基準に並べ替えるか」を指定できます。\n\n" +
      "よくある間違い:\n・key を指定しないとタプルの1番目（商品名）の文字列順で並んでしまいます\n・x[1] の 1 は「2番目の要素」です（インデックスは0始まり）。",
    hint: "sorted(items, key=lambda x: x[1]) で「タプルの2番目の値」を基準に並べ替えられます。",
    answerCode: "items = [(\"ノート\", 80), (\"ペン\", 120), (\"消しゴム\", 45)]\nprint(sorted(items, key=lambda x: x[1]))"
  },
  {
    id: "a014",
    level: "advanced",
    category: "foundation",
    title: "mapで一括変換",
    description:
      "文字列のリスト strs = [\"10\", \"20\", \"30\"] について、map() を使って全要素を整数に変換したリストを作り、次の2つをこの順番で1行ずつ出力してください。\n\n1行目: 変換後のリスト\n2行目: その合計",
    starterCode: "strs = [\"10\", \"20\", \"30\"]\n# map(int, ...) を使ってみましょう\n",
    expectedOutput: "[10, 20, 30]\n60",
    explanation:
      "正解例:\n\nstrs = [\"10\", \"20\", \"30\"]\nnums = list(map(int, strs))\nprint(nums)\nprint(sum(nums))\n\n" +
      "map(関数, リスト) は「リストの全要素に関数を適用する」イテレータを返します。int をそのまま渡せるのがポイントです（lambda不要）。リストとして表示するには list() で変換します。\n\n" +
      "よくある間違い:\n・print(map(int, strs)) とすると <map object ...> のような表記が出ます。list() で変換してからprintします\n・内包表記 [int(s) for s in strs] でも同じ結果になります。どちらもよく使われる書き方です。",
    hint: "list(map(int, strs)) で全要素がintに変換されたリストになります。",
    answerCode: "strs = [\"10\", \"20\", \"30\"]\nnums = list(map(int, strs))\nprint(nums)\nprint(sum(nums))"
  },
  {
    id: "a015",
    level: "advanced",
    category: "foundation",
    title: "filterで3の倍数を抽出",
    description:
      "1から20までの整数から、filter() と lambda を使って3の倍数だけを抽出したリストを作り、printで出力してください。\n\n期待される出力:\n[3, 6, 9, 12, 15, 18]",
    starterCode: "nums = list(range(1, 21))\n# filter(lambda ..., nums) を使ってみましょう\n",
    expectedOutput: "[3, 6, 9, 12, 15, 18]",
    explanation:
      "正解例:\n\nnums = list(range(1, 21))\nresult = list(filter(lambda x: x % 3 == 0, nums))\nprint(result)\n\n" +
      "filter(条件関数, リスト) は「条件関数が True を返す要素だけ」を残します。map が「全要素を変換」なのに対し、filter は「要素を選別」です。対で覚えましょう。\n\n" +
      "よくある間違い:\n・filter の結果もイテレータなので、list() で変換しないとリスト表示になりません\n・lambda x: x % 3（== 0 を忘れる）と書くと、余りが0以外（truthy）の要素が残ってしまい逆の結果になります\n・内包表記 [x for x in nums if x % 3 == 0] でも同じ結果になります。",
    hint: "list(filter(lambda x: x % 3 == 0, nums)) です。== 0 を忘れずに。",
    answerCode: "nums = list(range(1, 21))\nresult = list(filter(lambda x: x % 3 == 0, nums))\nprint(result)"
  },
  {
    id: "a016",
    level: "advanced",
    category: "foundation",
    title: "辞書内包表記",
    description:
      "辞書内包表記を使って、1から5までの整数をキー、その2乗を値とする辞書を作り、printで出力してください。\n\n期待される出力:\n{1: 1, 2: 4, 3: 9, 4: 16, 5: 25}",
    starterCode: "# {キー: 値 for 変数 in イテラブル} の形です\n",
    expectedOutput: "{1: 1, 2: 4, 3: 9, 4: 16, 5: 25}",
    explanation:
      "正解例:\n\nsquares = {x: x ** 2 for x in range(1, 6)}\nprint(squares)\n\n" +
      "リスト内包表記の辞書版です。{キーの式: 値の式 for 変数 in イテラブル} の形で、ループで辞書を組み立てる処理を1行で書けます。\n\n" +
      "よくある間違い:\n・コロンを忘れて {x, x ** 2 for ...} と書くと集合（set）の構文と混ざってエラーになります\n・range(1, 6) の終端は含まれないため、5まで欲しければ 6 と書きます。",
    hint: "{x: x ** 2 for x in range(1, 6)} の形です。キーと値の間はコロンです。",
    answerCode: "squares = {x: x ** 2 for x in range(1, 6)}\nprint(squares)"
  },
  {
    id: "a017",
    level: "advanced",
    category: "foundation",
    title: "可変長引数 *args",
    description:
      "引数をいくつでも受け取れる関数 total を、可変長引数 *args を使って定義してください。total は受け取った数値すべての合計を返します。\n\nそのうえで total(1, 2, 3) と total(10, 20, 30, 40) の結果をこの順番で1行ずつ出力してください。\n\n期待される出力:\n6\n100",
    starterCode: "# def total(*args): の形で定義してください\n",
    expectedOutput: "6\n100",
    explanation:
      "正解例:\n\ndef total(*args):\n    return sum(args)\n\nprint(total(1, 2, 3))\nprint(total(10, 20, 30, 40))\n\n" +
      "引数名の前に * を付けると、渡された引数がすべてタプルにまとめられます。3個でも4個でも同じ関数で受け取れるのがポイントです。組み込みの print() も実はこの仕組みで複数の値を受け取っています。\n\n" +
      "よくある間違い:\n・関数の中では args（*なし）として使います。sum(*args) と書くとエラーになります\n・args という名前は慣習で、*values など他の名前でも動きます。",
    hint: "def total(*args): とすると、args に引数がタプルとして入ります。sum(args) で合計できます。",
    answerCode: "def total(*args):\n    return sum(args)\n\nprint(total(1, 2, 3))\nprint(total(10, 20, 30, 40))"
  },
  {
    id: "a018",
    level: "advanced",
    category: "foundation",
    title: "__str__で表示を定義する",
    description:
      "次の仕様のクラス Item を定義してください。\n\n・コンストラクタで name と price を受け取り、属性として保存する\n・__str__ メソッドで「名前(価格円)」という文字列を返す\n\nそのうえで Item(\"りんご\", 120) と Item(\"バナナ\", 80) を printでこの順番で1行ずつ出力してください。\n\n期待される出力:\nりんご(120円)\nバナナ(80円)",
    starterCode: "# __str__ メソッドを持つクラス Item を定義してください\n",
    expectedOutput: "りんご(120円)\nバナナ(80円)",
    explanation:
      "正解例:\n\nclass Item:\n    def __init__(self, name, price):\n        self.name = name\n        self.price = price\n\n    def __str__(self):\n        return f\"{self.name}({self.price}円)\"\n\nprint(Item(\"りんご\", 120))\nprint(Item(\"バナナ\", 80))\n\n" +
      "__str__ を定義すると、そのインスタンスを print したときの表示を自分で決められます。定義しない場合は <__main__.Item object at 0x...> のような表示になります。デバッグやログ出力で非常に役立つ特殊メソッドです。\n\n" +
      "よくある間違い:\n・__str__ の中で print してしまうと None が返りエラーになります。return で文字列を返します\n・アンダースコアは前後2つずつです（_str_ では機能しません）。",
    hint: "def __str__(self): return f\"{self.name}({self.price}円)\" を定義すると、printの表示が変わります。",
    answerCode: "class Item:\n    def __init__(self, name, price):\n        self.name = name\n        self.price = price\n\n    def __str__(self):\n        return f\"{self.name}({self.price}円)\"\n\nprint(Item(\"りんご\", 120))\nprint(Item(\"バナナ\", 80))"
  },
  {
    id: "a019",
    level: "advanced",
    category: "foundation",
    title: "ジェネレータ（yield）",
    description:
      "yield を使って、1からnまでの整数の2乗を順に返すジェネレータ関数 squares を定義してください。\nそのうえで squares(5) をforループで回し、値を1行ずつ出力してください。\n\n期待される出力:\n1\n4\n9\n16\n25",
    starterCode: "# def squares(n): の中で yield を使ってください\n",
    expectedOutput: "1\n4\n9\n16\n25",
    explanation:
      "正解例:\n\ndef squares(n):\n    for x in range(1, n + 1):\n        yield x * x\n\nfor s in squares(5):\n    print(s)\n\n" +
      "yield を含む関数はジェネレータになり、値を「1つずつ、求められるたびに」生成します。リストと違って全要素をメモリに持たないため、大量データの処理で威力を発揮します。return が「1回返して終わり」なのに対し、yield は「返しては次の要求まで一時停止」です。\n\n" +
      "よくある間違い:\n・yield を return にすると最初の1つで関数が終了してしまいます\n・print(squares(5)) とすると <generator object ...> と表示されます。forで回すか list() で変換します。",
    hint: "for x in range(1, n + 1): yield x * x とします。呼び出し側は普通のforで回せます。",
    answerCode: "def squares(n):\n    for x in range(1, n + 1):\n        yield x * x\n\nfor s in squares(5):\n    print(s)"
  },
  {
    id: "a020",
    level: "advanced",
    category: "foundation",
    title: "allとanyで条件をまとめて判定",
    description:
      "テストの点数リスト scores = [80, 92, 75] について、ジェネレータ式と all / any を使って次の2つをこの順番で1行ずつ出力してください。\n\n1行目: 全員が80点以上か（all）\n2行目: 90点以上が1人でもいるか（any）\n\n期待される出力:\nFalse\nTrue",
    starterCode: "scores = [80, 92, 75]\n# all(...) と any(...) を使ってみましょう\n",
    expectedOutput: "False\nTrue",
    explanation:
      "正解例:\n\nscores = [80, 92, 75]\nprint(all(s >= 80 for s in scores))\nprint(any(s >= 90 for s in scores))\n\n" +
      "all() は「すべて True なら True」、any() は「1つでも True なら True」を返します。カッコの中の s >= 80 for s in scores はジェネレータ式で、各要素を順に判定します。ループとフラグ変数で書くと5〜6行になる処理が1行になります。\n\n" +
      "よくある間違い:\n・75点の人がいるため all(s >= 80 ...) は False です\n・all と any を取り違えると結果が逆になります。「全員＝all、誰か＝any」と覚えましょう。",
    hint: "all(s >= 80 for s in scores) で「全員80点以上か」を1行で判定できます。",
    answerCode: "scores = [80, 92, 75]\nprint(all(s >= 80 for s in scores))\nprint(any(s >= 90 for s in scores))"
  },
  {
    id: "a021",
    level: "advanced",
    category: "foundation",
    title: "複数キーで並べ替え",
    description:
      "生徒のデータ（名前, 学年, 点数）のリストがあります。\n\nstudents = [(\"田中\", 2, 85), (\"佐藤\", 1, 90), (\"鈴木\", 2, 92), (\"高橋\", 1, 78)]\n\nsorted() と lambda を使って「学年の昇順、同じ学年なら点数の降順」に並べ替えた新しいリストを作り、printで出力してください。\n\n期待される出力:\n[('佐藤', 1, 90), ('高橋', 1, 78), ('鈴木', 2, 92), ('田中', 2, 85)]",
    starterCode: "students = [(\"田中\", 2, 85), (\"佐藤\", 1, 90), (\"鈴木\", 2, 92), (\"高橋\", 1, 78)]\n# key にタプルを返す lambda を渡します\n",
    expectedOutput: "[('佐藤', 1, 90), ('高橋', 1, 78), ('鈴木', 2, 92), ('田中', 2, 85)]",
    explanation:
      "正解例:\n\nstudents = [(\"田中\", 2, 85), (\"佐藤\", 1, 90), (\"鈴木\", 2, 92), (\"高橋\", 1, 78)]\nresult = sorted(students, key=lambda x: (x[1], -x[2]))\nprint(result)\n\n" +
      "key にタプルを返す関数を渡すと、「1番目の値で比較→同じなら2番目の値で比較」と多段階の並べ替えができます。数値の降順は符号を反転（-x[2]）するのが定番テクニックです。\n\n" +
      "よくある間違い:\n・(x[1], x[2]) とすると点数も昇順になり、同学年内の順序が逆になります\n・文字列キーは符号反転できないため、その場合は reverse=True と組み合わせるなど別の方法を使います。",
    hint: "key=lambda x: (x[1], -x[2]) で「学年昇順・点数降順」になります。",
    answerCode: "students = [(\"田中\", 2, 85), (\"佐藤\", 1, 90), (\"鈴木\", 2, 92), (\"高橋\", 1, 78)]\nresult = sorted(students, key=lambda x: (x[1], -x[2]))\nprint(result)"
  },

  // ---------------------------------------------------------
  // advanced（上級）× engineering: ETL・結合・高度な集計
  // ---------------------------------------------------------
  {
    id: "a022",
    level: "advanced",
    category: "engineering",
    title: "APIレスポンスから条件抽出",
    description:
      "APIレスポンス風のJSON文字列 response から、active が true のユーザーの名前だけを集めたリストを出力してください。\n\n期待される出力:\n['佐藤', '高橋']",
    starterCode: "import json\n\nresponse = '{\"users\": [{\"name\": \"佐藤\", \"age\": 28, \"active\": true}, {\"name\": \"鈴木\", \"age\": 35, \"active\": false}, {\"name\": \"高橋\", \"age\": 41, \"active\": true}]}'\n# loads → users を取り出す → 内包表記でフィルタ\n",
    expectedOutput: "['佐藤', '高橋']",
    explanation:
      "正解例:\n\nimport json\n\ndata = json.loads(response)\nactive_names = [u[\"name\"] for u in data[\"users\"] if u[\"active\"]]\nprint(active_names)\n\n" +
      "「JSONを読み込む→必要な配列を取り出す→条件で絞って必要な項目だけ集める」という、API連携処理の縮図のような問題です。JSONの true / false は loads すると Python の True / False に変換されるため、if u[\"active\"] とそのまま条件に使えます。\n\n" +
      "よくある間違い:\n・data はリストではなく {\"users\": [...]} という辞書です。まず data[\"users\"] で配列を取り出します\n・if u[\"active\"] == \"true\" と文字列比較すると、誰もマッチしません（変換後はbool型です）。",
    hint: "[u[\"name\"] for u in data[\"users\"] if u[\"active\"]] の形です。activeはbool型になっています。",
    answerCode: "import json\nresponse = '{\"users\": [{\"name\": \"佐藤\", \"age\": 28, \"active\": true}, {\"name\": \"鈴木\", \"age\": 35, \"active\": false}, {\"name\": \"高橋\", \"age\": 41, \"active\": true}]}'\nimport json\n\ndata = json.loads(response)\nactive_names = [u[\"name\"] for u in data[\"users\"] if u[\"active\"]]\nprint(active_names)"
  },
  {
    id: "a023",
    level: "advanced",
    category: "engineering",
    title: "JSONを整形して出力",
    description:
      "設定の辞書 config = {\"app\": \"trainer\", \"debug\": False, \"version\": 2} を、インデント2の整形済みJSONとして出力してください（ensure_ascii=False を指定）。\n\n期待される出力:\n{\n  \"app\": \"trainer\",\n  \"debug\": false,\n  \"version\": 2\n}",
    starterCode: "import json\n\nconfig = {\"app\": \"trainer\", \"debug\": False, \"version\": 2}\n# indent引数で整形できます\n",
    expectedOutput: "{\n  \"app\": \"trainer\",\n  \"debug\": false,\n  \"version\": 2\n}",
    explanation:
      "正解例:\n\nimport json\n\nconfig = {\"app\": \"trainer\", \"debug\": False, \"version\": 2}\nprint(json.dumps(config, indent=2, ensure_ascii=False))\n\n" +
      "indent=2 を指定すると、キーごとに改行とインデントが入った読みやすいJSONになります。設定ファイルの出力やAPIレスポンスのデバッグ表示で頻繁に使います。\n\n" +
      "よくある間違い:\n・Pythonの False は JSON では小文字の false に変換されます。None → null、True → true も同様で、この対応はJSONを扱ううえで必須知識です\n・indent を付けないと1行のJSONになり、期待される出力と一致しません。",
    hint: "json.dumps(config, indent=2, ensure_ascii=False) です。Falseがfalseに変わる点に注目。",
    answerCode: "import json\n\nconfig = {\"app\": \"trainer\", \"debug\": False, \"version\": 2}\nprint(json.dumps(config, indent=2, ensure_ascii=False))"
  },
  {
    id: "a024",
    level: "advanced",
    category: "engineering",
    title: "ネストしたJSONの明細を集計",
    description:
      "注文JSONの items（明細の配列）について、次の2つをこの順番で1行ずつ出力してください。\n\n1行目: 明細の件数\n2行目: 全明細の「単価×数量」の合計金額\n\n期待される出力:\n2\n760",
    starterCode: "import json\n\ndata = '{\"order_id\": 101, \"items\": [{\"name\": \"ペン\", \"price\": 120, \"qty\": 3}, {\"name\": \"ノート\", \"price\": 200, \"qty\": 2}]}'\n# items を取り出してから集計します\n",
    expectedOutput: "2\n760",
    explanation:
      "正解例:\n\nimport json\n\norder = json.loads(data)\nprint(len(order[\"items\"]))\nprint(sum(item[\"price\"] * item[\"qty\"] for item in order[\"items\"]))\n\n" +
      "「ヘッダー情報（order_id）+ 明細の配列（items）」は、注文・請求・伝票など業務データの典型的な構造です。明細の集計は sum() とジェネレータ式で簡潔に書けます（120×3 + 200×2 = 760）。\n\n" +
      "よくある間違い:\n・len(order) は辞書のキー数（2）を返すので、たまたま正解に見えますが意味が違います。明細数は len(order[\"items\"]) です\n・price と qty の掛け算を忘れると 320 になってしまいます。",
    hint: "order[\"items\"] が明細のリストです。len() と sum(item[\"price\"] * item[\"qty\"] for ...) で集計します。",
    answerCode: "import json\ndata = '{\"order_id\": 101, \"items\": [{\"name\": \"ペン\", \"price\": 120, \"qty\": 3}, {\"name\": \"ノート\", \"price\": 200, \"qty\": 2}]}'\nimport json\n\norder = json.loads(data)\nprint(len(order[\"items\"]))\nprint(sum(item[\"price\"] * item[\"qty\"] for item in order[\"items\"]))"
  },
  {
    id: "a025",
    level: "advanced",
    category: "engineering",
    title: "売上構成比を計算する",
    description:
      "カテゴリ別売上の辞書 sales = {\"食品\": 5000, \"日用品\": 3000, \"雑貨\": 2000} について、各カテゴリの構成比（全体に占める割合）をパーセント表示で1行ずつ出力してください。\nf-stringの :.0% 書式を使うこと。\n\n期待される出力:\n食品: 50%\n日用品: 30%\n雑貨: 20%",
    starterCode: "sales = {\"食品\": 5000, \"日用品\": 3000, \"雑貨\": 2000}\n# まず合計を求め、各値を合計で割ります\n",
    expectedOutput: "食品: 50%\n日用品: 30%\n雑貨: 20%",
    explanation:
      "正解例:\n\nsales = {\"食品\": 5000, \"日用品\": 3000, \"雑貨\": 2000}\ntotal = sum(sales.values())\nfor category, amount in sales.items():\n    print(f\"{category}: {amount / total:.0%}\")\n\n" +
      "構成比はKPIレポートの基本です。sum(sales.values()) で全体を求め、各値を割ります。f-stringの :.0% は「割合(0.5)を百分率(50%)で表示する」書式で、100を掛ける必要はありません。\n\n" +
      "よくある間違い:\n・{amount / total * 100}% と書くと 50.0% のように小数点が付き、出力が一致しません。:.0% 書式なら丸めまで一括で行えます\n・items() でキーと値を同時に取り出すのがポイントです。",
    hint: "total = sum(sales.values()) のあと、f\"{amount / total:.0%}\" で「50%」形式になります。",
    answerCode: "sales = {\"食品\": 5000, \"日用品\": 3000, \"雑貨\": 2000}\ntotal = sum(sales.values())\nfor category, amount in sales.items():\n    print(f\"{category}: {amount / total:.0%}\")"
  },
  {
    id: "a026",
    level: "advanced",
    category: "engineering",
    title: "店舗×カテゴリの2段階集計",
    description:
      "（店舗, カテゴリ, 金額）のタプルのリスト records を、店舗ごと・カテゴリごとの2段階で合計した入れ子の辞書を作って出力してください。\n\n期待される出力:\n{'東京': {'食品': 150, '雑貨': 150}, '大阪': {'食品': 200}}",
    starterCode: "records = [(\"東京\", \"食品\", 100), (\"大阪\", \"食品\", 200), (\"東京\", \"雑貨\", 150), (\"東京\", \"食品\", 50)]\nresult = {}\n# setdefault で内側の辞書を用意してから加算します\n",
    expectedOutput: "{'東京': {'食品': 150, '雑貨': 150}, '大阪': {'食品': 200}}",
    explanation:
      "正解例:\n\nrecords = [(\"東京\", \"食品\", 100), (\"大阪\", \"食品\", 200), (\"東京\", \"雑貨\", 150), (\"東京\", \"食品\", 50)]\nresult = {}\nfor store, category, amount in records:\n    result.setdefault(store, {})\n    result[store][category] = result[store].get(category, 0) + amount\nprint(result)\n\n" +
      "SQLの「GROUP BY 店舗, カテゴリ」に相当する2軸集計です。外側のキー（店舗）には setdefault で空の辞書を用意し、内側のキー（カテゴリ）には get イディオムで加算する、という2つのパターンの組み合わせで実現します。\n\n" +
      "よくある間違い:\n・setdefault を忘れて result[store][category] にいきなり代入すると、初めての店舗で KeyError になります\n・東京の食品は 100 + 50 = 150 です。上書きではなく加算になっているか確認しましょう。",
    hint: "result.setdefault(store, {}) で内側の辞書を確保し、get(category, 0) + amount で加算します。",
    answerCode: "records = [(\"東京\", \"食品\", 100), (\"大阪\", \"食品\", 200), (\"東京\", \"雑貨\", 150), (\"東京\", \"食品\", 50)]\nresult = {}\nfor store, category, amount in records:\n    result.setdefault(store, {})\n    result[store][category] = result[store].get(category, 0) + amount\nprint(result)"
  },
  {
    id: "a027",
    level: "advanced",
    category: "engineering",
    title: "売上ランキングTop3",
    description:
      "商品別販売数の辞書 sales から、販売数の多い順にTop3を「順位: 商品名（個数個）」の形式で1行ずつ出力してください。\n\n期待される出力:\n1位: ぶどう（880個）\n2位: バナナ（540個）\n3位: りんご（320個）",
    starterCode: "sales = {\"りんご\": 320, \"バナナ\": 540, \"みかん\": 210, \"ぶどう\": 880, \"もも\": 150}\n# items() を値で降順ソートし、スライスで3件に絞ります\n",
    expectedOutput: "1位: ぶどう（880個）\n2位: バナナ（540個）\n3位: りんご（320個）",
    explanation:
      "正解例:\n\nsales = {\"りんご\": 320, \"バナナ\": 540, \"みかん\": 210, \"ぶどう\": 880, \"もも\": 150}\nranked = sorted(sales.items(), key=lambda x: x[1], reverse=True)[:3]\nfor i, (name, count) in enumerate(ranked, 1):\n    print(f\"{i}位: {name}（{count}個）\")\n\n" +
      "「辞書を値で降順ソート→上位n件を取り出し→順位を付けて表示」というランキング処理のフルコースです。sales.items() で（キー, 値）のタプル列にし、key=lambda x: x[1] で値を基準に、reverse=True で降順にします。\n\n" +
      "よくある間違い:\n・辞書はそのままではソートできません。必ず items() でタプルのリストにします\n・enumerate の開始値 1 を忘れると「0位」から始まってしまいます\n・カッコ（）は全角です。",
    hint: "sorted(sales.items(), key=lambda x: x[1], reverse=True)[:3] でTop3のタプルが取れます。",
    answerCode: "sales = {\"りんご\": 320, \"バナナ\": 540, \"みかん\": 210, \"ぶどう\": 880, \"もも\": 150}\nranked = sorted(sales.items(), key=lambda x: x[1], reverse=True)[:3]\nfor i, (name, count) in enumerate(ranked, 1):\n    print(f\"{i}位: {name}（{count}個）\")"
  },
  {
    id: "a028",
    level: "advanced",
    category: "engineering",
    title: "変換できない値をスキップ",
    description:
      "数値のはずのデータ raw = [\"120\", \"abc\", \"250\", \"\", \"98\"] には不正な値が混ざっています。int() に変換できた値だけを集めたリストと、その合計をこの順番で1行ずつ出力してください。\n\n期待される出力:\n[120, 250, 98]\n468",
    starterCode: "raw = [\"120\", \"abc\", \"250\", \"\", \"98\"]\nnums = []\n# try / except ValueError で変換失敗をスキップします\n",
    expectedOutput: "[120, 250, 98]\n468",
    explanation:
      "正解例:\n\nraw = [\"120\", \"abc\", \"250\", \"\", \"98\"]\nnums = []\nfor r in raw:\n    try:\n        nums.append(int(r))\n    except ValueError:\n        pass\nprint(nums)\nprint(sum(nums))\n\n" +
      "「変換できるものだけ拾い、できないものは黙ってスキップする」のは、汚れた実データを扱うETL処理の定番パターンです。except ValueError: pass の pass は「何もしない」という文です。\n\n" +
      "よくある間違い:\n・isdigit() での事前チェックでも近いことができますが、\"-5\" のような負数で誤判定します。try / except のほうが確実です\n・except: と例外の種類を省略するのは、無関係なバグまで隠してしまうため避けるべき書き方です。",
    hint: "try: nums.append(int(r)) / except ValueError: pass で「変換できた値だけ」が集まります。",
    answerCode: "raw = [\"120\", \"abc\", \"250\", \"\", \"98\"]\nnums = []\nfor r in raw:\n    try:\n        nums.append(int(r))\n    except ValueError:\n        pass\nprint(nums)\nprint(sum(nums))"
  },
  {
    id: "a029",
    level: "advanced",
    category: "engineering",
    title: "欠損値を平均で補完する",
    description:
      "気温データ temps = [20.0, None, 24.0, None, 28.0] の欠損（None）を、有効なデータの平均値で埋めたリストを出力してください。\n\n期待される出力:\n[20.0, 24.0, 24.0, 24.0, 28.0]",
    starterCode: "temps = [20.0, None, 24.0, None, 28.0]\n# 1. 有効データの平均を計算 → 2. Noneを平均で置換\n",
    expectedOutput: "[20.0, 24.0, 24.0, 24.0, 28.0]",
    explanation:
      "正解例:\n\ntemps = [20.0, None, 24.0, None, 28.0]\nvalid = [t for t in temps if t is not None]\navg = sum(valid) / len(valid)\nfilled = [t if t is not None else avg for t in temps]\nprint(filled)\n\n" +
      "「平均値補完」はデータ分析の前処理（pandasの fillna(df.mean()) に相当）として最もよく使われる欠損値処理です。先に有効データだけで平均を計算し、その値でNoneを置き換える2段階で行います。\n\n" +
      "よくある間違い:\n・補完前のリストで平均を取ろうとすると None が混ざってエラーになります。「平均の計算」が先、「補完」が後です\n・(20.0 + 24.0 + 28.0) / 3 = 24.0 です。5件で割らないように注意してください。",
    hint: "まず valid リストで avg を計算し、[t if t is not None else avg for t in temps] で埋めます。",
    answerCode: "temps = [20.0, None, 24.0, None, 28.0]\nvalid = [t for t in temps if t is not None]\navg = sum(valid) / len(valid)\nfilled = [t if t is not None else avg for t in temps]\nprint(filled)"
  },
  {
    id: "a030",
    level: "advanced",
    category: "engineering",
    title: "外れ値を除いて平均を出す",
    description:
      "テストの点数データ scores = [85, 92, -1, 78, 999, 88] には入力ミスによる異常値が混ざっています。0〜100点の範囲内のデータだけを残したリストと、その平均（小数1桁に丸め）をこの順番で1行ずつ出力してください。\n\n期待される出力:\n[85, 92, 78, 88]\n85.8",
    starterCode: "scores = [85, 92, -1, 78, 999, 88]\n# 0 <= s <= 100 の範囲チェックでフィルタします\n",
    expectedOutput: "[85, 92, 78, 88]\n85.8",
    explanation:
      "正解例:\n\nscores = [85, 92, -1, 78, 999, 88]\nvalid = [s for s in scores if 0 <= s <= 100]\nprint(valid)\nprint(round(sum(valid) / len(valid), 1))\n\n" +
      "「ありえない値（外れ値）を範囲チェックで除外してから集計する」のはデータ品質管理の基本です。Pythonでは 0 <= s <= 100 のように比較演算子を連結して範囲を表せます（多くの言語ではできない便利な書き方です）。\n\n" +
      "よくある間違い:\n・外れ値を含めて平均すると (85+92-1+78+999+88)/6 ≒ 223.5 となり、まったく意味のない値になります。「集計前の検証」の重要性が分かる例です\n・s >= 0 and s <= 100 と書いても正解です。",
    hint: "[s for s in scores if 0 <= s <= 100] で範囲内だけが残ります。平均は round(..., 1) で丸めます。",
    answerCode: "scores = [85, 92, -1, 78, 999, 88]\nvalid = [s for s in scores if 0 <= s <= 100]\nprint(valid)\nprint(round(sum(valid) / len(valid), 1))"
  },
  {
    id: "a031",
    level: "advanced",
    category: "engineering",
    title: "CSVの金額列を合計する",
    description:
      "売上CSV（ヘッダー: date,item,amount）を DictReader で読み込み、amount 列の合計を出力してください。\n\n期待される出力:\n1730",
    starterCode: "import csv\nimport io\n\ndata = \"date,item,amount\\n6/1,コーヒー,450\\n6/1,サンド,380\\n6/2,コーヒー,900\"\n# amount は文字列なので int() が必要です\n",
    expectedOutput: "1730",
    explanation:
      "正解例:\n\nimport csv\nimport io\n\ndata = \"date,item,amount\\n6/1,コーヒー,450\\n6/1,サンド,380\\n6/2,コーヒー,900\"\ntotal = 0\nfor row in csv.DictReader(io.StringIO(data)):\n    total += int(row[\"amount\"])\nprint(total)\n\n" +
      "「CSVを読み込んで特定の列を集計する」のは、データ処理業務で最も頻度の高いタスクのひとつです（SQLの SUM(amount) に相当）。450 + 380 + 900 = 1730 です。\n\n" +
      "よくある間違い:\n・CSVから読んだ値はすべて文字列です。int() を忘れると total += で TypeError になります\n・sum(int(row[\"amount\"]) for row in csv.DictReader(...)) と1行で書いても正解です。",
    hint: "total += int(row[\"amount\"]) です。CSVの値は文字列であることを忘れずに。",
    answerCode: "import csv\nimport io\n\ndata = \"date,item,amount\\n6/1,コーヒー,450\\n6/1,サンド,380\\n6/2,コーヒー,900\"\ntotal = 0\nfor row in csv.DictReader(io.StringIO(data)):\n    total += int(row[\"amount\"])\nprint(total)"
  },
  {
    id: "a032",
    level: "advanced",
    category: "engineering",
    title: "在庫僅少の商品を抽出する",
    description:
      "在庫CSV（ヘッダー: name,stock）から、在庫が5未満の商品を「商品名: 残り◯」の形式で1行ずつ出力してください。\n\n期待される出力:\nバナナ: 残り3\nみかん: 残り0",
    starterCode: "import csv\nimport io\n\ndata = \"name,stock\\nりんご,12\\nバナナ,3\\nみかん,0\\nぶどう,5\"\n# stock を数値に変換してから比較します\n",
    expectedOutput: "バナナ: 残り3\nみかん: 残り0",
    explanation:
      "正解例:\n\nimport csv\nimport io\n\ndata = \"name,stock\\nりんご,12\\nバナナ,3\\nみかん,0\\nぶどう,5\"\nfor row in csv.DictReader(io.StringIO(data)):\n    if int(row[\"stock\"]) < 5:\n        print(f\"{row['name']}: 残り{row['stock']}\")\n\n" +
      "「条件に合う行だけを抽出する」フィルタ処理です（SQLの WHERE stock < 5 に相当）。在庫アラート・異常検知・対象者抽出など、業務処理の中心となるパターンです。\n\n" +
      "よくある間違い:\n・row[\"stock\"] < 5 と文字列のまま比較すると TypeError になります。比較の前に int() が必須です\n・\"5\" の行（ぶどう）は「5未満」に含まれません。< と <= の違いに注意してください。",
    hint: "if int(row[\"stock\"]) < 5: でフィルタします。文字列のまま比較しないこと。",
    answerCode: "import csv\nimport io\n\ndata = \"name,stock\\nりんご,12\\nバナナ,3\\nみかん,0\\nぶどう,5\"\nfor row in csv.DictReader(io.StringIO(data)):\n    if int(row[\"stock\"]) < 5:\n        print(f\"{row['name']}: 残り{row['stock']}\")"
  },
  {
    id: "a033",
    level: "advanced",
    category: "engineering",
    title: "CSVを型付きの辞書リストへ変換",
    description:
      "商品CSV（ヘッダー: name,price,stock）を読み込み、price と stock を int に変換した辞書のリスト products を作ってください。\nそのうえで次の2つをこの順番で1行ずつ出力してください。\n\n1行目: products 全体\n2行目: 全商品の在庫金額（price×stock）の合計\n\n期待される出力:\n[{'name': 'ペン', 'price': 120, 'stock': 10}, {'name': 'ノート', 'price': 200, 'stock': 5}]\n2200",
    starterCode: "import csv\nimport io\n\ndata = \"name,price,stock\\nペン,120,10\\nノート,200,5\"\nproducts = []\n# 各行を型変換しながら辞書として追加します\n",
    expectedOutput: "[{'name': 'ペン', 'price': 120, 'stock': 10}, {'name': 'ノート', 'price': 200, 'stock': 5}]\n2200",
    explanation:
      "正解例:\n\nimport csv\nimport io\n\ndata = \"name,price,stock\\nペン,120,10\\nノート,200,5\"\nproducts = []\nfor row in csv.DictReader(io.StringIO(data)):\n    products.append({\"name\": row[\"name\"], \"price\": int(row[\"price\"]), \"stock\": int(row[\"stock\"])})\nprint(products)\nprint(sum(p[\"price\"] * p[\"stock\"] for p in products))\n\n" +
      "「生データを読み込み、正しい型に変換してから内部形式に揃える」のはETLの E（抽出）と T（変換）にあたる中核処理です。一度型付きのリストにしてしまえば、後続の集計・分析が安全に書けます。\n\n" +
      "よくある間違い:\n・DictReaderのrowをそのままappendすると、値が全部文字列のままになり、出力も {'price': '120', ...} となって一致しません\n・在庫金額は 120×10 + 200×5 = 2200 です。",
    hint: "{\"name\": row[\"name\"], \"price\": int(row[\"price\"]), \"stock\": int(row[\"stock\"])} を組み立ててappendします。",
    answerCode: "import csv\nimport io\n\ndata = \"name,price,stock\\nペン,120,10\\nノート,200,5\"\nproducts = []\nfor row in csv.DictReader(io.StringIO(data)):\n    products.append({\"name\": row[\"name\"], \"price\": int(row[\"price\"]), \"stock\": int(row[\"stock\"])})\nprint(products)\nprint(sum(p[\"price\"] * p[\"stock\"] for p in products))"
  },
  {
    id: "a034",
    level: "advanced",
    category: "engineering",
    title: "ログレベル別に件数を集計",
    description:
      "ログ文字列 log の各行は「レベル メッセージ」の形式です。レベル別の件数を辞書で集計して出力してください。\n\n期待される出力:\n{'INFO': 3, 'ERROR': 2, 'WARN': 1}",
    starterCode: "log = \"\"\"INFO 起動完了\nERROR 接続失敗\nINFO リクエスト受信\nWARN 応答遅延\nERROR タイムアウト\nINFO 処理完了\"\"\"\n# 各行の先頭の単語がレベルです\n",
    expectedOutput: "{'INFO': 3, 'ERROR': 2, 'WARN': 1}",
    explanation:
      "正解例:\n\ncounts = {}\nfor line in log.split(\"\\n\"):\n    level = line.split(\" \")[0]\n    counts[level] = counts.get(level, 0) + 1\nprint(counts)\n\n" +
      "「行を分解→キーを取り出す→getイディオムでカウント」という、ログ解析の基本フローです。システムの健全性確認やエラー監視のレポートはこの集計が出発点になります。\n\n" +
      "よくある間違い:\n・line.split(\" \")[0] は「最初の空白までの単語」です。[1] にするとメッセージの先頭単語を数えてしまいます\n・辞書は登場順（INFO→ERROR→WARN）で表示されます。",
    hint: "level = line.split(\" \")[0] でレベルを取り出し、counts.get(level, 0) + 1 で数えます。",
    answerCode: "log = \"\"\"INFO 起動完了\nERROR 接続失敗\nINFO リクエスト受信\nWARN 応答遅延\nERROR タイムアウト\nINFO 処理完了\"\"\"\ncounts = {}\nfor line in log.split(\"\\n\"):\n    level = line.split(\" \")[0]\n    counts[level] = counts.get(level, 0) + 1\nprint(counts)"
  },
  {
    id: "a035",
    level: "advanced",
    category: "engineering",
    title: "時間帯別のエラー件数",
    description:
      "タイムスタンプ付きログ log（各行「HH:MM:SS レベル メッセージ」）から、ERROR を含む行だけを対象に「時間帯（時）別の件数」を辞書で集計して出力してください。\n\n期待される出力:\n{'09': 2, '10': 1, '23': 1}",
    starterCode: "log = \"\"\"09:15:02 ERROR timeout\n09:48:11 ERROR connection refused\n10:05:33 INFO recovered\n10:21:45 ERROR timeout\n23:59:59 ERROR disk full\"\"\"\n# 時刻の最初の2桁（時）をキーにします\n",
    expectedOutput: "{'09': 2, '10': 1, '23': 1}",
    explanation:
      "正解例:\n\ncounts = {}\nfor line in log.split(\"\\n\"):\n    if \"ERROR\" in line:\n        hour = line.split(\":\")[0]\n        counts[hour] = counts.get(hour, 0) + 1\nprint(counts)\n\n" +
      "「フィルタ（ERRORのみ）→キー抽出（時間帯）→集計」の組み合わせです。時間帯別のエラー分布は「障害がいつ集中しているか」を見つける実務の定番分析で、line.split(\":\")[0] で時刻の「時」部分が取り出せます。\n\n" +
      "よくある間違い:\n・INFOの行を除外し忘れると {'10': 2} の部分が変わってしまいます。集計対象の絞り込みを先に行います\n・キーは文字列 '09' のままにします。int() にすると出力が {9: 2, ...} となり一致しません。",
    hint: "if \"ERROR\" in line: で絞り、hour = line.split(\":\")[0] をキーに集計します。",
    answerCode: "log = \"\"\"09:15:02 ERROR timeout\n09:48:11 ERROR connection refused\n10:05:33 INFO recovered\n10:21:45 ERROR timeout\n23:59:59 ERROR disk full\"\"\"\ncounts = {}\nfor line in log.split(\"\\n\"):\n    if \"ERROR\" in line:\n        hour = line.split(\":\")[0]\n        counts[hour] = counts.get(hour, 0) + 1\nprint(counts)"
  },
  {
    id: "a036",
    level: "advanced",
    category: "engineering",
    title: "キーワードを行番号付きで検索",
    description:
      "ログ文字列 log から \"timeout\" を含む行を探し、「◯行目: 行の内容」の形式で1行ずつ出力してください（行番号は1始まり）。\n\n期待される出力:\n2行目: request timeout\n4行目: read timeout",
    starterCode: "log = \"\"\"connect ok\nrequest timeout\nretry\nread timeout\ndone\"\"\"\n# enumerate(行リスト, 1) で行番号が付けられます\n",
    expectedOutput: "2行目: request timeout\n4行目: read timeout",
    explanation:
      "正解例:\n\nfor i, line in enumerate(log.split(\"\\n\"), 1):\n    if \"timeout\" in line:\n        print(f\"{i}行目: {line}\")\n\n" +
      "grepコマンドの -n オプションに相当する処理です。enumerate の第2引数に 1 を渡すことで、人間が読む行番号（1始まり）になります。「どの行で問題が起きたか」を特定する調査作業の基本形です。\n\n" +
      "よくある間違い:\n・enumerate(lines) と開始値を省略すると0始まりになり、行番号が1つずれます\n・in は部分一致です。\"timeout\" が行のどこにあってもマッチします。",
    hint: "for i, line in enumerate(log.split(\"\\n\"), 1): として、if \"timeout\" in line: で判定します。",
    answerCode: "log = \"\"\"connect ok\nrequest timeout\nretry\nread timeout\ndone\"\"\"\nfor i, line in enumerate(log.split(\"\\n\"), 1):\n    if \"timeout\" in line:\n        print(f\"{i}行目: {line}\")"
  },
  {
    id: "a037",
    level: "advanced",
    category: "engineering",
    title: "フィールド名を変換する（ETL）",
    description:
      "外部APIのデータ api_users はキー名が user_name / user_age です。これを内部形式（name / age）に変換した辞書のリストを出力してください。\n\n期待される出力:\n[{'name': '佐藤', 'age': 28}, {'name': '鈴木', 'age': 35}]",
    starterCode: "api_users = [{\"user_name\": \"佐藤\", \"user_age\": 28}, {\"user_name\": \"鈴木\", \"user_age\": 35}]\n# 内包表記で新しい辞書を組み立てます\n",
    expectedOutput: "[{'name': '佐藤', 'age': 28}, {'name': '鈴木', 'age': 35}]",
    explanation:
      "正解例:\n\napi_users = [{\"user_name\": \"佐藤\", \"user_age\": 28}, {\"user_name\": \"鈴木\", \"user_age\": 35}]\nconverted = [{\"name\": u[\"user_name\"], \"age\": u[\"user_age\"]} for u in api_users]\nprint(converted)\n\n" +
      "外部システムと自社システムでは項目名が一致しないのが普通で、「キー名の付け替え（マッピング）」はデータ連携・ETLの必須処理です。内包表記の中で新しい辞書を組み立てるこの形は、pandasの rename に相当します。\n\n" +
      "よくある間違い:\n・元の辞書を直接書き換える方法（popとの組み合わせ）もありますが、新しいリストを作るほうが元データを壊さず安全です\n・キーの対応（user_name→name）を逆にしないよう注意してください。",
    hint: "[{\"name\": u[\"user_name\"], \"age\": u[\"user_age\"]} for u in api_users] で変換できます。",
    answerCode: "api_users = [{\"user_name\": \"佐藤\", \"user_age\": 28}, {\"user_name\": \"鈴木\", \"user_age\": 35}]\nconverted = [{\"name\": u[\"user_name\"], \"age\": u[\"user_age\"]} for u in api_users]\nprint(converted)"
  },
  {
    id: "a038",
    level: "advanced",
    category: "engineering",
    title: "IDで2つのデータを結合する",
    description:
      "ユーザー一覧 users と注文一覧 orders（user_id でユーザーと紐づく）があります。各注文を「ユーザー名: 商品」の形式で1行ずつ出力してください。\n\n期待される出力:\n佐藤: ペン\n鈴木: ノート\n佐藤: 消しゴム",
    starterCode: "users = [{\"id\": 1, \"name\": \"佐藤\"}, {\"id\": 2, \"name\": \"鈴木\"}]\norders = [{\"user_id\": 1, \"item\": \"ペン\"}, {\"user_id\": 2, \"item\": \"ノート\"}, {\"user_id\": 1, \"item\": \"消しゴム\"}]\n# まず id→名前 の辞書を作ると効率的です\n",
    expectedOutput: "佐藤: ペン\n鈴木: ノート\n佐藤: 消しゴム",
    explanation:
      "正解例:\n\nusers = [{\"id\": 1, \"name\": \"佐藤\"}, {\"id\": 2, \"name\": \"鈴木\"}]\norders = [{\"user_id\": 1, \"item\": \"ペン\"}, {\"user_id\": 2, \"item\": \"ノート\"}, {\"user_id\": 1, \"item\": \"消しゴム\"}]\n\nname_by_id = {u[\"id\"]: u[\"name\"] for u in users}\nfor o in orders:\n    print(f\"{name_by_id[o['user_id']]}: {o['item']}\")\n\n" +
      "SQLの JOIN、pandasの merge に相当する「キーによる結合」です。先に {1: '佐藤', 2: '鈴木'} という対応表（ルックアップ辞書）を作っておくのがポイントで、注文ごとにusersを探し回るより高速かつ簡潔になります。\n\n" +
      "よくある間違い:\n・ordersのループ内でさらにusersをループする二重ループでも動きますが、データが増えると遅くなります。辞書化が定石です\n・キーは id と user_id で名前が違う点に注意してください。",
    hint: "name_by_id = {u[\"id\"]: u[\"name\"] for u in users} を作れば、name_by_id[o['user_id']] で引けます。",
    answerCode: "users = [{\"id\": 1, \"name\": \"佐藤\"}, {\"id\": 2, \"name\": \"鈴木\"}]\norders = [{\"user_id\": 1, \"item\": \"ペン\"}, {\"user_id\": 2, \"item\": \"ノート\"}, {\"user_id\": 1, \"item\": \"消しゴム\"}]\n\nname_by_id = {u[\"id\"]: u[\"name\"] for u in users}\nfor o in orders:\n    print(f\"{name_by_id[o['user_id']]}: {o['item']}\")"
  },
  {
    id: "a039",
    level: "advanced",
    category: "engineering",
    title: "ネスト構造をフラット化する",
    description:
      "注文ごとに商品が配列で入った orders を、（注文ID, 商品）のタプルが並ぶ平らなリストに変換して出力してください。\n\n期待される出力:\n[(1, 'ペン'), (1, 'ノート'), (2, '消しゴム')]",
    starterCode: "orders = [{\"id\": 1, \"items\": [\"ペン\", \"ノート\"]}, {\"id\": 2, \"items\": [\"消しゴム\"]}]\n# 内包表記は for を2つ重ねられます\n",
    expectedOutput: "[(1, 'ペン'), (1, 'ノート'), (2, '消しゴム')]",
    explanation:
      "正解例:\n\norders = [{\"id\": 1, \"items\": [\"ペン\", \"ノート\"]}, {\"id\": 2, \"items\": [\"消しゴム\"]}]\nflat = [(o[\"id\"], item) for o in orders for item in o[\"items\"]]\nprint(flat)\n\n" +
      "入れ子のデータを「1行1レコード」の平らな形に直す処理をフラット化（正規化）と呼びます。集計やCSV出力の前処理として頻出です。内包表記の for を2つ並べると二重ループになり、左側の for が外側です。\n\n" +
      "よくある間違い:\n・forの順序を逆（for item in o[\"items\"] for o in orders）にすると、oが未定義でエラーになります。「外側のループから順に書く」と覚えましょう\n・二重forループ + append で書いても正解です。",
    hint: "[(o[\"id\"], item) for o in orders for item in o[\"items\"]] です。forは外側→内側の順に書きます。",
    answerCode: "orders = [{\"id\": 1, \"items\": [\"ペン\", \"ノート\"]}, {\"id\": 2, \"items\": [\"消しゴム\"]}]\nflat = [(o[\"id\"], item) for o in orders for item in o[\"items\"]]\nprint(flat)"
  },
  {
    id: "a040",
    level: "advanced",
    category: "engineering",
    title: "辞書のリストをCSV形式で出力",
    description:
      "成績データ records = [{\"name\": \"佐藤\", \"score\": 85}, {\"name\": \"鈴木\", \"score\": 92}] を、ヘッダー行付きのCSV形式で出力してください。\n\n期待される出力:\nname,score\n佐藤,85\n鈴木,92",
    starterCode: "records = [{\"name\": \"佐藤\", \"score\": 85}, {\"name\": \"鈴木\", \"score\": 92}]\n# ヘッダーを出力してから、各行を組み立てます\n",
    expectedOutput: "name,score\n佐藤,85\n鈴木,92",
    explanation:
      "正解例:\n\nrecords = [{\"name\": \"佐藤\", \"score\": 85}, {\"name\": \"鈴木\", \"score\": 92}]\nprint(\"name,score\")\nfor r in records:\n    print(f\"{r['name']},{r['score']}\")\n\n" +
      "処理した結果を「他のツール（Excel・BIツール等）が読める形式」で出力するのはETLの L（ロード）にあたります。ヘッダー行を最初に1回だけ出力し、データ行をループで出力する2段構成が基本です。\n\n" +
      "よくある間違い:\n・ヘッダーの出力をループの中に入れると行ごとに繰り返されてしまいます\n・f-string の代わりに \",\".join([r['name'], str(r['score'])]) でも正解です。scoreが数値なので str() が必要な点に注意。",
    hint: "print(\"name,score\") を先に1回、その後ループで f\"{r['name']},{r['score']}\" を出力します。",
    answerCode: "records = [{\"name\": \"佐藤\", \"score\": 85}, {\"name\": \"鈴木\", \"score\": 92}]\nprint(\"name,score\")\nfor r in records:\n    print(f\"{r['name']},{r['score']}\")"
  },
  {
    id: "a041",
    level: "advanced",
    category: "engineering",
    title: "ミニETLパイプライン（総合）",
    description:
      "売上CSV raw には不正な価格（数値でない）や数量0の行が混ざっています。次の手順で処理し、商品別の売上合計の辞書を出力してください。\n\n1. CSVを読み込む（ヘッダー: date,item,price,qty）\n2. price または qty が数値に変換できない行はスキップ\n3. qty が 0 の行はスキップ\n4. 残った行の「price×qty」を商品（item）別に合計\n\n期待される出力:\n{'コーヒー': 2250, 'サンド': 760}",
    starterCode: "import csv\nimport io\n\nraw = \"date,item,price,qty\\n6/1,コーヒー,450,2\\n6/1,紅茶,abc,1\\n6/2,コーヒー,450,3\\n6/2,サンド,380,0\\n6/2,サンド,380,2\"\ntotals = {}\n# 検証 → フィルタ → 集計 の順で処理しましょう\n",
    expectedOutput: "{'コーヒー': 2250, 'サンド': 760}",
    explanation:
      "正解例:\n\nimport csv\nimport io\n\nraw = \"date,item,price,qty\\n6/1,コーヒー,450,2\\n6/1,紅茶,abc,1\\n6/2,コーヒー,450,3\\n6/2,サンド,380,0\\n6/2,サンド,380,2\"\ntotals = {}\nfor row in csv.DictReader(io.StringIO(raw)):\n    try:\n        price = int(row[\"price\"])\n        qty = int(row[\"qty\"])\n    except ValueError:\n        continue\n    if qty == 0:\n        continue\n    totals[row[\"item\"]] = totals.get(row[\"item\"], 0) + price * qty\nprint(totals)\n\n" +
      "「読み込み→検証（型変換）→フィルタ→集計」という、これまで学んだ要素を組み合わせた小さなETLパイプラインです。紅茶の行は price=abc で除外、サンドの qty=0 の行も除外され、コーヒー 450×2+450×3=2250、サンド 380×2=760 が残ります。\n\n" +
      "よくある間違い:\n・ループ内の continue は「この行をスキップして次の行へ」です。break にすると以降の行が全部処理されません\n・検証（try/except）を集計より先に行うのがポイントです。順序が逆だと不正な行で停止します。",
    hint: "try/except ValueError: continue で不正行を捨て、if qty == 0: continue で除外し、getイディオムで集計します。",
    answerCode: "import csv\nimport io\n\nraw = \"date,item,price,qty\\n6/1,コーヒー,450,2\\n6/1,紅茶,abc,1\\n6/2,コーヒー,450,3\\n6/2,サンド,380,0\\n6/2,サンド,380,2\"\ntotals = {}\nfor row in csv.DictReader(io.StringIO(raw)):\n    try:\n        price = int(row[\"price\"])\n        qty = int(row[\"qty\"])\n    except ValueError:\n        continue\n    if qty == 0:\n        continue\n    totals[row[\"item\"]] = totals.get(row[\"item\"], 0) + price * qty\nprint(totals)"
  },

  // ---------------------------------------------------------
  // advanced（上級）× practice: KPI分析・dbt的思考・APIレスポンス加工
  // ---------------------------------------------------------
  {
    id: "a042",
    level: "advanced",
    category: "practice",
    title: "【EC編】売上構成比レポート",
    description:
      "カテゴリ別売上 totals = {\"衣類\": 6300, \"食品\": 1800, \"雑貨\": 900} から、各カテゴリの構成比を「カテゴリ: ◯◯%」の形式（:.0% 書式）で1行ずつ出力してください。\n\n期待される出力:\n衣類: 70%\n食品: 20%\n雑貨: 10%",
    starterCode: "totals = {\"衣類\": 6300, \"食品\": 1800, \"雑貨\": 900}\n# 全体合計を求めてから各カテゴリを割ります\n",
    expectedOutput: "衣類: 70%\n食品: 20%\n雑貨: 10%",
    explanation:
      "正解例:\n\ntotals = {\"衣類\": 6300, \"食品\": 1800, \"雑貨\": 900}\ntotal = sum(totals.values())\nfor category, amount in totals.items():\n    print(f\"{category}: {amount / total:.0%}\")\n\n" +
      "「金額の絶対値」より「構成比」のほうが意思決定に使いやすい場面は多く、経営レポートの定番です。合計9000円に対して衣類6300円なら70%です。\n\n" +
      "よくある間違い:\n・ループの中で毎回 sum() を計算しても動きますが、合計は変わらないのでループの前に1回だけ計算するのが効率的です\n・i056（カテゴリ別集計）の結果をこのレポートにつなげると、明細→集計→構成比という分析の流れが完成します。",
    hint: "total = sum(totals.values()) を先に計算し、f\"{amount / total:.0%}\" で表示します。",
    answerCode: "totals = {\"衣類\": 6300, \"食品\": 1800, \"雑貨\": 900}\ntotal = sum(totals.values())\nfor category, amount in totals.items():\n    print(f\"{category}: {amount / total:.0%}\")"
  },
  {
    id: "a043",
    level: "advanced",
    category: "practice",
    title: "【EC編】クーポン適用後の売上",
    description:
      "注文データ orders の coupon が True の注文は10%引きになります。各注文の支払金額（割引後は小数を切り捨てて int に）を「注文◯: ◯◯円」の形式で出力し、最後に「合計: ◯◯円」を出力してください。\n\n期待される出力:\n注文1: 4050円\n注文2: 2800円\n注文3: 5400円\n合計: 12250円",
    starterCode: "orders = [\n    {\"id\": 1, \"amount\": 4500, \"coupon\": True},\n    {\"id\": 2, \"amount\": 2800, \"coupon\": False},\n    {\"id\": 3, \"amount\": 6000, \"coupon\": True},\n]\n# 三項演算子で割引の有無を分岐できます\n",
    expectedOutput: "注文1: 4050円\n注文2: 2800円\n注文3: 5400円\n合計: 12250円",
    explanation:
      "正解例:\n\ntotal = 0\nfor o in orders:\n    amount = int(o[\"amount\"] * 0.9) if o[\"coupon\"] else o[\"amount\"]\n    total += amount\n    print(f\"注文{o['id']}: {amount}円\")\nprint(f\"合計: {total}円\")\n\n" +
      "割引・クーポンの計算はECの基幹ロジックです。「明細ごとに計算しながら合計も積み上げる」という、明細処理と集計を同時に行うパターンを身につけましょう。\n\n" +
      "よくある間違い:\n・4500 * 0.9 = 4050.0 と float になるため、int() で整数化しないと「4050.0円」と表示されてしまいます。金額計算での型の扱いは実務で常に注意が必要です\n・合計の出力をループの中に入れると毎回表示されてしまいます。",
    hint: "amount = int(o[\"amount\"] * 0.9) if o[\"coupon\"] else o[\"amount\"] で支払金額が決まります。",
    answerCode: "orders = [\n    {\"id\": 1, \"amount\": 4500, \"coupon\": True},\n    {\"id\": 2, \"amount\": 2800, \"coupon\": False},\n    {\"id\": 3, \"amount\": 6000, \"coupon\": True},\n]\ntotal = 0\nfor o in orders:\n    amount = int(o[\"amount\"] * 0.9) if o[\"coupon\"] else o[\"amount\"]\n    total += amount\n    print(f\"注文{o['id']}: {amount}円\")\nprint(f\"合計: {total}円\")"
  },
  {
    id: "a044",
    level: "advanced",
    category: "practice",
    title: "【EC編】月次売上レポートを生成",
    description:
      "日別売上 daily から、次の形式の月次レポートを出力してください。金額はすべて3桁区切り、日平均は round で整数に丸めます。\n\n期待される出力:\n=== 6月売上レポート ===\n6/1: 125,000円\n6/2: 138,000円\n6/3: 97,000円\n合計: 360,000円\n日平均: 120,000円",
    starterCode: "daily = {\"6/1\": 125000, \"6/2\": 138000, \"6/3\": 97000}\n# 見出し → 日別 → 合計 → 日平均 の順に出力します\n",
    expectedOutput: "=== 6月売上レポート ===\n6/1: 125,000円\n6/2: 138,000円\n6/3: 97,000円\n合計: 360,000円\n日平均: 120,000円",
    explanation:
      "正解例:\n\ndaily = {\"6/1\": 125000, \"6/2\": 138000, \"6/3\": 97000}\ntotal = sum(daily.values())\nprint(\"=== 6月売上レポート ===\")\nfor day, amount in daily.items():\n    print(f\"{day}: {amount:,}円\")\nprint(f\"合計: {total:,}円\")\nprint(f\"日平均: {round(total / len(daily)):,}円\")\n\n" +
      "集計結果を「人間が読むレポート」に整形するのは、データ処理の最終工程（dbtで言えばmart層からの出力）です。見出し・明細・集計行という帳票の基本構造をprintで組み立てます。\n\n" +
      "よくある間違い:\n・round(total / len(daily)) を忘れると割り切れない月で小数が出ます\n・:, 書式の付け忘れが1行でもあると一致しません。出力形式の指定はすべての行で確認しましょう。",
    hint: "見出しを先に出力し、items()でループ、最後に合計と round(total / len(daily)) を出力します。",
    answerCode: "daily = {\"6/1\": 125000, \"6/2\": 138000, \"6/3\": 97000}\ntotal = sum(daily.values())\nprint(\"=== 6月売上レポート ===\")\nfor day, amount in daily.items():\n    print(f\"{day}: {amount:,}円\")\nprint(f\"合計: {total:,}円\")\nprint(f\"日平均: {round(total / len(daily)):,}円\")"
  },
  {
    id: "a045",
    level: "advanced",
    category: "practice",
    title: "【EC編】キャンセル率の監視",
    description:
      "本日の注文ステータス statuses から、キャンセル率（キャンセル件数 ÷ 全件数）を「キャンセル率: ◯◯%」の形式（:.1% 書式）で出力してください。\n\n期待される出力:\nキャンセル率: 12.5%",
    starterCode: "statuses = [\"発送済\", \"キャンセル\", \"発送済\", \"発送済\", \"発送済\", \"発送済\", \"発送済\", \"発送済\"]\n# リストの count メソッドが使えます\n",
    expectedOutput: "キャンセル率: 12.5%",
    explanation:
      "正解例:\n\nstatuses = [\"発送済\", \"キャンセル\", \"発送済\", \"発送済\", \"発送済\", \"発送済\", \"発送済\", \"発送済\"]\nrate = statuses.count(\"キャンセル\") / len(statuses)\nprint(f\"キャンセル率: {rate:.1%}\")\n\n" +
      "キャンセル率の急上昇は「決済エラー」「在庫表示の不具合」などシステム異常のシグナルであることが多く、監視すべき運用KPIです。リストの count() メソッドは特定の値の出現回数を直接数えられます。\n\n" +
      "よくある間違い:\n・1 ÷ 8 = 0.125 が :.1% で 12.5% になります。:.0% だと 12% になり一致しません\n・count() の引数は完全一致です。「キャンセル済」のような表記ゆれがある実データでは正規化が先に必要になります。",
    hint: "statuses.count(\"キャンセル\") / len(statuses) を :.1% 書式で表示します。",
    answerCode: "statuses = [\"発送済\", \"キャンセル\", \"発送済\", \"発送済\", \"発送済\", \"発送済\", \"発送済\", \"発送済\"]\nrate = statuses.count(\"キャンセル\") / len(statuses)\nprint(f\"キャンセル率: {rate:.1%}\")"
  },
  {
    id: "a046",
    level: "advanced",
    category: "practice",
    title: "【EC編】会員ランクの判定",
    description:
      "顧客の累計購入額 customers から会員ランクを判定し、「名前: ランク」の形式で1行ずつ出力してください。\n\n・50000円以上: ゴールド\n・10000円以上: シルバー\n・それ未満: ブロンズ\n\n期待される出力:\n佐藤: ゴールド\n鈴木: シルバー\n高橋: ブロンズ",
    starterCode: "customers = [(\"佐藤\", 52000), (\"鈴木\", 18000), (\"高橋\", 4500)]\n# if / elif / else で上から判定します\n",
    expectedOutput: "佐藤: ゴールド\n鈴木: シルバー\n高橋: ブロンズ",
    explanation:
      "正解例:\n\ncustomers = [(\"佐藤\", 52000), (\"鈴木\", 18000), (\"高橋\", 4500)]\nfor name, total in customers:\n    if total >= 50000:\n        rank = \"ゴールド\"\n    elif total >= 10000:\n        rank = \"シルバー\"\n    else:\n        rank = \"ブロンズ\"\n    print(f\"{name}: {rank}\")\n\n" +
      "金額や点数を段階に分類する「ランク判定」は、会員制度・料金プラン・成績評価などあらゆる業務に登場します。条件は大きい方から順に書くのが鉄則です。\n\n" +
      "よくある間違い:\n・if total >= 10000 を先に書くと、52000円の佐藤さんもシルバーと判定されてしまいます。条件の順序がロジックの正しさを決めます\n・判定結果を変数 rank に入れてから出力すると、printが1か所で済み修正に強いコードになります。",
    hint: "if total >= 50000: → elif total >= 10000: → else: の順で判定します。",
    answerCode: "customers = [(\"佐藤\", 52000), (\"鈴木\", 18000), (\"高橋\", 4500)]\nfor name, total in customers:\n    if total >= 50000:\n        rank = \"ゴールド\"\n    elif total >= 10000:\n        rank = \"シルバー\"\n    else:\n        rank = \"ブロンズ\"\n    print(f\"{name}: {rank}\")"
  },
  {
    id: "a047",
    level: "advanced",
    category: "practice",
    title: "【EC編】優良顧客の抽出（RFM的思考）",
    description:
      "顧客データ customers には購入回数（freq）と累計購入額（total）があります。「購入回数5回以上 かつ 累計10000円以上」の優良顧客の名前のリストを出力してください。\n\n期待される出力:\n['佐藤', '高橋']",
    starterCode: "customers = [\n    {\"name\": \"佐藤\", \"freq\": 6, \"total\": 45000},\n    {\"name\": \"鈴木\", \"freq\": 2, \"total\": 8000},\n    {\"name\": \"高橋\", \"freq\": 5, \"total\": 12000},\n]\n# and で複数条件を組み合わせます\n",
    expectedOutput: "['佐藤', '高橋']",
    explanation:
      "正解例:\n\nvip = [c[\"name\"] for c in customers if c[\"freq\"] >= 5 and c[\"total\"] >= 10000]\nprint(vip)\n\n" +
      "購入の頻度（Frequency）と金額（Monetary）で顧客を分類する考え方はRFM分析と呼ばれ、マーケティングの定番手法です。複数条件の and による絞り込みを内包表記で簡潔に書けます。\n\n" +
      "よくある間違い:\n・or にすると「どちらか片方でも満たす顧客」になり、鈴木さん以外全員が対象になってしまいます。and / or の選択はビジネス要件の理解そのものです\n・高橋さんは freq=5 でぎりぎり対象です。>= と > の違いに注意してください。",
    hint: "if c[\"freq\"] >= 5 and c[\"total\"] >= 10000 の2条件で絞り込みます。",
    answerCode: "customers = [\n    {\"name\": \"佐藤\", \"freq\": 6, \"total\": 45000},\n    {\"name\": \"鈴木\", \"freq\": 2, \"total\": 8000},\n    {\"name\": \"高橋\", \"freq\": 5, \"total\": 12000},\n]\nvip = [c[\"name\"] for c in customers if c[\"freq\"] >= 5 and c[\"total\"] >= 10000]\nprint(vip)"
  },
  {
    id: "a048",
    level: "advanced",
    category: "practice",
    title: "【EC編】顧客別の累計購入額ランキング",
    description:
      "注文履歴 orders（顧客名, 金額）から顧客ごとの累計購入額を集計し、金額の多い順に「◯位: 名前（◯,◯◯◯円）」の形式で出力してください（金額は3桁区切り）。\n\n期待される出力:\n1位: 佐藤（9,000円）\n2位: 鈴木（7,800円）\n3位: 高橋（2,100円）",
    starterCode: "orders = [(\"佐藤\", 3200), (\"鈴木\", 1800), (\"佐藤\", 4500), (\"高橋\", 2100), (\"鈴木\", 6000), (\"佐藤\", 1300)]\n# 集計 → ソート → 順位付き表示 の3段階です\n",
    expectedOutput: "1位: 佐藤（9,000円）\n2位: 鈴木（7,800円）\n3位: 高橋（2,100円）",
    explanation:
      "正解例:\n\norders = [(\"佐藤\", 3200), (\"鈴木\", 1800), (\"佐藤\", 4500), (\"高橋\", 2100), (\"鈴木\", 6000), (\"佐藤\", 1300)]\ntotals = {}\nfor name, amount in orders:\n    totals[name] = totals.get(name, 0) + amount\nranked = sorted(totals.items(), key=lambda x: x[1], reverse=True)\nfor i, (name, total) in enumerate(ranked, 1):\n    print(f\"{i}位: {name}（{total:,}円）\")\n\n" +
      "顧客ごとの累計購入額はLTV（顧客生涯価値）分析の基礎データです。「getイディオムで集計→値で降順ソート→enumerateで順位付け」という、これまでの部品を組み合わせた分析レポートの完成形です。\n\n" +
      "よくある間違い:\n・佐藤さんは 3200+4500+1300=9000円 です。集計漏れがないか合計値で確認しましょう\n・:, 書式とカッコ（全角）の両方が必要です。",
    hint: "集計辞書 → sorted(totals.items(), key=lambda x: x[1], reverse=True) → enumerate(ranked, 1) の流れです。",
    answerCode: "orders = [(\"佐藤\", 3200), (\"鈴木\", 1800), (\"佐藤\", 4500), (\"高橋\", 2100), (\"鈴木\", 6000), (\"佐藤\", 1300)]\ntotals = {}\nfor name, amount in orders:\n    totals[name] = totals.get(name, 0) + amount\nranked = sorted(totals.items(), key=lambda x: x[1], reverse=True)\nfor i, (name, total) in enumerate(ranked, 1):\n    print(f\"{i}位: {name}（{total:,}円）\")"
  },
  {
    id: "a049",
    level: "advanced",
    category: "practice",
    title: "【EC編】平均購入間隔を計算する",
    description:
      "ある顧客の購入日リスト dates（\"YYYY-MM-DD\"形式・昇順）から、購入と購入の間隔（日数）の平均を計算し、小数1桁で「平均購入間隔: ◯日」の形式で出力してください。\ndatetimeモジュールの strptime を使うこと。\n\n期待される出力:\n平均購入間隔: 11.7日",
    starterCode: "from datetime import datetime\n\ndates = [\"2026-04-01\", \"2026-04-08\", \"2026-04-22\", \"2026-05-06\"]\n# strptime(d, \"%Y-%m-%d\") で日付型に変換できます\n",
    expectedOutput: "平均購入間隔: 11.7日",
    explanation:
      "正解例:\n\nfrom datetime import datetime\n\ndates = [\"2026-04-01\", \"2026-04-08\", \"2026-04-22\", \"2026-05-06\"]\ndays = [datetime.strptime(d, \"%Y-%m-%d\") for d in dates]\ngaps = [(days[i + 1] - days[i]).days for i in range(len(days) - 1)]\nprint(f\"平均購入間隔: {round(sum(gaps) / len(gaps), 1)}日\")\n\n" +
      "購入間隔は「次の購入を促すメールをいつ送るか」を決める材料になります。datetime.strptime(文字列, 書式) で日付型に変換すると、引き算で日数差（.days）が取れます。間隔は 7日・14日・14日 で平均 11.7日です。\n\n" +
      "よくある間違い:\n・月をまたぐ日数計算（4/22→5/6 = 14日）は文字列では計算できません。日付計算には datetime が必須です\n・隣同士の差なのでペア数は len - 1 個です。range(len(days) - 1) の -1 を忘れると IndexError になります。",
    hint: "日付型のリストを作り、(days[i+1] - days[i]).days で隣同士の差を集めます。",
    answerCode: "from datetime import datetime\n\ndates = [\"2026-04-01\", \"2026-04-08\", \"2026-04-22\", \"2026-05-06\"]\ndays = [datetime.strptime(d, \"%Y-%m-%d\") for d in dates]\ngaps = [(days[i + 1] - days[i]).days for i in range(len(days) - 1)]\nprint(f\"平均購入間隔: {round(sum(gaps) / len(gaps), 1)}日\")"
  },
  {
    id: "a050",
    level: "advanced",
    category: "practice",
    title: "【EC編】入出庫の突合チェック",
    description:
      "在庫記録 records には期首在庫（open）・入庫（in）・出庫（out）・実地棚卸の実在庫（actual）があります。理論在庫（open + in - out）と実在庫を比較し、一致すれば「商品名: OK」、不一致なら「商品名: 差異◯」（差異 = 実在庫 - 理論在庫）を出力してください。\n\n期待される出力:\nマグカップ: OK\nTシャツ: 差異-3",
    starterCode: "records = [\n    {\"item\": \"マグカップ\", \"open\": 20, \"in\": 10, \"out\": 8, \"actual\": 22},\n    {\"item\": \"Tシャツ\", \"open\": 50, \"in\": 0, \"out\": 12, \"actual\": 35},\n]\n# 理論在庫を計算して actual と比較します\n",
    expectedOutput: "マグカップ: OK\nTシャツ: 差異-3",
    explanation:
      "正解例:\n\nfor r in records:\n    expected = r[\"open\"] + r[\"in\"] - r[\"out\"]\n    if r[\"actual\"] == expected:\n        print(f\"{r['item']}: OK\")\n    else:\n        print(f\"{r['item']}: 差異{r['actual'] - expected}\")\n\n" +
      "「理論値と実測値の突合（とつごう）」は棚卸し・会計・データ品質チェックの基本作業です。Tシャツは理論在庫 50+0-12=38個 に対し実在庫35個で、差異-3（紛失や記録漏れの疑い）が検出されます。\n\n" +
      "よくある間違い:\n・差異の符号は「実在庫 - 理論在庫」です。逆にすると過剰/不足の意味が逆転します\n・負の数は f-string でそのまま「-3」と表示されるため、マイナス記号を自分で付ける必要はありません。",
    hint: "expected = r[\"open\"] + r[\"in\"] - r[\"out\"] を計算し、actual と比較します。",
    answerCode: "records = [\n    {\"item\": \"マグカップ\", \"open\": 20, \"in\": 10, \"out\": 8, \"actual\": 22},\n    {\"item\": \"Tシャツ\", \"open\": 50, \"in\": 0, \"out\": 12, \"actual\": 35},\n]\nfor r in records:\n    expected = r[\"open\"] + r[\"in\"] - r[\"out\"]\n    if r[\"actual\"] == expected:\n        print(f\"{r['item']}: OK\")\n    else:\n        print(f\"{r['item']}: 差異{r['actual'] - expected}\")"
  },
  {
    id: "a051",
    level: "advanced",
    category: "practice",
    title: "【EC編】配送リードタイムの平均",
    description:
      "注文日と発送日のペア orders から、配送リードタイム（発送日 - 注文日の日数）の平均を計算し、小数1桁で「平均リードタイム: ◯日」の形式で出力してください。\n\n期待される出力:\n平均リードタイム: 2.7日",
    starterCode: "from datetime import datetime\n\norders = [(\"2026-06-01\", \"2026-06-03\"), (\"2026-06-02\", \"2026-06-06\"), (\"2026-06-05\", \"2026-06-07\")]\n# 2つの日付の差の .days を集めて平均します\n",
    expectedOutput: "平均リードタイム: 2.7日",
    explanation:
      "正解例:\n\nfrom datetime import datetime\n\norders = [(\"2026-06-01\", \"2026-06-03\"), (\"2026-06-02\", \"2026-06-06\"), (\"2026-06-05\", \"2026-06-07\")]\nleads = []\nfor ordered, shipped in orders:\n    d1 = datetime.strptime(ordered, \"%Y-%m-%d\")\n    d2 = datetime.strptime(shipped, \"%Y-%m-%d\")\n    leads.append((d2 - d1).days)\nprint(f\"平均リードタイム: {round(sum(leads) / len(leads), 1)}日\")\n\n" +
      "リードタイム（注文から発送までの日数）は物流品質のKPIで、悪化すればレビュー評価に直結します。各注文の日数差は 2日・4日・2日 で、平均 8÷3 = 2.7日です。\n\n" +
      "よくある間違い:\n・(d1 - d2).days と順序を逆にすると負の日数になります。「後の日付 - 前の日付」です\n・タプルのアンパック for ordered, shipped in orders: で2つの日付を同時に受け取るのがポイントです。",
    hint: "for ordered, shipped in orders: で受け取り、(d2 - d1).days をリストに集めて平均します。",
    answerCode: "from datetime import datetime\n\norders = [(\"2026-06-01\", \"2026-06-03\"), (\"2026-06-02\", \"2026-06-06\"), (\"2026-06-05\", \"2026-06-07\")]\nleads = []\nfor ordered, shipped in orders:\n    d1 = datetime.strptime(ordered, \"%Y-%m-%d\")\n    d2 = datetime.strptime(shipped, \"%Y-%m-%d\")\n    leads.append((d2 - d1).days)\nprint(f\"平均リードタイム: {round(sum(leads) / len(leads), 1)}日\")"
  },
  {
    id: "a052",
    level: "advanced",
    category: "practice",
    title: "【EC編】在庫があと何日もつか",
    description:
      "在庫データ items には現在庫（stock）と1日あたりの平均販売数（daily）があります。各商品について「在庫が何日分あるか」を計算し、7日未満なら「商品名: あと◯日分（要発注）」、7日以上なら「商品名: あと◯日分」と出力してください。\n\n期待される出力:\nマグカップ: あと3.0日分（要発注）\nTシャツ: あと12.0日分",
    starterCode: "items = [\n    {\"name\": \"マグカップ\", \"stock\": 12, \"daily\": 4},\n    {\"name\": \"Tシャツ\", \"stock\": 60, \"daily\": 5},\n]\n# 在庫 ÷ 日販 で「もつ日数」が出ます\n",
    expectedOutput: "マグカップ: あと3.0日分（要発注）\nTシャツ: あと12.0日分",
    explanation:
      "正解例:\n\nfor item in items:\n    days = item[\"stock\"] / item[\"daily\"]\n    if days < 7:\n        print(f\"{item['name']}: あと{days}日分（要発注）\")\n    else:\n        print(f\"{item['name']}: あと{days}日分\")\n\n" +
      "「在庫日数 = 在庫 ÷ 販売ペース」は、固定の発注点よりも実態に即した在庫管理の考え方です。割り算の結果（12÷4=3.0）は float になるため「3.0日分」と表示されます。計算結果から行動（発注）につなげる、分析の実務らしい問題です。\n\n" +
      "よくある間違い:\n・整数で表示したい場合は int() や :.0f を使いますが、この問題では 3.0 のままの出力が正解です\n・「7日未満」は < 7 です。<= にすると7.0日ちょうどの商品も要発注になってしまいます。",
    hint: "days = item[\"stock\"] / item[\"daily\"] を計算し、if days < 7: で分岐します。",
    answerCode: "items = [\n    {\"name\": \"マグカップ\", \"stock\": 12, \"daily\": 4},\n    {\"name\": \"Tシャツ\", \"stock\": 60, \"daily\": 5},\n]\nfor item in items:\n    days = item[\"stock\"] / item[\"daily\"]\n    if days < 7:\n        print(f\"{item['name']}: あと{days}日分（要発注）\")\n    else:\n        print(f\"{item['name']}: あと{days}日分\")"
  },
  {
    id: "a053",
    level: "advanced",
    category: "practice",
    title: "【dbt的思考】staging層: 生データの正規化",
    description:
      "外部システムから届いた商品データ raw は、キーが大文字・値に余分な空白・価格が文字列という「汚れた」状態です。次のルールで正規化した辞書のリストを出力してください。\n\n・キーは name / price に変換\n・name: 前後の空白を除去し、すべて小文字に\n・price: int に変換\n\n期待される出力:\n[{'name': 'mug cup', 'price': 1200}, {'name': 't-shirt', 'price': 2500}]",
    starterCode: "raw = [{\"NAME\": \" Mug Cup \", \"PRICE\": \"1200\"}, {\"NAME\": \"T-SHIRT\", \"PRICE\": \"2500\"}]\n# 内包表記で新しい辞書を組み立てます\n",
    expectedOutput: "[{'name': 'mug cup', 'price': 1200}, {'name': 't-shirt', 'price': 2500}]",
    explanation:
      "正解例:\n\nraw = [{\"NAME\": \" Mug Cup \", \"PRICE\": \"1200\"}, {\"NAME\": \"T-SHIRT\", \"PRICE\": \"2500\"}]\nstaged = [{\"name\": r[\"NAME\"].strip().lower(), \"price\": int(r[\"PRICE\"])} for r in raw]\nprint(staged)\n\n" +
      "データ変換ツールdbtでは、生データをまず「staging層」で正規化（命名統一・型変換・空白除去）してから分析に使います。strip().lower() のようにメソッドを連結（チェーン）できるのがポイントで、「生データを直接分析に使わず、まず綺麗にする」という習慣が分析の品質を支えます。\n\n" +
      "よくある間違い:\n・lower().strip() の順でも結果は同じですが、strip() を忘れると ' mug cup ' のように空白が残ります\n・元の raw を書き換えるのではなく、新しいリストを作ることで「生データは不変」という原則を守ります。",
    hint: "{\"name\": r[\"NAME\"].strip().lower(), \"price\": int(r[\"PRICE\"])} を内包表記で組み立てます。",
    answerCode: "raw = [{\"NAME\": \" Mug Cup \", \"PRICE\": \"1200\"}, {\"NAME\": \"T-SHIRT\", \"PRICE\": \"2500\"}]\nstaged = [{\"name\": r[\"NAME\"].strip().lower(), \"price\": int(r[\"PRICE\"])} for r in raw]\nprint(staged)"
  },
  {
    id: "a054",
    level: "advanced",
    category: "practice",
    title: "【dbt的思考】intermediate層: マスタと結合",
    description:
      "注文データ orders には商品IDしかありません。商品マスタ products と結合して各注文の金額（単価×数量）を「商品名: ◯◯円」の形式で出力し、最後に「合計: ◯◯円」を出力してください。\n\n期待される出力:\nマグカップ: 2400円\nTシャツ: 2500円\nマグカップ: 3600円\n合計: 8500円",
    starterCode: "orders = [{\"product_id\": 1, \"qty\": 2}, {\"product_id\": 2, \"qty\": 1}, {\"product_id\": 1, \"qty\": 3}]\nproducts = {1: {\"name\": \"マグカップ\", \"price\": 1200}, 2: {\"name\": \"Tシャツ\", \"price\": 2500}}\n# product_id でマスタを引いて金額を計算します\n",
    expectedOutput: "マグカップ: 2400円\nTシャツ: 2500円\nマグカップ: 3600円\n合計: 8500円",
    explanation:
      "正解例:\n\ntotal = 0\nfor o in orders:\n    p = products[o[\"product_id\"]]\n    amount = p[\"price\"] * o[\"qty\"]\n    total += amount\n    print(f\"{p['name']}: {amount}円\")\nprint(f\"合計: {total}円\")\n\n" +
      "「トランザクションデータ（注文）にマスタデータ（商品）を結合して意味を持たせる」のは、dbtのintermediate層やSQLのJOINで毎日行われる処理です。productsがID引きできる辞書になっているため、products[o[\"product_id\"]] の1行で結合できます。\n\n" +
      "よくある間違い:\n・マスタに存在しないIDが来ると KeyError になります。実務では products.get(id) で欠損に備えることも多いです\n・単価だけ（qty掛け忘れ）だと 1200+2500+1200=4900 になってしまいます。",
    hint: "p = products[o[\"product_id\"]] でマスタを引き、p[\"price\"] * o[\"qty\"] で金額を出します。",
    answerCode: "orders = [{\"product_id\": 1, \"qty\": 2}, {\"product_id\": 2, \"qty\": 1}, {\"product_id\": 1, \"qty\": 3}]\nproducts = {1: {\"name\": \"マグカップ\", \"price\": 1200}, 2: {\"name\": \"Tシャツ\", \"price\": 2500}}\ntotal = 0\nfor o in orders:\n    p = products[o[\"product_id\"]]\n    amount = p[\"price\"] * o[\"qty\"]\n    total += amount\n    print(f\"{p['name']}: {amount}円\")\nprint(f\"合計: {total}円\")"
  },
  {
    id: "a055",
    level: "advanced",
    category: "practice",
    title: "【dbt的思考】mart層: レポート用テーブルを作る",
    description:
      "売上明細 rows（商品名, 金額）を商品別に集計し、構成比（share）付きのレポート用データ（辞書のリスト）を組み立てて出力してください。\n\n・各行は {\"product\": 商品名, \"total\": 合計金額, \"share\": \"◯◯.◯%\"} の形式\n・share は全体に占める割合（:.1% 書式の文字列）\n\n期待される出力:\n[{'product': 'マグカップ', 'total': 6000, 'share': '70.6%'}, {'product': 'Tシャツ', 'total': 2500, 'share': '29.4%'}]",
    starterCode: "rows = [(\"マグカップ\", 2400), (\"Tシャツ\", 2500), (\"マグカップ\", 3600)]\n# 集計 → 全体合計 → レポート行の組み立て の順です\n",
    expectedOutput: "[{'product': 'マグカップ', 'total': 6000, 'share': '70.6%'}, {'product': 'Tシャツ', 'total': 2500, 'share': '29.4%'}]",
    explanation:
      "正解例:\n\nrows = [(\"マグカップ\", 2400), (\"Tシャツ\", 2500), (\"マグカップ\", 3600)]\ntotals = {}\nfor product, amount in rows:\n    totals[product] = totals.get(product, 0) + amount\ngrand_total = sum(totals.values())\nmart = []\nfor product, total in totals.items():\n    mart.append({\"product\": product, \"total\": total, \"share\": f\"{total / grand_total:.1%}\"})\nprint(mart)\n\n" +
      "dbtのmart層は「BIツールやレポートがそのまま使える形」までデータを仕上げる層です。集計値（total）だけでなく派生指標（share）も計算済みにしておくことで、利用側は表示するだけで済みます。f\"{...:.1%}\" の結果を文字列として辞書に格納している点に注目してください。\n\n" +
      "よくある間違い:\n・shareを数値（0.706）のまま入れると出力が一致しません。「表示用に整形済みの文字列」を持たせるのがこの問題の仕様です\n・6000/8500 = 70.6%、2500/8500 = 29.4% です。",
    hint: "集計辞書→grand_total→mart.append({...}) の3段階。shareは f\"{total / grand_total:.1%}\" です。",
    answerCode: "rows = [(\"マグカップ\", 2400), (\"Tシャツ\", 2500), (\"マグカップ\", 3600)]\ntotals = {}\nfor product, amount in rows:\n    totals[product] = totals.get(product, 0) + amount\ngrand_total = sum(totals.values())\nmart = []\nfor product, total in totals.items():\n    mart.append({\"product\": product, \"total\": total, \"share\": f\"{total / grand_total:.1%}\"})\nprint(mart)"
  },
  {
    id: "a056",
    level: "advanced",
    category: "practice",
    title: "【API加工】必須項目の検証付き取り込み",
    description:
      "外部APIから受け取った商品リスト items には、必須項目（name と price）が欠けた不完全なデータが混ざっています。両方の項目を持つ有効なデータだけを取り込み、次の2つをこの順番で1行ずつ出力してください。\n\n1行目: 有効なデータの件数\n2行目: 有効な商品名のリスト\n\n期待される出力:\n2\n['マグカップ', 'Tシャツ']",
    starterCode: "items = [\n    {\"name\": \"マグカップ\", \"price\": 1200},\n    {\"name\": \"ステッカー\"},\n    {\"price\": 500},\n    {\"name\": \"Tシャツ\", \"price\": 2500},\n]\n# 「キーが存在するか」は in 演算子で確認できます\n",
    expectedOutput: "2\n['マグカップ', 'Tシャツ']",
    explanation:
      "正解例:\n\nvalid = [i for i in items if \"name\" in i and \"price\" in i]\nprint(len(valid))\nprint([v[\"name\"] for v in valid])\n\n" +
      "外部データを「信用せず、まず検証する」のはAPI連携の鉄則です。辞書に対する in はキーの存在チェックで、必須項目が揃ったデータだけを通すバリデーション処理が内包表記1行で書けます。\n\n" +
      "よくある間違い:\n・検証せずに i[\"price\"] にアクセスすると、2件目で KeyError になりプログラムが停止します\n・実務では「除外した件数をログに残す」ことも重要です（今回の有効2件・除外2件のように）。",
    hint: "[i for i in items if \"name\" in i and \"price\" in i] で必須項目チェックができます。",
    answerCode: "items = [\n    {\"name\": \"マグカップ\", \"price\": 1200},\n    {\"name\": \"ステッカー\"},\n    {\"price\": 500},\n    {\"name\": \"Tシャツ\", \"price\": 2500},\n]\nvalid = [i for i in items if \"name\" in i and \"price\" in i]\nprint(len(valid))\nprint([v[\"name\"] for v in valid])"
  },
  {
    id: "a057",
    level: "advanced",
    category: "practice",
    title: "【API加工】ネスト構造をテーブルに変換",
    description:
      "注文APIのレスポンス orders は顧客情報が入れ子になっています。これをデータベースに入れやすい「平らな」辞書のリストに変換して出力してください。\n\n・各行は id / customer_name / city / amount の4つのキーを持つ\n\n期待される出力:\n[{'id': 101, 'customer_name': '佐藤', 'city': '東京', 'amount': 3200}, {'id': 102, 'customer_name': '鈴木', 'city': '大阪', 'amount': 1800}]",
    starterCode: "orders = [\n    {\"id\": 101, \"customer\": {\"name\": \"佐藤\", \"city\": \"東京\"}, \"amount\": 3200},\n    {\"id\": 102, \"customer\": {\"name\": \"鈴木\", \"city\": \"大阪\"}, \"amount\": 1800},\n]\nflat = []\n# 入れ子の customer から値を取り出して平らな辞書を作ります\n",
    expectedOutput: "[{'id': 101, 'customer_name': '佐藤', 'city': '東京', 'amount': 3200}, {'id': 102, 'customer_name': '鈴木', 'city': '大阪', 'amount': 1800}]",
    explanation:
      "正解例:\n\nflat = []\nfor o in orders:\n    flat.append({\n        \"id\": o[\"id\"],\n        \"customer_name\": o[\"customer\"][\"name\"],\n        \"city\": o[\"customer\"][\"city\"],\n        \"amount\": o[\"amount\"],\n    })\nprint(flat)\n\n" +
      "APIは入れ子（ネスト）構造を返しますが、データベースのテーブルや表計算は平らな構造を前提とします。この「ネスト→フラット」変換はAPI連携・データ基盤構築で毎日のように書く処理です。入れ子の値は o[\"customer\"][\"name\"] と2段でアクセスし、customer_name のような複合名に付け替えます。\n\n" +
      "よくある間違い:\n・\"customer\": o[\"customer\"] と辞書ごと入れると入れ子のままになり、出力が一致しません\n・キーの名前（customer_name）は出力例と完全に一致させる必要があります。",
    hint: "o[\"customer\"][\"name\"] を \"customer_name\" キーに入れ替えて、平らな辞書を組み立てます。",
    answerCode: "orders = [\n    {\"id\": 101, \"customer\": {\"name\": \"佐藤\", \"city\": \"東京\"}, \"amount\": 3200},\n    {\"id\": 102, \"customer\": {\"name\": \"鈴木\", \"city\": \"大阪\"}, \"amount\": 1800},\n]\nflat = []\nflat = []\nfor o in orders:\n    flat.append({\n        \"id\": o[\"id\"],\n        \"customer_name\": o[\"customer\"][\"name\"],\n        \"city\": o[\"customer\"][\"city\"],\n        \"amount\": o[\"amount\"],\n    })\nprint(flat)"
  },
  {
    id: "a058",
    level: "advanced",
    category: "practice",
    title: "【KPI分析】ダッシュボード用データ生成",
    description:
      "本日の注文データ orders から、ダッシュボードに表示する4つのKPIを次の形式で出力してください。\n\n・売上合計: キャンセル以外の合計（3桁区切り）\n・注文数: キャンセル以外の件数\n・客単価: 売上合計÷注文数（roundで整数、3桁区切り）\n・キャンセル率: キャンセル件数÷全件数（:.1%）\n\n期待される出力:\n売上合計: 10,200円\n注文数: 3件\n客単価: 3,400円\nキャンセル率: 25.0%",
    starterCode: "orders = [\n    {\"amount\": 3200, \"status\": \"発送済\"},\n    {\"amount\": 1800, \"status\": \"キャンセル\"},\n    {\"amount\": 4500, \"status\": \"発送済\"},\n    {\"amount\": 2500, \"status\": \"発送済\"},\n]\n# まずキャンセル以外のリストを作ると見通しが良くなります\n",
    expectedOutput: "売上合計: 10,200円\n注文数: 3件\n客単価: 3,400円\nキャンセル率: 25.0%",
    explanation:
      "正解例:\n\nvalid = [o for o in orders if o[\"status\"] != \"キャンセル\"]\nsales = sum(o[\"amount\"] for o in valid)\nprint(f\"売上合計: {sales:,}円\")\nprint(f\"注文数: {len(valid)}件\")\nprint(f\"客単価: {round(sales / len(valid)):,}円\")\nprint(f\"キャンセル率: {(len(orders) - len(valid)) / len(orders):.1%}\")\n\n" +
      "ダッシュボードの数字は「どの母数で計算するか」が命です。売上・注文数・客単価はキャンセルを除いた有効注文で、キャンセル率は全注文を母数に計算します。先に valid リストを作っておくと、この母数の使い分けが明確なコードになります。\n\n" +
      "よくある間違い:\n・キャンセルを含めて売上を合計すると 12,000円 になり、過大なレポートになってしまいます\n・客単価 10200÷3=3400 はこのデータでは割り切れますが、round を忘れると割り切れないデータで桁あふれします。",
    hint: "valid = [o for o in orders if o[\"status\"] != \"キャンセル\"] を先に作り、4つの指標を順に計算します。",
    answerCode: "orders = [\n    {\"amount\": 3200, \"status\": \"発送済\"},\n    {\"amount\": 1800, \"status\": \"キャンセル\"},\n    {\"amount\": 4500, \"status\": \"発送済\"},\n    {\"amount\": 2500, \"status\": \"発送済\"},\n]\nvalid = [o for o in orders if o[\"status\"] != \"キャンセル\"]\nsales = sum(o[\"amount\"] for o in valid)\nprint(f\"売上合計: {sales:,}円\")\nprint(f\"注文数: {len(valid)}件\")\nprint(f\"客単価: {round(sales / len(valid)):,}円\")\nprint(f\"キャンセル率: {(len(orders) - len(valid)) / len(orders):.1%}\")"
  },
  {
    id: "a059",
    level: "advanced",
    category: "practice",
    title: "【総合】売上パイプライン（EC編・最終問題)",
    description:
      "生の売上CSV raw には、金額が不正な行やキャンセル（status=cancel）の行が混ざっています。次のパイプラインを実装し、顧客別の購入額ランキングを「名前: ◯,◯◯◯円」の形式（金額の多い順・3桁区切り）で出力してください。\n\n1. CSVを読み込む（ヘッダー: date,customer,amount,status）\n2. amount が数値に変換できない行はスキップ\n3. status が cancel の行はスキップ\n4. 顧客別に金額を合計\n5. 金額の多い順に出力\n\n期待される出力:\n佐藤: 4,500円\n高橋: 2,100円",
    starterCode: "import csv\nimport io\n\nraw = \"date,customer,amount,status\\n6/1,佐藤,3200,done\\n6/1,鈴木,abc,done\\n6/2,佐藤,4500,cancel\\n6/2,高橋,2100,done\\n6/3,佐藤,1300,done\"\ntotals = {}\n# 検証 → フィルタ → 集計 → ソート → 出力\n",
    expectedOutput: "佐藤: 4,500円\n高橋: 2,100円",
    explanation:
      "正解例:\n\nimport csv\nimport io\n\ntotals = {}\nfor row in csv.DictReader(io.StringIO(raw)):\n    try:\n        amount = int(row[\"amount\"])\n    except ValueError:\n        continue\n    if row[\"status\"] == \"cancel\":\n        continue\n    totals[row[\"customer\"]] = totals.get(row[\"customer\"], 0) + amount\nfor name, total in sorted(totals.items(), key=lambda x: x[1], reverse=True):\n    print(f\"{name}: {total:,}円\")\n\n" +
      "読み込み（Extract）→検証・変換（Transform）→集計→レポート出力という、このコースで学んだ要素をすべて組み合わせた総合問題です。鈴木さんの行は金額不正で除外、佐藤さんの4500円の行はキャンセルで除外され、佐藤 3200+1300=4500円、高橋 2100円が残ります。\n\n" +
      "よくある間違い:\n・佐藤さんの「4500円」は偶然キャンセル除外後の合計と同じ金額です。どの行が残ったか（6/1の3200円と6/3の1300円）を追って確認しましょう\n・検証→フィルタ→集計の順序が重要です。集計してからキャンセルを引く方法は、設計が複雑になりバグの温床になります。",
    hint: "a041と同じ骨格に「顧客別集計」と「降順ソートして出力」を組み合わせます。",
    answerCode: "import csv\nimport io\nraw = \"date,customer,amount,status\\n6/1,佐藤,3200,done\\n6/1,鈴木,abc,done\\n6/2,佐藤,4500,cancel\\n6/2,高橋,2100,done\\n6/3,佐藤,1300,done\"\ntotals = {}\nimport csv\nimport io\n\ntotals = {}\nfor row in csv.DictReader(io.StringIO(raw)):\n    try:\n        amount = int(row[\"amount\"])\n    except ValueError:\n        continue\n    if row[\"status\"] == \"cancel\":\n        continue\n    totals[row[\"customer\"]] = totals.get(row[\"customer\"], 0) + amount\nfor name, total in sorted(totals.items(), key=lambda x: x[1], reverse=True):\n    print(f\"{name}: {total:,}円\")"
  },
  {
    id: "i071",
    level: "intermediate",
    category: "engineering",
    title: "【SQL】はじめてのSELECT",
    description: "Pythonの標準ライブラリ sqlite3 を使うと、SQLデータベースをメモリ上に作って操作できます。\n\nstarterCode で products テーブル（name, price）に3件のデータが入っています。SQLの SELECT 文で「価格の高い順」に全件取得し、「名前: 価格円」の形式で1行ずつ出力してください。\n\n期待される出力:\nメロン: 1500円\nりんご: 120円\nバナナ: 80円",
    starterCode: "import sqlite3\n\nconn = sqlite3.connect(\":memory:\")\ncur = conn.cursor()\ncur.execute(\"CREATE TABLE products (name TEXT, price INTEGER)\")\ncur.executemany(\"INSERT INTO products VALUES (?, ?)\", [\n    (\"りんご\", 120), (\"バナナ\", 80), (\"メロン\", 1500),\n])\n# ここに SELECT 文を書いてください\n",
    expectedOutput: "メロン: 1500円\nりんご: 120円\nバナナ: 80円",
    explanation: "正解例:\n\nimport sqlite3\n\nconn = sqlite3.connect(\":memory:\")\ncur = conn.cursor()\ncur.execute(\"CREATE TABLE products (name TEXT, price INTEGER)\")\ncur.executemany(\"INSERT INTO products VALUES (?, ?)\", [\n    (\"りんご\", 120), (\"バナナ\", 80), (\"メロン\", 1500),\n])\nfor name, price in cur.execute(\"SELECT name, price FROM products ORDER BY price DESC\"):\n    print(f\"{name}: {price}円\")\n\nsqlite3.connect(\":memory:\") はファイルを作らずメモリ上にデータベースを作ります。cur.execute(SQL文) の結果はループで1行ずつ取り出せて、各行は (name, price) のタプルです。ORDER BY price DESC が「価格の降順」の指定で、データエンジニアの仕事はこの SELECT 文の読み書きが基本になります。\n\nよくある間違い:\n・ORDER BY を忘れると挿入順で出てしまい不一致になります\n・DESC（降順）と ASC（昇順・省略時）の取り違え",
    hint: "for row in cur.execute(\"SELECT ...\"): の形でループできます。並び替えは ORDER BY price DESC。",
    answerCode: "import sqlite3\n\nconn = sqlite3.connect(\":memory:\")\ncur = conn.cursor()\ncur.execute(\"CREATE TABLE products (name TEXT, price INTEGER)\")\ncur.executemany(\"INSERT INTO products VALUES (?, ?)\", [\n    (\"りんご\", 120), (\"バナナ\", 80), (\"メロン\", 1500),\n])\nfor name, price in cur.execute(\"SELECT name, price FROM products ORDER BY price DESC\"):\n    print(f\"{name}: {price}円\")"
  },
  {
    id: "i072",
    level: "intermediate",
    category: "engineering",
    title: "【SQL】WHEREで絞り込み",
    description: "items テーブル（name, price, stock）が用意されています。在庫（stock）が10個未満の商品を、在庫が少ない順に「商品名: 残りN個」の形式で出力してください。\n\n期待される出力:\nボールペン: 残り3個\n消しゴム: 残り5個",
    starterCode: "import sqlite3\n\nconn = sqlite3.connect(\":memory:\")\ncur = conn.cursor()\ncur.execute(\"CREATE TABLE items (name TEXT, price INTEGER, stock INTEGER)\")\ncur.executemany(\"INSERT INTO items VALUES (?, ?, ?)\", [\n    (\"ノート\", 120, 50), (\"消しゴム\", 80, 5), (\"ボールペン\", 150, 3), (\"定規\", 200, 20),\n])\n# WHERE で stock < 10 に絞り込んでください\n",
    expectedOutput: "ボールペン: 残り3個\n消しゴム: 残り5個",
    explanation: "正解例:\n\nimport sqlite3\n\nconn = sqlite3.connect(\":memory:\")\ncur = conn.cursor()\ncur.execute(\"CREATE TABLE items (name TEXT, price INTEGER, stock INTEGER)\")\ncur.executemany(\"INSERT INTO items VALUES (?, ?, ?)\", [\n    (\"ノート\", 120, 50), (\"消しゴム\", 80, 5), (\"ボールペン\", 150, 3), (\"定規\", 200, 20),\n])\nfor name, stock in cur.execute(\"SELECT name, stock FROM items WHERE stock < 10 ORDER BY stock\"):\n    print(f\"{name}: 残り{stock}個\")\n\nWHERE 句は「取得する行の条件」を指定します。SELECT の後の列リストは出力したい列だけに絞れるので、必要な列だけを取ってくる習慣をつけると後工程（集計・結合）が楽になります。在庫アラートのようなアラート抽出は実務でもよく書くクエリです。\n\nよくある間違い:\n・WHERE の条件を忘れて全件出力してしまう\n・stock < 10 のつもりで stock <= 10 と書き、境界値がずれる",
    hint: "WHERE stock < 10 を SELECT文に追加し、ORDER BY stock で並べ替えます。",
    answerCode: "import sqlite3\n\nconn = sqlite3.connect(\":memory:\")\ncur = conn.cursor()\ncur.execute(\"CREATE TABLE items (name TEXT, price INTEGER, stock INTEGER)\")\ncur.executemany(\"INSERT INTO items VALUES (?, ?, ?)\", [\n    (\"ノート\", 120, 50), (\"消しゴム\", 80, 5), (\"ボールペン\", 150, 3), (\"定規\", 200, 20),\n])\nfor name, stock in cur.execute(\"SELECT name, stock FROM items WHERE stock < 10 ORDER BY stock\"):\n    print(f\"{name}: 残り{stock}個\")"
  },
  {
    id: "i073",
    level: "intermediate",
    category: "engineering",
    title: "【SQL】ORDER BY と LIMIT（ランキング上位N件）",
    description: "scores テーブル（name, score）が用意されています。スコアが高い順に上位3チームを「N位: チーム名（score点）」の形式で出力してください。\n\n期待される出力:\n1位: Bチーム（95点）\n2位: Dチーム（90点）\n3位: Aチーム（82点）",
    starterCode: "import sqlite3\n\nconn = sqlite3.connect(\":memory:\")\ncur = conn.cursor()\ncur.execute(\"CREATE TABLE scores (name TEXT, score INTEGER)\")\ncur.executemany(\"INSERT INTO scores VALUES (?, ?)\", [\n    (\"Aチーム\", 82), (\"Bチーム\", 95), (\"Cチーム\", 78), (\"Dチーム\", 90),\n])\n# ORDER BY と LIMIT で上位3件に絞り込んでください\n",
    expectedOutput: "1位: Bチーム（95点）\n2位: Dチーム（90点）\n3位: Aチーム（82点）",
    explanation: "正解例:\n\nimport sqlite3\n\nconn = sqlite3.connect(\":memory:\")\ncur = conn.cursor()\ncur.execute(\"CREATE TABLE scores (name TEXT, score INTEGER)\")\ncur.executemany(\"INSERT INTO scores VALUES (?, ?)\", [\n    (\"Aチーム\", 82), (\"Bチーム\", 95), (\"Cチーム\", 78), (\"Dチーム\", 90),\n])\nfor rank, (name, score) in enumerate(cur.execute(\"SELECT name, score FROM scores ORDER BY score DESC LIMIT 3\"), 1):\n    print(f\"{rank}位: {name}（{score}点）\")\n\nLIMIT はSQL側で「上位N件」に絞り込む機能です。Python側で全件取得してからスライスするより、DB側で絞ってから受け取る方がデータ量が多いときに効率的です（ネットワーク越しのDBならなおさら）。enumerate(..., 1) は1始まりの連番を作る定番の書き方です。\n\nよくある間違い:\n・LIMIT の前に ORDER BY を書かないと「上位」の意味を持たない（挿入順のN件になってしまう）\n・LIMIT 3 のつもりで TOP 3 など他のDB方言を書いてしまう（SQLiteは LIMIT）",
    hint: "ORDER BY score DESC LIMIT 3 で上位3件を取得し、enumerate(..., 1) で順位を付けます。",
    answerCode: "import sqlite3\n\nconn = sqlite3.connect(\":memory:\")\ncur = conn.cursor()\ncur.execute(\"CREATE TABLE scores (name TEXT, score INTEGER)\")\ncur.executemany(\"INSERT INTO scores VALUES (?, ?)\", [\n    (\"Aチーム\", 82), (\"Bチーム\", 95), (\"Cチーム\", 78), (\"Dチーム\", 90),\n])\nfor rank, (name, score) in enumerate(cur.execute(\"SELECT name, score FROM scores ORDER BY score DESC LIMIT 3\"), 1):\n    print(f\"{rank}位: {name}（{score}点）\")"
  },
  {
    id: "i074",
    level: "intermediate",
    category: "engineering",
    title: "【SQL】COUNT・SUM・AVG（集計関数）",
    description: "sales テーブル（product, amount）が用意されています。件数（COUNT）・合計（SUM）・平均（AVG、四捨五入して整数）を計算し、以下の形式で出力してください。\n\n期待される出力:\n件数: 5件\n合計: 1500円\n平均: 300円",
    starterCode: "import sqlite3\n\nconn = sqlite3.connect(\":memory:\")\ncur = conn.cursor()\ncur.execute(\"CREATE TABLE sales (product TEXT, amount INTEGER)\")\ncur.executemany(\"INSERT INTO sales VALUES (?, ?)\", [\n    (\"りんご\", 300), (\"バナナ\", 150), (\"みかん\", 200), (\"ぶどう\", 500), (\"もも\", 350),\n])\n# COUNT(*), SUM(amount), AVG(amount) を1つのSELECTで取得してください\n",
    expectedOutput: "件数: 5件\n合計: 1500円\n平均: 300円",
    explanation: "正解例:\n\nimport sqlite3\n\nconn = sqlite3.connect(\":memory:\")\ncur = conn.cursor()\ncur.execute(\"CREATE TABLE sales (product TEXT, amount INTEGER)\")\ncur.executemany(\"INSERT INTO sales VALUES (?, ?)\", [\n    (\"りんご\", 300), (\"バナナ\", 150), (\"みかん\", 200), (\"ぶどう\", 500), (\"もも\", 350),\n])\ncount, total, avg = cur.execute(\"SELECT COUNT(*), SUM(amount), AVG(amount) FROM sales\").fetchone()\nprint(f\"件数: {count}件\")\nprint(f\"合計: {total}円\")\nprint(f\"平均: {round(avg)}円\")\n\nCOUNT・SUM・AVG は集計関数で、1つのSELECTにまとめて書くと1回のクエリで複数の指標が取れます。fetchone() は結果が1行だけとわかっているときに使い、タプルをそのままアンパックできます。AVG は浮動小数になるため round() で丸めるのが実務での定石です。\n\nよくある間違い:\n・fetchone() の戻り値をそのままprintしてタプル表示になってしまう（アンパックを忘れる）\n・AVG の結果をround()せずに出力し、環境によって小数の桁数がずれる",
    hint: "cur.execute(\"SELECT COUNT(*), SUM(amount), AVG(amount) FROM sales\").fetchone() でタプルとして受け取れます。",
    answerCode: "import sqlite3\n\nconn = sqlite3.connect(\":memory:\")\ncur = conn.cursor()\ncur.execute(\"CREATE TABLE sales (product TEXT, amount INTEGER)\")\ncur.executemany(\"INSERT INTO sales VALUES (?, ?)\", [\n    (\"りんご\", 300), (\"バナナ\", 150), (\"みかん\", 200), (\"ぶどう\", 500), (\"もも\", 350),\n])\ncount, total, avg = cur.execute(\"SELECT COUNT(*), SUM(amount), AVG(amount) FROM sales\").fetchone()\nprint(f\"件数: {count}件\")\nprint(f\"合計: {total}円\")\nprint(f\"平均: {round(avg)}円\")"
  },
  {
    id: "i075",
    level: "intermediate",
    category: "engineering",
    title: "【SQL】GROUP BY でカテゴリ別集計",
    description: "sales テーブル（category, amount）が用意されています。カテゴリごとの売上合計を、カテゴリ名の順に「カテゴリ名: 合計円」の形式で出力してください。\n\n期待される出力:\n雑貨: 650円\n食品: 850円",
    starterCode: "import sqlite3\n\nconn = sqlite3.connect(\":memory:\")\ncur = conn.cursor()\ncur.execute(\"CREATE TABLE sales (category TEXT, amount INTEGER)\")\ncur.executemany(\"INSERT INTO sales VALUES (?, ?)\", [\n    (\"食品\", 300), (\"雑貨\", 150), (\"食品\", 200), (\"雑貨\", 500), (\"食品\", 350),\n])\n# GROUP BY category で集計してください\n",
    expectedOutput: "雑貨: 650円\n食品: 850円",
    explanation: "正解例:\n\nimport sqlite3\n\nconn = sqlite3.connect(\":memory:\")\ncur = conn.cursor()\ncur.execute(\"CREATE TABLE sales (category TEXT, amount INTEGER)\")\ncur.executemany(\"INSERT INTO sales VALUES (?, ?)\", [\n    (\"食品\", 300), (\"雑貨\", 150), (\"食品\", 200), (\"雑貨\", 500), (\"食品\", 350),\n])\nfor category, total in cur.execute(\"SELECT category, SUM(amount) FROM sales GROUP BY category ORDER BY category\"):\n    print(f\"{category}: {total}円\")\n\nGROUP BY は「指定した列の値ごとにグループ化してから集計する」機能です。SELECT に集計関数（ここではSUM）と GROUP BY の列を組み合わせるのが基本形。pandasのgroupby().sum()と同じ発想で、SQLとpandasのどちらでも書けるようにしておくと実務で便利です。\n\nよくある間違い:\n・GROUP BY を忘れて全件のSUMになってしまう（1行しか出ない）\n・SELECT に書いた非集計列がGROUP BYに入っていないとエラーになる（SQLiteは緩いが他のDBでは弾かれる）",
    hint: "SELECT category, SUM(amount) FROM sales GROUP BY category の形にします。",
    answerCode: "import sqlite3\n\nconn = sqlite3.connect(\":memory:\")\ncur = conn.cursor()\ncur.execute(\"CREATE TABLE sales (category TEXT, amount INTEGER)\")\ncur.executemany(\"INSERT INTO sales VALUES (?, ?)\", [\n    (\"食品\", 300), (\"雑貨\", 150), (\"食品\", 200), (\"雑貨\", 500), (\"食品\", 350),\n])\nfor category, total in cur.execute(\"SELECT category, SUM(amount) FROM sales GROUP BY category ORDER BY category\"):\n    print(f\"{category}: {total}円\")"
  },
  {
    id: "i076",
    level: "intermediate",
    category: "engineering",
    title: "【SQL】HAVING（集計後の絞り込み。WHEREとの違い）",
    description: "sales テーブル（category, amount）が用意されています。カテゴリ別の売上合計を計算し、合計が500円以上のカテゴリだけを、合計が高い順に「カテゴリ名: 合計円」の形式で出力してください。\n\n期待される出力:\n文房具: 900円\n食品: 500円",
    starterCode: "import sqlite3\n\nconn = sqlite3.connect(\":memory:\")\ncur = conn.cursor()\ncur.execute(\"CREATE TABLE sales (category TEXT, amount INTEGER)\")\ncur.executemany(\"INSERT INTO sales VALUES (?, ?)\", [\n    (\"食品\", 300), (\"雑貨\", 150), (\"食品\", 200), (\"雑貨\", 100), (\"文房具\", 900),\n])\n# GROUP BY + HAVING で合計500円以上のカテゴリのみ抽出してください\n",
    expectedOutput: "文房具: 900円\n食品: 500円",
    explanation: "正解例:\n\nimport sqlite3\n\nconn = sqlite3.connect(\":memory:\")\ncur = conn.cursor()\ncur.execute(\"CREATE TABLE sales (category TEXT, amount INTEGER)\")\ncur.executemany(\"INSERT INTO sales VALUES (?, ?)\", [\n    (\"食品\", 300), (\"雑貨\", 150), (\"食品\", 200), (\"雑貨\", 100), (\"文房具\", 900),\n])\nfor category, total in cur.execute('''\n    SELECT category, SUM(amount) as total FROM sales\n    GROUP BY category HAVING total >= 500 ORDER BY total DESC\n'''):\n    print(f\"{category}: {total}円\")\n\nWHERE は「集計前の行」を絞り込み、HAVING は「集計後の結果（SUMなど）」を絞り込みます。「カテゴリごとの売上が500円以上のものだけ見たい」のように集計値そのもので条件を付けたいときはHAVINGが必要です。WHEREでは書けません。\n\nよくある間違い:\n・HAVING で絞りたい条件をWHEREに書いてエラーになる（集計関数はWHEREの時点でまだ計算されていない）\n・HAVING total >= 500 の total はSELECTでつけたエイリアス名（SQLiteでは使えるが、DBによってはエイリアスが使えず SUM(amount) と書き直しが必要な場合もある）",
    hint: "GROUP BY category HAVING total >= 500 のように、SUM(amount) にasでエイリアスを付けるとHAVINGで使えます。",
    answerCode: "import sqlite3\n\nconn = sqlite3.connect(\":memory:\")\ncur = conn.cursor()\ncur.execute(\"CREATE TABLE sales (category TEXT, amount INTEGER)\")\ncur.executemany(\"INSERT INTO sales VALUES (?, ?)\", [\n    (\"食品\", 300), (\"雑貨\", 150), (\"食品\", 200), (\"雑貨\", 100), (\"文房具\", 900),\n])\nfor category, total in cur.execute(\"\"\"\n    SELECT category, SUM(amount) as total FROM sales\n    GROUP BY category HAVING total >= 500 ORDER BY total DESC\n\"\"\"):\n    print(f\"{category}: {total}円\")"
  },
  {
    id: "i077",
    level: "intermediate",
    category: "engineering",
    title: "【SQL】LIKE と部分一致検索",
    description: "users テーブル（name, email）が用意されています。メールアドレスが「example.com」で終わるユーザーの名前だけを、名前順に出力してください。\n\n期待される出力:\n佐藤\n高橋",
    starterCode: "import sqlite3\n\nconn = sqlite3.connect(\":memory:\")\ncur = conn.cursor()\ncur.execute(\"CREATE TABLE users (name TEXT, email TEXT)\")\ncur.executemany(\"INSERT INTO users VALUES (?, ?)\", [\n    (\"佐藤\", \"sato@example.com\"), (\"鈴木\", \"suzuki@sample.co.jp\"), (\"高橋\", \"takahashi@example.com\"),\n])\n# LIKE '%example.com' で絞り込んでください\n",
    expectedOutput: "佐藤\n高橋",
    explanation: "正解例:\n\nimport sqlite3\n\nconn = sqlite3.connect(\":memory:\")\ncur = conn.cursor()\ncur.execute(\"CREATE TABLE users (name TEXT, email TEXT)\")\ncur.executemany(\"INSERT INTO users VALUES (?, ?)\", [\n    (\"佐藤\", \"sato@example.com\"), (\"鈴木\", \"suzuki@sample.co.jp\"), (\"高橋\", \"takahashi@example.com\"),\n])\nfor (name,) in cur.execute(\"SELECT name FROM users WHERE email LIKE '%example.com' ORDER BY name\"):\n    print(name)\n\nLIKE は文字列の部分一致検索に使います。% は「0文字以上の任意の文字列」を表すワイルドカードで、'%example.com' は「example.comで終わる」という意味になります。逆に'example.com%'なら「example.comで始まる」になります。\n\nよくある間違い:\n・%の位置を間違えて「で始まる」と「で終わる」を取り違える\n・大文字小文字を区別すると思い込む（SQLiteのLIKEはASCII文字については既定で大文字小文字を区別しない）",
    hint: "WHERE email LIKE '%example.com' のように % を前に付けると「〜で終わる」の意味になります。",
    answerCode: "import sqlite3\n\nconn = sqlite3.connect(\":memory:\")\ncur = conn.cursor()\ncur.execute(\"CREATE TABLE users (name TEXT, email TEXT)\")\ncur.executemany(\"INSERT INTO users VALUES (?, ?)\", [\n    (\"佐藤\", \"sato@example.com\"), (\"鈴木\", \"suzuki@sample.co.jp\"), (\"高橋\", \"takahashi@example.com\"),\n])\nfor (name,) in cur.execute(\"SELECT name FROM users WHERE email LIKE '%example.com' ORDER BY name\"):\n    print(name)"
  },
  {
    id: "i078",
    level: "intermediate",
    category: "engineering",
    title: "【SQL】プレースホルダ（?）で安全に値を渡す",
    description: "users テーブル（name, age）が用意されています。変数 search_age（30）以上のユーザーの名前を、年齢が低い順に出力してください。SQL文にプレースホルダ（?）を使い、値は cur.execute の第2引数（タプル）で渡してください。\n\n期待される出力:\n高橋\n鈴木",
    starterCode: "import sqlite3\n\nconn = sqlite3.connect(\":memory:\")\ncur = conn.cursor()\ncur.execute(\"CREATE TABLE users (name TEXT, age INTEGER)\")\ncur.executemany(\"INSERT INTO users VALUES (?, ?)\", [\n    (\"佐藤\", 25), (\"鈴木\", 40), (\"高橋\", 33),\n])\nsearch_age = 30\n# プレースホルダ（?）を使って search_age 以上のユーザーを取得してください\n",
    expectedOutput: "高橋\n鈴木",
    explanation: "正解例:\n\nimport sqlite3\n\nconn = sqlite3.connect(\":memory:\")\ncur = conn.cursor()\ncur.execute(\"CREATE TABLE users (name TEXT, age INTEGER)\")\ncur.executemany(\"INSERT INTO users VALUES (?, ?)\", [\n    (\"佐藤\", 25), (\"鈴木\", 40), (\"高橋\", 33),\n])\nsearch_age = 30\nfor (name,) in cur.execute(\"SELECT name FROM users WHERE age >= ? ORDER BY age\", (search_age,)):\n    print(name)\n\nSQL文の中に変数の値を直接文字列結合（f\"WHERE age >= {search_age}\"のような書き方）すると、その変数の中身次第で意図しないSQL文が組み立てられてしまう「SQLインジェクション」の危険があります。プレースホルダ（?）とパラメータのタプルを分けて渡すと、値はあくまで「データ」として扱われるため安全です。実務のDB操作では文字列結合でSQLを組み立てることは基本的に避けます。\n\nよくある間違い:\n・(search_age,) を search_age だけで渡してしまう（タプルにするための末尾カンマを忘れる）\n・プレースホルダを使わずf文字列でSQLを組み立ててしまう（動きはするがセキュリティ上のアンチパターン）",
    hint: "cur.execute(\"...WHERE age >= ?\", (search_age,)) のように、?の数とタプルの要素数を合わせます。",
    answerCode: "import sqlite3\n\nconn = sqlite3.connect(\":memory:\")\ncur = conn.cursor()\ncur.execute(\"CREATE TABLE users (name TEXT, age INTEGER)\")\ncur.executemany(\"INSERT INTO users VALUES (?, ?)\", [\n    (\"佐藤\", 25), (\"鈴木\", 40), (\"高橋\", 33),\n])\nsearch_age = 30\nfor (name,) in cur.execute(\"SELECT name FROM users WHERE age >= ? ORDER BY age\", (search_age,)):\n    print(name)"
  },
  {
    id: "a060",
    level: "advanced",
    category: "engineering",
    title: "【SQL】INNER JOIN（注文×顧客マスタの結合）",
    description: "customers テーブル（id, name）と orders テーブル（id, customer_id, amount）が用意されています。INNER JOINで顧客名を付けた注文一覧を、注文ID順に「顧客名: 金額円」の形式で出力してください。\n\n期待される出力:\n佐藤: 1000円\n鈴木: 2000円\n佐藤: 1500円",
    starterCode: "import sqlite3\n\nconn = sqlite3.connect(\":memory:\")\ncur = conn.cursor()\ncur.execute(\"CREATE TABLE customers (id INTEGER PRIMARY KEY, name TEXT)\")\ncur.execute(\"CREATE TABLE orders (id INTEGER PRIMARY KEY, customer_id INTEGER, amount INTEGER)\")\ncur.executemany(\"INSERT INTO customers VALUES (?, ?)\", [(1, \"佐藤\"), (2, \"鈴木\"), (3, \"高橋\")])\ncur.executemany(\"INSERT INTO orders VALUES (?, ?, ?)\", [(1, 1, 1000), (2, 2, 2000), (3, 1, 1500)])\n# INNER JOIN で customers と orders を結合してください\n",
    expectedOutput: "佐藤: 1000円\n鈴木: 2000円\n佐藤: 1500円",
    explanation: "正解例:\n\nimport sqlite3\n\nconn = sqlite3.connect(\":memory:\")\ncur = conn.cursor()\ncur.execute(\"CREATE TABLE customers (id INTEGER PRIMARY KEY, name TEXT)\")\ncur.execute(\"CREATE TABLE orders (id INTEGER PRIMARY KEY, customer_id INTEGER, amount INTEGER)\")\ncur.executemany(\"INSERT INTO customers VALUES (?, ?)\", [(1, \"佐藤\"), (2, \"鈴木\"), (3, \"高橋\")])\ncur.executemany(\"INSERT INTO orders VALUES (?, ?, ?)\", [(1, 1, 1000), (2, 2, 2000), (3, 1, 1500)])\nfor name, amount in cur.execute('''\n    SELECT customers.name, orders.amount\n    FROM orders\n    INNER JOIN customers ON orders.customer_id = customers.id\n    ORDER BY orders.id\n'''):\n    print(f\"{name}: {amount}円\")\n\nINNER JOINは「両方のテーブルに一致する行がある場合だけ」結合します。注文テーブルは顧客IDしか持っていないので、顧客名を表示するには顧客マスタと結合する必要があります。この「トランザクションテーブル×マスタテーブル」の結合はdbtの中間モデル（stg/int層）で最も頻繁に書くパターンです。\n\nよくある間違い:\n・ON句の結合条件を書き忘れて全組み合わせ（直積）になってしまう\n・customers.id と orders.customer_id のどちらが外部キーかを取り違える",
    hint: "FROM orders INNER JOIN customers ON orders.customer_id = customers.id の形にします。",
    answerCode: "import sqlite3\n\nconn = sqlite3.connect(\":memory:\")\ncur = conn.cursor()\ncur.execute(\"CREATE TABLE customers (id INTEGER PRIMARY KEY, name TEXT)\")\ncur.execute(\"CREATE TABLE orders (id INTEGER PRIMARY KEY, customer_id INTEGER, amount INTEGER)\")\ncur.executemany(\"INSERT INTO customers VALUES (?, ?)\", [(1, \"佐藤\"), (2, \"鈴木\"), (3, \"高橋\")])\ncur.executemany(\"INSERT INTO orders VALUES (?, ?, ?)\", [(1, 1, 1000), (2, 2, 2000), (3, 1, 1500)])\nfor name, amount in cur.execute(\"\"\"\n    SELECT customers.name, orders.amount\n    FROM orders\n    INNER JOIN customers ON orders.customer_id = customers.id\n    ORDER BY orders.id\n\"\"\"):\n    print(f\"{name}: {amount}円\")"
  },
  {
    id: "a061",
    level: "advanced",
    category: "engineering",
    title: "【SQL】LEFT JOIN と NULL（注文のない顧客を見つける）",
    description: "customers テーブル（id, name）と orders テーブル（id, customer_id）が用意されています。LEFT JOINを使って、一度も注文をしていない顧客の名前を出力してください。\n\n期待される出力:\n鈴木",
    starterCode: "import sqlite3\n\nconn = sqlite3.connect(\":memory:\")\ncur = conn.cursor()\ncur.execute(\"CREATE TABLE customers (id INTEGER PRIMARY KEY, name TEXT)\")\ncur.execute(\"CREATE TABLE orders (id INTEGER PRIMARY KEY, customer_id INTEGER)\")\ncur.executemany(\"INSERT INTO customers VALUES (?, ?)\", [(1, \"佐藤\"), (2, \"鈴木\"), (3, \"高橋\")])\ncur.executemany(\"INSERT INTO orders VALUES (?, ?)\", [(1, 1), (2, 3)])\n# LEFT JOIN + WHERE orders.id IS NULL で注文のない顧客を探してください\n",
    expectedOutput: "鈴木",
    explanation: "正解例:\n\nimport sqlite3\n\nconn = sqlite3.connect(\":memory:\")\ncur = conn.cursor()\ncur.execute(\"CREATE TABLE customers (id INTEGER PRIMARY KEY, name TEXT)\")\ncur.execute(\"CREATE TABLE orders (id INTEGER PRIMARY KEY, customer_id INTEGER)\")\ncur.executemany(\"INSERT INTO customers VALUES (?, ?)\", [(1, \"佐藤\"), (2, \"鈴木\"), (3, \"高橋\")])\ncur.executemany(\"INSERT INTO orders VALUES (?, ?)\", [(1, 1), (2, 3)])\nfor (name,) in cur.execute('''\n    SELECT customers.name\n    FROM customers\n    LEFT JOIN orders ON customers.id = orders.customer_id\n    WHERE orders.id IS NULL\n    ORDER BY customers.id\n'''):\n    print(name)\n\nLEFT JOINは「左側（FROMの後のテーブル）は全件残し、右側は一致しなければNULLで埋める」結合です。INNER JOINだと注文のない顧客はそもそも結果に出てこないため、「一度も注文していない顧客を探す」にはLEFT JOIN + IS NULLという定番の組み合わせが必要です。休眠顧客の抽出など、実務のマーケティング分析でよく使うパターンです。\n\nよくある間違い:\n・INNER JOINのまま書いてしまい、該当顧客が結果から消えてしまう\n・WHERE orders.customer_id IS NULL のつもりで orders.id IS NULL と書く混同（結合キーではなく、結合結果の行の存在を見ている）",
    hint: "LEFT JOIN ... ON ... の後に WHERE orders.id IS NULL を付けます（一致する注文がない顧客はorders側がNULLになる）。",
    answerCode: "import sqlite3\n\nconn = sqlite3.connect(\":memory:\")\ncur = conn.cursor()\ncur.execute(\"CREATE TABLE customers (id INTEGER PRIMARY KEY, name TEXT)\")\ncur.execute(\"CREATE TABLE orders (id INTEGER PRIMARY KEY, customer_id INTEGER)\")\ncur.executemany(\"INSERT INTO customers VALUES (?, ?)\", [(1, \"佐藤\"), (2, \"鈴木\"), (3, \"高橋\")])\ncur.executemany(\"INSERT INTO orders VALUES (?, ?)\", [(1, 1), (2, 3)])\nfor (name,) in cur.execute(\"\"\"\n    SELECT customers.name\n    FROM customers\n    LEFT JOIN orders ON customers.id = orders.customer_id\n    WHERE orders.id IS NULL\n    ORDER BY customers.id\n\"\"\"):\n    print(name)"
  },
  {
    id: "a062",
    level: "advanced",
    category: "engineering",
    title: "【SQL】サブクエリ（平均より高い商品）",
    description: "products テーブル（name, price）が用意されています。サブクエリを使って「全商品の平均価格より高い商品」を、価格が高い順に「商品名: 価格円」の形式で出力してください。\n\n期待される出力:\nC: 500円\nB: 300円",
    starterCode: "import sqlite3\n\nconn = sqlite3.connect(\":memory:\")\ncur = conn.cursor()\ncur.execute(\"CREATE TABLE products (name TEXT, price INTEGER)\")\ncur.executemany(\"INSERT INTO products VALUES (?, ?)\", [\n    (\"A\", 100), (\"B\", 300), (\"C\", 500), (\"D\", 200),\n])\n# WHERE price > (SELECT AVG(price) FROM products) の形のサブクエリを使ってください\n",
    expectedOutput: "C: 500円\nB: 300円",
    explanation: "正解例:\n\nimport sqlite3\n\nconn = sqlite3.connect(\":memory:\")\ncur = conn.cursor()\ncur.execute(\"CREATE TABLE products (name TEXT, price INTEGER)\")\ncur.executemany(\"INSERT INTO products VALUES (?, ?)\", [\n    (\"A\", 100), (\"B\", 300), (\"C\", 500), (\"D\", 200),\n])\nfor name, price in cur.execute('''\n    SELECT name, price FROM products\n    WHERE price > (SELECT AVG(price) FROM products)\n    ORDER BY price DESC\n'''):\n    print(f\"{name}: {price}円\")\n\nサブクエリ（副問い合わせ）は「クエリの中に別のクエリを埋め込む」書き方です。ここでは(SELECT AVG(price) FROM products)が先に計算され、その値をWHERE句の比較に使っています。「平均より高い」「最大の日付だけ」のような、集計結果を条件にしたい場面でよく使います。\n\nよくある間違い:\n・サブクエリの括弧を閉じ忘れる\n・平均を先にPython側で計算しようとして、SQLだけで完結できることに気づかない（クエリが2回に分かれて非効率）",
    hint: "WHERE price > (SELECT AVG(price) FROM products) のように、比較の右辺にSELECT文をそのまま書けます。",
    answerCode: "import sqlite3\n\nconn = sqlite3.connect(\":memory:\")\ncur = conn.cursor()\ncur.execute(\"CREATE TABLE products (name TEXT, price INTEGER)\")\ncur.executemany(\"INSERT INTO products VALUES (?, ?)\", [\n    (\"A\", 100), (\"B\", 300), (\"C\", 500), (\"D\", 200),\n])\nfor name, price in cur.execute(\"\"\"\n    SELECT name, price FROM products\n    WHERE price > (SELECT AVG(price) FROM products)\n    ORDER BY price DESC\n\"\"\"):\n    print(f\"{name}: {price}円\")"
  },
  {
    id: "a063",
    level: "advanced",
    category: "engineering",
    title: "【SQL】CASE WHEN で区分列を作る",
    description: "students テーブル（name, score）が用意されています。CASE WHEN を使って、80点以上は'A'、60点以上は'B'、それ未満は'C'という成績区分の列を作り、点数が高い順に「名前: 点数点 (区分)」の形式で出力してください。\n\n期待される出力:\nAさん: 92点 (A)\nDさん: 80点 (A)\nBさん: 68点 (B)\nCさん: 55点 (C)",
    starterCode: "import sqlite3\n\nconn = sqlite3.connect(\":memory:\")\ncur = conn.cursor()\ncur.execute(\"CREATE TABLE students (name TEXT, score INTEGER)\")\ncur.executemany(\"INSERT INTO students VALUES (?, ?)\", [\n    (\"Aさん\", 92), (\"Bさん\", 68), (\"Cさん\", 55), (\"Dさん\", 80),\n])\n# CASE WHEN ... THEN ... ELSE ... END AS grade を使ってください\n",
    expectedOutput: "Aさん: 92点 (A)\nDさん: 80点 (A)\nBさん: 68点 (B)\nCさん: 55点 (C)",
    explanation: "正解例:\n\nimport sqlite3\n\nconn = sqlite3.connect(\":memory:\")\ncur = conn.cursor()\ncur.execute(\"CREATE TABLE students (name TEXT, score INTEGER)\")\ncur.executemany(\"INSERT INTO students VALUES (?, ?)\", [\n    (\"Aさん\", 92), (\"Bさん\", 68), (\"Cさん\", 55), (\"Dさん\", 80),\n])\nfor name, score, grade in cur.execute('''\n    SELECT name, score,\n        CASE\n            WHEN score >= 80 THEN 'A'\n            WHEN score >= 60 THEN 'B'\n            ELSE 'C'\n        END AS grade\n    FROM students\n    ORDER BY score DESC\n'''):\n    print(f\"{name}: {score}点 ({grade})\")\n\nCASE WHEN は「条件によって値を出し分ける」SQLの構文で、Pythonのif/elifに相当します。上から順に条件を評価し、最初に一致したWHENの値が使われます。ELSEはPythonのelseと同じく「どれにも当てはまらない場合」です。ダッシュボードでよく見る「ランク区分」「年代区分」などはSQL側でこのCASE WHENを使って作ります。\n\nよくある間違い:\n・WHEN の順序を変えて、80点以上の人が先に60点以上の条件に引っかかると思い込む（実際は上から評価され最初に一致した1つだけが使われる）\n・END の後の AS grade（列名）を付け忘れる",
    hint: "CASE WHEN score >= 80 THEN 'A' WHEN score >= 60 THEN 'B' ELSE 'C' END AS grade をSELECTに追加します。",
    answerCode: "import sqlite3\n\nconn = sqlite3.connect(\":memory:\")\ncur = conn.cursor()\ncur.execute(\"CREATE TABLE students (name TEXT, score INTEGER)\")\ncur.executemany(\"INSERT INTO students VALUES (?, ?)\", [\n    (\"Aさん\", 92), (\"Bさん\", 68), (\"Cさん\", 55), (\"Dさん\", 80),\n])\nfor name, score, grade in cur.execute(\"\"\"\n    SELECT name, score,\n        CASE\n            WHEN score >= 80 THEN 'A'\n            WHEN score >= 60 THEN 'B'\n            ELSE 'C'\n        END AS grade\n    FROM students\n    ORDER BY score DESC\n\"\"\"):\n    print(f\"{name}: {score}点 ({grade})\")"
  },
  {
    id: "a064",
    level: "advanced",
    category: "engineering",
    title: "【SQL】ウィンドウ関数 ROW_NUMBER（グループ内ランキング）",
    description: "sales テーブル（dept, name, amount）が用意されています。ウィンドウ関数 ROW_NUMBER() を使って、部署（dept）ごとに売上が高い順の順位を付け、「部署 名前: 金額円 (N位)」の形式で出力してください（部署名→順位の順に並べる）。\n\n期待される出力:\n営業 鈴木: 800円 (1位)\n営業 佐藤: 500円 (2位)\n開発 田中: 600円 (1位)\n開発 高橋: 300円 (2位)",
    starterCode: "import sqlite3\n\nconn = sqlite3.connect(\":memory:\")\ncur = conn.cursor()\ncur.execute(\"CREATE TABLE sales (dept TEXT, name TEXT, amount INTEGER)\")\ncur.executemany(\"INSERT INTO sales VALUES (?, ?, ?)\", [\n    (\"営業\", \"佐藤\", 500), (\"営業\", \"鈴木\", 800), (\"開発\", \"高橋\", 300), (\"開発\", \"田中\", 600),\n])\n# ROW_NUMBER() OVER (PARTITION BY dept ORDER BY amount DESC) を使ってください\n",
    expectedOutput: "営業 鈴木: 800円 (1位)\n営業 佐藤: 500円 (2位)\n開発 田中: 600円 (1位)\n開発 高橋: 300円 (2位)",
    explanation: "正解例:\n\nimport sqlite3\n\nconn = sqlite3.connect(\":memory:\")\ncur = conn.cursor()\ncur.execute(\"CREATE TABLE sales (dept TEXT, name TEXT, amount INTEGER)\")\ncur.executemany(\"INSERT INTO sales VALUES (?, ?, ?)\", [\n    (\"営業\", \"佐藤\", 500), (\"営業\", \"鈴木\", 800), (\"開発\", \"高橋\", 300), (\"開発\", \"田中\", 600),\n])\nfor dept, name, amount, rank in cur.execute('''\n    SELECT dept, name, amount,\n        ROW_NUMBER() OVER (PARTITION BY dept ORDER BY amount DESC) AS rnk\n    FROM sales\n    ORDER BY dept, rnk\n'''):\n    print(f\"{dept} {name}: {amount}円 ({rank}位)\")\n\nウィンドウ関数はGROUP BYと違い「行を集約せず、行ごとに追加情報を計算する」機能です。PARTITION BY dept が「部署ごとにグループを区切る」指定、ORDER BY amount DESC がそのグループ内での並び順です。GROUP BYでは「部署ごとの合計」しか出せませんが、ROW_NUMBERなら「明細行を保ったまま部署内順位」を付けられます。\n\nよくある間違い:\n・PARTITION BY を忘れて全社通しの連番になってしまう（部署ごとにリセットされない）\n・GROUP BYで同じことをしようとして、明細行が消えてしまうことに気づかない",
    hint: "ROW_NUMBER() OVER (PARTITION BY dept ORDER BY amount DESC) AS rnk をSELECTに追加します。",
    answerCode: "import sqlite3\n\nconn = sqlite3.connect(\":memory:\")\ncur = conn.cursor()\ncur.execute(\"CREATE TABLE sales (dept TEXT, name TEXT, amount INTEGER)\")\ncur.executemany(\"INSERT INTO sales VALUES (?, ?, ?)\", [\n    (\"営業\", \"佐藤\", 500), (\"営業\", \"鈴木\", 800), (\"開発\", \"高橋\", 300), (\"開発\", \"田中\", 600),\n])\nfor dept, name, amount, rank in cur.execute(\"\"\"\n    SELECT dept, name, amount,\n        ROW_NUMBER() OVER (PARTITION BY dept ORDER BY amount DESC) AS rnk\n    FROM sales\n    ORDER BY dept, rnk\n\"\"\"):\n    print(f\"{dept} {name}: {amount}円 ({rank}位)\")"
  },
  {
    id: "a065",
    level: "advanced",
    category: "engineering",
    title: "【SQL】ウィンドウ関数 SUM OVER（累計売上）",
    description: "sales テーブル（day, amount）が用意されています。ウィンドウ関数 SUM() OVER を使って、日付順の累計売上を計算し、「N日目: 売上X円 / 累計Y円」の形式で出力してください。\n\n期待される出力:\n1日目: 売上100円 / 累計100円\n2日目: 売上200円 / 累計300円\n3日目: 売上150円 / 累計450円\n4日目: 売上300円 / 累計750円",
    starterCode: "import sqlite3\n\nconn = sqlite3.connect(\":memory:\")\ncur = conn.cursor()\ncur.execute(\"CREATE TABLE sales (day INTEGER, amount INTEGER)\")\ncur.executemany(\"INSERT INTO sales VALUES (?, ?)\", [\n    (1, 100), (2, 200), (3, 150), (4, 300),\n])\n# SUM(amount) OVER (ORDER BY day) で累計を計算してください\n",
    expectedOutput: "1日目: 売上100円 / 累計100円\n2日目: 売上200円 / 累計300円\n3日目: 売上150円 / 累計450円\n4日目: 売上300円 / 累計750円",
    explanation: "正解例:\n\nimport sqlite3\n\nconn = sqlite3.connect(\":memory:\")\ncur = conn.cursor()\ncur.execute(\"CREATE TABLE sales (day INTEGER, amount INTEGER)\")\ncur.executemany(\"INSERT INTO sales VALUES (?, ?)\", [\n    (1, 100), (2, 200), (3, 150), (4, 300),\n])\nfor day, amount, cumulative in cur.execute('''\n    SELECT day, amount, SUM(amount) OVER (ORDER BY day) AS cumulative\n    FROM sales\n    ORDER BY day\n'''):\n    print(f\"{day}日目: 売上{amount}円 / 累計{cumulative}円\")\n\nSUM() OVER (ORDER BY day) はPARTITION BYを付けない場合、デフォルトで「先頭から現在行までの累積」を計算します（フレーム指定の既定動作）。累計売上・累計ユーザー数のような右肩上がりのKPIグラフはこの累計SUMで作られていることが多く、pandasのcumsum()と同じ結果になります。\n\nよくある間違い:\n・ORDER BY day を忘れると累計の順序が保証されない\n・SUM(amount) だけを書いてOVER句を忘れ、GROUP BYなしの単純な全体合計になってしまう",
    hint: "SUM(amount) OVER (ORDER BY day) AS cumulative をSELECTに追加します。",
    answerCode: "import sqlite3\n\nconn = sqlite3.connect(\":memory:\")\ncur = conn.cursor()\ncur.execute(\"CREATE TABLE sales (day INTEGER, amount INTEGER)\")\ncur.executemany(\"INSERT INTO sales VALUES (?, ?)\", [\n    (1, 100), (2, 200), (3, 150), (4, 300),\n])\nfor day, amount, cumulative in cur.execute(\"\"\"\n    SELECT day, amount, SUM(amount) OVER (ORDER BY day) AS cumulative\n    FROM sales\n    ORDER BY day\n\"\"\"):\n    print(f\"{day}日目: 売上{amount}円 / 累計{cumulative}円\")"
  },
  {
    id: "a066",
    level: "advanced",
    category: "engineering",
    title: "【SQL】row_factory で結果を辞書として受け取り Python で加工",
    description: "products テーブル（name, price, stock）が用意されています。conn.row_factory = sqlite3.Row を設定し、結果を列名でアクセスできる形にした上で、Pythonの内包表記で「在庫評価額（price×stock）」を計算し、名前順に「商品名: 在庫評価額 X円」の形式で出力してください。\n\n期待される出力:\nノート: 在庫評価額 6000円\nボールペン: 在庫評価額 450円\n消しゴム: 在庫評価額 400円",
    starterCode: "import sqlite3\n\nconn = sqlite3.connect(\":memory:\")\nconn.row_factory = sqlite3.Row\ncur = conn.cursor()\ncur.execute(\"CREATE TABLE products (name TEXT, price INTEGER, stock INTEGER)\")\ncur.executemany(\"INSERT INTO products VALUES (?, ?, ?)\", [\n    (\"ノート\", 120, 50), (\"消しゴム\", 80, 5), (\"ボールペン\", 150, 3),\n])\n# fetchall() で取得し、r[\"name\"] のように列名でアクセスして加工してください\n",
    expectedOutput: "ノート: 在庫評価額 6000円\nボールペン: 在庫評価額 450円\n消しゴム: 在庫評価額 400円",
    explanation: "正解例:\n\nimport sqlite3\n\nconn = sqlite3.connect(\":memory:\")\nconn.row_factory = sqlite3.Row\ncur = conn.cursor()\ncur.execute(\"CREATE TABLE products (name TEXT, price INTEGER, stock INTEGER)\")\ncur.executemany(\"INSERT INTO products VALUES (?, ?, ?)\", [\n    (\"ノート\", 120, 50), (\"消しゴム\", 80, 5), (\"ボールペン\", 150, 3),\n])\nrows = cur.execute(\"SELECT name, price, stock FROM products ORDER BY name\").fetchall()\nrecords = [{\"name\": r[\"name\"], \"total\": r[\"price\"] * r[\"stock\"]} for r in rows]\nfor rec in records:\n    print(f\"{rec['name']}: 在庫評価額 {rec['total']}円\")\n\n通常のcur.executeの結果はタプル（位置でアクセス）ですが、conn.row_factory = sqlite3.Row を設定すると各行を列名（r[\"name\"]など）でもアクセスできるようになります。列の順序を覚える必要がなくなり、後でSELECTの列を増やしてもコードが壊れにくくなります。SQLで基礎集計をし、その後Pythonの内包表記で加工する、というのはSQL+Pythonのハイブリッドなデータ処理の典型パターンです。\n\nよくある間違い:\n・row_factoryを設定せずにr[\"name\"]と書いてTypeErrorになる\n・列名のタイプミス（KeyErrorになる。print(dict(r))で中身を確認するとよい）",
    hint: "conn.row_factory = sqlite3.Row を先に設定してから .fetchall() し、[{...} for r in rows] のように内包表記で加工します。",
    answerCode: "import sqlite3\n\nconn = sqlite3.connect(\":memory:\")\nconn.row_factory = sqlite3.Row\ncur = conn.cursor()\ncur.execute(\"CREATE TABLE products (name TEXT, price INTEGER, stock INTEGER)\")\ncur.executemany(\"INSERT INTO products VALUES (?, ?, ?)\", [\n    (\"ノート\", 120, 50), (\"消しゴム\", 80, 5), (\"ボールペン\", 150, 3),\n])\nrows = cur.execute(\"SELECT name, price, stock FROM products ORDER BY name\").fetchall()\nrecords = [{\"name\": r[\"name\"], \"total\": r[\"price\"] * r[\"stock\"]} for r in rows]\nfor rec in records:\n    print(f\"{rec['name']}: 在庫評価額 {rec['total']}円\")"
  },
  {
    id: "a067",
    level: "advanced",
    category: "engineering",
    title: "【SQL総合】SQLで集計 → Python で整形レポート",
    description: "orders テーブル（product, amount, qty）が用意されています。商品ごとの売上合計（amount×qtyの合計）と数量合計をSQLで集計し、売上が高い順に商品別レポートを出力した後、最後に全体の合計売上を出力してください。\n\n期待される出力:\n=== 売上レポート ===\nノート: 1560円（13個）\n消しゴム: 400円（5個）\nボールペン: 300円（2個）\n合計売上: 2260円",
    starterCode: "import sqlite3\n\nconn = sqlite3.connect(\":memory:\")\ncur = conn.cursor()\ncur.execute(\"CREATE TABLE orders (product TEXT, amount INTEGER, qty INTEGER)\")\ncur.executemany(\"INSERT INTO orders VALUES (?, ?, ?)\", [\n    (\"ノート\", 120, 10), (\"消しゴム\", 80, 5), (\"ノート\", 120, 3), (\"ボールペン\", 150, 2),\n])\n# SUM(amount * qty) と SUM(qty) を商品ごとにGROUP BYで集計してください\nprint(\"=== 売上レポート ===\")\n",
    expectedOutput: "=== 売上レポート ===\nノート: 1560円（13個）\n消しゴム: 400円（5個）\nボールペン: 300円（2個）\n合計売上: 2260円",
    explanation: "正解例:\n\nimport sqlite3\n\nconn = sqlite3.connect(\":memory:\")\ncur = conn.cursor()\ncur.execute(\"CREATE TABLE orders (product TEXT, amount INTEGER, qty INTEGER)\")\ncur.executemany(\"INSERT INTO orders VALUES (?, ?, ?)\", [\n    (\"ノート\", 120, 10), (\"消しゴム\", 80, 5), (\"ノート\", 120, 3), (\"ボールペン\", 150, 2),\n])\nrows = cur.execute('''\n    SELECT product, SUM(amount * qty) as total, SUM(qty) as total_qty\n    FROM orders\n    GROUP BY product\n    ORDER BY total DESC\n''').fetchall()\nprint(\"=== 売上レポート ===\")\nfor product, total, qty in rows:\n    print(f\"{product}: {total}円（{qty}個）\")\nprint(f\"合計売上: {sum(r[1] for r in rows)}円\")\n\n「集計はSQLで、整形・レポート出力はPythonで」という役割分担は実務のETL/BIレポート作成の基本形です。SQL側でGROUP BYによる重い集計を済ませてから、Python側は取得した少量の結果を見やすく整形するだけにすると、処理が速く・コードも読みやすくなります。同じ商品（ノート）が複数の注文行にまたがっていても、SUMがそれらをまとめてくれる点にも注目してください。\n\nよくある間違い:\n・GROUP BYを使わずPython側でループしながら集計しようとして遅く・複雑になる\n・合計売上をSQLのSUM(amount*qty)全体で取り直さず、Python側で再集計を書いてSQLとの二重管理になる（この解答例のようにfetchall()した結果をPython側で使い回すのがシンプル）",
    hint: "SUM(amount * qty) と SUM(qty) を GROUP BY product ORDER BY total DESC でまとめて取得し、fetchall()した結果をそのままprintループとsum()に使い回します。",
    answerCode: "import sqlite3\n\nconn = sqlite3.connect(\":memory:\")\ncur = conn.cursor()\ncur.execute(\"CREATE TABLE orders (product TEXT, amount INTEGER, qty INTEGER)\")\ncur.executemany(\"INSERT INTO orders VALUES (?, ?, ?)\", [\n    (\"ノート\", 120, 10), (\"消しゴム\", 80, 5), (\"ノート\", 120, 3), (\"ボールペン\", 150, 2),\n])\nrows = cur.execute(\"\"\"\n    SELECT product, SUM(amount * qty) as total, SUM(qty) as total_qty\n    FROM orders\n    GROUP BY product\n    ORDER BY total DESC\n\"\"\").fetchall()\nprint(\"=== 売上レポート ===\")\nfor product, total, qty in rows:\n    print(f\"{product}: {total}円（{qty}個）\")\nprint(f\"合計売上: {sum(r[1] for r in rows)}円\")"
  },
  {
    id: "i079",
    level: "intermediate",
    category: "engineering",
    title: "【正規表現】re.search で日付を探す（group の基本）",
    description: "変数 log の文章から、re.search を使って「YYYY-MM-DD」形式の日付を探し、マッチした文字列全体と、そのうち年の部分（最初のグループ）を出力してください。\n\n期待される出力:\n2026-07-01\n2026",
    starterCode: "import re\n\nlog = \"2026-07-01 にアクセスがありました\"\n# r\"(\\d{4})-(\\d{2})-(\\d{2})\" のパターンで re.search してください\n",
    expectedOutput: "2026-07-01\n2026",
    explanation: "正解例:\n\nimport re\n\nlog = \"2026-07-01 にアクセスがありました\"\nm = re.search(r\"(\\d{4})-(\\d{2})-(\\d{2})\", log)\nprint(m.group(0))\nprint(m.group(1))\n\n正規表現の丸括弧 () は「グループ」を作ります。m.group(0)（または引数なしのm.group()）はマッチした文字列全体、m.group(1)は最初の()の中身（年の4桁）です。r\"...\"はraw文字列で、バックスラッシュをエスケープなしでそのまま書くための書き方（\\dを\\\\dと二重に書かずに済みます）。\n\nよくある間違い:\n・re.search はマッチしないとNoneを返すため、いきなりm.group()すると`NoneType has no attribute`エラーになる（本問は必ずマッチする前提だが、実務ではif m:のチェックが必須）\n・m.group(1)とm.group(0)を取り違える（0が全体、1以降が各グループ）",
    hint: "re.search(r\"(\\d{4})-(\\d{2})-(\\d{2})\", log) の結果を m として、m.group(0) と m.group(1) を出力します。",
    answerCode: "import re\n\nlog = \"2026-07-01 にアクセスがありました\"\nm = re.search(r\"(\\d{4})-(\\d{2})-(\\d{2})\", log)\nprint(m.group(0))\nprint(m.group(1))"
  },
  {
    id: "i080",
    level: "intermediate",
    category: "engineering",
    title: "【正規表現】re.findall で数値をすべて抜き出す",
    description: "変数 text から re.findall を使って、含まれる数字（連続する数字のかたまり）をすべてリストとして抜き出し、そのまま出力してください。\n\n期待される出力:\n['120', '80', '500']",
    starterCode: "import re\n\ntext = \"商品A:120円 商品B:80円 商品C:500円\"\n# r\"\\d+\" のパターンで re.findall してください\n",
    expectedOutput: "['120', '80', '500']",
    explanation: "正解例:\n\nimport re\n\ntext = \"商品A:120円 商品B:80円 商品C:500円\"\nnums = re.findall(r\"\\d+\", text)\nprint(nums)\n\nre.findallは「マッチした部分文字列をすべてリストにして返す」関数です。\\d+は「数字が1文字以上連続する部分」にマッチします（+がないと1文字ずつバラバラに拾われてしまいます）。ログや文章から数値だけを抜き出して集計するのは、データエンジニアがログ解析でよく行う前処理です。\n\nよくある間違い:\n・\\d だけ（+なし）にして \"1\",\"2\",\"0\" のように1桁ずつ分解されてしまう\n・抜き出した値は文字列のままなのでint()変換を忘れて計算しようとするとTypeErrorになる（本問では文字列のまま出力するだけなので変換不要）",
    hint: "re.findall(r\"\\d+\", text) で連続した数字のかたまりをすべてリストで取得できます。",
    answerCode: "import re\n\ntext = \"商品A:120円 商品B:80円 商品C:500円\"\nnums = re.findall(r\"\\d+\", text)\nprint(nums)"
  },
  {
    id: "i081",
    level: "intermediate",
    category: "engineering",
    title: "【正規表現】re.sub で個人情報を伏せ字にする",
    description: "変数 text に含まれる電話番号（090-1234-5678のような形式）を、re.subを使って\"***-****-****\"に置き換えて出力してください。\n\n期待される出力:\n私の電話番号は***-****-****です",
    starterCode: "import re\n\ntext = \"私の電話番号は090-1234-5678です\"\n# r\"\\d{2,3}-\\d{4}-\\d{4}\" のパターンで re.sub してください\n",
    expectedOutput: "私の電話番号は***-****-****です",
    explanation: "正解例:\n\nimport re\n\ntext = \"私の電話番号は090-1234-5678です\"\nmasked = re.sub(r\"\\d{2,3}-\\d{4}-\\d{4}\", \"***-****-****\", text)\nprint(masked)\n\nre.subは「マッチした部分を指定した文字列に置き換える」関数です。re.sub(パターン, 置換後の文字列, 元の文字列)の順で引数を渡します。個人情報（電話番号・メールアドレス・クレジットカード番号など）をログや出力からマスキングする処理は、データを扱う実務で個人情報保護の観点から必須になる場面が多くあります。\n\nよくある間違い:\n・引数の順番を間違えて re.sub(元の文字列, パターン, 置換後) のように書いてしまう（正しくは パターン→置換後→元の文字列の順）\n・数字を1桁ずつ\\dで置換しようとして、ハイフンの位置がズレたパターンを書いてしまう",
    hint: "re.sub(パターン, \"***-****-****\", text) の順で引数を渡します。パターンは \\d{2,3}-\\d{4}-\\d{4} です。",
    answerCode: "import re\n\ntext = \"私の電話番号は090-1234-5678です\"\nmasked = re.sub(r\"\\d{2,3}-\\d{4}-\\d{4}\", \"***-****-****\", text)\nprint(masked)"
  },
  {
    id: "i082",
    level: "intermediate",
    category: "engineering",
    title: "【正規表現】グループ () で日付を年・月・日に分解",
    description: "変数 date_str（\"2026/07/01\"形式）から、正規表現のグループを使って年・月・日をそれぞれ取り出し、以下の形式で出力してください。\n\n期待される出力:\n年: 2026\n月: 07\n日: 01",
    starterCode: "import re\n\ndate_str = \"2026/07/01\"\n# r\"(\\d{4})/(\\d{2})/(\\d{2})\" のパターンで re.search し、m.groups() を使ってください\n",
    expectedOutput: "年: 2026\n月: 07\n日: 01",
    explanation: "正解例:\n\nimport re\n\ndate_str = \"2026/07/01\"\nm = re.search(r\"(\\d{4})/(\\d{2})/(\\d{2})\", date_str)\nyear, month, day = m.groups()\nprint(f\"年: {year}\")\nprint(f\"月: {month}\")\nprint(f\"日: {day}\")\n\nm.groups()は「すべてのグループをタプルにまとめて返す」メソッドです。グループが3つあれば3要素のタプルになるので、m.group(1), m.group(2), m.group(3)と1つずつ書かなくても、year, month, day = m.groups()のように一度にアンパックできます。日付文字列を年月日に分解する処理は、CSVの日付列を扱うときの前処理としてよく登場します。\n\nよくある間違い:\n・m.groups()（複数形・タプルを返す）とm.group()（単数形・1つの値を返す）を混同する\n・アンパックする変数の数とグループの数が合わずValueErrorになる",
    hint: "m = re.search(パターン, date_str) の後、year, month, day = m.groups() でまとめて取り出せます。",
    answerCode: "import re\n\ndate_str = \"2026/07/01\"\nm = re.search(r\"(\\d{4})/(\\d{2})/(\\d{2})\", date_str)\nyear, month, day = m.groups()\nprint(f\"年: {year}\")\nprint(f\"月: {month}\")\nprint(f\"日: {day}\")"
  },
  {
    id: "i083",
    level: "intermediate",
    category: "engineering",
    title: "【正規表現】re.split で複数の区切り文字を一度に処理",
    description: "変数 text は、カンマ・セミコロン・全角読点・空白のいずれかで区切られた文字列です。re.splitを使って一度にすべての区切り文字で分割し、リストとして出力してください。\n\n期待される出力:\n['りんご', 'バナナ', 'みかん', 'ぶどう']",
    starterCode: "import re\n\ntext = \"りんご,バナナ;みかん 、ぶどう\"\n# r\"[,;、\\s]+\" のパターンで re.split してください\n",
    expectedOutput: "['りんご', 'バナナ', 'みかん', 'ぶどう']",
    explanation: "正解例:\n\nimport re\n\ntext = \"りんご,バナナ;みかん 、ぶどう\"\nitems = re.split(r\"[,;、\\s]+\", text)\nprint(items)\n\nPythonの文字列メソッドsplit()は1種類の区切り文字しか指定できませんが、re.splitなら文字クラス[...]を使って複数の区切り文字を一度に指定できます。[,;、\\s]は「カンマ・セミコロン・全角読点・空白文字のいずれか」という意味で、+を付けることで区切り文字が連続していても1回の区切りとして扱われます。表記ゆれのあるテキストデータのクレンジングでよく使うテクニックです。\n\nよくある間違い:\n・+を付け忘れて、区切り文字が連続する部分に空文字列''がリストに混ざってしまう\n・文字クラス内の、（全角読点）を書き忘れ、全角の区切りだけ分割されずに残ってしまう",
    hint: "re.split(r\"[,;、\\s]+\", text) のように、文字クラス[...]に区切り文字を並べ、+を付けます。",
    answerCode: "import re\n\ntext = \"りんご,バナナ;みかん 、ぶどう\"\nitems = re.split(r\"[,;、\\s]+\", text)\nprint(items)"
  },
  {
    id: "a068",
    level: "advanced",
    category: "engineering",
    title: "【正規表現】名前付きグループでログをパース（(?P<name>...)）",
    description: "変数 log（\"日付 時刻 レベル メッセージ\"形式の1行ログ）を、名前付きグループ (?P<name>...) を使ってパースし、日付・レベル・メッセージを取り出して出力してください。\n\n期待される出力:\n2026-07-01\nERROR\n接続に失敗しました",
    starterCode: "import re\n\nlog = \"2026-07-01 12:30:00 ERROR 接続に失敗しました\"\n# (?P<date>...) (?P<time>...) (?P<level>...) (?P<message>...) の名前付きグループを使ってください\n",
    expectedOutput: "2026-07-01\nERROR\n接続に失敗しました",
    explanation: "正解例:\n\nimport re\n\nlog = \"2026-07-01 12:30:00 ERROR 接続に失敗しました\"\nm = re.match(r\"(?P<date>\\d{4}-\\d{2}-\\d{2}) (?P<time>\\d{2}:\\d{2}:\\d{2}) (?P<level>\\w+) (?P<message>.+)\", log)\nprint(m.group(\"date\"))\nprint(m.group(\"level\"))\nprint(m.group(\"message\"))\n\n(?P<名前>パターン)は「グループに名前を付ける」書き方です。通常のグループは番号（m.group(1)など）でしかアクセスできませんが、名前付きグループならm.group(\"date\")のように意味のわかる名前でアクセスできます。ログの列が増えたときも、番号がズレる心配がなく可読性が高いため、実務のログパーサーでよく使われます。\n\nよくある間違い:\n・(?P<name>...)の山括弧やクエスチョンマークを書き忘れて普通のグループになってしまう\n・.+ は改行以外の任意の文字にマッチするため、貪欲にマッチしすぎることがある（今回は1行だけなので問題なし）",
    hint: "(?P<date>...) のように山括弧付きで名前を付け、m.group(\"date\") のように文字列でアクセスします。",
    answerCode: "import re\n\nlog = \"2026-07-01 12:30:00 ERROR 接続に失敗しました\"\nm = re.match(r\"(?P<date>\\d{4}-\\d{2}-\\d{2}) (?P<time>\\d{2}:\\d{2}:\\d{2}) (?P<level>\\w+) (?P<message>.+)\", log)\nprint(m.group(\"date\"))\nprint(m.group(\"level\"))\nprint(m.group(\"message\"))"
  },
  {
    id: "a069",
    level: "advanced",
    category: "engineering",
    title: "【正規表現】fullmatch で入力バリデーション",
    description: "リスト codes の各要素が「アルファベット1文字＋数字4桁」（例: A1234）の形式かどうかを re.fullmatch を使って判定し、「コード: OK」または「コード: NG」の形式で出力してください。\n\n期待される出力:\nA1234: OK\nB12: NG\n12345: NG\nC6789: OK",
    starterCode: "import re\n\ncodes = [\"A1234\", \"B12\", \"12345\", \"C6789\"]\npattern = re.compile(r\"[A-Z]\\d{4}\")\n# pattern.fullmatch(code) で文字列全体が一致するか判定してください\n",
    expectedOutput: "A1234: OK\nB12: NG\n12345: NG\nC6789: OK",
    explanation: "正解例:\n\nimport re\n\ncodes = [\"A1234\", \"B12\", \"12345\", \"C6789\"]\npattern = re.compile(r\"[A-Z]\\d{4}\")\nfor code in codes:\n    if pattern.fullmatch(code):\n        print(f\"{code}: OK\")\n    else:\n        print(f\"{code}: NG\")\n\nre.searchやre.matchは「文字列の一部分がパターンに一致すればOK」ですが、re.fullmatch（またはpattern.fullmatch）は「文字列全体がパターンに完全に一致する場合だけ」マッチします。入力フォームのバリデーション（郵便番号・商品コードなど、決まった形式かどうかのチェック）では、部分一致ではなく完全一致で判定する必要があるため、fullmatchが適しています。\n\nよくある間違い:\n・re.searchを使ってしまい、\"B12345678\"のように余分な文字が付いていても部分一致でOKになってしまう\n・re.compile()した結果（pattern）にfullmatchを呼ぶのを忘れ、re.fullmatch(パターン文字列, code)の形と混同する（どちらの書き方も可能だが、本問はpattern.fullmatch(code)の形）",
    hint: "pattern.fullmatch(code) がNoneでなければOK、Noneならngです。fullmatchは文字列全体が一致するかを見ます。",
    answerCode: "import re\n\ncodes = [\"A1234\", \"B12\", \"12345\", \"C6789\"]\npattern = re.compile(r\"[A-Z]\\d{4}\")\nfor code in codes:\n    if pattern.fullmatch(code):\n        print(f\"{code}: OK\")\n    else:\n        print(f\"{code}: NG\")"
  },
  {
    id: "a070",
    level: "advanced",
    category: "engineering",
    title: "【正規表現】ログからERROR行を抽出して件数集計（re + Counter）",
    description: "複数行の文字列 logs から、\"ERROR\"を含む行だけを抽出し、日付部分を取り除いたメッセージ本文ごとに件数を集計して、件数が多い順に「メッセージ: N件」の形式で出力してください。\n\n期待される出力:\n接続に失敗しました: 2件\nタイムアウトしました: 1件",
    starterCode: "import re\nfrom collections import Counter\n\nlogs = \"\"\"2026-07-01 INFO 起動しました\n2026-07-01 ERROR 接続に失敗しました\n2026-07-01 ERROR タイムアウトしました\n2026-07-01 INFO 処理を開始します\n2026-07-01 ERROR 接続に失敗しました\"\"\"\n# 1) ERRORを含む行だけ抽出 2) 日付+ERROR部分をre.subで除去 3) Counterで集計してください\n",
    expectedOutput: "接続に失敗しました: 2件\nタイムアウトしました: 1件",
    explanation: "正解例:\n\nimport re\nfrom collections import Counter\n\nlogs = \"\"\"2026-07-01 INFO 起動しました\n2026-07-01 ERROR 接続に失敗しました\n2026-07-01 ERROR タイムアウトしました\n2026-07-01 INFO 処理を開始します\n2026-07-01 ERROR 接続に失敗しました\"\"\"\n\nerrors = [line for line in logs.split(\"\\n\") if re.search(r\"ERROR\", line)]\nmessages = [re.sub(r\"^\\d{4}-\\d{2}-\\d{2} ERROR \", \"\", line) for line in errors]\ncounter = Counter(messages)\nfor msg, count in counter.most_common():\n    print(f\"{msg}: {count}件\")\n\nログ解析は「1行ずつ絞り込み（re.search）→ 不要な部分を除去（re.sub）→ 件数を集計（Counter）」という3段階の処理を組み合わせるのが定番です。^\\d{4}-\\d{2}-\\d{2} ERROR の^は「行の先頭から」を意味し、日付とERRORの部分だけを空文字列に置き換えることでメッセージ本文だけを残しています。Counter.most_common()は件数が多い順に自動で並べ替えてくれます。\n\nよくある間違い:\n・re.subのパターンに^を付け忘れ、メッセージの途中に偶然同じ文字列があると意図しない箇所も消えてしまう\n・Counter()に渡す前にメッセージを完全一致する形に揃えておかないと、同じ内容でも別々にカウントされてしまう（今回は日付を除去することでこれを防いでいる）",
    hint: "1) re.searchでERROR行を絞り込む 2) re.subで先頭の日付+ERROR部分を除去する 3) Counter(messages).most_common() で集計します。",
    answerCode: "import re\nfrom collections import Counter\n\nlogs = \"\"\"2026-07-01 INFO 起動しました\n2026-07-01 ERROR 接続に失敗しました\n2026-07-01 ERROR タイムアウトしました\n2026-07-01 INFO 処理を開始します\n2026-07-01 ERROR 接続に失敗しました\"\"\"\nerrors = [line for line in logs.split(\"\\n\") if re.search(r\"ERROR\", line)]\nmessages = [re.sub(r\"^\\d{4}-\\d{2}-\\d{2} ERROR \", \"\", line) for line in errors]\ncounter = Counter(messages)\nfor msg, count in counter.most_common():\n    print(f\"{msg}: {count}件\")"
  },
  {
    id: "a071",
    level: "advanced",
    category: "engineering",
    title: "【正規表現総合】アクセスログをパースしてステータス別集計",
    description: "複数行の文字列 access_log（簡易的なWebアクセスログ）から、各行末尾のHTTPステータスコード（3桁の数字）を正規表現で取り出し、Counterでステータスコードごとに集計して、コードが小さい順に「ステータス: N件」の形式で出力してください。\n\n期待される出力:\n200: 3件\n404: 1件\n500: 1件",
    starterCode: "import re\nfrom collections import Counter\n\naccess_log = \"\"\"192.168.1.1 - - [01/Jul/2026] \"GET /index.html\" 200\n192.168.1.2 - - [01/Jul/2026] \"GET /about.html\" 200\n192.168.1.3 - - [01/Jul/2026] \"GET /missing.html\" 404\n192.168.1.1 - - [01/Jul/2026] \"POST /login\" 500\n192.168.1.4 - - [01/Jul/2026] \"GET /index.html\" 200\"\"\"\n# r'\"\\w+ \\S+\" (\\d{3})' のパターンで re.findall し、Counterで集計してください\n",
    expectedOutput: "200: 3件\n404: 1件\n500: 1件",
    explanation: "正解例:\n\nimport re\nfrom collections import Counter\n\naccess_log = \"\"\"192.168.1.1 - - [01/Jul/2026] \"GET /index.html\" 200\n192.168.1.2 - - [01/Jul/2026] \"GET /about.html\" 200\n192.168.1.3 - - [01/Jul/2026] \"GET /missing.html\" 404\n192.168.1.1 - - [01/Jul/2026] \"POST /login\" 500\n192.168.1.4 - - [01/Jul/2026] \"GET /index.html\" 200\"\"\"\n\nstatuses = re.findall(r'\"\\w+ \\S+\" (\\d{3})', access_log)\ncounter = Counter(statuses)\nfor status, count in sorted(counter.items()):\n    print(f\"{status}: {count}件\")\n\nこれまで学んだfindall・グループ・Counterを組み合わせた総合問題です。\"\\w+ \\S+\" の部分でクォート内の「メソッド名+パス」（例: \"GET /index.html\"）にマッチさせ、その直後の3桁の数字をグループ()で捉えてfindallすると、ステータスコードだけのリストが得られます。sorted(counter.items())で文字列のまま昇順ソートしても、3桁の数字文字列は辞書順と数値順が一致するため問題なく並びます。アクセスログのステータス別集計は、Webサービスの障害調査（5xxエラーの急増検知など）の第一歩です。\n\nよくある間違い:\n・パターンの3桁部分を()で囲み忘れ、findallの結果が文字列全体（\"GET /index.html\" 200のようなタプルや別の形）になってしまう\n・sortedを忘れてCounterの内部順（出現順に近い順序）のまま出力し、順序が期待値とずれる",
    hint: "r'\"\\w+ \\S+\" (\\d{3})' で「クォート内+その後の3桁」にマッチさせ、3桁部分だけグループにしてfindallします。集計後はsorted()で並べ替えます。",
    answerCode: "import re\nfrom collections import Counter\n\naccess_log = \"\"\"192.168.1.1 - - [01/Jul/2026] \"GET /index.html\" 200\n192.168.1.2 - - [01/Jul/2026] \"GET /about.html\" 200\n192.168.1.3 - - [01/Jul/2026] \"GET /missing.html\" 404\n192.168.1.1 - - [01/Jul/2026] \"POST /login\" 500\n192.168.1.4 - - [01/Jul/2026] \"GET /index.html\" 200\"\"\"\nstatuses = re.findall(r'\"\\w+ \\S+\" (\\d{3})', access_log)\ncounter = Counter(statuses)\nfor status, count in sorted(counter.items()):\n    print(f\"{status}: {count}件\")"
  },
];
