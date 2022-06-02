const classmates = [
	{
		name: "철수",
		age: 8,
		school: "다람쥐초등학교"
	},
	{
		name: "영희",
		age: 8,
		school: "토끼초등학교"
	},
	{
		name: "짱구",
		age: 8,
		school: "다람쥐초등학교"
	}
];

console.log(classmates)


for(let i=0; i<classmates.length; i++){
	if(classmates[i].name === "영희"){
		classmates[i].school = "다람쥐초등학교"
	}
}



console.log(classmates)
