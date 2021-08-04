let role="guest";

switch(role){
case "guest":
console.log("guest user")
break;

case"moderator":
console.log("moderator");
break;

default:
    console.log("unknown user");

}

//calculator using switch case

let number = 0;
let a = 4;
let b =8;
switch(number)
{
    case 0:
        console.log("sum is",a+b);
        break;

        case 1:
            console.log("subtract is",a-b);
            break;

            case 2:
                console.log("multiply is",a*b);
                break;

                   case 3:
                console.log("division  is",a/b);
                break;

                default:
                    console.log("wrong operation")

}
