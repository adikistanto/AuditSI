(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* listitem  Office Information */
    $(document).on("click", ".uib_w_7", function(evt)
    {
         /*global activate_page */
         activate_page("#uib_page_office"); 
    });
    
        /* button  Exit */
    $(document).on("click", ".uib_w_27", function(evt)
    {
        /* your code goes here */ 
    });
    
        /* button  #back */
    $(document).on("click", "#back", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
    });
    
        /* button  #back_hw */
    $(document).on("click", "#back_hw", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
    });
    
        /* listitem  Hardware Inventory */
    $(document).on("click", ".uib_w_5", function(evt)
    {
         /*global activate_page */
         activate_page("#uib_page_hardware"); 
    });
    
        /* button  #back_sw */
    $(document).on("click", "#back_sw", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
    });
    
        /* listitem  Software Inventory */
    $(document).on("click", ".uib_w_3", function(evt)
    {
         /*global activate_page */
         activate_page("#uib_page_software"); 
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
