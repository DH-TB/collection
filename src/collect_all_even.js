function collect_all_even(collection) {

    return buildEvenNumber(collection);
}

function buildEvenNumber(collection) {
    var array = [];

    for (var i = 0; i < collection.length; i++) {
        if (collection[i] % 2 === 0)
            array.push(collection[i]);
    }

    return array;
}

module.exports = collect_all_even;
