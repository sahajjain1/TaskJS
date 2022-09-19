const obj = {

    'name1': 'sec-a',
    'name2': 'sec-a',
    'name3': 'sec-c',
    'name4': 'sec-a',
}
result = {};
Object.values(obj).forEach(
    (ele) => {
        if (!result[ele]) {
            result[ele] = {
                count: 0,
                names: []
            };
        }
    }
)
Object.keys(obj).forEach(key => {
    const KeyOject = result[obj[key]];
    KeyOject.count += 1;
    KeyOject.names.push(key)
})

console.log(result);

