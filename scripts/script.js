"use strict";
$( document ).ready(function() {
    if (true) {
    $(".circle").on("click", function(e) {
        $(".modul1").css("display", "flex");
        $(".modul1").css("position", "absolute");
        var tablenum = $(e.target);
        tablenum.removeClass("available");
        tablenum.toggleClass("reserved");
        $(".tablenumber").append(tablenum.html());
        // prerez.push([tablenum]);
        // console.log(prerez);
        // return prerez;
        console.log(tablenum[0]);
        return tablenum;
        });
    $(".savebut").on("click", function(e){
        preventDefault();
    });
    $("i").on("click", function(){
        // if (true) {
        //     tablenum.removeClass("reserved");
        //     tablenum.toggleClass("available");
        //     console.log(tablenum);
        // }
        $(".tablenumber").html(" ");
        $(".modul1").css("display", "none");
    });
    }
});
