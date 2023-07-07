// JavaScript code for generating the calendar

// Get the current date
var currentDate = new Date();

// Function to generate the calendar
function generateCalendar() {
  var calendarBody = document.getElementById('calendar-body');
  var monthYear = document.getElementById('month-year');
  
  // Clear previous calendar
  calendarBody.innerHTML = '';
  
  // Get the current month and year
  var month = currentDate.getMonth();
  var year = currentDate.getFullYear();
  
  // Set the month and year in the calendar header
  monthYear.textContent = getMonthName(month) + ' ' + year;
  
  // Get the first day of the month
  var firstDay = new Date(year, month, 1);
  
  // Determine the starting day of the week
  var startDay = firstDay.getDay();
  
  // Get the number of days in the month
  var totalDays = new Date(year, month + 1, 0).getDate();
  
  // Generate the calendar days
  var dayCount = 1;
  for (var row = 0; row < 6; row++) {
    var newRow = document.createElement('tr');
    for (var col = 0; col < 7; col++) {
      if (row === 0 && col < startDay) {
        var emptyCell = document.createElement('td');
        newRow.appendChild(emptyCell);
      } else if (dayCount > totalDays) {
        break;
      } else {
        var newCell = document.createElement('td');
        newCell.textContent = dayCount;
        newRow.appendChild(newCell);
        dayCount++;
      }
    }
    calendarBody.appendChild(newRow);
  }
}

// Function to get the month name
function getMonthName(month) {
  var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return monthNames[month];
}

// Generate the calendar when the page loads
window.onload = generateCalendar;
