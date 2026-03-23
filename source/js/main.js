const dialog = document.getElementById('myDialog');

function showDialog(title, message, onConfirm) {
    dialog.querySelector('h2').textContent = title;
    dialog.querySelector('p').textContent = message;

    window.currentConfirmAction = onConfirm;

    document.body.classList.add('dialog-open');

    dialog.showModal();
}

function closeDialog() {
    dialog.close();
    document.body.classList.remove('dialog-open');
}

document.addEventListener('DOMContentLoaded', function () {
    const detaljerHomeBtn = document.getElementById('detaljer_home');
    if (detaljerHomeBtn) {
        detaljerHomeBtn.addEventListener('click', function () {
            showDialog(
                'Digital Demokrati',
                'Nye teknologier endrer hvordan vi deltar i demokratiet. Fra e-valg til digitale borgermøter - mulighetene er mange, men vi må være bevisste på utfordringene som følger med.',
                function () {
                    console.log('Bekreftet: Digital Demokrati');
                }
            );
        });
    }

    const detaljerDigitalBtn = document.getElementById('detaljer_digital');
    if (detaljerDigitalBtn) {
        detaljerDigitalBtn.addEventListener('click', function () {
            showDialog(
                'Digital Deltakelse',
                'Sosiale medier gir vanlige mennesker mer politisk makt enn noen gang. Men algoritmer kan skape "ekkokamre" der vi bare ser meninger vi allerede er enige med. Hvordan kan vi sikre en balansert digital offentlighet?',
                function () {
                    console.log('Bekreftet: Digital Deltakelse');
                }
            );
        });
    }

    const detaljerFakeNewsBtn = document.getElementById('detaljer_fake_news');
    if (detaljerFakeNewsBtn) {
        detaljerFakeNewsBtn.addEventListener('click', function () {
            showDialog(
                'Desinformasjon og Fake News',
                'Falske nyheter sprer seg 6 ganger raskere enn sannheter på sosiale medier. Dette kan påvirke valg, skape samfunnssplittelse og undergrave tilliten til demokratiske institusjoner. Kildekritikk har aldri vært viktigere.',
                function () {
                    console.log('Bekreftet: Desinformasjon og Fake News');
                }
            );
        });
    }

    const detaljerFolkBtn = document.getElementById('detaljer_folk');
    if (detaljerFolkBtn) {
        detaljerFolkBtn.addEventListener('click', function () {
            showDialog(
                'Personvern og Overvåking',
                'Digitale spor etterlates overalt. Store teknologiselskaper samler data om våre vaner, posisjoner og meninger. Samtidig overvåker myndigheter i økende grad. Hvor går grensen mellom sikkerhet og privatliv?',
                function () {
                    console.log('Bekreftet: Personvern og Overvåking');
                }
            );
        });
    }

    dialog.addEventListener('click', function (e) {
        const dialogDimensions = dialog.getBoundingClientRect();
        if (
            e.clientX < dialogDimensions.left ||
            e.clientX > dialogDimensions.right ||
            e.clientY < dialogDimensions.top ||
            e.clientY > dialogDimensions.bottom
        ) {
            closeDialog();
        }
    });

    dialog.addEventListener('cancel', function (e) {
        e.preventDefault();
        closeDialog();
    });
});