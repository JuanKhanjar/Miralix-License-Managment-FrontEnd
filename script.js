console.log('Hello Miralix!');
const clickableSection = document.querySelector('.clickable-section');
const contentToCollapse = document.getElementById('contentToCollapse');
const collapseIcon = document.getElementById('collapseIcon');

clickableSection.addEventListener('click', function () {
  if (contentToCollapse.style.display === 'none') {
    contentToCollapse.style.display = 'block';
    // Change the arrow icon to "up" when content is shown
    collapseIcon.classList.remove('bi-chevron-down');
    collapseIcon.classList.add('bi-chevron-up');
    // Add the "active" class to the section when clicked
    clickableSection.classList.add('active');
  } else {
    contentToCollapse.style.display = 'none';
    // Change the arrow icon to "down" when content is hidden
    collapseIcon.classList.remove('bi-chevron-up');
    collapseIcon.classList.add('bi-chevron-down');
    // Remove the "active" class when content is hidden
    clickableSection.classList.remove('active');
  }
});
