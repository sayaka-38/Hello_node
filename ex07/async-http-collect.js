// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   http-client.js                                     :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: skihara <skihara@student.42tokyo.j>        +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2020/12/24 18:18:25 by skihara           #+#    #+#             //
//   Updated: 2020/12/29 19:02:45 by skihara          ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

const http = require('http');
const url = require('url');

if (process.argv.length !== 5)
{
	console.log("Please enter only three URLs.");
	process.exit(-1);
}

if (url.parse(process.argv[2]).protocol != 'http:' ||
	url.parse(process.argv[3]).protocol != 'http:' ||
	url.parse(process.argv[4]).protocol != 'http:')
{
	console.log("Please enter a URL with the protocol http.");
	process.exit(-1);
}

let array = [];
let i = 2;
while (i < 5)
	array.push(getHttpData(process.argv[i++]));
Promise.all(array).then((output) => {
	let i = 0;
	while (i < output.length)
		console.log(output[i++].toString());
}).catch((err) => {
	console.error(err.message);
});

function getHttpData(url) {
	return new Promise((resolve, reject) => {
		let data = '';
		try {
			http.get(url, (res) => {
				res.on('data', (chunk) => {
					data += chunk;
				});
				res.on('end', () => {
					resolve(data);
				});
				res.on('error', (err) => {
					reject(err);
				});
			}).on('error', (err) => {
				reject(err);
			});
		} catch (error) {
			reject(err);
		}
	});
}
