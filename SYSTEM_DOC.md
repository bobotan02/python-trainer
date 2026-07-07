# SYSTEM_DOC.md — Python トレーナー

最終更新: 2026-07-07（TASK-013）

## 1. プロジェクト概要

ブラウザ完結型のPython学習ツールです。Pyodide（ブラウザ内で動作するPythonランタイム）を使い、ユーザーが書いたPythonコードをブラウザ内のサンドボックスで実行して、その標準出力を問題ごとの期待出力と文字列比較することで正誤判定を行います。サーバーサイド処理・外部API・認証機能は一切なく、`index.html` をブラウザで開くだけで動作します（Pyodide本体のみCDNから取得するため、インターネット接続は必要です）。

主な機能:

- **問題演習**: 全187問（難易度3段階 × カテゴリ3種・フィルタ付き）。No.1 から順番に出題され、ランダム出題ボタンも併設。コードを実行して標準出力の完全一致で自動判定。フィルタ内の最後の問題で「次の問題」を押すと完走祝福画面を表示
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
| コードエディタ | `<textarea>`（外部エディタライブラリ不使用。Tabキーで4スペース挿入、Ctrl+Enterで実行に対応） |
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

### 実装時に行った機械的検証

- `problems.js` および `index.html` 内JavaScriptの構文チェック（Node.jsによる。TASK-006の変更後にも再実施し合格）
- 全50問について、解説に記載した正解例コードをPython 3で実行し、出力が `expectedOutput` と一致することを確認（50問すべて一致。TASK-002時点）
- TASK-006で追加した100問すべてについて、正解例コードをPython 3（/tmp上の検証ハーネス）で実行し、出力が `expectedOutput` と完全一致することを確認（100/100一致。2026-06-11実施）
- 全150問について、必須フィールド9項目（id・level・category・title・description・starterCode・expectedOutput・explanation・hint）の存在・id重複なし・category/levelの値の正当性をNode.jsスクリプトで機械検証（2026-06-11実施）
- **TASK-012**: `loadProgress()`/`saveProgress()` のロジックをNode.js上でlocalStorageモックを使い検証（初回空・保存後の再読込一致・壊れたJSONのフォールバック・localStorage例外時のフォールバック・未知problemIdの扱いをすべて確認。2026-07-06実施）。DOM操作を伴う実ブラウザ相当の検証はできないため、実ブラウザ確認は未実施として本節に明記

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
- **問題エリア**: 難易度バッジ・通し番号付きタイトル・問題文・ヒント（折りたたみ。hint がない問題では非表示）
- **エディタ**: Tabキーで4スペース挿入、Ctrl+Enter（macはCmd+Enter）で実行
- **ボタン**: ▶ 実行 / コードをリセット（starterCodeに戻す）/ 次の問題（フィルタ内で次の番号へ順番に進む）/ 🎲 ランダム（フィルタ内からランダム。対象が2問以上ある場合は直前と同じ問題は出題しない）
- **完走祝福画面**: フィルタ内の最後の問題で「次の問題」を押すと、完走をたたえるオーバーレイ（🎉 コンプリート！）を表示。「最初の問題に戻る →」ボタンでフィルタ内の最初の問題に戻る。解答状況・進行は保存しない（仕様）
- **判定表示**:
  - 正解 → 「✅ 正解！」
  - 不正解 → 「❌ 不正解」＋期待される出力を表示
  - Python例外 → 「⚠️ エラー」＋エラーメッセージを出力欄に表示
  - **解説（📘）はどの判定でも折りたたみ状態で表示される**（クリックで展開。TASK-002で不正解・エラー時の自動展開を廃止）
  - **エラー解説（📖 このエラーを読む）はエラー時のみ表示**（14パターンの正規表現で例外種別・変数名・型名を特定し日本語解説を生成。マッチしない場合は非表示）

### 📋 問題一覧パネル

タブバー右端の「📋 問題一覧」ボタンで開く、右からスライドインするサイドパネル（オーバーレイ表示のため既存レイアウトには影響しない）。

- 各行に難易度バッジ＋通し番号付き問題タイトル（No.X 形式）を表示
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

- **コード入力エリア**: サンプルリスト先頭の「📝 この問題の答え」チップ（問題タブで選択中の問題の `answerCode` をエディタに読み込む。問題切替時に非選択状態にリセット・エディタ内容は保護される。`currentProblem` が null の場合は非表示）と、固定サンプル4件（辞書ループ・関数とスコープ・参照の落とし穴・辞書で数える）から選択するか、自由にコードを入力する。Tabキーで4スペース挿入に対応
- **ステッパー**: ◀▶ボタン・スライダー・「▶ 自動」（750ms間隔の自動再生）でステップを移動する
- **コード表示**: 実行中の行を黄色でハイライト表示（行番号付き）
- **スコープ表示**: 現在のスコープ（グローバル / 関数名()）と行番号・イベント種別（実行 / 関数に入る ↓ / 戻る ↑）を表示
- **変数パネル**: そのステップ時点のローカル変数を一覧表示。前ステップからの変化を色で区別（変化＝黄枠・黄背景 / 新規＝緑枠・緑背景）。型別の色分け（文字列＝緑系・数値＝アクセント・bool＝紫・None＝グレー・コレクション型はブラケット）
- **print出力欄**: そのステップまでに出力されたprint内容を段階的に表示
- **エラー表示**: 例外が発生した場合は赤帯でエラー内容を表示し、落ちた直前までの変数状態は下で確認できる。エラー解説「📖 このエラーを読む」折りたたみを直後に表示（`buildErrorExplain()` で日本語解説生成。マッチしない場合は非表示）
- **Pyodide共有**: 既存のPyodideインスタンス（`init()`で初期化されたもの）をそのまま利用。新規の`loadPyodide`呼び出しは行わない
- **セキュリティ**: コード・変数・出力は外部に送信しない（fetch/XHR/WebSocket/sendBeacon なし）。ステップ実行タブ自体はlocalStorageを使わない（学習進捗の保存は📝問題タブのみ。7節参照）

## 7. 学習進捗の保存（localStorage）

TASK-012（2026-07-06）で追加。以前は「解答状況・進行は保存しない」仕様だったが、150問を自走で回すために変更した（ユーザー承認済み・2026-07-02）。

- **保存先・キー**: `localStorage`。キーは `"python-trainer:progress:v1"` の1つのみ。GitHub Pagesは `ユーザー名.github.io` を他リポジトリのページと共有するオリジンになるため、専用プレフィックス付きキーにしている
- **データ形状**:
  ```json
  {
    "solved": { "b001": "2026-07-06", "i003": "2026-07-06" },
    "last": { "problemId": "i015", "level": "all", "category": "all" }
  }
  ```
- **保存される内容**: 問題ID・正解した日付・最後に表示していた問題ID/フィルタ状態のみ。**コードの内容や実行結果は保存しない**。外部送信は一切なし
- **保存タイミング**:
  - 正解判定時（`runCode()` の正解分岐で `markSolved(currentProblem)` を呼ぶ）に `solved[問題ID]` へその日の日付を記録
  - 問題表示時（`showProblem()`）に `last`（表示中の問題ID・難易度フィルタ・カテゴリフィルタ）を更新。フィルタ切り替えは内部的に `showProblem()` を呼ぶ実装のため、フィルタ変更時も自動的に反映される
- **復元**: 起動時に `last.problemId` が `PROBLEMS` 配列内に存在すれば、そのフィルタ状態と問題を復元して表示する。`localStorage` が空・JSON不正・未知のIDの場合は従来どおり No.1 から開始する（`restoreLastProblem()` がこの判定を行う）
- **UI**:
  - カテゴリフィルタの下に進捗表示（例: `解答済み 12 / 150（このフィルタ内 5 / 21）`）。正解のたび・問題表示のたびに更新
  - 問題一覧パネルの各行で、解答済み問題のタイトル先頭に✅を表示（`li.solved` クラス）
  - 問題一覧パネルのヘッダに「進捗をリセット」ボタン。`confirm()` で確認後 `localStorage.removeItem` し、表示も即時更新
- **localStorageが使えない環境（プライベートブラウジング等）への対応**: `loadProgress()`/`saveProgress()` を try/catch で保護し、失敗時は `console.warn` を出しつつ空の進捗として従来どおり動作する（アプリの停止・エラー表示は起きない）
- **既存機能への影響なし**: 完走祝福画面・🎲ランダム・フィルタAND絞り込み・隠しコマンド2種は本機能追加後も無変更で動作する（`git diff` でproblems.jsに変更がないことを確認済み。index.htmlの変更範囲は本機能に関する追記のみ）
- **動作確認状況**: 「正解→リロードで✅・進捗率・表示中問題が復元される」という一連の流れは、Node.js上でlocalStorageの読み書きロジックのみを模擬検証済み（保存→再読込→復元の値が一致することを確認）。**実ブラウザでの動作確認は未実施**（ユーザー側で実施予定。4節参照）

## 8. 正誤判定の仕組み

`index.html` 内の実装は次のとおりです。

1. **実行**: ユーザーのコードを `pyodide.runPythonAsync()` で実行する。実行ごとに新しい名前空間（Pythonの `dict`）を生成して渡すため、前回実行時の変数や関数は次の実行に残らない。
2. **出力捕捉**: `pyodide.setStdout()` / `setStderr()` の `batched` オプションで標準出力を行単位で収集し、改行で結合する。
3. **正規化**: ユーザー出力と `expectedOutput` の両方に対して、次の正規化を行う。
   - `\r\n` を `\n` に統一
   - 各行の末尾の空白・タブを削除
   - 全体の前後の空白を削除（`trim`）
4. **比較**: 正規化後の文字列を `===` で比較する。

## 9. 問題セット（全187問）

IDは難易度ごとの連番（b=beginner / i=intermediate / a=advanced）。カテゴリ（foundation / engineering / practice）は難易度と独立しており、各問題の `category` フィールドで指定する。

**難易度別の内訳**

| 難易度 | 問題数 | ID | 主なテーマ |
|--------|--------|------|-----------|
| beginner | 21問 | b001〜b021 | print・変数・四則演算・文字列操作（スライス・連結・f文字列・繰り返し）・数値演算（//・%・abs・round）・条件分岐（if/elif/else）・型変換・while文・in演算子・len・多重代入・累算代入 |
| intermediate | 90問 | i001〜i090 | リスト・辞書・for/while・関数・文字列メソッド・enumerate・zip・set・2次元リスト・スライス応用・f-string書式、JSON読み書き・件数/グループ集計・Counter・欠損値処理・クレンジング・CSV（reader/DictReader）・ログ解析、ECサイト実務シミュレーション（売上・客単価・送料・在庫・顧客分析）、SQL基礎（sqlite3: SELECT/WHERE/ORDER BY/LIMIT/COUNT・SUM・AVG/GROUP BY/HAVING/LIKE/プレースホルダ）、正規表現基礎（re: search/findall/sub/グループ/split）（TASK-013）、**pandas基礎（DataFrame作成・read_csv・列選択/ブールインデックス・新規列作成・sort_values・value_counts・fillna）**（TASK-016で+7問） |
| advanced | 76問 | a001〜a076 | クラスと継承・例外処理・再帰・ファイル操作・lambda・map・filter・内包表記・ジェネレータ・可変長引数・`__str__`・all/any、API加工・整形JSON・構成比・2段階集計・ランキング・外れ値/平均値補完・突合チェック・datetime・ETL（結合・フラット化・パイプライン）、KPIダッシュボード・dbt的思考（staging/intermediate/mart）、SQL応用（JOIN・サブクエリ・CASE WHEN・ウィンドウ関数ROW_NUMBER/SUM OVER・row_factory）・正規表現応用（名前付きグループ・fullmatch・ログ解析×Counter）（TASK-013）、**pandas応用（groupby集計・agg複数集計・merge・pivot_table・CSV→クレンジング→集計のミニETL総合）**（TASK-016で+5問） |

**カテゴリ別の内訳**

| カテゴリ | 問題数 | 内容 |
|----------|--------|------|
| foundation | 67問 | Python基礎文法（print・if・loop・list・dict・function・string・class・exception ほか） |
| engineering | 85問 | データ処理・JSON・ETL・集計・欠損値・CSV・ログ解析、SQL（sqlite3）・正規表現（re）（TASK-013で+25問）、pandas（TASK-016で+12問） |
| practice | 35問 | 実務シミュレーション（ECサイト編ストーリー連作）・KPI分析・dbt的思考・APIレスポンス加工。**すべて標準ライブラリのみで実装**（pandasを使う問題はengineeringカテゴリのTASK-016分のみ） |

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
- **スマホ最適化は未対応**: PCのブラウザでの利用を想定している。
- **学習進捗はブラウザ・端末ごとに独立**: `localStorage`はブラウザ内保存のため、別のブラウザ・端末・シークレットモードでは進捗は共有されない。ブラウザの「サイトデータを削除」等を行うと進捗も消える。

## 12. 修正履歴

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
