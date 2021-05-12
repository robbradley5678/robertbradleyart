const image = document.getElementsByTagName('img');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');

image[0].onclick = () => {
    modal.style.display = 'flex';
    closeModal.style.display = 'block';
}

function closeModals() {
  modal.style.display = 'none';
  closeModal.style.display = 'none';
}

modal.onclick = closeModals;
closeModal.onclick = closeModals;
