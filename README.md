# SailLibre, the sailor's toolkit

This mobile app meant to be the best friend for any sailor !

It's in early development stage and only converts distances for the moment.

## Technologies

It's written with NativeScript and Vue.js using [nativescript-vue](https://github.com/rigor789/nativescript-vue).

## License

This app is free software under the [GPLv3 license](https://www.gnu.org/licenses/gpl.html), copyright (c) 2018 <caragk@medlibre.fr>.

## Setting the development environment

Install Node.js, Vue.js and NativeScript.

``` bash
# Install dependencies
npm install

# Build for production
npm run build
npm run build:<platform>

# Build, watch for changes and debug the application
npm run debug
npm run debug:<platform>

# Build, watch for changes and run the application
npm run watch
npm run watch:<platform>

# Clean the NativeScript application instance (i.e. rm -rf dist)
npm run clean
```

> When invoking the various npm scripts, omitting the platform will attempt to launch `tns` for both platforms, which will only work in a properly configured OSX environment.
