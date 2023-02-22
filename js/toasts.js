/*
 * Copyright 2023. Artem Sukhanov
 *
 * This is open source software. But copying, distribution, modification, use for commercial and personal purposes is prohibited by the author of this software. All other questions can be asked by mail: stakancheck@gmail.com
 */

const MARGIN = 10;
let shownToasts = [];
let toastHeight = window.innerHeight / 12;

function showToast(content, time, extraClass) {
    const toast = document.createElement("div");
    toast.innerHTML = content;
    toast.classList.add("toast", extraClass);
    toast.style.bottom = toastHeight + "px";
    document.getElementsByTagName("body")[0].appendChild(toast);
    shownToasts.push(toast);
    const { height } = toast.getBoundingClientRect();
    toastHeight += MARGIN + height;
    setTimeout(() => hideToast(toast), time);
}

function hideToast(toast) {
    shownToasts = shownToasts.filter(e => e !== toast);
    const { height } = toast.getBoundingClientRect();
    toastHeight -= MARGIN + height;
    document.getElementsByTagName("body")[0].removeChild(toast);
    adjustPositioning();
}

function adjustPositioning() {
    toastHeight = window.innerHeight / 12;
    for (let i = 0; i < shownToasts.length; i++) {
        const toast = shownToasts[i];
        toast.style.bottom = toastHeight + "px";
        const { height } = toast.getBoundingClientRect();
        toastHeight += MARGIN + height;
    }
}