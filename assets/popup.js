(async () => {

    const toggle = document.querySelector("img");
    const input = document.querySelector("input");

    toggle.addEventListener("click", toggleState);
    input.addEventListener("input", updateValue);

    const urlResult = await browser.storage.local.get({"xredirect.url": "nitter.net"});

    if (urlResult["xredirect.url"] !== "nitter.net") {
        input.value = urlResult["xredirect.url"];
    } else {
        input.placeholder= urlResult["xredirect.url"];
    }

    let result = await browser.storage.local.get({"xredirect.enabled": true});
    let enabled = result["xredirect.enabled"];

    function updateState() {
        if (enabled) {
            toggle.src = "assets/icon-128.png";
        }
        else {
            toggle.src = "assets/off-128.png";
        }
    }

    async function toggleState() {
        enabled = !enabled;
        await browser.storage.local.set({"xredirect.enabled": enabled});
        updateState();
    }

    async function updateValue() {
        await browser.storage.local.set({
            "xredirect.url": input.value || "nitter.net"
        });
    }

    updateState();
})();