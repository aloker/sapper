const fs = require('fs');
const path = require('path');
const cwd = process.cwd();

export function get(req, res, next) {

	const { slug } = req.params;
	const image = path.join(cwd, `/content/${slug}.pdf`);

	let s = fs.createReadStream(image);
	s.on('open', function () {
		res.writeHead(200, {'Content-Type': 'application/pdf'});
		s.pipe(res);
	});

}
