import { HTMLAttributes } from 'react'
import Slider from 'react-slick'
import { DesignSystemUtility } from '../helpers/utility'

type FeatureType = {
  heading: string
  description: string | any
  icon: any
}

interface Props extends HTMLAttributes<HTMLElement> {
  title: string
  subtitle: string
  features: FeatureType[]
}

export const LandingFeatures: React.FC<Props> = ({
  title,
  subtitle,
  features,
  className,
  ...props
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  }

  return (
    <section
      className={DesignSystemUtility.buildClassNames('py-16 px-5', className)}
      {...props}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-bold lg:tracking-tight">
          Everything You Need to Streamline <br /> Medical Device Access
        </h2>
        <p className="text-lg mt-4 text-slate-600 dark:text-slate-400">
          {subtitle}
        </p>

        <Slider {...settings} className="mt-16">
          {features.map((item, idx) => (
            <div
              key={idx + 'feature'}
              className="flex gap-4 items-start w-64 bg-white p-8 rounded-lg shadow"
            >
              <div className="mt-1 text-black mt-1 bg-black dark:bg-slate-800 rounded-full p-2 pt-1 w-8 h-8 text-white">
                {item.icon}
              </div>
              <div>
                <h3 className="font-semibold text-4xl text-black">
                  {item.heading}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mt-2 leading-relaxed text-lg">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}
