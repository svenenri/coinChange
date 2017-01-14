function change(num, coinLegend){
	var coins = {}, total = 0, coinVal = 0, coinCount = 0

	for(key in coinLegend){
		coinCount = 0 // coinCount reset
		coinVal = coinLegend[key]

		while(num >= coinVal){
			total += coinVal
			num -= coinVal
			coinCount++
		}
		coins[key] = coinCount
	}
	return coins
}


var coinLegend = {"quarter": 25, "dime": 10, "nickel": 5, "penny": 1}
var num = 94

console.log(change(num, coinLegend))
