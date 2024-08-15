
import GradientText from './GradientText'

type SectionHeaderProps = {
    meta: {
        title:string,
        subtitle:string
    }
}

const SectionHeader = ({meta}:SectionHeaderProps) => {
  return (
    <div className="flex flex-col items-center gap-3 text-center select-none sm:select-text">
          <GradientText
            as="h2"
            className="bg-gradient-to-r from-[#8750f7_0%] to-[#ffffff_100%] mx-auto font-bold text-2xl sm:text-2xl md:text-4xl md:[line-height:1.2]"
          >
            {meta.title}
          </GradientText>
          <p className="text-sm text-white sm:text-base">{meta.subtitle}</p>
        </div>
  )
}

export default SectionHeader