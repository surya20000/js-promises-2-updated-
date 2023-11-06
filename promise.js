const originalCookies = [{ name: "Chocolate Cookies" }, { name: "Macaron Cookies" }];
const newCookie = { name: "Biscotti Cookies" };

function getCookies() {
  setTimeout(() => {
    let output = "";
    originalCookies.forEach(cookie => {
      output += `<li>${cookie.name}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createCookie(newCookie) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      originalCookies.push(newCookie);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject('There are no such cookies');
      }
    }, 2000);
  });
}

createCookie(newCookie).then(getCookies);
