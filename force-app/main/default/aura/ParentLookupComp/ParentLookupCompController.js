({
    doInit: function(component, event, helper) {
        console.log('ObjectName in Component: ', component.get('v.objname'));
        console.log('FieldName in Component: ', component.get('v.fieldname'));
    },
    
    doHandleSearchMethod: function(component, event, helper) {
     var searchParam = event.getParam('SearchText');
		 var action = component.get("c.getContactsByAccountId");
			action.setParams({
            ObjectName: component.get('v.objname'),
            sreachText: searchParam,                     
            fieldInsearch: component.get('v.fieldname')   
        });
			action.setCallback(this, function(response) {
            var state = response.getState();
           //alert(state);
       		if (state === 'SUCCESS' || state === 'DRAFT') {
         	var responseValue = response.getReturnValue();
            component.set('v.recordList', responseValue);    
            console.log('responseValue', responseValue);
                } else if (state === 'ERROR') {
				var errors = response.getError();
                console.error('Error Occurred: ', errors) }
        });

        $A.enqueueAction(action);
    },
    Selectrecord:function(component, event, helper){
        var record =event.getparms(record);
        console.log('record',record.Id);
        
    }
})