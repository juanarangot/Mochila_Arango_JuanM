const jsonData = `
{
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}`;

let item = JSON.parse(jsonData);
for (let member of item.members) {
    console.log(member.name);
}

item.members.forEach(member => {
    console.log(member.name);
});

// setTimeout(() => {
//     print('Prueba setTimeout');
//     confirm("Prueba confirm");
// }, 500);

function print(text) {
    console.log(text);
}


document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();

    let inputText = document.querySelector('#comentario').value;
    addComment(inputText);
    showComments();
});

let comments = [];

function addComment(comment) {
    comments.push(comment);
}

function showComments() {
    let container = document.querySelector('.comentarios');
    container.innerHTML = '';

    comments.forEach((comment, index) => {
        let div = document.createElement('div');
        div.innerHTML = `<p>${comment}</p>`;

        let button = document.createElement('button');
        button.textContent = 'Quitar';
        button.addEventListener('click', () => {
            removeComment(index);
            showComments();
        });

        div.appendChild(button);
        container.appendChild(div);
    });
}

function removeComment(index) {
    comments.splice(index, 1);
}