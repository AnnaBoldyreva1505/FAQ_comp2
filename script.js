document.querySelectorAll('.accordion-button').forEach(button => {
  button.addEventListener('click', () => {
    const accordionContent = button.nextElementSibling;
    const isActive = button.classList.contains('active');

    // Закрываем все открытые секции
    document.querySelectorAll('.accordion-button').forEach(btn => {
      btn.classList.remove('active');
      btn.nextElementSibling.style.maxHeight = 0;
    });

    // Если текущая секция не была активной, открываем её
    if (!isActive) {
      button.classList.add('active');
      accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
    }
  });
});
