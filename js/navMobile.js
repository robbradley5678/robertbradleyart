const hamburger = document.getElementById('hamburger');
let navMobile = document.getElementById('navMobile');

navMobile.style.display = 'none';

hamburger.onclick = () => {
  if (navMobile.style.display === 'none') {
    navMobile.style.display = 'block';
  } else {
    navMobile.style.display = 'none';
  }
}
