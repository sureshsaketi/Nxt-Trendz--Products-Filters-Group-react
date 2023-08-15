import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
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

  const renderSearchInput = () => {
    const {searchInput} = props

    return (
      <div className="search-container">
        <input
          value={searchInput}
          type="search"
          className="category-search"
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
        />
        <BsSearch className="bs-search" />
      </div>
    )
  }

  const renderFilters = () => {
    const {categoryOptions} = props
    return categoryOptions.map(category => {
      const {activeCategoryId, changeCategory} = props
      const onClickCategoryOption = () => changeCategory(category.categoryId)
      const isActive = activeCategoryId === category.categoryId
      const categoryClassName = isActive ? `active-category` : ''

      return (
        <li
          key={category.name}
          className={`category-option ${categoryClassName}`}
          onClick={onClickCategoryOption}
        >
          {category.name}
        </li>
      )
    })
  }

  const renderRatings = () => {
    const {ratingsList} = props
    return ratingsList.map(rating => {
      const {activeRating, changeRatingId} = props
      const onClickRatingOption = () => changeRatingId(rating.ratingId)
      const isRatingUp = activeRating === rating.ratingId
      const activeRatingClassName = isRatingUp ? 'rating-up' : ''
      return (
        <li
          key={rating.ratingId}
          className={`rating-img-item ${activeRatingClassName}`}
          onClick={onClickRatingOption}
        >
          <img
            src={rating.imageUrl}
            alt={`rating ${rating.ratingId}`}
            className="rating-image"
          />
          <p> & up</p>
        </li>
      )
    })
  }

  const renderFiltersGroup = () => (
    <>
      <h1 className="category-heading">Category</h1>
      <ul className="category-options-list">{renderFilters()}</ul>
    </>
  )

  const ratingsList = () => (
    <>
      <h1 className="category-heading">Ratings</h1>
      <ul className="category-options-list">{renderRatings()}</ul>
    </>
  )
  const {clearFilters} = props
  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      {renderFiltersGroup()}
      {ratingsList()}
      <button
        type="button"
        className="clear-filter-button"
        onClick={clearFilters}
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
