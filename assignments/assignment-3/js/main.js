const db = {
    id: 'appcsQRmmuN16Anz9',
    table: '100Fish',
    apiKey: 'key7a1dnnjswCCFwL'
};

const airtableUrl = `https://api.airtable.com/v0/${db.id}/${db.table}?maxRecords=100&view=Grid%20view&api_key=${db.apiKey}`

const fetchFish = async () => {
    const response = await fetch(airtableUrl).then(data => data.json());
    //console.log(response);

    const myObject = {
    title:'fish', 
    habitat: 'indian ocean',
    };

    const fishStatus = {
        PopulationStatus: 'Active',
        PopulationStatus: 'Declining'
    };

    const myArray = ['fish', , ''];

    const ImageExists = true;

    // console.log(myObject.habitat);
    // console.log(myArray [2]);

    const container = document.getElementById('fish-container');

    response.records.forEach((fish) => {
   // console.log(fish);
    if(fish.fields.Image){
    console.log(fish.fields.Image[0].url);
    const Img = document.createElement('img');
    Img.src = fish.fields.Image[0].url;
    Img.setAttribute("id","fishImg");
    // Img.setAttribute('src') = fish.fields.Image[0].url;
    container.append(Img)
    }
    //if (fish.fields.Habitat)
    if(fish.fields.PopulationStatus){
        const status = document.createElement("p");
        status.innerHTML = fish.fields.PopulationStatus;
        status.classList.add("PopulationStatus");
        container.append(status);
        myArray.sort();
        console.log(myArray.sort());
    }
    });
};

fetchFish();
