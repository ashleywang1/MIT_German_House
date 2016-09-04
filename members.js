window.onload = function() { init() };

var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1lqy9W2N2y7tbqt04-wJVrdz6cC1gkR3njkuiP2_bbLg/pubhtml';

function init() {
  Tabletop.init( { key: public_spreadsheet_url,
                   callback: showInfo,
                   simpleSheet: true } )
}

function showInfo(data, tabletop) {
  alert("Successfully processed!")
  console.log(data);
  var rows = "";
  $.each(data, function(){
      rows += "<tr><td><img src=\"" + this.Picture + "\" style=\"height: 150px\"></td></tr>";
  });

  $( rows ).appendTo( "#memberTable tbody" );
}