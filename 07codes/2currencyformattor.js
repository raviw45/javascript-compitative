const amount=12352.32;
console.log(new Intl.NumberFormat('en-US',
{
    style:'currency',
    currency:'INR'
}).format(amount));