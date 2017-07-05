var goods = {
	"234560" : {
		"name" : "Banana",
		"cost" : 30,
		"img" : "https://cdn3.iconfinder.com/data/icons/veggies/128/bananas.png",
		"stock" : "yes"

	},
	"234561" : {
		"name" : "Tomato",
		"cost" : 40,
		"img" : "https://cdn0.iconfinder.com/data/icons/fruits/128/Tomato.png",
		"stock" : "yes"
    },
    "234562" : {
		"name" : "Peach",
		"cost" : 60,
		"img" : "https://cdn0.iconfinder.com/data/icons/fruits/128/Peach.png",
		"stock" : "no"
    },
    "234563" : {
		"name" : "Strawberry",
		"cost" : 70,
		"img" : "https://cdn0.iconfinder.com/data/icons/fruits/128/Strawberry.png",
		"stock" : "yes"
    }
};

//Goods iteration

var store = "";
for (var key in goods) {
    store += "Name: "+ goods[key].name + "<br>";
    store += "Cost: "+ goods[key].cost + "<br>";
    store += "Stock: "+ goods[key].stock + "<br>";
    store += '<img src="' + goods[key].img+'">';
    store += "<hr>";
}

document.getElementById('store').innerHTML = store;