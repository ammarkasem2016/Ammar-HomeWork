// 1

function argument(a, b, c) {
	return a + b + c;
}
console.log(argument(1, 2, 3));

// 2

function colorCar(color) {
	console.log("a " + color + " car");
}
colorCar("black");

// 3

let myObj = {
	name : 'Ammar',
	mobile : '0646677309',
	birthDay : '06-09-1985'
}
function printMyObj(obj){
	for(key in obj){
		console.log(key + ' : ' +  obj[key]);
	}
}
printMyObj(myObj);

// 4

function vehicleType(color , code){
	if(code === 1) {
		console.log("a " + color + " car");
	}
	else if(code === 2) {
		console.log("a " + color + " motorBike");
    }
	else console.log('unValid code');
}
vehicleType("red", 1);
vehicleType("red", 2);
vehicleType("red", 3);

// 5

if (3 === 3) {
	console.log("true")
}
else console.log("false")
console.log(3 === 4 ? true : false);

// 6

function vehicle(color , code , age) {
	let vehicle_type = ' ';
	if(code === 0) {
		vehicle_type = "BMW";
	}
	else if(code === 1) {
		vehicle_type = "mercedes";
	}
	let vehicle_age = ' ';
	if(age === 1) {
		vehicle_age = "not used";
	}
	else if(age > 1 && age < 7) {
		vehicle_age = "have new";
	}
	else vehicle_age = "used";
	console.log("a " + color + " " + vehicle_age + " " + vehicle_type);
}
vehicle("black", 0, 7);
vehicle("blue", 0, 3);
vehicle("red", 1, 1);
vehicle("pink", 1, 5);
vehicle("green", 1, 7);

// 7

let vehicles = ["bike", "motorBike", "airPlane", "caravan", "car"];

// 8

console.log(vehicles[2]);

// 9

function vehicle1(color , code , age){
	let vehicle_type = ' ';
	if(code < vehicles.length) {
		vehicle_type = vehicles[code];
	}
	let vehicle_age = ' ';
	if(age == 0) {
		vehicle_age = "not used";
	}
	else if(age > 0 && age < 7) {
		vehicle_age = "new";
	}
	else vehicle_age = "used";
	console.log("a " + color + " " +  vehicle_age + " " + vehicle_type);
}
vehicle1("black", 3, 7);
vehicle1("pink", 1, 1);
vehicle1("green", 4, 0);
vehicle1("silver", 2, 3);

// 10

function vehicleAdvertisement() {
	let adv = "Amazing Joe's Garage, we service ";
	for(let i=0;i< vehicles.length;i++)
	adv += vehicles[i] + ', ';
	adv += " . ";
	console.log(adv)
}
vehicleAdvertisement();

// 11

//or unshift
vehicles.push("bulldozer");
vehicleAdvertisement();

// 12

let newObj = {};

// 13

function newObj1(obj) {
	let new1 = 1;
	for(let key in obj){
		new1++;
	}
	return new1;
}	
function newObj2(obj1 , obj2){
	for(let key in obj1){
		if(!obj1.hasOwnProperty(key))
			return false;
	}
	return true;
}
function allObj(obj1 , obj2 , example){
	for(let key in obj1){
		if(typeof obj1[key] !== 'object' && typeof obj2[key] !== 'object')
		{
			if(is_strict)
			{
				if(obj1[key] !== obj2[key])
					return false;
			}
			else{
				if(obj1[key] !== obj2[key])
					return false;
			}
		}
		else if(typeof obj1[key] === 'object' && typeof obj2[key] === 'object')
		{
			if(!objEqual(obj1[key] , obj2[key])) 
				return false;
		}
		else
			return false;
	}
	return true;
}
function objEqual(obj1 , obj2 , example=false){
	if(newObj1(obj1) !== newObj2(obj2))
		return false;
	if(!doubleObj(obj1 , obj2))
		return false;
	if(!allObj(obj1 , obj2 , example))
	return false;
	return true;
}
var obj1 = {
	a: 1, 
	b: 'This 1B', 
	c: { 
		foo: 'This 1Foo', 
		bar: [1,2,3,4]
	}
}
var obj2 = {
	a: '1', 
	b: 'This 2B', 
	c: { 
		foo: 'This 2Foo', 
		bar: [1,2,3,4]
	}
}
console.log(objEqual(obj1 , obj2));
console.log(objEqual(obj1 , obj2 , true));


// 14

function foo(func) {
	func();
}
function bar() {
	console.log('Hello, I am bar!');
}
foo(bar);

// 15

var x = [1,2,3];
var y = ['1',2,3];
var z = y;
console.log(x === y);
console.log(objEqual(x , y));
console.log(objEqual(x , y , true));
function arr1(a, b , is_strict=false) {
    if (a.length != b.length) 
		return false;
    for (i=0;i<a.length;i++) {
		if(is_strict){
			if (a[i] !== b[i]) 
				return false;
		}
		else{
			if (a[i] !== b[i]) 
				return false;
		}
    }
    return true;
}
console.log(arr1(x , y));
console.log(arr1(y , z));
console.log(arr1(x , y , true));
console.log(arr1(y , z , true));

// 16

var o1 = { foo: 'bar' };
var o2 = { foo: 'bar1' };
var o3 = o1;
o1.foo = 'bar2';
o1 = o2;
console.log(o1);
console.log(o3);
console.log(o2); 

// 17

let bar2 = 42;  
console.log(typeof(typeof bar2));

// End
