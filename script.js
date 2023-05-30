var j = 0;
//Function for live Rendering
function update(i) {
    if (i == 0) {
        let htmlCode = document.getElementById("htmlCode").value;
        let cssCode = document.getElementById("cssCode").value;
        let javascriptCode = document.getElementById("javascriptCode").value;
        let text = htmlCode + "<style>" + cssCode + "</style>" + "<scri" + "pt>" + javascriptCode + "</scri" + "pt>";
        let iframe = document.getElementById('output').contentWindow.document;
        iframe.open();
        iframe.write(text);
        iframe.close();
    }

    else if (i == 1) {

        let htmlCode = document.getElementById("htmlCode").value;
        let html = htmlCode.slice(0, htmlCode.length);
        document.getElementById("htmlCode").value = html;
        j = 1;

    }
}

// decrease Font
console.log($('.one.dec'));
$('.one.dec').on('click', function (e) {

    let fontSize = $('#htmlCode').css('fontSize').replace('px', '');
    if (+fontSize > 10) {
        console.log('before', $('#htmlCode').css('fontSize'));
        $('#htmlCode').css('fontSize', `${+(fontSize) - 2}px`);
        console.log('after', $('#htmlCode').css('fontSize'));
    }
})
$('.two.dec').on('click', function (e) {

    let fontSize = $('#cssCode').css('fontSize').replace('px', '');
    if (+fontSize > 10) {
        console.log('before', $('#cssCode').css('fontSize'));
        $('#cssCode').css('fontSize', `${+(fontSize) - 2}px`);
        console.log('after', $('#cssCode').css('fontSize'));
    }
})
$('.three.dec').on('click', function (e) {

    let fontSize = $('#javascriptCode').css('fontSize').replace('px', '');
    if (+fontSize > 10) {
        console.log('before', $('#javascriptCode').css('fontSize'));
        $('#javascriptCode').css('fontSize', `${+(fontSize) - 2}px`);
        console.log('after', $('#javascriptCode').css('fontSize'));
    }
})

$('.one.inc').on('click', function (e) {

    let fontSize = $('#htmlCode').css('fontSize').replace('px', '');
    console.log('before', $('#htmlCode').css('fontSize'));
    $('#htmlCode').css('fontSize', `${+(fontSize) + 2}px`);
    console.log('after', $('#htmlCode').css('fontSize'));
})
$('.two.inc').on('click', function (e) {

    let fontSize = $('#cssCode').css('fontSize').replace('px', '');
    console.log('before', $('#cssCode').css('fontSize'));
    $('#cssCode').css('fontSize', `${+(fontSize) + 2}px`);
    console.log('after', $('#cssCode').css('fontSize'));


})
$('.three.inc').on('click', function (e) {

    let fontSize = $('#javascriptCode').css('fontSize').replace('px', '');
    console.log('before', $('#javascriptCode').css('fontSize'));
    $('#javascriptCode').css('fontSize', `${+(fontSize) + 2}px`);
    console.log('after', $('#javascriptCode').css('fontSize'));
})

// full screen
$('.one.fullScreen').on('click', function (e) {
    $('.exitFullScreen').css('display', 'block');
    $('.cssBlock').css('display', 'none');
    $('.jsBlock').css('display', 'none');
    $('.outputBlock').css('display', 'none');
    $('.one.fullScreen').css('display', 'none');

})
$('.two.fullScreen').on('click', function (e) {
    $('.exitFullScreen').css('display', 'block');
    $('.htmlBlock').css('display', 'none');
    $('.jsBlock').css('display', 'none');
    $('.outputBlock').css('display', 'none');
    $('.two.fullScreen').css('display', 'none');
})
$('.three.fullScreen').on('click', function (e) {
    $('.exitFullScreen').css('display', 'block');
    $('.cssBlock').css('display', 'none');
    $('.htmlBlock').css('display', 'none');
    $('.outputBlock').css('display', 'none');
    $('.three.fullScreen').css('display', 'none');
})
$('.four.fullScreen').on('click', function (e) {
    $('.exitFullScreen').css('display', 'block');
    $('.cssBlock').css('display', 'none');
    $('.htmlBlock').css('display', 'none');
    $('.jsBlock').css('display', 'none');
    $('.four.fullScreen').css('display', 'none');
})


$('.exitFullScreen').on('click', function (e) {
    $('.fullScreen').css('display', 'block');
    $('.flexContainer').css('display', 'flex');
    $('.exitFullScreen').css('display', 'none');
})