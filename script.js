// select the container element in html
const container = document.querySelector('.container');
var poiList = Array.from(document.querySelectorAll('.container button'));
var checkboxes = document.querySelectorAll('.form-check-input');

// create array of objects for POIs
const POIs = [
    {
        id: 1,
        name: 'Rebels Roost',
        popularity: 'low',
        medallion: 'No',
        vault: 'No'
    },
    {
        id: 2,
        name: 'Lavish Lair',
        popularity: 'high',
        medallion: 'Yes',
        'Mythic Weapon': 'Oscars Frenzy Auto Shotgun',
        vault: 'Yes'
    },
    {
        id: 3,
        name: 'Classy Courts',
        popularity: 'low',
        medallion: 'No',
        vault: 'No'
    },
    {
        id: 4,
        name: 'Ritzy Rivera',
        popularity: 'low',
        medallion: 'No',
        vault: 'Yes'
    },
    {
        id: 5,
        name: 'Ruined Reels',
        popularity: 'medium',
        medallion: 'No',
        vault: 'No'
    },
    {
        id: 6,
        name: 'Reckless Railways',
        popularity: 'high',
        medallion: 'Yes',
        'Mythic Weapon': 'Valeria Hyper SMG',
        vault: 'Yes'
    },
    {
        id: 7,
        name: 'Grand Glacier',
        popularity: 'medium',
        medallion: 'Yes',
        'Mythic Weapon': 'Montagues Enforcer AR',
        vault: 'Yes'
    },
    {
        id: 8,
        name: 'Pleasant Piazza',
        popularity: 'high',
        medallion: 'No',
        vault: 'No'
    },
    {
        id: 9,
        name: 'Fencing Fields',
        popularity: 'high',
        medallion: 'Yes',
        'Mythic Weapon': 'Nishas Striker AR',
        vault: 'Yes'
    },
    {
        id: 10,
        name: 'Hazy Hillside',
        popularity: 'low',
        medallion: 'No',
        vault: 'Yes'
    },
    {
        id: 11,
        name: 'Snooty Steppes',
        popularity: 'medium',
        medallion: 'Yes',
        'Mythic Weapon': 'Peter Griffins Hammer Pump Shotgun',
        vault: 'Yes'
    }
];

// 
function addPOItoList () {
    for (let i=0;i<poiList.length;i++) {
        poiList[i].textContent = POIs[i].name;
    }
}

// add click event to each poi
function onClickPOI() {
    for (let i=0;i<poiList.length;i++) {
        poiList[i].addEventListener('click',getPOIModal)
    }
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
    // corresponding object's info in POIs by using the buttons title number
    modalElement.innerHTML = 
        `
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">${POIs[e.target.title-1].name}</h5> 
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    ${getPOIContent(e.target.title-1)}
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
    const propertyName = 'Mythic Weapon';
        if (POIs[index].hasOwnProperty('Mythic Weapon') === true) {
            return 'Popularity: ' + POIs[index].popularity + '<br>' +
            'Medallion: ' + POIs[index].medallion + '<br>' +
            'Mythic Weapon: ' + POIs[index]['Mythic Weapon'] + '<br>' +
            'Vault: ' + POIs[index].vault;
        } else {
            return 'Popularity: ' + POIs[index].popularity + '<br>' +
                'Medallion: ' + POIs[index].medallion + '<br>' +
                'Vault: ' + POIs[index].vault;
        }
};

// show or hide buttons in response to the 
//corresponding checkboxes that checked/not checked
function updateButtons(e) {
    // variables that store respective checkboxes that are checked
    var medallionChecked = checkboxes[0].checked;
    var popHighChecked = checkboxes[1].checked;
    var popMedChecked = checkboxes[2].checked;
    var popLowChecked = checkboxes[3].checked;
    var vaultChecked = checkboxes[4].checked;

    // target the checkbox that's checked/unchecked then,
    // for each button, toggle hidden tag if it meets the
    // if statement parameters (exp. if a particular poi's
    // medallion property = 'No', then hide the corresponding
    // button)
    if (e.target.id === 'check-medallion') {
        poiList.forEach(function(poi, index) {
            if (POIs[index].medallion === 'No') {
                poiList[index].classList.toggle('hidden',medallionChecked);
            }
        });
    } else if (e.target.id === 'check-pop-high') {
        poiList.forEach(function(poi, index) {
            if (POIs[index].popularity !== 'high') {
                poiList[index].classList.toggle('hidden', popHighChecked);
            }
        });
    } else if (e.target.id === 'check-pop-med') {
        poiList.forEach(function(poi, index) {
            if (POIs[index].popularity !== 'medium') {
                poiList[index].classList.toggle('hidden', popMedChecked);
            }
        });
    } else if (e.target.id === 'check-pop-low') {
        poiList.forEach(function(poi, index) {
            if (POIs[index].popularity !== 'low') {
                poiList[index].classList.toggle('hidden', popLowChecked);
            }
        });
    } else if (e.target.id === 'check-vault') {
        poiList.forEach(function(poi, index) {
            if (POIs[index].vault === 'No') {
                poiList[index].classList.toggle('hidden', vaultChecked);
            }
        });
    }
}

// initialize app
function init () {
    addPOItoList();
    onClickPOI();
    // check if state of each checkbox is changed (checked/unchecked)
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change',updateButtons)
    });
};

init();









