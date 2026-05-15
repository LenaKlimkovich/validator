export function detectPaymentSystem(number) {
    const digits = number.replace(/\s+/g, '');

    if (digits.startsWith('4')) {
        return 'visa';
    }

    const firstTwo = parseInt(digits.slice(0, 2), 10);
    const firstThree = parseInt(digits.slice(0, 3), 10);
    const firstFour = parseInt(digits.slice(0, 4), 10);
    const firstSix = parseInt(digits.slice(0, 6), 10);

    // Мир: 2200–2204
    if (firstFour >= 2200 && firstFour <= 2204) {
        return 'mir';
    }
   // JCB: 3528–3589
   if (firstFour >= 3528 && firstFour <= 3589) {
    return 'jcb';
    }

    // Mastercard: 51–55
    if (firstTwo >= 51 && firstTwo <= 55) {
        return 'mastercard';
    }

    // Mastercard: 2221–2720
    if (firstFour >= 2221 && firstFour <= 2720) {
        return 'mastercard';
    }

    // American Express: 34, 37
    if (firstTwo === 34 || firstTwo === 37) {
        return 'amex';
    }

    // UnionPay: 62...
    if (digits.startsWith('62')) {
        return 'unionpay';
    }

    return 'unknown';
}
