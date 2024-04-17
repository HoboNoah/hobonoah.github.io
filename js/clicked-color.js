const links = document.querySelectorAll('.main-header ul li a');

links.forEach(link => {
  link.addEventListener('click', function() {
    links.forEach(otherLink => otherLink.classList.remove('active'));
    this.classList.add('active'); 
  });
});