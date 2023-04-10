import ProductCard from "../product-card/product-card.component";

import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from "./category-preview.styles";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        {/* we use a span inside the h2 to make the text only is clickable to show the category */}
        <Title to={title}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {products
          // to show only 4 products for each category at the shop page
          // _ ---> ignoring the callback of filter function
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
