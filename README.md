# myriadRaceNotification
メダルゲームシュミレーションゲーム　「パトネットリゾート２」のイベント、ミリアドレースの告知をするDiscordのwebhookで動作するbotです。<br>
webhookとGoogleAppScriptの設定をすると稼働できます。

## セットアップ
まず、Discordのテキストチャンネルの設定から、`提携サービス->ウェブフック->新しいウェブフック`を作成します。<br>
作成したら、ウェブフックURLをコピーします。このURLは後で使用します。<br>
次に、[GoogleAppScript](https://script.google.com/home)のダッシュボードに移動してください。<br>
新しいスクリプトを作成し、[火曜日・土曜日.gs](https://github.com/animalotta0206/myriadRaceNotification/blob/main/%E7%81%AB%E6%9B%9C%E6%97%A5%E3%83%BB%E5%9C%9F%E6%9B%9C%E6%97%A5.gs)と[木曜日・日曜日.gs](https://github.com/animalotta0206/myriadRaceNotification/blob/main/%E6%9C%A8%E6%9B%9C%E6%97%A5%E3%83%BB%E6%97%A5%E6%9B%9C%E6%97%A5.gs)のコードをコピー&ペーストしてください。<br>
`<Your WebhookURL>`にはDiscordでコピーしたウェブフックURLを貼り付けてください。

## トリガーの設定
時計のアイコンから、トリガーの設定に移動します。<br>
`myriadRase1`は火曜日・土曜日<br>
`myriadRase2`は木曜日・日曜日です。<br>
トリガーの時刻設定に関しては任意です。ただし、曜日に注意してください

## 自動告知
このスクリプトは、実行されると次回以降は自動で告知されるように設定されております。<br>
```js
 let time = new Date();

  time.setDate(time.getDate() + 7); //日付 触らないでください。
  time.setHours(15); //時 24時間形式で設定可能
  time.setMinutes(0); //分 0〜59の間で指定
  time.setSeconds(0);　//秒　0〜59の間で指定
  ScriptApp.newTrigger('myriadRace1').timeBased().at(time).create();  
    }
```
この部分を操作することで、告知時間を秒単位で変更することができます。

## 注意事項
ウェブフックURLは、紛失すると悪意のある第三者に悪用される可能性があるので、<br>
パスワードと同じように**厳重に**__保管・管理してください。__

### お問い合わせは…
Discord:`animalotta0206#0556`までおねがいします。
