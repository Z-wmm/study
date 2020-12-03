function getDate(connect,hasWeek){
  let date  = new Date();
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();
  let week = date.getDay();
  let resultWeek = '';
  switch (week) {
    case 0:
      resultWeek = '日';
      break;
    case 1:
      resultWeek = '一';
      break;
    case 2:
      resultWeek = '二';
      break;
    case 3:
      resultWeek = '三';
      break;
    case 4:
      resultWeek = '四';
      break;
    case 5:
      resultWeek = '五';
      break;
    case 6:
      resultWeek = '六';
      break;
  }
  if(hasWeek){
    return year + connect + month + connect + day + " 星期" + resultWeek;
  }else{
    return year + connect + month + connect + day;
  }
}
function getTime(connect){
  let date  = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  hour < 10 ? hour = "0"+ hour : hour;
  minute < 10 ? minute = "0"+ minute : minute;
  second < 10 ? second = "0"+ second : second;
  return hour + connect + minute + connect + second;
}
