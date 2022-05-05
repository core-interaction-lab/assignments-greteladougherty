const albumContainer = document.getElementById('album-container');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

const fetchContent = async (fetchUrl) => {
    const response = await fetch(fetchUrl).then(data => data.json());
    buildSlideshow(response.records);
    return response.records;
};

const buildSlideshow = () => {
    const slideCount = 3;
    const articleEls = albums.slice(0, slideCount).map(buildSlide);
        // Append these 7 HTML elements to our container, the '...' syntax takes
        // our array and turns it into a list of function arguments, so its
        // equivalent to append(article1, article2, article3, etc...)
        slideshowContainer.append(...articleEls);
    
        /*
        *  Here we declare two variables using let, since we will be updating them. 
        *  One to keep track of the index of the movie that is on the right of
        *  of our container, and one for the left side. If we click prev we increase
        *  both of these by 1, since we start with viewing slides 0-6, and if we
        *  click prev we want to then be viewing slides 1-7.
        */
        let leftI = 0;
        let rightI = slideCount - 1;
    
        prevButton.addEventListener('click', () => {
            leftI += 1;
            rightI += 1;
            // If the right or left side is the last movie in our list, reset it to 0
            if (rightI >= movies.length) {
                rightI = 0;
            }
            if (leftI >= movies.length) {
                leftI = 0;
            }
    
            // Remove the first element 
            slideshowContainer.removeChild(slideshowContainer.children[0]);
            slideshowContainer.append(buildSlide(movies[rightI]));
        });
    
        nextButton.addEventListener('click', () => {
            leftI -= 1;
            rightI -= 1;
            if (leftI < 0) {
                leftI = movies.length - 1;
            }
            if (rightI < 0) {
                rightI = movies.length - 1;
            }
            slideshowContainer.removeChild(slideshowContainer.querySelectorAll('article')[slideCount - 1]);
            slideshowContainer.prepend(buildSlide(movies[leftI]));
        });
    };
    
    const buildSlide = (movie) => {
        const movieContainer = document.createElement('article');
        if (movie.fields.poster) {
            // console.log(movie.fields.poster[0].url);
            const posterImg = document.createElement('img');
            posterImg.src = movie.fields.poster[0].url;
            posterImg.classList.add('poster-img', 'dlkjfdl');
            posterImg.id = 'poster-img-id';
            movieContainer.append(posterImg);
        }
        if (movie.fields.release_date) {
            // console.log(movie.fields.release_date);
        }
    
        if (movie.fields.description) {
            //const descriptionEl = document.createElement('p');
            //descriptionEl.innerHTML = movie.fields.description;
            //descriptionEl.classList.add('movie-description');
            //movieContainer.append(descriptionEl);
        }
        return albumContainer;
    };

//const htmlDecode = (input) => {
    //const e = document.createElement('div');
    //e.innerHTML = input;
    //return e.innerText;
//};

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
        const imgEl = document.createElement('img');
        imgEl.setAttribute('src', item.images[0].url);
        albumContainer.append(imgEl);
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

