function urlParse(url) {
    url = url.split('?')[1];
    params = url.split('&');
    const result = {};
    params.forEach(param => {
        [key, value] = param.split('=');
        result[key] = value;
    })
    return result;
}

let url = '?a=10&b=20&c=30';
const query = urlParse(url);
console.log(query);
