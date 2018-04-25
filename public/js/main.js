const init = () => {
    function zeroPad(num, places) {
        let zero = places - num.toString().length + 1;
        return Array(+(zero > 0 && zero)).join("0") + num;
    }

    window.scrollTo(0, 0);

    document.querySelectorAll("a[rel=external]").forEach(el => el.setAttribute("target", "_blank"));

    const frames = 28;
    let sectionCount = 0;
    const sectionElements = Array.from(document.getElementsByClassName("repeated-section"));
    const templateElements = [];
    const sectionHeight = sectionElements[0].clientHeight;
    let scrollCount = 0;
    let stillScrolling = true;
    
    const md = new MobileDetect(window.navigator.userAgent);
    
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

    const scroll = () => {
        if (stillScrolling) {
            console.log(`${window.pageYOffset} - ${document.body.scrollHeight} - ${sectionHeight}`);
            if (window.pageYOffset > document.body.scrollHeight - sectionHeight * 10) {
                scrollCount++;
                const beginElement = document.getElementById("begin");
                if (scrollCount >= 20) {
                    const endElement = document.getElementById("end");
                    endElement.style.display = "block";
                    beginElement.appendChild(endElement);
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