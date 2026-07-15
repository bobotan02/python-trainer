# SYSTEM_DOC.md — Python トレーナー

最終更新: 2026-07-07（TASK-013）

## 1. プロジェクト概要

ブラウザ完結型のPython学習ツールです。Pyodide（ブラウザ内で動作するPythonランタイム）を使い、ユーザーが書いたPythonコードをブラウザ内のサンドボックスで実行して、その標準出力を問題ごとの期待出力と文字列比較することで正誤判定を行います。サーバーサイド処理・外部API・認証機能は一切なく、`index.html` をブラウザで開くだけで動作します（Pyodide本体のみCDNから取得するため、インターネット接続は必要です）。

主な機能:

- **問題演習**: 全202問（難易度3段階 × カテゴリ3種・フィルタ付き）。No.1 から順番に出題され、ランダム出題ボタンも併設。コードを実行して標準出力の完全一致で自動判定。フィルタ内の最後の問題で「次の問題」を押すと完走祝福画面を表示
- **学習進捗の保存**: 正解した問題・最後に表示していた問題をブラウザのlocalStorageに保存し、次回起動時にその続きから再開する（7節参照）
- **問題一覧パネル**: 全問題のタイトル一覧から任意の問題に直接ジャンプできる（解答済み問題には✅マーク。進捗管理・苦手テーマへの集中用）
- **Python基礎リファレンス**: タブ切り替えで参照できる15セクション＋pandas参考の文法リファレンス（目次から各セクションへジャンプ可能）
- **ステップ実行**: 入力したPythonコードを1行ずつ実行し、現在行・変数の変化（差分ハイライト）・print出力を段階的に確認できる学習支援機能
- **隠しコマンド2種**: 息抜き用のイースターエッグ（猫コマンド・Konami Code）

## 2. ファイル構成

```
~/TASK-001(PythonStudy)/
├── CLAUDE.md           # PMルール・プロジェクト規約（セッション開始時に自動読み込み）
├── TASK_LOG.md         # タスク完了記録（次テーマ移行後も継続追記）
└── python-trainer/     # 成果物本体（公開対象はこのフォルダの中身）
    ├── index.html      # メインアプリ（UI・Pyodide読み込み・実行・正誤判定・リファレンス）
    ├── problems.js     # 問題データのみ（const PROBLEMS の定義。ロジックなし）
    ├── .gitignore      # Web開発標準＋センシティブ情報の除外設定
    └── SYSTEM_DOC.md   # 本ドキュメント
```

## 3. 技術スタック

| 項目 | 内容 |
|------|------|
| Python実行環境 | Pyodide **0.28.3**（cdn.jsdelivr.net からCDN読み込み） |
| フロントエンド | 素のHTML / CSS / JavaScript（フレームワーク・ビルドツール不使用） |
| コードエディタ | `<textarea>`（外部エディタライブラリ不使用。Tab/Shift+Tabでインデント増減、Ctrl+/でコメントトグル、Enterで自動インデント、Ctrl+Enterで実行に対応。TASK-017で行番号ガター追加・折り返しなし`wrap="off"`、TASK-019bでキー操作を拡充） |
| 外部依存 | Pyodide CDNのみ。npmパッケージ・その他CDNは不使用 |

Pyodideの読み込みURL:
```
https://cdn.jsdelivr.net/pyodide/v0.28.3/full/pyodide.js
```

⚠️ **cdnjs.cloudflare.com は使用禁止**。pyodide.js 本体はあるものの、実行時に必要な `pyodide-lock.json`（404）等が欠落しており、初期化が必ず失敗します（TASK-001で確認・修正済み。詳細は「12. 修正履歴」）。

**追加パッケージの遅延ロード（`ensurePackages(src)`、TASK-013で追加・TASK-015でpandas/numpy対応を追加）**: Pyodideは起動時に全モジュールを同梱しているわけではなく、一部（`sqlite3`・`pandas`など）は「unvendored」（初期同梱されない）扱いで、`pyodide.loadPackage([...])`による明示的な取得が必要です。実行直前に正規表現でコードを検査し、`import sqlite3`を検出すると`loadPackage(["sqlite3"])`、`import pandas`または`import numpy`を検出すると`loadPackage(["pandas"])`（pandasをロードすればnumpy・python-dateutil・pytzは依存として自動で入るため、numpy単体のimportでもpandasを取得する）を、未ロード時のみ実行してからユーザーコードを実行する仕組みを、問題タブ（`runCode()`）とステップ実行タブの両方に実装しています。読み込み中はステータスバーに「📦 sqlite3・pandas を読み込んでいます…」のように必要なパッケージ名を表示します（初回のみ・約15MB。以後はブラウザキャッシュ）。`re`は真のPython組み込みモジュールのため、この仕組みは不要です。検出正規表現はコメント行（`# import pandas`）を誤検出しません（`^\s*`が行頭の`#`を許容しないため。Node.jsでのユニット検証済み）。`import`を含まないコードの実行経路（`ensurePackages`が`needed.length === 0`で即returnする分岐）は無変更です。`init()`（起動時のPyodide初期化）はpandas/sqlite3のいずれもロードしません。

## 4. 動作確認状況

### 実ブラウザで確認済み（2026-06-11、ユーザーによる確認）

- Pyodideの読み込み・起動（jsDelivr変更後）
- コードの実行と不正解判定の表示
- 不正解時に解説がデフォルトで折りたたまれていること

### 実ブラウザで確認済み（2026-07-07、ユーザーによる確認・TASK-012）

- 正解時の進捗表示（解答済みX/150）の更新・問題一覧パネルの✅マーク表示
- リロード後の進捗・表示中問題の復元
- フィルタ状態を含めたリロード復元
- 問題一覧パネルの「進捗をリセット」ボタン
- 既存機能（完走祝福画面・🎲ランダム・フィルタAND絞り込み・隠しコマンド2種）が壊れていないこと
- （発見・修正済み）フィルタ切替で該当0件になった場合、「このフィルタ内」の進捗表示が直前のフィルタの値のまま残る不具合。`setupFilterRow`のクリックハンドラで`updateProgressUI()`を無条件に呼ぶよう修正し解消（修正後の再確認は次回起動時にユーザーが実施予定）

### 実ブラウザで確認済み（2026-07-07、ユーザーによる確認・TASK-014/TASK-015）

- リファレンスタブ「12. 正規表現（re）」の表示・コード例
- pandas/numpyの遅延ロード（問題タブ・ステップ実行タブの両方で`import pandas`を含むコードを実行し、初回ロード・出力・変数トレースが正しく動作することを確認）

### 実ブラウザで確認済み（2026-07-12〜13、ユーザーによる確認・TASK-019〜021）

- 正解時のスケールポップ演出が「軽くぽよんとなる」程度の控えめな動きであること（2026-07-12、ローカルHTTPサーバー経由で確認）
- マイルストーン称号のトースト表示（10問正解の閾値到達時に称号が表示されることを確認。2026-07-12）
- TASK-019〜021で追加したその他の主要機能（ストリーク表示・進捗マップ・エディタのCtrl+/等のキー操作・問題一覧のキーワード検索・ブックマーク・不正解時のdiffノート・進捗エクスポート/インポート）を2026-07-13までにユーザーが一通り確認し、問題なし（ユーザー報告による）
- 進捗リセット時にブックマークが保持されること（**TASK-020の仕様通りの挙動**。リセット対象は`solved`・`activity`・`last`のみで、ブックマーク＝苦手マークは意図的に持ち越す設計。確認ダイアログにも保持される旨を明記済み）

### 実ブラウザで確認済み（2026-07-15、ユーザーによる確認・TASK-023）

- リファレンスタブの折りたたみ動作（16セクションの開閉・目次パネルの「すべて開く」「すべて閉じる」ボタン・目次リンクからのジャンプで対象セクションが開いてスクロールすること）をローカルHTTPサーバー経由で確認、問題なし

### 実ブラウザで確認済み（2026-07-16、ユーザーによる確認・TASK-022/TASK-024）

- TASK-022で追加したdatetime・collections/itertools問題10問（No.193〜202 = i093〜i098・a080〜a083）すべてで、starterCodeのまま実行→不正解、正解例入力→✅正解の流れが問題なく動作することをローカルHTTPサーバー経由で確認
- TASK-024の関連リファレンスリンクチップ: 純粋な文法問題（No.23 = i002）ではチップが非表示になること、SQL・正規表現・pandas等を使う問題ではチップが表示されクリックでリファレンスタブの該当セクションへジャンプすることを確認

### 実ブラウザで未確認（未実施）

- タブ切り替え（📝 問題 ↔ 📖 リファレンス）の動作
- リファレンスタブの表示崩れの有無
- 問題一覧パネルの開閉・ジャンプ・ハイライトの詳細動作
- 隠しコマンド2種（猫コマンド・Konami Code）の詳細動作
- ブラウザコンソールエラーの網羅的な確認
- 全150問の通し実行・正解判定
- 順番遷移・通し番号表示（TASK-005で追加）
- TASK-006で追加した100問（engineering 45問・practice 35問・foundation 20問）の実ブラウザでの表示・判定
- localStorageが使えない環境（プライベートブラウジング等）での実際の挙動
- TASK-013で追加したSQL・正規表現25問のうち、実ブラウザで確認済みなのはNo.151・153（SQL）・No.170・174（正規表現）の4問のみ。残り21問の網羅的な確認は未実施
- TASK-016で追加したpandas問題12問（i084〜i090・a072〜a076）の実ブラウザでの表示・判定
- TASK-018で追加したDE実務問題5問（a077・i091・a078・i092・a079）の実ブラウザでの表示・判定。特にi092→a079の順に連続実行してファイル名衝突の修正が実際に効いているかの確認
- TASK-019〜021の機能のうち、細部の網羅的な確認（`prefers-reduced-motion`環境での演出無効化・localStorage不可環境でのフォールバック・不正な進捗ファイルのインポート拒否・エクスポートしたファイルの別ブラウザでの読み込みなど。主要機能の確認は2026-07-12〜13に実施済み、上記参照）
- TASK-023の折りたたみのうち、summary内h3の見た目の細部（三角マーカーの位置・色・レスポンシブ表示時の崩れの有無）とFirefox/SafariでのCtrl+F検索時の挙動（折りたたみ動作そのものは確認済み。上記参照）

### 実装時に行った機械的検証

- `problems.js` および `index.html` 内JavaScriptの構文チェック（Node.jsによる。TASK-006の変更後にも再実施し合格）
- 全50問について、解説に記載した正解例コードをPython 3で実行し、出力が `expectedOutput` と一致することを確認（50問すべて一致。TASK-002時点）
- TASK-006で追加した100問すべてについて、正解例コードをPython 3（/tmp上の検証ハーネス）で実行し、出力が `expectedOutput` と完全一致することを確認（100/100一致。2026-06-11実施）
- 全150問について、必須フィールド9項目（id・level・category・title・description・starterCode・expectedOutput・explanation・hint）の存在・id重複なし・category/levelの値の正当性をNode.jsスクリプトで機械検証（2026-06-11実施）
- **TASK-012**: `loadProgress()`/`saveProgress()` のロジックをNode.js上でlocalStorageモックを使い検証（初回空・保存後の再読込一致・壊れたJSONのフォールバック・localStorage例外時のフォールバック・未知problemIdの扱いをすべて確認。2026-07-06実施）。DOM操作を伴う実ブラウザ相当の検証はできないため、実ブラウザ確認は未実施として本節に明記
- **TASK-019**: `index.html`から該当関数（`loadProgress`・`deriveActivityFromSolved`・`calcStreak`・`achievedMilestones`・`nextMilestoneNote`・`checkMilestones`・`markSolved`等）をNode.jsスクリプトで抽出し、localStorage/`PROBLEMS`/DOM依存箇所（`updateProgressUI`・`showMilestoneBanner`）をモックした上で20項目をユニット検証（`activity`の初回空・旧データ移行・壊れたJSON・正解時の加算/解き直しでの加算・ストリーク4ケース＝連続あり/今日未学習でも継続/途切れ/空白日あり・マイルストーン閾値判定＝件数10問到達/カテゴリ制覇/全問制覇、全て2026-07-12実施・全PASS）。DOM描画（`renderMilestones`・`renderProgressMap`）はソースレビューのみで実ブラウザ確認は未実施
- **TASK-019b**: `index.html`から`lineRangeOf`・`toggleComment`・`dedentSelection`・`autoIndentOnEnter`をNode.jsスクリプトで抽出し、`textarea`のモックオブジェクトで15項目をユニット検証（単一行/複数行のコメント化・解除・空行スキップ、インデント解除の各パターン、自動インデントの通常行/コロン終端/選択範囲の置換。全て2026-07-12実施・全PASS）
- **TASK-020**: `index.html`から`matchesSearch`・`panelFilteredProblems`・`filteredProblems`・`loadProgress`等をNode.jsスクリプトで抽出し、`PROBLEMS`/`progress`をモックした上で16項目をユニット検証（検索語のタイトル・問題文・通し番号（「1」「No.1」）一致と大文字小文字非区別、難易度×カテゴリ×検索×⭐のみ表示のAND絞り込み・0件になるケース、`bookmarks`の初回空・旧データ（キーなし）フォールバック・保存済み値の読み込み。全て2026-07-12実施・全PASS）。`fetch`/`XMLHttpRequest`/`WebSocket`/`sendBeacon`が追加されていないことをgrepで確認
- **TASK-021**: `index.html`から`computeOutputDiff`・`validateImportPayload`・`buildProgressFromImport`・`normalizeOutput`等をNode.jsスクリプトで抽出し17項目をユニット検証（diff: 完全一致/1行目・中間行の不一致/行数不足/行数過多/改行コードと末尾空白の差異は無視、インポート検証: 正常/null/空オブジェクト/app名不一致/progress欠落/solved型不正/未知のproblemIdは許容、インポート反映: 全フィールドありのケースとlast・activity・bookmarksが欠けた場合のフォールバック。全て2026-07-13実施・全PASS）。判定ロジック本体（`normalizeOutput`・一致判定の行）に`git diff`で差分がないことを確認。`fetch`/`XMLHttpRequest`/`WebSocket`/`sendBeacon`が追加されていないことをgrepで確認
- **TASK-022**: 追加した10問すべての正解例（`answerCode`と同一コード）をPython3で実行し`expectedOutput`と完全一致を確認（10/10。2026-07-14実施）。全202問についてanswerCode単体実行監査を実施（190/202 PASS。NGの12件はi084〜i090・a072〜a076のpandas問題で、システムPython3にpandasが未導入のため実行できないだけの既知の制限＝TASK-016で確立済み。今回追加した10問はすべてPASSに含まれる）。全202問のフィールド機械検証（id重複なし・必須フィールド欠損なし・level/categoryの値の正当性）合格。`datetime.now()`・`date.today()`を含む問題が1問もないことをgrepで確認。`node --check problems.js`合格。`git diff`でproblems.jsが末尾追記のみ（既存192問への変更なし）であることを確認

- **TASK-024**: `index.html`から`REF_LINK_RULES`・`detectRefLinks`をNode.jsスクリプトで抽出し8項目をユニット検証（sqlite3/re/pandas単体・datetime+collections複合・importなし/コメント行のreのみの誤検出なし・json/csv・itertools単体、全て2026-07-16実施・全PASS）。`node --check`（index.html内JS抽出）合格。`<div>`/`<details>`/`<summary>`タグの開閉数一致を確認。`git diff`でproblems.jsに差分がないことを確認（`index.html`のみ変更）

※ 検証環境はWSL2（GUIブラウザなし）のため、実ブラウザ確認はユーザーが手元で行う運用です。変更直後の確認時はブラウザキャッシュに注意（スーパーリロード Ctrl+F5 を推奨）。

## 5. ローカルでの起動方法

### 方法A: ファイルを直接開く

1. `python-trainer` フォルダを任意の場所に置く
2. `index.html` をダブルクリック（またはブラウザにドラッグ＆ドロップ）して開く
3. 「Python実行環境（Pyodide）を読み込んでいます…」の表示が消えるまで待つ（初回は約10MBのダウンロードが発生）
4. ステータスバーに「✔ Python実行環境の準備ができました」と表示されたら利用開始

### 方法B: ローカルHTTPサーバー経由（方法Aで動作しない場合に確実）

1. ターミナルで `python-trainer` フォルダに移動する
   ```bash
   cd python-trainer
   ```
2. Pythonの簡易サーバーを起動する
   ```bash
   python3 -m http.server 8000
   ```
3. ブラウザで `http://localhost:8000/` を開く

## 6. 画面構成とUIの挙動

画面上部のタブで3つのモードを切り替えます。タブはDOMの表示切り替えのみのため、行き来してもエディタの内容や実行結果は保持されます。

### 📝 問題タブ

- **出題順**: 起動時は No.1 から開始。問題タイトルには全レベルを通した通し番号（`PROBLEMS` 配列の並び順で1始まり。例「No.16 偶数だけを取り出す」）を表示
- **難易度フィルタ**: 全て / beginner / intermediate / advanced で出題対象を絞り込み。フィルタを切り替えると、そのレベルの最初の問題から順番に進む
- **問題エリア**: 難易度バッジ・通し番号付きタイトル・問題文・ヒント（折りたたみ。hint がない問題では非表示）。タイトル横に⭐/☆のブックマークトグルボタン（TASK-020。詳細は7節参照）
- **関連リファレンスへのリンク（TASK-024）**: 問題文の下・ヒントの上に「📖 関連リファレンス: 〇〇」のチップを表示。`starterCode`＋`answerCode`をimport文で走査し（`ensurePackages()`と同じ行頭アンカーの正規表現。コメント行は誤検出しない）、sqlite3→11節・re→12節・datetime→13節・collections/itertools→14節・json/csv→15節・pandas/numpy→16節に対応するチップを問題ごとに動的生成する。複数モジュールをimportする問題では複数チップが並ぶ。該当モジュールがない問題（純粋な文法問題等）ではチップ欄自体が非表示になる。クリックすると📖リファレンスタブへ切り替わり、`openRefSection()`（TASK-023で追加）で対象セクションを開いてスクロールする。`problems.js`は無変更（新フィールドは追加していない）。foundation系トピック（if文・リスト等）への曖昧なキーワードマッピングは誤リンク防止のため対象外
- **エディタ**: Tabキーで4スペース挿入・Shift+Tabでインデント解除、Ctrl+/（Cmd+/）で選択行のコメントトグル（`#`の付け外し。インデントは保持）、Enterで直前行のインデントを引き継ぐ自動インデント（直前行が`:`で終わる場合はさらに4スペース追加）、Ctrl+Enter（macはCmd+Enter）で実行（TASK-019bでTab以外のキー操作を追加。問題タブ・ステップ実行タブの両エディタで共通の`handleEditorKeydown()`を使用）。左側に行番号ガター（TASK-017。折り返しなし`wrap="off"`のため「1論理行=1表示行」が保証され行番号がズレない。入力・スクロールに追従）。実行中は▶実行ボタンが「⏳ 実行中…」表示になる
- **ボタン**: ▶ 実行 / コードをリセット（starterCodeに戻す）/ 次の問題（フィルタ内で次の番号へ順番に進む）/ 🎲 ランダム（フィルタ内からランダム。対象が2問以上ある場合は直前と同じ問題は出題しない）
- **完走祝福画面**: フィルタ内の最後の問題で「次の問題」を押すと、完走をたたえるオーバーレイ（🎉 コンプリート！）を表示。「最初の問題に戻る →」ボタンでフィルタ内の最初の問題に戻る
- **判定表示**:
  - 正解 → 「✅ 正解！」（TASK-019でバナーに一度だけの控えめなスケールポップアニメーション`correct-pop`を追加。`prefers-reduced-motion: reduce`環境では無効化）
  - 不正解 → 「❌ 不正解」＋期待される出力を表示。**出力diffノート（TASK-021）**: 「期待される出力」の上に、`normalizeOutput()`適用後の期待出力と実際の出力を行単位で比較した結果を1件表示する。最初に異なる行があれば「N行目が期待と異なります」＋期待値/実際値、実際の出力の方が短ければ「N行目以降が不足しています」、長ければ「期待より行数が多いです（N行目以降が余分）」。判定ロジック（`normalizeOutput`・一致判定）そのものは変更していない
  - Python例外 → 「⚠️ エラー」＋エラーメッセージを出力欄に表示
  - **解説（📘）はどの判定でも折りたたみ状態で表示される**（クリックで展開。TASK-002で不正解・エラー時の自動展開を廃止）
  - **エラー解説（📖 このエラーを読む）はエラー時のみ表示**（14パターンの正規表現で例外種別・変数名・型名を特定し日本語解説を生成。マッチしない場合は非表示）
- **継続の仕組み（TASK-019）**: カテゴリフィルタ下の進捗表示の下に「🔥連続N日」（学習ストリーク。今日未学習でも昨日まで連続していれば継続中として表示し「今日解けば継続！」を添える）と、獲得済みマイルストーン称号の一覧・次の節目までの残数を表示。詳細は7節参照

### 📋 問題一覧パネル

タブバー右端の「📋 問題一覧」ボタンで開く、右からスライドインするサイドパネル（オーバーレイ表示のため既存レイアウトには影響しない）。

- **進捗マップ（TASK-019）**: パネル上部に難易度3×カテゴリ3のグリッドを表示。各セルは「解答済み/総数」（該当0問のセルは「—」）。達成率に応じて背景色を塗り分け（全問解答=緑系・一部解答=黄系・未着手=通常背景）。パネルを開くたび、または進捗リセット時に再描画（`PROBLEMS`と`progress.solved`から毎回計算。永続保存はしない）
- **キーワード検索（TASK-020）**: パネルヘッダ下の検索ボックス（`<input type="search">`）に入力すると即座に絞り込まれる。対象は通し番号（「151」「No.151」どちらでも）・タイトル・問題文の部分一致（大文字小文字を区別しない）。既存の難易度・カテゴリフィルタとAND条件。検索語はセッション内のみ保持し、localStorageには保存しない
- **⭐のみ表示（TASK-020）**: パネルヘッダの「⭐のみ」ボタンでブックマーク済みの問題だけに絞り込む（検索・難易度・カテゴリフィルタとAND）。トグル状態もセッション内のみ保持
- **該当0件時の表示（TASK-020）**: 検索・⭐のみ表示・既存フィルタの組み合わせで該当問題が0件になった場合、一覧に「該当する問題がありません」と表示する
- **この絞り込みはパネル表示にのみ適用**: 次の問題／🎲 ランダム／進捗マップの集計対象（`filteredProblems()`）は難易度×カテゴリのみで変更しない（`panelFilteredProblems()`で別関数として実装）
- 各行に難易度バッジ＋通し番号付き問題タイトル（No.X 形式）＋ブックマークトグルボタン（⭐/☆）を表示。行末のボタンから一覧上で直接オン/オフでき、問題を開かなくてもブックマークできる（TASK-020。クリックしても行本体のクリック＝問題へのジャンプは発火しないよう`stopPropagation`している）
- 行クリックで該当問題に即ジャンプし、パネルは自動で閉じる（ジャンプ後の「次の問題」はその位置から順番に進む）
- 現在表示中の問題はアクセント色の枠でハイライト
- 難易度フィルタと連動（beginnerを選択中は一覧もbeginnerのみ表示。パネルを開くたびに再描画）
- 閉じる方法: ×ボタン / 背景クリック / Escキー
- 順番出題（次の問題）・🎲 ランダム・難易度フィルタの各機能はそのまま併存

### 🥚 隠しコマンド（イースターエッグ・2種）

息抜き用の隠し要素。

1. **猫コマンド**: コードエディタに「にゃ～ん」「にゃーん」「nyan」のいずれか（前後の空白は許容、完全一致）を入力して実行すると、通常の正誤判定をスキップし、猫のアスキーアート＋癒しメッセージ（全16パターンからランダム）を出力欄に表示する。バナーは紫系の特別表示「🐱 ねこが来てくれました」
2. **Konami Code**: キーボードで ↑↑↓↓←→←→BA と入力すると、画面中央に「🎉 隠しコマンド発見！」がポップアニメーション付きで表示され、3秒後に自動消去される（表示中の重複発動は抑止）

### 📖 リファレンスタブ

Python基礎リファレンス。全15セクション＋pandas参考セクション（TASK-014で6節目セクションを追加）。先頭に目次パネル（各セクションへのページ内リンク）を配置。各セクションは「見出し＋説明文＋コードブロック（等幅フォント・背景色区別、シンタックスハイライトなし）＋躓きポイントの注記」で構成。

**折りたたみ表示（TASK-023）**: 16セクション全体が縦に長くなったため、各セクションを`<details class="ref-fold">`で折りたたみ、起動時はすべて閉じた状態にした。見出し（`<h3>`）は`<summary>`の中に置かれ、クリックで開閉できる（三角マーカーはブラウザ標準のもの・色のみアクセントカラーに調整）。目次パネルに「すべて開く」「すべて閉じる」ボタンを追加し、1クリックで従来通りの一覧表示に戻せる（流し見のしづらさへの対策として設計時から必須の要件とした）。目次リンクのクリックは`openRefSection(sectionId)`という共通ヘルパーを経由するようにし、対象の`<details>`を開いてからスクロールする（閉じたままだとアンカーへのジャンプが画面に見えないため）。このヘルパーはTASK-024の「問題→関連リファレンスへのリンク」からも同じ形で呼び出す設計。開閉状態はセッション内のDOM状態のみで、localStorageには保存しない（タブを離れる・リロードすると全closedに戻る）。各セクションの本文テキスト・コード例はこの変更で一切書き換えていない（`<details>`/`<summary>`タグの挿入のみ）

1. Pythonの基本構文（変数・型・演算子）
2. 制御構文（if / for / while）
3. 関数（def・return・引数）
4. データ構造（list・dict・tuple・set）
5. 内包表記
6. クラスの基本
7. 例外処理（try・except）
8. よく使う組み込み関数一覧
9. よく使うstring操作
10. 記法の読み方（モジュール関数・メソッド・クラス生成・文字列内の別言語(SQL)という4つの見た目の違いを整理するミニセクション。TASK-014でユーザーとの相談により追加）
11. SQL入門（sqlite3。connect/execute/executemany・SELECT/WHERE/ORDER BY・GROUP BY/HAVING・JOIN・プレースホルダ）
12. 正規表現（re。search/match/fullmatch・findall/sub・グループ/名前付きグループ・split・主要メタ文字表）
13. 日付と時刻（datetime。strptime/strftime・timedelta・日付の差と比較・書式指定子表）
14. collections・itertools（Counter・defaultdict・namedtuple・itertools.groupby/chain）
15. JSON・CSVの読み書き（json.loads/dumps・csv.reader/DictReader・io.StringIOでのテスト）
16. pandas入門（参考・読み物。TASK-015よりエディタで実行可。TASK-014で見出し番号のみ10→16に変更）

### 🔍 ステップ実行タブ

入力したPythonコードを1行ずつ実行し、実行の流れを可視化する学習支援機能。

- **コード入力エリア**: サンプルリスト先頭の「📝 この問題の答え」チップ（問題タブで選択中の問題の `answerCode` をエディタに読み込む。問題切替時に非選択状態にリセット・エディタ内容は保護される。`currentProblem` が null の場合は非表示）と、固定サンプル4件（辞書ループ・関数とスコープ・参照の落とし穴・辞書で数える）から選択するか、自由にコードを入力する。Tab/Shift+Tab・Ctrl+/・Enterでの自動インデントは問題タブのエディタと共通（TASK-019b）
- **ステッパー**: ◀▶ボタン・スライダー・「▶ 自動」（750ms間隔の自動再生）でステップを移動する
- **コード表示**: 実行中の行を黄色でハイライト表示（行番号付き）
- **スコープ表示**: 現在のスコープ（グローバル / 関数名()）と行番号・イベント種別（実行 / 関数に入る ↓ / 戻る ↑）を表示
- **変数パネル**: そのステップ時点のローカル変数を一覧表示。前ステップからの変化を色で区別（変化＝黄枠・黄背景 / 新規＝緑枠・緑背景）。型別の色分け（文字列＝緑系・数値＝アクセント・bool＝紫・None＝グレー・コレクション型はブラケット）
- **print出力欄**: そのステップまでに出力されたprint内容を段階的に表示
- **エラー表示**: 例外が発生した場合は赤帯でエラー内容を表示し、落ちた直前までの変数状態は下で確認できる。エラー解説「📖 このエラーを読む」折りたたみを直後に表示（`buildErrorExplain()` で日本語解説生成。マッチしない場合は非表示）
- **Pyodide共有**: 既存のPyodideインスタンス（`init()`で初期化されたもの）をそのまま利用。新規の`loadPyodide`呼び出しは行わない
- **セキュリティ**: コード・変数・出力は外部に送信しない（fetch/XHR/WebSocket/sendBeacon なし）。ステップ実行タブ自体はlocalStorageを使わない（学習進捗の保存は📝問題タブのみ。7節参照）

## 7. 学習進捗の保存（localStorage）

TASK-012（2026-07-06）で追加。以前は「解答状況・進行は保存しない」仕様だったが、150問を自走で回すために変更した（ユーザー承認済み・2026-07-02）。TASK-019（2026-07-12）で `activity`（学習アクティビティ）フィールドを追加し、連続学習ストリーク・マイルストーン称号の計算に使用している。TASK-020（2026-07-12）で `bookmarks`（ブックマーク）フィールドを追加した。

- **保存先・キー**: `localStorage`。キーは `"python-trainer:progress:v1"` の1つのみ。GitHub Pagesは `ユーザー名.github.io` を他リポジトリのページと共有するオリジンになるため、専用プレフィックス付きキーにしている
- **データ形状**（TASK-019で`activity`・TASK-020で`bookmarks`を追加）:
  ```json
  {
    "solved": { "b001": "2026-07-06", "i003": "2026-07-06" },
    "last": { "problemId": "i015", "level": "all", "category": "all" },
    "activity": { "2026-07-06": 2, "2026-07-12": 5 },
    "bookmarks": { "a072": true }
  }
  ```
- **保存される内容**: 問題ID・正解した日付・最後に表示していた問題ID/フィルタ状態・日付ごとの正解件数（`activity`）・ブックマークした問題ID（`bookmarks`）のみ。**コードの内容や実行結果は保存しない**。外部送信は一切なし
- **保存タイミング**:
  - 正解判定時（`runCode()` の正解分岐で `markSolved(currentProblem)` を呼ぶ）に `solved[問題ID]` へその日の日付を記録し、`activity[その日の日付]` を+1する（解き直しでも加算される。「復習もその日の学習としてカウントする」という設計意図。TASK-019で明記）
  - 問題表示時（`showProblem()`）に `last`（表示中の問題ID・難易度フィルタ・カテゴリフィルタ）を更新。フィルタ切り替えは内部的に `showProblem()` を呼ぶ実装のため、フィルタ変更時も自動的に反映される
- **復元**: 起動時に `last.problemId` が `PROBLEMS` 配列内に存在すれば、そのフィルタ状態と問題を復元して表示する。`localStorage` が空・JSON不正・未知のIDの場合は従来どおり No.1 から開始する（`restoreLastProblem()` がこの判定を行う）
- **`activity`の後方互換移行（TASK-019）**: `activity`キーを持たない旧形式のデータを読み込んだ場合、`loadProgress()`が`solved`の日付値から`activity`を導出する（`deriveActivityFromSolved()`。1問=1件の近似で、過去の正確な学習履歴までは復元できない）
- **連続学習ストリーク（TASK-019）**: `activity`のキー（日付）を新しい方から遡り、空白のない連続日数を数える（`calcStreak()`）。今日がまだ未学習でも昨日まで連続していれば「継続中」（今日解けば伸びる）として扱う。今日も昨日も未学習ならストリーク0として非表示にする
- **マイルストーン称号（TASK-019）**: 解答済み問題数（`solved`のキー数）が10/30/50/100/150/全問（`PROBLEMS.length`）の節目を跨いだ瞬間、およびカテゴリ（foundation/engineering/practice）を完全制覇した瞬間に、`#konami-banner`と同じ演出パターンを流用したトースト（`#milestone-banner`。3秒自動消去）で称号名を表示する。称号は`solved`から毎回計算する値のため**永続保存はしない**。判定は`markSolved()`で「その問題を初めて解いた場合のみ」（`wasSolved`が false の場合のみ）行うため、解き直しで再度トーストが出ることはない
- **ブックマーク（TASK-020）**: 問題表示エリアのタイトル横の⭐/☆ボタン（`toggleBookmark()`）と、問題一覧パネルの各行の⭐/☆ボタン（`toggleBookmarkFor(problemId)`）の両方から`bookmarks[問題ID]`をトグルできる（共通ロジックは`toggleBookmarkFor()`に集約。一覧側でトグルした問題が現在表示中の問題と同じ場合はタイトル横のボタン表示も同期する）。苦手な問題・後で振り返りたい問題を自分でマークする用途（ユーザー発案）。パネルヘッダの「⭐のみ」ボタンで絞り込める（6節参照）
- **UI**:
  - カテゴリフィルタの下に進捗表示（例: `解答済み 12 / 202（このフィルタ内 5 / 21） 🔥連続3日`）。正解のたび・問題表示のたびに更新
  - その下に獲得済みマイルストーン称号の一覧と「次の節目まであとN問」を常設表示（`#milestone-info`）
  - 問題一覧パネル上部に難易度×カテゴリの進捗マップ、その下に検索ボックス・「⭐のみ」トグル（6節参照）
  - 問題一覧パネルの各行で、解答済み問題のタイトル先頭に✅を表示（`li.solved` クラス）。ブックマーク済みは行末に⭐
  - 問題一覧パネルのヘッダに「進捗をリセット」ボタン。`confirm()`（ブックマークは保持される旨を明記）で確認後、`solved`・`last`・`activity`のみ初期化して`saveProgress()`で保存し直す（**TASK-020で挙動変更**: 以前は`localStorage.removeItem`で`bookmarks`を含め全消去していたが、`bookmarks`は保持するよう変更。ストリーク・称号は初期化される）
  - 問題一覧パネルのヘッダに「⬇️ 書き出す」「⬆️ 読み込む」ボタン（TASK-021）。詳細は下記「進捗のエクスポート/インポート」参照
- **進捗のエクスポート/インポート（TASK-021）**: `localStorage`はブラウザ・端末ごとに独立しているため、PCの買い替え・別ブラウザでの利用時に進捗（解答状況・ストリーク・称号・ブックマーク）を引き継ぐ手段として追加
  - **エクスポート**: 「⬇️ 書き出す」ボタンで`{app: "python-trainer", schema: 1, exportedAt: ISO日時, progress: {solved, last, activity, bookmarks}}`のJSONを`Blob`+ダウンロードリンク（`python-trainer-progress.json`）でローカルファイルに保存する。外部送信・クラウド保存は一切行わない
  - **インポート**: 「⬆️ 読み込む」ボタン→非表示の`<input type="file" accept="application/json">`でファイル選択→`FileReader`で読み込み→`JSON.parse`→`validateImportPayload()`で構造検証（`app`名が`"python-trainer"`であること・`progress.solved`がオブジェクトであること）→`confirm()`（「現在の進捗を上書きします」）→`buildProgressFromImport()`で反映（`last`/`activity`/`bookmarks`が欠けている場合はそれぞれ`null`/`solved`からの導出/空オブジェクトにフォールバック）→保存・再描画。JSON不正・構造不正なファイルは`alert()`で拒否し現在の進捗を変更しない。未知のproblemIdは許容する（起動時の復元処理と同じ方針）
- **localStorageが使えない環境（プライベートブラウジング等）への対応**: `loadProgress()`/`saveProgress()` を try/catch で保護し、失敗時は `console.warn` を出しつつ空の進捗として従来どおり動作する（アプリの停止・エラー表示は起きない）
- **既存機能への影響なし**: 完走祝福画面・🎲ランダム・フィルタAND絞り込み・隠しコマンド2種は本機能追加後も無変更で動作する（`git diff` でproblems.jsに変更がないことを確認済み。index.htmlの変更範囲は本機能に関する追記のみ）
- **動作確認状況**: 「正解→リロードで✅・進捗率・表示中問題が復元される」という一連の流れ（TASK-012）と、`activity`の記録・旧データ移行・ストリーク計算（4ケース）・マイルストーン閾値判定（TASK-019）は、Node.js上でlocalStorageの読み書きロジックのみを模擬検証済み（ハーネスは`/tmp`に作成し成果物には含めない）。**実ブラウザでの動作確認は未実施**（ユーザー側で実施予定。4節参照）

## 8. 正誤判定の仕組み

`index.html` 内の実装は次のとおりです。

1. **実行**: ユーザーのコードを `pyodide.runPythonAsync()` で実行する。実行ごとに新しい名前空間（Pythonの `dict`）を生成して渡すため、前回実行時の変数や関数は次の実行に残らない。
2. **出力捕捉**: `pyodide.setStdout()` / `setStderr()` の `batched` オプションで標準出力を行単位で収集し、改行で結合する。
3. **正規化**: ユーザー出力と `expectedOutput` の両方に対して、次の正規化を行う。
   - `\r\n` を `\n` に統一
   - 各行の末尾の空白・タブを削除
   - 全体の前後の空白を削除（`trim`）
4. **比較**: 正規化後の文字列を `===` で比較する。

## 9. 問題セット（全202問）

IDは難易度ごとの連番（b=beginner / i=intermediate / a=advanced）。カテゴリ（foundation / engineering / practice）は難易度と独立しており、各問題の `category` フィールドで指定する。

**難易度別の内訳**

| 難易度 | 問題数 | ID | 主なテーマ |
|--------|--------|------|-----------|
| beginner | 21問 | b001〜b021 | print・変数・四則演算・文字列操作（スライス・連結・f文字列・繰り返し）・数値演算（//・%・abs・round）・条件分岐（if/elif/else）・型変換・while文・in演算子・len・多重代入・累算代入 |
| intermediate | 98問 | i001〜i098 | リスト・辞書・for/while・関数・文字列メソッド・enumerate・zip・set・2次元リスト・スライス応用・f-string書式、JSON読み書き・件数/グループ集計・Counter・欠損値処理・クレンジング・CSV（reader/DictReader）・ログ解析、ECサイト実務シミュレーション（売上・客単価・送料・在庫・顧客分析）、SQL基礎（sqlite3: SELECT/WHERE/ORDER BY/LIMIT/COUNT・SUM・AVG/GROUP BY/HAVING/LIKE/プレースホルダ）、正規表現基礎（re: search/findall/sub/グループ/split）（TASK-013）、pandas基礎（DataFrame作成・read_csv・列選択/ブールインデックス・新規列作成・sort_values・value_counts・fillna）（TASK-016）、スキーマ検証（dataclass+isinstanceで型不一致レコードを検出）・incremental処理（状態ファイルで差分のみ処理）（TASK-018で+2問）、**datetime基礎（strptime・strftime・timedelta）・collections/itertools基礎（Counter・defaultdict・itertools.groupby）**（TASK-022で+6問） |
| advanced | 83問 | a001〜a083 | クラスと継承・例外処理・再帰・ファイル操作・lambda・map・filter・内包表記・ジェネレータ・可変長引数・`__str__`・all/any、API加工・整形JSON・構成比・2段階集計・ランキング・外れ値/平均値補完・突合チェック・datetime・ETL（結合・フラット化・パイプライン）、KPIダッシュボード・dbt的思考（staging/intermediate/mart）、SQL応用（JOIN・サブクエリ・CASE WHEN・ウィンドウ関数ROW_NUMBER/SUM OVER・row_factory）・正規表現応用（名前付きグループ・fullmatch・ログ解析×Counter）（TASK-013）、pandas応用（groupby集計・agg複数集計・merge・pivot_table・CSV→クレンジング→集計のミニETL総合）（TASK-016）、SQL UPSERT（ON CONFLICT DO UPDATE）・スキーマ検証総合（複数フィールドの型チェック＋レポート）・incremental処理総合（状態ファイルで累計集計）（TASK-018で+3問）、**datetime応用（処理時間計算・期間フィルタ）・collections応用（Counter加算マージ）・datetime×Counter総合（日別エラー集計レポート）**（TASK-022で+4問） |

**カテゴリ別の内訳**

| カテゴリ | 問題数 | 内容 |
|----------|--------|------|
| foundation | 67問 | Python基礎文法（print・if・loop・list・dict・function・string・class・exception ほか） |
| engineering | 100問 | データ処理・JSON・ETL・集計・欠損値・CSV・ログ解析、SQL（sqlite3）・正規表現（re）（TASK-013で+25問）、pandas（TASK-016で+12問）、SQL UPSERT・スキーマ検証・incremental処理（TASK-018で+5問）、datetime・collections/itertools（TASK-022で+10問） |
| practice | 35問 | 実務シミュレーション（ECサイト編ストーリー連作）・KPI分析・dbt的思考・APIレスポンス加工。**すべて標準ライブラリのみで実装**（pandasを使う問題はengineeringカテゴリのTASK-016分のみ） |

**TASK-022で追加したdatetime・collections/itertools問題（10問。すべてcategory: "engineering"）**: リファレンス13節（日付と時刻）・14節（collections・itertools）に対応する問題がほぼ無い（datetime使用2問・collections使用3問・itertools使用0問）というカバレッジギャップが2026-07-13の機械集計で判明したため追加。i093〜i095（strptime・strftime・timedelta）・a080〜a081（処理時間計算・期間フィルタ）・i096〜i098（Counter・defaultdict・itertools.groupby）・a082（Counter加算マージ）・a083（datetime×Counterの日別エラー集計総合）。**厳守事項**: `datetime.now()`・`date.today()`は実行時刻依存でexpectedOutputと照合できないため一切使用せず、すべて固定の日付リテラル・タイムスタンプ文字列で構成（`grep`で不使用を確認済み）。a083の日別集計はCounterのキーを`sorted()`してから出力し、挿入順ではなく日付の昇順で出力順を確定させている（TASK-013のORDER BY原則と同じ）。datetime/collections/itertoolsはPyodideに初期同梱される真の標準ライブラリのため、`ensurePackages()`の変更は不要（index.html無変更）。

**TASK-018で追加したDE実務問題（5問。すべてcategory: "engineering"）**: a077（SQL UPSERT）・i091/a078（スキーマ検証・dataclass+isinstance）・i092/a079（incremental処理・状態ファイル方式）。いずれも標準ライブラリ（sqlite3・dataclasses・json・os）のみで新規CDN・外部パッケージは不要。**発見・修正した不具合（2件）**:
1. 実装当初、i092とa079が同じ状態ファイル名`state.json`を使っており、同一ブラウザセッション内（リロードなし）で両方を実行すると、a079がi092の残した状態ファイル（`{"last_id":...}`のみでa079が期待する`error_total`キーが無い）を読み込んで`KeyError`になる不具合があった。a079側のファイル名を`state_error.json`に変更して解消（answerCode単体実行監査の過程で、i092→a079を同一作業ディレクトリで連続実行するテストにより発見）
2. **実ブラウザでユーザーが発見**: 上記1の修正後も、i092・a079それぞれ単体で「同じ問題を2回連続で実行する」と2回目が不正解になる不具合が残っていた。原因はPyodideの仮想ファイルシステムがページリロードまで実行ボタンを押すたびに保持され続けるため、2回目の実行時に「1回目のつもり」のコードが1回目の実行で保存された状態ファイルを読み込んでしまうこと。i092・a079の両方で、`STATE_FILE`定義の直後に`if os.path.exists(STATE_FILE): os.remove(STATE_FILE)`を追加し、実行のたびに必ずクリーンな状態から始まるように修正（starterCode・explanation内の正解例・answerCodeの3箇所すべてに反映）。同一ディレクトリでの連続実行（実行ボタンを複数回押す状況の再現）で2回目も正解になることを確認済み

**TASK-013で追加したSQL・正規表現問題（25問。すべてcategory: "engineering"）**: sqlite3・reはいずれも標準ライブラリのため、既存の仕組みのまま動作する。SQLはすべて`sqlite3.connect(":memory:")`でメモリ上にテーブルを作成し、starterCodeで作成・投入まで済ませた上でSELECT文の作成に集中できる構成。順序が不定にならないよう全問でORDER BYを明示している。

**TASK-016で追加したpandas問題（12問。すべてcategory: "engineering"）**: i084〜i090（intermediate・7問）＝DataFrame作成/shape・columns、read_csv（io.StringIO）、列選択・ブールインデックス、新規列作成、sort_values、value_counts、fillna。a072〜a076（advanced・5問）＝groupby集計、agg複数集計、merge（SQLのJOINとの対応を解説）、pivot_table、CSV→クレンジング→集計のミニETL総合。TASK-015で追加した`ensurePackages()`の遅延ロードにより実ブラウザで実行可能（`import pandas`検出時に自動でloadPackage）。**expectedOutputの設計方針（バージョン非依存）**: `print(df)`のようなDataFrameのrepr（表形式の文字列表示）はpandasのバージョンで列幅の空白が変わり判定が壊れるため一切使わず、`df.shape`・`list(df.columns)`・`.tolist()`・`.to_dict()`・`.to_dict(orient="records"/"index")`など、Python標準の型（int/float/str/list/dict）に変換した値のみをexpectedOutputにしている。検証はローカルvenvのpandas 2.3.1で実施（Pyodide 0.28.3のpandasと同一バージョン）。列に新しい値を代入する処理（i087の新規列作成・i090とa076のfillna）は、検証環境（Python 3.14）で`df["col"] = ...`の直接代入がpandas内部の`FutureWarning`（ChainedAssignmentError関連。Python 3.14特有の参照カウント挙動に起因すると推測）を出すことが判明したため、`df.assign(col=...)`に統一して回避した（`-W error::FutureWarning`で全12問が警告なしに実行できることを確認済み）。

設計思想（詳細はルートの CLAUDE.md 参照）:

- 序盤は「動いた瞬間に面白い」視覚的にわかりやすい出力の問題を配置（星のピラミッド、お菓子の山分け、逆さ言葉など）
- 「簡単だけど面白い」→「少し考える」への緩やかな難易度スロープ
- 全問に解説（正解例＋初学者の躓きポイント）とヒントを付与

## 10. 問題の追加方法

`problems.js` の `PROBLEMS` 配列にオブジェクトを追加するだけです。`index.html` の変更は不要です。

```javascript
{
  id: "b022",                       // 一意なID（既存と重複しないこと。難易度別連番: b/i/a + 3桁）
  level: "beginner",                // "beginner" / "intermediate" / "advanced" のいずれか
  category: "foundation",           // "foundation" / "engineering" / "practice" のいずれか
  title: "問題タイトル",
  description: "問題文。\n（\\n で改行できます）",
  starterCode: "# 初期表示されるコード\n",
  expectedOutput: "期待する標準出力",  // 複数行は \n 区切りで記述
  explanation: "解説テキスト（正解例・考え方・よくある間違い）",
  hint: "ヒント（任意。省略するとヒント欄が非表示になる）",
  answerCode: "ステッパータブの「この問題の答え」チップで読み込まれる正解コード（任意。省略するとチップが非表示になる）"
}
```

注意点:

- **`answerCode` の不変条件（TASK-011で確立）**: `answerCode` は**単体で実行して `expectedOutput` を再現できる**こと。ステッパータブの「この問題の答え」チップがエディタ内容を `answerCode` でまるごと置き換えるため、`starterCode` 側で定義した変数に依存するコードだと `NameError` になる。`starterCode` にデータ定義がある問題は、そのデータ定義を `answerCode` の先頭に含めること。
- `expectedOutput` は実際にPythonで正解コードを実行した出力と**完全に一致**させてください（判定前に正規化されるため、前後の空白・改行コードの差は許容されます。詳細は8節）。
- `input()` を使う問題は作成しないでください（本ツールは標準入力に対応していません）。
- 外部パッケージのうち **sqlite3・pandas・numpy** は `ensurePackages()` による遅延ロード対応済みで `import` して使えます（TASK-015でpandas/numpyを追加。3節参照）。それ以外の外部パッケージを `import` する問題は作成しないでください（`index.html` にロード処理がないため、実行時に ModuleNotFoundError になります）。使えるのは標準ライブラリ（json・csv・io・collections・datetime 等）と上記3パッケージのみです。
- 文字列内でダブルクォートを使う場合は `\"` とエスケープしてください。
- 辞書やリストをprintする問題は、Pythonの標準的な表示形式（シングルクォート等）をそのまま `expectedOutput` に書きます。

## 11. 既知の制限事項

- **インターネット接続が必須**: Pyodide本体（約10MB）をCDNから取得するため、完全オフラインでは動作しない（2回目以降はブラウザキャッシュが効く）。
- **標準入力（`input()`）非対応**: `input()` を呼ぶコードはエラーになる。問題もこれを前提に作成している。
- **判定は標準出力の完全一致のみ**: 出力が同じであれば実装方法は問わない（逆に、ロジックが正しくても出力形式が違えば不正解になる）。
- **長時間実行のコードは中断できない**: 無限ループを実行するとタブが応答しなくなる場合がある。その場合はタブを閉じて開き直す必要がある。
- **ファイル操作は仮想ファイルシステム内**: open/write/read はブラウザ内（Pyodide仮想FS）で完結し、OSの実ファイルにはアクセスできない。ページを再読み込みすると消える。
- **Pyodideの一般的な制限**: 一部のCPythonモジュール（`subprocess` など）は動作しない。
- **スマホ・タブレットは簡易対応**（TASK-017。`@media (max-width: 640px)`でコンテナ余白・ボタン・フィルタボタンのサイズを調整。実機での動作確認は未実施）。PCのブラウザでの利用を主に想定している。
- **学習進捗はブラウザ・端末ごとに独立**: `localStorage`はブラウザ内保存のため、別のブラウザ・端末・シークレットモードでは進捗は共有されない。ブラウザの「サイトデータを削除」等を行うと進捗も消える。**TASK-021で追加した進捗のエクスポート/インポート機能（7節）を使えば、ファイル経由で別のブラウザ・端末へ手動で引き継げる**（自動同期ではない）。
- **リファレンスタブの折りたたみとページ内検索（Ctrl+F）の相性（TASK-023）**: 全16セクションは起動時すべて閉じているため、Chromium系ブラウザ（Chrome/Edge等）は検索でヒットした`<details>`を自動展開してくれるが、Firefox/Safariでは閉じたセクション内の文字列がCtrl+F検索でヒットしない場合がある。確実に探したい場合は目次パネルの「すべて開く」を押してから検索するとよい。

## 12. 修正履歴

### 2026-07-16: TASK-024 — 問題→関連リファレンスへのリンク

- **`index.html`のみ変更**（`problems.js`・判定ロジック・他タブは無変更）。問題を解いていて詰まったとき、リファレンスの該当セクションへ1クリックで飛べるようにし「問題で詰まる→リファレンスで調べる→自力で解く」のループを短縮する
- 問題文（`#problem-desc`）とヒント（`#hint-block`）の間に`<div id="ref-links"></div>`を新設。`REF_LINK_RULES`（sqlite3→11節／re→12節／datetime→13節／collections・itertools→14節／json・csv→15節／pandas・numpy→16節の6ルール）で`starterCode + "\n" + answerCode`を検査し、`showProblem()`内の`updateRefLinks()`で該当セクションへのチップを動的生成する。判定は`ensurePackages()`と同じ`/^\s*(import|from)\s+.*\bモジュール名\b/m`パターン（行頭アンカー）でコメント行の誤検出を防いでいる。該当モジュールがない問題ではチップ欄自体を非表示にする（CSS `#ref-links:empty { display: none; }`）
- チップクリック時は`goToRefSection(sectionId)`が📖リファレンスタブのタブボタンを`click()`で発火してからTASK-023の`openRefSection(sectionId)`を呼び、対象セクションを開いてスクロールする
- `problems.js`には一切手を入れていない（新フィールドの追加なし。9項目＋answerCodeの構成を維持）。foundation系トピック（if文・リスト等）への曖昧なキーワードマッピングは誤リンク防止のため対象外とした（設計時からのOUT_OF_SCOPE）
- 検証: `index.html`から`REF_LINK_RULES`・`detectRefLinks`をNode.jsで抽出し8項目のユニット検証がすべてPASS（sqlite3/re/pandas単体・datetime+collections複合・importなし/コメント行のreのみ/json・csv/itertools単体。詳細は4節）。`node --check`（`<script>`ブロック抽出）合格、`<div>`（87/87）・`<details>`/`<summary>`（20/20）のタグ開閉数一致を機械検証。`git diff --stat`で`index.html`のみの変更（`problems.js`は無変更）であることを確認
- feature/task024ブランチで作業
- 実ブラウザでの動作確認: 純粋な文法問題（No.23）でチップが非表示になること、SQL・正規表現・pandas等の問題でチップが表示されクリックでリファレンスタブの該当セクションへジャンプすることをユーザーが2026-07-16に確認済み（4節参照）

### 2026-07-14: TASK-023 — リファレンスの折りたたみ化（details/summary）

- **`index.html`のみ変更**（`problems.js`・判定ロジック・他タブは無変更）。リファレンスタブが16セクションまで育ち縦スクロールが非常に長くなったというユーザー指摘（2026-07-13）を受け、各セクションを折りたたみ式にした
- 16セクションすべての`<div class="panel ref-section">`直下の`<h3 id="ref-N">タイトル</h3>`を`<details class="ref-fold"><summary><h3 id="ref-N">タイトル</h3></summary>`に置き換え、セクション本文の末尾に`</details>`を追加する変換をPythonスクリプトで機械的に適用（手編集によるテキスト改変を避けるため）。`h3`の`id`はそのまま維持し既存のアンカー互換を保った。**本文テキスト・コード例は一切変更していない**ことを`git diff`で確認済み（削除行は16個のh3行のみで、いずれも同じ内容がsummary内に移動しただけ）
- デフォルトは全closed。目次パネルに「すべて開く」「すべて閉じる」ボタン（`.list-action-btn`流用）を追加し、流し見のしづらさというトレードオフに対応（設計時からの必須要件）
- 目次リンク（`.ref-toc a[href^='#ref-']`）のクリックをJSで横取りし、共通ヘルパー`openRefSection(sectionId)`（対象の`<details>`を開いてから`scrollIntoView`）を呼ぶよう変更（閉じたままだとアンカージャンプが画面に見えないため）。このヘルパーはTASK-024の問題→リファレンスリンクからも同じ形で呼び出せる設計
- 開閉状態はセッション内のDOM状態のみで、localStorageへの保存はしない
- 既知の制限として、Firefox/SafariではCtrl+F検索時に閉じた`<details>`内がヒットしない場合があることをSYSTEM_DOC 11節に追記
- 検証: 変換スクリプトで16セクション全て変換されたことを確認、`<details>`/`<summary>`の開閉数一致（20/20。既存の`#sp-error-explain-block`分を含む）・`<div>`開閉数一致（86/86）を機械検証。`node --check`（`<script>`ブロック3件）合格。Python標準の`html.parser`でのパースエラーなしを確認。`git diff --stat`で`index.html`のみの変更であることを確認
- feature/task023ブランチで作業
- 実ブラウザでの動作確認: 折りたたみの開閉・「すべて開く/閉じる」・目次リンクからのジャンプはユーザーが2026-07-15に確認済み（4節参照）。summary内h3の見た目の細部（マーカー位置・レスポンシブ崩れ）は未確認

### 2026-07-14: TASK-022 — datetime・collections/itertools 問題10問の追加

- **`problems.js`のみ変更**（末尾に10問追記。既存192問は無変更）。2026-07-13のカバレッジ機械集計で、リファレンス13節（日付と時刻）・14節（collections・itertools）に対応する問題がほぼ無い（datetime使用2問・collections使用3問・itertools使用0問）ことが判明したため追加
- datetime（5問、全`category: "engineering"`）: i093（strptime）・i094（strftime）・i095（timedelta）・a080（開始/終了時刻から処理時間をtotal_seconds()で計算）・a081（期間フィルタ。datetime同士の比較）
- collections・itertools（5問）: i096（Counter・most_common）・i097（defaultdict(list)）・i098（itertools.groupby。事前ソート必須の落とし穴を解説に明記）・a082（Counter同士の+によるマージ）・a083（datetime×Counterでエラーログの日別集計。日付キーでsorted()し出力順を確定）
- 追加後: 202問（foundation 67 / engineering 100 / practice 35、beginner 21 / intermediate 98 / advanced 83）
- **厳守事項**: `datetime.now()`・`date.today()`は実行時刻に依存し`expectedOutput`と照合できなくなるため一切使用せず、全問固定の日付リテラル・タイムスタンプ文字列で構成（`grep`で該当なしを確認）。曜日名を扱う問題は今回無し（Cロケール依存を避けるため）
- 検証: 追加10問の正解例をPython3で実行し`expectedOutput`と完全一致（10/10）。全202問のanswerCode単体実行監査は190/202 PASS（NGの12件はpandas未導入によるi084〜i090・a072〜a076の既知の制限＝TASK-016から継続。今回の新規10問はすべてPASS）。全202問のフィールド機械検証合格、`node --check problems.js`合格、`git diff`でproblems.js末尾追記のみを確認
- SYSTEM_DOC.md 1節・4節・7節（進捗表示の例）・9節を更新
- feature/task022ブランチで作業
- 実ブラウザでの動作確認: No.193〜202（i093〜i098・a080〜a083）すべてでstarterCodeのまま実行→不正解、正解例入力→✅正解の流れをユーザーが2026-07-16に確認済み（4節参照）

### 2026-07-13: TASK-021 — 不正解時の出力diff表示・進捗のエクスポート/インポート

- **`index.html`のみ変更**（`problems.js`・判定ロジック本体は無変更。`normalizeOutput`・一致判定の行は`git diff`で無変更を確認）
- **不正解時の出力diffノート**: `computeOutputDiff(expectedRaw, actualRaw)`を新設。`normalizeOutput()`適用後の期待出力／実際の出力を行単位で比較し、最初に異なる行があれば`{type:"line", lineNo, expected, actual}`、共通部分は一致するが実際の出力が短ければ`{type:"missing", lineNo}`、長ければ`{type:"extra", lineNo}`、完全一致なら`null`を返す純粋関数。`renderDiffNote()`が`spEscHtml()`でエスケープしつつ新設`#diff-note`（「期待される出力」ブロックの直上）に描画する。正解・エラー時は非表示。既存の`showResult(kind, message, errorText)`に`actualOutput`引数を追加し、`runCode()`の不正解分岐から`userOutput`を渡すよう変更（判定条件`normalizeOutput(userOutput) === normalizeOutput(currentProblem.expectedOutput)`自体は無変更）
- **進捗のエクスポート**: 問題一覧パネルのヘッダに「⬇️ 書き出す」ボタンを追加。`{app:"python-trainer", schema:1, exportedAt:ISO日時, progress:{solved,last,activity,bookmarks}}`を`Blob`+ダウンロードリンク（`python-trainer-progress.json`）でローカルファイルに保存する`exportProgress()`を実装
- **進捗のインポート**: 「⬆️ 読み込む」ボタン＋非表示の`<input type="file" accept="application/json">`。`FileReader`で読み込み→`JSON.parse`→`validateImportPayload()`（`app`名・`progress.solved`の型を検証。未知のproblemIdは許容）→`confirm()`→`buildProgressFromImport()`（`last`/`activity`/`bookmarks`欠落時のフォールバックあり。`activity`は`deriveActivityFromSolved()`を再利用）→`saveProgress()`→再描画。JSON不正・構造不正時は`alert()`で拒否し現在の進捗を変更しない
- 問題一覧パネルのボタン群（進捗リセット・書き出す・読み込む）を共通クラス`.list-action-btn`に統一（従来`#btn-reset-progress`個別定義だったCSSをクラス化。IDはJS参照用にそのまま維持）
- 検証: `index.html`から`computeOutputDiff`・`validateImportPayload`・`buildProgressFromImport`等をNode.jsで抽出し17項目のユニット検証がすべてPASS（詳細は4節）。`node --check`（`<script>`ブロック3件）合格、divタグ開閉数一致（85/85。JS文字列内の`<div>`リテラルを含む）を機械検証。`fetch`/`XHR`/`WebSocket`/`sendBeacon`が追加されていないことをgrepで確認。`git diff --stat`で`index.html`のみの変更であることを確認
- feature/task021ブランチで作業
- 実ブラウザでの動作確認は未実施（ユーザー側で実施予定）

### 2026-07-12: TASK-020 — 問題一覧パネル強化（キーワード検索・ブックマーク）

- **`index.html`のみ変更**（`problems.js`は無変更）。192問への増加でタイトル目視による問題探しが限界になってきたことを受け、一覧パネルを「学習のハブ」にする
- `progress`スキーマに`bookmarks: {problemId: true}`を追加（`loadProgress()`に旧データ用のフォールバックを追加。TASK-019の`activity`と同じパターン）
- **キーワード検索**: 問題一覧パネルのヘッダ下に`<input type="search">`を追加。通し番号（「151」「No.151」どちらでも）・タイトル・問題文の部分一致（大文字小文字を区別しない）で即時絞り込み。`input`イベントで再描画
- **⭐のみ表示**: パネルヘッダに「⭐のみ」トグルボタンを追加。ブックマーク済みの問題だけに絞り込む
- **絞り込みの適用範囲を限定**: 上記の検索・⭐のみ表示は、既存の`filteredProblems()`（難易度×カテゴリ。次の問題／🎲ランダム／進捗マップの集計に使用）とは別に新設した`panelFilteredProblems()`でのみ適用し、一覧パネルの表示にのみ影響する（次の問題進行・ランダム出題・進捗マップの集計対象は変更しない）
- **ブックマークトグル**: 問題表示エリアのタイトル横に⭐/☆ボタン（`aria-pressed`付き）を追加。問題切替のたびに状態を反映（`updateBookmarkButton()`）。一覧パネルの各行にも⭐を表示
- **進捗リセットの挙動変更**: 従来は`localStorage.removeItem`で`solved`・`last`・`activity`・`bookmarks`をすべて消去していたが、`bookmarks`は保持するよう変更（`solved`・`last`・`activity`のみ初期化して`saveProgress()`で保存し直す）。`confirm()`の文言に「ブックマークは保持されます」を明記
- 検索語・⭐のみ表示のトグル状態はセッション内のみ保持しlocalStorageには保存しない（設計通り）
- 検証: `index.html`から該当関数をNode.jsで抽出し、`PROBLEMS`/`progress`をモックした16項目のユニット検証がすべてPASS（詳細は4節）。`node --check`（`<script>`ブロック3件）合格、divタグ開閉数一致（78/78）を機械検証。`fetch`/`XHR`/`WebSocket`/`sendBeacon`が追加されていないことをgrepで確認。`git diff --stat`で`index.html`のみの変更であることを確認
- feature/task020ブランチで作業
- 実ブラウザでの動作確認は未実施（ユーザー側で実施予定）

### 2026-07-12: TASK-019b — エディタ機能拡充（Ctrl+/ コメントトグル・Shift+Tab・Enter自動インデント）

- **`index.html`のみ変更**（`problems.js`は無変更）。ユーザーからの要望「Ctrl+/でコメントアウトしたい、他にも本番環境と異なる部分を埋めたい」を受け、ロードマップ外の小さな追加タスクとして実施（IMPROVEMENT_ROADMAP.mdへの正式な設計追加はせず、TASK-019の直後に行った付随作業として本節に記録）
- 問題タブ（`#editor`）・ステップ実行タブ（`#sp-ed`）の両エディタに共通のキー操作を追加。両エディタで共通関数`handleEditorKeydown(e, textarea, onGutterUpdate)`を新設し、既存の個別実装（Tabキー4スペース挿入のみ）を置き換えた
  - **Ctrl+/（Cmd+/）**: 選択行のコメントトグル（`toggleComment()`）。選択範囲を含む行全体が対象。既にすべて`#`コメントなら解除、そうでなければ各行の先頭インデントを保持したまま直後に`# `を挿入する。空行はスキップする
  - **Shift+Tab**: 選択行の先頭インデントを解除（`dedentSelection()`）。4スペース・それ未満のスペース・タブ1文字のいずれかがあればある分だけ除去する
  - **Enter**: 直前行のインデントを引き継いで改行する（`autoIndentOnEnter()`）。直前行が`:`で終わる場合はさらに4スペース追加する（Pythonのブロック開始を想定）。Ctrl+Enter（実行）はこれまで通り別処理で先に判定する
- **`contenteditable`化・シンタックスハイライトは行わない**（TASK-017で決めた方針を踏襲。IME入力・既存の判定ロジックを壊すリスクを避けるため、あくまで`<textarea>`の値操作のみで実装）
- 検証: `index.html`から`lineRangeOf`・`toggleComment`・`dedentSelection`・`autoIndentOnEnter`をNode.jsで抽出し、`textarea`のモックオブジェクト（`value`/`selectionStart`/`selectionEnd`）で15項目をユニット検証（単一行/複数行のコメント化・解除・空行スキップ、インデント解除の各パターン、自動インデントの通常行/コロン終端/選択範囲の置換。すべて2026-07-12実施・全PASS）。`node --check`（`<script>`ブロック3件）合格、divタグ開閉数一致（77/77）を機械検証。`git diff --stat`で`index.html`のみの変更であることを確認
- 実ブラウザでの動作確認は未実施（ユーザー側で実施予定）

### 2026-07-12: TASK-019 — 継続の仕組み（ストリーク・マイルストーン称号・進捗マップ・正解演出）

- **`index.html`のみ変更**（`problems.js`は無変更・`git diff`で確認）。学習を「積み上げが見える・戻ってきたくなる」体験にするため、既存の進捗データ（TASK-012）を拡張して以下を追加
  - `progress`スキーマに`activity: {"YYYY-MM-DD": その日の正解数}`を追加。`loadProgress()`が旧データ（`activity`キーなし）から`solved`の日付値を使って移行する
  - 連続学習ストリーク: `calcStreak()`が`activity`の日付を新しい方から連続日数を計算。今日未学習でも昨日まで連続していれば継続扱い。`#progress-info`に「🔥連続N日」を表示
  - マイルストーン称号: 解答済み件数10/30/50/100/150/全問（`PROBLEMS.length`）到達時と、カテゴリ（foundation/engineering/practice）完全制覇時に、`#konami-banner`の演出パターンを流用したトースト（`#milestone-banner`）を表示。称号は`solved`から毎回計算し永続保存はしない。獲得済み一覧・次の節目までは新設`#milestone-info`に常設表示
  - カテゴリ×難易度の進捗マップ: 問題一覧パネル上部に3×3グリッド（`#progress-map`）を新設。各セル「解答済み/総数」、0問セルは「—」、達成率で背景色を塗り分け
  - 正解時のバナー（`#result-banner.correct`）に一度だけのスケールポップCSSアニメーション（`correct-pop`）を追加。`prefers-reduced-motion: reduce`で無効化
- **セルクリックでのフィルタ連動は実装しない**（ロードマップで「任意」とされていた項目。工数とリスクを抑えるためユーザー承認のうえ見送り）
- 「進捗をリセット」ボタンの初期化対象に`activity`を追加（`solved`・`last`・`activity`をすべて初期化）
- 検証: `index.html`から該当関数をNode.jsで抽出し、localStorage/DOM依存箇所をモックした20項目のユニット検証がすべてPASS（`activity`の移行・加算、ストリーク4ケース、マイルストーン閾値判定。詳細は4節）。`node --check`（`<script>`ブロック3件）合格、divタグ開閉数一致（77/77）を機械検証。DOM描画部分（進捗マップ・トースト表示）はソースレビューのみで実ブラウザ確認は未実施
- feature/task019ブランチで作業

### 2026-07-07: TASK-018 — DE実務追加問題5問（SQL UPSERT・スキーマ検証・incremental処理）

- **`problems.js`のみ変更**（末尾に5問追加。既存187問は無変更・`git diff`で確認。すべて`category: "engineering"`）
  - a077（advanced）: SQL UPSERT（`INSERT ... ON CONFLICT ... DO UPDATE`）で「なければ追加・あれば更新」
  - i091（intermediate）・a078（advanced）: スキーマ検証（`dataclasses.fields()` + `isinstance`で型不一致を検出。a078は複数フィールド・複数理由・OK/NG集計まで発展させた総合問題）
  - i092（intermediate）・a079（advanced）: incremental処理（状態ファイルに最後に処理したIDを記録し差分のみ処理。a079は累計ERROR件数の集計も状態に持たせた総合問題）
  - いずれも標準ライブラリ（sqlite3・dataclasses・json・os）のみ。新規CDN・外部パッケージなし
- **実装中に発見・修正した不具合（1）**: 5問の`answerCode`を全192問の単体実行監査に含めて検証したところ、初回は191/192（a079のみ`KeyError: 'error_total'`で失敗）。原因は監査ハーネス側の作業ディレクトリ分離漏れで、i092が残した`state.json`（`{"last_id":...}`のみ）をa079が誤って読み込んだため（a079はi092と同じファイル名を使っていた）。これは検証ハーネスのバグであると同時に、**実際のPyodide仮想FS上でも同一セッション内でi092→a079の順に実行すると同じ`KeyError`が起きる本物の不具合**と判断し、a079側の状態ファイル名を`state_error.json`に変更して解消
- **実ブラウザ確認でユーザーが発見・修正した不具合（2）**: 上記(1)の修正後、ユーザーがa077・i091・a078・i092・a079の5問を実ブラウザで解いて正解を確認したが、**a079を解き直す（同じコードをもう一度実行する）と2回目が不正解になる**現象を報告。原因はPyodideの仮想FSがページリロードまで実行ボタンをまたいで保持されるため、2回目の実行では「1回目のつもり」のコードが1回目に保存した状態ファイルを読み込んでしまうこと（i092にも同じ設計上の欠陥があることを確認）。i092・a079の両方で`STATE_FILE`定義の直後に`if os.path.exists(STATE_FILE): os.remove(STATE_FILE)`を追加し、実行のたびに必ずクリーンな状態から始まるよう修正（starterCode・explanation内の正解例・answerCodeの3箇所すべてに反映）。同一ディレクトリで2回連続実行しても2回目が正解になることを確認。既存187問のうち同様のファイル書き込みを行うa011・a012は、いずれも`open(file, "w")`で無条件に上書きしてから読むため、この不具合は無いことを確認済み
- 検証: 全5問の正解例をPython3で個別実行しexpectedOutputと完全一致を確認（5/5）。全192問のフィールド機械検証（id重複なし・必須フィールド欠損なし）合格。全192問のanswerCode単体実行監査 192/192 PASS（各問題ごとに独立した一時ディレクトリで実行し前後の問題の影響を受けないようにした）。i092・a079は同一ディレクトリで2回連続実行しても2回とも正解になることを個別に確認。`node --check problems.js`合格。`git diff`でproblems.jsが末尾追記のみであることを確認
- SYSTEM_DOC.md 4節・9節（問題セット。計192問）・12節を更新。feature/task018ブランチで作業。実ブラウザでの5問の表示・判定確認をユーザーが実施（2026-07-07。No.188〜192＝a077・i091・a078・i092・a079の順で全問正解を確認。a079の再実行不具合はこの確認の過程で発見）

### 2026-07-07: TASK-017 — UIポリッシュ（行番号ガター・レスポンシブ・微調整）

- **`index.html`のみ変更**（CSSと最小限のJS。problems.js・判定ロジック・Pyodide処理・カラーパレットは無変更）
- **エディタ行番号ガター**: `#editor`・`#sp-ed`を`.editor-wrap`（flex）でラップし、左に`.editor-gutter`（行番号のdiv）を追加。両textareaに`wrap="off"`を付与（設計図に明記のない追加判断。折り返しがあると「1論理行=1表示行」の前提が崩れ行番号がズレるため、折り返しなし＋横スクロールに変更して対応）。`updateGutter(textarea, gutter)`で行数を再計算しガターに反映、`scroll`イベントで`gutter.scrollTop`を同期。コードを直接差し替える5箇所（問題切替・リセット・答えチップ・サンプル選択2箇所）に`updateEditorGutter()`/`updateSpEdGutter()`の呼び出しを追加（Tabキーでの4スペース挿入は改行を含まないため呼び出し不要と判断）
- **レスポンシブ対応**: `@media (max-width: 640px)`を新設。`.container`の左右padding縮小・`.filter-btn`とボタンのpadding縮小・`.key-tip`（Ctrl+Enter注記）非表示・見出しと進捗表示のフォントサイズ縮小。既存の880pxコンテナレイアウトは無変更
- **微調整**: 実行ボタン（▶実行・▶ステップ実行）の実行中表示を「⏳ 実行中…」に変更し完了後に元のラベルへ復元。`.btn`・`.filter-btn`・`.tab-btn`・両エディタに`:focus-visible`のフォーカスリング（`outline`）を追加（マウスクリック時は表示されずキーボード操作時のみ表示）
- 検証: `node --check`（index.html内JS抽出）合格、div開閉数一致（70/70。ラップ2＋ガター2の計4増）を機械検証。行番号ガター・スクロール同期・フォーカスリング・レスポンシブ表示は実ブラウザでのみ確認可能なためロジックのソースレビューのみで、実機・実ブラウザでの確認は未実施
- SYSTEM_DOC.md 3節・6節・付録（スマホ対応の記述）・12節を更新。feature/task017ブランチで作業。実ブラウザでの行番号表示・スクロール追従・640px以下でのレイアウト崩れ確認・フォーカスリングの見た目はユーザー側で実施予定

### 2026-07-07: TASK-016 — pandas問題12問の追加

- **`problems.js`のみ変更**（末尾に12問追加。既存175問は無変更・`git diff`で確認。すべて`category: "engineering"`）
  - intermediate 7問（i084〜i090）: DataFrame作成/shape・columns確認、read_csv（io.StringIO）、列選択・ブールインデックス、新規列作成（列同士の計算）、sort_values、value_counts、fillna
  - advanced 5問（a072〜a076）: groupby集計（sum）、agg複数集計（sum・mean同時）、merge（SQLのJOINとの対応を解説）、pivot_table（クロス集計）、pandas総合（CSV→クレンジング→集計のミニETL）
- **設計方針の遵守**: `print(df)`のようなDataFrameのrepr（表形式表示）はexpectedOutputに一切使わず、`df.shape`・`list(df.columns)`・`.tolist()`・`.to_dict()`系などバージョン非依存の値のみを出力。descriptionの冒頭に「この問題はpandasを使います。初回実行時は読み込みに数秒かかります」を明記。解説にSQL/素のPythonとの対応を1文追加（既習内容との接続）
- **実装中に発見した問題（検証環境固有の挙動）**: ローカル検証環境（Python 3.14.4）で`df["col"] = ...`という直接代入を書くと、pandas 2.3.1の内部処理が`FutureWarning`（ChainedAssignmentError関連のメッセージ）を出すことが判明。本ツールは`pyodide.setStderr`でstderrもstdoutと同様に出力欄へ表示するため、この警告が混入すると正誤判定が壊れるリスクがあった。原因はPython 3.14の参照カウント挙動の変化にpandasの内部ヒューリスティックが反応しているためと推測（Pyodide側はPython 3.13のため発生しない可能性が高いが、念のため安全側に倒した）。新規列作成・fillna後の再代入を行う3問（i087・i090・a076）はすべて`df.assign(col=...)`に統一して回避し、`-W error::FutureWarning`を付けた実行で全12問が警告なしに完了することを確認
- 検証: 全12問の正解例をローカルvenvのpandas 2.3.1（Pyodide 0.28.3と同一バージョン。依存numpy 2.5.1・python-dateutil・pytzはvenv側の解決結果でPyodide側は2.2.5系だが出力に影響する差異はなし）で実行しexpectedOutputと完全一致を確認（12/12）。全187問のフィールド機械検証（id重複なし・必須フィールド欠損なし・level/category値の妥当性）合格。全187問のanswerCode単体実行監査 187/187 PASS（pandas系はvenv、それ以外はシステムPython3で実行し分岐）。pandas系12問はstderrが空であることも個別に確認（警告混入なし）。`node --check problems.js`合格。`git diff`でproblems.jsが末尾追記のみであることを確認
- SYSTEM_DOC.md 4節（動作確認状況。あわせてTASK-014/015の実ブラウザ確認済み事項を記録漏れから追加）・9節（問題セット。計187問）・12節を更新。feature/task016ブランチで作業。実ブラウザでのpandas12問の表示・判定確認は未実施（ユーザー側で実施予定）

### 2026-07-07: TASK-015 — pandas/numpy実行対応（`ensurePackages()`拡張）

- **`index.html`のみ変更**: `ensurePackages()`にpandas/numpy検出の条件を1つ追加（`/^\s*(import|from)\s+.*\b(pandas|numpy)\b/m`にマッチし未ロード時に`needed.push("pandas")`。numpyのみのimportでもpandasを`loadPackage`すれば依存として自動で入るためpandasのみを対象とする）。TASK-013で実装済みの`ensurePackages(src)`・呼び出し箇所（`runCode()`・ステップ実行タブ）はそのまま流用し、変更なし。`init()`（起動時のPyodide初期化）は無変更で、起動時にpandas/sqlite3をロードしない
- **`CLAUDE.md`**: 「技術上の固定事項」に、追加パッケージはsqlite3・pandas・numpyのみ`ensurePackages()`による遅延ロードで使用可、それ以外の外部パッケージは使用しない旨を追記
- **`SYSTEM_DOC.md`**: 3節（追加パッケージの遅延ロードの説明を更新）・4節（実ブラウザ未確認項目にpandas実行を追加）・付録（外部パッケージ禁止の記述をsqlite3/pandas/numpy許可に更新）
- 検証: jsDelivrのPyodide 0.28.3の`pyodide-lock.json`を再確認しpandas 2.3.1・依存numpy 2.2.5/python-dateutil/pytzの存在を確認（2026-07-07）。検出正規表現をNode.jsでユニット検証（`import pandas` / `from pandas import ...` / `import numpy as np` / コメント行`# import pandas`など9ケース全てOK。コメント行は`^\s*`が行頭の`#`を許容しないため誤検出しない）。`node --check`合格。`git diff`で`ensurePackages()`への3行追加のみであることを確認し、pandas/numpyをimportしないコードの実行経路（`needed.length === 0`で即return）が無変更であることをソースレビューで確認
- feature/task015ブランチで作業、mainにFast-forwardマージ・push済み。実ブラウザでの`import pandas`を含むコードの実行をユーザーが確認（2026-07-07）: 問題タブ・ステップ実行タブの両方でpandasの遅延ロードと変数トレース・print出力が正しく動作
- **追記（TASK-015範囲外の追加修正・ユーザー承認済み）**: リファレンスタブ「16. pandas入門」に残っていた「本ツールでは実行できません（ModuleNotFoundErrorになります）」という2箇所の注記が、TASK-015の対応により誤りになっていたため、実行可能である旨・`print()`で囲まないと画面に表示されない点の注意に更新（`index.html`のみ変更。既存のコード例・見出し・他セクションは無変更）

### 2026-07-07: TASK-014 — リファレンス拡充（SQL・re・datetime・collections/itertools・JSON/CSV・記法の読み方・目次）

- **`index.html`のみ変更**（`#tab-reference`内。既存9セクションの本文は無変更・`git diff`で確認。problems.js・判定ロジック・タブ切替ロジックは対象外）
- **目次パネル**（`.ref-toc`）をリファレンスタブ先頭に追加。既存9セクション＋新規6セクションの`<h3>`に`id="ref-1"`〜`id="ref-16"`を付与し、ページ内リンクで移動できるようにした
- **新規6セクション**（既存の9.の後に挿入。既存「10. pandas入門」は「16. pandas入門」に見出し番号のみ変更）:
  - 10. 記法の読み方（このあとのセクションを読む前に）: ユーザーとの相談（2026-07-07）で追加が決まったミニセクション。`モジュール名.関数名()` / `変数名.メソッド名()` / 先頭大文字の`ClassName(...)` / 文字列内の大文字（SQLキーワードなど）の4パターンを、それぞれ複数行で説明（一言解説だと分かりにくいというフィードバックを受け丁寧化）
  - 11. SQL入門（sqlite3）: connect(":memory:")・execute/executemany・SELECT/WHERE/ORDER BY・GROUP BY/HAVING・JOIN・プレースホルダ(?)
  - 12. 正規表現（re）: search/match/fullmatchの違い・findall/sub・グループ/名前付きグループ・split・主要メタ文字表
  - 13. 日付と時刻（datetime）: strptime/strftime・timedelta・日付の差と比較・書式指定子表
  - 14. collections・itertools: Counter（most_common）・defaultdict・namedtuple・itertools.groupby（事前ソート必須の注意）・chain
  - 15. JSON・CSVの読み書き: json.loads/dumps（ensure_ascii=False・indent）・csv.reader/DictReader・io.StringIO
- 新規CSSは目次用の`.ref-toc`と、インラインコード表示用の`.ref-section code`・箇条書き用の`.ref-section li`のみ追加。既存スタイル（`panel ref-section` / `code-block` / `ref-note`）は変更なし
- 検証: 掲載コード例をすべてPython3（3.14.4）で実行しコメントの出力値と一致を確認（sqlite 3.46.1・re・datetime・collections/itertools・json/csv、いずれもハーネスは`/tmp`に作成し成果物には含めず）。`node --check`（index.html内JS抽出）合格。div開閉数一致（66/66）を機械検証。`git diff`で既存9セクションの本文（見出し以外）が無変更であることを確認
- IMPROVEMENT_ROADMAP.mdのTASK-014設計を「新規6セクション」に更新（当初設計は5セクションだったが、ユーザーとの相談で記法の読み方セクションを追加したため）
- 実ブラウザでの表示確認・目次リンクの動作確認はユーザー側で実施予定

### 2026-07-07: TASK-013 — SQL問題16問＋正規表現問題9問の追加

- **`problems.js`変更**（末尾に25問追加。既存150問は無変更。`git diff`で確認済み）:
  - SQL 16問（sqlite3・`:memory:`）: i071〜i078（intermediate）= SELECT/WHERE/ORDER BY・LIMIT/COUNT・SUM・AVG/GROUP BY/HAVING/LIKE/プレースホルダ、a060〜a067（advanced）= INNER JOIN/LEFT JOIN・NULL/サブクエリ/CASE WHEN/ウィンドウ関数（ROW_NUMBER・SUM OVER）/row_factory/SQL総合
  - 正規表現 9問（re）: i079〜i083（intermediate）= search・group/findall/sub/グループ分解/split、a068〜a071（advanced）= 名前付きグループ/fullmatch/Counterとの組み合わせ/正規表現総合
  - すべて`category: "engineering"`。ID重複なし（i071〜i083・a060〜a071は既存の続き番号）
- **設計方針の遵守**: 全問でORDER BYにより出力順を確定（SQLite実装依存の順序に頼らない）。AVGはround()で丸め。ウィンドウ関数はROW_NUMBER/SUM OVER程度に限定。answerCodeは単体実行で完結（TASK-011の不変条件を遵守）。解説にデータエンジニア実務との接続を1〜2文追加（dbtの中間モデル・ETLの役割分担・SQLインジェクション対策など）
- **2026-07-07 追記（実ブラウザ確認で発見した重大バグの修正・当初設計の前提が誤りだった件）**: 実ブラウザでSQL問題（i071）を実行したところ`ModuleNotFoundError: No module named 'sqlite3'`が発生。Pyodideでは`sqlite3`が「unvendored」（初期同梱されない）扱いで、`pyodide.loadPackage(["sqlite3"])`の明示的な呼び出しが必要と判明（`re`は真のPython組み込みモジュールのため影響なし）。当初のSCOPE（problems.jsのみ）を`index.html`まで拡張し、`ensurePackages(src)`ヘルパーを追加して対応（3節に詳細を追記。TASK-015で計画していたpandas用の遅延ロード機構をsqlite3向けに先行実装した形。TASK-015実施時はこのヘルパーにpandas/numpy検出を追加するだけでよい）。IMPROVEMENT_ROADMAP.mdの誤った前提記述も訂正済み
- 検証: 全25問の正解例をPython3（sqlite 3.46.1）で実行しexpectedOutputと完全一致を確認（25/25。付録B）。全175問のフィールド機械検証合格（付録C・id重複なし）。全175問のanswerCode単体実行監査 175/175 PASS（付録A）。`node --check` 合格（problems.js・index.html）。`git diff`でproblems.jsが末尾追記のみ・index.htmlが`ensurePackages()`追加のみであることを確認
- SYSTEM_DOC.md 9節（問題セット）・3節（技術スタック）を更新（計175問: beginner 21 / intermediate 83 / advanced 71、engineering 48→73）。feature/task013ブランチで作業。修正後の実ブラウザでのSQL16問・正規表現9問の再実行確認はユーザー側で実施予定

### 2026-07-06: TASK-012 — 学習進捗の保存（localStorage）

- **背景**: 従来「解答状況・進行は保存しない」仕様だったが、150問を自走で回すには解答済み表示・再開機能が必要という理由でユーザー承認済み（2026-07-02）の仕様変更
- **`index.html`のみ変更**（`problems.js`は無変更。`git diff`で確認済み）:
  - `localStorage["python-trainer:progress:v1"]` に `{ solved: {id: 日付}, last: {problemId, level, category} }` を保存。`loadProgress()`/`saveProgress()` はtry/catchで保護し、失敗時は`console.warn`のみで従来どおり動作継続
  - 正解判定時（`runCode()` の正解分岐）に `markSolved(currentProblem)` を呼び `solved` を記録
  - `showProblem()` 内で `last`（表示中の問題ID・フィルタ状態）を更新。フィルタ切り替えは`showProblem(pool[0])`を呼ぶ既存実装のため自動的に反映される
  - 起動時、`restoreLastProblem()` が `last.problemId` の存在を`PROBLEMS`配列から確認し、あればフィルタボタンの状態も含めて復元。存在しない・不正なJSON・未知のIDの場合は従来どおりNo.1から開始
  - 進捗表示（`解答済み X / 150（このフィルタ内 Y / Z）`）をカテゴリフィルタの下に新設。問題一覧パネルの解答済み行に✅マークと`li.solved`クラスを付与。パネルヘッダに「進捗をリセット」ボタン（`confirm()`確認後`localStorage.removeItem`）
- **既存機能への影響なし**: 完走祝福画面・🎲ランダム・フィルタAND絞り込み・隠しコマンド2種は無変更で動作（`git diff`で確認）
- **2026-07-07 追記（実ブラウザ確認で発見したバグの修正）**: フィルタ切替で該当0件になった場合（例: beginner×practiceは0件）、`showProblem()`がスキップされる既存仕様（TASK-005）により、その内部で呼んでいた`updateProgressUI()`も一緒にスキップされ、「このフィルタ内」の進捗表示が直前のフィルタの値のまま残るバグがあった。`setupFilterRow`のクリックハンドラで`updateProgressUI()`を無条件に呼ぶよう修正
- 検証: `node --check`相当のJS構文チェック合格。`loadProgress()`/`saveProgress()`のロジックをNode.js上でlocalStorageモックを使い検証（初回空・保存後の再読込一致・壊れたJSONのフォールバック・localStorage例外時のフォールバック・未知problemIdの扱いを確認）。7節・4節・11節を更新。実ブラウザでの動作確認はユーザーが実施済み（2026-07-07。4節参照）

### 2026-07-06: TASK-011 — answerCode欠損の修復

- **背景**: TASK-010 で全150問に追加した `answerCode` のうち、実行監査（付録A相当のハーネスで単体実行し `expectedOutput` と正規化一致するか判定）で **55問**が不一致と判明（IMPROVEMENT_ROADMAP.md記載のヒューリスティック検出時点の見積もり37問より多い。実行監査で再確認した実測値）。原因は2パターン:
  1. TASK-010 の抽出スクリプトが `explanation` 内の正解例コード中の空行で切断し、後続行が欠落（34問）
  2. 正解例自体は完全に抽出できていたが、`starterCode` 側で定義される変数（`orders`・`log`・`items`・`customers` 等）に依存しており単体実行では `NameError` になる（21問）
- **`problems.js`**: 該当55問の `answerCode` を、`explanation` の「正解例:\n\n」以降を段落（空行区切り）単位で累積し単体実行で一致する最短候補を採用、単体で一致しない場合は `starterCode`（コメントのみの行を除去）を前置して再試行する方式で機械的に再生成。`answerCode` 以外のフィールドは無変更（`git diff` で確認済み）。
- **`answerCode` の新しい不変条件を10節に明記**: 単体実行で `expectedOutput` を再現できること。
- 検証: 全150問の `answerCode` 単体実行監査 150/150 PASS（付録A）。フィールド機械検証 ALL OK 150問（付録C・id重複なし）。`node --check problems.js` 合格。`git diff` で `answerCode` 以外に差分がないことを確認（55行の置換のみ、他フィールドの追加・削除0件）。feature/task011ブランチで作業。実ブラウザでのステップ実行タブ「この問題の答え」チップの動作確認は未実施（ユーザー側で実施予定）。

### 2026-06-26: TASK-010 — answerCode追加・エラー解説UI・「この問題の答え」チップ

- **`problems.js`**: 全150問に `answerCode` フィールドを追加（Node.jsスクリプトで `explanation` 内の「正解例:\n\n」ブロックを抽出し挿入）。undefined 0件・空文字列 0件。`node --check` 合格。
- **ステッパータブ「📝 この問題の答え」チップ** (`index.html`): サンプルリスト先頭に動的追加。クリックで当該問題の `answerCode` をエディタに読み込む。問題切替（`showProblem()` 呼び出し）時に `active` クラスをリセット（エディタ内容は変更しない）。`currentProblem` が null の場合は非表示。
- **エラー解説「📖 このエラーを読む」** (`index.html`): 問題タブ・ステッパータブのエラー発生時に `<details>` 折りたたみ形式で表示。共通関数 `buildErrorExplain(errorMessage)` に14パターンの `ERROR_PATTERNS`（NameError・TypeError 4種・IndexError・KeyError・ValueError・AttributeError・ZeroDivisionError・RecursionError・IndentationError・UnboundLocalError・SyntaxError）で正規表現マッチし、変数名・型名を埋め込んだ日本語解説を生成。マッチしない場合は非表示。
- **既存機能は無変更**: 判定ロジック・Pyodide処理・リファレンスタブ・問題一覧・ステッパー本体はすべて従来どおり動作する。
- 検証: `node --check` 合格（problems.js・index.html内JS）。feature/task010ブランチで開発、mainにFast-forwardマージ後push。実ブラウザ確認はユーザー側で実施予定。

### 2026-06-24: TASK-009 — 「🔍 ステップ実行」タブを追加

- **新タブ「ステップ実行」を追加**（`index.html` のみ変更）: Pythonコードを1行ずつ実行して変数の変化・print出力・実行行を可視化する学習支援機能。
- **タブ切替ロジックを3タブ対応に書き換え**: `TAB_NAMES = ["problems", "reference", "stepper"]` の汎用ループ方式に変更（既存の二択ロジックを置き換え）。
- **Pyodideの共有**: 既存クロージャ変数 `pyodide` をそのまま利用し、新規の `loadPyodide` 呼び出しは行わない（2重ロードなし）。
- **Pythonトレース関数**: `run_trace` / `_snap` を `traceReady` フラグで初回のみ `pyodide.runPythonAsync()` で定義。`run_trace` は `sys.stdout` を `StringIO` に差し替えて自前で出力を捕捉し、元に戻すため既存の `setStdout` フックと干渉しない。
- **CSSは既存変数のみ使用**: `--yellow`（変化）・`--green`（新規）・`--accent`・`--purple`・`--text-dim` 等の既存変数で差分ハイライト・型別色分けを実装。新規の色変数なし。
- **既存機能は無変更**: `problems.js`・判定ロジック・`init()`・リファレンス・問題一覧・隠しコマンドのすべてが従来どおり動作する。
- **セキュリティ**: 外部送信（fetch/XHR/WebSocket/sendBeacon）・外部CDN追加・cdnjs使用・ストレージ保存なし。
- 検証: node --check（index.html内JS抽出）合格。feature/stepperブランチで開発、mainにFast-forwardマージ後push。実ブラウザ確認は未実施（ユーザー側で実施予定）。

### 2026-06-11: TASK-006 — 問題を50問→150問に増強（foundation +20 / engineering +45 / practice +35）

- **foundation +20問**（b016〜b021・i021〜i028・a016〜a021）: while文・in演算子・len・文字列繰り返し・値交換・累算代入・enumerate・zip・辞書get・2次元リスト・スライス応用・continue/break・set・f-string書式・辞書内包表記・*args・`__str__`・ジェネレータ・all/any・複数キーsorted。
- **engineering +45問**（i029〜i053・a022〜a041）: JSON処理（8）・集計（10）・欠損値/クレンジング（8）・CSV処理（8）・ログ解析（6）・ETL（5）。標準ライブラリ（json・csv・io・collections）のみ使用。
- **practice +35問**（i054〜i070・a042〜a059）: ECサイト「PyMart」編のストーリー連作（売上分析・顧客分析・在庫/運用）＋ dbt的思考（staging/intermediate/mart）・APIレスポンス加工・KPIダッシュボード。pandasは不使用（index.htmlにパッケージロード処理がないため、外部パッケージは動作しない。pandasの概念説明をリファレンスタブに追加する件は別タスクで対応予定）。
- 既存50問の内容・category・levelは無変更。`index.html`・判定ロジック・Pyodide処理も無変更。ファイル分割は実施しない（分割すると `index.html` への `<script>` タグ追加が必要になるため）。
- 検証: 追加100問すべての正解例をPython 3で実行し `expectedOutput` と完全一致を確認（/tmp上のハーネス使用）。全150問の必須フィールド・id重複・category/level値をNode.jsで機械検証。`node --check` 構文チェック合格。実ブラウザ確認は未実施。

### 2026-06-11: TASK-005 — 順番出題・通し番号・ランダムボタン・完走祝福画面

- **「次の問題」を順番遷移に変更**（`index.html`）: フィルタ内で現在の問題の次の問題へ進む方式に変更（従来はランダム）。起動時は No.1 から開始、難易度フィルタ切り替え時はそのレベルの最初の問題を表示。
- **通し番号の表示**: 問題タイトルと問題一覧パネルに「No.X」（全レベル通番。`PROBLEMS` 配列の並び順から自動計算）を表示。`problems.js` のデータ自体は無変更。
- **🎲 ランダムボタンを新設**: 従来のランダム選択ロジック（直前と同じ問題は回避）を専用ボタンとして残した。
- **完走祝福画面**: フィルタ内の最後の問題で「次の問題」を押すと祝福オーバーレイを表示し、「最初の問題に戻る →」ボタンでフィルタ内の先頭に戻る。進行の保存は行わない（仕様）。
- 判定ロジック・Pyodide読み込み処理・リファレンスタブ・`problems.js` は無変更。
- 検証はNode.jsによる構文チェック（`index.html` 内JS・`problems.js`）まで実施し合格。実ブラウザ確認は未実施。

### 2026-06-11: TASK-004 — 問題一覧パネル・隠しコマンド追加

- **問題一覧パネル**（`index.html`）: タブバー右端に「📋 問題一覧」ボタンを新設。右スライドインのサイドパネルに難易度バッジ＋タイトルの一覧を表示。クリックでジャンプ、現在問題のハイライト、難易度フィルタ連動、×/背景クリック/Escで閉じる。
- **隠しコマンド2種**（`index.html`）: 猫コマンド（にゃ～ん/にゃーん/nyan で判定スキップ・16パターンランダム表示）と Konami Code（↑↑↓↓←→←→BA で🎉表示・3秒自動消去）。
- `problems.js` は無変更（titleフィールドは全50問に実装済みだったため）。判定ロジック・Pyodide処理・リファレンスタブも無変更。
- 検証はNode.js構文チェック＋猫アート16パターンのレンダリング確認まで。実ブラウザ確認は未実施。

### 2026-06-11: TASK-003 — ドキュメント整備

- プロジェクトルートに CLAUDE.md（PMルール・プロジェクト規約）と TASK_LOG.md（タスク完了記録）を新規作成。
- SYSTEM_DOC.md を現状（50問・リファレンスタブ・解説折りたたみ仕様）に合わせて全面更新。
- `index.html`・`problems.js` は無変更。

### 2026-06-11: TASK-002 — 解説折りたたみ・50問化・リファレンスタブ追加

**① 不正解時の解説をデフォルト折りたたみに変更**（`index.html`）
- 従来は不正解・エラー時に解説（`details.explanation`）が自動で開いていたが、正解・不正解・エラーのすべてで折りたたみ表示に統一した（`showResult()` の `open = true` を廃止）。
- 「期待される出力」ブロックの表示制御（不正解時のみ表示）は従来どおり。

**② 問題を10問 → 50問に増強**（`problems.js`）
- 既存10問は無変更のまま、40問を追加（beginner 15 / intermediate 20 / advanced 15）。
- 追加ID: b004〜b015、i004〜i020、a005〜a015。
- ファイル操作問題（a011・a012）はPyodideの仮想ファイルシステムで完結する相対パスの open / write / read のみ使用。
- 全50問について正解例コードをPython 3で実行し、`expectedOutput` との一致を確認済み（50/50）。

**③ 「Python基礎リファレンス」タブを新設**（`index.html`）
- ステータスバー直下に「📝 問題」「📖 リファレンス」のタブバーを追加。既存UIを `#tab-problems`、リファレンスを `#tab-reference` に分離した。
- リファレンスは9セクション構成。各セクションは見出し＋説明文＋コードブロック＋躓きポイント注記。
- 判定ロジック・Pyodide読み込み処理は無変更。

### 2026-06-11: TASK-001 — Pyodideの読み込み失敗を修正

**症状**: 起動時に「Pyodideの読み込みに失敗しました」と表示され、エラー詳細欄には `[object Object]` としか表示されない。`pyodide.js` 本体への接続は 200 OK だった。

**原因**（2つの問題が重なっていた）:

1. **CDNにランタイムファイルが揃っていなかった（読み込み失敗の根本原因）**
   cdnjs.cloudflare.com には `pyodide.js` 本体（200）はあるが、`loadPyodide()` が実行時に追加取得するファイルが欠けていた。
   - `pyodide-lock.json` → **404**
   - `python_stdlib.zip` → **403**

2. **エラーハンドリングのバグ（`[object Object]` 表示の原因）**
   `init()` の catch 内でエラーを `String(err)` で文字列化していた。Pyodide は Error インスタンスでないオブジェクトで reject することがあり、その場合 `String()` は `[object Object]` を返すため、本来のエラー内容が読めなくなっていた。

**修正内容**（いずれも `index.html`）:

- CDN を Pyodide 公式推奨の jsDelivr に変更（`<script src>` と `PYODIDE_INDEX_URL` の両方。バージョンは 0.28.3 のまま）。
  - 変更前: `https://cdnjs.cloudflare.com/ajax/libs/pyodide/0.28.3/`
  - 変更後: `https://cdn.jsdelivr.net/pyodide/v0.28.3/full/`
- `errorToText()` 関数を追加。`Error` なら `message`、それ以外のオブジェクトは `JSON.stringify` で内容を表示する。`init()` と `runCode()` の両方の catch で使用。
- `console.error()` で元のエラーオブジェクトをコンソールにも出力するようにした（デバッグ用）。
- エラー文字列の画面表示を `innerHTML` への文字列連結から `textContent` での挿入に変更（HTMLとして解釈されないように）。
- `loadPyodide` が未定義の場合（`pyodide.js` 自体の読み込み失敗時）に、明示的なエラーメッセージを出すチェックを追加。

## 13. 収益化・公開方法

### GitHub Pages で公開する

1. GitHubで新規リポジトリを作成する
2. `python-trainer` フォルダの中身をリポジトリのルートにプッシュする
   ```bash
   cd python-trainer
   git init
   git add .
   git commit -m "initial commit"
   git remote add origin https://github.com/<ユーザー名>/<リポジトリ名>.git
   git push -u origin main
   ```
3. リポジトリの **Settings → Pages** を開き、Source を「Deploy from a branch」、Branch を `main` / `(root)` に設定して保存する
4. 数分後に `https://<ユーザー名>.github.io/<リポジトリ名>/` で公開される

静的ファイルのみで構成されているため、追加のビルド設定は不要です。

### itch.io で公開する

1. `python-trainer` フォルダの中身（`index.html` がZIPのルート直下に来るように）をZIP圧縮する
2. itch.io にログインし、**Upload new project** を選択する
3. 「Kind of project」で **HTML** を選択し、ZIPをアップロードする
4. 「This file will be played in the browser」にチェックを入れる
5. 価格設定（無料 / 寄付制 / 有料）を選んで公開する

いずれの公開方法でも、Pyodide はユーザーのブラウザがCDNから直接取得するため、ホスティング側に特別な設定は不要です。
