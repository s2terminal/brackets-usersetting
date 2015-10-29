# brackets-usersetting

[Brackets](http://brackets.io/) の設定ファイル

## 設定方法

設定ファイルにシンボリックリンクを貼る

### Windowsの例

管理者権限でコマンドプロンプトを起動し、下記コマンドを実行

```
cd "C:\Users\ユーザ名\AppData\Roaming\Brackets"
cmd /c mklink brackets.json  "C:\Users\ユーザ名\Documents\git\brackets-usersetting\brackets.json" 
cmd /c mklink keymap.json    "C:\Users\ユーザ名\Documents\git\brackets-usersetting\keymap.json" 
cmd /c mklink /D extensions  "C:\Users\ユーザ名\Documents\git\brackets-usersetting\extensions" 
```

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
