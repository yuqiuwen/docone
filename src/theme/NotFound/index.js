/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '@theme/Layout';
import classnames from 'classnames';
import NotFoundSvg from '@site/static/img/page_not_found.svg'
import styles from './styles.module.css';

function NotFound() {
  return (
    <Layout title="Page Not Found">
      <div className="container margin-vert--xl">
        <div className="row">
          <div className={classnames(styles.notFoundContainer)}>
           
            <h1 className="hero__title">Sorry! Page Not Found</h1>
            <NotFoundSvg />
            
          
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default NotFound;