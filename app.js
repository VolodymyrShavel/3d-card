//Movement Animation to happen*
const card = document.querySelector('.card');
const container = document.querySelector('.container');
//Items
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');
const sizeBtns = document.querySelectorAll('.sizes button');

if (window.DeviceMotionEvent == undefined) {
   //No accelerometer is present. Use buttons.
   alert('no accelerometer');
} else {
   alert('accelerometer found');
   window.addEventListener('devicemotion', accelerometerUpdate, true);
}

function accelerometerUpdate(e) {
   var aX = e.accelerationIncludingGravity.x * 1;
   var aY = e.accelerationIncludingGravity.y * 1;
   var aZ = e.accelerationIncludingGravity.z * 1;
   //The following two lines are just to calculate a
   // tilt. Not really needed.
   xPosition = Math.atan2(aY, aZ);
   yPosition = Math.atan2(aX, aZ);
   card.style.transform = `rotateY(${xPosition}deg) rotateX(${yPosition}deg)`;
}

//Moving Animation Event
container.addEventListener('mousemove', (e) => {
   let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
   let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
   card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animate In
container.addEventListener('mouseenter', (e) => {
   card.style.transition = 'none';
   //Popout
   title.style.transform = `translateZ(150px)`;
   sneaker.style.transform = 'translateZ(200px) rotateZ(-45deg)';
   description.style.transform = 'translateZ(125px)';
   sizes.style.transform = 'translateZ(100px)';
   purchase.style.transform = 'translateZ(75px)';
});

//Animate Out
container.addEventListener('mouseleave', (e) => {
   card.style.transition = 'all 0.5s ease';
   card.style.transform = 'rotateY(0deg) rotateX(0deg)';
   // Popback
   title.style.transform = 'translateZ(0px)';
   sneaker.style.transform = 'translateZ(0px) rotateZ(0deg)';
   description.style.transform = 'translateZ(0px)';
   sizes.style.transform = 'translateZ(0px)';
   purchase.style.transform = 'translateZ(0px)';
});
