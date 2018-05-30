function displayController(domElement) {
    var dispView;

    function init() {
        dispView = new displayView(displayModel);
        var inputElement = dispView.getDisplayElement;

        domElement.appendChild(inputElement);
    }

    init();

}
