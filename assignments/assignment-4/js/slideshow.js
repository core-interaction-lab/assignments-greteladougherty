const albumContainer = document.getElementById('album-container');
const slideshowContainer = document.getElementById('slideshow-container');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

const fetchContent = (fetchUrl) => {
    return fetch(fetchUrl).then(data => data.json());
};
const htmlDecode = (input) => {
    const e = document.createElement('div');
    e.innerHTML = input;
    return e.innterText;
}

const buildAlbums = albums => {
albums.forEach(item =>{
    // console.log(item);
    const imgEl = document.createElement('img');
});
}

const url1 = 'https://interactionlab.space/data/assignment-4-1.json';

const main = async () => {
    const response = await fetchContent(url1);
    // console.log (response);
    buildAlbums(response.items);
    buildSlideshow(response.items);
};


const buildSlideshow = (albums) => {
    let leftI = 0;
    let rightI = 3;

    console.log(albums.slice(0,4));
    albums.slice(0,4).forEach(e => (buildSlide(e)));

    prevButton.addEventListener('click', () => {
        leftI += 1;
        rightI += 1;
        if (rightI >= albums.length) {
            rightI = 0;
        }
        if (leftI >= albums.length) {
            leftI = 0;
        }
        slideshowContainer.removeChild(slideshowContainer.querySelectorAll('img')[3]);
        // slideshowContainer.removeChild(slideshowContainer.children[4]);
        (buildSlide(albums[rightI],"pre"));
        // slideshowContainer.prepend(buildSlide(albums[rightI]));

    });

  
    nextButton.addEventListener('click', () => {
        leftI -= 1;
        rightI -= 1;
        if (leftI < 0) {
            leftI = albums.length - 1;
        }
        if (rightI < 0) {
            rightI = albums.length - 1;
        }
        slideshowContainer.removeChild(slideshowContainer.querySelectorAll('img')[0]);
        (buildSlide(albums[leftI]));
    });
}

    const buildSlide = (albums,state="post") => {
        const wrap = document.createElement('div');
        wrap.classList.add('album')

        const info = document.createElement('div');
        info.classList.add('info');

        const imgEl = document.createElement('img');
        imgEl.setAttribute('src', item.images[0].url);

        const nameEL = document.createElement('div');
        nameEL.innerHTML = item.name;
        nameEL.classList.add("name");
        
        const releaseEl = document.createElement("div")
        releaseEl.innerHTML = item.release_date;
    

            if (state=="post"){
                console.log("post")
                wrap.appendChild(imgEl);
                wrap.appendChild(nameEL);
                wrap.appendChild(releaseEl);
                wrap.appendChild(info);
                albumContainer.appendChild(wrap);
            }
            else if(state=="pre"){
                console.log("pre")
                wrap.prependChild(imgEl);
                wrap.prependChild(nameEL);
                wrap.prependChild(releaseEl);
                wrap.prependChild(info);
                albumContainer.prependChild(wrap);
            }
 };

main();