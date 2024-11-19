function getInputValueById(id) {
    const inputValue = parseFloat(document.getElementById(id).value);
    if (isNaN(inputValue) || inputValue === "" || inputValue <= 0) {
        alert("Invalid Donation Amount");
    } else {
        document.getElementById('my_modal_4').showModal();
    }
    return inputValue;
}

function getPastAmount(id) {
    return parseFloat(document.getElementById(id).innerText);
}

function historyDonation(id, area, help) {
    const donationTaka = getInputValueById(id);
    const historyContainer = document.getElementById('history-section');

    if (donationTaka > 0) {
        const realTime = new Date().toLocaleString('en-GB', { timeZoneName: 'short' });
        document.getElementById('history-section');
        const historyItem = document.createElement('div');
        historyItem.className = 'p-5 border-2 rounded-md shadow-md mt-4'
        historyItem.innerHTML = `
        <p class='font-bold mb-5'>${donationTaka} Taka is donated for ${help} at ${area},Bangladesh</p>
        <p class='text-gray-500'>Date:${realTime}</p>
            `;
        historyContainer.appendChild(historyItem);
    }
}

document.getElementById("noakhali-donate-button").addEventListener("click", function () {
    const noakhaliInputValue = getInputValueById('nouakhali-input-value');
    const noakhaliDonateAmountValue = document.getElementById('noakhali-donate-amount');
    const noakhaliCurrentDonateAmount = parseFloat(noakhaliDonateAmountValue.innerText);
    const newAmountAddNoakhali = noakhaliCurrentDonateAmount + parseFloat(noakhaliInputValue);
    noakhaliDonateAmountValue.innerText = newAmountAddNoakhali;
    const yourAmountValue = getPastAmount('your-amount')
    const newTotalBalance = yourAmountValue - parseFloat(noakhaliInputValue);
    document.getElementById('your-amount').innerText = newTotalBalance;
});

document.getElementById("feni-donate-button").addEventListener("click", function () {
    const feniInputValue = getInputValueById('feni-input-value');
    const feniDonateAmountValue = document.getElementById('feni-donate-amount');
    const feniCurrentDonateAmount = parseFloat(feniDonateAmountValue.innerText);
    const newAmountAddfeni = feniCurrentDonateAmount + parseFloat(feniInputValue);
    feniDonateAmountValue.innerText = newAmountAddfeni;
    const yourAmountValue = getPastAmount('your-amount')
    const newTotalBalance = yourAmountValue - parseFloat(feniInputValue);
    document.getElementById('your-amount').innerText = newTotalBalance;
});

document.getElementById("quota-donate-button").addEventListener("click", function () {
    const quotaInputValue = getInputValueById('quota-input-value');
    const quotaDonateAmountValue = document.getElementById('quota-donate-amount');
    const quotaCurrentDonateAmount = parseFloat(quotaDonateAmountValue.innerText);
    const newAmountAddquota = quotaCurrentDonateAmount + parseFloat(quotaInputValue);
    quotaDonateAmountValue.innerText = newAmountAddquota;
    const yourAmountValue = getPastAmount('your-amount')
    const newTotalBalance = yourAmountValue - parseFloat(quotaInputValue);
    document.getElementById('your-amount').innerText = newTotalBalance;
});


const historyTab = document.getElementById("history-tab");
const donateTab = document.getElementById("donation-tab");

historyTab.addEventListener("click", function () {

    historyTab.classList.add("bg-[#B4F461]", "font-bold");
    donateTab.classList.remove("bg-[#B4F461]", "font-bold");

    document.getElementById("noakhali-donate-card").classList.add("hidden");
    document.getElementById("feni-donate-card").classList.add("hidden");
    document.getElementById("quota-donate-card").classList.add("hidden");
    document.getElementById('history-section').classList.remove('hidden')

    // donation btn

    donateTab.addEventListener('click', function () {
        donateTab.classList.add(
            'bg-[#B4F461]'
        )
        historyTab.classList.remove(
            "bg-[#B4F461]"
        )
        document.getElementById('history-section').classList.add('hidden');
        document.getElementById("noakhali-donate-card").classList.remove("hidden");
        document.getElementById("feni-donate-card").classList.remove("hidden");
        document.getElementById("quota-donate-card").classList.remove("hidden");
    })
});





