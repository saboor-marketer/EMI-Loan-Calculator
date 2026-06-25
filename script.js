// DOM Elements
const emiForm = document.getElementById('emiForm');
const loanAmountInput = document.getElementById('loanAmount');
const interestRateInput = document.getElementById('interestRate');
const loanTenureInput = document.getElementById('loanTenure');
const resetBtn = document.getElementById('resetBtn');
const resultSection = document.getElementById('resultSection');
const monthlyEMIElement = document.getElementById('monthlyEMI');
const totalPaymentElement = document.getElementById('totalPayment');
const totalInterestElement = document.getElementById('totalInterest');

// Format number to Pakistani currency format
function formatCurrency(amount) {
    return 'Rs.' + amount.toLocaleString('en-PK', {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2
    });
}

// Calculate EMI
function calculateEMI(principal, annualRate, years) {
    const monthlyRate = annualRate / 12 / 100;
    const months = years * 12;
    
    // EMI Formula: [P x R x (1+R)^N]/[(1+R)^N-1]
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
                (Math.pow(1 + monthlyRate, months) - 1);
    
    return emi;
}

// Validate inputs
function validateInputs(principal, rate, years) {
    if (principal <= 0) {
        alert('Please enter a valid loan amount greater than 0');
        return false;
    }
    if (rate <= 0) {
        alert('Please enter a valid interest rate greater than 0');
        return false;
    }
    if (years <= 0) {
        alert('Please enter a valid loan duration greater than 0');
        return false;
    }
    return true;
}

// Handle form submission
emiForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get input values
    const principal = parseFloat(loanAmountInput.value);
    const annualRate = parseFloat(interestRateInput.value);
    const years = parseFloat(loanTenureInput.value);
    
    // Validate inputs
    if (!validateInputs(principal, annualRate, years)) {
        return;
    }
    
    // Calculate EMI
    const emi = calculateEMI(principal, annualRate, years);
    const months = years * 12;
    const totalPayment = emi * months;
    const totalInterest = totalPayment - principal;
    
    // Display results
    monthlyEMIElement.textContent = formatCurrency(emi);
    totalPaymentElement.textContent = formatCurrency(totalPayment);
    totalInterestElement.textContent = formatCurrency(totalInterest);
    
    // Show result section
    resultSection.style.display = 'block';
    
    // Scroll to results
    resultSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

// Handle reset button
resetBtn.addEventListener('click', function() {
    emiForm.reset();
    resultSection.style.display = 'none';
    monthlyEMIElement.textContent = 'Rs.0';
    totalPaymentElement.textContent = 'Rs.0';
    totalInterestElement.textContent = 'Rs.0';
});

// Add input validation on blur
loanAmountInput.addEventListener('blur', function() {
    if (this.value && parseFloat(this.value) <= 0) {
        this.setCustomValidity('Loan amount must be greater than 0');
    } else {
        this.setCustomValidity('');
    }
});

interestRateInput.addEventListener('blur', function() {
    if (this.value && parseFloat(this.value) <= 0) {
        this.setCustomValidity('Interest rate must be greater than 0');
    } else {
        this.setCustomValidity('');
    }
});

loanTenureInput.addEventListener('blur', function() {
    if (this.value && parseFloat(this.value) <= 0) {
        this.setCustomValidity('Loan duration must be greater than 0');
    } else {
        this.setCustomValidity('');
    }
});
