const tabHome = document.getElementById('tab-home');
const tabWork = document.getElementById('tab-work');
const tabBlog = document.getElementById('tab-blog');
const tabAbout = document.getElementById('tab-about');
const images = document.querySelectorAll('.mobile-img');

function removeShowImg() {
    images.forEach(img => {
        img.classList.remove('img-show');
    });
};

function addShowImg(index) {
    images[index].classList.add('img-show');
}

tabHome.addEventListener('click', () => {
    removeShowImg();
    addShowImg(0);
});

tabWork.addEventListener('click', () => {
    removeShowImg();
    addShowImg(1);
});

tabBlog.addEventListener('click', () => {
    removeShowImg();
    addShowImg(2);
});

tabAbout.addEventListener('click', () => {
    removeShowImg();
    addShowImg(3);
});
