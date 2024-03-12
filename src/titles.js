document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.section_title').forEach(function(Title){
    Title.style.marginTop = '15px'; // Adjust the space as needed
    Title.style.marginBottom = '15px'; // Adjust the space as needed
    Title.style.fontFamily = "'Arial', sans-serif";
    Title.style.fontSize = "1.5rem";
    //Title.style.fontWeight = "bold";
    Title.style.color = "#49413a";
    Title.style.textAlign = 'center'; 
  });
});
