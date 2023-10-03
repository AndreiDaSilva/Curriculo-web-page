async function fetchProfileData(){
    const url = 'https://raw.githubusercontent.com/AndreiDaSilva/Curriculo-web-page/main/data/profile.json'
    const fetching = await fetch(url)
    return await fetching.json()
}