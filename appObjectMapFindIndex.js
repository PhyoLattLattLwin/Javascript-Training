let users = [
    {
        name : "Mg Mg",
        age : 20,
        school : "YGN"
    },

    {
        name : "Su Su",
        age : 22,
        school : "MDY"
    },

    {
        name : "Cherry",
        age : 24,
        school : "MLM"
    },

];

users.forEach((user)=>{
    console.log(user.name);
})

users.map((user)=>{
    console.log(user.school);
})

let ind = users.findIndex(user=>user.age == 22);
console.log(users[ind]);