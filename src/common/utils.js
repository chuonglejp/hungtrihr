export function loadText(data) {
    const language = getCookie('language') || 'vi';
    if (!data) return {};
    const ret = {};
    for (const key in data) {
        ret[key] = data[key][language];
    }
    return ret;
};

export function setCookie(key, value, expires = null) {
    if (!expires) {
        const d = new Date();
        // Cookie expires after 3 days
        d.setTime(d.getTime() + 3 * 24 * 60 * 60 * 1000);
        expires = 'expires=' + d.toUTCString();
    }
    document.cookie = `${key}=${value};expires=${expires}`;
}

export function getCookie(key) {
    const name = key + '=';
    const cookie = document.cookie;
    const cookieList = cookie.split(';');
    for (let i = 0; i < cookieList.length; i++) {
        let cookieItem = cookieList[i];
        while (cookieItem.charAt(0) === ' ') {
            cookieItem = cookieItem.substring(1);
        }
        if (cookieItem.indexOf(name) === 0) {
            return cookieItem.substring(name.length, cookieItem.length);
        }
    }
    return '';
}