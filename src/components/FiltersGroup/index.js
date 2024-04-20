import './index.css'
import {BsSearch} from 'react-icons/bs'

const FiltersGroup = props => {
  const ratingOptionItems = () => {
    const {ratingDetails} = props

    return ratingDetails.map(rating => {
      const {activeRating, onChangeRating} = props
      const isActive = activeRating === rating.ratingId
      const className = isActive ? 'addClassName' : 'removeClassName'
      const onClickRating = () => onChangeRating(rating.ratingId)
      return (
        <li>
          <button className="rating-btn" onClick={onClickRating} type="button">
            <img
              src={rating.imageUrl}
              className="rating-img"
              alt={`rating ${rating.ratingId}`}
            />
            <p className={className}>& Up</p>
          </button>
        </li>
      )
    })
  }

  const ratingOptions = () => (
    <>
      <h1 className="rating-head">Rating</h1>
      <ul className="rating-list">{ratingOptionItems()}</ul>
    </>
  )

  const categoryOptionItems = () => {
    const {categoryDetails} = props

    return categoryDetails.map(category => {
      const {activeCategory, onChangeCategory} = props
      const isActive = activeCategory === category.categoryId
      const className = isActive ? 'addStyle' : 'removeStyle'
      const onClickCategory = () => onChangeCategory(category.categoryId)
      return (
        <li className="category-list">
          <p className={className} onClick={onClickCategory}>
            {category.name}
          </p>
        </li>
      )
    })
  }

  const categoryOptions = () => (
    <>
      <h1 className="category">Category</h1>
      <ul className="category-list">{categoryOptionItems()}</ul>
    </>
  )

  const onChangeSearchInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event.target.value)
  }

  const onEnterSearchInput = event => {
    const {enterSearchInput} = props
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  const searchcontainer = () => {
    const {searchInput} = props
    return (
      <div className="search-container">
        <input
          type="search"
          className="search-box"
          placeholder="Search"
          value={searchInput}
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
        />
        <BsSearch />
      </div>
    )
  }

  const {onClearFilter} = props

  return (
    <div className="filters-group-container">
      {searchcontainer()}
      {categoryOptions()}
      {ratingOptions()}
      <button
        className="clearFilter-button"
        type="button"
        onClick={onClearFilter}
      >
        Clear Filters
      </button>
    </div>
  )
}
export default FiltersGroup
