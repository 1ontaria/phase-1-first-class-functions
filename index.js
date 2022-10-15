function receivesAFunction(spy) {
    return spy()
}

function returnsANamedFunction() {
    return function ontariaFunction() {
    }
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log("I like getting high!")
    }
}