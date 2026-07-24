PROJECT D Ver.5.0 β2 差分更新

画像フォルダを使わず、サムネイルをすべてリポジトリ直下へ配置する修正版です。

アップロード方法:
1. ZIPを展開
2. 中の全ファイルをGitHubリポジトリ直下へアップロードして上書き
3. dragon-thumbsフォルダは不要です

更新ファイル:
- dragons.html
- dragons-v5.css
- dragons-v5.js
- thumb-*.webp / thumb-placeholder.png

画像参照を ./thumb-ファイル名 に変更し、GitHub上のフォルダ階層による読み込み失敗を回避しています。
