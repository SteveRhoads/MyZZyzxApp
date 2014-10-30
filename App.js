Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    items:{ html:'My Second ZZyzxApp!'},
    launch: function() {
        //Write app code here
        console.log("Our Second App has Arrived")
    }
});
