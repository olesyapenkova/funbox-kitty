(function () {
  var product = $(".js-product");

  /*выбираем продукт*/
  product.on("click", function () {
    var _this = $(this);
    if (_this.hasClass('product--disabled'))/* проверяем а не disabled ли он*/
      return;

    if (!_this.hasClass('product--selected')) { /*запрещаем ховер если продукт только что выбрали, и разрешаем ховер если продукт не выбран*/
      _this.addClass('not-hover');
    } else {
      _this.removeClass('not-hover');
    }
    _this.toggleClass('product--selected');
    _this.next().toggleClass('footer-promo--selected');

  });

  /*разрешаем ховер на выделенном продукте*/
  product.on("mouseleave", function () {
    var _this = $(this);
    _this.removeClass('not-hover');
  });

  /*выбираем продукт при клике на ссылку 'купи'*/
  var buy = $(".js-buy");
  buy.on("click", function (e) {
    e.preventDefault();
    var _this = $(this).closest('.products__item');
    _this.find('.js-product').click().removeClass('not-hover');
  });

}());
