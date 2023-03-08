const  membri = [
    {
        'nome':'Wayne Barnett',
        'ruolo':'Founder & CEO',
        'immagineProfilo': 'img/wayne-barnett-founder-ceo.jpg'
    },
    {
        'nome': 'Angela Caroll',
        'ruolo': 'Chief Editor',
        'immagineProfilo': 'img/angela-caroll-chief-editor.jpg'
    },
    {
        'nome':'Walter Gordon',
        'ruolo': 'Office Manager',
        'immagineProfilo': 'img/walter-gordon-office-manager.jpg'
    },
    {
        'nome': 'Angela Lopez',
        'ruolo':'Social Media',
        'immagineProfilo':'img/angela-lopez-social-media-manager.jpg'
    },
    {
        'nome':'Scott Estrada',
        'ruolo':'Developer',
        'immagineProfilo':'img/scott-estrada-developer.jpg'
    },
    {
        'nome':'Barbara Ramos',
        'ruolo': 'Graphic Designer',
        'immagineProfilo': 'img/barbara-ramos-graphic-designer.jpg'
    }
];

for (let key in membri) {
    console.log(membri[key]);
}

const main = document.getElementById('main');

const button = document.getElementById('button');

button.addEventListener ('click', 
    
    function() {

        

    })




for (i = 0; i < membri.length; i++) {
    const listaMembri = createNewCard(membri);
    main.append(listaMembri);
}









function createNewCard (membri) {
   const card = document.createElement('div');
   card.classList.add('card');

   const cardBorder = document.createElement('div');
   cardBorder.classList.add('card-border-top');
   card.append(cardBorder);

   const cardImg = document.createElement('img');
   cardImg.classList.add('img');
   cardImg.src = (membri[i]['immagineProfilo']);
   card.append(cardImg);

   const cardPerson = document.createElement('span');
   cardPerson.innerHTML = (membri[i]['nome'])
   card.append(cardPerson);

   const cardTitle = document.createElement('p');
   cardTitle.classList.add('job');
   cardTitle.innerHTML = membri[i]['ruolo'];
   card.append(cardTitle);

   return card;
   return cardBorder;
   return cardImg;
   return cardPerson;
   return cardTitle;
}