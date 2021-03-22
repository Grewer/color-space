/**
 * YUV https://en.wikipedia.org/?title=YUV
 *
 * @module  color-space/yuv
 */
'use strict'

var yuv = module.exports = {
	name: 'yuv',
	min: [0,-0.5,-0.5],
	max: [1, 0.5, 0.5],
	channel: ['Y','U','V'],
	alias: ['YUV', 'EBU'],

};

yuv.rgb = function(yuv) {
	var y = yuv[0],
		u = yuv[1],
		v = yuv[2],
		r, g, b;

	r = (y * 1) + (u *  0) + (v * 1.13983);
	g = (y * 1) + (u * -0.39465) + (v * -0.58060);
	b = (y * 1) + (u * 2.02311) + (v * 0);

	r = Math.min(Math.max(0, r), 1);
	g = Math.min(Math.max(0, g), 1);
	b = Math.min(Math.max(0, b), 1);

	return [r * 255, g * 255, b * 255];
}
