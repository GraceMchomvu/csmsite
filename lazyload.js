// Lazy-load gallery images with IntersectionObserver and add a loaded class for blur-up effect
(function(){
    const lazyImgs = document.querySelectorAll('img.lazy');
    function loadImage(img){
        const src = img.getAttribute('data-src');
        if(!src) return;
        img.src = src;
        img.addEventListener('load', function(){ img.classList.add('loaded'); });
        img.removeAttribute('data-src');
    }

    if('IntersectionObserver' in window){
        const io = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    loadImage(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, {rootMargin: '200px'});

        lazyImgs.forEach(img => io.observe(img));
    } else {
        // Fallback: load all images immediately
        lazyImgs.forEach(img => loadImage(img));
    }
})();
