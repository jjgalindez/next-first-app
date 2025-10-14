import { Metadata } from "next";


export const metadata: Metadata = {
 title: 'Pricing',
 description: 'Pricing Page',
 keywords: ['pricing', 'buy']
};

export default function PricingPage(){
    return (
        <>
        <span className="text-2xl">Pricing Page</span>
        </>
    )
}