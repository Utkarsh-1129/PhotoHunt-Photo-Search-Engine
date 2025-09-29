/* ===== CSS VARIABLES ===== */
:root {
    --primary-bg-color: rgb(72, 75, 75);
    --secondary-bg-color: #2c2d2e;
    --accent-color: #e74c3c;
    --accent-hover: #c0392b;
    --text-color: #fff;
    --link-hover: gold;
    --border-radius: 8px;
    --spacing-sm: 10px;
    --spacing-md: 20px;
    --spacing-lg: 50px;
    --spacing-xl: 100px;
    --modal-bg: rgba(0, 0, 0, 0.8);
}

/* ===== RESET & BASE STYLES ===== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(--text-color);
}

body {
    background-color: var(--primary-bg-color);
    color: var(--text-color);
    text-align: center;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* ===== LAYOUT COMPONENTS ===== */
.container {
    flex: 1;
    display: flex;
    flex-direction: column;
}

/* ===== HEADER/NAVBAR COMPONENT ===== */
.navbar {
    padding: var(--spacing-lg);
    background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3');
    background-size: cover;
    background-position: center;
    margin-bottom: 20px;
}

.navbar__title {
    font-size: 3rem;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
    letter-spacing: 1px;
}

/* ===== SEARCH COMPONENT ===== */
.search-section {
    padding: var(--spacing-lg) 0;
    flex: 1;
}

.search-form {
    width: 90%;
    max-width: 600px;
    margin: 0 auto;
    height: 60px;
    background-color: var(--secondary-bg-color);
    display: flex;
    align-items: center;
    border-radius: var(--border-radius);
    margin-top: var(--spacing-lg);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
}

.search-form:focus-within {
    box-shadow: 0 4px 15px rgba(231, 76, 60, 0.3);
}

.search-form__input {
    flex: 1;
    height: 100%;
    border: 0;
    outline: 0;
    background-color: var(--secondary-bg-color);
    color: var(--text-color);
    font-size: 1.125rem;
    padding: 0 var(--spacing-md);
}

.search-form__button {
    padding: 0 var(--spacing-md);
    height: 100%;
    background: var(--accent-color);
    font-size: 1.125rem;
    border: 0;
    outline: 0;
    border-top-right-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 8px;
}

.search-form__button:hover {
    background-color: var(--accent-hover);
}

.search-form__input::placeholder {
    color: #ddd;
    font-size: 1.125rem;
}

.search-info {
    margin-top: 15px;
    color: #ddd;
    font-size: 14px;
}

/* ===== RESULTS COMPONENT ===== */
.results-section {
    width: 90%;
    margin: var(--spacing-xl) auto var(--spacing-lg);
}

.results-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-gap: var(--spacing-md);
    margin-bottom: var(--spacing-lg);
}

.image-card {
    border-radius: var(--border-radius);
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    background-color: var(--secondary-bg-color);
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
}

.image-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.image-card__link {
    display: block;
    position: relative;
    overflow: hidden;
}

.image-card__image {
    width: 100%;
    height: 230px;
    object-fit: cover;
    display: block;
    transition: transform 0.5s ease;
}

.image-card:hover .image-card__image {
    transform: scale(1.05);
}

.image-card__actions {
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    gap: 8px;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.image-card:hover .image-card__actions {
    opacity: 1;
}

.action-btn {
    background: rgba(0, 0, 0, 0.7);
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.3s ease;
}

.action-btn:hover {
    background: rgba(0, 0, 0, 0.9);
}

.action-btn i {
    font-size: 16px;
}

.download-btn-action {
    color: #fff;
}

.like-btn {
    color: #e74c3c;
}

.image-card__info {
    padding: 15px;
    text-align: left;
    flex: 1;
    display: flex;
    flex-direction: column;
}

.image-card__user {
    font-weight: 600;
    margin-bottom: 5px;
    color: #fff;
    display: flex;
    align-items: center;
    gap: 8px;
}

.image-card__description {
    color: #bbb;
    font-size: 14px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    flex: 1;
    margin-bottom: 10px;
}

.image-card__stats {
    display: flex;
    align-items: center;
    margin-top: auto;
    color: #ddd;
    font-size: 14px;
    gap: 15px;
}

.image-card__stat {
    display: flex;
    align-items: center;
    gap: 5px;
}

.image-card__stat i {
    color: var(--accent-color);
}

/* ===== LOAD MORE COMPONENT ===== */
.load-more {
    background: var(--accent-color);
    padding: var(--spacing-sm) var(--spacing-md);
    font-size: 1rem;
    border: 0;
    outline: 0;
    margin: 0 auto var(--spacing-xl);
    cursor: pointer;
    border-radius: var(--border-radius);
    transition: all 0.3s ease;
    display: none;
    font-weight: 600;
    box-shadow: 0 4px 10px rgba(231, 76, 60, 0.3);
    display: flex;
    align-items: center;
    gap: 8px;
}

.load-more:hover {
    background-color: var(--accent-hover);
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(231, 76, 60, 0.4);
}

/* ===== LOADING COMPONENT ===== */
.loading {
    display: none;
    text-align: center;
    margin: 30px 0;
}

.loading-spinner {
    border: 5px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    border-top: 5px solid var(--accent-color);
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
    margin: 0 auto;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

/* ===== EMPTY STATE ===== */
.empty-state {
    text-align: center;
    padding: 50px 20px;
    color: #ddd;
    grid-column: 1 / -1;
}

.empty-state h3 {
    margin-bottom: 15px;
    font-size: 1.5rem;
}

/* ===== MODAL STYLES ===== */
.modal {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: var(--modal-bg);
    animation: fadeIn 0.3s;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.modal-content {
    background-color: var(--secondary-bg-color);
    margin: 10% auto;
    padding: var(--spacing-md);
    border-radius: var(--border-radius);
    width: 90%;
    max-width: 600px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
    position: relative;
    animation: slideIn 0.3s;
}

@keyframes slideIn {
    from { transform: translateY(-50px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
}

.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
    line-height: 1;
}

.close:hover {
    color: var(--text-color);
}

.modal-content h2 {
    margin-bottom: var(--spacing-md);
    text-align: center;
}

.download-options {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: var(--spacing-md);
    margin-top: var(--spacing-md);
}

.option {
    background: rgba(255, 255, 255, 0.1);
    padding: var(--spacing-md);
    border-radius: var(--border-radius);
    text-align: center;
}

.option h3 {
    margin-bottom: 5px;
    color: var(--accent-color);
}

.option p {
    margin-bottom: 15px;
    font-size: 14px;
    color: #bbb;
}

.download-btn {
    background: var(--accent-color);
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: var(--border-radius);
    cursor: pointer;
    font-weight: 600;
    transition: background 0.3s ease;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

.download-btn:hover {
    background: var(--accent-hover);
}

/* ===== FOOTER COMPONENT ===== */
.footer {
    color: var(--text-color);
    text-align: center;
    padding: var(--spacing-sm);
    background-image: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3');
    background-size: cover;
    background-position: center;
    margin-top: auto;
}

.footer__content {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
}

.footer__link {
    color: var(--text-color);
    text-decoration: none;
    transition: color 0.3s ease;
}

.footer__link:hover {
    color: var(--link-hover);
}

/* ===== UTILITY CLASSES ===== */
.hidden {
    display: none !important;
}

.text-center {
    text-align: center;
}

/* ===== RESPONSIVE DESIGN ===== */
@media (max-width: 768px) {
    .navbar {
        padding: var(--spacing-md);
    }
    
    .navbar__title {
        font-size: 2.2rem;
    }
    
    .search-form {
        height: 50px;
    }
    
    .search-form__input,
    .search-form__button {
        font-size: 1rem;
    }
    
    .results-section {
        width: 95%;
    }
    
    .results-grid {
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        grid-gap: 15px;
    }
    
    .download-options {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 480px) {
    .navbar__title {
        font-size: 1.8rem;
    }
    
    .search-form {
        flex-direction: column;
        height: auto;
        padding: var(--spacing-sm);
        margin-top: 20px;
    }
    
    .search-form__input {
        width: 100%;
        padding: 15px;
        border-radius: var(--border-radius);
        margin-bottom: 10px;
    }
    
    .search-form__button {
        width: 100%;
        border-radius: var(--border-radius);
        padding: 15px;
        justify-content: center;
    }
    
    .results-grid {
        grid-template-columns: 1fr;
    }
    
    .image-card__image {
        height: 200px;
    }
    
    .modal-content {
        margin: 20% auto;
        width: 95%;
        padding: 15px;
    }
}
