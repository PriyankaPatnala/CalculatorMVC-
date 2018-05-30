var calculatorView = function (model) {

    var numericBtns, operatorBtns;

    var calculatorButtonsContainer = document.createElement("div");

    function init() {

        numericBtns = model.numberButtons;
        operatorBtns = model.operatorButtons;

        calculatorButtonsContainer.classList = model.classList;
        calculatorButtonsContainer.style.height = model.height;
        calculatorButtonsContainer.style.width = model.width;
        calculatorButtonsContainer.style.backgroundColor = model.backgroundColor;

    }

    this.getCalculatorView = calculatorButtonsContainer;

    init();

}
