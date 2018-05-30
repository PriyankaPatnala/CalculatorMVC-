function calculatorController() {
    var calView;
    this.operand2 = "0";
    this.operand1 = "0";
    this.operator = 0;
    var that = this;

    function init() {

        var calculatorModelInstance = new calculatorModel(calculatorModelSpec);
        calView = new calculatorView(calculatorModelInstance);
        displayController(calView.getCalculatorView);


        for (var i = 0; i < calculatorModelSpec.numericButtons(buttonInfo).length; i++) {

            new numericButtonController(numericButtonModel, calculatorModelSpec.numericButtons(buttonInfo)[i].dataValue, calView.getCalculatorView, that);

        }

        for (var i = 0; i < calculatorModelSpec.operatorButtons(buttonInfo).length; i++) {

            new operatorButtonController(operatorButtonModel, calculatorModelSpec.operatorButtons(buttonInfo)[i].dataValue, calView.getCalculatorView, that);
        }

    }

    this.render = function () {
        return calView.getCalculatorView;
    };

    init();

}

//if "." button is clicked
calculatorController.prototype.Dot = function (dispObj) {

    if (this.operand2.length == 0)
        this.operand2 = "0.";
    else {
        if (this.operand2.indexOf(".") == -1)
            this.operand2 += '.';

    }
    dispObj.value = this.operand2;
};

//if "+-" is clicked
calculatorController.prototype.PlusMinus = function (dispObj) {

    if (this.operand2.toString().indexOf("-") == 0) {
        this.operand2 = this.operand2.toString().substring(1);
    }
    else {
        this.operand2 = "-" + this.operand2;
    }
    dispObj.value = this.operand2;

};


//if "CE" is clicked

calculatorController.prototype.Clear=function(dispObj){
    this.operand2 = "";
    dispObj.value=this.operand2;
};

//if "C" is clicked
calculatorController.prototype.allClear =function(dispObj){

    this.operand1 = "";
    this.operand2 = "";
    this.operator = 0;
    dispObj.value=this.operand2;
};

//if "+ , -, * ,/ " are clicked
calculatorController.prototype.Operate= function(op,dispObj){


    if ( op.indexOf("*") > -1 ) { this.operator = 1; };       //codes for *
    if ( op.indexOf("/") > -1 ) { this.operator = 2; };       // slash (divide)
    if ( op.indexOf("+") > -1 ) { this.operator = 3; };       // sum
    if ( op.indexOf("-") > -1 ) { this.operator = 4; };       // difference
    if ( op.indexOf("%") > -1 ) { this.operator = 5; };       //modulus

    this.operand1 = this.operand2;                 //store value
    this.operand2 = "";
    dispObj.value = this.operand2;
}


//Calculation if "=" is clicked
calculatorController.prototype.Calculate = function(dispObj){
    if ( this.operator == 1 ) { this.operand2 = Number(eval(this.operand1)) * Number(eval(this.operand2)); };
    if ( this.operator == 2 ) { this.operand2 = Number(eval(this.operand1)) / Number(eval(this.operand2)); };
    if ( this.operator == 3 ) { this.operand2 = Number(eval(this.operand1)) + Number(eval(this.operand2)); };
    if ( this.operator == 4 ) { this.operand2 = Number(eval(this.operand1)) - Number(eval(this.operand2)); };
    if ( this.operator == 5 ) { this.operand2 = Number(eval(this.operand1)) % Number(eval(this.operand2)); };

    this.operator = 0;
    this.operand1    = "0";
    dispObj.value = this.operand2 ;
};


//if numericButtons are clicked
calculatorController.prototype.onNumberClick = function (buttonObj, dispObj) {


    if (this.operand2 == 0 && (this.operand2.indexOf('.') == -1)) {
        this.operand2 = buttonObj.innerText;
    }
    else {
        this.operand2 += buttonObj.innerText;

    }
    dispObj.value = this.operand2;

}


calculatorController.prototype.getButtonValue = function (btnObj) {

    var displayObj = event.target.parentNode.firstChild;
    console.log("disp "+ displayObj.value);

    if (btnObj.classList == "number")
        this.onNumberClick(btnObj, displayObj);

    else {

        if (btnObj.innerText == ".") {
            this.Dot(displayObj);
        }
        else  if (btnObj.innerText == "+-") {
            this.PlusMinus(displayObj);
        }
        else if(btnObj.innerText == "CE"){
            this.Clear(displayObj);
        }
        else if(btnObj.innerText == "C"){
            this.allClear(displayObj);
        }
        else if(btnObj.innerText =="+" || btnObj.innerText == "-" || btnObj.innerText == "*" || btnObj.innerText == "/" || btnObj.innerText == "%"){
            this.Operate( btnObj.innerText , displayObj );
        }
        else if(btnObj.innerText == "="){
            this.Calculate(displayObj);
        }
    }
}
