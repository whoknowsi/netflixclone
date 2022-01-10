const KEY = '595b670b76d3fec3260d08b8bbea3958';
const BASE = 'https://api.themoviedb.org/3';
const lenguage = 'es-MX'

const fetchList = async (item) => {
    const get = await fetch(`${BASE}${item}&api_key=${KEY}&language=${lenguage}`);
    const json = await get.json();
    return json;
}

const getList = async () => {
    return [
        {
            title: "Originales de Netflix",
            items: await fetchList('/discover/tv?with_network=213')
        }, 
        {
            title: "Terror",
            items: await fetchList('/discover/movie?with_genres=27')
        }
    ]
}

const getBillboardInfo = async (movieId) => {
    let info = await fetchList(`/tv/${movieId}?`)
    return info;
}

export { getList, getBillboardInfo }