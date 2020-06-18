const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'block') => {

    const header = document.querySelector(headerSelector),
          tab = document.querySelectorAll(tabSelector),
          content = document.querySelectorAll(contentSelector);
          

    function hideContent() {
        tab.forEach(item => {
            item.classList.remove(activeClass);
        });

        content.forEach(item => {
            item.style.display = 'none';
        });
    }

    function showContent(i = 0) {
        content[i].style.display = display;
        tab[i].classList.add(activeClass);
    }

    hideContent();
    showContent();

    header.addEventListener('click', (e) => {
        const target = e.target;
        if (target &&
            target.classList.contains(tabSelector.replace(/\./, "")) ||
            target.parentNode.classList.contains(tabSelector.replace(/\./, ""))) {
                tab.forEach((item, i) => {
                    if (target == item || target.parentNode == item) {
                        hideContent();
                        showContent(i);
                    }
                });
        }
    });

};

export default tabs;