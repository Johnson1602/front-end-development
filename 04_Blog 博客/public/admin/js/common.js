function serializeArrayToJson (form) {
    // [{name: "email", value: "johnsonxwy@gmail.com"}, {name: "password", value: "123456sobad"}]
    let f = form.serializeArray()
    let formData = {}
    f.forEach(item => {
        formData[item.name] = item.value
    })
    return formData
}