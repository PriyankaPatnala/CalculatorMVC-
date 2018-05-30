function operatorButtonController(model, domText, domElement, calInstance) {

    function init() {

        var btn = new operatorButtonView(model, calInstance);// ,this.onClickHandler
        btn.init();
        btn.setListener();

        var btnElement = btn.getButtonElement();
        btnElement.innerText = domText;
        domElement.appendChild(btnElement);


    }

    init();

}