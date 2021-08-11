/*End Dropdown Menu*/
let yearElem = document.getElementById("year");
let monthElem = document.getElementById("month");

for (let year = 2000; year <= 2500; year++) {
    let optn = document.createElement("Li");
    optn.text = year;

    optn.appendChild(document.createTextNode(optn.text));
    yearElem.appendChild(optn);
}

let date = new Date();
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
for (let month = 0; month <= 11; month++) {
    let optn = document.createElement("Li");
    optn.text = months[month];

    optn.appendChild(document.createTextNode(optn.text));
    monthElem.appendChild(optn);
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
    $(this).parents('.dropdown').find('span').text($(this).text());
    $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
});


