const promise = Promise.resolve('success');

promise.then(message => {
    console.log(message);
})
.catch(err => {
    console.log(err);
})
.finally(() => {
    console.log('finally');
})
.then(() => {
    console.log('still can?')
})