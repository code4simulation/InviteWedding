document.addEventListener('DOMContentLoaded', function() {
  const greetingTitle = document.querySelector('.greeting_title');
  const greetingContent = document.querySelector('.greeting_content');
  const greetingName = document.querySelector('.greeting_name');

  greetingTitle.textContent = "인사말";
  greetingContent.innerHTML = `두 사람의 길이 하나로 이어지는 날,<br>\
                               우리의 사랑과 행복을 축하해 주실 분을 초대합니다.<br>\
                               함께 웃고, 함께 기뻐할 수 있는 그 날,<br>\
                               여러분의 따뜻한 마음과 축복으로 빛나게 해주세요.`;
  greetingName.innerHTML = `<div class="name-row"><span>Father</span> · <span>Mother</span>의 <span>아들</span> <span>Groom</span></div><br>\
                            <div class="name-row"><span>Father</span> · <span>Mother</span>의 <span>딸</span>  <span>Bride</span></div>`;
  
  greetingTitle.style.marginBottom = '30px'; // Adjust the space as needed


  document.querySelector('.greeting').style.fontFamily = "'Arial', sans-serif";
  document.querySelector('.greeting').style.fontSize = "1.0rem";
  document.querySelector('.greeting').style.fontWeight = "bold";
  document.querySelector('.greeting').style.color = "#49413a";
  document.querySelector('.greeting').style.textAlign = 'center';

  greetingContent.style.letterSpacing = '1.5px';
  greetingContent.style.fontSize = '1.1rem';
  greetingContent.style.marginBottom = '20px';  

  // Style the .name-row container
  document.querySelectorAll('.name-row').forEach(function(row) {
    row.style.display = 'flex';
    row.style.justifyContent = 'center';
  });

// Style each span within .name-row
document.querySelectorAll('.name-row span').forEach(function(span) {
  span.style.width = '80px';
  span.style.textAlign = 'center';
});
  
  greetingName.style.letterSpacing = '1.5px';
  greetingName.style.fontSize = '1.3rem';
  greetingName.style.marginBottom = '20px';  
  
  document.querySelector('.greeting_title').style.fontSize = "2.0rem";
});
