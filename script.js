$(function(){

    var toolBar = $("<ul>")
        .prop({id:"putil"});
        
    
    $("<a>")
        .prop({href:"#",id:"putil-item"})
        .appendTo(toolBar);
        
    $menuItemContainer = $("<ul>")
        .appendTo(toolBar);

    

    function startDL(){
        var ugoku_url = pixiv.context.ugokuIllustData.src;
        if(ugoku_url !="" ){
            $("<iframe>").hide().prop("src", ugoku_url).appendTo("body");
        }
    }
    
    console.log("loaded");
    
    function init(){
    
        var hasAction = false;
    
        if (typeof pixiv.context.ugokuIllustData == "object"){
            $("<a>")
            .prop({href:"#"})
            .text("ugoku-download")
            .click(function(){ startDL()})
            .appendTo($menuItemContainer);
            
            hasAction=true;
        }
        
        if(hasAction){
            toolBar.appendTo($("body"));
        }
    }
    
    init();
});
