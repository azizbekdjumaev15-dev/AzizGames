// ===================================
// 1. КОНФИГУРАЦИЯ И ДАННЫЕ
// ===================================
const gamesData = [
    // --- ПОПУЛЯРНОЕ ---
    { id: 1, title: "Minecraft Classic", cat: "action", img: "data:image/jpeg;base64,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", url: "https://classic.minecraft.net/" },
    { id: 2, title: "Conter strike", cat: "arcade", img: "data:image/jpeg;base64,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", url: "https://yandex.ru/games/app/330431#app-id=330431&catalog-session-uid=catalog-69cde113-864f-587b-91b0-09df65aba714-1766835086189-2f30&rtx-reqid=14015734679047965807&redir-data=%7B%22block%22%3A%22suggested%22%2C%22block_index%22%3A1%2C%22card%22%3A%22adaptive_recommended_new%22%2C%22col%22%3A0%2C%22first_screen%22%3A0%2C%22listType%22%3A%22suggested%22%2C%22page%22%3A%22main%22%2C%22row%22%3A1%2C%22rtx_reqid%22%3A%2214015734679047965807%22%2C%22same_block_index%22%3A1%2C%22wrapper%22%3A%22grid-list%22%2C%22games_request_id%22%3A%221766835090178019-4895019592059003306-balancer-l7leveler-kubr-yp-sas-33-BAL%22%2C%22request_id%22%3A%221766835090192362-3014995424420107448-eu72lf2rfk5q2vtm-BAL%22%2C%22http_ref%22%3A%22https%253A%252F%252Fyandex.ru%252Fgames%252F%22%2C%22rn%22%3A438724833%7D" },
    { id: 3, title: "Roblox", cat: "arcade", img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAilBMVEUzX/////8wXf8sW/8hVf8pWf8lV/8fVP/x9P/Y3//y9f81Yv88Zv8tXP94kv8VUP+Tpv/Ez//d4/+ZrP/S2v89aP+2wv+jtP9qhv+vvf+puf9lgv9Ea//5+v+Hnf9ff/+9yf/O1//h5/9wi/9KcP/m7P9Zev/H0f+crv99lv+Inv8NTf9uif9Rdv9idK5DAAAHk0lEQVR4nO2da3eyOhCFFQIooOAFbxXrpd6q/f9/7yR2vesUWzUMOyS68nxvl9syZGayZ9poWCwWi8VisVgsFovFYrFYLBaLxWIROLo/gGqciAWe7g+hFH8cLo+dhLm6P4gyWL/JWU/PEfNfUqUzz5vf5MPBWyPwXi4svU3zB61e+vFqDywbNa9ojboN9kIq2fZaoaA/e4sDv/MKT6wT/yVQEA4H7/4LhKW3uKXwOywXWcKe+7QMevcUCrajTfTMYRnkjxQK2uNJxMNS94el0HmXEXh5YFfpLnnC9M4fyCq8qFwuHH5aPtXLJxiWUShYTzfxE6V3ThyWVdgU6d1h0niSsHTPBIEXWvv06xnSOzajKryoXHaNP0f8fhWFgv50wtM7Y18+TlZV4OVPyasuP/CNFOl2EQoF4T6NTwaeI2yJUijYjrqxb1hYnlpIhYL2TISlMecIJgyvaa0Gu8CQ9M5PVSgUhMtFFDD9tWWwV6VQwKuuTPNp6fiUlK0MOa+6Gom+sHTfFAu8wKuuryTQc474hzoUXlT2jvwcqT8sg3ZdCgW86spqTu+cTHUYXhO2D7Wmd8Vmd20q92lWV3rHpjoUCnjVlfk1qPTXuhQK+rOz6vTudrO7LkRTPVDYVHePuhUK8t4iZorOkcfN7rrg6d2cKXjDJvDKqQJ5fxyhJXa+dKsqEjKwQIWVE41lgFaYrHRrKnLEl8wmhSEHfjK6E92SiqwTtEI21q2pyBT+omG1Vk6POaO7HU4mdfVbG3kEFqipcrrNEP+Q/rIJ6WXgoxUGf9qE9PEGbzpGuiUVaaH1PbAJ1U8PnrIF0Dun6qTwlC2ou8v2gA945bTTLalIC56ylbMJqWcEPw2DlW5NRbrwsyI2rHJC6zOucurjU7ZKNiE8M3yLxrDKCZ6y6W92FwljsECgTQjDEJ6ykSonhUkQvnI6ESqnVdQdqbqqeke32UhhOGAu8+afPQW9jxb8xoLU7J7zT+E4XpDsDkOwSgWVE8EmFJ7+/XTHT6LNrA9UuUBXTiSbUPF79hibd5eoPkiGfkhJNqFflwqOy1V+7gF/yq0ZldP8r++Zh2XwPm5XPEcUVE6lByyazfXNW+iOH2SbaZVzZANvYFAqp7uXCo7Hz5HjkvqnhDe7SZXTo++ZnyPsNE9XhF/dxldOBJtQKPW6cxjlSnKMV0gYsGjLve5IdyETI5rdY7nUmPJ4tPBhSKmcJCtUj/BKXeErJ0KzO2dSWQcpo0/hlRPFJrSX+549iotsh66cSDYhyUsFiotMQbObWjlJkBDOfLxNiFI5beVOrM5H+V+Nr5xINqGlnEJSRg/3I5JSNslLBYqLDG8TogxY5JJh2CDUigpsQoTKqS93YpFGpjf4Zjfhe5a8VKC4yPIY3sCgpMaSFSolo1dgEyKkxpJ2LJKL7IBP2QipsWzlRMno8ZWTQ/gUkt8z5S7EEJuQZGr897Kp+0hm9CWg2IRyuYf0iSsnyUsF75Og8AteOVFsQp+2cvomIZwVkhl9CSg2oa3cjKD8sqkf4G1CESEMJS8VSCPTZjS7ZSsngn1FgU2IkBqHkVybjbJsypABi1U6F1PJD2Q+cbNb0Foe5979IU+Ki6wFtwlVGrAQK9ruTCVTlk0ZYhP6Qdg+3JpKduaE34e3CSUAY0G+T8U6lmuVpJFpvFsPtU1ou+zOr3ZBUe5CQrhNCDpg0Z+dox9LZyjLphRUTuDR9Hw4+Ep4WDrExwNeOTm+Amd32FuIc4RRMnp4l42UGsuwHm2iVfkf254ef+ZyqBywoNhMzLAJqUTBgIVhc074ZrdhAxZteELz+gMWlEsFleArp4ZuSUXwlZNpAxYKbEIvP5pu1DahpgKbkEPxgSgkhD+k3stvEzJnqdc3ZtiEVIJvdteyh1WeLfwhff3RdIpNSCX4AYvIsG1C+Dkn8n+wUIMZAxYqwQ9YUGxCKsFXTh3dkooosAkZsYf1f1ZwB4Zx24TwLRrDumxwm5ATjZFTyZXB24Qajs/mm5Ex29nwo+kXkR5j8ULFsoDyHJX9u4vLVPJgqD0o4c3uAh0/iM8zra3TNfxNeo3jMj/rLrWVxHib0A2Vpyzda3lg8ZXTTZV+4L8dqi4LKI3cyDRMpFt5WUBp2krOirsqPebHx15tYYkfsJBS6QbJV7qqRSV+D6ssHT9pTMZt1TkB3iZUCpexTHF6h7cJlYWHZRAtyDs8HoKvnEjw9G43UBOWtZ4VdxHp3WQGXz3YgtuEKsHTu7iLDUv8gEVVRHoXA9M7vE0IwSW9GwwhYWlOGF4h0rt4Mq3+j4PNeJPegp+WUcWqC28TguMynt7tySrh/8FCCfwcaUxomxNDtQ0MJK7PYkLVNcT3ERXCz5HEWZQLS7xNSDli1WeJqgu+h7UWeFhGvOqSEZhrryvIiHNEoupS0+yuDY8l2eJ+M0SBTahmHC/w7zXVn+esuIMjqq63v5vqksumngEelo3u6NcDi7cJaYWflh9pMSzra3bXBQ/LBq+6/qV30sumngue3kXn7/QOP5puDPyB7RyXoeR+0GfFCxj8/8Qax8sLtFgsFovFYrFYLBaLxWKxWCwWi0WS/wBgNpR+0NzlWQAAAABJRU5ErkJggg==", url: "https://azizbekdjumaev15-dev.github.io/ROBLOX_GAME.COPY/" },
    { id: 4, title: "Tanks 1 vs 1", cat: "action", img: "", url: "http://127.0.0.1:5501/tanks_game.html" },
    { id: 5, title: "Super Mario Bros", cat: "action", img: "https://images.unsplash.com/photo-1605901309584-818e25960b8f?w=500", url: "https://scratch.mit.edu/projects/323385732/embed" },
    
    // --- ГОЛОВОЛОМКИ ---
    { id: 6, title: "2048", cat: "puzzle", img: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=500", url: "https://play2048.co/" },
    { id: 7, title: "Tetris Classic", cat: "puzzle", img: "https://images.unsplash.com/photo-1596443686812-2f45229eeb36?w=500", url: "https://scratch.mit.edu/projects/403816159/embed" },
    { id: 8, title: "Chess Online", cat: "puzzle", img: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=500", url: "https://lichess.org/tv/embed" },
    { id: 9, title: "Cut The Rope", cat: "puzzle", img: "https://images.unsplash.com/photo-1500964757637-c85e8a162699?w=500", url: "https://scratch.mit.edu/projects/23533481/embed" },
    { id: 10, title: "Hextris", cat: "puzzle", img: "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?w=500", url: "https://hextris.io/" },

    // --- АРКАДЫ ---
    { id: 11, title: "Flappy Bird", cat: "arcade", img: "https://images.unsplash.com/photo-1553481187-be93c21490a9?w=500", url: "https://scratch.mit.edu/projects/172666838/embed" },
    { id: 12, title: "Pac-Man 3D", cat: "arcade", img: "https://images.unsplash.com/photo-1596740926474-00539131d1d9?w=500", url: "https://pacman-canvas.waifu.ai/" },
    { id: 13, title: "Dino Run", cat: "arcade", img: "https://images.unsplash.com/photo-1519669556878-63bd08be7635?w=500", url: "https://chromedino.com/" },
    { id: 14, title: "Fruit Ninja", cat: "arcade", img: "https://images.unsplash.com/photo-1615147342761-9238e15d8b96?w=500", url: "https://scratch.mit.edu/projects/24838385/embed" },
    { id: 15, title: "Crossy Road", cat: "arcade", img: "https://images.unsplash.com/photo-1585504198199-20277593b94f?w=500", url: "https://scratch.mit.edu/projects/48369324/embed" },
    { id: 16, title: "Doodle Jump", cat: "arcade", img: "https://images.unsplash.com/photo-1555864326-5cf22ef123cf?w=500", url: "https://scratch.mit.edu/projects/63983280/embed" },
    { id: 17, title: "Agar.io Clone", cat: "arcade", img: "https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?w=500", url: "https://scratch.mit.edu/projects/174983058/embed" },

    // --- ЭКШЕН И СПОРТ ---
    { id: 18, title: "Paper.io 2", cat: "action", img: "https://images.unsplash.com/photo-1532509678126-724dc5c929a0?w=500", url: "https://paper-io.com/" },
    { id: 19, title: "Slope", cat: "race", img: "https://images.unsplash.com/photo-1547754980-3df97fed72a8?w=500", url: "https://scratch.mit.edu/projects/282672505/embed" },
    { id: 20, title: "Basket Random", cat: "sport", img: "https://images.unsplash.com/photo-1546519638-68e109498ee3?w=500", url: "https://scratch.mit.edu/projects/412213797/embed" },
    { id: 21, title: "Rocket League 2D", cat: "sport", img: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=500", url: "https://scratch.mit.edu/projects/103635772/embed" },
    { id: 22, title: "Appel (Platformer)", cat: "action", img: "https://images.unsplash.com/photo-1520694478166-daaaaec95b69?w=500", url: "https://scratch.mit.edu/projects/60917032/embed" },
    { id: 23, title: "Neon Racer", cat: "race", img: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=500", url: "https://scratch.mit.edu/projects/9373959/embed" },
    { id: 24, title: "Tank Trouble", cat: "action", img: "https://images.unsplash.com/photo-1563205764-6e927426ae64?w=500", url: "https://scratch.mit.edu/projects/333636540/embed" },
    { id: 25, title: "Snake", cat: "arcade", img: "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?w=500", url: "https://scratch.mit.edu/projects/106941198/embed" }
    
];

// Состояние
let currentUser = JSON.parse(localStorage.getItem('azizGame_user')) || null;
let currentMode = 'login';
let gameStartTime = 0;
let usersDB = JSON.parse(localStorage.getItem('azizGame_usersDB')) || [];

// ===================================
// 2. ИНИЦИАЛИЗАЦИЯ
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    updateHeader();
    filterGames('all'); 
    setupEventListeners();
    createParticles();
});

// Эффект частиц
function createParticles() {
    const bg = document.createElement('div');
    bg.className = 'particle-bg';
    document.body.prepend(bg);
    
    for(let i=0; i<50; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left = Math.random() * 100 + 'vw';
        p.style.top = Math.random() * 100 + 'vh';
        p.style.animationDuration = (Math.random() * 3 + 2) + 's';
        p.style.animationDelay = Math.random() * 2 + 's';
        bg.appendChild(p);
    }
}

function setupEventListeners() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            const filtered = gamesData.filter(g => g.title.toLowerCase().includes(term));
            renderGameList(filtered, term ? `Поиск: "${term}"` : 'Каталог игр');
        });
    }

    const menuToggle = document.getElementById('menuToggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            document.getElementById('sidebar').classList.toggle('open');
        });
    }

    document.addEventListener('click', (e) => {
        const sidebar = document.getElementById('sidebar');
        const toggle = document.getElementById('menuToggle');
        if (sidebar && toggle && !sidebar.contains(e.target) && !toggle.contains(e.target) && sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
        }
    });
}

// ===================================
// 3. ЛОГИКА ИГР
// ===================================
const gamesGrid = document.getElementById('gamesGrid');

function filterGames(filter, element = null) {
    if (element) {
        document.querySelectorAll('.menu-list li').forEach(el => el.classList.remove('active'));
        element.classList.add('active');
    }
    
    const sidebar = document.getElementById('sidebar');
    if (sidebar) sidebar.classList.remove('open');

    let filtered = gamesData;
    let title = 'Каталог игр';

    if (filter === 'favorites') {
        if (!currentUser) {
            gamesGrid.innerHTML = '<div class="empty-state"><p>Войдите, чтобы видеть избранное.</p></div>';
            document.getElementById('sectionTitle').innerText = 'Мои любимые игры';
            document.getElementById('gamesCount').innerText = '0 игр';
            return;
        }
        filtered = gamesData.filter(g => currentUser.favorites.includes(g.id));
        title = 'Мои любимые игры';
    } else if (filter !== 'all') {
        filtered = gamesData.filter(g => g.cat === filter);
        title = filter.charAt(0).toUpperCase() + filter.slice(1);
    }

    renderGameList(filtered, title);
}

function renderGameList(list, title) {
    if (!gamesGrid) return;

    gamesGrid.innerHTML = '';
    const titleEl = document.getElementById('sectionTitle');
    const countEl = document.getElementById('gamesCount');
    
    if (titleEl) titleEl.innerText = title;
    if (countEl) countEl.innerText = `${list.length} игр`;

    if (list.length === 0) {
        gamesGrid.innerHTML = '<div class="empty-state"><p>Игры не найдены.</p></div>';
        return;
    }

    list.forEach(game => {
        const isFav = currentUser && currentUser.favorites && currentUser.favorites.includes(game.id);
        const card = document.createElement('div');
        card.className = 'game-card';
        card.innerHTML = `
            <div class="card-img-wrap" onclick="openGame(${game.id})">
                <img src="${game.img}" class="card-img" alt="${game.title}" loading="lazy">
                <div class="card-overlay">
                    <i class="fas fa-play-circle"></i>
                </div>
                <button class="like-btn ${isFav ? 'liked' : ''}" onclick="toggleFavorite(event, ${game.id})">
                    <i class="fas fa-heart"></i>
                </button>
            </div>
            <div class="card-content">
                <div class="card-header">
                    <h4>${game.title}</h4>
                    <span class="card-cat">${game.cat}</span>
                </div>
                <button class="btn-play-card" onclick="openGame(${game.id})">
                    ИГРАТЬ <i class="fas fa-rocket"></i>
                </button>
            </div>
        `;
        gamesGrid.appendChild(card);
    });
}

function openGame(id) {
    const game = gamesData.find(g => g.id === id);
    if (!game) return;

    document.getElementById('gameTitleDisplay').innerText = game.title;
    document.getElementById('gameFrame').src = game.url;
    document.getElementById('gameModal').style.display = 'flex';
    
    gameStartTime = Date.now();
}

function closeGame() {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    }
    document.getElementById('gameModal').style.display = 'none';
    document.getElementById('gameFrame').src = '';
    
    const duration = (Date.now() - gameStartTime) / 1000;
    if (currentUser && duration > 15) {
        addXP(25);
        updateStats('played');
    }
    gameStartTime = 0;
}

function toggleFullscreen() {
    const elem = document.getElementById('gameWindow');
    if (!elem) return;
    
    if (!document.fullscreenElement) {
        elem.requestFullscreen().catch(err => console.error(err));
    } else {
        document.exitFullscreen();
    }
}

function toggleFavorite(e, id) {
    e.stopPropagation();
    if (!currentUser) {
        showToast("Сначала войдите в аккаунт!");
        openAuthModal();
        return;
    }
    
    if (!currentUser.favorites) currentUser.favorites = [];

    const index = currentUser.favorites.indexOf(id);
    if (index === -1) {
        currentUser.favorites.push(id);
        showToast("Добавлено в избранное ❤️");
    } else {
        currentUser.favorites.splice(index, 1);
        showToast("Удалено из избранного 💔");
    }
    
    const btn = e.currentTarget;
    btn.classList.toggle('liked');
    saveUser();
    
    const activeMenu = document.querySelector('.menu-list li.active');
    if (activeMenu && activeMenu.textContent.includes('Избранное')) {
        renderGameList(gamesData.filter(g => currentUser.favorites.includes(g.id)), 'Мои любимые игры');
    }
}

// ===================================
// 4. ЮЗЕРЫ И СИСТЕМА
// ===================================
function updateHeader() {
    const panel = document.getElementById('userPanel');
    if (!panel) return;
    
    if (currentUser) {
        panel.innerHTML = `
            <div class="user-mini" onclick="openProfile()">
                <div class="mini-avatar"><i class="fas fa-user"></i></div>
                <span>${currentUser.name}</span>
            </div>
        `;
    } else {
        panel.innerHTML = `<button class="btn-login" onclick="openAuthModal()">Войти</button>`;
    }
}

function saveUser() {
    localStorage.setItem('azizGame_user', JSON.stringify(currentUser));
    const index = usersDB.findIndex(u => u.name === currentUser.name);
    if (index !== -1) usersDB[index] = currentUser;
    else usersDB.push(currentUser);
    localStorage.setItem('azizGame_usersDB', JSON.stringify(usersDB));
}

function addXP(amount) {
    if (!currentUser) return;
    currentUser.xp += amount;
    const newLevel = Math.floor(currentUser.xp / 100) + 1;
    if (newLevel > currentUser.level) {
        currentUser.level = newLevel;
        showToast(`🎉 Уровень повышен! Теперь ты ${newLevel} ур.`);
    } else {
        showToast(`+${amount} XP`);
    }
    saveUser();
}

function updateStats(type) {
    if (!currentUser) return;
    if (!currentUser.stats) currentUser.stats = { played: 0 };
    if (type === 'played') currentUser.stats.played++;
    saveUser();
}

function showToast(msg) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.innerText = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

const authModal = document.getElementById('authModal');
const profileModal = document.getElementById('profileModal');
const authForm = document.getElementById('authForm');
const authMsg = document.getElementById('authMsg');

function openAuthModal() { 
    if(authModal) {
        authModal.style.display = 'flex'; 
        if(authMsg) authMsg.innerText = '';
    }
}
function closeAuthModal() { if(authModal) authModal.style.display = 'none'; }

function openProfile() {
    if (!currentUser || !profileModal) return;
    document.getElementById('profileName').innerText = currentUser.name;
    document.getElementById('levelNum').innerText = currentUser.level || 1;
    const xp = currentUser.xp || 0;
    const level = currentUser.level || 1;
    const currentLevelXP = (level - 1) * 100;
    const xpInLevel = xp - currentLevelXP;
    const progress = Math.min((xpInLevel / 100) * 100, 100);
    document.getElementById('xpText').innerText = `${xpInLevel} / 100 XP`;
    document.getElementById('xpBar').style.width = `${progress}%`;
    document.getElementById('statPlayed').innerText = currentUser.stats ? currentUser.stats.played : 0;
    document.getElementById('statFav').innerText = currentUser.favorites ? currentUser.favorites.length : 0;
    profileModal.style.display = 'flex';
}

function closeProfile() { if(profileModal) profileModal.style.display = 'none'; }

function logout() {
    currentUser = null;
    localStorage.removeItem('azizGame_user');
    updateHeader();
    closeProfile();
    showToast("Вы вышли из аккаунта");
    filterGames('all'); 
}

function toggleAuth(mode) {
    currentMode = mode;
    document.getElementById('tabLogin').className = mode === 'login' ? 'active' : '';
    document.getElementById('tabReg').className = mode === 'reg' ? 'active' : '';
    document.getElementById('submitBtn').innerText = mode === 'login' ? 'Войти' : 'Создать аккаунт';
    if(authMsg) authMsg.innerText = '';
}

if (authForm) {
    authForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nameInput = document.getElementById('username');
        const passInput = document.getElementById('password');
        const name = nameInput.value.trim();
        const pass = passInput.value.trim();
        if (!name || !pass) return;

        if (currentMode === 'reg') {
            if (usersDB.find(u => u.name === name)) {
                authMsg.innerText = "Это имя уже занято!";
                return;
            }
            const newUser = { name: name, pass: pass, xp: 0, level: 1, favorites: [], stats: { played: 0 } };
            usersDB.push(newUser);
            currentUser = newUser;
            saveUser();
            showToast(`Добро пожаловать, ${name}!`);
            closeAuthModal();
            updateHeader();
        } else {
            const user = usersDB.find(u => u.name === name && u.pass === pass);
            if (user) {
                currentUser = user;
                if (!currentUser.favorites) currentUser.favorites = [];
                if (!currentUser.stats) currentUser.stats = { played: 0 };
                if (!currentUser.level) currentUser.level = 1;
                saveUser();
                showToast(`С возвращением, ${name}!`);
                closeAuthModal();
                updateHeader();
                const activeMenu = document.querySelector('.menu-list li.active');
                if(activeMenu && activeMenu.textContent.includes('Избранное')) filterGames('favorites'); 
                else filterGames('all');
            } else {
                authMsg.innerText = "Неверное имя или пароль";
            }
        }
    });
}