document.getElementById("fdCalculator").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const principal = parseFloat(document.getElementById("principal").value);
    const interestRate = parseFloat(document.getElementById("interestRate").value);
    const timePeriod = parseFloat(document.getElementById("timePeriod").value);
  
    const maturityAmount = calculate_fd_maturity_amount(principal, interestRate, timePeriod);
    document.getElementById("result").textContent = `Maturity amount after ${timePeriod} months: $${maturityAmount.toFixed(2)}`;
  });
  
  function calculate_fd_maturity_amount(principal, interestRate, timePeriod) {
    // Formula for calculating the maturity amount
    return principal * (1 + (interestRate / 100) * (timePeriod / 12));
  }
  