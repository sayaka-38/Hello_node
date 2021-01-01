// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   time-server.js                                     :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: skihara <skihara@student.42tokyo.j>        +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2020/12/30 15:51:18 by skihara           #+#    #+#             //
//   Updated: 2020/12/31 19:50:44 by skihara          ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

const http = require('http');
const url = require('url');
const host = "127.0.0.1";

if (process.argv.length != 3)
{
	console.log("You have entered an incorrect argument.");
	process.exit(-1);
}

const server = http.createServer((req, res) => {
	res.on('error', (err) => {
		console.log(err.message);
	});

	let urlInfo = url.parse(req.url);
	if (req.method === "GET") {
		switch (urlInfo.pathname) {
			case "/api/parsetime":
				res.writeHead(200, { 'Content-Type': 'text/json' });
				res.end(checkQuery(req, "parse"));
				break;
			case "/api/unixtime":
				res.writeHead(200, { 'Content-Type': 'text/json' });
				res.end(checkQuery(req, "unix"));
				break;
			default:
				res.writeHead(404, { 'Content-Type': 'text/plain' });
				res.end("404 Not Found.\n");
				break;
		}
	}
}).on('error', (err) => {
	console.log(err.message);
});

const port = parseInt(process.argv[2]);
try {
	server.listen(port, host);
} catch (err) {
	console.log("port error :", err.message);
}

function checkQuery(req, timeType){
	let queryParse = url.parse(req.url, true);
	let queryInfo = queryParse.query;
	let ans = "";
	if (!queryParse)
		return "";
	switch (Object.keys(queryInfo)[0]) {
		case "iso":
			ans = timeShape(timeType, queryInfo);
			break;
		default:
			break;
	}
	return ans;
}

function timeShape(timeType, queryInfo){
	let ans = "";
	switch (timeType) {
		case "parse":
			let time = new Date(Object.values(queryInfo)[0]);
			ans = {
				"hour": time.getUTCHours(),
				"minute": time.getMinutes(),
				"second": time.getSeconds()};
			try {
				return JSON.stringify(ans) + "\n";
			} catch (err) {
				console.log(err.message);
			}
			break;
		case "unix":
			ans = JSON.stringify({
				"unixtime": new Date(Object.values(queryInfo)[0]).getTime()}) + "\n";
			break;
		default:
			break;
	}
	return ans;
}
