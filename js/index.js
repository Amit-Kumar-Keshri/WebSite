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
        console.log('This is Mobile');
        jQuery('ul.navbar').before('<button class="ham_burg_menu"><img src="img/ham.png"/></button>');
    } else {
        jQuery('ul.navbar').show();
        jQuery('.ham_burg_menu').remove();
        console.log('This is not Mobile');
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


jQuery(document).on('click','.contact_submit', function(event){
    event.preventDefault();
    console.log("preventing from form submission");
    var flag = true;
    var name = jQuery('#name').val();
    var email = jQuery('#email').val();
    var phone = jQuery('#phone').val();

    jQuery(".error").remove();
    if(name.length==0 || email.length==0|| phone.length==0){
    }
    if(name.length < 2){
        // alert("enter the valid number");
        jQuery('#name').after('<span class="error">This field is required</span>');
        flag = false
    }
    if(email.length < 2){
        jQuery('#email').after('<span class="error">This field is required</span>');
        flag = false
    } else{
        var regex_email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        var validEmail = regex_email.test(email);
        if(!validEmail){
            jQuery('#email').after('<span class="error">Enter a valid email</span>');
            flag = false
        }
    }
    if (phone.length!=10){
        jQuery('#phone').after('<span class="error">This field is required</span>');
        flag = false
    } else {
        var regex_phone =  /^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/;
        var valid_phone = regex_phone.test(phone);
        if(!valid_phone){
            jQuery('#phone').after('<span class="error">Enter a valid phone number</span>');
            flag = false
        }
    }
    if (flag){
        jQuery('form').submit();
    }
});
