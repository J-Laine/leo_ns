import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
        <div className="bg-green-200 p-8 h-[450px] text-black flex items-center justify-center">
              Highlighted content with yellow background
        </div>
        <div className="bg-red-200 p-8 h-[450px] text-black flex items-center justify-center">
            palveluvaihtoehto karuselli
        </div>
        <div className="bg-blue-200 p-8 h-[650px] text-black flex items-center justify-center">
            yhetydenottolomake jne
        </div>
    </>
  );
}