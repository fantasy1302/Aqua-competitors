
(function ($) {
    $(document).ready(function () {
        var $detailsStandards = $('.details-standards');
        $detailsStandards.click(function () {
            var index = $detailsStandards.index(this);
            $(this).toggleClass('details-standards-opened');
            $('.details-content').eq(index).toggleClass('details-content-active');
        });
    });
})(jQuery);