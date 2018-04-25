const init = () => {
    function zeroPad(num, places) {
        let zero = places - num.toString().length + 1;
        return Array(+(zero > 0 && zero)).join("0") + num;
    }

    window.scrollTo(0, 0);

    // document.querySelectorAll("a[rel=external]").forEach(el => el.setAttribute("target", "_blank"));

    const body = document.querySelector("body");
    const frames = 28;
    let sectionCount = 0;
    const sectionElements = Array.from(document.getElementsByClassName("repeated-section"));
    const templateElements = [];
    const sectionHeight = sectionElements[0].clientHeight;
    let currentImage = 0;
    let scrollCount = 0;
    let stillScrolling = true;
    
    const md = new MobileDetect(window.navigator.userAgent);

    if(md.mobile()){
        body.classList.add("mobile");
        body.classList.add("f00");
    }
    
    sectionElements.forEach(el => {
        templateElements.push(el.cloneNode(true));
        if (!md.mobile()) { 
            const newClass = zeroPad(sectionCount, 2);
            el.querySelector(".cat").classList.add("f"+newClass);
        }
        if(sectionCount < frames) {
            sectionCount++;
        }
        else {
            sectionCount = 0;
        }
    });

    templateElements.unshift(document.getElementById("first-section"));

    const scroll = () => {
        if (stillScrolling) {
            // console.log(`${window.pageYOffset} - ${document.body.scrollHeight} - ${sectionHeight}`);
            const offset = window.pageYOffset;
            if (md.mobile()) {
                const nextImage = Math.floor(offset / sectionHeight) % (frames + 1);
                if (currentImage !== nextImage) {
                    const previousClass = "f"+zeroPad(currentImage, 2);
                    const nextClass = "f"+zeroPad(nextImage, 2);
                    body.classList.remove(previousClass);
                    body.classList.add(nextClass);
                    currentImage = nextImage;
                }
            }
            if (offset > document.body.scrollHeight - sectionHeight * 10) {
                scrollCount++;
                const beginElement = document.getElementById("begin");
                if (scrollCount >= 20) {
                    const endElement = document.getElementById("end");
                    endElement.style.display = "block";
                    beginElement.appendChild(endElement);
                    if (!md.mobile()) {
                        const newClass = zeroPad(sectionCount, 2);
                        endElement.querySelector(".cat").classList.add("f"+newClass);
                    }
                    stillScrolling = false;
                    return false;
                }

                templateElements.forEach(el => {
                    if(sectionCount < frames) {
                        sectionCount++;
                    }
                    else {
                        sectionCount = 0;
                    }

                    const newElement = el.cloneNode(true);
                    if (!md.mobile()) {
                        const newClass = zeroPad(sectionCount, 2);
                        newElement.querySelector(".cat").classList.add("f"+newClass);
                    }
                    beginElement.appendChild(newElement);
                });
            }
        }
        return false;
    };

    window.onscroll = scroll;

    const mainElement = document.getElementById("content");
    mainElement.classList.add("fade-in");
};

window.onload = init;