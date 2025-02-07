var permission = confirm("Are willing to Enter Detalis")

Validate(permission)


function Validate(permission) {
    if(permission)
    {
        let name = prompt("Enter your name:")
        let cnfrm = confirm("Are you Sure")
        if(cnfrm)
        {
            document.write("Welcome to the page:  ",name)
        }
        else
        {
            Validate()
        }
    }
    else
    {
        document.write("please accept the request")
    }
}