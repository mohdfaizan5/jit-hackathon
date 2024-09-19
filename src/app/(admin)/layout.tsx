import React, { ReactNode } from 'react'

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <header>
        Admin
      </header>
      {children}
    </div>
  )
}

export default layout