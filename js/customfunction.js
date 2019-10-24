var target_element = document.getElementById("custom_button");
target_element.addEventListener( "click", function()
    {
        $zoho.salesiq.visitor.customaction("Trigger");
    });