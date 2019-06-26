import React from "react"
import { FaFile, FaGithub, FaTwitter, FaFacebook } from 'react-icons/fa'

import Layout from '../components/layout'
import './index.css'

export default () => {
  return (
    <Layout>
      <section>
        <ul id="links">
          <li><a href="http://mith.umd.edu"><FaFile /></a></li>
          <li><a href="https://github.com/umd-mith"><FaGithub /></a></li>
          <li><a href="https://twitter.com/umd_mith"><FaTwitter /></a></li>
          <li><a href="https://www.facebook.com/UMD.MITH"><FaFacebook /></a></li>
        </ul>
      </section>
    </Layout>
  )
}
