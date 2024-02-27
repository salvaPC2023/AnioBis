function Bisiesto(anio) {
    let res;
    if (anio%400 === 0){
        res = true;
    }else{
        if(anio%100 === 0){
            res = false;
        }else{
            if(anio%4 === 0){
                res = true;
            }else{
                res = false;
            }
        }
    }
    return res;
  }
  
  export default Bisiesto;