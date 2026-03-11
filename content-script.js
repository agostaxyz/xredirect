async function init () {
    const defaults = {"xredirect.enabled": true, "xredirect.url": "nitter.net"};
    const result = await browser.storage.local.get(defaults);

    const enabled = result["xredirect.enabled"];
    const newurl = result["xredirect.url"];

    const url = new URL(window.location.href);
    if (enabled && url.hostname === "x.com") {
    url.hostname = newurl;
    document.location.href = url.href;
}

}

init().catch(console.error);