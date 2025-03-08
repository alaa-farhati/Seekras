export const capitalizeFirstLetter = (text: string): string => {
    return text.charAt(0).toUpperCase() + text.slice(1);
};

// Example:
// capitalizeFirstLetter('hello') -> "Hello"

export const formatTunisianPhoneNumber = (phone: string): string => {
    return phone.replace(/(\d{2})(\d{3})(\d{3})/, "$1 $2 $3"); // Formats as XX XXX XXX
};

// Example:
// formatTunisianPhoneNumber('29292929') -> "29 292 929"

export const formatTunisianCurrency = (amount: number): string => {
    return new Intl.NumberFormat("fr-TN", {
        style: "currency",
        currency: "TND",
    }).format(amount);
};

// Example:
// formatTunisianCurrency(29292929) -> "29 292 929,00 TND"

console.log(formatTunisianCurrency(29292929)); // Output: "29 292 929,00 TND"
