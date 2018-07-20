function preloader() {
	const imagesList = [
           "./img/solar.jpg",
           "./img/hydro.jpg",
           "./img/wind.jpg"
        ];
	const images = [];
	for (let i = 0; i < imagesList.length; i++) {
		images[i] = new Image();
		images[i].src = imagesList[i];
	}

	console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};
window.addEventListener("load", preloader);

let btns = document.querySelectorAll(".navigation button");

let content = {
	solar: {
		headingContent: "Solar Energy",
		bodyText: "Solar energy is the technology used to harness the sun's energy and make it useable. As of 2011, the technology produced less than one tenth of one percent of global energy demand. Many are familiar with so-called photovoltaic cells, or solar panels, found on things like spacecraft, rooftops, and handheld calculators.",
		imgUrl: "./img/solar.jpg",
		imgAlt: "solar"
	},
	hydro: {
		headingContent: "Hydro Energy",
		bodyText: "Hydropower is electricity generated using the energy of moving water. Rain or melted snow, usually originating in hills and mountains, create streams and rivers that eventually run to the ocean. The energy of that moving water can be substantial, as anyone who has been whitewater rafting knows.",
		imgUrl: "./img/hydro.jpg",
		imgAlt: "hydro"
	},
	wind: {
		headingContent: "Wind Energy",
		bodyText: "Wind is the movement of air from an area of high pressure to an area of low pressure. In fact, wind exists because the sun unevenly heats the surface of the Earth. As hot air rises, cooler air moves in to fill the void. As long as the sun shines, the wind will blow. And wind has long served as a power source to humans.",
		imgUrl: "./img/wind.jpg",
		imgAlt: "wind"
	}
}

let container = document.querySelector(".container");

btns[0].setAttribute("id", "active");


container.innerHTML = `<h1>${content.solar.headingContent}</h1><img src="${content.solar.imgUrl}" alt="${content.solar.imgAlt}"><p>${content.solar.bodyText}</p>`;

function handleSelection() {

	for (let i = 0; i < btns.length; i++) {
		if (btns[i].hasAttribute("id")) {
			btns[i].removeAttribute("id");
		}
	}

	this.setAttribute("id", "active");

	for (let i = 0; i < btns.length; i++) {
		if (btns[i].hasAttribute("id")) {
			if (i == 0) {
				container.innerHTML = `<h1>${content.solar.headingContent}</h1><img src="${content.solar.imgUrl}" alt="${content.solar.imgAlt}"><p>${content.solar.bodyText}</p>`;
			}
			if (i == 1) {
				container.innerHTML = `<h1>${content.hydro.headingContent}</h1><img src="${content.hydro.imgUrl}" alt="${content.hydro.imgAlt}"><p>${content.hydro.bodyText}</p>`;
			}
			if (i == 2) {
				container.innerHTML = `<h1>${content.wind.headingContent}</h1><img src="${content.wind.imgUrl}" alt="${content.wind.imgAlt}"><p>${content.wind.bodyText}</p>`;
			}
		}
	}
}

for (let i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", handleSelection);
}
