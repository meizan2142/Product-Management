export const getProducts = async () => {
    const res = await fetch('https://api.jsonbin.io/v3/qs/6762c1f9e41b4d34e4677e5d')
    return res.json();
};