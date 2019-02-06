"use strict";
$( document ).ready(function() {
    let tablenum = null; //declaring tablenum (variable that will hold the clicked circle)
    /*THIS HANDLES MY FORM POPUP, ASSIGNS A VALUE TO tablenum, APPENDS THE CIRCLES INNER HTML VAL 
    TO AN EMPTY HTML TAG, AND CLEARS OUT THE HTML TAG ON SUBSEQUENT CLICKS*/
    $(document).on("click", ".circle", function(e) {
        $(".modul1").css("display", "flex");
        $(".modul1").css("position", "absolute");
        tablenum = e.target;
        $(".tablenumber").html("");
        $(".tablenumber").append($(tablenum).html());
        });
    /*ADDS AND REMOVES CLASSES - RESERVED CLASS DISABLES CLICKS AND CHANGES THE CIRCLES TO A
    DIFFERENT COLOR. LINE 17 IS ASSIGNING 3 NEW CLASSES WITH USER INPUT AS CORRESPONDING VALS
    21 HIDES THE FORM ON SAVE BUTTON CLICK AND CLEARS THE FORM THE NEXT GO THROUGH */    
    $(document).on("click", ".savebut", function() {
        $(tablenum).removeClass("available").addClass("reserved").unbind();
        $(tablenum).attr("name", $(".textform").eq(0).val())
        .attr("phone", $(".textform").eq(1).val())
        .attr("table", $(".textform").eq(2).val());
        $(".modul1").hide();
        $(".textform").val("");
    });
    /*THIS IS FUNCTIONALITY FOR THE "X" ICON. IT CLEARS THE FORMS AND HIDES THE FORM*/
    $(document).on("click", "i", function() {
        $(".tablenumber").html("");
        $(".textform").val("");
        $(".modul1").css("display", "none");
    });
    /*WHEN YOU MOUSEOVER A CIRCLE, IT APPENDS THE KEY VALS FROM 17/18 TO A DOM CREATED SECTION*/
    $(document).on("mouseenter", ".circle", function (e) {
        if ($(e.target).attr("name") && $(e.target).attr("phone") && $(e.target).attr("table")) {
          $(e.target).append(`
          <section class="resName">
            <p>Name: ${$(e.target).attr("name")}</p>
            <p>Phone: ${$(e.target).attr("phone")}</p>
            <p>Party Size: ${$(e.target).attr("table")}</p>
          </section>
          `);
        }
      });
      /*ON MOUSE OUT - DELETE THE TEMPORARY SECTION*/
      $(document).on("mouseleave", ".circle", function(e) {
        $(".resName").remove();
      });
});
