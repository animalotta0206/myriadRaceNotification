//会場告知のスクリプト
function myriadRace1() {
 
  var options =
  {
    "method" : "post",
    "contentType" : "application/json",
    "payload" : JSON.stringify(
      {
        "content" : "ミリアドレース本日の会場告知\r**対象ゲーム**\r> パトルプッシャーリアライズ\r> パトルプッシャープレゼンス\r> トリプレットシャワー\r> スカイドリーム\r> スフィードパラダイス\r> パトルルーレット\r> パスロット"
      }
    )
  };
 
  UrlFetchApp.fetch("<Your WebhookURL>", options);
 
  //無効なトリガーを削除
  const triggers = ScriptApp.getProjectTriggers();
  for(let i=0;i<triggers.length;i++){
    if(triggers[i].getHandlerFunction()==='myriadRace1'){
      ScriptApp.deleteTrigger(triggers[i]);
    }
  }

  //新しいトリガーの作成
  //曜日によって設定日時を変更するようにする。
 let time = new Date();
 const thisDay = time.getDay();
if(thisDay == 2){
  time.setDate(time.getDate() + 4); //日付 ここは操作しないでください。
  time.setHours(15); //時
  time.setMinutes(0); //分
  time.setSeconds(0);　//秒
  ScriptApp.newTrigger('myriadRace1').timeBased().at(time).create();  
    }
else{
 time.setDate(time.getDate() + 3); //日付 ここは操作しないでください。
  time.setHours(15); //時
  time.setMinutes(0); //分
  time.setSeconds(0);　//秒
  ScriptApp.newTrigger('myriadRace1').timeBased().at(time).create();  
   }
 }
