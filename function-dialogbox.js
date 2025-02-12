var permission = confirm("Are willing to Enter Detalis")

Validate(permission)


function Validate(permission) {
    if(permission)
    {
        let name = prompt("Enter your name:")
        if(name)
        {
            let cnfrm = confirm("Are you Sure")
            if(cnfrm)
            {
                document.write("Welcome to the page:  ",name)
            }
            else
            {
                Validate(true)
            }
        }
        else
        {
            Validate(true)
        }
    }
    else
    {
        document.write("please accept the request")
    }
}