const list = [
  {
    id: 6355200889,
    url: "https://static.notpx.app/tournament/6355200889-2.png",
    x: 960,
    y: 768,
    imageSize: 64,
    approved: true,
    roundID: 3,
    loseRoundID: 0,
    createdAt: "2024-12-03T09:03:26.308131Z",
    updatedAt: "2024-12-03T09:03:26.308131Z",
    rank: 1,
    repaints: 362479,
    lastSurvivalRank: 128,
    lastSurvivalRepaints: 135946,
    subscribers: 132666,
  },
  {
    id: 575074575,
    url: "https://static.notpx.app/tournament/575074575-2.png",
    x: 512,
    y: 192,
    imageSize: 64,
    approved: true,
    roundID: 3,
    loseRoundID: 0,
    createdAt: "2024-12-03T09:03:26.308131Z",
    updatedAt: "2024-12-03T09:03:26.308131Z",
    rank: 2,
    repaints: 245466,
    lastSurvivalRank: 128,
    lastSurvivalRepaints: 135946,
    subscribers: 41364,
  },
  {
    id: 1972552043,
    url: "https://static.notpx.app/tournament/1972552043-2.png",
    x: 640,
    y: 704,
    imageSize: 64,
    approved: true,
    roundID: 3,
    loseRoundID: 0,
    createdAt: "2024-12-03T09:03:26.308131Z",
    updatedAt: "2024-12-03T09:03:26.308131Z",
    rank: 3,
    repaints: 201098,
    lastSurvivalRank: 128,
    lastSurvivalRepaints: 135946,
    subscribers: 74508,
  },
];

const listContainer = document.getElementById("list");

list.forEach(item => {
  const itemDiv = document.createElement("div");
  itemDiv.className = "item";

  const image = document.createElement("img");
  image.src = item.url;
  image.alt = `Item ${item.rank}`;

  const detailsDiv = document.createElement("div");
  detailsDiv.className = "details";

  detailsDiv.innerHTML = `
    <p class="rank">Rank: ${item.rank}</p>
    <p>Subscribers: ${item.subscribers}</p>
    <p>Repaints: ${item.repaints}</p>
    <p>Created At: ${new Date(item.createdAt).toLocaleString()}</p>
  `;

  itemDiv.appendChild(image);
  itemDiv.appendChild(detailsDiv);
  listContainer.appendChild(itemDiv);
});