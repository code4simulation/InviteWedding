function updateTimer() {
  const now = new Date();
  // Convert the string to a Date object
  const dateObject = new Date(info.WeddingDate);
  // Extract components using Intl.DateTimeFormat
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  }).format(dateObject);
  const formattedTime = new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false // Use 24-hour format
  }).format(dateObject);
  // Combine the formatted date and time with a comma
  const formattedDateTime = `${formattedDate}, ${formattedTime}`;
  const weddingdate = new Date(formattedDateTime);
  const diff = weddingdate - now;

  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById('days').innerText = days;
  document.getElementById('hours').innerText = hours;
  document.getElementById('minutes').innerText = minutes;
  document.getElementById('seconds').innerText = seconds;
}

// Update the timer every second
setInterval(updateTimer, 1000);
