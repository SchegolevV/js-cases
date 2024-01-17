class PaginationHelper {
  constructor(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
    this.pages = this.pageCount();
  }

  itemCount() {
    return this.collection.length;
  }
  pageCount() {
    const i = this.collection.length / this.itemsPerPage;
    return Number.isInteger(i) ? i : Math.floor(i + 1);
  }
  pageItemCount(pageIndex) {
    if (pageIndex > this.pages - 1 || pageIndex < 0) return -1;

    if (pageIndex === this.pages - 1) {
      if (this.collection.length % this.itemsPerPage == 0) {
        return this.itemsPerPage;
      }
      return this.collection.length % this.itemsPerPage;
    }

    return this.itemsPerPage;
  }
  pageIndex(itemIndex) {
    if (itemIndex > this.collection.length - 1 || itemIndex < 0) return -1;
    return Math.floor(itemIndex / this.itemsPerPage);
  }
}

const helper = new PaginationHelper(
  ["jack", "tom", "carl", "helen", "john", "martin"],
  6
);

helper.itemCount(); //=
helper.pageCount(); //=
helper.pageItemCount(0); //=
helper.pageIndex(5); //=
