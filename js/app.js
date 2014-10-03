var App = Ember.Application.create();

App.name = "Take a Break";

App.secondsOnPage = 180;

setInterval(function() {
  App.set('secondsOnPage', App.get('secondsOnPage') - 1);
}, 1000);
