function Bisiesto(anio) {
    let res;
    if (anio%400 === 0){
        res = true;
    }else{
        res = false
    }
    return res;
  }
  
  export default Bisiesto;