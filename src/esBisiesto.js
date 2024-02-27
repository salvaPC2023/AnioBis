function Bisiesto(anio) {
    let res;
    if (anio%400 === 0){
        res = true;
    }else{
        if(anio%100 === 0){
            res = false;
        }else{
            res = false;
        }
    }
    return res;
  }
  
  export default Bisiesto;