let time = sessionStorage.getItem("time")
console.log(time)

document.getElementById('time').innerHTML =`${time}seconds`;