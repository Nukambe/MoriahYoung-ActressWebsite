window.addEventListener('DOMContentLoaded', () => {

    const width = function () {
        return Math.max(
            document.documentElement["clientWidth"],
            document.body["scrollWidth"],
            document.documentElement["scrollWidth"],
            document.body["offsetWidth"],
            document.documentElement["offsetWidth"]
        );
    }
    const scrollContainer = document.querySelector('.gallery');
    const backButton = document.getElementById('previousButton');
    const nextButton = document.getElementById('nextButton');

    const scrollAmount = function (scroll, right = true) {
        mod = scroll % width();
        if (mod === 0) return width();
        return right ? width() - mod : mod;
    }

    scrollContainer.addEventListener('wheel', (scrollEvent) => {
        scrollEvent.preventDefault();
        scrollContainer.scrollLeft += scrollEvent.deltaY;
    });

    nextButton.addEventListener('click', () => {
        scrollContainer.style.scrollBehavior = 'smooth';
        scrollContainer.scrollLeft += scrollAmount(scrollContainer.scrollLeft);
    });

    backButton.addEventListener('click', () => {
        scrollContainer.style.scrollBehavior = 'smooth';
        scrollContainer.scrollLeft -= scrollAmount(scrollContainer.scrollLeft, false);
    });
});
