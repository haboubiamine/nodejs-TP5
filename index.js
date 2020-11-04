const {perimeter,area} = require('./rectangle');

const Rect = ({
        longeur : 20,
        largeur : 10
});


const resultatper =  perimeter(Rect.longeur,Rect.largeur);
const resultatarea = area(Rect.longeur,Rect.largeur);
console.log(resultatper);
console.log(resultatarea);


//  npm run server     