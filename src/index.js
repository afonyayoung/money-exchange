// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var coins={};
    if (currency > 10000) {
        coins={error: "You are rich, my friend! We don't have so much coins for exchange"};
        return coins;
    } else {
        if (currency <=0) {
            return coins;
        } else {
            var h, q, d, n, p =0;
            h= Math.floor(currency / 50);
            q= Math.floor((currency%50)/25);
            d= Math.floor(((currency%50)%25)/10); 
            n= Math.floor((((currency%50)%25)%10)/5);
            p= Math.floor(((((currency%50)%25)%10)%5)/1);
            if (h>0) {
                coins.H=h;
            }
            if (q>0){
                coins.Q=q;
            }
            if (d>0){
                coins.D=d;
            }
            if (n>0){
                coins.N=n;
            }
            if (p>0) {
                coins.P=p;
            }
            return coins;
        }
    } 
}
