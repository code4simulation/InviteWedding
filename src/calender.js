function generateCalendarDays(year, month, weddingday) {
  const daysContainer = document.querySelector('.calendar .days');
  const weekdaysContainer = document.querySelector('.calendar .weekdays');
  const date = new Date();
  const month_id = month - 1;
  const firstDayOfMonth = new Date(year, month_id, 1).getDay();
  const daysInMonth = new Date(year, month_id + 1, 0).getDate();
  
  weekdaysContainer.innerHTML = '<div>일</div><div>월</div><div>화</div><div>수</div><div>목</div><div>금</div><div>토</div>';

  // Placeholder for days before the first day of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    daysContainer.innerHTML += '<div class="empty-day"></div>';
  }

  // Actual days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    daysContainer.innerHTML += `<div>${day}</div>`;
    // Check if it's the end of the week
    if ((day + firstDayOfMonth) % 7 === 0) {
      daysContainer.innerHTML += '<div class="week-separator"></div>'; // Line break after every week (7 days)
    }
  }
}

// Run the function to generate calendar days
generateCalendarDays(2024,2,8);
