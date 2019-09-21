function dispOs() {
    const getDiv = document.getElementById('os');
    const getResult = document.getElementById('result');
    if (!getResult) {
        getDiv.insertAdjacentHTML('afterbegin','<p id="result">' + getOs() + '</p>');
    }
    else {
        getResult.innerHTML = getOs();
    }
}

const os = navigator.userAgent;
let result;

function getOs() {
    if (os.match(/Win(dows )?NT 10\.0/)) {
        result = "Windows 10";
    }
    else if (os.match(/Win(dows )?NT 6\.3/) || os.match(/Win(dows )?NT 6\.2/)) {
        result = "Windows 8/8.1";
    }
    else if (os.match(/Win(dows )?NT 6\.1/)) {
        result = "Windows 7";
    }
    else if (os.match(/Win(dows )?NT 6\.0/)) {
        result = "Windows Vista";
    }
    else if (os.match(/Win(dows )?(NT 5\.1|XP)/)) {
        result = "Windows XP";
    }
    else if (os.match(/iPhone|iPad/)) {
        result = "iPhone/iPad";
    }
    else if (os.match(/Mac|PPC/)) {
        result = "MacOS";
    }
    else if (os.match(/Android ([\.\d]+)/)) {
        result = "Android " + RegExp.$1;
    }
    else if (os.match(/Linux/)) {
        result = "Linux";
    }
    else {
        result = "その他のOS";
    }
    return result;
}