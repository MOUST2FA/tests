var sections = document.querySelectorAll('section');
onscroll = function () {
    var sectionPosition = this.document.documentElement.scrollTo;
    sections.forEach((section) => {
        if (sectionPosition >= section.offsetTop && sectionPosition < section.offsetTop + section.offsetHeight) {
            var currentId = section.attributes.id.value;
            removeActive();
            addActive(currentId);

        }
    })
}

var removeActive = function () {
    document.querySelectorAll('.nav a').forEach(el => {
        el.classList.remove('active')
    })
}

var addActive = function (id) {
console.log(id);
var selector = `nav a[href="#${id}"]`;
document.querySelector(selector).classList.add('active')

}