// script to scroll into contact section
function navigateToContact() {
    document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
}

// script for bar menu interaction
let menu = document.querySelector('.menu');
let bars = document.querySelector('.navbar .fa-bars');

bars.addEventListener('click', () => {
    menu.classList.toggle('show');
});

// script for text change transition effect
var typed = new Typed('#text-animation', {
    strings: ['Game Developer.', 'Motion Designer.','Web Developer.', 'Graphic Designer.'],
    typeSpeed: 30,
    backSpeed: 30,
    smartBackspace: true,
    loop: true,
});

// script for services modal
document.addEventListener('DOMContentLoaded', () => {
    const modalViews = document.querySelectorAll('.services-modal'),
          modalBtns = document.querySelectorAll('.services-btn'),
          modalClose = document.querySelectorAll('.services-modal-icon-close'),
          body = document.body;

    let modal = function(modalClick){
        modalViews[modalClick].classList.add('active-modal');
        body.classList.add('active-modal');
        document.body.style.touchAction = "none";
    }

    modalBtns.forEach((mb, i) => {
        mb.addEventListener('click', () => {    
            modal(i);
        });
    });

    modalClose.forEach((mc) => {
        mc.addEventListener('click', () => {
            modalViews.forEach((mv) => {
                mv.classList.remove('active-modal');
                body.classList.remove('active-modal');
                document.body.style.touchAction = "auto";           
            });
        });
    });
});

// script for filter category in porfolio section
const filterCategory = document.querySelector(".projects-menu").children;
const projectsContainer = document.querySelector(".projects-container").children;

projectsContainer[2].style.display = "none";
projectsContainer[3].style.display = "none";
projectsContainer[4].style.display = "none";
projectsContainer[5].style.display = "none";
projectsContainer[6].style.display = "none";
projectsContainer[7].style.display = "none";

filterCategory[0].classList.add("active-category");

for (let i = 0; i < filterCategory.length; i++) {
    filterCategory[i].addEventListener("click", function() {
        for (let j = 0; j < filterCategory.length; j++) {
            filterCategory[j].classList.remove("active-category");
        }   

        this.classList.add("active-category");
        const target = this.getAttribute("data-target");

        for (k = 0; k < projectsContainer.length; k++) {
            projectsContainer[k].style.display = "none";
            if (target == projectsContainer[k].getAttribute("data-id")) {
                projectsContainer[k].style.display = "";
            }
            /*if (target == "all") {
                projectsContainer[k].style.display = "grid";
            }*/
        }
    })
}

// ******** PAGINATION ********

/* script pagination for graphic design */

const graphicDesignProjects = [
    { id: 1, image: 'imgs/graphic_design_projects/low_poly_landscape_wallpaper.jpg',           title: 'low poly landscape |',          text: 'art',        category: 'graphic_design' },
    { id: 1, image: 'imgs/graphic_design_projects/girasa_logo.png',                            title: 'girasa |',                      text: 'logo',       category: 'graphic_design' },
    { id: 1, image: 'imgs/graphic_design_projects/orlando_florida_publicidad.png',             title: 'orlando florida |',             text: 'commercial', category: 'graphic_design' },
    { id: 2, image: 'imgs/graphic_design_projects/legacy_logo.png',                            title: 'legacy |',                      text: 'logo',       category: 'graphic_design' },
    { id: 2, image: 'imgs/graphic_design_projects/torres05x_world_wallpaper.jpg',              title: 'torres05x world |',             text: 'art',        category: 'graphic_design' },
    { id: 2, image: 'imgs/graphic_design_projects/laboratorio_clinico_fiallos_publicidad.png', title: 'laboratorio clinico fiallos |', text: 'commercial', category: 'graphic_design' },
    { id: 3, image: 'imgs/graphic_design_projects/tecnifrio_b_c_s_publicidad.png',             title: 'tecnifrio b.c.s |',             text: 'commercial', category: 'graphic_design' },
    { id: 3, image: 'imgs/graphic_design_projects/pineda_logo.png',                            title: 'pineda |',                      text: 'logo',       category: 'graphic_design' },
    { id: 3, image: 'imgs/graphic_design_projects/su_auto_rent_a_car_publicidad.png',          title: 'su auto rent a car |',          text: 'commercial', category: 'graphic_design' },
    { id: 4, image: 'imgs/graphic_design_projects/stop_n_go_publicidad.png',                   title: 'stop n go |',                   text: 'commercial', category: 'graphic_design' },
    { id: 4, image: 'imgs/graphic_design_projects/moda_shop_logo.png',                         title: 'moda shop |',                   text: 'logo',       category: 'graphic_design' },
    { id: 4, image: 'imgs/graphic_design_projects/dagas_publicidad.png',                       title: 'dagas |',                       text: 'commercial', category: 'graphic_design' },
    { id: 5, image: 'imgs/graphic_design_projects/tecnifrio_b_c_s_logo.png',                   title: 'tecnifrio b.c.s |',             text: 'logo',       category: 'graphic_design' },
    { id: 5, image: 'imgs/graphic_design_projects/experenta_with_salesforce.png',              title: 'experenta |',                   text: 'art',        category: 'graphic_design' },
    { id: 5, image: 'imgs/graphic_design_projects/dc_computer_logo.png',                       title: 'dc computer |',                 text: 'logo',       category: 'graphic_design' },
    { id: 6, image: 'imgs/graphic_design_projects/mirai_kuriyama_art.png',                     title: 'mirai kuriyama |',              text: 'art',        category: 'graphic_design' },
];

const graphicDesignCategories = [...new Set(graphicDesignProjects.map((item) => {return item; }))]

const displayGraphicDesignItem = (items) => {
    document.getElementById('graphic_design_root').innerHTML = items.map((item) => {
        var {image, title, text} = item;
        return (
            `
            <div class='project-box'>
                <div class='project-img-box'>
                   <img class='project-image' src=${image}></img>
                </div>
                <div class='project-content'>
                    <h2 class="project-title">${title}<span> ${text}</span></h2>
                </div>
            </div>
            `)
    }).join('');
};

const filterFirstGraphicDesignCategories = graphicDesignCategories.filter(item);

function item (value) {
    if (value.id == 1) {
        return (
            value.id
        )
    }
}

displayGraphicDesignItem(filterFirstGraphicDesignCategories)


const graphicDesignBtns = [
    { id: 1, name: '<i class="fa-solid fa-backward"></i>' },
    { id: 1, name: '1'  },
    { id: 2, name: '2'  },
    { id: 3, name: '3'  },
    { id: 4, name: '4'  },
    { id: 5, name: '5'  },
    { id: 6, name: '6'  },
    { id: 6, name: '<i class="fa-solid fa-forward"></i>' }
];

const graphicDesignFilters = [...new Set(graphicDesignBtns.map((btn)=>{return btn;}))]

document.getElementById('graphic_design_btns').innerHTML = graphicDesignFilters.map((btn)=>{
    var {name,id} = btn;
    return (
        "<button class='fil-p grahic_design_state' onClick='graphicDesignFilterItems("+(id)+`)'>${name}</button>`
    )
}).join('');

const graphicDesignFilterItems = (a)=> { 
    const graphicDesignFilterCatergories = graphicDesignCategories.filter(item);
    function item (value) {
        if (value.id == a) {
            return (
                value.id
            )
        } 
    }
    displayGraphicDesignItem(graphicDesignFilterCatergories)

}

const grahic_design_btn_state = document.querySelectorAll('.grahic_design_state');

if (grahic_design_btn_state.length > 0) {
    grahic_design_btn_state[1].classList.add('active'); // Agregar clase "active" al primer botón
}

grahic_design_btn_state.forEach(button => {
    button.addEventListener('click', function() {
        // Eliminar la clase "active" de todos los botones
        grahic_design_btn_state.forEach(grahic_design_state => grahic_design_state.classList.remove('active'));
        
        // Agregar la clase "active" al botón clicado
        this.classList.add('active');
    });
});

/* ----------------------------------- */

/* script pagination for motion design */

const motionDesignProjects = [
    { id: 1, video: 'Vb-9rAGwhy8?si', title: 'heni |',             text: 'intro',     category: 'motion-design'},
    { id: 1, video: 'L1FsN3xRBC0?si', title: 'torres05x 4.0 |',    text: 'intro',     category: 'motion-design'},
    { id: 1, video: 'EXJ4OkL86xE?si', title: 'canti |',            text: 'intro',     category: 'motion-design'},
    { id: 2, video: 'KGbhJYRQcOU?si', title: 'the system |',       text: 'animation', category: 'motion-design'},
    { id: 2, video: 'i_lhhoLjUA4?si', title: 'risk |',             text: 'intro',     category: 'motion-design'},
    { id: 2, video: 'Hv9V07jSWn0?si', title: 'low poly |',         text: 'animation', category: 'motion-design'},
    { id: 3, video: 'nEjSWgGqebU?si', title: 'msthreat |',         text: 'intro',     category: 'motion-design'},
    { id: 3, video: 'ljmybmG4mW0?si', title: 'impressive tubes |', text: 'intro',     category: 'motion-design'},
    { id: 3, video: 'YTCH9uUw6tc?si', title: 'torres05x 3.0 |',    text: 'intro',     category: 'motion-design'},
    { id: 4, video: 'RnEWdT7mGgY?si', title: 'unah-vs |',          text: 'animation', category: 'motion-design'},
    { id: 4, video: 'c814tc6Zk5Y?si', title: 'prodigy killcams |', text: 'intro',     category: 'motion-design'},
    { id: 4, video: 'XrUboSUL9_o?si', title: 'knifing mayhem |',   text: 'intro',     category: 'motion-design'},
    { id: 5, video: 'SRcuZgibqFU?si', title: 'experenta |',        text: 'intro',     category: 'motion-design'} 
];

const motionDesignCategories = [...new Set(motionDesignProjects.map((item) => {return item; }))]

const displayMotionDesignItem = (items) => {
    document.getElementById('motion_design_root').innerHTML = items.map((item) => {
        var {video, title, text} = item;
        return (
            `
            <div class='project-box'>
                <div class='project-img-box'>
                    ${video ? `<div class="videoContainer">
                        <iframe class="video-poperties" width="560" height="315" src="https://www.youtube.com/embed/${video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>` : ''}
                </div>
                <div class='project-content'>
                    <h2 class="project-title">${title}<span> ${text}</span></h2>
                </div>
            </div>
            `)
    }).join('');
};

const filterFirstMotionDesignCategories = motionDesignCategories.filter(item);

function item (value) {
    if (value.id == 1) {
        return (
            value.id
        )
    }
}

displayMotionDesignItem(filterFirstMotionDesignCategories)

const motionDesignBtns = [
    { id: 1, name: '<i class="fa-solid fa-backward"></i>' },
    { id: 1, name: '1'  },
    { id: 2, name: '2'  },
    { id: 3, name: '3'  },
    { id: 4, name: '4'  },
    { id: 5, name: '5'  },
    { id: 5, name: '<i class="fa-solid fa-forward"></i>' }
];

const motionDesignfilters = [...new Set(motionDesignBtns.map((btn)=>{return btn;}))]

document.getElementById('motion_design_btns').innerHTML = motionDesignfilters.map((btn)=>{
    var {name,id} = btn;
    return (
        "<button class='fil-p motion_design_state' onClick='filterMotionDesignItems("+(id)+`)'>${name}</button>`
    )
}).join('');

const filterMotionDesignItems = (a)=> {
    const filterMotionDesignCatergories = motionDesignCategories.filter(item);
    function item (value) {
        if (value.id == a) {
            return (
                value.id
            )
        }
    }
    displayMotionDesignItem(filterMotionDesignCatergories)
}

const motion_design_btn_state = document.querySelectorAll('.motion_design_state');

if (motion_design_btn_state.length > 0) {
    motion_design_btn_state[1].classList.add('active'); // Agregar clase "active" al primer botón
}

motion_design_btn_state.forEach(button => {
    button.addEventListener('click', function() {
        // Eliminar la clase "active" de todos los botones
        motion_design_btn_state.forEach(motion_design_state => motion_design_state.classList.remove('active'));
        
        // Agregar la clase "active" al botón clicado
        this.classList.add('active');
    });
});

/* ----------------------------------- */

/* script pagination for web development */

const webDevelopmentProjects = [
    { id: 1, image: 'imgs/websites_projects/strong_painting_website_screeshot.png', title: 'strong painting |', text: 'painting services website', category: 'web_development'}
];

const webDevelopmentCategories = [...new Set(webDevelopmentProjects.map((item) => {return item; }))]

const displayWebDevelopmentItem = (items) => {
    document.getElementById('web_development_root').innerHTML = items.map((item) => {
        var {image, title, text} = item;
        return (
            `
            <div class='project-box'>
                <div class='project-img-box'>
                    <img class='project-image' src=${image}></img>
                </div>
                <div class='project-content'>
                    <h2 class="project-title">${title}<span> ${text}</span></h2>
                    <button class='btn-visit' onClick="window.open('https://strongpainting.net/')", '_blank'>visit</button>
                </div>
            </div>
            `)
    }).join('');
};

const filterFirstWebDevelopmentCategories = webDevelopmentCategories.filter(item);

function item (value) {
    if (value.id == 1) {
        return (
            value.id
        )
    }
}

displayWebDevelopmentItem(filterFirstWebDevelopmentCategories)

const webDevelopmentBtns = [
    { id: 1, name: '<i class="fa-solid fa-backward"></i>' },
    { id: 1, name: '1'  },
    { id: 1, name: '<i class="fa-solid fa-forward"></i>' }
];

const webDevelopmentfilters = [...new Set(webDevelopmentBtns.map((btn)=>{return btn;}))]

document.getElementById('web_development_btns').innerHTML = webDevelopmentfilters.map((btn)=>{
    var {name,id} = btn;
    return (
        "<button class='fil-p web_development_state' onClick='filterWebDevelopementItems("+(id)+`)'>${name}</button>`
    )
}).join('');

const filterWebDevelopementItems = (a)=> {
    const filterWebDevelopmentCatergories = webDevelopmentCategories.filter(item);
    function item (value) {
        if (value.id == a) {
            return (
                value.id
            )
        }
    }
    displayWebDevelopmentItem(filterWebDevelopmentCatergories)
}

const web_development_btn_state = document.querySelectorAll('.web_development_state');

if (web_development_btn_state.length > 0) {
    web_development_btn_state[1].classList.add('active'); // Agregar clase "active" al primer botón
}

web_development_btn_state.forEach(button => {
    button.addEventListener('click', function() {
        // Eliminar la clase "active" de todos los botones
        web_development_btn_state.forEach(web_development_state => web_development_state.classList.remove('active'));
        
        // Agregar la clase "active" al botón clicado
        this.classList.add('active');
    });
});

/* ----------------------------------- */

/* script pagination for web development */

const gameDevelopmentProjects = [
    { id: 1, video: 'PInF6wF_vzE',    title: 'polydimension |',     text: '3d game', category: 'game_development'},
    { id: 1, video: 'F1LmiGlrgCU?si', title: 'sector |',            text: '2d game', category: 'game_development'},
    { id: 1, video: 'Wcrd18jpgjE?si', title: 'dangerous bombs |',   text: '3d game', category: 'game_development'},
    { id: 2, video: 'ou3tPy-saLI?si', title: 'pacman revolution |', text: '2d game', category: 'game_development'}
];

const gameDevelopmentCategories = [...new Set(gameDevelopmentProjects.map((item) => {return item; }))]

const displayGameDevelopmentItem = (items) => {
    document.getElementById('game_development_root').innerHTML = items.map((item) => {
        var {video, title, text} = item;
        return (
            `
            <div class='project-box'>
                <div class='project-img-box'>
                    ${video ? `<div class="videoContainer">
                                    <iframe class="video-poperties" width="560" height="315" src="https://www.youtube.com/embed/${video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>` : ''}
                </div>
                <div class='project-content'>
                    <h2 class="project-title">${title}<span> ${text}</span></h2>
                </div>
            </div>
            `)
    }).join('');
};

const filterFirstGameDevelopmentCategories = gameDevelopmentCategories.filter(item);

function item (value) {
    if (value.id == 1) {
        return (
            value.id
        )
    }
}

displayGameDevelopmentItem(filterFirstGameDevelopmentCategories)

const gameDevelopmentBtns = [
    { id: 1, name: '<i class="fa-solid fa-backward"></i>' },
    { id: 1, name: '1'  },
    { id: 2, name: '2'  },
    { id: 2, name: '<i class="fa-solid fa-forward"></i>' }
];

const gameDevelopmentfilters = [...new Set(gameDevelopmentBtns.map((btn)=>{return btn;}))]

document.getElementById('game_development_btns').innerHTML = gameDevelopmentfilters.map((btn)=>{
    var {name,id} = btn;
    return (
        "<button class='fil-p game_development_state' onClick='filterGameDevelopmentItems("+(id)+`)'>${name}</button>`
    )
}).join('');

const filterGameDevelopmentItems = (a)=> {
    const filterGameDevelopmentCatergories = gameDevelopmentCategories.filter(item);
    function item (value) {
        if (value.id == a) {
            return (
                value.id
            )
        }
    }
    displayGameDevelopmentItem(filterGameDevelopmentCatergories)
}

const game_development_btn_state = document.querySelectorAll('.game_development_state');

if (game_development_btn_state.length > 0) {
    game_development_btn_state[1].classList.add('active'); // Agregar clase "active" al primer botón
}

game_development_btn_state.forEach(button => {
    button.addEventListener('click', function() {
        // Eliminar la clase "active" de todos los botones
        game_development_btn_state.forEach(game_development_state => game_development_state.classList.remove('active'));
        
        // Agregar la clase "active" al botón clicado
        this.classList.add('active');
    });
});

/* ----------------------------------- */

/* animation */

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('opacity-on');
        }
        else {
            entry.target.classList.remove('opacity-on');
        }
    });
    }, {
        /*rootMargin: '-50px',*/
    }
);

/* about section */
const aboutImg = document.querySelector('.about-img');
observer.observe(aboutImg);

const aboutSubTitle = document.querySelector('.sub-title');
observer.observe(aboutSubTitle);

const aboutDescription = document.querySelector('.description');
observer.observe(aboutDescription);

const aboutBoxes = document.querySelectorAll('.box-animation');
aboutBoxes.forEach(box => {
    observer.observe(box);
});

const aboutTimelineTitles = document.querySelectorAll('.timeline-title');
aboutTimelineTitles.forEach(aboutTimelineTitle => {
    observer.observe(aboutTimelineTitle);
});

const aboutTimelineItems = document.querySelectorAll('.timeline-item');
aboutTimelineItems.forEach(timelineItem => {
    observer.observe(timelineItem);
});

const aboutSkillsTitle = document.querySelector('.skills-title');
observer.observe(aboutSkillsTitle);

const aboutSkillsContents = document.querySelectorAll('.skills-content-animation');
aboutSkillsContents.forEach(skillsContent => {
    observer.observe(skillsContent);
});

/* services section */
const servicesBoxes = document.querySelectorAll('.box');
servicesBoxes.forEach(box => {
    observer.observe(box);
});


/* portfolio section */
const projectsCategories = document.querySelectorAll('.projects-category');
projectsCategories.forEach(projectsCategory => {
    observer.observe(projectsCategory);
});

const projectBoxes = document.querySelectorAll('.animation');
projectBoxes.forEach(projectBox => {
    observer.observe(projectBox);
});

/* contact and footer section */
const contactLeftBox = document.querySelectorAll('.left-box');
contactLeftBox.forEach(leftBox => {
    observer.observe(leftBox);
});

const contactRightBox = document.querySelectorAll('.right-box');
contactRightBox.forEach(rightBox => {
    observer.observe(rightBox);
});

/* footer section only */
const footerCenterBox = document.querySelector('.center-box');
observer.observe(footerCenterBox);
