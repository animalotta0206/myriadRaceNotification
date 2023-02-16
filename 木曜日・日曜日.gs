//会場告知
function myriadRace2() {
 
  var options =
  {
    "method" : "post",
    "contentType" : "application/json",
    "payload" : JSON.stringify(
      {
        "content" : "> ミリアドレース会場告知\r**対象ゲーム**\r> パトルプッシャーリアライズ\r> パトルプッシャープレゼンス\r> トリプレットシャワー\r> スカイドリーム\r> パトルルーレット\r> ブラックジャック\r> フルーツチェイン"
      }
    )
  };
 
  UrlFetchApp.fetch("https://discord.com/api/webhooks/1075722614842069053/sTWG2dlKnOCgB2VMxDlTl4RWO2roHCpbcxuSKLe8t8wSFjMJOEOfQDo80z-RIFKFWGhz", options);
  
 //新しいトリガーの作成次の週に実行されるようにする。
 let time = new Date();
 const thisDay = time.getDay()
 if(thisDay == 4){
  time.setDate(time.getDate() + 3); //日付
  time.setHours(15); //時
  time.setMinutes(0); //分
  time.setSeconds(0);　//秒
  ScriptApp.newTrigger('myriadRace2').timeBased().at(time).create();  
    }
  else{
   time.setDate(time.getDate() + 4); //日付
  time.setHours(15); //時
  time.setMinutes(0); //分
  time.setSeconds(0);　//秒
  ScriptApp.newTrigger('myriadRace2').timeBased().at(time).create();  
    }
  }
