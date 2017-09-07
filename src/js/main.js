(function() {
    var product=$(".product");

    product.on("click", function () {
        var _this=$(this);
        if(!_this.data('disabled') == '1'){
            if(!_this.hasClass('product--selected')) {
                _this.addClass('not-hover');
            }else{
                _this.removeClass('not-hover');
            }
            _this.toggleClass('product--selected');
        }
    });

    product.on("mouseleave",function () {
        var _this=$(this);
        _this.removeClass('not-hover');
    });

}());