let person =  {
    name: "Mg Mg",
    brother: "Aung Aung",
    father: "U Mya",
    mother: "Daw Hla",
    sister: "Su Su",
    age: 22
}

let mgmgData = `
    <h5>${person.name} Resume</h5>
    <ul>
        <li>Father : ${person.father}</li>
        <li>Mother : ${person.mother}</li>
        <li>Brother : ${person.brother}</li>
        <li>Sister : ${person.sister}</li>
        <li>Age : ${person.age}</li>
    </ul>
`;

document.querySelector('.para').innerHTML = mgmgData;