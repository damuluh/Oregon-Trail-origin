class Wagon{
    constructor (capacity){

    this.capacity = capacity
    this.passengers = []

    }
    
    getAvailableSeatCount(){
        return this.capacity-this.passengers.length 
        console.log(getAvailableSeatCount)
    }
    join(traveler){
        if (this.getAvailableSeatCount() >=1){
            this.passengers.push(traveler)
        }
    }
   
     shouldQuarantine(){

  let sickPeople = this.passengers.filter(passengerStatus => passengerStatus.isHealthy == false) 
    if (sickPeople.length === 0 ) {
     return false
    }else{
        return true
    }}

  totalFood(){
      let tatalAmountOfFood = 0
      for(let passg = 0; passg < this.passengers.length; passg++){
        tatalAmountOfFood += this.passengers[passg].food
        
    }
    console.log(tatalAmountOfFood)
    return  tatalAmountOfFood
        
    }
    
    
}
