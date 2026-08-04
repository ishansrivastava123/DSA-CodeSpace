const users = [
    { name: "A", age: 20 },
    { name: "B", age: 21 },
    { name: "C", age: 19 },
    { name: "D", age: 20 }
]

const usersGroupedBy = {};

const forEachRes = users.forEach((user) => {
    const age = user.age;
    if (!usersGroupedBy[age]) {
        usersGroupedBy[age] = [];
    }
    usersGroupedBy[age].push(user);
})
