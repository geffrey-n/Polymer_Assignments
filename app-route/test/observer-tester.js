/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
import '../app-route.js';

import '../app-location.js';
import {Polymer} from '@polymer/polymer/lib/legacy/polymer-fn.js';
import {html} from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
      <app-location route="{{route}}"></app-location>
      <app-route route="{{route}}" pattern="/report/:id" data="{{data}}" active="{{active}}"></app-route>
  `,

  is: 'observer-tester',

  properties: {
    route: {
      type: Object,
      notify: true,
    },
    data: {
      type: Object,
      notify: true,
    },
    active: {
      type: Boolean,
      value: false,
      observer: 'checkActive',
    }
  },

  checkActive: function(active) {
    var x = 1;
  }
});
