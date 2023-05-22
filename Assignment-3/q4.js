let day = prompt("Enter day's first two letter : ");

switch (day) {

    case 'Su':
    case 'su':
        
        document.write(" Sunday");
        break;

    case 'Mo':
    case 'mo':x 

        document.write(" Monday");
        break;

    case 'Tu':
    case 'tu':

        document.write(" Tuesday");
        break;

    case 'We':
    case 'we':

        document.write(" Wednesday");
        break;

    case 'Th':
    case 'th':

        document.write(" Thursday");
        break;

    case 'Fr':
    case 'fr':

        document.write(" Friday");
        break;

    case 'Sa':
    case 'sa':

        document.write(" Saturday");
        break;

    default:
        
        document.write(" Not valid");
}