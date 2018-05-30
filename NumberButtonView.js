var numericButtonView = function (model,calInstance) {
    buttonView.call(this, model,calInstance);
}


/*
    numberButtonView  class is inheriting buttonView class

 */
numericButtonView.prototype = new buttonView();
numericButtonView.prototype.constructor = numericButtonView;
