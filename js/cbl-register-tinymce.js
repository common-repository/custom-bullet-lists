(function() {
 tinymce.PluginManager.add('cbl_btn', function( editor, url ) {
  editor.addButton( 'cbl_btn', {
   title: 'Custom Button Lists',
   type: 'button',
   icon: 'icon dashicons-list-view',
   onclick: function() {
    editor.windowManager.open( {
     title: 'Custom Bullet Lists',
     body: [{
      type: 'listbox',
      name: 'style',
      label: 'List Icon Style',
      'values': [
        {text: 'Boxed', value: 'boxed'},
        {text: 'Clear', value: 'clear'},
        {text: 'Filled', value: 'filled'}
      ]
     },
     {
      type: 'listbox', 
      name: 'listtype', 
      label: 'List Type', 
      'values': [
       {text: '<ul>', value: 'UL'},
       {text: '<ol>', value: 'OL'}
      ]
     }],
     onsubmit: function( e ) {
      editor.insertContent( '<' + e.data.listtype+ ' class="cbl-lists cbl-' + e.data.style+ '"><li>List Item 1</li><li>List Item 2</li><li>List Item 3</li></' + e.data.listtype+ '>');
     }
    });
   },
  });
 });
})();
