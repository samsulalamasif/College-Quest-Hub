import React from 'react';
import { Link } from 'react-router-dom';
const ResearchPaper = () => {
    return (
        <div data-aos="fade-up-left" data-aos-duration="2000">
            <h1 className='text-5xl font-mono font-semibold text-center'>Research Paper Recommendation</h1>
            <p className='text-slate-600 font-bold py-8 text-center'>
                Our college student Research paper recommendation consectetur adipisicing elit. Reiciendis veniam, eligendi <br />
                quisquam omnis illo sit soluta cupiditate distinctio facere. Architecto deleniti sdrt sdf
                <br />neque, ab tempore quos perspiciatis est sapiente alias voluptas.</p>
            <div>

                <div className='w-4/5 mx-auto gap-5 flex flex-col lg:flex-row mt-5 mb-20'>
                    <div className='w-1/2 mx-auto space-y-8'>
                        <li>Google Scholar <Link className="font-semibold text-sky-500" to="www.scholar.google.com">(scholar.google.com):</Link> This is a freely accessible search engine that indexes the full text or metadata of scholarly literature across various disciplines.</li>

                        <li>PubMed <Link className="font-semibold text-sky-500" to="www.ncbi.nlm.nih.gov/pubmed/">(www.ncbi.nlm.nih.gov/pubmed/):</Link> A free database that primarily focuses on life sciences and biomedical topics, providing access to a vast collection of research.</li>
                        <li>IEEE Xplore <Link className="font-semibold text-sky-500" to="www.ieeexplore.ieee.org">(ieeexplore.ieee.org):</Link> A digital library for research papers in the fields of engineering, computer science, and related technologies.</li>
                    </div>

                    <div className='w-1/2 mx-auto space-y-8'>
                        <li>JSTOR <Link className="font-semibold text-sky-500" to="www.jstor.org">(www.jstor.org):</Link> A digital library that provides access to academic journals, books, and primary sources in various disciplines.</li>
                        <li>ScienceDirect <Link className="font-semibold text-sky-500" to="www.sciencedirect.com">(www.sciencedirect.com):</Link> A leading full-text scientific database offering journal articles and book chapters in diverse subject areas.</li>
                        <li>ArXiv <Link className="font-semibold text-sky-500" to="www.arxiv.org">(arxiv.org):</Link> An open-access repository for preprints in physics, mathematics, computer science, quantitative biology, quantitative finance, statistics, electrical engineering, systems science, and economics.</li>
                    </div>

                </div>

            </div>
        </div>
    );
};
export default ResearchPaper;