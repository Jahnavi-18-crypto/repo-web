function markTask(checkbox) {
  const listItem = checkbox.parentElement;
  if (checkbox.checked) {
    listItem.classList.add("completed");
    playSound();
  } else {
    listItem.classList.remove("completed");
  }
}

function resetTasks() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(box => {
    box.checked = false;
    box.parentElement.classList.remove("completed");
  });
}

// Optional soft sound on check
function playSound() {
  const audio = new Audio("https://cdn.pixabay.com/download/audio/2022/08/04/audio_5410cd9381.mp3?filename=chime-notification-115020.mp3");
  audio.volume = 0.3;
  audio.play();
}