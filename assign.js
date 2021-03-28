var kiosk={
    set getFruits(fruit ){
        this.fruit=this.fruit+ fruit;
    },
    fruit:["mango","banana","tomato "]
}
kiosk.getFruits="orange";
console.log(kiosk.fruit);