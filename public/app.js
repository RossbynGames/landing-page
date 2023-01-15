const pages = document.querySelectorAll('.page');

function navigate(event, id) {
    event.preventDefault();
    showPage(id);
}

function showPage(id) {
    for (const page of pages) {
        if (page.id === id) {
            page.className = 'page';
        }
        else {
            page.className = 'page page--hidden';
        }
    }
}

showPage('start');

const contact = document.getElementById('contact');
const contactValue = 'hello[alfa]rossbyn[dot]games'.replace('[alfa]', '@').replace('[dot]', '.');
contact.setAttribute('href', 'mailto:' + contactValue);
contact.innerHTML = contactValue;
