// Change language en/thai
var document = document;

function changeLanguage(elClassName) {
    const showClassName = elClassName
    const hideClassName = elClassName == 'en' ? 'th' : 'en'
    $('.' + showClassName).show()
    $('.' + hideClassName).hide()
}

changeLanguage('en')