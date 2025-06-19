document.addEventListener('DOMContentLoaded', () => {
  const subjects = document.querySelectorAll('.subject');
  subjects.forEach(subj => {
    subj.addEventListener('click', () => {
      // hide all
      document.querySelectorAll('.topics')
        .forEach(list => list.style.display = 'none');

      // toggle this one
      const target = document.getElementById(subj.dataset.target);
      target.style.display = 'block';
    });
  });
});
