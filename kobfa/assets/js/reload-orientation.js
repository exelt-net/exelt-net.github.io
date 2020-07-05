var memROCinits = []
$('#reloadOrientationChange').each((i, el) => {
    memROCinits.push({
        el,
        html: $(el).html()
    })
})

function onOrientationChange() {
    memROCinits.forEach(v => {
        const {
            el,
            html
        } = v
        $(el).html(html)
    })
}
window.addEventListener('orientationchange', onOrientationChange);