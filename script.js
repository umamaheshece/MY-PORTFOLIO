  // ✅ Show only the requested section
  function showSection(id) {
    document.querySelectorAll('section').forEach(section => section.classList.remove('active'));
    const sectionToShow = document.getElementById(id);
    if (sectionToShow) sectionToShow.classList.add('active');
  }

  // ✅ On page load, show the welcome section
  window.onload = function () {
    showSection('welcome'); // default section
  };

  // ✅ Like Function
  function incrementLike(id) {
    const likeButton = document.getElementById(id + '-btn');
    const likeCount = document.getElementById(id);
    const dislikeButton = likeButton.nextElementSibling;
    let liked = localStorage.getItem(id + '-liked') === 'true';
    let count = parseInt(likeCount.innerText);

    if (!liked) {
      likeCount.innerText = count + 1;
      likeButton.classList.add('liked');
      likeButton.innerHTML = '❤️';
      localStorage.setItem(id + '-liked', 'true');
      if (dislikeButton && dislikeButton.classList.contains('disliked')) {
        dislikeButton.classList.remove('disliked');
        dislikeButton.style.opacity = '0.3';
      }
    } else {
      likeCount.innerText = Math.max(count - 1, 0);
      likeButton.classList.remove('liked');
      likeButton.innerHTML = '🤍';
      localStorage.removeItem(id + '-liked');
    }
  }

  // ✅ Dislike Function
  function toggleDislike(button) {
    const isDisliked = button.classList.toggle('disliked');
    button.innerText = '👎';
    button.style.opacity = isDisliked ? '1' : '0.3';
    if (isDisliked) {
      button.style.transform = 'scale(1.2)';
      setTimeout(() => button.style.transform = 'scale(1)', 150);
      const likeSpan = button.previousElementSibling.previousElementSibling;
      const likeBtn = button.previousElementSibling;
      if (likeSpan && likeBtn && likeBtn.classList.contains('liked')) {
        likeSpan.innerText = Math.max(parseInt(likeSpan.innerText) - 1, 0);
        likeBtn.classList.remove('liked');
        likeBtn.innerHTML = '🤍';
        localStorage.removeItem(likeSpan.id + '-liked');
      }
    }
  }