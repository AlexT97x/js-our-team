const teamMembers = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        image: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        image: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        image: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        image: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        image: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        image: "barbara-ramos-graphic-designer.jpg"
    }
];

const cardsContainer = document.getElementById("cards");
const cardsFragment = document.createDocumentFragment();

teamMembers.forEach(member => {
    const card = document.createElement("div");
    card.className = "card";

    const image = document.createElement("img");
    image.src = `./img/${member.image}`;
    card.appendChild(image);

    const name = document.createElement("h2");
    name.textContent = member.name;
    card.appendChild(name);

    const role = document.createElement("h4");
    role.textContent = member.role;
    card.appendChild(role);

    cardsFragment.appendChild(card);
});

cardsContainer.appendChild(cardsFragment);
cardsContainer.style.display = "flex";
cardsContainer.style.flexDirection = "row";
cardsContainer.style.textAlign = "center";
cardsContainer.style.flexWrap = "wrap";
cardsContainer.style.justifyContent = "center";
cardsContainer.style.gap = "20px";
cardsContainer.style.marginTop = "70px";
cardsContainer.style.marginBottom = "70px";
cardsContainer.style.rowGap = "50px";

console.log(teamMembers.map(member => `${member.name} ${member.role} ${member.image}`));
