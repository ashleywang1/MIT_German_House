window.onload = function() { init() };

var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1lqy9W2N2y7tbqt04-wJVrdz6cC1gkR3njkuiP2_bbLg/pubhtml';

function init() {
  Tabletop.init( { key: public_spreadsheet_url,
                   callback: showInfo,
                   simpleSheet: true } )
}

function showInfo(data, tabletop) {
  var rows = "";
  $.each(data, function(){
      rows += "<tr><td align=\"center\" width=\"50%\"><img src=\"" + this.Picture + 
      "\" style=\"height: 200px\"><br><b>" + this.Name + "</b><br>" 
      + this.Course + "<br>" + this.Bio + "</td></tr>";
  });

  $( rows ).appendTo( "#memberTable tbody" );
}