/**
 *  created by slashhuang 11.24
 */
let Rx = require('rx');
let $ = require('jquery');
const $input = $('#input');
const $results = $('#results');

/* Only get the value from each key up */
var keyups = Rx.Observable.fromEvent($input, 'keyup')
  .pluck('target', 'value')
  .filter(text => text.length > 2 );

/* Now debounce the input for 500ms */
var debounced = keyups
  .debounce(500 /* ms */);

/* Now get only distinct values, so we eliminate the arrows and other control characters */
var distinct = debounced
  .distinctUntilChanged();


function searchWikipedia (term) {
  return $.ajax({
    url: 'https://en.wikipedia.org/w/api.php',
    dataType: 'jsonp',
    data: {
      action: 'opensearch',
      format: 'json',
      search: term
    }
  }).promise();
};

let suggestions = distinct.flatMapLatest(searchWikipedia);
suggestions.subscribe(
  data => {
    $results
      .empty()
      .append($.map(data[1], value =>  $('<li>').text(value)))
  },
  error => {
    $results
      .empty()
      .append($('<li>'))
        .text('Error:' + error);
});






