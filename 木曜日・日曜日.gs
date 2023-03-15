//会場告知
function myriadRace2() {
 
  var options =
  {
    "method" : "post",
    "contentType" : "application/json",
    "payload" : JSON.stringify(
      {
        "content" : "> ミリアドレース会場告知\r**対象ゲーム**\r> パトルプッシャーリアライズ\r> パトルプッシャープレゼンス\r> トリプレットシャワー\r> スカイドリーム\r> スフィードパラダイス\r> パトルルーレット\r> ブラックジャック\r> フルーツチェイン"
      }
    )
  };
 
  UrlFetchApp.fetch("<Your webhookURL", options);
 
 //無効なトリガーを削除
  const triggers = ScriptApp.getProjectTriggers();
  for(let i=0;i<triggers.length;i++){
    if(triggers[i].getHandlerFunction()==='myriadRace2'){
      ScriptApp.deleteTrigger(triggers[i]);
    }
  }
  
 //新しいトリガーの作成次の週に実行されるようにする。
 let time = new Date();
 const thisDay = time.getDay()
 if(thisDay == 4){
  time.setDate(time.getDate() + 3); //日付　ここは操作しないでください。
  time.setHours(15); //時
  time.setMinutes(0); //分
  time.setSeconds(0);　//秒
  ScriptApp.newTrigger('myriadRace2').timeBased().at(time).create();  
    }
  else{
   time.setDate(time.getDate() + 4); //日付　ここは操作しないでください。
  time.setHours(15); //時
  time.setMinutes(0); //分
  time.setSeconds(0);　//秒
  ScriptApp.newTrigger('myriadRace2').timeBased().at(time).create();  
    }
  }
