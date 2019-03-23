function update() {
    let names = Object.keys(inputs);
    names.forEach(name => {
        var n = inputs[name]
        if (n.el) {
            inputs[name].value = n.el.value ? n.el.value : null
        }
    })
    console.log(inputs);

    return inputs
}

function addEvents() {
    Object.keys(inputs).forEach(name => {
        inputs[name].el.addEventListener('change', function () {
            return update();
        })
    })
}

window.onload = () => {
    console.log(
        addEvents()
    )
};