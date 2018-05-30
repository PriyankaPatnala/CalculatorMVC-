var operatorButtonView = function (model, calInstance) {

    console.log("oper view " + calInstance);
    buttonView.call(this, model, calInstance);

}

/*
    OperatorButtonView class is inheriting buttonView Class
 */

operatorButtonView.prototype = new buttonView();
operatorButtonView.prototype.constructor = operatorButtonView;

