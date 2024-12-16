export const getProducts = async () => {
    const res = await fetch('https://api.jsonbin.io/v3/qs/6760261dad19ca34f8dc02cf')
    return res.json();
};