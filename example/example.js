/**
 *  created by slashhuang 11.24
 * 仿照rxJS的官方写法
 */
let Rx = require('rx');
let $ = require('jquery');
const $input = $('#input');
const $results = $('#results');

/* Only get the value from each key up */
var keyups = Rx.Observable.fromEvent($input, 'keyup')
  .pluck('target', 'value')
  .filter(text => text.length > 2 );

/*debounce基本可以参考underscore的解释*/
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds.



/* throttle这里我直接给出解释*/
// Returns a function, that, when invoked, will only be triggered at most once
// during a given window of time. Normally, the throttled function will run
// as much as it can, without ever going more than once per `wait` duration;

/* Now debounce the input for 500ms */
var debounced = keyups.debounce(1000 /* ms */);

/* Now get only distinct values, so we eliminate the arrows and other control characters */
var distinct = debounced.distinctUntilChanged();


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






