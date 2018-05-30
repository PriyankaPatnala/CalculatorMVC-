//create a button view
var buttonView = function (model, calInstance) {

    this.model = model;
    this.btn = document.createElement("button");
    this.calInstance = calInstance;

}

buttonView.prototype.init = function () {

    this.btn.classList = this.model.classList;
    this.btn.style.width = this.model.width;
    this.btn.style.height = this.model.height;
    this.btn.style.backgroundColor = this.model.backgroundColor;

};

buttonView.prototype.setListener = function () {
    var btnObj = this;
    this.btn.addEventListener('click', function (event) {
        btnObj.calInstance.getButtonValue(btnObj.btn);
    });
};

buttonView.prototype.getButtonElement = function () {
    return this.btn;
};