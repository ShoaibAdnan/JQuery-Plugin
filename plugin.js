/**
 * This is a simple jQuery plugin which modifies the visual properties of a list that is created here.
 * Does not require any installation. Just unzip the file and open up the html.
 * Modified page will already be in place. 
 */

let arr = ['Mountain Bikes', 'Road bikes', 'Hybrid/Commuter bikes', 'Folding bikes', 'Electric bikes', 'Touring bikes'];

/**
 * appends the items in the list 
 */
$.fn.listThis = function(listType) {
    let l =  $('<' + listType + '>');
  
  this.each(function(i, item) {
  	$(l).append($('<li>').append(item));
  });
 
 return l;
}

/**
 * added and modified the css for the list
 */
$.fn.colorMyList = function(options) {
	let settings = $.extend({
  	color: '#000',
    fontSize: '16px',
    textdecoration: 'underline'
  }, options);
  
  return this.css({
  	'color': settings.color,
    'font-size': settings.fontSize,
    'text-decoration': settings.textdecoration
  });
}

/**
 * edited the list with color and some text formatting
 */
$('#result').append($(arr).listThis('ul').colorMyList(
	{
	color: '#0000ff',
  fontSize: '20px',
  textDecoration: 'none'
	}
))
;
