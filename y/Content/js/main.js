var searchSettings = {
    "font-texts-check": true,
    "ayaTextOriginalSize":0,
    "ayaTextMultiplier": 1,
    "aya-color-radio": "#aya-darkblue-radio",

    "trans-texts-check": true,
    "transTextOriginalSize": 0,
    "transTextMultiplier": 1,
    "trans-color-radio": "#trans-darkblue-radio",
    "trans-fontweight-checkbox": false,

    "margin-texts-check": true,
    "marginTextOriginalSize": 0,
    "marginTextMultiplier": 1,
    "margin-color-radio": "#margin-darkblue-radio",
    "marg-text-fontweight-checkbox": false
};
function searchSettingsUpdate() {
    $("#font-texts-check").prop("checked", searchSettings["font-texts-check"]);
    if (searchSettings["font-texts-check"] == false) {
        $('.aya-text').css("display", "none");
    }
    searchSettings["ayaTextOriginalSize"] = parseFloat($('.aya-text').css('font-size'));
    $('.aya-text').css("font-size", searchSettings["ayaTextOriginalSize"] * searchSettings["ayaTextMultiplier"]);
    $(".aya-text").css("color", "#" + $(searchSettings["aya-color-radio"]).val());
    $(searchSettings["aya-color-radio"]).prop("checked", true);


    $("#trans-texts-check").prop("checked", searchSettings["trans-texts-check"]);
    if (searchSettings["trans-texts-check"] == false) {
        $('.trans-text').css("display", "none");
    }
    searchSettings["transTextOriginalSize"] = parseFloat($('.trans-text').css('font-size'));
    $('.trans-text').css("font-size", searchSettings["transTextOriginalSize"] * searchSettings["transTextMultiplier"]);
    $(".trans-text").css("color", "#" + $(searchSettings["trans-color-radio"]).val());
    $(searchSettings["trans-color-radio"]).prop("checked", true);
    $("#trans-fontweight-checkbox").prop("checked", searchSettings["trans-fontweight-checkbox"]);
    if (searchSettings["trans-fontweight-checkbox"] == true) {
        $('.trans-text').addClass("weight");
    }



    $("#marg-texts-check").prop("checked", searchSettings["margin-texts-check"]);
    if (searchSettings["margin-texts-check"] == false) {
        $('.trans-font').css("display", "none");
    }
    searchSettings["marginTextOriginalSize"] = parseFloat($('.trans-font').css('font-size'));
    $('.trans-font').css("font-size", searchSettings["marginTextOriginalSize"] * searchSettings["marginTextMultiplier"]);
    $(".trans-font").css("color", "#" + $(searchSettings["margin-color-radio"]).val());
    $(searchSettings["margin-color-radio"]).prop("checked", true);
    $("#marg-text-fontweight-checkbox").prop("checked", searchSettings["marg-text-fontweight-checkbox"]);
    if (searchSettings["marg-text-fontweight-checkbox"] == true) {
        $(".trans-font").addClass("weight");
    }

}
function getSearchSettings() {
    var name = "searchSettings=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            searchSettings = JSON.parse(c.substring(name.length, c.length));
        }
    }
    return "";
}
function saveSearchSettings() {
    x = JSON.stringify(searchSettings);
    var d = new Date();
    d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000)); //one month
    var expires = "expires=" + d.toUTCString();
    document.cookie = "searchSettings=" + x + "; " + expires;
}
var loaded = false;
var onloadCallback = function () {
    loaded = true;
};
var temp;
let clock;
$(document).on('show.bs.modal', '.aya-trans-modal', function (e) {
    translationId = $(e.currentTarget).data("translation-id");
    widgetId = $(e.currentTarget).data("widget-Id");
    recaptchaid = 'g-recaptcha-' + translationId;
    try {
        if (loaded) {
            if (isNaN(widgetId)) {
                var widgetId = grecaptcha.render(recaptchaid, {
                    'sitekey': $(e.currentTarget).data("public-key"),
                    'theme': 'light',
                    'lang': $(e.currentTarget).data("lang-code"),
                });
                $(e.currentTarget).data("widget-Id", widgetId);
            }
            else {
                grecaptcha.reset(widgetId);
            }
        }
    }
    catch(e)  { }
});
$(document).on('hide.bs.modal', '.aya-trans-modal', function (e) {
    var TranslateId = $(e.currentTarget).data("translation-id");
    $("#SubmitMistakeError-" + TranslateId).html("");
    $("#SubmitMistakeSuccess-" + TranslateId).html("");
});

$(document).ready(function () {
    getSearchSettings();
    searchSettingsUpdate();
    //Mistake submit
    $(document).on('submit', '.SubmitMistake', function (e) {
        var current = this;
        var TranslateId = parseInt($(this).prop("id").replace("SubmitMistake-", ""));
        if (!isNaN(TranslateId)) {
            var gRecaptchaResponse = $(this).find(".g-recaptcha-response").val();
            var SubmitMistakeError = $("#SubmitMistakeError-" + TranslateId);
            var mistakeMessageId = '#MistakeMessage-' + TranslateId;
            var mistaketypeIdHtml = '#ListItems-' + TranslateId;
            var selectedTypeId = $(mistaketypeIdHtml).val();
            var mistakeText = $(mistakeMessageId).val();

            var errors = false;
            SubmitMistakeError.html("");
            SubmitMistakeError.append("<ul></ul>");
            if (mistakeText == "") {
                SubmitMistakeError.children("ul").append("<li>" + $(mistakeMessageId).data("error-message") + "</li>");
                errors = true;
            }
            url = $(this).children("input[name='submit-url']").val();
            if (!errors) {
                $.ajax({
                    url: url,
                    type: 'POST',
                    data: {
                        "g-recaptcha-response": gRecaptchaResponse,
                        MistakeText: mistakeText,
                        MistakeTypeId: selectedTypeId,
                        TranslationId: TranslateId
                    },
                    dataType: 'json',
                    success: function (d) {
                        if (d.status == "success") {
                            $(current).parents(".modal").modal('hide');
                            swal(
                                {
                                    title: d.message,
                                    type: 'success',
                                    confirmButtonClass: 'btn btn-confirm mt-2'
                                }
                            ).catch(swal.noop)
                        }
                        else {
                            swal(
                                {
                                    title: d.message,
                                    type: 'error',
                                    confirmButtonClass: 'btn btn-confirm mt-2'
                                }
                            ).catch(swal.noop)
                        }
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        SubmitMistakeError.html($(mistakeMessageId).data("error") + ":" + textStatus + errorThrown);
                    }
                });
            }
        }
        return false;
    });

    $(document).on("click",".copyAya",function (e) {
        e.preventDefault();
        var text = $(this).parentsUntil(".aya-trans-detail").find(".trans-text");
        if (text !== undefined) {
            text = text.html();
        }
        try {
            var copyTextarea = $(this).parentsUntil(".aya-trans-detail").find(".trans-text").get(0);
            if (document.selection) { // IE
                var range = document.body.createTextRange();
                range.moveToElementText(copyTextarea);
                range.select();
            } else if (window.getSelection) {
                var range = document.createRange();
                range.selectNode(copyTextarea);
                window.getSelection().removeAllRanges();
                window.getSelection().addRange(range);
            }
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
            window.getSelection().removeAllRanges();
            $(this).siblings(".result").html(msg);
        } catch (err) {
        }
        return false;
    });
    var temp;
    $(document).on("click",".copytrans",function (e) {
        e.preventDefault();
        try {
            var copyTextarea = $(this).parentsUntil(".aya-trans-detail").find(".trans-text").get(0);
            if (document.selection) { // IE
                var range = document.body.createTextRange();
                range.moveToElementText(copyTextarea);
                range.select();
            } else if (window.getSelection) {
                var range = document.createRange();
                range.selectNode(copyTextarea);
                window.getSelection().removeAllRanges();
                window.getSelection().addRange(range);
            }
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
            window.getSelection().removeAllRanges();
            $(this).siblings("." + msg).fadeIn(2000).fadeOut(2000);
        } catch (err) {
        }
        return false;
    });
    $(document).on("click",".copyevery",function (e) {
        e.preventDefault();
        try {
            var copyTextarea = $(this).parentsUntil(".aya-trans-detail").find(".copyAll").get(0);
            if (document.selection) { // IE
                var range = document.body.createTextRange();
                range.moveToElementText(copyTextarea);
                range.select();
            } else if (window.getSelection) {
                var range = document.createRange();
                range.selectNode(copyTextarea);
                window.getSelection().removeAllRanges();
                window.getSelection().addRange(range);
            }
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
            window.getSelection().removeAllRanges();
            $(this).siblings("." + msg).fadeIn(2000).fadeOut(2000);
        } catch (err) {
        }
        return false;
    });
    $(document).on("click",".CopyAyaWithTranslation",function (e) {
        e.preventDefault();
        try {
            var copyTextarea = $(this).parentsUntil(".aya-trans-detail").find(".copy-aya-trans").get(0);
            if (document.selection) { // IE
                var range = document.body.createTextRange();
                range.moveToElementText(copyTextarea);
                range.select();
            } else if (window.getSelection) {
                var range = document.createRange();
                range.selectNode(copyTextarea);
                window.getSelection().removeAllRanges();
                window.getSelection().addRange(range);
            }
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
            window.getSelection().removeAllRanges();
            $(this).siblings("." + msg).fadeIn(2000).fadeOut(2000);
        } catch (err) {
        }
        return false;
    });

    if (jQuery().owlCarousel) {
        $('#news-slider').owlCarousel({
            margin: 25,
            loop: true,
            // autoplay: true,
            center: true,
            responsive: {
                0: {
                    items: 1
                },
                767: {
                    items: 1,
                    center: false,
                },
                1000: {
                    items: 1
                }
            }
        });
        $(".news .owl-prev").html('<i class="fa fa-chevron-left"></i>');
        $(".news .owl-next").html('<i class="fa fa-chevron-right"></i>');
        $('#timeline-slider').owlCarousel({
            margin: 25,
            //loop: true,
            //autoplay: true,
            rtl: true,
            responsive:{
                0:{
                    items:1
                },
                1000:{
                    items:2
                }
              }
        });
        $('#demo-slider').owlCarousel({
            margin: 25,
            //loop: true,
            nav: true,
            //autoplay: true,
            responsive:{
                0:{
                    items:2
                },
                1000:{
                    items:6
                }
              }
        });
        $( ".model .owl-prev").html('<i class="fa fa-chevron-left"></i>');
        $( ".model .owl-next").html('<i class="fa fa-chevron-right"></i>');
    
        $('#friends-slider').owlCarousel({
            margin: 25,
            loop: true,
            nav: true,
            dot: false,
            autoplay: true,
            responsive:{
                0:{
                    items:1
                },
                1000:{
                    items:2
                }
              }
        });
        $( ".friends .owl-prev").html('<i class="fa fa-chevron-left"></i>');
        $( ".friends .owl-next").html('<i class="fa fa-chevron-right"></i>');
        $('#sucess-slider').owlCarousel({
            margin: 25,
            loop: true,
            nav: true,
            dot: false,
            autoplay: true,
            responsive:{
                0:{
                    items:1
                },
                1000:{
                    items:2
                }
              }
        });
        $( ".sucess .owl-prev").html('<i class="fa fa-chevron-left"></i>');
        $( ".sucess .owl-next").html('<i class="fa fa-chevron-right"></i>');
    }


    $("#option-search").on("click",function (){
        $(this).toggleClass('bg2 , main-color2');
        $("#search-option-cont").toggle();
    });
    $("#setting").click(function (e) {
        e.preventDefault();
        $("#setting-cont").toggle(); 
    });
    $(document).mouseup(function (e) {
        var container = $("#setting,#setting-cont");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $("#setting-cont").hide();
        }
    });
    

    //font-weight
    //trans
    $("#trans-fontweight").on("click", function (e) {
        e.preventDefault();
        $(".trans-text").toggleClass("weight");
        $('#trans-fontweight-checkbox').prop("checked", !$('#trans-fontweight-checkbox').prop("checked"));
        searchSettings["trans-fontweight-checkbox"] = $('#trans-fontweight-checkbox').prop("checked");
        saveSearchSettings();
    });
    //marg
    $("#marg-text-fontweight").on("click", function (e) {
        e.preventDefault();
        $(".trans-font").toggleClass("weight");
        $('#marg-text-fontweight-checkbox').prop("checked", !$('#marg-text-fontweight-checkbox').prop("checked"));
        searchSettings["marg-text-fontweight-checkbox"] = $('#marg-text-fontweight-checkbox').prop("checked");
        saveSearchSettings();
    });

    //show/hide text
    //AYA
    $("#font-texts").on("click", function (e) {
        e.preventDefault();
        $('.aya-text').toggle();
        $('#font-texts-check').prop("checked", !$('#font-texts-check').prop("checked"));
        searchSettings["font-texts-check"] = $('#font-texts-check').prop("checked");
        saveSearchSettings();
    });
    //trans
    $("#trans-texts").on("click", function (e) {
        e.preventDefault();
        $(".trans-text").toggle();
        $('#trans-texts-check').prop("checked", !$('#trans-texts-check').prop("checked"));
        searchSettings["trans-texts-check"] = $('#trans-texts-check').prop("checked");
        saveSearchSettings();
    });
    //marg
    $("#marg-texts").on("click", function (e) {
        e.preventDefault();
        $(".trans-font").toggle();
        $('#marg-texts-check').prop("checked", !$('#marg-texts-check').prop("checked"));
        searchSettings["margin-texts-check"] = $('#marg-texts-check').prop("checked");
        saveSearchSettings();
    });


    //aya-voice
    $("#aya-voice").on("click", function (e) {
        e.preventDefault();
        $(".aya-voice").toggle();
        $('#aya-voice-checkbox').prop("checked", !$('#aya-voice-checkbox').prop("checked"));
    });



    // CHANGE-COLOR
    $(".aya-color-radio").on("click", function (e) {
        e.preventDefault();
        checkboxid = "#" + $(this).attr("for");
        searchSettings["aya-color-radio"] = checkboxid;
        $(".aya-text").css("color", "#" + $(searchSettings["aya-color-radio"]).val());
        $(searchSettings["aya-color-radio"]).prop("checked", true);
        saveSearchSettings();
    });
    $(".trans-color-radio").on("click", function (e) {
        e.preventDefault();
        checkboxid = "#" + $(this).attr("for");
        searchSettings["trans-color-radio"] = checkboxid;
        $(".trans-text").css("color", "#" + $(searchSettings["trans-color-radio"]).val());
        $(searchSettings["trans-color-radio"]).prop("checked", true);
        saveSearchSettings();
    });
    $(".margin-color-radio").on("click", function (e) {
        e.preventDefault();
        checkboxid = "#" + $(this).attr("for");
        searchSettings["margin-color-radio"] = checkboxid;
        $(".trans-font").css("color", "#" + $(searchSettings["margin-color-radio"]).val());
        $(searchSettings["margin-color-radio"]).prop("checked", true);
        saveSearchSettings();
    });

    //font-size
    //begin aya-text
    // reset
    $("#aya-font-rest").click(function () {
        $('.aya-text').css('font-size', searchSettings["ayaTextOriginalSize"]);
        searchSettings["ayaTextMultiplier"] = 1;
        saveSearchSettings();

    });

    // Increase Font Size
    $("#aya-font-plus").click(function () {
        searchSettings["ayaTextMultiplier"] = searchSettings["ayaTextMultiplier"] * 1.2;
        $('.aya-text').css("font-size", searchSettings["ayaTextOriginalSize"] * searchSettings["ayaTextMultiplier"]);
        saveSearchSettings();
        return false;
    });

    // Decrease Font Size
    $("#aya-font-minus").click(function () {
        searchSettings["ayaTextMultiplier"] = searchSettings["ayaTextMultiplier"] * 0.8;
        $('.aya-text').css("font-size", searchSettings["ayaTextOriginalSize"] * searchSettings["ayaTextMultiplier"]);
        saveSearchSettings();
        return false;
    });
    //end aya-text



    //begin trans-text
    // reset
    $("#trans-text-reset").click(function () {
        $('.trans-text').css('font-size', searchSettings["transTextOriginalSize"]);
        searchSettings["transTextMultiplier"] = 1;
        saveSearchSettings();

    });
    
    // Increase Font Size
    $("#trans-text-plus").click(function () {
        searchSettings["transTextMultiplier"] = searchSettings["transTextMultiplier"] * 1.2;
        $('.trans-text').css("font-size", searchSettings["transTextOriginalSize"] * searchSettings["transTextMultiplier"]);
        saveSearchSettings();
        return false;
    });

    // Decrease Font Size
    $("#trans-text-minus").click(function () {
        searchSettings["transTextMultiplier"] = searchSettings["transTextMultiplier"] * 0.8;
        $('.trans-text').css("font-size", searchSettings["transTextOriginalSize"] * searchSettings["transTextMultiplier"]);
        saveSearchSettings();
        return false;
    });

    //end trans-text

    //begin margin-text
    // reset
    $("#trans-font-reset").click(function () {
        $('.trans-font').css('font-size', searchSettings["marginTextOriginalSize"]);
        searchSettings["marginTextMultiplier"] = 1;
        saveSearchSettings();

    });
    
    // Increase Font Size
    $("#trans-font-plus").click(function () {
        searchSettings["marginTextMultiplier"] = searchSettings["marginTextMultiplier"] * 1.2;
        $('.trans-font').css("font-size", searchSettings["marginTextOriginalSize"] * searchSettings["marginTextMultiplier"]);
        saveSearchSettings();
        return false;
    });

    // Decrease Font Size
    $("#trans-font-minus").click(function () {
        searchSettings["marginTextMultiplier"] = searchSettings["marginTextMultiplier"] * 0.8;
        $('.trans-font').css("font-size", searchSettings["marginTextOriginalSize"] * searchSettings["marginTextMultiplier"]);
        saveSearchSettings();
        return false;
    });

    //end margin-text
    
    
     
    $('.add-details .pen-edit').on("click",function(){
        $(this).hide();
        $('.add-details .cancel').show();
        $(".add-details .my-detail input").removeAttr("disabled").css('border-color',"#edd279");     
    });
    $('.add-details .cancel').on("click",function(){
        $(this).hide();
        $('.add-details .pen-edit').show();
        $(".add-details .my-detail input").prop('disabled', true).css('border-color',"#f4f4f5");     
    });
    $('.add-details .my-projects .alert-message .exit').on("click",function(){
        $(this).parent().hide();
    });
});
custom_select_creator();
function custom_select_creator()
{
    var x, i, j, selElmnt, a, b, c;
    x = document.getElementsByClassName("custom-select");
    for (i = 0; i < x.length; i++) {
        selElmnt = x[i].getElementsByTagName("select")[0];
        if (x[i].attributes["data-done"] !== undefined && x[i].attributes["data-done"].value == "true") {
            continue;
        }
        x[i].setAttribute("data-done", "true");
        a = document.createElement("DIV");
        if (selElmnt.selectedIndex==0)
            a.setAttribute("class", "select-selected hafz-font");
        else
            a.setAttribute("class", "select-selected");
        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        x[i].appendChild(a);

        b = document.createElement("DIV");
        b.setAttribute("class", "select-items select-hide");
        for (j = 0; j < selElmnt.length; j++) {
            c = document.createElement("DIV");
            c.innerHTML = selElmnt.options[j].innerHTML;
            if (selElmnt.options[j].selected) {
                c.setAttribute("class", "same-as-selected");
            }
            c.addEventListener("click", function (e) {
                var y, i, k, s, h;
                s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                h = this.parentNode.previousSibling;
                for (i = 0; i < s.length; i++) {
                    if (s.options[i].innerHTML == this.innerHTML) {
                        s.selectedIndex = i;
                        h.innerHTML = this.innerHTML;
                        y = this.parentNode.getElementsByClassName("same-as-selected");
                        for (k = 0; k < y.length; k++) {
                            y[k].removeAttribute("class");
                        }
                        this.setAttribute("class", "same-as-selected");
                        if (typeof s.onchange == "function") {
                            s.onchange();
                        }
                        else {
                            try {
                                $(s).trigger("change");
                            }
                            catch (e) {

                            }
                        }
                        break;
                    }
                }
                h.click();
            });
            b.appendChild(c);
        }
        x[i].appendChild(b);
        a.addEventListener("click", function (e) {
            e.stopPropagation();
            closeAllSelect(this);
            this.nextSibling.classList.toggle("select-hide");
            this.classList.toggle("select-arrow-active hafz-font");
            $(".select-items").scrollTop(function () { return $(this).children(".same-as-selected").offset().top - $(this).offset().top + $(this).scrollTop(); })
        });
    }
}
function closeAllSelect(elmnt) {
    var x, y, i, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    for (i = 0; i < y.length; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < x.length; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}
document.addEventListener("click", closeAllSelect);



function GetCounterSum() {
    $.ajax({
        url: window.location.origin + "/Counter/GetCounterSum",
        type: 'POST',
        data: {
           
        },
        dataType: 'json',
        async: false,
        success: function (d) {
            debugger;
            var countersum = parseInt(d, 10);
            return countersum;
        },
        error: function (jqXHR, textStatus, errorThrown) {
            return 0;
        }
    });
}