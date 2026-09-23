import { createIcons, icons } from 'lucide';

// Initialize Lucide Icons
createIcons({ icons });

// Theme Toggle Logic
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Check user preference or default to dark/light
if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    htmlElement.classList.add('dark');
} else {
    htmlElement.classList.remove('dark');
}

themeToggleBtn.addEventListener('click', () => {
    if (htmlElement.classList.contains('dark')) {
        htmlElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    } else {
        htmlElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
});

// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking nav links
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Real CV Data
const educationData = [
    {
        degree: "Bachelor's Degree in Psychology (Industrial and Organizational Focus)",
        institution: "Universitas Pendidikan Indonesia (Bandung, Indonesia)",
        period: "September 2023 – Present",
        description: "GPA: 3.5. Relevant Coursework: Observation & Interview, Industrial and Organizational Psychology, Human Resource Management, Statistics."
    }
];

const experienceData = [
    {
        role: "Human Resources Intern",
        company: "Yayasan Pendidikan Silaturahim Jatikarya (TK–SD–SMP–SMA) — Cibubur, Indonesia",
        period: "Jan – May 2026",
        description: "Screened & evaluated 30–50 candidate CVs per day, managed recruitment administration, designed job vacancy flyers, collaborated with 4 educational units for psychological and academic assessments, coordinated training programs for educational & non-educational staff and parents, and maintained recruitment databases."
    },
    {
        role: "HR Generalist",
        company: "Belajar LinkedIn — Remote",
        period: "Sep 2024 – Jan 2026",
        description: "Managed HR administrative records for ~80–100+ members, assisted HR-related evaluations, attendance tracking, role allocation, internal records, training & development activities, and maintained HR databases."
    }
];

const organizationData = [
    {
        role: "President – Psychology Student Activity Unit (BSO KKM Psychology UPI)",
        organization: "Universitas Pendidikan Indonesia",
        period: "Feb 2025 – Feb 2026",
        description: "Led and coordinated 100+ active members across 6 divisions, supervised 10+ organizational programs and activities, managed documentation and member data, coordinated internal performance reviews, and acted as liaison between students, faculty supervisors, and external partners."
    },
    {
        role: "Chief Marketing Officer (CMO)",
        organization: "Emergency Call Platform — Remote",
        period: "Sep 2025 – Jan 2026",
        description: "Coordinated activities across 13 divisions, prepared reports and presentation materials, supported role clarity, workflow monitoring, and SOP adherence across teams."
    },
    {
        role: "Volunteer – Lecturer Community Service (P2M)",
        organization: "Anti-Bullying Training for Junior High School Teachers (UPI)",
        period: "Jul 2025",
        description: "Assisted in preparing evaluation instruments & training materials, supported workshops for 30+ junior high school teachers, summarized post-training evaluation data, and contributed feedback for program improvement."
    },
    {
        role: "Logistics Coordinator – Gyfest 2024",
        organization: "Universitas Pendidikan Indonesia",
        period: "Aug 2024",
        description: "Coordinated logistics planning, scheduling, documentation, inventory management, venue readiness, operational needs, and collaborated with cross-functional committees."
    },
    {
        role: "Staff Member – Student Executive Board (BEM) Interests and Talents",
        organization: "Faculty of Education, Universitas Pendidikan Indonesia",
        period: "Feb 2024 – Feb 2025",
        description: "Assisted faculty-level arts and sports competitions involving 9 academic departments (2 arts competitions & 5 sports branches), event administration, and documentation."
    }
];

const skillsData = [
    { category: "Technical Skills", items: ["Human Resource Management", "Recruitment & Onboarding", "Employee Engagement", "Performance Coordination", "Microsoft Office", "Marketing Strategy & Campaign Management", "Competitor & Market Analysis", "Event Management & Coordination", "Leadership Development", "Internal Communication", "Conflict Resolution", "Policy & Compliance Management"] },
    { category: "Interpersonal Skills", items: ["Leadership", "Team Collaboration", "Communication", "Empathy", "Adaptability", "Problem Solving", "Negotiation", "Critical Thinking", "Public Speaking", "Time Management", "Strategic Thinking", "Interpersonal Relationship Building", "Initiative", "Organizational Skills", "Professionalism"] },
    { category: "Languages", items: ["Bahasa Indonesia (Native)", "English (Basic Proficiency)"] }
];

const projectsData = [
    {
        title: "Presidential Leadership & BSO KKM Management",
        description: "Leading 100+ members across 6 divisions and supervising 10+ organizational programs in Psychology Student Activity Unit.",
        tags: ["Leadership", "People Development", "Coordination"],
        link: "#"
    },
    {
        title: "HR Recruitment & Assessment Program",
        description: "Screening 30-50 CVs daily, administering psychological assessments across 4 educational units, and staff training coordination.",
        tags: ["HR Management", "Recruitment", "Assessment"],
        link: "#"
    },
    {
        title: "CMO & Cross-Division Operations",
        description: "Coordinating 13 divisions in Emergency Call Platform, ensuring workflow monitoring, reporting, and SOP adherence.",
        tags: ["Strategy", "Marketing", "Management"],
        link: "#"
    }
];

// Render Functions
function renderEducation() {
    const container = document.getElementById('education-container');
    container.innerHTML = educationData.map(item => `
        <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 class="font-bold text-lg">${item.degree}</h3>
                <span class="text-xs px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 font-medium w-fit">${item.period}</span>
            </div>
            <p class="text-sm font-medium text-indigo-600 dark:text-indigo-400">${item.institution}</p>
            <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">${item.description}</p>
        </div>
    `).join('');
}

function renderExperience() {
    const container = document.getElementById('experience-container');
    container.innerHTML = experienceData.map(item => `
        <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 class="font-bold text-lg">${item.role}</h3>
                <span class="text-xs px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 font-medium w-fit">${item.period}</span>
            </div>
            <p class="text-sm font-medium text-indigo-600 dark:text-indigo-400">${item.company}</p>
            <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">${item.description}</p>
        </div>
    `).join('');
}

function renderOrganization() {
    const container = document.getElementById('organization-container');
    container.innerHTML = organizationData.map(item => `
        <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 class="font-bold text-lg">${item.role}</h3>
                <span class="text-xs px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 font-medium w-fit">${item.period}</span>
            </div>
            <p class="text-sm font-medium text-indigo-600 dark:text-indigo-400">${item.organization}</p>
            <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">${item.description}</p>
        </div>
    `).join('');
}

function renderSkills() {
    const container = document.getElementById('skills-container');
    container.innerHTML = skillsData.map(group => `
        <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <h3 class="font-bold text-lg text-indigo-600 dark:text-indigo-400">${group.category}</h3>
            <div class="flex flex-wrap gap-2">
                ${group.items.map(skill => `
                    <span class="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium">
                        ${skill}
                    </span>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function renderProjects() {
    const container = document.getElementById('projects-container');
    container.innerHTML = projectsData.map(project => `
        <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-4">
            <div class="space-y-2">
                <h3 class="font-bold text-lg">${project.title}</h3>
                <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">${project.description}</p>
            </div>
            <div class="space-y-4">
                <div class="flex flex-wrap gap-1.5">
                    ${project.tags.map(tag => `
                        <span class="px-2.5 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 text-xs font-medium">
                            ${tag}
                        </span>
                    `).join('')}
                </div>
                <a href="${project.link}" class="inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">
                    Lihat Detail <i data-lucide="external-link" class="w-4 h-4"></i>
                </a>
            </div>
        </div>
    `).join('');
    // Re-initialize icons for newly added HTML
    createIcons({ icons });
}

// Initialize renders
renderEducation();
renderExperience();
renderOrganization();
renderSkills();
renderProjects();

// Contact Form Handler
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.disabled = true;
    submitBtn.textContent = 'Mengirim...';

    try {
        const response = await fetch(contactForm.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            alert('Terima kasih! Pesan Anda telah berhasil dikirim ke email emreassyamil@gmail.com.');
            contactForm.reset();
        } else {
            alert('Maaf, terjadi kesalahan saat mengirim pesan. Silakan coba lagi.');
        }
    } catch (error) {
        alert('Maaf, terjadi kesalahan jaringan. Silakan coba beberapa saat lagi.');
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
    }
});
