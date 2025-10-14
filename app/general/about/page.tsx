
import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'About',
 description: 'SEO description',
 keywords: ['About Page', 'Jhon', 'sales']
};

export default function AboutPage(){
    return (
        <>
        <span className="text-2xl"> About Page</span>
        
        </>
    )
}