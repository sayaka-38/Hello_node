// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   time-server.js                                     :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: skihara <skihara@student.42tokyo.j>        +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2020/12/30 15:51:18 by skihara           #+#    #+#             //
//   Updated: 2020/12/30 17:59:36 by skihara          ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

const net = require('net');

if (process.argv.length != 3)
{
	console.log("You have entered an incorrect argument.");
	process.exit(-1);
}

const server = net.createServer((c) => {
	c.on('data', () => {
		let date = new Date();
		let date2 = date.getFullYear() + "-" +
			("0" + (date.getMonth() + 1)).slice(-2) + "-" +
			("0" + (date.getDate())).slice(-2) + " " +
			("0" + (date.getHours())).slice(-2) + ":" +
			("0" + (date.getMinutes())).slice(-2) + "\n";
		c.write(date2);
		c.end();
	});
	c.on('error', (err) => {
		console.log(err.message);
	});
});

server.on('error', (err) => {
	console.log(err.message);
});

const port = parseInt(process.argv[2]);
try {
	server.listen(port);
} catch (err) {
	console.log("port error :", err.message);
}
