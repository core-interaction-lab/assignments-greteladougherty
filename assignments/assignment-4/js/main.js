const albumContainer = document.getElementById('album-container');

const fetchContent = async (fetchUrl) => {
    return fetch(fetchUrl).then(data => data.json());
};

const htmlDecode = (input) => {
    const e = document.createElement('div');
    e.innerHTML = input;
    return e.innerText;
};

const buildStories = stories => {
    //stories.forEach(item => {
        //console.log(item);
        //const container = document.createElement('article');
        //const titleEl = document.createElement('h2');
        //const bodyEl = document.createElement('div');

        //titleEl.innerHTML = item.data.title;
        //bodyEl.innerHTML = htmlDecode(item.data.selftext_html);

        //container.append(titleEl, bodyEl);
        //albumContainer.append(container);
 //   });
};

const buildEpisodes = episodes => {
    //episodes.forEach(item => {
        //console.log(item);
        //const imgEl = document.createElement('img');
        //imgEl.setAttribute('src', item.image.medium);
        //albumContainer.append(imgEl);
    //});
    };
    const buildAlbums = albums => {
   albums.forEach(item => {
        console.log(item);
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
    
        wrap.appendChild(imgEl);
        wrap.appendChild(nameEL);
        wrap.appendChild(releaseEl);
        wrap.appendChild(info);
        albumContainer.appendChild(wrap);
    });
    };

    const url1 = 'https://interactionlab.space/data/assignment-4-1.json'
    //const url2 = 'https://interactionlab.space/data/assignment-4-2.json'
    //const url3 = 'https://interactionlab.space/data/assignment-4-3.json'
    
    const main = async () => {
        const response1 = await fetchContent(url1);
        //const response2 = await fetchContent(url2);
        //const response3 = await fetchContent(url3);
       //console.log(response);
        //buildStories(response3.data.children);
        //buildEpisodes(response2);
        buildAlbums(response1.items);
    };

    main();