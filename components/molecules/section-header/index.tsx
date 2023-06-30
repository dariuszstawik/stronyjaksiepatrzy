import SectionSupertitle from '@/components/atoms/section-supertitle'
import SectionTitle from '@/components/atoms/section-title';
import React from 'react'

interface SectionHeaderProps {
    superTitle: string;
    title: string;
    isCentered?: boolean;
}

const SectionHeader = ({superTitle, title, isCentered} : SectionHeaderProps) => {
  return (
    <div className={isCentered ? "flex flex-col justify-center" : ""}>
<SectionSupertitle>{superTitle}</SectionSupertitle>
    <SectionTitle>{title}</SectionTitle>
    </div>
  )
}

export default SectionHeader;