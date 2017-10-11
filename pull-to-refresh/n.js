$(function() {

    function scrollLocation(ele) {
        ele.find(".box").each(function(index) {
            var scrollTop = $(window).scrollTop();
            var eles = $(this).offset().top;
            var eleh = $(this).height();
            var isDot = $(this).attr("isDot");
            if (scrollTop > eles - eleh - eleh && $(this).attr("name") === undefined) {
                console.log(isDot)
                $(this).attr("name", index)
            }
        })

    }

    $(window).scroll(function() {
        isDot = true;
        var n = $(".n");
        scrollLocation(n);

    })

});
