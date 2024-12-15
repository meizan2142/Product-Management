export const getProducts = async () => {
    const res = await fetch('https://api.jsonbin.io/v3/qs/675e80d6ad19ca34f8db606f')
    return res.json();
};