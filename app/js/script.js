/*End Dropdown Menu*/
let yearElem = document.getElementById("year");
let monthElem = document.getElementById("month");
let date = new Date();
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

for (let year = 2000; year <= 2500; year++) {
    let optn = document.createElement("Li");
    optn.text = year;

    optn.appendChild(document.createTextNode(optn.text));
    yearElem.appendChild(optn);
}

for (let month = 0; month <= 11; month++) {
    let optn = document.createElement("Li");
    optn.text = months[month];

    optn.appendChild(document.createTextNode(optn.text));
    monthElem.appendChild(optn);
}

const getDropdownList = (option, firstValue, lastValue) => {
    for (let option = firstValue; option <= lastValue; option++) {
        let optn = document.createElement("Li");
        let optnSecond = document.createElement("Li");
        optn.text = option;
        optnSecond.text = months[month];

        optn.appendChild(document.createTextNode(optn.text));
        yearElem.appendChild(optn);
    }
}


/*Dropdown Menu*/
$('.dropdown').click(function () {
    $(this).attr('tabindex', 1).focus();
    $(this).toggleClass('active');
    $(this).find('.dropdown-menu').slideToggle(300);
});
$('.dropdown').focusout(function () {
    $(this).removeClass('active');
    $(this).find('.dropdown-menu').slideUp(300);
});
$('.dropdown .dropdown-menu li').click(function () {
    $(this).parents('.dropdown').find('p').text($(this).text());
    $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
});

/* Upload Image */
function readURL(input) {
    if (input.files && input.files[0]) {

        var reader = new FileReader();

        reader.onload = function (e) {
            $('.image-upload-wrap').hide();

            $('.file-upload-image').attr('src', e.target.result);
            $('.file-upload-content').show();

            $('.image-title').html(input.files[0].name);
        };

        reader.readAsDataURL(input.files[0]);

    } else {
        removeUpload();
    }
}

function removeUpload() {
    $('.file-upload-input').replaceWith($('.file-upload-input').clone());
    $('.file-upload-content').hide();
    $('.image-upload-wrap').show();
}

$('.image-upload-wrap').bind('dragover', function () {
    $('.image-upload-wrap').addClass('image-dropping');
});
$('.image-upload-wrap').bind('dragleave', function () {
    $('.image-upload-wrap').removeClass('image-dropping');
});
