function Bisiesto(anio) {
    if (anio%400 === 0){
        return true;
    }
    return false;
  }
  
  export default Bisiesto;