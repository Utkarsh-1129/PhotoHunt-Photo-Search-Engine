// API Configuration
const accessKey = "BReqbzgBE3GpsRoXZE9yAlIiEyjT4ryLb80DyG-Ufwc";

// DOM Elements
const searchForm = document.getElementById("searchform");
const searchBox = document.getElementById("searchbox");
const searchResult = document.getElementById("search-result");
const showMore = document.getElementById("showmore");
const loading = document.getElementById("loading");
const downloadModal = document.getElementById("downloadModal");
const closeModal = document.querySelector(".close");
const downloadButtons = document.querySelectorAll(".download-btn");

// State variables
let keyword = "";
let page = 1;
let currentImageData = null;

// Event listeners
searchForm.addEventListener("submit", handleSearch);
showMore.addEventListener("click", loadMoreImages);
closeModal.addEventListener("click", closeDownloadModal);
window.addEventListener("click", outsideModalClick);

// Add event listeners to download buttons
downloadButtons.forEach(button => {
    button.addEventListener("click", handleDownload);
});

// Functions
function handleSearch(e) {
    e.preventDefault();
    keyword = searchBox.value.trim();
    page = 1;
    
    if (!keyword) {
        showEmptyState("Please enter a search term");
        return;
    }
    
    searchImages();
}

function loadMoreImages() {
    page++;
    searchImages();
}

async function searchImages() {
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    setLoading(true);
    
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('API request failed');
        
        const data = await response.json();
        const results = data.results;

        if (page === 1) {
            searchResult.innerHTML = ''; 
        }

        if (results.length === 0 && page === 1) {
            showEmptyState("No images found. Try searching for something else.");
            showMore.classList.add("hidden");
            setLoading(false);
            return;
        }

        displayImages(results);

        if (results.length > 0) {
            showMore.style.display = "flex";
        } else {
            showMore.style.display = "none";
        }
    } catch (error) {
        console.error("Error fetching images:", error);
        showEmptyState("Failed to load images. Please try again later.");
        showMore.style.display = "none";
    }
    
    setLoading(false);
}

function displayImages(images) {
    images.forEach((image) => {
        const imageCard = document.createElement("div");
        imageCard.className = "image-card";
        
        const imageLink = document.createElement("a");
        imageLink.href = image.links.html;
        imageLink.target = "_blank";
        imageLink.className = "image-card__link";
        
        const img = document.createElement("img");
        img.src = image.urls.small;
        img.alt = image.alt_description || 'Unsplash Image';
        img.className = "image-card__image";
        
        const actions = document.createElement("div");
        actions.className = "image-card__actions";
        
        const downloadBtn = document.createElement("button");
        downloadBtn.className = "action-btn download-btn-action";
        downloadBtn.innerHTML = '<i class="fas fa-download"></i>';
        downloadBtn.title = "Download image";
        downloadBtn.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            openDownloadModal(image);
        });
        
        const likeBtn = document.createElement("button");
        likeBtn.className = "action-btn like-btn";
        likeBtn.innerHTML = '<i class="fas fa-heart"></i>';
        likeBtn.title = "Like image";
        
        actions.appendChild(downloadBtn);
        actions.appendChild(likeBtn);
        
        imageLink.appendChild(img);
        imageLink.appendChild(actions);
        
        const info = document.createElement("div");
        info.className = "image-card__info";
        
        const user = document.createElement("div");
        user.className = "image-card__user";
        user.innerHTML = `<i class="fas fa-user"></i> ${image.user.name}`;
        
        const description = document.createElement("div");
        description.className = "image-card__description";
        description.textContent = image.description || "No description available";
        
        const stats = document.createElement("div");
        stats.className = "image-card__stats";
        
        const likes = document.createElement("div");
        likes.className = "image-card__stat";
        likes.innerHTML = `<i class="fas fa-heart"></i> ${image.likes}`;
        
        const downloads = document.createElement("div");
        downloads.className = "image-card__stat";
        downloads.innerHTML = `<i class="fas fa-download"></i> ${image.downloads || 0}`;
        
        stats.appendChild(likes);
        stats.appendChild(downloads);
        
        info.appendChild(user);
        info.appendChild(description);
        info.appendChild(stats);
        
        imageCard.appendChild(imageLink);
        imageCard.appendChild(info);
        
        searchResult.appendChild(imageCard);
    });
}

function openDownloadModal(imageData) {
    currentImageData = imageData;
    downloadModal.style.display = "block";
}

function closeDownloadModal() {
    downloadModal.style.display = "none";
    currentImageData = null;
}

function outsideModalClick(e) {
    if (e.target === downloadModal) {
        closeDownloadModal();
    }
}

function handleDownload(e) {
    if (!currentImageData) return;
    
    const size = e.target.getAttribute("data-size");
    let downloadUrl;
    
    // Determine which image size to download based on selection
    switch(size) {
        case "small":
            downloadUrl = currentImageData.urls.small;
            break;
        case "medium":
            downloadUrl = currentImageData.urls.regular;
            break;
        case "large":
            downloadUrl = currentImageData.urls.full;
            break;
        default:
            downloadUrl = currentImageData.urls.regular;
    }
    
    // Create a temporary anchor element to trigger download
    const a = document.createElement('a');
    a.href = downloadUrl;
    a.download = `photo-${currentImageData.id}-${size}.jpg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    // Close the modal after download
    closeDownloadModal();
    
    // Show a brief confirmation
    showDownloadConfirmation();
}

function showDownloadConfirmation() {
    // Create a temporary confirmation message
    const confirmation = document.createElement('div');
    confirmation.textContent = 'Download started!';
    confirmation.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--accent-color);
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        z-index: 1001;
        animation: fadeOut 3s forwards;
    `;
    
    document.body.appendChild(confirmation);
    
    // Remove the confirmation after 3 seconds
    setTimeout(() => {
        document.body.removeChild(confirmation);
    }, 3000);
}

function setLoading(isLoading) {
    loading.style.display = isLoading ? 'block' : 'none';
}

function showEmptyState(message) {
    searchResult.innerHTML = `
        <div class="empty-state">
            <h3>${message}</h3>
            <p>Try searching for landscapes, animals, people, or anything else!</p>
        </div>
    `;
}

// Initialize with an empty state
showEmptyState("Search for amazing images");
