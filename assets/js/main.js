window.onload = function () {


    let dots = document.querySelectorAll(".dot");

    window.setActiveDot = (sectionId) => {
        if (sectionId == "" || !sectionId) return;
        dots.forEach(dot => dot.classList.remove("active"));
        document.querySelector(`.dot[data-section="#${sectionId}"]`).classList.add("active");
    }



    let loader = document.getElementsByClassName('loader')[0];
    let pageContent = document.getElementsByClassName('page-content')[0];
    var wait = 1000;

    
    setTimeout(() => {
        loader.style.opacity = 0;
        pageContent.style.display = 'block';
        setTimeout(() => {
            pageContent.style.opacity = 1
            loader.style.display = 'none'
            // document.querySelector(`#goal`).scrollIntoView({
            //     behavior: "smooth",
            //     block: "start",
            //     inline: "nearest"
            // });
        }, wait / 2);
    }, wait)




    setActiveDot("home");


    dots.forEach(dot => {
        dot.addEventListener("click", () => {
            dots.forEach(dot => dot.classList.remove("active"));
            dot.classList.add("active");
            document.querySelector(dot.dataset.section).scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest"
            });
        });
    });




    window.addEventListener('scroll', function () {
        console.log('scroll 1');
    })

    document.body.addEventListener('scroll', () => {
        const sections = document.querySelectorAll("section");
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.top <= 110) {
                setActiveDot(section.id);
            }
        });
    });
}

