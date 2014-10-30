Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    items:[
        { html:'My Second ZZyzxApp!'},
        {xtype: 'rallyiterationcombobox'},
        {xtype: 'rallyreleasecombobox'}
    ],
    layout: {type: 'hbox'},
    launch: function() {
        //Write app code here
        console.log("Our Second App has Arrived");
    }
});
