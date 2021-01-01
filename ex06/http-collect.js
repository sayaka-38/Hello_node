// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   http-client.js                                     :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: skihara <skihara@student.42tokyo.j>        +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2020/12/24 18:18:25 by skihara           #+#    #+#             //
//   Updated: 2020/12/29 15:34:02 by skihara          ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

var http = require('http');
var url = require('url');
var bl = require('bl');

if (process.argv.length < 3)
{
	console.log("Please enter a URL as argument.");
	process.exit(-1);
}

if (url.parse(process.argv[2]).protocol != 'http:')
{
	console.log("Please enter a URL with the protocol http.");
	process.exit(-1);
}

const req = http.get(process.argv[2], (res) => {
	res.pipe(bl((err, data) => {
		data = data.toString();
		console.log(data.length);
		console.log(data);
	}))
})

req.on('error', function(err)
{
	console.log(err.message);
})
