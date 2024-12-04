// Assume the `list` variable is loaded from list.js
const listContainer = document.getElementById("list");

if (typeof list !== 'undefined' && Array.isArray(list)) {
  // Clear any existing content (e.g., "Loading..." placeholder)
  listContainer.innerHTML = '';

  // Loop through each item in the list
  list.forEach(item => {
    // Create the main item container
    const itemDiv = document.createElement("div");
    itemDiv.className = "item";

    // Create the image element
    const image = document.createElement("img");
    image.src = item.url;
    image.alt = `Item ${item.rank}`;
    image.loading = "lazy"; // Improve performance with lazy loading
	
	// Create the link for the item
    const link = document.createElement("a");
    link.href = `https://t.me/notpixel/app?startapp=f${item.id}_t`;
    link.target = "_blank"; // Open in a new tab
    link.textContent = "Link";

    // Create the details container
    const detailsDiv = document.createElement("div");
    detailsDiv.className = "details";

    // Fill in the item details
    detailsDiv.innerHTML = `
      <p class="rank">Rank: ${item.rank}</p>
      <p>Subscribers: ${item.subscribers}</p>
      <p>Repaints: ${item.repaints}</p>
      <p>Created At: ${new Date(item.createdAt).toLocaleString()}</p>
    `;

    // Append the image and details to the item container
    itemDiv.appendChild(image);
    itemDiv.appendChild(detailsDiv);
	itemDiv.appendChild(link);

    // Append the item to the main list container
    listContainer.appendChild(itemDiv);
  });
} else {
  // Display an error if `list` is not defined or invalid
  listContainer.innerHTML = `<p>Error: Data could not be loaded.</p>`;
}