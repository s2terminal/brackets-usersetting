# brackets-usersetting

[Brackets](http://brackets.io/) の設定ファイル

## 設定方法

設定ファイルにシンボリックリンクを貼る

### Macの例

ターミナルを起動し下記コマンドを実行

```
$ cd /Users/ユーザ名/Library/Application\ Support/Brackets/
$ ln -s /Users/ユーザ名/git/brackets-usersetting/brackets.json ./brackets.json
$ ln -s /Users/ユーザ名/git/brackets-usersetting/keymap.json ./keymap.json
$ ln -s /Users/ユーザ名/git/brackets-usersetting/extensions ./extensions
```

#### 参考

[Bracketsエディタの設定を複数PC環境で同期させる方法](http://nelog.jp/sync-brackets-settings)