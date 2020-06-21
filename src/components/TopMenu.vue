<template>
  <div class="TopMenu">
    <nav class="navbar navbar-light bg-light" style="color: white !important;
    background-color: #17449e !important;
    border: 1px solid #17449e !important;">
        <a class="navbar-brand" style="color:white">Администрирование</a>
        <form class="form-inline">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="SubmitBtn" type="submit">Search</button>
        </form>
        <div class="btn-group">
            <button type="button" class="btn btn-secondary">Reference</button>
            <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" id="dropdownMenuReference" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-reference="parent">
              <span class="sr-only">Toggle Dropdown</span>
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuReference">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Separated link</a>
            </div>
        </div>
    </nav>
  </div>
</template>
<style scoped>
    .TopMenu{
        color: white !important;
        background-color: #17449e !important;
    }
    .SubmitBtn{
        font-weight: 600 !important;
        color: white !important;
        background-color: #17449e !important;
        border: 1px solid white !important;
        display: inline-block;
        padding: 0 30px;
        font-size: .875rem;
        line-height: 38px;
    }
</style>
