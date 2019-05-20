function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}


$(document).ready(function() {
   let messageCode = readCookie('warningMessage');

    //Sign In Error
    if(messageCode === '1'){
        $('.errorMessage').collapse('show');
        setTimeout(function() { $('.errorMessage').collapse('hide'); }, 3000);
    } 
    //Worker Sign Up Error
    else if(messageCode === '2'){
        $('#nav-profile').attr('class','tab-pane fade show active');
        $('#nav-home-tab').attr('class','nav-item nav-link');
        $('#nav-profile-tab').attr('class','nav-item nav-link active');      
        $('.errorMessage').collapse('show');
        setTimeout(function() { $('.errorMessage').collapse('hide'); }, 5000);
    } 
    //Customer Sign Up Error
    else if(messageCode === '3'){
        $('#nav-home').attr('class','tab-pane fade show active');
        $('#nav-home-tab').attr('class','active nav-item nav-link');
        $('#nav-profile-tab').attr('class','nav-item nav-link');
        $('.errorMessage').collapse('show');
        setTimeout(function() { $('.errorMessage').collapse('hide'); }, 5000);
    } 
    //No Error
    else{
        $('#nav-home').attr('class','tab-pane fade show active');
        $('#nav-home-tab').attr('class','active nav-item nav-link');
    }
});

//});
