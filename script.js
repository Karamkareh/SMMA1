function calculateCLV() {
    const avgPurchaseValue = parseFloat(document.getElementById('avgPurchaseValue').value);
    const costOfGoods = parseFloat(document.getElementById('costOfGoods').value);
    const annualPurchases = parseFloat(document.getElementById('annualPurchases').value);
    const customerLifespan = parseFloat(document.getElementById('customerLifespan').value);

    const profitPerPurchase = avgPurchaseValue - costOfGoods;
    const annualProfit = profitPerPurchase * annualPurchases;
    const clv = annualProfit * customerLifespan;

    document.getElementById('clvResult').innerText = clv.toFixed(2);
}