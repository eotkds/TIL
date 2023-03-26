var elem = null;

var value = elem.value // TypeError: Cannot read property 'value' of null

//elem이 null이나 undefined와 같은 falsy값이면 elem으로 평가 되고
//elem이 truthy값이면 elem.value로 평가된다.
var value = elem && elem.value;