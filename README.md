# Omegaweb Design

[![Build Status](https://travis-ci.com/vevcom/design.svg?branch=master)](https://travis-ci.com/vevcom/design)

Design guidelines and component libraries for the Omegaweb

## Getting Started

### Prerequisites

You'll need [Node.js + npm](https://nodejs.org/en/), a good code editor ([VSCode](https://code.visualstudio.com/) or [Atom](https://atom.io/)) and a nice browser ([Google Chrome](https://www.google.com/chrome/) or [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/)).

### Developing

Start the local development server with
```bash
$ npm run dev
```
This will also open the demo page at [http://localhost:1234] in your browser. The webpage will update automatically as you make changes to the source code.

The source for the actual design system is located in `src` while the demo that is shown in your browser (just a Vue app that uses the design system) is located in `demo`.

### Testing

To run the tests on your changes, use
```bash
$ npm test
```
This will perform static tests of the source code for both design system and demo (check for coding style errors).

To automatically fix coding style errors, use
```bash
$ npm run styling
```

## License
This project is licensed under the MIT license - see [LICENSE file](LICENSE) for details.
