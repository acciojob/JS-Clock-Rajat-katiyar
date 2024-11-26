//your code here
function setClock() {  
  const secondHand = document.querySelector('.second-hand');  
  const minuteHand = document.querySelector('.min-hand');  
  const hourHand = document.querySelector('.hour-hand');  

  const now = new Date();  
  const seconds = now.getSeconds();  
  const minutes = now.getMinutes();  
  const hours = now.getHours();  

  // Calculate the rotation for each hand  
  const secondsDegrees = ((seconds / 60) * 360) + 90; // 0 degrees is at 3 o'clock position  
	const minutesDegrees = ((minutes + seconds/60) / 60) * 360 + 90;
	const hoursDegrees = ((hours / 12) * 360) + (minutes / 60) * 30 + 90; // include minutes for smooth transition  

  // Apply rotation to the hands  
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;  
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;  
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;  
}  

// Start the clock and set interval to update it every second  
setClock(); // Initial call  
setInterval(setClock, 1000);