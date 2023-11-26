import React, { Component } from 'react'
import Banner from './Banner'
import Item from './Item'

export default class Body extends Component {
  render() {
    return (
      <div>
        <Banner/>
        <section class="pt-4">
            <div class="container px-lg-5 row mx-auto">
                <Item/>
                <Item/>
                <Item/>
                <Item/>
            </div>
        </section>
      </div>
    )
  }
}
