jQuery(document).ready(function(){
    var i = 0;
    var j = 0;
    setInterval(function () {
        jQuery('.timer').find('.sec').text(i);
        if(i==60){
            i = 0;
            j++;
        jQuery('.timer').find('.min').text(j);
        }
        i++;
    }, 1000);
    mobile_menu_init();
    

});



jQuery(document).on('click', '.ham_burg_menu', function(){
    jQuery('ul.navbar').slideToggle();
});


jQuery(window).resize(function(){
    mobile_menu_init();
});


function mobile_menu_init() {
    if (window.matchMedia('(max-width: 480px)').matches) {
        jQuery('ul.navbar').hide();
        jQuery('ul.navbar').before('<button class="ham_burg_menu"><img src="img/ham.png" /></button>');
        console.log('This is Mobile');
    } else {
        jQuery('ul.navbar').show();
        jQuery('.ham_burg_menu').remove();
        console.log('This is not Mobile');
    }

};

function validateForm() {
  var x = document.forms["myForm"]["name"].value;
  if (x == "" || x == null) {
    alert("Name must be filled out");
    return false;
  }
}

function contact_us_accordion() {
    console.log('Accrodion Scripts');
    jQuery('.accordion_section').find('p').hide();
    jQuery('.accordion_section > div:first-child').find('p').slideDown();
}



jQuery(document).on('click', '.accordion_section h3', function(){
    jQuery(this).parent('div').find('p').slideToggle();
});

