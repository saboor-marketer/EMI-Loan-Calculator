# EMI Loan Calculator

A responsive web-based EMI (Equated Monthly Installment) loan calculator built with HTML5, CSS3, JavaScript (ES6), and Bootstrap 5.

## Features

- ✅ Loan amount input
- ✅ Interest rate input
- ✅ Loan tenure input (in years)
- ✅ EMI calculation using standard formula
- ✅ Total payment calculation
- ✅ Total interest calculation
- ✅ Reset button to clear all inputs
- ✅ Responsive Bootstrap 5 design
- ✅ Input validation
- ✅ Pakistani currency formatting (Rs.)
- ✅ Smooth animations

## How to Use

1. Open `index.html` in a web browser
2. Enter the loan amount in Pakistani Rupees
3. Enter the annual interest rate (percentage)
4. Enter the loan duration in years
5. Click "Calculate EMI" to see the results
6. Click "Reset" to clear all inputs and results

## EMI Calculation Formula

The calculator uses the standard EMI formula:

```
EMI = [P x R x (1+R)^N]/[(1+R)^N-1]
```

Where:
- P = Principal (Loan Amount)
- R = Monthly Interest Rate (Annual Rate / 12 / 100)
- N = Loan Tenure in Months (Years × 12)

## Tech Stack

- **HTML5** - Structure
- **CSS3** - Styling with gradient backgrounds and animations
- **JavaScript (ES6)** - Logic and DOM manipulation
- **Bootstrap 5** - Responsive framework and components

## File Structure

```
EMI Loan Calculator/
├── index.html      # Main HTML file
├── styles.css      # Custom CSS styling
├── script.js       # JavaScript logic
└── README.md       # Project documentation
```

## Concepts Practiced

- Form handling and validation
- Mathematical formulas implementation
- Number formatting (Pakistani currency)
- Input validation
- DOM manipulation
- Event handling
- CSS animations and transitions
- Responsive design with Bootstrap 5

## Browser Compatibility

Works on all modern browsers that support ES6 JavaScript:
- Chrome
- Firefox
- Safari
- Edge
