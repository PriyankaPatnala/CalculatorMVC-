var displayView = function (model) {

    var display = document.createElement("input");

    function init() {
        display.classList = model.classList;
        display.style.color = model.color;
        display.style.width = model.width;
        display.style.height = model.height;

    };

    this.getDisplayElement = display;

    init();

}

