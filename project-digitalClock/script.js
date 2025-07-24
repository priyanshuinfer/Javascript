const digital = document.getElementById('clock') 
// query selector will work same



setInterval(function(){ let date = new Date()
  //console.log(date.toLocaleTimeString()) 
  digital.innerHTML = date.toLocaleTimeString();
},1000)
