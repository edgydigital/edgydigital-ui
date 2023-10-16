import React, {Fragment, ReactNode} from 'react'
import Breadcrumb, {Props as BreadcrumbProps} from './Breadcrumb'

interface Props {
  className?: string
  data: (BreadcrumbProps & {link?: Partial<URL>})[]
  separator?: ReactNode
  LinkComponent?: React.ExoticComponent<{children?: React.ReactNode}>
}

export default function Breadcrumbs({className, data, separator, LinkComponent}: Props) {
  const WrapperElement = LinkComponent ?? Fragment

  return (
    <div className={`flex w-fit items-center rounded-small px-2 py-1 ${className}`}>
      {data
        ? data.map((breadcrumb, index, array) => (
            <div className="flex items-center" key={index}>
              <WrapperElement {...breadcrumb.link}>
                <Breadcrumb key={index} {...breadcrumb} />
              </WrapperElement>
              {index !== array.length - 1 ? <div className="mx-3">{separator ?? '/'}</div> : null}
            </div>
          ))
        : null}
    </div>
  )
}
