// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   io.js                                              :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: skihara <skihara@student.42tokyo.j>        +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2020/12/24 16:14:42 by skihara           #+#    #+#             //
//   Updated: 2020/12/28 22:20:44 by skihara          ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

const fs = require('fs');
var n;
var i;
var text = '';

i = 0;
n = 0;
if (process.argv.length > 2)
{
	fs.readFile(process.argv[2], 'utf-8', (err, text) =>
	{
		if (text) {
			while (i < text.length)
			{
				if (text[i] == '\n' || text[i] == '\r')
					n++;
				i++;
			}
			console.log(n.toString());
		} else {
			console.log(err.message);
		}
	});
}
