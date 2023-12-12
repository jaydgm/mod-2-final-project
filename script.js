// select the container element in html
const container = document.querySelector('.container');

// create array of objects for POIs
const POIs = [
    {
        id: 1,
        name: 'Rebels Roost',
        popularity: 'high',
        medallion: true,
        vault: true
    },
    {
        id: 2,
        name: 'Lavish Lair',
        popularity: 'medium',
        medallion: true,
        vault: true
    },
    {
        id: 3,
        name: 'Classy Courts',
        popularity: 'medium',
        medallion: false,
        vault: false
    },
    {
        id: 4,
        name: 'Ritzy Rivera',
        popularity: 'medium',
        medallion: true,
        vault: false
    }
];

// function to loop through POIs array
// then add to DOM
function addPOItoDOM () {
    for (let i=0; i<POIs.length; i++) {
        // create element button
        const poi = document.createElement('button');

        // set the text content of each poi to the name of the poi
        // make all have an attribute of id=<id>
        poi.textContent = POIs[i].name;
        poi.setAttribute('id', POIs[i].id);

        container.appendChild(poi);
        // setPosition();
        onClickPOI(poi);
    }
    // sets pois to appropriate poistions
    document.getElementById(1).style.position = "absolute";
    document.getElementById(1).style.fontSize = "12px";
    document.getElementById(1).style.top = "100px";
    document.getElementById(1).style.left= "125px";

    document.getElementById(2).style.position = "absolute";
    document.getElementById(2).style.fontSize = "12px";
    document.getElementById(2).style.top = "130px";
    document.getElementById(2).style.left= "190px";

    document.getElementById(3).style.position = "absolute";
    document.getElementById(3).style.fontSize = "12px";
    document.getElementById(3).style.top = "100px";
    document.getElementById(3).style.left= "280px";

    document.getElementById(4).style.position = "absolute";
    document.getElementById(4).style.fontSize = "12px";
    document.getElementById(4).style.top = "155px";
    document.getElementById(4).style.left= "80px";
    };

// add click event to each poi
function onClickPOI(poi) {
    poi.addEventListener('click',getPOIModal);
};


// creates a new modal for clicked POI
// uses references from POI array and
// getPOIContent to show correct info
function getPOIModal(e) {
    // Create a new modal element
    const modalElement = document.createElement('div');
    // assign classname to modal element
    modalElement.className = 'modal fade';

    // body of modal. with each clicked poi, it will pull the 
    // corresponding object's info in POIModal using the id #
    modalElement.innerHTML = 
        `
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">${POIs[e.target.id-1].name}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    ${getPOIContent(e.target.id-1)}
                </div>
            </div>
        </div>
        `;
  
        // Append the modal element to the body
        document.body.appendChild(modalElement);
  
        // Show the modal when appended to the body
        modalElement.classList.add('show');
        modalElement.style.display = 'block';
  
        // Cleanup: Remove the modal element when it is closed
        modalElement.addEventListener('click', function (event) {
          if (event.target.classList.contains('modal') || event.target.classList.contains('close')) {
            document.body.removeChild(modalElement);
          }
        });
}

// returns info for index'd object in POIs
function getPOIContent(index) {
    return 'Popularity: ' + POIs[index].popularity;

};

// put POI names over appropriate poisition on the map
// function setPosition() {
//         document.getElementById(1).style.position = "absolute";
//         document.getElementById(1).style.fontSize = "12px";
//         document.getElementById(1).style.top = "100px";
//         document.getElementById(1).style.left= "125px";


// }



// initialize app
function init () {
    addPOItoDOM();
};

init();









