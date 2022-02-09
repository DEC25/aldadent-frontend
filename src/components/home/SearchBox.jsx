import React from 'react'

export default function SearchBox({ Placeholder, OnChange, ItemsResult, ClassName }) {
  return (
    <div className={`search-box ${ClassName}`}>
        <input
            id='search-box__input'
            type={'search'}
            className={'form-control me-2'}
            placeholder={Placeholder}
            onChange={OnChange}
        />
        <ul id='search-box__result' className='list-group'>
            {
                ItemsResult.map((item, idx) => {
                    return (
                        <button
                            key={idx}
                            type='button'
                            className='list-group-item list-group-item-action'
                        >
                            { item }
                        </button>
                    )
                })
            }
        </ul>
    </div>
  )
}