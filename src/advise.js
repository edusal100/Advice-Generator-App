async function getAdvise() {
    const adviseContainer = document.querySelector('#adviseContainer');
    adviseContainer.classList.add('animate-pulse');
    const response = await fetch('https://api.adviceslip.com/advice'); 
    const adviseSlip = await response.json();
    const advise = adviseSlip.slip.advice;
    const adviseNumber = adviseSlip.slip.id;
    const updateAdvise = document.querySelector('#adviseText');
    const updateAdivseNumber = document.querySelector('#adviseNum');
    updateAdvise.textContent = '"' + advise + '"';
    updateAdivseNumber.textContent = 'ADVISE #' + adviseNumber;
    adviseContainer.classList.remove('animate-pulse');    
}