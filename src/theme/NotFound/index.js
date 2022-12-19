/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '@theme/Layout';
import classnames from 'classnames';
import notFoundSvg from './img/notFound.svg'
import styles from './styles.module.css';

function NotFound() {
  return (
    <Layout title="Page Not Found">
      <div className="container margin-vert--xl">
        <div className="row">
          <div className={classnames("col col--6 col--offset-3", styles.notFoundContainer)}>
            {/* TODO */}
            {/* <img src='./img/notFound.svg' className={classnames("margin-bottom--lg", styles.notFoundBlob)}/> */}
            <h1 className="hero__title">Sorry! Page Not Found</h1>
            <p>The documentation site has recently moved.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default NotFound;