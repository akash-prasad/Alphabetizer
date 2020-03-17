var input = [ 'r','D','c','J','L','J','C','L','q','Q','k','u','Z','l','J','Y','Q','H','r','n','e','o','Y','q','Q','i','H','n','o','N','j','z','g','h','E','L','H','i','M','b','Z','O','S','Y','z','e','A','i','n','N','T','M','k','m','J','d','z','C','n','d','x','l','f','m','V','r','p','n','a','G','V','n','Y','E','y','D','f','F','S','K','x','j','w','h','Y','k','a','g','z','r','d','I','a','t','X','t','b','l','u','P','m','l','I','e','a','B','A','t','Q','A','m','o','U','S','x','G','Y','a','V','D','C','C','X','i','G','a','G','Z','m','R','D','v','m','W','O','H','y','C','P','b','M','B','c','T','H','f','m','Z','m','U','y','R','P','s','A','j','h','h','m','I','n','m','k','b','o','N','s','L','o','O','j','X','l','v','G','Q','E','t','q','H','l','k','C','P','S','z','Y','g','Z','X','s','d','R','w','D','x','I','w','D','E','H','M','I','r','Q','U','t','I','P','C','K','Q','g','a','d','H','s','T','f','e','E','G','D','i','c','x','a','s','W','O','F','s','G','A','a','I','a','K','v','k','n','S','q','K','L','i','o','n','O','a','L','h','x','F','g','G','r','x','j','y','x','t','v','y','Q','M','o','J','l','T','L','L','S','O','D','w','n','n','g','k','U','G','g','n','L','W','Y','r','x','i','s','q','b','R','g','F','v','h','J','p','x','e','Z','c','Z','N','R','Z','t','K','q','I','W','p','k','M','X','V','F','t','E','C','J','x','L','S','m','n','c','w','I','o','u','S','N','I','n','L','E','f','F','b','X','M','F','a','A','t','I','q','W','h','T','N','Y','V','g','L','J','U','m','U','V','R','G','n','B','u','x','f','A','B','g','u','G','p','I','n','R','R','Z','b','o','y','h','P','I','U','f','a','I','a','a','r','W','C','W','F','W','m','k','S','b','I','o','F','k','u','o','Z','s','U','t','k','L','u','H','v','G','H','z','R','f','I','l','M','M','G','W','U','l','l','r','C','d','h','F','S','O','N','e','o','h','b','J','V','h','p','Z','S','m','K','i','m','d','a','O','W','h','X','j','g','w','p','q','M','B','s','c','w','k','y','x','l','s','a','M','Y','B','M','A','f','s','H','t','x','H','f','J','T','v','F','F','U','D','E','g','e','k','p','t','N','e','L','l'];

var result = {
    'A':[],
    'B':[],
    'C':[],
    'D':[],
    'E':[],
    'F':[],
    'G':[],
    'H':[],
    'I':[],
    'J':[],
    'K':[],
    'L':[],
    'M':[],
    'N':[],
    'O':[],
    'P':[],
    'Q':[],
    'R':[],
    'S':[],
    'T':[],
    'U':[],
    'V':[],
    'W':[],
    'X':[],
    'Y':[],
    'Z':[],
};

input.forEach(function(elem) {
    if (Object.keys(result).includes(elem.toUpperCase())) {
        if ( elem == elem.toUpperCase()) {
            result[elem.toUpperCase()] = [elem].concat(result[elem.toUpperCase()]);
        } else {
            result[elem.toUpperCase()].push(elem);
        }
    }
});

var sorted = Object.keys(result).map(acc => {
    return result[acc];
});
console.log(result);
console.log(sorted);

let strResult = sorted.flatMap((item) => {
    return item.join(' ');
});
console.log(strResult.join(' '));
