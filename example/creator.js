/**
 * created by slashhuang 11.24
 * 通过rxJS的Rx.Observable.create来处理observer
 */
let Rx = require('rx');
let $ = require('jquery');
const $input = $('#input');
const $results = $('#create');
let Creator= Rx.Observable.create((observer)=>{
    $.ajax({
      url: 'https://en.wikipedia.org/w/api.php',
      dataType: 'jsonp',
      data: {
        action: 'opensearch',
        format: 'json',
        search: 'hello'
      }
    }).promise().then((data)=>observer.next(data));
});
Creator.subscribe(
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






