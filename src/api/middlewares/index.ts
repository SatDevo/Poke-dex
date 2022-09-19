export default async (url: string) =>
  // TODO Token logic
  fetch(url)
    .then(response => response.json())
    .catch(error => {
      // TODO Handle API Error
    })
