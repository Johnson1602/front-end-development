function promiseRace(promises) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(promises)) {
            throw new TypeError('params must be an array');
        }
        for (let promise of promises) {
            Promise.resolve(promise)
            .then(result => {
                resolve(result);
            })
            .catch(err => {
                reject(err);
            })
        }
    })
}

let p1 = new Promise(resolve => {
    setTimeout(resolve, 105, 'p1 done')
})
let p2 = new Promise(resolve => {
    setTimeout(resolve, 100, 'p2 done')
})
promiseRace([p1, p2]).then(data => {
    console.log(data); // p2 done
})