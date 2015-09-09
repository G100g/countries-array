(function() {
  'use strict';

  angular
      .module('countriesArrayApp')
      .service('languages', languages);

  function languages($http, $q, countries) {
    var data = {
      'jsa': {
        'code': 'jsa',
        'language': 'js',
        'name': 'Javascript Array',
        'template': 'js.hbs',
      },
      'jso': {
        'code': 'jso',
        'language': 'js',
        'name': 'Javascript Object',
        'template': 'jso.hbs',
      },
      'php': {
        'code': 'php',
        'language': 'php',
        'name': 'PHP Array',
        'template': 'php.hbs',
        escape: function (text) {
          return text.replace(/"/ig, '\\\"');
        }
      },
      'phpkv': {
        code: 'phpkv',
        language: 'php',
        name: 'PHP Array Key Value',
        template: 'phpkv.hbs',
        escape: function (text) {
          return text.replace(/"/ig, '\\\"');
        }
      },
      'py': {
        code: 'py',
        language: 'python',
        name: 'Array',
        template: 'py.hbs'
      }

    };

    this.getLanguages = getLanguages;
    this.renderLanguage = renderLanguage;

    function getLanguages() {
      return data;
    }

    function renderLanguage(code) {

      // USe handlebars to render language code

      var languageFile = data[code].template,
          escape = data[code].escape;

      Handlebars.registerHelper('escape', function(text) {
        // text = Handlebars.Utils.escapeExpression(text);
        // url  = Handlebars.Utils.escapeExpression(url);
        //
        // var result = '<a href="' + url + '">' + text + '</a>';

        var result;

        if (escape) {
          result = escape(text);
        } else {
          result = text.replace(/'/ig, '\\\'');
        }

        return new Handlebars.SafeString(result);
      });



      console.log(languageFile)

      // Load text filter
      var promise = loadTemplate(languageFile).then(function (source) {

        var data = {
          countries: countries.getCountries()
        };

        console.log('Loaded ' + languageFile);
        console.log();

        var template = Handlebars.compile(source);

        return template(data);

      });

      return promise;

    }

    function loadTemplate(languageFile) {

      var defer = $q.defer();

      $http.get('templates/languages/'+languageFile)
         .success(function(data) {
            //  angular.extend(_this, data);
             defer.resolve(data);
         })
         .error(function() {
             defer.reject('could not find file');
         });

      return defer.promise;

    }

  }

})();
