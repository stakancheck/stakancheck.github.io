/*
 * Copyright 2023. Artem Sukhanov
 *
 * This is open source software. But copying, distribution, modification, use for commercial and personal purposes is prohibited by the author of this software. All other questions can be asked by mail: stakancheck@gmail.com
 */

window.addEventListener('load', init, false)

function init() {

    if (!(screen.orientation.type === "portrait-secondary") && !(screen.orientation.type === "portrait-primary")) {
        boxy_view()
    }
}


function boxy_view() {
    const nodes = [].slice.call(document.querySelectorAll("li.boxy-view-li"), 0);
    const directions = {0: 'top', 1: 'right', 2: 'bottom', 3: 'left'};
    const classNames = ['in', 'out'].map(p => Object.values(directions).map(d => `${p}-${d}`)).reduce((a, b) => a.concat(b));

    const getDirectionKey = (ev, node) => {
        const {width, height, top, left} = node.getBoundingClientRect();
        const l = ev.pageX - (left + window.pageXOffset);
        const t = ev.pageY - (top + window.pageYOffset);
        const x = l - width / 2 * (width > height ? height / width : 1);
        const y = t - height / 2 * (height > width ? width / height : 1);
        return Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
    };

    class Item {
        constructor(element) {
            this.element = element;
            this.element.addEventListener('mouseover', ev => this.update(ev, 'in'));
            this.element.addEventListener('mouseout', ev => this.update(ev, 'out'));
        }

        update(ev, prefix) {
            this.element.classList.remove(...classNames);
            this.element.classList.add(`${prefix}-${directions[getDirectionKey(ev, this.element)]}`);
        }
    }


    nodes.forEach(node => new Item(node));
}