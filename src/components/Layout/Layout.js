// @flow

import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import Footer from '../Footer'
import Menu from '../Menu'
import Brand from '../Brand'
import GlobalSearch from '../GlobalSearch'
import SidebarSignupForm from '../SidebarSignupForm'

import s from './Layout.css'

type Props = {
  children: any,
}

const Layout = ({ children }: Props) => (
  <div className={s.appWrapper}>
    <div className={`${s.mainContent} main-content`} id="main-layout">
      <GlobalSearch />
      {children}
      <Footer />
    </div>
    <aside className={s.sidebar}>
      <Menu />
      <Brand />
      <SidebarSignupForm />
    </aside>
  </div>
)

export default withStyles(s)(Layout)
