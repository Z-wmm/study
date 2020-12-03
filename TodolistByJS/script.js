var input = document.getElementsByClassName('in')[0];
var add = document.getElementsByClassName('add')[0];
var search = document.getElementsByClassName('sear')[0];
var doingItem = document.getElementById('doingItem')
var finishedItem = document.getElementById("finishItem")
var list = []

show(list,doingItem)

add.addEventListener('click',function(){
  var item = {}
  item.flag = 0;
  item.content = input.value
  item.time = getDate('/') +' ' + getTime(":")
  list.push(item)
  show()

})
search.addEventListener('click',function(){
})

function done(i){
  list[i].flag = !list[i].flag
  show()
}

function del(i){
  list.splice(i,1);
  show()
}

function show(){
  doingItem.innerHTML = ''
  finishedItem.innerHTML = ''
  for(let i = 0; i < list.length; i++){
    if(list[i].flag == 0){
      var oli = document.createElement('li')
      oli.className='clearfix'
      oli.innerHTML = `
              <div class="left">
                <input type="checkbox" class ="check" onclick="done(${i})">
                <span>${list[i].content}</span>
              </div>
              <div class="right">
                <span class="time">${list[i].time}</span>
                <img src="del.png" alt="" onclick = 'del(${i})'>

              </div>`
      doingItem.appendChild(oli)
    }else{
      var tli = document.createElement('li')
      tli.className='clearfix fin'
      tli.innerHTML = `
              <div class="left">
                <input type="checkbox" class ="check" onclick="done(${i})" checked>
                <span>${list[i].content}</span>
              </div>
              <div class="right">
                <span class="time">${list[i].time}</span>
                <img src="del.png" alt="" onclick = 'del(${i})'>
                
              </div>`
      finishedItem.appendChild(tli)
    }
  }
  
}
function getDate(connect){
  let date  = new Date();
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();
  return year + connect + month + connect + day;
}
function getTime(connect){
  let date  = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  hour < 10 ? hour = "0"+ hour : hour;
  minute < 10 ? minute = "0"+ minute : minute;
  return hour + connect + minute;
}
