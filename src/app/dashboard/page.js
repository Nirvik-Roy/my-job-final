'use client'
import React from 'react'

const page = () => {
    const Pill = ({ children, color = "indigo" }) => {
        const map = {
            indigo: "bg-indigo-100 text-indigo-700",
            green: "bg-emerald-100 text-emerald-700",
            amber: "bg-amber-100 text-amber-700",
            sky: "bg-sky-100 text-sky-700",
            slate: "bg-slate-100 text-slate-700",
            pink: "bg-pink-100 text-pink-700",
            violet: "bg-violet-100 text-violet-700",
        };
        return (
            <span className={`inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full ${map[color]}`}>
                {children}
            </span>
        );
    };

    const StatCard = ({ value, label, icon, tone = "indigo" }) => {
        const tones = {
            indigo: ["bg-indigo-50", "text-indigo-700"],
            amber: ["bg-amber-50", "text-amber-700"],
            emerald: ["bg-emerald-50", "text-emerald-700"],
            sky: ["bg-sky-50", "text-sky-700"],
        };
        const [bg, text] = tones[tone] || tones.indigo;

        return (
            <div className={`${bg} rounded-xl border border-slate-200 p-4`}>
                <div className="flex items-center gap-3">
                    <div className={`h-10 w-10 flex items-center justify-center rounded-lg bg-white border border-slate-200 ${text}`}>
                        {icon}
                    </div>
                    <div>
                        <div className="text-2xl font-semibold text-slate-900">{value}</div>
                        <div className="text-xs text-slate-500">{label}</div>
                    </div>
                </div>
            </div>
        );
    };

    const IconBag = ({ className = "w-5 h-5" }) => (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="3" y="7" width="18" height="13" rx="2" />
            <path d="M8 7V6a4 4 0 0 1 8 0v1" />
        </svg>
    );
    const IconBookmark = ({ className = "w-5 h-5" }) => (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M6 4h12a1 1 0 0 1 1 1v15l-7-4-7 4V5a1 1 0 0 1 1-1z" />
        </svg>
    );
    const IconBell = ({ className = "w-5 h-5" }) => (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M15 17h5l-1.4-1.4A7 7 0 0 1 18 10V9a6 6 0 1 0-12 0v1a7 7 0 0 1-0.6 2.6L4 17h5" />
            <path d="M9 17a3 3 0 0 0 6 0" />
        </svg>
    );
    const IconSearch = ({ className = "w-5 h-5" }) => (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="11" cy="11" r="7" />
            <line x1="20" y1="20" x2="16.65" y2="16.65" />
        </svg>
    );
    const IconPhone = ({ className = "w-4 h-4" }) => (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M22 16.92V21a1 1 0 0 1-1.09 1 19 19 0 0 1-8.26-3.06A18.86 18.86 0 0 1 3.06 11.35 19 19 0 0 1 0 3.09 1 1 0 0 1 1 2h4.09A1 1 0 0 1 6.1 2.78l1.8 4.18a1 1 0 0 1-.27 1.14L6.62 9.1a16 16 0 0 0 8.28 8.28l1-1a1 1 0 0 1 1.14-.27l4.18 1.8a1 1 0 0 1 .7.93z" />
        </svg>
    );
    const IconCheck = ({ className = "w-4 h-4" }) => (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 6L9 17l-5-5" />
        </svg>
    );
    const IconPin = ({ className = "w-4 h-4" }) => (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M12 22s7-8 7-12a7 7 0 1 0-14 0c0 4 7 12 7 12z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    );
    const IconDollar = ({ className = "w-4 h-4" }) => (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M12 1v22M17 5a4 4 0 0 0-4-2H9a3 3 0 0 0 0 6h6a3 3 0 0 1 0 6H8a4 4 0 0 1-4-2" />
        </svg>
    );
    const IconChevronDown = ({ className = "w-4 h-4" }) => (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M6 9l6 6 6-6" />
        </svg>
    );
    const IconArrowRight = ({ className = "w-4 h-4" }) => (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
        </svg>
    );

    const LogoMark = () => (
        <div className="h-9 w-9 rounded-lg bg-sky-600 flex items-center justify-center text-white">
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="4" y="7" width="16" height="12" rx="2" />
                <path d="M9 7V6a3 3 0 0 1 6 0v1" />
            </svg>
        </div>
    );



    const Sidebar = () => {
        const Item = ({ active, icon, label, count }) => (
            <button
                className={`w-full group flex items-center justify-between gap-2 rounded-lg px-3 py-2 text-sm transition ${active ? "bg-slate-100 text-sky-700" : "text-slate-600 hover:bg-slate-50"
                    }`}
            >
                <span className="flex items-center gap-3">
                    <span className={`h-8 w-8 grid place-items-center rounded-md border ${active ? "border-sky-200 text-sky-600 bg-white" : "border-slate-200 text-slate-500 bg-white"}`}>
                        {icon}
                    </span>
                    {label}
                </span>
                {typeof count !== "undefined" && (
                    <span className="text-[10px] text-slate-500">{String(count).padStart(2, "0")}</span>
                )}
            </button>
        );

        const IconCircle = () => <div className="w-3 h-3 rounded-full bg-slate-300" />;

        return (
            <aside className="hidden md:flex w-72 shrink-0 flex-col gap-2 border-r border-slate-200 p-0 pt-4 pb-4">
                <div className="text-[11px] uppercase tracking-wider text-slate-400 px-2 mt-2">Candidate Dashboard</div>
                <div className="mt-2 flex flex-col gap-1.5">
                    <Item active icon={<IconCircle />} label="Overview" />
                    <Item icon={<IconCircle />} label="Applied Jobs" />
                    <Item icon={<IconCircle />} label="Favorite Jobs" />
                    <Item icon={<IconCircle />} label="Job Alert" count={9} />
                    <Item icon={<IconCircle />} label="Settings" />
                </div>
                <div className="mt-auto">
                    <button className="w-full flex items-center gap-3 text-slate-500 hover:text-slate-700 text-sm px-3 py-2 rounded-lg hover:bg-slate-50">
                        <span className="h-8 w-8 grid place-items-center rounded-md border border-slate-200">↩</span>
                        Log-out
                    </button>
                </div>
            </aside>
        );
    };

    const ProfileAlert = () => {
        return (
            <div className="rounded-xl bg-rose-500 text-white p-5 md:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-white/20 grid place-items-center">
                        <div className="h-10 w-10 rounded-full bg-white text-rose-600 grid place-items-center font-semibold">EH</div>
                    </div>
                    <div>
                        <div className="font-medium">Your profile editing is not completed.</div>
                        <div className="text-white/80 text-sm">Complete your profile editing & build your custom Resume</div>
                    </div>
                </div>
                <button className="self-start md:self-auto inline-flex items-center gap-2 bg-white text-rose-600 hover:bg-rose-50 px-4 py-2 rounded-lg text-sm font-medium">
                    Edit Profile <IconArrowRight />
                </button>
            </div>
        );
    };

    const JobRow = ({ highlight, logo, logoBg, title, tag, location, salary, date, status }) => {
        return (
            <div className={`grid grid-cols-12 items-center gap-3 px-4 md:px-5 py-4 border-t first:border-t-0 ${highlight ? "ring-1 ring-sky-200 rounded-xl mx-1 my-1 bg-sky-50/30" : ""}`}>
                <div className="col-span-12 sm:col-span-6 flex items-start gap-3">
                    <div className={`h-10 w-10 rounded-lg ${logoBg} text-white grid place-items-center text-sm font-semibold shrink-0`}>{logo}</div>
                    <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                            <div className="font-medium text-slate-800">{title}</div>
                            {tag && <Pill color="sky">{tag}</Pill>}
                        </div>
                        <div className="mt-1 flex items-center gap-4 text-xs text-slate-500 flex-wrap">
                            <span className="inline-flex items-center gap-1.5">
                                <IconPin /> {location}
                            </span>
                            <span className="inline-flex items-center gap-1.5">
                                <IconDollar /> {salary}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="col-span-6 sm:col-span-3 text-xs sm:text-sm text-slate-500">{date}</div>

                <div className="col-span-3 sm:col-span-2">
                    {status === "Active" ? (
                        <span className="inline-flex items-center gap-1.5 text-emerald-600 text-sm">
                            <span className="h-4 w-4 rounded-full bg-emerald-100 grid place-items-center">
                                <IconCheck className="w-3 h-3" />
                            </span>
                            Active
                        </span>
                    ) : (
                        <span className="text-slate-500">{status}</span>
                    )}
                </div>

                <div className="col-span-3 sm:col-span-1 flex justify-start sm:justify-end">
                    <button className="text-sm font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1.5 rounded-lg">
                        View Details
                    </button>
                </div>
            </div>
        );
    };

    const Dashboard = () => {
        const jobs = [
            {
                logo: "Up",
                logoBg: "bg-green-500",
                title: "Networking Engineer",
                tag: "Remote",
                location: "Washington",
                salary: "$50k-80k/month",
                date: "Feb 2, 2019 19:28",
                status: "Active",
            },
            {
                logo: "Dr",
                logoBg: "bg-pink-500",
                title: "Product Designer",
                tag: "Full Time",
                location: "Dhaka",
                salary: "$50k-80k/month",
                date: "Dec 7, 2019 23:26",
                status: "Active",
            },
            {
                logo: "A",
                logoBg: "bg-black",
                title: "Junior Graphic Designer",
                tag: "Temporary",
                location: "Brazil",
                salary: "$50k-80k/month",
                date: "Feb 2, 2019 19:28",
                status: "Active",
            },
            {
                logo: "VB",
                logoBg: "bg-sky-600",
                title: "Visual Designer",
                tag: "Contract Base",
                location: "Wisconsin",
                salary: "$50k-80k/month",
                date: "Dec 7, 2019 23:26",
                status: "Active",
                highlight: true,
            },
        ];

        return (
            <main className="flex-1 p-3 md:p-3">
                <div className="mb-4">
                    <div className="text-slate-900 text-lg font-semibold">Hello, Esther Howard</div>
                    <div className="text-slate-500 text-sm">Here is your daily activities and job alerts</div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <StatCard value="589" label="Applied jobs" tone="indigo" icon={<IconBag />} />
                    <StatCard value="238" label="Favorite jobs" tone="amber" icon={<IconBookmark />} />
                    <StatCard value="574" label="Job Alerts" tone="emerald" icon={<IconBell />} />
                    <StatCard value=" " label=" " tone="sky" icon={<span />} />
                </div>

                <div className="mt-5">
                    <ProfileAlert />
                </div>

                <div className="mt-6 rounded-xl border border-slate-200 overflow-hidden">
                    <div className="flex items-center justify-between px-4 md:px-5 py-3 border-b bg-slate-50">
                        <div className="text-sm font-medium text-slate-700">Recently Applied</div>
                        <button className="text-sm text-slate-600 hover:text-slate-800 inline-flex items-center gap-1">
                            View all <IconArrowRight className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="grid grid-cols-12 gap-3 px-4 md:px-5 py-2 text-[11px] sm:text-xs text-slate-500">
                        <div className="col-span-12 sm:col-span-6">Job</div>
                        <div className="col-span-6 sm:col-span-3">Date Applied</div>
                        <div className="col-span-3 sm:col-span-2">Status</div>
                        <div className="col-span-3 sm:col-span-1">Action</div>
                    </div>

                    <div className="divide-y divide-slate-200">
                        {jobs.map((j, i) => (
                            <JobRow key={i} {...j} />
                        ))}
                    </div>
                </div>

                <footer className="text-center text-xs text-slate-400 mt-10 py-6 border-t">
                    © 2024 MyJob - Job Portal. All rights reserved
                </footer>
            </main>
        );
    };
    return (
        <>
            <div className="min-h-screen bg-white text-slate-800 flex flex-col">
                <div className="flex  uni_container">
                    <Sidebar />
                    <Dashboard />
                </div>
            </div>
        </>
    )
}

export default page
