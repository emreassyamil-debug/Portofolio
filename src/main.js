import {
    createIcons,
    ArrowRight,
    Mail,
    Sun,
    Moon,
    Menu,
    MapPin,
    ExternalLink,
    BriefcaseBusiness
} from 'lucide';

// Initialize Lucide Icons
createIcons({
    icons: {
        ArrowRight,
        Mail,
        Sun,
        Moon,
        Menu,
        MapPin,
        ExternalLink,
        BriefcaseBusiness
    }
});

// Theme Toggle Logic
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

const updateThemeButton = () => {
    const isDark = htmlElement.classList.contains('dark');
    themeToggleBtn.setAttribute('aria-pressed', String(isDark));
    themeToggleBtn.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
};

// Check user preference or default to dark/light
if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    htmlElement.classList.add('dark');
} else {
    htmlElement.classList.remove('dark');
}

updateThemeButton();

themeToggleBtn.addEventListener('click', () => {
    if (htmlElement.classList.contains('dark')) {
        htmlElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    } else {
        htmlElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
    updateThemeButton();
});

// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

const setMenuState = (isOpen, restoreFocus = false) => {
    mobileMenu.classList.toggle('hidden', !isOpen);
    mobileMenu.setAttribute('aria-hidden', String(!isOpen));
    menuBtn.setAttribute('aria-expanded', String(isOpen));
    menuBtn.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');

    if (!isOpen && restoreFocus) {
        menuBtn.focus();
    }
};

setMenuState(false);

menuBtn.addEventListener('click', () => {
    setMenuState(!mobileMenu.classList.contains('hidden'), true);
});

// Close mobile menu when clicking nav links
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        setMenuState(false, true);
    });
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
        setMenuState(false, true);
    }
});

document.addEventListener('click', (event) => {
    if (!mobileMenu.classList.contains('hidden') &&
        !mobileMenu.contains(event.target) &&
        !menuBtn.contains(event.target)) {
        setMenuState(false);
    }
});

// Real CV Data
const educationData = [
    {
        degree: "Undergraduate Psychology Student",
        institution: "Universitas Pendidikan Indonesia",
        location: "Bandung, Indonesia",
        period: "September 2023 – Present",
        focus: "Industrial and Organizational Psychology focus",
        gpa: "GPA: 3.5",
        coursework: [
            "Observation & Interview",
            "Industrial and Organizational Psychology",
            "Human Resource Management",
            "Statistics"
        ]
    }
];

const experienceData = [
    {
        role: "HRD Intern",
        company: "Yayasan Pendidikan Silaturahim Jatikarya",
        period: "Jan 2026 – May 2026",
        featured: true,
        context: "Recruitment and people operations across TK, SD, SMP, and SMA education units.",
        metrics: [{ value: "30–50/day", label: "CVs screened" }],
        bullets: [
            "Screened approximately 30–50 CVs per day for recruitment needs.",
            "Supported recruitment across TK, SD, SMP, and SMA education units.",
            "Created job vacancy materials based on position requirements and organizational branding.",
            "Coordinated candidate testing and assessment administration with school units.",
            "Supported training planning for education and non-education employees.",
            "Assisted HR activities involving recruitment, candidate coordination, and employee development."
        ],
        tags: ["Recruitment", "HR Operations", "Employee Development"]
    },
    {
        role: "HR Generalist",
        company: "BelajarLinkedIn",
        period: "Sep 2024 – Jan 2026",
        context: "Supported HR administration for approximately 80–100+ members.",
        bullets: [
            "Supported HR community development, recruitment, and onboarding.",
            "Managed core team and volunteer coordination.",
            "Maintained internal communication, announcements, scheduling, and team culture.",
            "Updated HR databases, rules, standards, and internal records.",
            "Handled internal complaints and supported team harmony.",
            "Provided cross-team support."
        ],
        tags: ["HR Operations", "Recruitment", "People Management"]
    },
    {
        role: "Chief Marketing Officer",
        company: "Emergencyy Call",
        period: "Sep 2025 – Jan 2026",
        context: "Cross-functional coordination across 13 divisions.",
        metrics: [{ value: "13", label: "Divisions coordinated" }],
        bullets: [
            "Coordinated activities across 13 divisions.",
            "Prepared reports and presentation materials.",
            "Supported role clarity and workflow monitoring across teams.",
            "Supported SOP adherence across teams."
        ],
        tags: ["Leadership", "Coordination", "Communication"]
    },
    {
        role: "Shadow Teacher",
        company: "SD Silduhun Islamic School Cibubur",
        context: "Educational support experience involving observation, learning evaluation, and individualized learning programs.",
        bullets: [
            "Documented student progress.",
            "Conducted behavioral observations.",
            "Supported learning evaluation.",
            "Helped develop individualized learning programs.",
            "Coordinated with teachers and psychologists.",
            "Communicated with parents."
        ],
        tags: ["Psychology", "Learning Support", "Observation"]
    }
];

const organizationData = [
    {
        role: "President",
        organization: "Psychology Student Activity Unit (BSO KKM Psychology UPI)",
        period: "Feb 2025 – Feb 2026",
        primary: true,
        featured: true,
        metrics: [
            { value: "100+", label: "Active members" },
            { value: "10+", label: "Programs supervised" }
        ],
        bullets: [
            "Led and coordinated 100+ active members across multiple divisions.",
            "Supervised and monitored 10+ organizational programs.",
            "Managed member data and activity reporting.",
            "Conducted internal division and performance evaluations.",
            "Coordinated with faculty supervisors and external partners.",
            "Supported cross-division collaboration."
        ],
        tags: ["People Management", "Organizational Leadership", "Cross-functional Collaboration"]
    },
    {
        role: "Chief Marketing Officer",
        organization: "Emergencyy Call",
        period: "Sep 2025 – Jan 2026",
        primary: true,
        compact: true,
        context: "Cross-functional coordination across 13 divisions.",
        metrics: [{ value: "13", label: "Divisions coordinated" }],
        bullets: [
            "Coordinated activities across 13 divisions.",
            "Prepared reports and presentation materials.",
            "Supported role clarity, workflow monitoring, and SOP adherence across teams."
        ],
        tags: ["Leadership", "Coordination", "Communication"]
    },
    {
        role: "HR Generalist",
        organization: "BelajarLinkedIn",
        period: "Sep 2024 – Jan 2026",
        primary: true,
        compact: true,
        context: "People and organizational processes through HR community development, recruitment, onboarding, and team coordination.",
        tags: ["HR Operations", "People Management", "Internal Communication"]
    },
    {
        role: "Staff Member — Student Executive Board",
        organization: "BEM KEMA Psikologi UPI",
        period: "Feb 2024 – Feb 2025",
        context: "Supported faculty-level arts and sports competitions involving 9 academic departments, including 2 arts competitions and 5 sports branches.",
        bullets: ["Supported event administration and documentation."],
        tags: ["Event Administration", "Documentation"]
    },
    {
        role: "Logistics Coordinator — Gyfest 2024",
        organization: "Universitas Pendidikan Indonesia",
        period: "Aug 2024",
        context: "Coordinated logistics planning, scheduling, documentation, inventory, venue readiness, and cross-functional committee needs.",
        tags: ["Event Operations", "Logistics", "Coordination"]
    },
    {
        role: "Volunteer — Anti-Bullying Teacher Training",
        organization: "Anti-Bullying Training for Junior High School Teachers (UPI)",
        period: "Jul 2025",
        context: "Supported workshops for 30+ junior high school teachers.",
        bullets: [
            "Prepared evaluation instruments and training materials.",
            "Summarized post-training evaluation data and contributed feedback."
        ],
        tags: ["Training Support", "Evaluation", "Volunteer"]
    }
];

const additionalOrganizations = [
    "Karang Taruna RW03 Ledeng",
    "Psychology Sports"
];

const skillsData = [
    {
        category: "Human Resources",
        label: "Core Skills",
        featured: true,
        items: ["Recruitment", "CV Screening", "Candidate Coordination", "Onboarding Support", "HR Administration", "Training Support"]
    },
    {
        category: "People & Organizational",
        label: "Experience With",
        items: ["Team Management", "People Management", "Organizational Coordination", "Internal Communication", "Stakeholder Coordination"]
    },
    {
        category: "Psychology",
        label: "Academic & Practical Foundation",
        items: ["Observation", "Interview", "Behavioral Observation", "Learning Evaluation"]
    },
    {
        category: "Tools",
        label: "Practical Tools",
        items: ["Microsoft Office"]
    },
    {
        category: "Languages",
        label: "Languages",
        items: ["Bahasa Indonesia (Native)", "English (Basic Proficiency)"]
    }
];

const impactData = [
    {
        category: "HR Recruitment",
        title: "Supporting High-Volume Recruitment Operations",
        context: "Connected candidate screening, vacancy materials, and assessment coordination across four education units.",
        bullets: [
            "Screened approximately 30–50 CVs per day for recruitment needs.",
            "Supported recruitment across TK, SD, SMP, and SMA education units.",
            "Created vacancy materials and coordinated candidate testing with school units."
        ],
        metrics: [{ value: "30–50/day", label: "CVs screened" }],
        tags: ["Recruitment", "CV Screening", "Assessment Coordination"]
    },
    {
        category: "People & Team Management",
        title: "Coordinating People and Programs Across Divisions",
        context: "Supported a student organization by coordinating members, programs, and division responsibilities.",
        bullets: [
            "Coordinated 100+ active members across multiple divisions.",
            "Supervised and monitored 10+ organizational programs.",
            "Supported division and performance evaluations and cross-division collaboration."
        ],
        metrics: [
            { value: "100+", label: "Active members" },
            { value: "10+", label: "Programs supervised" }
        ],
        tags: ["People Management", "Program Supervision", "Cross-division Collaboration"]
    },
    {
        category: "Training & Educational Development",
        title: "Applying Psychology to Learning Support",
        context: "Combined observation, progress documentation, and learning support in educational settings.",
        bullets: [
            "Documented student progress and behavioral observations.",
            "Supported learning evaluation and individualized learning programs.",
            "Prepared evaluation instruments and training materials for workshops supporting 30+ junior high school teachers."
        ],
        metrics: [{ value: "30+", label: "Teachers supported" }],
        tags: ["Psychology", "Learning Support", "Training Support"]
    },
    {
        category: "Organizational Leadership",
        title: "Coordinating Cross-Divisional Work and Stakeholder Communication",
        context: "Supported multi-team coordination through reporting, workflow clarity, and partner communication.",
        bullets: [
            "Coordinated activities across 13 divisions.",
            "Prepared reports and presentation materials for cross-team coordination.",
            "Supported role clarity, workflow monitoring, SOP adherence, faculty coordination, and external partner communication."
        ],
        metrics: [{ value: "13", label: "Divisions coordinated" }],
        tags: ["Coordination", "Communication", "Operations"]
    }
];

// Render Functions
function renderEducation() {
    const container = document.getElementById('education-container');
    container.innerHTML = educationData.map(item => `
        <article class="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
            <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div class="min-w-0">
                    <h3 class="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">${item.degree}</h3>
                    <p class="mt-1 break-words text-sm font-semibold text-indigo-700 dark:text-indigo-300">${item.institution}</p>
                    <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">${item.location}</p>
                </div>
                <span class="w-fit shrink-0 rounded-full bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-100 dark:border-indigo-900 px-3 py-1 text-xs font-medium text-indigo-700 dark:text-indigo-300">${item.period}</span>
            </div>
            <p class="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">${item.focus}</p>
            <div class="grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_auto] gap-5">
                <div>
                    <h4 class="text-sm font-semibold text-slate-900 dark:text-white">Relevant Coursework</h4>
                    <ul class="mt-2 flex flex-wrap gap-2">
                        ${item.coursework.map(course => `<li class="rounded-lg bg-slate-100 dark:bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-600 dark:text-slate-300">${course}</li>`).join('')}
                    </ul>
                </div>
                ${item.gpa ? `<div class="sm:text-right"><h4 class="text-sm font-semibold text-slate-900 dark:text-white">Academic Detail</h4><p class="mt-2 text-sm text-slate-600 dark:text-slate-300">${item.gpa}</p></div>` : ''}
            </div>
        </article>
    `).join('');
}

function renderMetricList(metrics = []) {
    if (!metrics.length) return '';
    return `
        <div class="flex flex-wrap gap-2">
            ${metrics.map(metric => `
                <div class="inline-flex items-baseline gap-2 rounded-xl bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 px-3 py-2">
                    <span class="text-xl font-extrabold text-indigo-700 dark:text-indigo-300">${metric.value}</span>
                    <span class="text-xs text-slate-600 dark:text-slate-300">${metric.label}</span>
                </div>
            `).join('')}
        </div>
    `;
}

function renderContributionList(bullets = []) {
    if (!bullets.length) return '';
    return `
        <div>
            <h4 class="text-sm font-semibold text-slate-900 dark:text-white">Key Contributions</h4>
            <ul class="list-disc space-y-2 pl-5 mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                ${bullets.map(bullet => `<li>${bullet}</li>`).join('')}
            </ul>
        </div>
    `;
}

function renderTagList(tags = []) {
    if (!tags.length) return '';
    return `
        <div class="flex flex-wrap gap-2">
            ${tags.map(tag => `
                <span class="rounded-lg bg-slate-100 dark:bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-600 dark:text-slate-300">${tag}</span>
            `).join('')}
        </div>
    `;
}

function renderExperienceCard(item) {
    const cardClass = item.featured
        ? 'p-7 sm:p-8 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/20 border-2 border-indigo-200 dark:border-indigo-800 shadow-md space-y-5'
        : 'p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5';
    const titleClass = item.featured ? 'text-2xl sm:text-3xl' : 'text-xl';

    return `
        <article class="${cardClass}">
            <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div class="min-w-0">
                    ${item.featured ? '<span class="inline-flex rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">Featured Experience</span>' : ''}
                    <h3 class="mt-3 font-extrabold tracking-tight text-slate-900 dark:text-white ${titleClass}">${item.role}</h3>
                    <p class="mt-1 break-words text-sm font-semibold text-indigo-700 dark:text-indigo-300">${item.company}</p>
                </div>
                ${item.period ? `<span class="w-fit shrink-0 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-1 text-xs font-medium text-slate-600 dark:text-slate-300">${item.period}</span>` : ''}
            </div>
            ${item.context ? `<p class="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">${item.context}</p>` : ''}
            ${renderMetricList(item.metrics)}
            ${renderContributionList(item.bullets)}
            ${renderTagList(item.tags)}
        </article>
    `;
}

function renderExperience() {
    const container = document.getElementById('experience-container');
    container.innerHTML = experienceData.map(renderExperienceCard).join('');
}

function renderOrganizationCard(item) {
    const cardClass = item.featured
        ? 'p-7 sm:p-8 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/20 border-2 border-indigo-200 dark:border-indigo-800 shadow-md space-y-5'
        : 'p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4';
    const titleClass = item.featured ? 'text-2xl sm:text-3xl' : 'text-lg';

    return `
        <article class="${cardClass}">
            <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div class="min-w-0">
                    ${item.featured ? '<span class="inline-flex rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">Major Leadership</span>' : ''}
                    <h3 class="mt-3 font-extrabold tracking-tight text-slate-900 dark:text-white ${titleClass}">${item.role}</h3>
                    <p class="mt-1 break-words text-sm font-semibold text-indigo-700 dark:text-indigo-300">${item.organization}</p>
                </div>
                ${item.period ? `<span class="w-fit shrink-0 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-1 text-xs font-medium text-slate-600 dark:text-slate-300">${item.period}</span>` : ''}
            </div>
            ${item.context ? `<p class="text-sm leading-relaxed text-slate-600 dark:text-slate-300">${item.context}</p>` : ''}
            ${renderMetricList(item.metrics)}
            ${renderContributionList(item.bullets)}
            ${renderTagList(item.tags)}
        </article>
    `;
}

function renderOrganization() {
    const container = document.getElementById('organization-container');
    const primary = organizationData.filter(item => item.primary);
    const supporting = organizationData.filter(item => !item.primary);
    const additional = additionalOrganizations.map(item => `
        <span class="rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-1.5 text-sm text-slate-700 dark:text-slate-300">${item}</span>
    `).join('');

    container.innerHTML = `
        <div class="space-y-6">
            ${primary.map(renderOrganizationCard).join('')}
        </div>
        <div class="pt-4">
            <h3 class="text-xl font-bold text-slate-900 dark:text-white">Additional Organizational Experience</h3>
            <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                ${supporting.map(renderOrganizationCard).join('')}
            </div>
        </div>
        <div class="pt-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-900/70 p-5">
            <h3 class="text-sm font-semibold text-slate-900 dark:text-white">Other Organizational Involvement</h3>
            <div class="mt-3 flex flex-wrap gap-2">${additional}</div>
        </div>
    `;
}

function renderSkills() {
    const container = document.getElementById('skills-container');
    container.innerHTML = skillsData.map(group => {
        const cardClass = group.featured
            ? 'md:col-span-2 p-6 sm:p-7 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/20 border-2 border-indigo-200 dark:border-indigo-800 shadow-sm space-y-5'
            : 'p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4';
        return `
            <article class="${cardClass}">
                <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <h3 class="text-lg font-bold text-slate-900 dark:text-white">${group.category}</h3>
                    ${group.label ? `<span class="text-xs font-semibold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">${group.label}</span>` : ''}
                </div>
                ${renderTagList(group.items)}
            </article>
        `;
    }).join('');
}

function renderSelectedImpact() {
    const container = document.getElementById('projects-container');
    container.innerHTML = impactData.map(item => `
        <article class="h-full p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col space-y-5">
            <div>
                <p class="text-xs font-semibold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">${item.category}</p>
                <h3 class="mt-2 text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">${item.title}</h3>
            </div>
            <p class="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">${item.context}</p>
            ${renderMetricList(item.metrics)}
            ${renderContributionList(item.bullets)}
            ${renderTagList(item.tags)}
        </article>
    `).join('');
}

// Initialize renders
renderExperience();
renderOrganization();
renderSelectedImpact();
renderSkills();
renderEducation();

// Contact Form Handler
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    try {
        const response = await fetch(contactForm.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            alert('Thank you! Your message has been sent to emreassyamil@gmail.com.');
            contactForm.reset();
        } else {
            alert('Sorry, the message could not be sent. Please try again.');
        }
    } catch (error) {
        alert('Sorry, a network error occurred. Please try again later.');
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
    }
});
