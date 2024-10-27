let principleAmountElement = document.getElementById("principleAmount");
let interestPercentageElement = document.getElementById("interestPercentage");
let yearsElement = document.getElementById("years");


let interestAmountElement = document.getElementById("interestAmount");
let totalAmountElement = document.getElementById("totalAmount");
let errorMessageElement = document.getElementById("errorMessage");

function calculateInterest() {
    let principleAmountValue = principleAmountElement.value;
    let interestPercentageValue = interestPercentageElement.value;
    let yearsValue = yearsElement.value;



    if (principleAmountValue === "") {
        alert("Enter Valid Amount");

    } else if (interestPercentageValue === "") {
        alert("Enter Valid Value");
    } else if (yearsValue === "") {
        alert("Enter Valid Years");
    } else {
        errorMessageElement.textContent = "";
        let principleAmount = parseInt(principleAmountValue);
        let interestPercentage = parseInt(interestPercentageValue);
        let years = parseInt(yearsValue);
        let interestAmount = (principleAmount * years * interestPercentage) / 100
        let totalAmount = principleAmount + interestAmount;

        interestAmountElement.value = interestAmount;
        totalAmountElement.value = totalAmount;




    }
}