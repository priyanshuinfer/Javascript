function User(email, password){
    this.email = email
    this.password = password



    Object.defineProperty(this, 'email',{
        get : function(){},
        set = function(value){}
    })
}