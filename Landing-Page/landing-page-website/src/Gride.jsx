function GrideLayout() {
  return (
    <div class="container text-center ">
    <div class="row justify-content-md-center">
        <div class="col col-lg-2">
            1 of 3
        </div>
        <div class="col-md-auto --bs-primary-bg-subtle">
            Variable width content
        </div>
        <div class="col col-lg-2 bg-success  border float-start border-primary">
            Lorem ipsum dolor
        </div>
    </div>
  <div class="row">
    <div class="col">
      1 of 3
    </div>
    <div class="col-md-auto">
      Variable width content
    </div>
    <div class="col col-lg-2">
      3 of 3
    </div>
  </div>
</div>
  );
}

export default GrideLayout;
