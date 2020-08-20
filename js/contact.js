

$(document).ready(function(){
    $('.submit').click(function(event){
        console.log('Clicked button');

        var email =$('.email').val()
        var phone =$('.phone').val()
        var message =$('.email').val()
        var statusElm =$('.status')
        statusElm.empty()


        if(name.length > 5 && email.includes('@')&& email.includes('.')){

        

if(email.length > 2){
                statusElm.append('<div>Email is valid </div>')

}else{
            event.preventDefault()

                statusElm.append('<div>Email is not valid</div>')

}
if(phone.length >= 20 ){

    statusElm-append('<div>Phone is valid </div>')
}else{
            event.preventDefault()

    statusElm.append('<div>Phone not is valid </div>')
}
if(message.length >= 10 ){

    statusElm-append('<div>Message is valid </div>')
}else{
            event.preventDefault()

    statusElm.append('<div>Message not is valid </div>')
}
 
    })
})
