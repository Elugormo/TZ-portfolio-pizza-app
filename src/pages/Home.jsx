import React from 'react'
import { Categories, SortPopup, Pizza } from '../components'

function Home({items}) {


  return (
        <div className="container">
          <div className="content__top">
            <Categories className="not-active" items = {['All', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые']} />
            <SortPopup items={['популярности', 'цене', 'алфавиту']} />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {
              items.map((item, idx) => <Pizza key={idx} types={item.types} name={item.name} price={item.price} source={item.imageUrl} sizes={item.sizes} />)
            }
          </div>
        </div>
    )
}

export default Home
