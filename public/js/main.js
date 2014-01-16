var DannySite = DannySite || (function () {
    var aboutHtml = "<h1>You can read more about me <a target='_blank' id='resume_link' href='https://docs.google.com/document/d/15Z2Cl8cjrDEfFR8IfOK3h01BmLCfTv0bo7zUYR_7I50/edit?pli=1'>Here</a></h1>";

    var linksHtml = "<h1>Here are some projects I've done</h1><ul class='project_list'><li><a target='_blank' href='https://github.com/dsullivan7/monty-hall'>Monty Hall</a></li><li><a target='_blank' href='https://github.com/dsullivan7/tictac'>Tic Tac Toe</a></li></ul>";

    var populateHtml = function(tab){
        switch(tab){
            case "about":
                $("#page_body").html(aboutHtml);
                break;
            case "links":
                $("#page_body").html(linksHtml);
                break;
        }
    };
    
    return {
        populateHtml:populateHtml
    };
})();
