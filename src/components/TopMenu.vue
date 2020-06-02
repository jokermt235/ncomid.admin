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
