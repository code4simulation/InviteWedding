function generateCalendarDays(year, month, weddingday) {
  const daysContainer = document.querySelector('.calendar .days');
  const weekContainer = document.querySelector('.calendar .weekdays');
  const date = new Date();
  const month_id = month - 1;
  const firstDayOfMonth = new Date(year, month_id, 1).getDay();
  const daysInMonth = new Date(year, month_id + 1, 0).getDate();
  
  // Define the names of the week
  const weekDays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  // Clear any existing content in the weekdays container
  weekContainer.innerHTML = '<div class="weekday"><div class="sunday">SUN</div></div>';
  // Populate the weekdays container with the names of the week
  weekDays.forEach(dayName => {weekContainer.innerHTML += `<div class="weekday">${dayName}</div>`;});
  
  // Placeholder for days before the first day of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    daysContainer.innerHTML += '<div class="empty-day"></div>';
  }

  // Actual days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    let dayOfWeek = new Date(year, month - 1, day).getDay();
    let dayHTML = `<div class="day${dayOfWeek === 0 ? ' sunday' : ''}">${day}</div>`;
    if (day === weddingday) {
      dayHTML = `<div class="day special-day${dayOfWeek === 0 ? ' sunday' : ''}">${day}<span class="wedding-day-marker">Wed</span></div>`;
    }
    daysContainer.innerHTML += dayHTML;
  }
}

// Run the function to generate calendar days
const dateObject = new Date(info.WeddingDate);
const year = dateObject.getFullYear();
const month = dateObject.getMonth() + 1;
const day = dateObject.getDate();
document.addEventListener('DOMContentLoaded', function() {
  generateCalendarDays(year, month, day);
});
