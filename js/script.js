// function to get id

function getElement(id) {
    const element = document.getElementById(id);
    return element;
}
 

// *******delegation technique********

// ********FIRST REQUIREMENT**********
// HEART ICON FUNCTIONALITIES

document.getElementById('card-container').addEventListener('click', function (e) {
    if (e.target.className.includes('heart-icon')) {
        /* const btns = document.getElementsByClassName('heart-icon');
           for(const btn of btns){
             btn.addEventListener('click', function(){
                 btn.style.backgroundColor ='red'
             })
         }*/
        const total = getElement('total-love').innerText;
        const currenttotal = Number(total) + 1;
        getElement('total-love').innerText = currenttotal;
    }
    if (e.target.className.includes('copy-btn')) {
        // const copyData = document.getElementsByClassName()
        const totalCopy = getElement('total-copy').innerText;
        const currentCopy = Number(totalCopy) + 1;
        getElement('total-copy').innerText = currentCopy;
    }
})


// ********** CALL BUTTON FUNCTIONALITIES**********


const buttons = document.getElementsByClassName('call-btn');
for (const button of buttons) {
    button.addEventListener('click', function () {
        // local time 
        const now = new Date();
        const localTime = now.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
        const cardTitle = button.parentNode.parentNode.children[2].innerText
        // console.log(cardTitle)
        const dialingNumber = button.parentNode.parentNode.children[3].innerText
        // console.log(dialingNumber)
        // calling button functionalities
        const call = '📞 calling'
        const totalCoin = getElement('total-coin').innerText;

        if (totalCoin >= 20) {
            alert(`${call} ${cardTitle} ${dialingNumber}`)

            // alert(cardTitle+" - "+dialingNumber)

            const currentCoin = Number(totalCoin) - 20;
            getElement('total-coin').innerText = currentCoin;
            const historyCard = getElement('history-card');
            //create new card
            const newCard = document.createElement('div');
            newCard.innerHTML = `
        <div class="flex justify-between items-center p-4 bg-[#fafafa]">
                    <div class="">
                        <h3 class="mb-2">${cardTitle}</h3>
                        <span class="text-gray-600">${dialingNumber}</span>
                    </div>
                    <p class="font-medium">${localTime}</p>
                </div>
        `
            historyCard.appendChild(newCard);
        }
        else {
            alert("❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
        }

    })
}

//*********COPY BUTTON FUNCTIONALITIES  ***************/


const copyBtns = document.getElementsByClassName('copy-btn');
for (const copyBtn of copyBtns) {
    copyBtn.addEventListener('click', function () {
        const dialingNumber = copyBtn.parentNode.parentNode.children[3].innerText
        // console.log(dialingNumber)
        navigator.clipboard.writeText(dialingNumber)
            .then(() => {
                alert("নম্বর কপি হয়েছে: " + dialingNumber);
            })
    })
}


//***********CLEAR BUTTON FUNCTIONALITIES */

getElement('clear-btn').addEventListener('click', function () {
    const cardContainer = getElement('history-card');
    cardContainer.innerText = "";
})