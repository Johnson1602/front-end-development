const obj = {
    name: 'Johnson',
    age: 24,
    gender: 'male'
};

for (const attr in obj) {
    console.log(obj[attr]);
}