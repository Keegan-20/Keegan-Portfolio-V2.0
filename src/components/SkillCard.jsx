import { memo } from 'react';
import PropTypes from 'prop-types'; 

const SkillCard = ({
    imgSrc, 
    label,
    desc,
    classes
}) => {
  return (
    <div className={'flex items-center gap-3 ring-2  ring-inset ring-slate-50/10 rounded-2xl p-2 md:p-3 hover:bg-zinc-800 transition-colors ' + classes}>
        <figure className='bg-slate-600/50 rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-zinc-800 transition-colors'>
            <img 
              src={imgSrc}
              width={32}
              height={32}
              alt={label}
              loading="lazy"
            />
        </figure>
        <div>
            <h3 className='text-sm md:text-base'>{label}</h3>
            <p className='text-zinc-400 text-sm md:inline-block hidden '>{desc}</p>
        </div>
    </div>
  )
}

SkillCard.propTypes ={
    imgSrc:PropTypes.string.isRequired,
    label:PropTypes.string.isRequired,
    desc:PropTypes.string.isRequired,
    classes:PropTypes.string
}

export default memo(SkillCard)