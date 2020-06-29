// Change language en/th
var document = document;

function changeLanguage(elClassName) {
    const showClassName = elClassName
    const hideClassName = elClassName == 'en' ? 'th' : 'en'
    $('.' + showClassName).show()
    $('.' + hideClassName).hide()
}
changeLanguage('en')

$('.language-btn').on('click', function() {
    $('.language-btn').removeClass('active');
    $(this).addClass('active');
});