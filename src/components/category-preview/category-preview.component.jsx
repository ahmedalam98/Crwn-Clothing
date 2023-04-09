import ProductCard from "../product-card/product-card.component";

import "./category-preview.styles.scss";

const CategoryPreview = ({ title, products }) => (
  <div className="category-preview-container">
    <h2>
      {/* we use a span inside the h2 to make the text only is clickable to show the category */}
      <span className="title">{title.toUpperCase()}</span>
    </h2>
    <div className="preview">
      {products
        // to show only 4 products for each category at the shop page
        // _ ---> ignoring the callback of filter function
        .filter((_, idx) => idx < 4)
        .map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  </div>
);

export default CategoryPreview;
