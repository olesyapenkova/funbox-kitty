(function() {
    var product=$(".js-product");

    product.on("click", function () {
        var _this=$(this).parent();
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
        _this.parent().removeClass('not-hover');
    });

    var buy=$(".js-buy");
    buy.on("click",function (e) {
       e.preventDefault();
       var _this=$(this).closest('.product');
       _this.find('.js-product').click();
       _this.removeClass('not-hover');
       console.log($(this).closest('.product'));
    });

}());