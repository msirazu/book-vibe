const sortBooks = (data, type) => {
  const stored = [...data];
  if (type === "rating-low") {
    stored.sort((a, b) => a.rating - b.rating);
  }
  if (type === "rating-high") {
    stored.sort((a, b) => b.rating - a.rating);
  }
  if (type === "page-low") {
    stored.sort((a, b) => a.totalPages - b.totalPages);
  }
  if (type === "page-high") {
    stored.sort((a, b) => b.totalPages - a.totalPages);
  }
  if (type === "year-low") {
    stored.sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
  }
  if (type === "year-high") {
    stored.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
  }
  return stored;
};

export {sortBooks};
