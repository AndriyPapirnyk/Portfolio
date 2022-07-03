let sp = 500;
$('#menu').hide();
$('#about').hide();
$('#projects').hide();
$('#skills').hide();
$('#contact').hide();
$('#btn_open').click(function(){
$('#menu').slideDown(600);
});
$('#back_img').click(function(){
    $('#menu').fadeOut(sp);
});
$('#about_menu').click(function(){
    $('#menu').hide();
    $('#start').hide();
    $('#about').fadeIn(sp);
});
$('#projects_menu').click(function(){
    $('#projects').fadeIn(sp);
    $('#menu').hide();
    $('#start').hide();
});
$('#skills_menu').click(function(){
    $('#skills').fadeIn(sp);
    $('#menu').hide();
    $('#start').hide();});
$('#contact_menu').click(function(){
    $('#contact').fadeIn(sp);
    $('#menu').hide();
    $('#start').hide();
});
menu_btn.onmouseenter = function() {
r1.style.width = '100%';
r2.style.width = '100%';
};
menu_btn.onmouseleave = function() {
    r1.style.width = '50%';
    r2.style.width = '70%';
};
menu_btn2.onmouseenter = function() {
    r3.style.width = '100%';
    r4.style.width = '100%';
    };
    menu_btn2.onmouseleave = function() {
        r3.style.width = '50%';
        r4.style.width = '70%';
    };
    menu_btn3.onmouseenter = function() {
        r5.style.width = '100%';
        r6.style.width = '100%';
        };
        menu_btn3.onmouseleave = function() {
            r5.style.width = '50%';
            r6.style.width = '70%';
        };
        menu_btn4.onmouseenter = function() {
            r7.style.width = '100%';
            r8.style.width = '100%';
            };
            menu_btn4.onmouseleave = function() {
                r7.style.width = '50%';
                r8.style.width = '70%';
            };
$('#menu_btn').click(function(){
     $('#menu').show();
     $('#start').fadeIn(sp);
    $('#about').fadeOut(10);
});
$('#menu_btn2').click(function(){
    $('#menu').show();
    $('#start').fadeIn(sp);
    $('#projects').fadeOut(10);
});
$('#menu_btn3').click(function(){
    $('#menu').show();
    $('#start').fadeIn(sp);
    $('#skills').fadeOut(10);
});
$('#menu_btn4').click(function(){
    $('#menu').show();
    $('#start').fadeIn(sp);
    $('#contact').fadeOut(10);
});
$('#btn_open2').click(function(){
    $('#projects').fadeIn(sp);
    $('#about').fadeOut(10);
});
$('#projects2').hide();
$('#btn_open3').click(function(){
    $('#projects2').show(0);
    document.getElementById('projects2');
    projects2.scrollIntoView({behavior: "smooth", inline: "end"});
    ft.style.display = 'flex';
    pr2_place.style.display = 'flex';
});
pr1.onmouseenter = function() {
    pr1_look.style.height = '180px';
    pr1_look.style.borderBottomLeftRadius = '0px';
    pr1_look.style.borderBottomRightRadius = '0px';
};
pr1.onmouseleave = function() {
    pr1_look.style.height = '600px';
    pr1_look.style.borderBottomLeftRadius = '20px';
    pr1_look.style.borderBottomRightRadius = '20px';
};
pr2.onmouseenter = function() {
    pr2_look.style.height = '180px';
    pr2_look.style.borderBottomLeftRadius = '0px';
    pr2_look.style.borderBottomRightRadius = '0px';
};
pr2.onmouseleave = function() {
    pr2_look.style.height = '600px';
    pr2_look.style.borderBottomLeftRadius = '20px';
    pr2_look.style.borderBottomRightRadius = '20px';
};
pr3.onmouseenter = function() {
    pr3_look.style.height = '180px';
    pr3_look.style.borderBottomLeftRadius = '0px';
    pr3_look.style.borderBottomRightRadius = '0px';
};
pr3.onmouseleave = function() {
    pr3_look.style.height = '600px';
    pr3_look.style.borderBottomLeftRadius = '20px';
    pr3_look.style.borderBottomRightRadius = '20px';
};
pr4.onmouseenter = function() {
    pr4_look.style.height = '180px';
    pr4_look.style.borderBottomLeftRadius = '0px';
    pr4_look.style.borderBottomRightRadius = '0px';
};
pr4.onmouseleave = function() {
    pr4_look.style.height = '600px';
    pr4_look.style.borderBottomLeftRadius = '20px';
    pr4_look.style.borderBottomRightRadius = '20px';
};
pr5.onmouseenter = function() {
    pr5_look.style.height = '180px';
    pr5_look.style.borderBottomLeftRadius = '0px';
    pr5_look.style.borderBottomRightRadius = '0px';
};
pr5.onmouseleave = function() {
    pr5_look.style.height = '600px';
    pr5_look.style.borderBottomLeftRadius = '20px';
    pr5_look.style.borderBottomRightRadius = '20px';
};
pr6.onmouseenter = function() {
    pr6_look.style.height = '180px';
    pr6_look.style.borderBottomLeftRadius = '0px';
    pr6_look.style.borderBottomRightRadius = '0px';
};
pr6.onmouseleave = function() {
    pr6_look.style.height = '600px';
    pr6_look.style.borderBottomLeftRadius = '20px';
    pr6_look.style.borderBottomRightRadius = '20px';
};
btn_send.onclick = function() {
if(in1.value === '' || in2.value === '' || in3.value === '') {
alert('Not all information typed');
} else {
    alert('Sent successfully')
}
};





