# myriadRaceNotification
メダルゲームシュミレーションゲーム　「パトネットリゾート２」のイベント、ミリアドレースの告知をするDiscordのwebhookで動作するbotです。<br>
webhookとGoogleAppScriptの設定をすると稼働できます。

## セットアップ
まず、[GoogleAppScript](https://script.google.com/home)のダッシュボードに移動してください。<br>
新しいスクリプトを作成し、[火曜日・土曜日.gs](https://github.com/animalotta0206/myriadRaceNotification/blob/main/%E7%81%AB%E6%9B%9C%E6%97%A5%E3%83%BB%E5%9C%9F%E6%9B%9C%E6%97%A5.gs)と[木曜日・日曜日.gs](https://github.com/animalotta0206/myriadRaceNotification/blob/main/%E6%9C%A8%E6%9B%9C%E6%97%A5%E3%83%BB%E6%97%A5%E6%9B%9C%E6%97%A5.gs)のコードをコピー&ペーストしてください。

## トリガーの設定
時計のアイコンから、トリガーの設定に移動します。<br>
`myriadRase1`は火曜日・土曜日<br>
`myriadRase2`は木曜日・日曜日です。<br>
トリガーの時刻設定に関しては任意です。ただし、曜日に注意してください

## 自動告知
このスクリプトは、実行されると翌週にも自動で告知されるように設定されております。<br>
```js
 //新しいトリガーの作成次の週に実行されるようにする。
 let time = new Date();

  time.setDate(time.getDate() + 7); //日付 触らないでください。
  time.setHours(15); //時 24時間形式で設定可能
  time.setMinutes(0); //分 0〜59の間で指定
  time.setSeconds(0);　//秒　0〜59の間で指定
  ScriptApp.newTrigger('myriadRace1').timeBased().at(time).create();  
    }
```
この部分を操作することで、告知時間を秒単位で変更することができます。

### お問い合わせは…
Discord:`animalotta0206#0556`までおねがいします。
