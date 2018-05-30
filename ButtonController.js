
function  buttonController(model,domTextContent, domElement){

    this.model = model;
    this.domTextContent = domTextContent;
    this.domElement = domElement;
}

buttonController.prototype.init = function () {

        this.buttonView = new buttonView(this.model);
        this.buttonView.init();
        this.buttonElement = this.buttonView.getButtonElement();
        this.buttonElement.innerText = this.domTextContent;
        this.buttonElement.value = this.domTextContent;
        this.domElement.appendChild(this.buttonElement);

};
