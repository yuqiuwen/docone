/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import Layout from '@theme-original/Layout';
import './styles.css';

export default function LayoutWrapper(props) {
  const {children, noFooter, wrapperClassName, pageClassName} = props;
  return (
    <Layout {...props} />

  );
}
