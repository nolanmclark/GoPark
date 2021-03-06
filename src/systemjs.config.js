/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function(global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm:': 'node_modules/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: 'app',

            'ng2-sidebar': 'npm:ng2-sidebar',

            // angular bundles
            '@angular': 'node_modules/@angular',
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

            // other libraries
            'rxjs': 'npm:rxjs',
            'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
            'angular2-jwt': 'npm:angular2-jwt/angular2-jwt.js',
            'hammerjs'                  : 'node_modules/hammerjs',
            'mousetrap'                 : 'node_modules/mousetrap'
            'angular-modal-gallery'     : 'node_modules/angular-modal-gallery/dist/bundles',
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            },
            'angular2-jwt': {
                defaultExtension: 'js'
            },
            'hammerjs'                  : { main: 'hammer.js' },
            'mousetrap'                 : { main: 'mousetrap.js' },
            'angular-modal-gallery'     : { main: 'angular-modal-gallery.umd.js' }
        }
    });
})(this);
