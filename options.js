const nameInput = document.getElementById("name-input")
const saveBtn = document.getElementById("save-btn")
const timeInput = document.getElementById("time-input")
saveBtn.addEventListener("click",()=>{
    const name = nameInput.value
    const notificationTIme = timeInput.value
    chrome.storage.sync.set({
        name,
        notificationTIme,
    })
    })

chrome.storage.sync.get(["name"],(res)=>{
    nameInput.value = res.name??"???"
    timeInput.value = res.notificationTime?? 10000
})
