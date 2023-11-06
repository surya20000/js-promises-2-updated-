const initialCookies = [{ name: "Chocolate Cookies" }, { name: "Macaron Cookies" }];
const newCookie = { name: "Biscotti Cookies" };

// Progression 1: create a function to get all the cookies
function getCookies() {
  // Progression 2: using setTimeout()
  setTimeout(() => {
    let output = "";
    initialCookies.forEach(cookie => {
      output += `<li>${cookie.name}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

// Progression 3: Create a function to create cookies and create an object of Promise.
function createCookie(newCookie) {
  return new Promise((resolve, reject) => {
    // Progression 4: adding two parameters and using setTimeout()
    setTimeout(() => {
      // Progression 5: handling errors and adding a new cookie to the list
      initialCookies.push(newCookie);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject('There are no such cookies');
      }
    }, 2000);
  });
}

// Progression 7: creating a new async function
async function main() {
  try {
    await createCookie(newCookie);
    getCookies();
  } catch (error) {
    console.error(error);
  }
}

// calling the new async function
main();
