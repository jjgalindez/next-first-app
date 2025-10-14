import { Metadata } from "next";


export const metadata: Metadata = {
 title: 'Contact',
 description: 'Contact Page',
 keywords: ['Page','contact']
 
};

export default function ContactPage(){
    return (
        <>
        <span className="text-2xl"> Contact Page</span>
        
        </>
    )
}