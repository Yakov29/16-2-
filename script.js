const url = "http://www.omdbapi.com/?i=tt3896198&apikey=59743446";

      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          const movieInfo = document.getElementById("movieInfo");

          for (const key in data) {
            const li = document.createElement("li");
            li.textContent = `${key}: ${data[key]}`;
            movieInfo.appendChild(li);
          }
        })
        .catch((error) => {
          console.error(error);
        });