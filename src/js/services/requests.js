async function postData(url, data) {
  //! Взаимодействие с сервером

  // let res = await fetch(url, {
  //   method: 'POST',
  //   body: data,
  // });

  // return await res.text();

  return new Promise((resolve) => {
    setTimeout(resolve, 500);
  });
}

async function getResource(url) {
  let res = await fetch(url);
  if (!res.ok) throw new Error(`Could not fetch ${url}, status: ${res.status}`);

  return await res.json();
}

export { postData, getResource };
