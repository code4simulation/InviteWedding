function generateCalendarDays(year, month, weddingday) {
  const daysContainer = document.querySelector('.calendar .days');
  const weekContainer = document.querySelector('.calendar .weekdays');
  const date = new Date();
  const month_id = month - 1;
  const firstDayOfMonth = new Date(year, month_id, 1).getDay();
  const daysInMonth = new Date(year, month_id + 1, 0).getDate();
  
  //weekContainer = `<div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>`;
  // Placeholder for days before the first day of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    daysContainer.innerHTML += '<div class="empty-day"></div>';
  }

  // Actual days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    let dayHTML = `<div class="day">${day}</div>`;
      if (day === weddingday) {
        dayHTML = `<div class="day special-day">${day}<span class="wedding-day-marker">Wed 12:30</span></div>`;
      }
    daysContainer.innerHTML += dayHTML;
    // Check if it's the end of the week
    if ((day + firstDayOfMonth) % 7 === 0) {
      daysContainer.innerHTML += '<div class="week-separator"></div>'; // Line break after every week (7 days)
    }
  }
}

// Run the function to generate calendar days
document.addEventListener('DOMContentLoaded', function() {
  generateCalendarDays(2024, 12, 25); // Example parameters, adjust as needed
});
