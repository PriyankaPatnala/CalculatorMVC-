function numericButtonController(model, domText, domElement, calInstance) {

    function init() {
        var btn = new numericButtonView(model, calInstance);
        btn.init();
        btn.setListener();

        var btnElement = btn.getButtonElement();
        btnElement.innerText = domText;
        domElement.appendChild(btnElement);

    };

    init();

}