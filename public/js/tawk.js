(function(global){
    global.$_Tawk_AccountKey='6504e6afb1aaa13b7a771d8f';
    global.$_Tawk_WidgetId='1hadia8fa';
    global.$_Tawk_Unstable=false;
    global.$_Tawk = global.$_Tawk || {};
    (function (w){
        function l() {
            if (window.$_Tawk.init !== undefined) {
                return;
            }

            window.$_Tawk.init = true;

            const files = [
                '/js/twk/main.js',
                '/js/twk/vendor.js',
                '/js/twk/chunk-vendors.js',
                '/js/twk/chunk-common.js',
                '/js/twk/runtime.js',
                '/js/twk/app.js'
            ];

            if (typeof Promise === 'undefined') {
                files.unshift('/js/twk/polyfills/promise.js');
            }

            if (typeof Symbol === 'undefined' || typeof Symbol.iterator === 'undefined') {
                files.unshift('/js/twk/polyfills/iterator.js');
            }

            if (typeof Object.entries === 'undefined') {
                files.unshift('/js/twk/polyfills/entries.js');
            }

            if (!window.crypto) {
                window.crypto = window.msCrypto;
            }

            if (typeof Event !== 'function') {
                files.unshift('/js/twk/polyfills/event.js');
            }

            if (!Object.values) {
                files.unshift('/js/twk/polyfills/object-values.js');
            }

            if (typeof Array.prototype.find === 'undefined') {
                files.unshift('/js/twk/polyfills/twk-arr-find.js');
            }

            const s0 = document.getElementsByTagName('script')[0];

            for (let i = 0; i < files.length; i++) {
                const s1 = document.createElement('script');
                s1.src= files[i];
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
            }
        }
        if (document.readyState === 'complete') {
            l();
        } else if (w.attachEvent) {
            w.attachEvent('onload', l);
        } else {
            w.addEventListener('load', l, false);
        }
    })(window);

})(window);
