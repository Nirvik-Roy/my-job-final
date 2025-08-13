'use client'

import LoaderNew from "@/app/LoaderNew";
import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import { toast } from "react-toastify";

export default function page() {
  const [file, setFile] = useState()
  const [isloading, setisloading] = useState(false)
  const [post, setPost] = useState({
    jobLogo: '',
    jobTitle: '',
    jobRole: '',
    jobType: '',
    jobTags: '',
    minSalary: '',
    maxSalary: '',
    salType: '',
    education: '',
    experience: '',
    vacancies: '',
    expiredOn: '',
    jobLevel: '',
    applyJobOn: '',
    description: '',
    jobResponsibility: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const token = Cookies.get('job_token')
    const JobPost = { ...post }
    setisloading(true)
    try {
      // Image Url Generate//
      if (file) {
        const formData = new FormData();
        formData.append("image", file);
        const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}upload-image`, formData)
        if (res.data?.success) {
          JobPost.jobLogo = res.data.payload?.imageUrl;
        }
      }
      // Post New Job //       
      if (token) {
        const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}job/create-job`, JobPost, {
          headers: {
            Authorization: `${token}`
          }
        });
        if (res.data?.success) {
          toast.success(res.data?.message)

        }

      }
    } catch (err) {
      toast.error(err.message);

    } finally {
      setisloading(false)
    }
  }
  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value })
  }

  const handleImage = (e) => {
    setFile(e.target.files[0])
  }


  return (

    <>
      {isloading && <div style={{
        position: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', zIndex: '10',
        background: 'rgba(0,0,0,0.5)',
        height: '100vh',
        width: '100vw',
        top: '0'
      }}><LoaderNew /></div>}
      <div className="min-h-screen p-6 bg-gradient-to-br from-slate-50 via-white to-indigo-50">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl border border-slate-200 bg-white/80 shadow-xl backdrop-blur">
            {/* Header */}
            <div className="px-8 py-6 border-b border-slate-200">
              <h1 className="text-2xl font-semibold text-slate-900">Post a Job</h1>
              <p className="mt-1 text-sm text-slate-600">
                Share role details, compensation, and how candidates should apply.
              </p>
            </div>

            {/* Form */}
            <form action="#" method="post" className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Company Logo */}
                <div className="col-span-1">
                  <label htmlFor="companyLogo" className="block text-sm font-medium text-slate-800 mb-2">
                    Company Logo
                  </label>
                  <label
                    htmlFor="companyLogo"
                    className="flex h-40 w-full cursor-pointer items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-white hover:bg-slate-50 transition"
                  >
                    <div className="text-center">
                      <svg className="mx-auto h-10 w-10 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3l4.5 4.5M12 3v13.5" />
                      </svg>
                      <span className="mt-2 block text-sm font-medium text-slate-900">
                        Upload logo
                      </span>
                      <span className="text-xs text-slate-500">PNG, JPG, SVG up to 2MB</span>
                    </div>
                  </label>
                  <input onChange={handleImage} id="companyLogo" name="jobLogo" type="file" accept="image/*" className="sr-only" />
                </div>

                {/* Job Title */}
                <div className="col-span-1">
                  <label htmlFor="jobTitle" className="block text-sm font-medium text-slate-800 mb-2">
                    Job Title
                  </label>
                  <input
                    onChange={handleChange}
                    id="jobTitle"
                    name="jobTitle"
                    type="text"
                    required
                    placeholder="e.g., Senior Frontend Engineer"
                    className="block w-full rounded-xl bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none"
                  />
                </div>

                {/* Job Role */}
                <div className="col-span-1">
                  <label htmlFor="jobRole" className="block text-sm font-medium text-slate-800 mb-2">
                    Job Role
                  </label>
                  <input onChange={handleChange}
                    id="jobRole"
                    name="jobRole"
                    type="text"
                    placeholder="e.g., Frontend, Backend, DevOps"
                    className="block w-full rounded-xl bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none"
                  />
                </div>

                {/* Job Type (select) */}
                <div className="col-span-1">
                  <label htmlFor="jobType" className="block text-sm font-medium text-slate-800 mb-2">
                    Job Type
                  </label>
                  <div className="relative">
                    <select
                      onChange={handleChange}
                      id="jobType"
                      name="jobType"
                      required
                      defaultValue=""
                      className="block w-full appearance-none rounded-xl bg-white px-4 py-3 pr-10 text-sm text-slate-900 ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none"
                    >
                      <option value="" disabled>Select job type</option>
                      <option>Full-time</option>
                      <option>Part-time</option>
                      <option>Contract</option>
                      <option>Internship</option>
                      <option>Temporary</option>
                      <option>Freelance</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                      <svg className="h-4 w-4 text-slate-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Job Tags */}
                <div className="col-span-full">
                  <label htmlFor="jobTags" className="block text-sm font-medium text-slate-800 mb-2">
                    Job Tags
                  </label>
                  <input onChange={handleChange}
                    id="jobTags"
                    name="jobTags"
                    type="text"
                    placeholder="e.g., React, TypeScript, Tailwind (comma-separated)"
                    className="block w-full rounded-xl bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none"
                  />
                </div>

                {/* Salary Group */}
                <div className="col-span-full">
                  <label className="block text-sm font-medium text-slate-800 mb-2">
                    Compensation
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <input onChange={handleChange}
                        id="minSalary"
                        name="minSalary"
                        type="number"
                        min="0"
                        placeholder="Min salary"
                        className="block w-full rounded-xl bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none"
                      />
                    </div>
                    <div>
                      <input onChange={handleChange}
                        id="maxSalary"
                        name="maxSalary"
                        type="number"
                        min="0"
                        placeholder="Max salary"
                        className="block w-full rounded-xl bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none"
                      />
                    </div>
                    <div>
                      <div className="relative">
                        <select
                          onChange={handleChange}
                          id="salType"
                          name="salType"
                          defaultValue=""
                          className="block w-full appearance-none rounded-xl bg-white px-4 py-3 pr-10 text-sm text-slate-900 ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none"
                        >
                          <option value="" disabled>Salary type</option>
                          <option>Yearly</option>
                          <option>Monthly</option>
                          <option>Weekly</option>
                          <option>Daily</option>
                          <option>Hourly</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                          <svg className="h-4 w-4 text-slate-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="mt-2 text-xs text-slate-500">Enter numeric amounts. Validation for ranges can be handled server-side.</p>
                </div>

                {/* Education */}
                <div className="col-span-1">
                  <label htmlFor="education" className="block text-sm font-medium text-slate-800 mb-2">
                    Education
                  </label>
                  <input onChange={handleChange}
                    id="education"
                    name="education"
                    type="text"
                    placeholder="e.g., Bachelor’s in CS or equivalent"
                    className="block w-full rounded-xl bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none"
                  />
                </div>

                {/* Experience */}
                <div className="col-span-1">
                  <label htmlFor="experience" className="block text-sm font-medium text-slate-800 mb-2">
                    Experience
                  </label>
                  <input onChange={handleChange}
                    id="experience"
                    name="experience"
                    type="text"
                    placeholder="e.g., 3+ years"
                    className="block w-full rounded-xl bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none"
                  />
                </div>

                {/* Vacancies */}
                <div className="col-span-1">
                  <label htmlFor="vacancies" className="block text-sm font-medium text-slate-800 mb-2">
                    Vacancies
                  </label>
                  <input onChange={handleChange}
                    id="vacancies"
                    name="vacancies"
                    type="number"
                    min="1"
                    placeholder="e.g., 3"
                    className="block w-full rounded-xl bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none"
                  />
                </div>

                {/* Expired On */}
                <div className="col-span-1">
                  <label htmlFor="expiredOn" className="block text-sm font-medium text-slate-800 mb-2">
                    Expired On
                  </label>
                  <input onChange={handleChange}
                    id="expiredOn"
                    name="expiredOn"
                    type="date"
                    required
                    className="block w-full rounded-xl bg-white px-4 py-3 text-sm text-slate-900 ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none"
                  />
                </div>

                {/* Job Level */}
                <div className="col-span-1">
                  <label htmlFor="jobLevel" className="block text-sm font-medium text-slate-800 mb-2">
                    Job Level
                  </label>
                  <input onChange={handleChange}
                    id="jobLevel"
                    name="jobLevel"
                    type="text"
                    placeholder="e.g., Junior, Mid, Senior, Lead"
                    className="block w-full rounded-xl bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none"
                  />
                </div>

                {/* Apply Job On (select) */}
                <div className="col-span-1">
                  <label htmlFor="applyJobOn" className="block text-sm font-medium text-slate-800 mb-2">
                    Apply Via
                  </label>
                  <div className="relative">
                    <select
                      onChange={handleChange}
                      id="applyJobOn"
                      name="applyJobOn"
                      required
                      defaultValue=""
                      className="block w-full appearance-none rounded-xl bg-white px-4 py-3 pr-10 text-sm text-slate-900 ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none"
                    >
                      <option value="" disabled>Select method</option>
                      <option>On Jobpilot</option>
                      <option>External Platform</option>
                      <option>On Your Email</option>

                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                      <svg className="h-4 w-4 text-slate-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <p className="mt-2 text-xs text-slate-500">Choose how candidates will submit applications.</p>
                </div>

                {/* Description */}
                <div className="col-span-full">
                  <label htmlFor="description" className="block text-sm font-medium text-slate-800 mb-2">
                    Job Description
                  </label>
                  <textarea
                    onChange={handleChange}
                    id="description"
                    name="description"
                    required
                    rows={5}
                    placeholder="Describe the role, mission, team, tech stack, and impact."
                    className="block w-full rounded-xl bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none"
                  />
                </div>

                {/* Job Responsibility */}
                <div className="col-span-full">
                  <label htmlFor="jobResponsibility" className="block text-sm font-medium text-slate-800 mb-2">
                    Key Responsibilities
                  </label>
                  <textarea
                    onChange={handleChange}
                    id="jobResponsibility"
                    name="jobResponsibility"
                    rows={5}
                    placeholder="List responsibilities (one per line)."
                    className="block w-full rounded-xl bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none"
                  />
                </div>
              </div>

              {/* Actions */}
              <div className="mt-8 flex items-center justify-end gap-3">
                <button
                  type="reset"
                  className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium text-slate-700 ring-1 ring-inset ring-slate-300 hover:bg-slate-50 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                >
                  Post Job
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>

  );
}