import Link from "next/link";
import BitcoinPrice from "@/components/bitcoinPrice";

export default function BitcoinRates() {

    return (
        <div className="BitcoinRates componentBox">
            <BitcoinPrice></BitcoinPrice>
        </div>
    )
}