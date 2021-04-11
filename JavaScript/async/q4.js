Promise.reject('1')
.then(res => {
    console.log('2');
}, err => {
    console.log('err');
    throw new Error('err2');
})
.then(() => {
    console.log('3');
}, (err) => {
    console.log(err);
})
.then(() => {
    console.log('after err handling');
    throw new Error('another err');
})
.catch(err => {
    console.log(err);
})

// err
// Error: err2
// after err handling
// Error: another err