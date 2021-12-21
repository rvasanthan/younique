This app built using Webpack as a compiler, and [Laravel Mix](https://laravel.com/docs/6.x/mix)

[Documentation](https://hussam3bd.gitbook.io/sham) - [Demo](https://sham.hussam3bd.com) 

----
First you need to install the dependencies with following

```
npm install
```

then you can run 
```
// Run all Mix tasks...
npm run dev

// Run all Mix tasks and minify output...
npm run production
```

### Watching Assets For Changes
The ``npm run watch`` command will continue running in your terminal and watch all relevant files for changes.
Webpack will then automatically recompile your assets when it detects a change:

```
npm run watch
```

## Adding the Front-end to a Laravel.
Since we are using the Laravel Mix and Webpack as Laravel it is easy to move the front-end to your Laravel.
all you need to do just to copy the content of ``webpack.mix.js`` file to your Laravel ``webpack.mix.js``.

* But keep in mind that you need to delete the following lines in your Laravel app.
```
mix.setPublicPath('dist')
    .setResourceRoot('dist/');
```

* And consider taking the content of ``package.json`` as will.

* Also you need to copy the ``assets`` folder to your Laravel app to the following path:
``resources/assets``

And you are are ready to go 💃.