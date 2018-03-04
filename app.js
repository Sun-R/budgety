// budget controller
var budgetController = (function() {

    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }

    var Incom = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            totalExp: 0,
            totalInc: 0
        }
    }
}());


// UI
var UIController = (function() {

    var DOMstring = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn'
    }

    return {
        getinput: function() {
            return {
                type: document.querySelector(DOMstring.inputType).value, //inc or exp
                description: document.querySelector(DOMstring.inputDescription).value, //description text
                value: document.querySelector(DOMstring.inputValue).value //value
            }
        },
        getDOMstring: function() {
            return DOMstring;
        }
    }
}());


// global controller
var controller = (function(budgetCtrl, UICtrl) {
    var setupEventListeners = function() {
        var DOM = UIController.getDOMstring();
        document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);
        document.addEventListener('keypress', function(event) {
            if (event.charCode === 13) {
                ctrlAddItem();
            }
        });
    }


    var ctrlAddItem = function() {

        //1. get file data
        var input = UIController.getinput();
        //2. add item to the budget

        //3. add item to UI

        //4. calculate the budget

        //5. display the budget on UI

    }

    return {
        init: function() {
            setupEventListeners();
            console.log('ready start');
        }
    }

}(budgetController, UIController));

controller.init();
