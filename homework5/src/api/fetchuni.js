export async function fetchuni(domain) {
    const URL = `http://universities.hipolabs.com/search?domain=${domain}`;
    const response = await fetch(URL);
    if (response.ok) {
        return response.json();
    }
    throw new Error("fetch error");
}