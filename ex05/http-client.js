// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   http-client.js                                     :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: skihara <skihara@student.42tokyo.j>        +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2020/12/24 18:18:25 by skihara           #+#    #+#             //
//   Updated: 2020/12/28 11:18:32 by skihara          ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

var http = require('http');
var url = require('url');

if (process.argv.length > 2)
{
	if (url.parse(process.argv[2]).protocol != 'http:')
		return ;
	var req = http.get(process.argv[2], (res) =>
	{
		res.setEncoding('utf8');
		res.on('data', (chunk) =>
			{
				console.log(chunk);
			});
	});
	req.on('error', function(err)
	{
		console.log("Error: " + err.message);
	});
}

