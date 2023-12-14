// select the container element in html
const container = document.querySelector('.container');
var poiList = Array.from(document.querySelectorAll('.container button'));

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
        vault: 'No'
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
        vault: 'No'
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
        poiList[i].setAttribute('id',POIs[i].id);
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

// filter poi's
function updateFilter (poiList) {
    let i = 0;
    // const hasMedallion = POIs[i].medallion;
    // const popIsHigh = POIs[i].popularity;
    // const popIsMed = POIs[i].popularity;
    // const popIsLow = POIs[i].popularity;
    // const hasVault = POIs[i].vault;
    const checkMedallion = document.getElementById('check-medallion');
    const checkPopHigh = document.getElementById('check-pop-high');
    const checkPopMed = document.getElementById('check-pop-med');
    const checkPopLow = document.getElementById('check-pop-low');
    const checkVault = document.getElementById('check-vault');


    checkMedallion.addEventListener('change', function() {
        for (i=0;i<poiList.length;i++) {
            if (checkMedallion.checked) {
                if (POIs[i].medallion === 'No') {
                    poiList[i].style.display = 'none';
                }
            } else {
                poiList[i].style.display = 'inline-block';
            }
        } 
    });

    checkPopHigh.addEventListener('change', function () {
        for (i=0;i<poiList.length;i++) {
            if (checkPopHigh.checked) {

                if (POIs[i].popularity !== 'high') {
                    poiList[i].style.display = 'none';
                }
            } else if (!(checkPopHigh.checked)) {
                poiList[i].style.display = 'inline-block';
            }
        }
    });

    checkPopMed.addEventListener('change', function () {
        for (i=0;i<poiList.length;i++) {
            if (checkPopMed.checked) {

                if (POIs[i].popularity !== 'medium') {
                    poiList[i].style.display = 'none';
                }
            } else if (!(checkPopHigh.checked)) {
                poiList[i].style.display = 'inline-block';
            }
        }
    });

    checkPopLow.addEventListener('change', function () {
        for (i=0;i<poiList.length;i++) {
            if (checkPopLow.checked) {

                if (POIs[i].popularity !== 'low') {
                    poiList[i].style.display = 'none';
                }
            } else if (!(checkPopHigh.checked)) {
                poiList[i].style.display = 'inline-block';
            }
        }
    });

    checkVault.addEventListener('change', function () {
        for (i=0;i<poiList.length;i++) {
            if (checkVault.checked) {

                if (POIs[i].vault === 'No') {
                    poiList[i].style.display = 'none';
                }
            } else if (!(checkPopHigh.checked)) {
                poiList[i].style.display = 'inline-block';
            }
        }
    });
}

function checkUI() {
    poiList.forEach(function(button) {
        button.style.display = 'inline-block';
    })
}

// initialize app
function init () {
    addPOItoList();
    onClickPOI();
    updateFilter(poiList)
};

init();









