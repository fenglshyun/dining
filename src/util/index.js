/*
 * @Author: lsh
 * @email: 864115770@qq.com
 * @Date: 2021-02-14 19:03:09
 */

export function setStorage(type, value) { 
  localStorage.setItem(type, value);
}

export function getStorage(type) {
  return localStorage.getItem(type);
}

export function clearStorage() {
  localStorage.clear();
}
export function getNowFormatDate() {
  var date = new Date();
  var seperator1 = "-";
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var strDate = date.getDate();
  if (month >= 1 && month <= 9) {
      month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate;
  }
  var currentdate = year + seperator1 + month + seperator1 + strDate;
  return currentdate;
}


 