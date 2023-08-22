import Link from 'next/link';
import { sidebarLinks } from '../../constants/index'
import Image from 'next/image';

function LeftSidebar() {
    return (
        <section className="custom-scrollbar leftsidebar">
            <div className="flex w-full flex-1 flex-col gap-6 px-6">
                {sidebarLinks.map((link, i) => (
                    <Link
                        className='leftsidebar_link'
                        href={link.route}
                        key={`${i}`}>
                        <Image
                            src={link.imgURL}
                            alt={link.label}
                            width={24}
                            height={24}
                        />
                        <p className='text-light-1 max-lg:hidden'>
                            {link.label}
                        </p>

                    </Link>
                )
                )
                }

            </div>
        </section>
    )

}

export default LeftSidebar;