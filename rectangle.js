const perimeter = (Longueur , largeur) => {
  const  per =  (Longueur + largeur) * 2;
  return per ;
}
const area = (Longueur , largeur) => {
    const  are =  Longueur * largeur ;
    return are ;
  }



  module.exports.perimeter = perimeter;
  module.exports.area = area;