import { ArrowRightOutlined } from '@ant-design/icons'
import { HTMLAttributes } from 'react'
import { DesignSystemUtility } from '../helpers/utility'

interface Props extends HTMLAttributes<HTMLElement> {
  title: string
  subtitle: string
  questionAnswers: { question: string; answer: string }[]
}

export const LandingFAQ: React.FC<Props> = ({
  title,
  subtitle,
  questionAnswers,
  className,
  ...props
}) => {
  return (
    <section
      className={DesignSystemUtility.buildClassNames('py-16 px-5', className)}
      {...props}
    >
      <div className="max-w-7xl mx-auto ">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <h3 className="text-3xl lg:text-4xl font-bold lg:tracking-tight">
              {title}
            </h3>
            <p className="text-lg mt-4 text-slate-600 dark:text-slate-400">
              {subtitle}
            </p>
          </div>
          <div className="w-full md:w-1/2 max-w-xl mx-auto">
            <div className="grid divide-y divide-neutral-200 dark:divide-slate-400">
              {questionAnswers.map((item, index) => (
                <div className="py-5" key={index}>
                  <details className="group">
                    <summary className="flex justify-between text-lg items-center font-medium cursor-pointer list-none">
                      <span>{item.question}</span>
                      <span className="transition group-open:rotate-180">
                        <ArrowRightOutlined />
                      </span>
                    </summary>
                    <p className="text-slate-600 dark:text-slate-400 mt-3 group-open:animate-fadeIn">
                      {item.answer}
                    </p>
                  </details>
                </div>
              ))}
              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between text-lg items-center font-medium cursor-pointer list-none">
                    <span>
                      What if the original owner needs the device back quickly?
                    </span>
                    <span className="transition group-open:rotate-180">
                      <ArrowRightOutlined />
                    </span>
                  </summary>
                  <p className="text-slate-600 dark:text-slate-400 mt-3 group-open:animate-fadeIn">
                    If the original owner needs the device back quickly, they
                    can utilize the Recall function built into our marketplace.
                    This feature allows owners to request the return of their
                    device efficiently. We also recommend establishing a clear
                    agreement between the owner and the renter regarding the
                    return policy to ensure smooth communication and
                    understanding of each party's needs.
                  </p>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between text-lg items-center font-medium cursor-pointer list-none">
                    <span>Who is liable if the device breaks?</span>
                    <span className="transition group-open:rotate-180">
                      <ArrowRightOutlined />
                    </span>
                  </summary>
                  <p className="text-slate-600 dark:text-slate-400 mt-3 group-open:animate-fadeIn">
                    Liability for device damage will depend on the terms agreed
                    upon in the rental contract. Typically, the renter is
                    responsible for any damage incurred during their use, unless
                    otherwise specified.
                  </p>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between text-lg items-center font-medium cursor-pointer list-none">
                    <span>
                      What types of devices would be eligible for this program?
                    </span>
                    <span className="transition group-open:rotate-180">
                      <ArrowRightOutlined />
                    </span>
                  </summary>
                  <p className="text-slate-600 dark:text-slate-400 mt-3 group-open:animate-fadeIn">
                    Eligible devices typically include medical equipment that is
                    in good working condition and meets safety standards.
                    Specific eligibility criteria will be outlined in our
                    program guidelines.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LandingFAQ
