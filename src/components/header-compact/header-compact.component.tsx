import { useState } from 'react';
import Image from 'next/image';

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

export const HeaderCompact = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
      <div className={`md:container md:mx-auto flex flex-row gap-4 py-[30px]`}>
        <div className={`basis-2/4`}>
          <svg viewBox="0 0 1215 306">
            <use href="#logo"></use>
          </svg>
        </div>
        <div className={`basis-2/4 flex justify-center`}>
          Menu
        </div>
      </div>
  )
}

export default HeaderCompact