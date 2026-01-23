// --- Privacy Mode Logic ---
let isBalanceHidden = false;
const originalBalance = "$14,235.00";
const hiddenBalance = "••••••••";

function toggleBalance() {
    const balanceEl = document.getElementById("balanceAmount");
    const iconEl = document.getElementById("eyeIcon");

    if (isBalanceHidden) {
        balanceEl.innerText = originalBalance;
        iconEl.classList.remove("ri-eye-off-line");
        iconEl.classList.add("ri-eye-line");
        isBalanceHidden = false;
    } else {
        balanceEl.innerText = hiddenBalance;
        iconEl.classList.remove("ri-eye-line");
        iconEl.classList.add("ri-eye-off-line");
        isBalanceHidden = true;
    }
}

// --- Simple Animation for Buttons ---
const buttons = document.querySelectorAll('.action-btn, .tx-item');

buttons.forEach(btn => {
    btn.addEventListener('click', function() {
        this.style.transform = "scale(0.95)";
        setTimeout(() => {
            this.style.transform = "scale(1)";
        }, 150);
    });
});