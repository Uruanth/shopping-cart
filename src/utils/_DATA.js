let phones = {
    Techno: {
        brand: "Techno",
        inCart: 'false', // or "in",
        price: 10
    },
    Apple: {
        brand: "Iphone",
        inCart: "false",
        price: 30
    },
    Samsung: {
        brand: "Samsung",
        inCart: "false",
        price: 40
    },
    Hauwei: {
        brand: "Hauwei",
        inCart: "false",
        price: 70
    },
    HTC: {
        brand: "HTC",
        inCart: "false",
        price: 100
    }
}


export function _getPhones() {
    return new Promise((res, rej) => {
        setTimeout(() => res({
            ...phones
        }), 1000);
    });
}
export function setInCart({
    id,
    inCart
}) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            phones = {
                ...phones,
                id: {
                    ...phones[id],
                    inCart: inCart
                }
            }
            res()
        }, 500);
    });
}