export async function fetchunis(country) {
    const URL = `http://universities.hipolabs.com/search?country=${country}`;
    const response = await fetch(URL);
    if (response.ok) {
        return response.json();
    }
    throw new Error("fetch error");
}