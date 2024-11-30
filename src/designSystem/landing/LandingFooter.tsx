import { Logo } from '@/designSystem/layouts/NavigationLayout/components/Logo'
import { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLElement> {}

export const LandingFooter: React.FC<Props> = ({ ...props }) => {
  return (
    <div className="relative mt-16" {...props}>
      <div className="border-t border-neutral-100 dark:border-neutral-800 px-8 pt-20 pb-32 relative bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto flex sm:flex-row flex-col justify-between items-start">
          <div>
            <div className="mr-4 md:flex mb-4">
              <Logo height={50} isLabel />
            </div>
            <div>Copyright &copy; 2024</div>
            <div className="mt-2">All rights reserved</div>
          </div>
          <div className="grid grid-cols-3 gap-10 items-start mt-10 md:mt-0">
            {/* Removed Twitter and LinkedIn links */}
          </div>
        </div>
      </div>
    </div>
  )
}
