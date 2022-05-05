const albumContainer = document.getElementById('album-container');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

const fetchContent = async (fetchUrl) => {
    return fetch(fetchUrl).then(data => data.json());
};

const buildAlbums = (albums) => {
    const slideCount = 4;
    /*
    *  Add the first 7 items from our collection array to our container:
    *  We start with our full movies collection, call slice(0, 7) on it to trim
    *  the array to a length of 7, and then pass the resulting array to
    *  map. Map is a function that will run our specified function on each
    *  item in the array passed to it. So we pass it our sliced array and
    *  tell it to run our buildSlide function on each item. This will return
    *  a new array that holds all of the results from buildSlide, which are
    *  article HTML elements. So articleEls is an array of 7 article elements
    */
    const articleEls = albums.slice(0, slideCount).map(buildSlide);
    // Append these 7 HTML elements to our container, the '...' syntax takes
    // our array and turns it into a list of function arguments, so its
    // equivalent to append(article1, article2, article3, etc...)
    albumContainer.append(...articleEls);

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
        if (rightI >= albums.length) {
            rightI = 0;
        }
        if (leftI >= albums.length) {
            leftI = 0;
        }

        // Remove the first element 
        albumContainer.removeChild(albumContainer.children[0]);
        albumContainer.append(buildSlide(albums[rightI]));
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
        albumContainer.removeChild(albumContainer.querySelectorAll('article')[slideCount - 1]);
        albumContainer.prepend(buildSlide(albums[leftI]));
    });
};

    const buildAlbums = albums => {
        albums.forEach(item => {
             console.log(item);
             const imgEl = document.createElement('img');
             imgEl.setAttribute('src', item.images[0].url);
             albumContainer.append(imgEl);
         });
         };

    //if (movie.fields.description) {
        const descriptionEl = document.createElement('p');
        descriptionEl.innerHTML = movie.fields.description;
        descriptionEl.classList.add('movie-description');
        movieContainer.append(descriptionEl);
    }
    return albumContainer;
};

fetchMovies();