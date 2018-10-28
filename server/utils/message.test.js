const expect = require("expect");

var { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'Dizy';
        var text = 'Hello DJ';
        var message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({ from, text });

    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'Jay';
        var latitude = 25;
        var longitude = 50;
        var url = 'https://www.google.com/maps/?q=25,50';
        var message = generateLocationMessage(from, latitude, longitude);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({ from, url });
    });
});