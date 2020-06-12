var assert = require('assert');
const nock = require('nock');
const isImage = require('./index');

describe('isImage', () => {
	describe('Loads image', () => {
		before(() => {
			nock('https://image.test')
				.head('/photo.png')
				.reply(200, null, { 'content-type': 'image/png' });
		});
		it('identifies image', async () => {
			const result = await isImage('https://image.test/photo.png');
			assert(result, 'isImage === true');
		});
	});
	describe('Rejects non-image', () => {
		before(() => {
			nock('https://image.test')
				.head('/not-photo.png')
				.reply(200, null, { 'content-type': 'text/html' });
		});
		it('identifies image', async () => {
			const result = await isImage('https://image.test/not-photo.png');
			assert(result, 'isImage === true');
		});
	});
});
