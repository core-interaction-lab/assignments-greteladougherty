const db = {
    id: 'appcsQRmmuN16Anz9',
    table: '100Fish',
    apiKey: 'key7a1dnnjswCCFwL'
};

const airtableUrl = `https://api.airtable.com/v0/${db.id}/${db.table}?maxRecords=100&view=Grid%20view&api_key=${db.apiKey}`

function myFunction() {
    document.getElementById("nav").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.filterbutton')) {
      var dropdowns = document.getElementsByClassName("navContainer");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

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

    const fishHabitat = {
        NativeTo: 'Africa',
        NativeTo: 'Antarctica',
        NativeTo: 'Asia',
        NativeTo: 'Africa',
        NativeTo: 'Australia & Oceania',
        NativeTo: 'Europe',
        NativeTo: 'North America',
        NativeTo: 'South America',
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
    //if(fish.fields.PopulationStatus){
        const status = document.createElement("p");
        status.innerHTML = fish.fields.PopulationStatus;
        status.classList.add("PopulationStatus");
        //container.append(status);
        //myArray.sort();
        //console.log(myArray.sort());
    //}
    if(fish.fields.CommonName){
        const name = document.createElement("p");
        name.innerHTML = fish.fields.CommonName;
        name.classList.add("CommonName");
        container.append(name);
        //myArray.sort();
        //console.log(myArray.sort());
    }
    if(fish.fields.LatinName){
        const sciname = document.createElement("p");
        sciname.innerHTML = fish.fields.LatinName;
        sciname.classList.add("LatinName");
        container.append(sciname);
        //myArray.sort();
       // console.log(myArray.sort());
    }
    if(fish.fields.NativeTo){
        const status = document.createElement("p");
        status.innerHTML = fish.fields.NativeTo;
        status.classList.add("NativeTo");
        container.append(status);
        //myArray.sort();
        //console.log(myArray.sort());
    }
    var line = document.createElement("hr");
    line.setAttribute("width", "95%");
    container.append(line);
    });
};

fetchFish();
