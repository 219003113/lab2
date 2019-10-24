var target_element = document.getElementById("custom_button");
target_element.addEventListener( "click", function()
    {
        $zoho.salesiq.visitor.customaction("Trigger");
    });

$zoho.salesiq.ready=function(embedinfo)
{
   $zoho.salesiq.visitor.customaction("Track-Signup-button");
   $zoho.salesiq.visitor.info({"Band" : "Premium", "Branch": "Delhi"});
   $zoho.salesiq.custom.html("zsiq_float", { 
	"online.html" :"<img src = 'https://www.zoho.com/salesiq/img/Zilliumonline.png' >", 
	"offline.html" :"<img src = 'https://www.zoho.com/salesiq/img/ZilliumOffline.png' >",
	"online.click" :function(){$zoho.salesiq.visitor.info({"CUSTOM" : "FINISHED", "ACTION": "DONE"});}		
   });
}