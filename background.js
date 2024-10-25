chrome.alarms.create({
    periodInMinutes: 1/60,  // runs every second
});

chrome.alarms.onAlarm.addListener((alarm) => {
    chrome.storage.local.get(["timer"], (res) => {
        const time = res.timer ?? 0;
        
        chrome.storage.local.set({
            timer: time + 1
        });
        
        chrome.action.setBadgeText({
            text: `${time + 1}`
        });
        chrome.storage.sync.get(["notificationTime"],(res)=>{
            const notificationTime = res.notificationTime??1000
        if (time%notificationTime==0){
        this.registration.showNotification("Timer ext", {
            body: `${notificationTime} seconds have passed`,
            icon: "icon.png"
        })
    }
    })
})
})
