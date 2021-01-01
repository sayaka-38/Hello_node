// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   vars.js                                            :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: skihara <skihara@student.42tokyo.j>        +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2020/12/24 14:54:45 by skihara           #+#    #+#             //
//   Updated: 2020/12/24 15:35:48 by skihara          ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

var str = "42";
var num = 42;
var obj = [42];
var obj2 = {name: "object", type: "Object"};
var bool = true;
var undef = undefined;

console.log("%d is a %s.", str, typeof str);
console.log(num + " is a " + typeof num + ".");
console.log("%d is an %s.", obj, typeof obj);
console.log(obj2 + " is an " + typeof obj2 + ".");
console.log("%s is a %s.", bool, typeof bool);
console.log(undef + " is an " + typeof undef + ".");
