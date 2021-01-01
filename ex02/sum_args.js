// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   sum_args.js                                        :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: skihara <skihara@student.42tokyo.j>        +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2020/12/24 15:38:04 by skihara           #+#    #+#             //
//   Updated: 2020/12/28 21:34:50 by skihara          ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

var ans;
var i;

i = 2;
ans = 0;
if (process.argv.length > 2)
{
	while (i < process.argv.length)
		ans += parseInt(process.argv[i++], 10);
	console.log(ans);
}
