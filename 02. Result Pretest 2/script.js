// --- Data Source ---
const students = [
    { roll: 1, name: "Sayeedah Binte Kamal", eng1: 45, eng2: 49, math: 26, bgs: 23, chem: 34, phy: 13, hm: 35 },
    { roll: 2, name: "Arka Nandi", eng1: 38, eng2: 39, chem: 36, phy: 14, bio: 22, hm: 24 },
    { roll: 3, name: "FARHA SHAHRIAR SUBHA", math: 34, chem: 13, phy: 11 },
    { roll: 4, name: "Taspiya Tabassum Tanha", eng1: 40, eng2: 30, rel: 19, bgs: 15, chem: 23, phy: 11, bio: 22, hm: 31 },
    { roll: 5, name: "Fabiha Rahman Tanisha", eng2: 30, chem: 12 },
    { roll: 6, name: "Md. Sakib Al Hasan", eng2: 27, math: 24, chem: 33, phy: 14, hm: 16 }, // Physics Fixed
    { roll: 7, name: "Sadika Rahman", math: 34, rel: 18, bgs: 20, chem: 23, hm: 23 },
    { roll: 8, name: "ANIKA TABASSOM NOHA", eng1: 39, math: 35, rel: 21, chem: 26, phy: 18 },
    { roll: 9, name: "MOHSIN HOSSEN NIHAD", eng1: 44, eng2: 27, math: 17, rel: 23, chem: 40, phy: 14, bio: 20, hm: 25 },
    { roll: 10, name: "ARIN GUHA PUJA", eng1: 39, eng2: 31, math: 27, bgs: 18, chem: 30, phy: 15, bio: 18, hm: 27 },
    { roll: 12, name: "TASFIA ASHRAF", chem: 11, hm: 34 },
    { roll: 13, name: "Jamiul Alam Srabonto", eng2: 31, rel: 18, bgs: 13, chem: 16, phy: 14, bio: 16, hm: 15 },
    { roll: 14, name: "RIYAZUL JANNAH NUHA", eng2: 26, math: 30, bgs: 20, chem: 23, phy: 15 },
    { roll: 15, name: "Samiha Islam", eng1: 22, eng2: 23, math: 27, rel: 18, bgs: 21, chem: 29, phy: 10, bio: 18, hm: 30 },
    { roll: 16, name: "Sudipta Nandi Aritra", eng1: 32, eng2: 36, math: 32, bgs: 18, chem: 30, phy: 12, bio: 18, hm: 20 },
    { roll: 17, name: "NAZIFA ZAMAN", eng1: 44, eng2: 47, math: 41, rel: 20, chem: 36, phy: 15, bio: 22, hm: 30 },
    { roll: 18, name: "Tasmia Jahan Faria", eng1: 28, math: 35, rel: 17, chem: 26, phy: 16, hm: 26 },
    { roll: 19, name: "S.M. MOTTAKIN SAIKAT", eng1: 20, eng2: 33, math: 15, bgs: 14, chem: 11 },
    { roll: 20, name: "TOWHIDUR RAHMAN", eng1: 26, eng2: 30, math: 22, rel: 18, bgs: 7, chem: 28, phy: 11, bio: 19, hm: 31 },
    { roll: 21, name: "JARIF FAHMID", eng1: 25, eng2: 25, math: 31, rel: 19, bgs: 17, chem: 33, bio: 23, hm: 28 },
    { roll: 22, name: "Mosammat Anika", eng1: 27, eng2: 39, math: 27, rel: 19, chem: 11, phy: 13, bio: 19, hm: 26 },
    { roll: 23, name: "MD. SAYEM TALHA", eng1: 34, eng2: 35, math: 24, rel: 20, bgs: 17, chem: 24, bio: 11, hm: 20 },
    { roll: 24, name: "Tanjina Hasan", eng1: 32, eng2: 29, math: 36, rel: 13, bgs: 23, chem: 25, phy: 11, bio: 16, hm: 28 },
    { roll: 25, name: "MARIAM JANNAT RAISA", eng1: 42, eng2: 19, rel: 20, bgs: 17, chem: 20, phy: 8, bio: 19, hm: 25 },
    { roll: 26, name: "Amir Hasnat Abir", eng1: 35, eng2: 28, math: 28, rel: 22, bgs: 21, chem: 28, phy: 18, bio: 18, hm: 30 },
    { roll: 27, name: "MUSKATUL SANEY", math: 15, rel: 13, bgs: 17, chem: 10, phy: 10, bio: 17 },
    { roll: 28, name: "Md. Alamgir Hossain Mahin", eng1: 40, eng2: 29, math: 31, rel: 19, bgs: 14, chem: 26, phy: 13, bio: 17, hm: 23 },
    { roll: 29, name: "Meherunnesa Nadia", eng1: 29, eng2: 32, math: 33, rel: 14, bgs: 21, chem: 38, phy: 14, bio: 21, hm: 27 },
    { roll: 30, name: "Afrin Sultana", eng2: 14, math: 13, bgs: 24, chem: 12, phy: 13 },
    { roll: 31, name: "Mohammed Mehedi Jachim", eng1: 31, eng2: 32, math: 18, bgs: 23, chem: 21, phy: 9, bio: 16, hm: 29 },
    { roll: 32, name: "Mohammed Tahmid Kabir", eng2: 23, math: 23, rel: 24, phy: 9, hm: 15 },
    { roll: 33, name: "Md. Shalin", eng2: 33, math: 21, rel: 16, bgs: 13, phy: 9, bio: 14, hm: 24 },
    { roll: 35, name: "Mahmudur Rahman", eng1: 33, eng2: 34, math: 27, rel: 23, bgs: 21, chem: 28, phy: 15, bio: 16 },
    { roll: 36, name: "ATQIYA TARANNUM ASMA", eng1: 41, eng2: 23, math: 13, rel: 16, chem: 19, bio: 14, hm: 21 },
    { roll: 37, name: "Tanjina Khanam", eng1: 37, eng2: 25, math: 19, rel: 18, chem: 30, phy: 20, hm: 26 },
    { roll: 38, name: "Mahmuda Islam Mimfa", eng2: 27, chem: 12 },
    { roll: 39, name: "Shadratul Muntaha", eng1: 29, eng2: 19, math: 24, gen_sci: 19, fin: 18, acc: 27 },
    { roll: 40, name: "Samiha Tabarsum", eng1: 36, eng2: 27, math: 23, rel: 17, gen_sci: 17, fin: 16, acc: 23 },
    { roll: 41, name: "Md. Abdur Rahman", eng1: 36, eng2: 30, math: 23, rel: 11, chem: 26, phy: 12 },
    { roll: 42, name: "Mahima Tabassum Mihi", eng1: 38, eng2: 31, math: 19, rel: 19, gen_sci: 23 },
    { roll: 43, name: "Taohid Ashraf Tasmi", eng2: 18, rel: 16, bgs: 9, chem: 12, phy: 11, bio: 8, hm: 15 },
    { roll: 44, name: "Salma Akter Nika", eng1: 30, math: 27, chem: 11 },
    { roll: 45, name: "Shajedul Alam", eng1: 34, eng2: 30, math: 22, rel: 16, bgs: 16, chem: 9, phy: 13, bio: 14, hm: 19 },
    { roll: 46, name: "Mst. Nusrat Jahan Mimpa", eng1: 29, eng2: 29, math: 35, bgs: 19, chem: 28, phy: 14, bio: 19 },
    { roll: 47, name: "Marium Binte Alam", eng1: 20, chem: 19, phy: 10 },
    { roll: 48, name: "Razia Sultana", eng1: 24, eng2: 24, math: 29, bgs: 19, chem: 21, phy: 11, bio: 20, hm: 31 },
    { roll: 49, name: "MAYSA AWADA", eng1: 34, eng2: 23, math: 31, bgs: 21, chem: 28, phy: 8, bio: 20 },
    { roll: 50, name: "AFRIN JAHAN TAMANNA", eng2: 11, math: 15, chem: 13, phy: 10, bio: 16 },
    { roll: 51, name: "SAJJADUL ISLAM TAMIM", eng1: 37, eng2: 25, math: 19, rel: 14 },
    { roll: 52, name: "MOHAMMAD SADMAN", eng1: 27, eng2: 31, math: 19, rel: 17, gen_sci: 19 },
    { roll: 53, name: "SANJIDA SULTANA", eng1: 13, eng2: 10, math: 22, rel: 15, chem: 14, phy: 9, hm: 27 },
    { roll: 54, name: "Md. Meheraj Hossain Zihad", eng1: 39, math: 21, fin: 18, acc: 29 },
    { roll: 55, name: "Tazrin Nahar Shejuti", eng1: 21, eng2: 18, math: 22, gen_sci: 19 },
    { roll: 56, name: "Tofajjal Hossain Tasfin", eng1: 19, gen_sci: 16, fin: 12 },
    { roll: 57, name: "Jannatul Tasnim", eng1: 23, math: 20, rel: 12, gen_sci: 19 },
    { roll: 58, name: "MD. SAHADAT HOSSAIN", eng1: 21, math: 24, gen_sci: 19, acc: 21 },
    { roll: 59, name: "Shobnom Jahan Nuha", eng1: 31, eng2: 16, math: 24, gen_sci: 25 },
    { roll: 60, name: "UMMA HALIMA", eng1: 33, eng2: 9, rel: 17 },
    { roll: 61, name: "Arafat Rahman", eng1: 24, eng2: 30, math: 23, rel: 19, gen_sci: 15, fin: 13, acc: 29 },
    { roll: 62, name: "Shahed Uddin", eng1: 22, math: 23, rel: 18, bgs: 15, chem: 21, phy: 11, bio: 14 },
    { roll: 63, name: "MOHAMMED ABU HASNAT SIFAT", eng2: 29, math: 27, rel: 21, gen_sci: 14, fin: 16, acc: 17 },
    { roll: 64, name: "Md. Fahim", eng1: 23, eng2: 30, math: 27, rel: 21, gen_sci: 15, fin: 15, acc: 34 },
    { roll: 65, name: "Hasnat Akter", eng1: 17, eng2: 17, math: 15, gen_sci: 17, fin: 11, acc: 23 },
    { roll: 67, name: "Md. Mufsan Lavib", math: 10, rel: 15, bgs: 17, chem: 10, phy: 8, bio: 12, hm: 23 },
    { roll: 68, name: "Ali Azmel Tawsip", eng1: 22, eng2: 37, math: 26, rel: 16, gen_sci: 11, fin: 10, acc: 25 },
    { roll: 69, name: "Abdul Hakim Siam", eng2: 25, math: 20, rel: 18, gen_sci: 12, fin: 13, acc: 16 },
    { roll: 70, name: "SADIA JAHAN", eng1: 18, eng2: 21, math: 20, gen_sci: 17, fin: 18, acc: 23 },
    { roll: 71, name: "Abdul Nur Nayem", eng1: 17, eng2: 29, math: 17, rel: 18, gen_sci: 16, fin: 7, acc: 27 },
    { roll: 72, name: "Imranur Samin Sayad", eng1: 27, eng2: 30, math: 22, gen_sci: 17, fin: 11, acc: 19 },
    { roll: 74, name: "Jiniya Jhafrin", eng1: 14, eng2: 15, gen_sci: 19 },
    { roll: 75, name: "Fenuka Mahfuz Niha", eng1: 13, eng2: 7, gen_sci: 19 },
    { roll: 76, name: "Sabeha Binte Sufian", eng1: 23, math: 25, rel: 16, gen_sci: 17, fin: 8, acc: 18 },
    { roll: 77, name: "Khobaib Bin Masum", eng1: 22, math: 22, rel: 18, gen_sci: 16, fin: 11, acc: 16 },
    { roll: 79, name: "JIADUL ISLAM SAHIN", math: 7 }
];

// --- Core Logic ---
students.forEach(s => {
    let total = 0;
    for (let key in s) {
        if (key !== 'roll' && key !== 'name' && typeof s[key] === 'number') {
            total += s[key];
        }
    }
    s.total = total;
});

function getGroup(s) {
    if (s.phy || s.chem || s.bio || s.hm) return "Science";
    if (s.fin || s.acc) return "Commerce";
    return "Arts/Humanities";
}

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    renderLeaderboard();
    setupSearch();
});

// --- Leaderboard Rendering ---
function renderLeaderboard() {
    const podium = document.getElementById('podiumList');
    const list = document.getElementById('runnersUpList');
    
    // Sort students by total
    const sorted = [...students].sort((a, b) => b.total - a.total);
    const top10 = sorted.slice(0, 10);

    // Render Top 3 (Podium)
    // Order visually: 2nd - 1st - 3rd
    const podiumOrder = [top10[1], top10[0], top10[2]]; 
    
    podium.innerHTML = '';
    podiumOrder.forEach((s, i) => {
        let rankClass = i === 1 ? 'rank-1-card' : (i === 0 ? 'rank-2-card' : 'rank-3-card');
        let rankEmoji = i === 1 ? '🥇' : (i === 0 ? '🥈' : '🥉');
        let actualRank = i === 1 ? 1 : (i === 0 ? 2 : 3);

        const div = document.createElement('div');
        div.className = `podium-card ${rankClass}`;
        div.innerHTML = `
            ${i === 1 ? '<span class="crown">👑</span>' : ''}
            <span class="p-rank">${actualRank}</span>
            <span class="p-score">${s.total}</span>
            <span class="p-name">${s.name.split(" ")[0]}..</span>
        `;
        div.onclick = () => openModal(s);
        podium.appendChild(div);
    });

    // Render 4-10
    list.innerHTML = '';
    for(let i = 3; i < top10.length; i++) {
        const s = top10[i];
        const div = document.createElement('div');
        div.className = 'list-item';
        div.innerHTML = `
            <div style="display:flex; align-items:center;">
                <span class="rank-circle">${i+1}</span>
                <div>
                    <strong style="display:block; font-size:0.95rem;">${s.name}</strong>
                    <small style="color:#888;">Roll: ${s.roll}</small>
                </div>
            </div>
            <strong style="color:var(--primary);">${s.total}</strong>
        `;
        div.onclick = () => openModal(s);
        list.appendChild(div);
    }
}

// --- Search Logic ---
function setupSearch() {
    const input = document.getElementById('searchInput');
    const results = document.getElementById('searchResults');

    input.addEventListener('input', (e) => {
        const val = e.target.value.toLowerCase();
        if(val.length < 1) {
            results.classList.add('hidden');
            return;
        }

        const matches = students.filter(s => 
            s.name.toLowerCase().includes(val) || 
            s.roll.toString() === val
        );

        results.innerHTML = '';
        if(matches.length > 0) {
            matches.forEach(s => {
                const div = document.createElement('div');
                div.className = 'search-item';
                div.innerHTML = `Roll <b>${s.roll}</b> - ${s.name}`;
                div.onclick = () => {
                    openModal(s);
                    results.classList.add('hidden');
                    input.value = '';
                };
                results.appendChild(div);
            });
            results.classList.remove('hidden');
        } else {
            results.classList.add('hidden');
        }
    });

    // Hide search on click outside
    document.addEventListener('click', (e) => {
        if (!input.contains(e.target) && !results.contains(e.target)) {
            results.classList.add('hidden');
        }
    });
}

// --- Modal Logic ---
function openModal(s) {
    const modal = document.getElementById('resultModal');
    const group = getGroup(s);

    // Fill Header
    document.getElementById('mName').textContent = s.name;
    document.getElementById('mRoll').textContent = s.roll;
    document.getElementById('mGroup').textContent = group;
    document.getElementById('mTotal').textContent = s.total;
    document.getElementById('mAvatar').textContent = s.name.charAt(0);

    // Subject Config
    const subjectMap = [
        { key: 'eng1', label: 'English 1st' },
        { key: 'eng2', label: 'English 2nd' },
        { key: 'math', label: 'General Math' }, 
        { key: 'rel', label: 'Islam & Moral Ed.' },
        { key: 'phy', label: 'Physics' },
        { key: 'chem', label: 'Chemistry' },
        { key: 'bio', label: 'Biology' },
        { key: 'hm', label: 'Higher Math' },
        { key: 'bgs', label: 'BGS' }, 
        { key: 'fin', label: 'Finance' },
        { key: 'acc', label: 'Accounting' },
        { key: 'gen_sci', label: 'General Science' }
    ];

    const grid = document.getElementById('mMarksGrid');
    grid.innerHTML = '';

    subjectMap.forEach(sub => {
        const hasMark = s[sub.key] !== undefined;
        if (hasMark) {
            let shouldShow = true;
            
            // Logic: strictly hide irrelevant subjects based on user request
            if (group === 'Science') {
                if (['fin', 'acc', 'gen_sci'].includes(sub.key)) shouldShow = false;
            } else if (group === 'Commerce') {
                if (['phy', 'chem', 'bio', 'hm', 'bgs'].includes(sub.key)) shouldShow = false;
            } else {
                if (['phy', 'chem', 'bio', 'hm', 'fin', 'acc'].includes(sub.key)) shouldShow = false;
            }

            if(shouldShow) {
                const div = document.createElement('div');
                div.className = 'mark-item';
                div.innerHTML = `
                    <span class="mark-subject">${sub.label}</span>
                    <span class="mark-value">${s[sub.key]}</span>
                `;
                grid.appendChild(div);
            }
        }
    });

    modal.classList.remove('hidden');
}

function closeModal() {
    document.getElementById('resultModal').classList.add('hidden');
}