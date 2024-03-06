const dateObject = new Date(info.WeddingDate);
const year = dateObject.getFullYear();
const month = dateObject.getMonth() + 1;
const day = dateObject.getDate();

let hours = dateObject.getHours();
const minutes = dateObject.getMinutes();
const ampm = hours >= 12 ? '오후' : '오전';
hours12 = hours % 12;
hours12 = hours12 ? hours12 : 12; // the hour '0' should be '12'
const strTime = ampm + ' ' + hours12 + ':' + (minutes < 10 ? '0' + minutes : minutes);
const Time = hours + ':' + (minutes < 10 ? '0' + minutes : minutes);

const infoContainer = document.querySelector('.invite_main .info');

// 오전/오후 12시간 기준
//infoContainer.innerHTML = `<b>${year}년 ${month}월 ${day}일 ${strTime}\n${info.WeddingHall}</b>`

// 24시간 기준
infoContainer.innerHTML = `<b>${year}년 ${month}월 ${day}일 ${Time}\n${info.WeddingHall}</b>`
